/*! For license information please see 2094.js.LICENSE.txt */
"use strict";(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[2094],{77867:(t,e,o)=>{o.d(e,{A:()=>g});var n=o(98587),s=o(58168),i=o(96540),l=o(34164),r=o(64111),a=o(11848),c=o(39770),h=o(3541),p=o(14073),C=o(27553),d=o(17245);function f(t){return(0,d.Ay)("MuiDialogContentText",t)}(0,C.A)("MuiDialogContentText",["root"]);var u=o(74848);const m=["children","className"],x=(0,a.Ay)(p.A,{shouldForwardProp:t=>(0,c.A)(t)||"classes"===t,name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,e)=>e.root})({}),g=i.forwardRef((function(t,e){const o=(0,h.A)({props:t,name:"MuiDialogContentText"}),{className:i}=o,a=(0,n.A)(o,m),c=(t=>{const{classes:e}=t,o=(0,r.A)({root:["root"]},f,e);return(0,s.A)({},e,o)})(a);return(0,u.jsx)(x,(0,s.A)({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:a,className:(0,l.A)(c.root,i)},o,{classes:c}))}))},12094:(t,e,o)=>{o.r(e),o.d(e,{ConfirmDialog:()=>C,default:()=>d});var n=o(96540),s=o(86990),i=o(58031),l=o(58763),r=o(22477),a=o(77867),c=o(46831),h=o(5556),p=o.n(h);class C extends n.PureComponent{constructor(t){super(t),this.state={open:this.props.open||!1,title:this.props.title||"Confirm Dialog",text:this.props.text||"Are you sure?",confirmText:this.props.confirmText||"Confirm",cancelText:this.props.cancelText||"Cancel",onClose:this.props.onClose||null,onConfirm:this.props.onConfirm||null,onCancel:this.props.onCancel||null}}static getDerivedStateFromProps(t,e){return e.open!==t.open?{open:t.open}:null}handleClickOpen(){this.setState({open:!0})}handleClose(){this.state.onClose&&"function"==typeof this.state.onClose?this.state.onClose():this.state.onCancel&&"function"==typeof this.state.onCancel&&this.state.onCancel(),this.setState({open:!1})}handleCancel(){this.state.onCancel&&"function"==typeof this.state.onCancel?this.state.onCancel():this.state.onClose&&"function"==typeof this.state.onClose&&this.state.onClose(),this.setState({open:!1})}handleConfirm(){this.state.onConfirm&&"function"==typeof this.state.onConfirm&&this.state.onConfirm(),this.setState({open:!1})}render(){return n.createElement("div",null,n.createElement(i.A,{fullWidth:this.props.fullWidth,maxWidth:this.props.maxWidth,open:this.state.open,onClose:this.handleClose.bind(this),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.createElement(c.A,{id:"alert-dialog-title"},this.state.title),n.createElement(r.A,null,n.createElement(a.A,{id:"alert-dialog-description"},this.state.text)),n.createElement(l.A,null,n.createElement(s.A,{onClick:this.handleCancel.bind(this),variant:"outlined",color:this.props.cancelColor},this.props.cancelIcon," ",this.state.cancelText),n.createElement(s.A,{onClick:this.handleConfirm.bind(this),variant:"contained",color:this.props.confirmColor},this.props.confirmIcon," ",this.state.confirmText))))}}C.propTypes={open:p().bool.isRequired,title:p().string,text:p().string,confirmText:p().string,confirmIcon:p().object,confirmColor:p().string,cancelText:p().string,cancelIcon:p().object,cancelColor:p().string,onClose:p().func,onConfirm:p().func,onCancel:p().func,fullWidth:p().bool,maxWidth:p().string};const d=C}}]);