/**
 * @license Copyright 2020 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Editor for the desktop screen.
 * @author mbordihn@google.com (Markus Bordihn)
 */

import React, { createRef } from 'react';

import Blockly from 'blockly';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import Drawer from '@mui/material/Drawer';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import PropTypes from 'prop-types';
import RedoIcon from '@mui/icons-material/Redo';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import UndoIcon from '@mui/icons-material/Undo';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { BlocklyWorkspace, WorkspaceSvg } from 'react-blockly';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import FileFormat, { ContentType } from '../FileFormat/FileFormat';
import { WindowManager } from '../Desktop/WindowManager';
import LegacyBlocks from './blocks/LegacyBlocks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { WindowResizeEvent } from '../Desktop/WindowManager/Events';
import { javascriptGenerator } from 'blockly/javascript';

import { Toolbar, ToolbarIconButton, ToolbarButton } from '../Toolbar';

import { Database } from '../../utils/db/Database';

import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import styles from './style.module.css';
import './style.global.css';

const basePath = location.host.endsWith('.github.io') ? location.pathname : '/';

/**
 *
 */
export class BlockEditor extends React.PureComponent {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.projectId = props.projectId || uuidv4();
    this.projectName = props.projectName || 'New Project';
    this.blockyWorkspace = null;
    this.codeEditor = createRef();
    this.toolbar = createRef();
    this.fileUploadButton = createRef();
    this.timer = {
      handleXMLChange: null,
    };
    this.isDragging = false;
    this.database = new Database('BlockEditor', this.projectId);
    this.state = {
      file: null,
      showEditor: false,
      showDrawer: false,
      config: {
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 0.9,
          maxScale: 3,
          minScale: 0.5,
          scaleSpeed: 1.1,
        },
        media: basePath + 'assets/blockly/',
        trashcan: false,
      },
      variables: [],
      xml: props.content || '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
    };

    // Adding event listener for window resize, if windowId is set.
    if (this.props.windowId) {
      WindowManager.windowManagerEventTarget.addEventListener(
        'windowResize',
        this.handleWindowResize.bind(this)
      );
    }

    // Loading workspace from database if not empty.
    this.database.get('workspace').then((workspace) => {
      if (workspace) {
        this.loadWorkspace(workspace);
      }
    });

    console.log('Adding block editor with project id: ', this.projectId);
  }

  /**
   *
   */
  showBlockEditor() {
    console.log('Show Block Editor ...');
    this.setState({ showEditor: false }, () => {
      this.resize();
    });
  }

  /**
   *
   */
  async showCodeEditor() {
    console.log('Show Code Editor ...');
    const code = this.getWorkspaceCode();
    if (this.codeEditor) {
      this.codeEditor.current.setValue(code);
    }
    this.setState({ showEditor: true }, () => {
      this.codeEditor.current.resize();
    });
  }

  /**
   * @return {string}
   */
  getWorkspaceCode() {
    let code = javascriptGenerator.workspaceToCode(this.blockyWorkspace) || '';
    if (this.props.template && typeof this.props.template === 'function') {
      code = this.props.template(
        code,
        this.projectId,
        this.projectName,
        this.blockyWorkspace
      );
    }
    return code;
  }

  /**
   * @param {string} xml
   * @return {string}
   */
  praseXML(xml) {
    // Search for legacy blocks and replace them.
    xml = LegacyBlocks.replaceLegacyBlocks(xml);

    // Handle custom XML parsing, if defined.
    if (this.props.parseXML && typeof this.props.parseXML === 'function') {
      xml = this.props.parseXML(xml);
    }
    return xml;
  }

  /**
   * Handle Blocks undo
   */
  handleUndo() {
    console.log('Undo ...');
    this.blockyWorkspace?.undo(false);
  }

  /**
   * Handle Blockly redo
   */
  handleRedo() {
    console.log('Redo ...');
    this.blockyWorkspace?.undo(true);
  }

  /**
   * @param {string} xml
   */
  loadWorkspace(xml) {
    if (!this.blockyWorkspace) {
      return;
    }
    console.log('Loading workspace ...', xml);
    const parsedXML = this.praseXML(xml);
    Blockly.Xml.clearWorkspaceAndLoadFromXml(
      Blockly.utils.xml.textToDom(parsedXML),
      this.blockyWorkspace
    );
    this.setState({ parsedXML });
    this.resize();
    this.refresh();
  }

  /**
   * @param {WorkspaceSvg} blockEditorInstance
   */
  onLoad(blockEditorInstance) {
    this.blockyWorkspace = blockEditorInstance;
    this.blockyWorkspace.addChangeListener(this.handleBlocklyEvent.bind(this));
    this.blockyWorkspace.addChangeListener(Blockly.Events.disableOrphans);
    this.resize();
    this.refresh();
  }

  /**
   * @param {object} event
   */
  handleBlocklyEvent(event) {
    this.isDragging = event.type === 'drag';
  }

  /**
   * @param {WorkspaceSvg} workspace
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars, require-jsdoc
  handleWorkspaceChange(workspace) {
    // Not used.
  }

  /**
   * @param {string} xml
   */
  handleXMLChange(xml) {
    if (this.state.xml == xml || this.isDragging) {
      return;
    }

    // Throttle XML change to avoid performance issues.
    if (this.timer.HandleXMLChange) {
      clearTimeout(this.timer.HandleXMLChange);
    }

    // Trigger XML change after 500ms.
    this.timer.HandleXMLChange = setTimeout(() => {
      console.log('XML change', xml);
      this.setState({ xml: xml });
      const variables = this.blockyWorkspace?.getAllVariables();
      if (variables && variables != this.state.variables) {
        console.log('Variables change', variables);
        this.setState({ variables: variables });
      }
      if (this.props.onChange && typeof this.props.onChange === 'function') {
        this.props.onChange(this.getWorkspaceCode());
      }
    }, 500);
  }

  /**
   * Handle window resize
   * @param {WindowResizeEvent} event
   */
  handleWindowResize(event) {
    if (event.getWindowId() != this.props.windowId) {
      return;
    }
    this.resize();
  }

  /**
   * Open Drawer Menu.
   */
  handleOpenDrawer() {
    this.setState({ showDrawer: true });
  }

  /**
   * Close Drawer Menu.
   */
  handleCloseDrawer() {
    this.setState({ showDrawer: false });
  }

  /**
   * Requests user to open a file.
   */
  handleRequestOpenFile() {
    this.fileUploadButton.current.click();
  }

  /**
   * Open and reads the file.
   * @param {*} event
   */
  handleOpenFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file) {
        console.log('Open a file ...', file);
        const reader = new FileReader();
        reader.onload = (fileEvent) => {
          const data = fileEvent?.target?.result;
          this.handleOpenFileContent(file, data);
        };
        reader.readAsText(file);
      }
    }
    this.handleCloseDrawer();
  }

  /**
   * @param {File} file
   * @param {string|ArrayBuffer|null|undefined} content
   */
  handleOpenFileContent(file, content = '') {
    console.log('Handle file content ...', file.name, content);
    const parsedFile = new FileFormat(content || '');
    console.log('Parsed file', parsedFile);
    if (this.blockyWorkspace) {
      // Handle additional files, if any.
      if (parsedFile.hasFiles()) {
        console.log('Handle additional files ...');
        const files = parsedFile.getFiles();
        files.forEach((file) => {
          console.log('Handle additional file', file);
        });
      }

      // Load XML content.
      if (parsedFile.hasContent(ContentType.BLOCKLY)) {
        this.loadWorkspace(parsedFile.getContent(ContentType.BLOCKLY));
      }

      // Trigger onLoadFile event.
      if (
        this.props.onLoadFile &&
        typeof this.props.onLoadFile === 'function'
      ) {
        this.props.onLoadFile(this.blockyWorkspace);
      }
    }
    this.setState({ file });
  }

  /**
   * Save file.
   */
  handleSave() {
    console.log('Save ...', this.database, this.projectId);
    this.database.put('name', this.projectName);
    this.database.put('workspace', this.state.xml);
    this.database.put('lastUpdate', new Date().toISOString());
  }

  /**
   * Save file as.
   */
  handleSaveAs() {
    console.log('Save as ...');
    const textAsBlob = new Blob([this.state.xml], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.download = `${this.projectName}-${this.projectId}.xml`;
    downloadLink.innerHTML = 'Download File';
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textAsBlob);
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
  }

  /**
   * Reset zoom and center blocks.
   */
  resetZoom() {
    this.blockyWorkspace?.setScale(1);
    this.blockyWorkspace?.scrollCenter();
  }

  /**
   * Refresh editor toolbox.
   */
  refresh() {
    const toolbox = this.blockyWorkspace?.getToolbox();
    if (toolbox) {
      this.blockyWorkspace?.updateToolbox(this.props.toolbox);
      console.log('Refresh toolbox ...');
      toolbox.refreshSelection();
    }
  }

  /**
   * Resize editor content to parent container.
   */
  resize() {
    if (this.blockyWorkspace) {
      const parentElement =
        this.blockyWorkspace.getInjectionDiv().closest('.wb-body') ||
        this.blockyWorkspace.getInjectionDiv().parentElement;
      if (parentElement) {
        const injectionDiv =
          this.blockyWorkspace.getInjectionDiv().parentElement;
        if (injectionDiv && injectionDiv != parentElement) {
          if (this.toolbar.current) {
            injectionDiv.style.height =
              parentElement.clientHeight -
              this.toolbar.current.clientHeight +
              'px';
          } else {
            injectionDiv.style.height = parentElement.clientHeight + 'px';
          }
        }
      }
      window.dispatchEvent(new Event('resize'));
      this.resetZoom();
    }
  }

  /**
   * @return {*}
   */
  getToolboxCategory() {
    const toolboxCategories = {
      kind: 'categoryToolbox',
      contents: [
        {
          kind: 'category',
          name: 'Logic',
          colour: '#5C81A6',
          contents: [
            {
              kind: 'block',
              type: 'controls_if',
            },
            {
              kind: 'block',
              type: 'logic_compare',
            },
          ],
        },
        {
          kind: 'category',
          name: 'Math',
          colour: '#5CA65C',
          contents: [
            {
              kind: 'block',
              type: 'math_round',
            },
            {
              kind: 'block',
              type: 'math_number',
            },
          ],
        },
        {
          kind: 'category',
          name: 'Custom',
          colour: '#5CA699',
          contents: [
            {
              kind: 'block',
              type: 'new_boundary_function',
            },
            {
              kind: 'block',
              type: 'return',
            },
          ],
        },
      ],
    };
    return toolboxCategories;
  }

  /**
   * @return {Object}
   */
  render() {
    return (
      <React.StrictMode>
        <Box sx={{ display: this.state.showEditor ? 'none' : 'block' }}>
          <Toolbar>
            <ToolbarIconButton
              aria-label="menu"
              onClick={this.handleOpenDrawer.bind(this)}
            >
              <MenuIcon />
            </ToolbarIconButton>
            {(this.state.file || true) && (
              <ToolbarIconButton
                aria-label="save"
                onClick={this.handleSave.bind(this)}
              >
                <SaveIcon />
              </ToolbarIconButton>
            )}
            {!this.state.file && (
              <ToolbarIconButton
                aria-label="save_as"
                onClick={this.handleSaveAs.bind(this)}
              >
                <SaveAsIcon />
              </ToolbarIconButton>
            )}
            <ToolbarIconButton
              aria-label="undo"
              onClick={this.handleUndo.bind(this)}
            >
              <UndoIcon />
            </ToolbarIconButton>
            <ToolbarIconButton
              aria-label="redo"
              onClick={this.handleRedo.bind(this)}
            >
              <RedoIcon />
            </ToolbarIconButton>
            <ToolbarButton variant="contained">
              Create new Variable
            </ToolbarButton>
            {this.codeEditor && (
              <ToolbarIconButton
                aria-label="code"
                onClick={this.showCodeEditor.bind(this)}
              >
                <CodeIcon />
              </ToolbarIconButton>
            )}
          </Toolbar>
          <Drawer
            anchor="left"
            open={this.state.showDrawer}
            onClose={this.handleCloseDrawer.bind(this)}
          >
            <MenuList sx={{ minWidth: '250px' }}>
              <MenuItem onClick={this.handleRequestOpenFile.bind(this)}>
                <ListItemIcon>
                  <FileOpenIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Open File</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  -
                </Typography>
                <input
                  ref={this.fileUploadButton}
                  type="file"
                  onChange={this.handleOpenFile.bind(this)}
                  hidden
                />
              </MenuItem>
            </MenuList>
          </Drawer>
          <Box>
            <BlocklyWorkspace
              className={this.props.windowId ? styles.fillWindow : styles.fill}
              toolboxConfiguration={
                this.props.toolbox || this.getToolboxCategory()
              }
              workspaceConfiguration={this.state.config}
              initialXml={this.props.content || ''}
              onInject={this.onLoad.bind(this)}
              onWorkspaceChange={this.handleWorkspaceChange.bind(this)}
              onXmlChange={this.handleXMLChange.bind(this)}
            />
          </Box>
        </Box>
        <Box sx={{ display: this.state.showEditor ? 'block' : 'none' }}>
          <CodeEditor
            windowId={this.props.windowId}
            projectId={this.projectId}
            blockEditor={this}
            ref={this.codeEditor}
          ></CodeEditor>
        </Box>
      </React.StrictMode>
    );
  }
}

BlockEditor.propTypes = {
  content: PropTypes.string,
  projectId: PropTypes.string,
  projectName: PropTypes.string,
  template: PropTypes.func,
  parseXML: PropTypes.func,
  onChange: PropTypes.func,
  onLoadFile: PropTypes.func,
  onSaveFile: PropTypes.func,
  toolbox: PropTypes.object,
  windowId: PropTypes.string,
};
