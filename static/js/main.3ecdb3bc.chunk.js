(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(33)},17:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(17),n(6)),s=n(7),l=n(10),d=n(8),m=n(11),u=n(1),b=(n(18),n(31),n(32),n(9)),h=n.n(b),w="# This is an H1 \r\n## This is an H2 \r\n[Link] \r\n Below is a block of text \r\n -------------------\r\n> This is a \r\n> block of text \r\n - *Bullet Item 1* \r\n - **Bullet Item 2** \r\n \r\n Here is an Image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1') \r\n \r\n Here is `inline code` \r\n \r\n And here is a block of code: \r\n```\r\nvar formula = 2 + 2 \r\nconsole.log(formula)\r\n```\r\n **Please feel free to change the code and play with Markdown!** \r\n \r\n [Link]: https://www.duckduckgo.com",k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).outputHandler=function(e){this.setState({markdown:e})},n.clearBox=function(){this.setState({markdown:" "})},n.resetBox=function(){this.setState({markdown:w})},n.state={markdown:w},n.outputHandler=n.outputHandler.bind(Object(u.a)(Object(u.a)(n))),n.clearBox=n.clearBox.bind(Object(u.a)(Object(u.a)(n))),n.resetBox=n.resetBox.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark",id:"title-box"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Markdown Previewer")),r.a.createElement("div",{className:"container form-group",id:"editor-box"},r.a.createElement("textarea",{className:"form-control",rows:"6",placeholder:"Enter markdown here.",id:"editor",value:this.state.markdown,onChange:function(t){return e.outputHandler(t.target.value)}}),r.a.createElement("button",{className:"btn btn-primary",onClick:this.clearBox},"Clear"),r.a.createElement("button",{className:"btn btn-secondary",onClick:this.resetBox},"Reset"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:h()(this.state.markdown)},id:"preview"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.3ecdb3bc.chunk.js.map