(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var a=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),r=n("./node_modules/react/index.js"),o=n.n(r),l=n("./src/elements/index.ts"),i=n("./node_modules/docz/dist/index.m.js"),u=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,a=e.secondaryName,r=e.secondaryColor,u=e.url,c=void 0===u?{}:/^\/[a-z]/.test(u)?{as:i.c,to:u}:{as:"a",href:u,target:"_blank"};return o.a.createElement(l.g,null,o.a.createElement(l.s.Group,Object.assign({gapless:!0},c),o.a.createElement(l.s,{color:n},t),o.a.createElement(l.s,{color:r},a)))},{Group:function(e){var t=e.children;return o.a.createElement(l.i,{kind:"group",children:t})}}),c=function(e){var t=e.asType;return o.a.createElement(u,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},s=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,a=void 0!==t?"Bulma":"n/a",r=void 0!==t?"primary":"dark";return o.a.createElement(u,{primaryName:"docs",primaryColor:"light",secondaryName:a,secondaryColor:r,url:n})},m=function(e){var t=e.customize,n=!0===t?"yes":"no",a=!0===t?"success":"danger";return o.a.createElement(u,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:a,url:"/architecture/customize"})},d=function(e){var t=e.asType,n=e.docPath,a=e.customize;return o.a.createElement(u.Group,null,o.a.createElement(c,{asType:t}),o.a.createElement(m,{customize:a}),o.a.createElement(s,{docPath:n}))};function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},E=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return a=this,r=(e=h(t)).call.apply(e,[this].concat(u)),n=!r||"object"!==p(r)&&"function"!==typeof r?y(a):r,g(y(y(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return o.a.createElement("tbody",null,v(e).map(function(e){var t=e.key,a=e.value;return n.renderRow(t,a)}))}),g(y(y(n)),"renderCellName",function(e){return o.a.createElement(l.r.Cell,null,o.a.createElement("code",null,e))}),g(y(y(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return o.a.createElement(l.r.Cell,t)}),g(y(y(n)),"renderCellType",function(e,t){var a=n.props.components.tooltip,r=void 0===t?e:o.a.createElement(a,{text:t},e);return o.a.createElement(l.r.Cell,null,o.a.createElement("code",null,r))}),g(y(y(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?o.a.createElement(l.r.Cell,null):o.a.createElement(l.r.Cell,null,e)}),g(y(y(n)),"renderCellDefaultValue",function(e){if(void 0===e)return o.a.createElement(l.r.Cell,{textColor:"grey-light"},o.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return o.a.createElement(l.r.Cell,null,o.a.createElement("code",null,t))}),g(y(y(n)),"renderRow",function(e,t){return o.a.createElement(l.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?o.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return o.a.createElement(l.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Property"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&f(n.prototype,a),r&&f(n,r),t}(),C=Object(a.withMDXComponents)(E);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={description:o.a.createElement("span",null,"the React Component or JSX Element (e.g. ",o.a.createElement("code",null,'"div"')," or"," ",o.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},M={description:o.a.createElement("span",null,"a handle to the underlying ",o.a.createElement("code",null,"React Component")," or"," ",o.a.createElement("code",null,"JSX Element")),typeName:"Ref"},P=function(e){var t=e.asType,n=e.components,a=e.customize,r=e.docPath,i=e.name,u=e.props,c={asType:t,customize:a,docPath:r};return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.u,{as:"h4",size:4},i),o.a.createElement(d,c),o.a.createElement(E,{components:n,props:u}))},j=(Object(a.withMDXComponents)(P),Object(a.withMDXComponents)(function(e){for(var t=e.component,n=e.components,a=e.customize,r=e.docPath,l=e.props,i=t.defaultProps.as,u="string"===typeof i?i:void 0!==i.displayName?i.displayName:JSON.stringify(i),c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){O(e,t,n[t])})}return e}({as:w,ref:M},l),s=Object.keys(c),m=0;m<s.length;m++){var d=s[m],p=t.defaultProps[d];void 0!==p&&(c[d].defaultValue=JSON.stringify(p))}return o.a.createElement(P,{asType:u,components:n,customize:a,docPath:r,name:t.displayName,props:c})})),S=n("./node_modules/react-dom/index.js"),x=n.n(S);function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){q(e,t,n[t])})}return e}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];return a=this,r=(e=D(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==_(r)&&"function"!==typeof r?k(a):r,q(k(k(n)),"ref",o.a.createRef()),q(k(k(n)),"updateHeightEnabled",!1),q(k(k(n)),"updateHeightTimeout",void 0),q(k(k(n)),"iframeRoot",void 0),q(k(k(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var a=e[t];"stylesheet"===a.rel&&n.ref.current.contentDocument.head.appendChild(a.cloneNode(!0))}for(var r=Array.from(document.head.getElementsByTagName("style")),o=0;o<r.length;o++){var l=r[o];n.ref.current.contentDocument.head.appendChild(l.cloneNode(!0))}}}),q(k(k(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),q(k(k(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),q(k(k(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,o.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return o.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:T({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?x.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):x.a.createPortal(e,this.iframeRoot):void 0)}}])&&N(n.prototype,a),r&&N(n,r),t}();function B(e){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}q(L,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var z={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},X=function(e){function t(){var e,n,a,r,l,i,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,s=new Array(c),m=0;m<c;m++)s[m]=arguments[m];return a=this,n=!(r=(e=H(t)).call.apply(e,[this].concat(s)))||"object"!==B(r)&&"function"!==typeof r?A(a):r,l=A(A(n)),u=function(e,t){var n;switch(B(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var a="".concat(e).concat(void 0!==n?"=".concat(n):"");return o.a.createElement("code",{key:e,style:{marginRight:"10px"}},a)},(i="renderProp")in l?Object.defineProperty(l,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[i]=u,n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.index,r=t.props,i=void 0!==a&&0!==a?o.a.createElement("hr",{style:z}):void 0;return o.a.createElement(l.a,null,i,o.a.createElement(l.u,{as:"h6",size:6},Object.keys(r).map(function(t){return e.renderProp(t,r[t])})),n)}}])&&R(n.prototype,a),r&&R(n,r),t}(),U=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return j}),n.d(t,"f",function(){return w}),n.d(t,"h",function(){return M}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return L}),n.d(t,"d",function(){return X}),n.d(t,"e",function(){return C}),n.d(t,"g",function(){return U})},"./src/components/modal/__docs__/modal.docs.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),i=n("./node_modules/@fortawesome/react-fontawesome/index.es.js"),u=n("./node_modules/docz/dist/index.m.js"),c=n("./src/__docs__/components/index.ts"),s=n("./src/components/modal/modal.tsx"),m=n("./src/components/index.ts"),d=n("./src/elements/index.ts"),p=n("./src/elements/button/index.ts");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return a=this,r=(e=b(t)).call.apply(e,[this].concat(l)),n=!r||"object"!==f(r)&&"function"!==typeof r?g(a):r,v(g(g(n)),"state",{active:!1}),v(g(g(n)),"close",function(){n.setState({active:!1})}),v(g(g(n)),"open",function(){n.setState({active:!0})}),n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{onClick:this.open},"Open modal"),r.a.createElement(s.a,Object.assign({active:this.state.active,onClose:this.close},this.props.modalProps),this.props.children))}}])&&h(n.prototype,a),o&&h(n,o),t}();function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}v(E,"defaultProps",{modalProps:{}}),n.d(t,"default",function(){return S});var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=M(this,P(t).call(this,e))).layout=null,n}var n,a,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=O(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"modal"}},"Modal"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A classic ",r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"modal")," overlay, in which you can include any content you want."),r.a.createElement(d.f,null,r.a.createElement("p",null,"The ",r.a.createElement("code",null,"<Modal>")," structure is very simple:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"<Modal>"),": the main container",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"<Modal.Background>"),": a transparent overlay that can act as a click target to close the ",r.a.createElement("code",null,"<Modal>")),r.a.createElement("li",null,r.a.createElement("code",null,"<Modal.Content>"),": a horizontally and vertically centered container, with a maximum width of 640px, in which you can include ",r.a.createElement("em",null,"any")," content"),r.a.createElement("li",null,r.a.createElement("code",null,"<Modal.Close>"),": a simple cross located in the top right corner"))))),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-modal"}},"Example modal"),r.a.createElement(u.e,{__position:1,__code:'<Frame forceHeight style={{ height: \'350px\' }}>\n  {/* SimpleModalManager is a reference implementation for the docs! */}\n  {({ document }) => (\n    <SimpleModalManager modalProps={{ closeOnBlur: true, document }}>\n      <Modal.Background />\n      <Modal.Content>\n        <Box>\n          <Media>\n            <Media.Item as="figure" align="left">\n              <Image.Container as="p" size={64}>\n                <Image\n                  alt="64x64"\n                  src="https://bulma.io/images/placeholders/128x128.png"\n                />\n              </Image.Container>\n            </Media.Item>\n            <Media.Item>\n              <Content>\n                <p>\n                  <strong>John Smith</strong> <small>@johnsmith</small>{\' \'}\n                  <small>31m</small>\n                  <br />\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                  Aenean efficitur sit amet massa fringilla egestas. Nullam\n                  condimentum luctus turpis.\n                </p>\n              </Content>\n              <Level breakpoint="mobile">\n                <Level.Item align="left">\n                  <Level.Item as="a">\n                    <Icon size="small">\n                      <FontAwesomeIcon icon={faRetweet} />\n                    </Icon>\n                  </Level.Item>\n                  <Level.Item as="a">\n                    <Icon size="small">\n                      <FontAwesomeIcon icon={faHeart} />\n                    </Icon>\n                  </Level.Item>\n                </Level.Item>\n              </Level>\n            </Media.Item>\n          </Media>\n        </Box>\n      </Modal.Content>\n      <Modal.Close />\n    </SimpleModalManager>\n  )}\n</Frame>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,Frame:c.c,ForwardRefAsExoticComponentDoc:c.b,mapEnumerable:c.g,Modal:s.a,Level:m.a,Media:m.b,Box:d.b,Button:d.c,Content:d.f,Delete:d.h,Icon:d.m,Image:d.n,Notification:d.q,Title:d.u,SimpleModalManager:E}},r.a.createElement(c.c,{forceHeight:!0,style:{height:"350px"}},function(e){var t=e.document;return r.a.createElement(E,{modalProps:{closeOnBlur:!0,document:t}},r.a.createElement(s.a.Background,null),r.a.createElement(s.a.Content,null,r.a.createElement(d.b,null,r.a.createElement(m.b,null,r.a.createElement(m.b.Item,{as:"figure",align:"left"},r.a.createElement(d.n.Container,{as:"p",size:64},r.a.createElement(d.n,{alt:"64x64",src:"https://bulma.io/images/placeholders/128x128.png"}))),r.a.createElement(m.b.Item,null,r.a.createElement(d.f,null,r.a.createElement("p",null,r.a.createElement("strong",null,"John Smith")," ",r.a.createElement("small",null,"@johnsmith")," ",r.a.createElement("small",null,"31m"),r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.")),r.a.createElement(m.a,{breakpoint:"mobile"},r.a.createElement(m.a.Item,{align:"left"},r.a.createElement(m.a.Item,{as:"a"},r.a.createElement(d.m,{size:"small"},r.a.createElement(i.a,{icon:l.C}))),r.a.createElement(m.a.Item,{as:"a"},r.a.createElement(d.m,{size:"small"},r.a.createElement(i.a,{icon:l.t}))))))))),r.a.createElement(s.a.Close,null))})),r.a.createElement(d.q,{color:"warning"},r.a.createElement("strong",null,"Note:")," the ",r.a.createElement("code",null,"<SimpleModalManager>")," used in these playgrounds is a reference implementation for the docs, and is not available in the release. People are usually particular about how they want to implement their modal workflows, so ",r.a.createElement("strong",null,"rbx")," provides a ",r.a.createElement("em",null,"foundation"),", not an ",r.a.createElement("em",null,"opinion"),".",r.a.createElement("br",null),r.a.createElement("br",null),"For more information about designing your modal workflow, ",r.a.createElement("a",{target:"_blank",href:"https://stackoverflow.com/a/35641680/465164"},"review Dan Abramov's suggestions on StackOverflow"),"."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"image-modal"}},"Image modal"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Modals can contain anything, for example, an image."),r.a.createElement(u.e,{__position:3,__code:'<Frame forceHeight style={{ height: \'500px\' }}>\n  {/* SimpleModalManager is a reference implementation for the docs! */}\n  {({ document }) => (\n    <SimpleModalManager modalProps={{ closeOnBlur: true, document }}>\n      <Modal.Background />\n      <Modal.Content>\n        <Image.Container as="p" size="4by3">\n          <Image src="https://bulma.io/images/placeholders/1280x960.png" />\n        </Image.Container>\n      </Modal.Content>\n      <Modal.Close />\n    </SimpleModalManager>\n  )}\n</Frame>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,Frame:c.c,ForwardRefAsExoticComponentDoc:c.b,mapEnumerable:c.g,Modal:s.a,Level:m.a,Media:m.b,Box:d.b,Button:d.c,Content:d.f,Delete:d.h,Icon:d.m,Image:d.n,Notification:d.q,Title:d.u,SimpleModalManager:E}},r.a.createElement(c.c,{forceHeight:!0,style:{height:"500px"}},function(e){var t=e.document;return r.a.createElement(E,{modalProps:{closeOnBlur:!0,document:t}},r.a.createElement(s.a.Background,null),r.a.createElement(s.a.Content,null,r.a.createElement(d.n.Container,{as:"p",size:"4by3"},r.a.createElement(d.n,{src:"https://bulma.io/images/placeholders/1280x960.png"}))),r.a.createElement(s.a.Close,null))})),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"card-modal"}},"Card modal"),r.a.createElement(o.MDXTag,{name:"p",components:t},"This is a more classic modal with a ",r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"p"},"head"),", ",r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"p"},"body")," and ",r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"p"},"foot"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},'Notice that the "close" button (the ',r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Delete>")," component) in the card header automatically gains the ability to close the modal."),r.a.createElement(u.e,{__position:4,__code:'<Frame forceHeight style={{ height: \'500px\' }}>\n  {/* SimpleModalManager is a reference implementation for the docs! */}\n  {({ document }) => (\n    <SimpleModalManager modalProps={{ closeOnBlur: true, document }}>\n      <Modal.Background />\n      <Modal.Card>\n        <Modal.Card.Head>\n          <Modal.Card.Title>Modal Title</Modal.Card.Title>\n          <Delete />\n        </Modal.Card.Head>\n        <Modal.Card.Body>\n          <Content>\n            <Title>Hello world</Title>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n              accumsan, metus ultrices eleifend gravida, nulla nunc varius\n              lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper\n              dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis\n              neque.\n            </p>\n            <Title as="h2">Second level</Title>\n            <p>\n              Curabitur accumsan turpis pharetra{\' \'}\n              <strong>augue tincidunt</strong> blandit. Quisque condimentum\n              maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna\n              vel cursus venenatis. Suspendisse potenti. Etiam mattis sem\n              rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et\n              neque nisl.\n            </p>\n            <ul>\n              <li>\n                In fermentum leo eu lectus mollis, quis dictum mi aliquet.\n              </li>\n              <li>\n                Morbi eu nulla lobortis, lobortis est in, fringilla felis.\n              </li>\n              <li>\n                Aliquam nec felis in sapien venenatis viverra fermentum nec\n                lectus.\n              </li>\n              <li>Ut non enim metus.</li>\n            </ul>\n            <Title as="h3">Third level</Title>\n            <p>\n              Quisque ante lacus, malesuada ac auctor vitae, congue{\' \'}\n              <a href="#non-ante">non ante</a>. Phasellus lacus ex, semper ac\n              tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.\n            </p>\n            <Content.OrderedList>\n              <Content.OrderedList.Item>\n                Donec blandit a lorem id convallis.\n              </Content.OrderedList.Item>\n              <Content.OrderedList.Item>\n                Cras gravida arcu at diam gravida gravida.\n              </Content.OrderedList.Item>\n              <Content.OrderedList.Item>\n                Integer in volutpat libero.\n              </Content.OrderedList.Item>\n              <Content.OrderedList.Item>\n                Donec a diam tellus.\n              </Content.OrderedList.Item>\n              <Content.OrderedList.Item>\n                Aenean nec tortor orci.\n              </Content.OrderedList.Item>\n              <Content.OrderedList.Item>\n                Quisque aliquam cursus urna, non bibendum massa viverra eget.\n              </Content.OrderedList.Item>\n              <Content.OrderedList.Item>\n                Vivamus maximus ultricies pulvinar.\n              </Content.OrderedList.Item>\n            </Content.OrderedList>\n            <blockquote>\n              Ut venenatis, nisl scelerisque sollicitudin fermentum, quam\n              libero hendrerit ipsum, ut blandit est tellus sit amet turpis.\n            </blockquote>\n            <p>\n              Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et{\' \'}\n              <em>justo sodales</em> elementum. Maecenas ultrices lacus quis\n              neque consectetur, et lobortis nisi molestie.\n            </p>\n            <p>\n              Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi.\n              Donec mattis vulputate risus in luctus. Maecenas vestibulum\n              interdum commodo.\n            </p>\n            <p>\n              Suspendisse egestas sapien non felis placerat elementum. Morbi\n              tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.\n              Nulla facilisi. Nullam ac erat ante.\n            </p>\n            <Title as="h4">Fourth level</Title>\n            <p>\n              Nulla efficitur eleifend nisi, sit amet bibendum sapien\n              fringilla ac. Mauris euismod metus a tellus laoreet, at\n              elementum ex efficitur.\n            </p>\n            <p>\n              Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue\n              cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est\n              maximus est porta condimentum in eu justo. Nulla id iaculis\n              sapien.\n            </p>\n            <p>\n              Phasellus porttitor enim id metus volutpat ultricies. Ut nisi\n              nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis\n              lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula\n              sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,\n              mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac\n              posuere est. Nunc ultricies nunc neque, vitae ultricies ex\n              sodales quis. Aliquam eu nibh in libero accumsan pulvinar.\n              Nullam nec nisl placerat, pretium metus vel, euismod ipsum.\n              Proin tempor cursus nisl vel condimentum. Nam pharetra varius\n              metus non pellentesque.\n            </p>\n            <Title as="h5">Fifth level</Title>\n            <p>\n              Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed\n              tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet\n              ligula mi, in luctus elit volutpat porta. Phasellus molestie\n              diam vel nisi sodales, a eleifend augue laoreet. Sed nec\n              eleifend justo. Nam et sollicitudin odio.\n            </p>\n            <Title as="h6">Sixth level</Title>\n            <p>\n              Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec\n              pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.\n              Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus\n              nunc, scelerisque quis enim vitae, malesuada ultrices turpis.\n              Nunc vitae maximus purus, nec consectetur dui. Suspendisse\n              euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed\n              varius sapien odio vitae est. Etiam at cursus metus.\n            </p>\n          </Content>\n        </Modal.Card.Body>\n        <Modal.Card.Foot>\n          <Button color="success">Save changes</Button>\n          <Button>Cancel</Button>\n        </Modal.Card.Foot>\n      </Modal.Card>\n    </SimpleModalManager>\n  )}\n</Frame>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,Frame:c.c,ForwardRefAsExoticComponentDoc:c.b,mapEnumerable:c.g,Modal:s.a,Level:m.a,Media:m.b,Box:d.b,Button:d.c,Content:d.f,Delete:d.h,Icon:d.m,Image:d.n,Notification:d.q,Title:d.u,SimpleModalManager:E}},r.a.createElement(c.c,{forceHeight:!0,style:{height:"500px"}},function(e){var t=e.document;return r.a.createElement(E,{modalProps:{closeOnBlur:!0,document:t}},r.a.createElement(s.a.Background,null),r.a.createElement(s.a.Card,null,r.a.createElement(s.a.Card.Head,null,r.a.createElement(s.a.Card.Title,null,"Modal Title"),r.a.createElement(d.h,null)),r.a.createElement(s.a.Card.Body,null,r.a.createElement(d.f,null,r.a.createElement(d.u,null,"Hello world"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque."),r.a.createElement(d.u,{as:"h2"},"Second level"),r.a.createElement("p",null,"Curabitur accumsan turpis pharetra"," ",r.a.createElement("strong",null,"augue tincidunt")," blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl."),r.a.createElement("ul",null,r.a.createElement("li",null,"In fermentum leo eu lectus mollis, quis dictum mi aliquet."),r.a.createElement("li",null,"Morbi eu nulla lobortis, lobortis est in, fringilla felis."),r.a.createElement("li",null,"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."),r.a.createElement("li",null,"Ut non enim metus.")),r.a.createElement(d.u,{as:"h3"},"Third level"),r.a.createElement("p",null,"Quisque ante lacus, malesuada ac auctor vitae, congue"," ",r.a.createElement("a",{href:"#non-ante"},"non ante"),". Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus."),r.a.createElement(d.f.OrderedList,null,r.a.createElement(d.f.OrderedList.Item,null,"Donec blandit a lorem id convallis."),r.a.createElement(d.f.OrderedList.Item,null,"Cras gravida arcu at diam gravida gravida."),r.a.createElement(d.f.OrderedList.Item,null,"Integer in volutpat libero."),r.a.createElement(d.f.OrderedList.Item,null,"Donec a diam tellus."),r.a.createElement(d.f.OrderedList.Item,null,"Aenean nec tortor orci."),r.a.createElement(d.f.OrderedList.Item,null,"Quisque aliquam cursus urna, non bibendum massa viverra eget."),r.a.createElement(d.f.OrderedList.Item,null,"Vivamus maximus ultricies pulvinar.")),r.a.createElement("blockquote",null,"Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis."),r.a.createElement("p",null,"Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et"," ",r.a.createElement("em",null,"justo sodales")," elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie."),r.a.createElement("p",null,"Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo."),r.a.createElement("p",null,"Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante."),r.a.createElement(d.u,{as:"h4"},"Fourth level"),r.a.createElement("p",null,"Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur."),r.a.createElement("p",null,"Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien."),r.a.createElement("p",null,"Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque."),r.a.createElement(d.u,{as:"h5"},"Fifth level"),r.a.createElement("p",null,"Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio."),r.a.createElement(d.u,{as:"h6"},"Sixth level"),r.a.createElement("p",null,"Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus."))),r.a.createElement(s.a.Card.Foot,null,r.a.createElement(d.c,{color:"success"},"Save changes"),r.a.createElement(d.c,null,"Cancel"))))})),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),r.a.createElement(c.b,{component:s.a,docPath:"/components/modal",props:{active:{description:"whether the modal is visible",typeName:"boolean"},closeOnBlur:{description:"whether the modal should close when a click happens outside its element",typeName:"boolean"},closeOnEsc:{description:"whether the modal should close when the <ESC> key is pressed",defaultValue:"true",typeName:"boolean"},containerClassName:{description:"the name of the container for the React Portal to mount in",typeName:"string"},document:{description:"the document to contain the portal (useful for launching in an iframe)",typeName:"Document"},onClose:{description:"a callback when the Modal should be closed (usually due to closeOnBlur, closeOnEsc, or manually toggling a close button)",typeName:"() => void"}}}),r.a.createElement(c.b,{component:s.a.Background,docPath:"/components/modal",props:{onClick:{description:"callback when the component is clicked",typeName:"(event: React.MouseEvent) => void"}}}),r.a.createElement(c.b,{component:s.a.Card.Body,docPath:"/components/modal"}),r.a.createElement(c.b,{component:s.a.Card.Foot,docPath:"/components/modal"}),r.a.createElement(c.b,{component:s.a.Card.Title,docPath:"/components/modal"}),r.a.createElement(c.b,{component:s.a.Card,docPath:"/components/modal"}),r.a.createElement(c.b,{component:s.a.Close,docPath:"/components/modal",props:{onClick:{description:"callback when the component is clicked",typeName:"(event: React.MouseEvent) => void"}}}),r.a.createElement(c.b,{component:s.a.Content,docPath:"/components/modal"}))}}])&&w(n.prototype,a),p&&w(n,p),t}()}}]);
//# sourceMappingURL=src-components-modal-docs-modal-docs.58719c3c4e37a33d4c3d.js.map