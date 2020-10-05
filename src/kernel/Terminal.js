/**
 * @fileoverview Virtual Terminal for the kernel.
 *
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
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */

import { processManager as StaticProcessManager } from './Process';

/**
 * Virtual terminal for output.
 */
export class Terminal {
  /**
   * @param {object} kernel
   * @param {object} processManager
   * @constructor
   */
  constructor(kernel, processManager = StaticProcessManager) {
    // Register kernel instance
    this.kernel = kernel;

    // Register TTY instance
    this.tty = kernel ? kernel.requestTty() : 100;

    // Terminal prefix
    this.prefix = 'vterm ' + this.tty + ':';

    // Register Process
    this.process = processManager.registerProcess(
      this,
      kernel ? kernel.process.pid : 1000
    );

    /** @type {boolean} */
    this.locked = false;

    this.command = '';
  }

  /**
   * @param {*} text
   */
  writeResponse(text) {
    console.log(this.prefix, text);
  }

  /**
   * Lock terminal for additional input.
   */
  lock() {
    this.locked = true;
  }

  /**
   * Unlock terminal for additional input.
   */
  unlock() {
    this.locked = false;
  }
}