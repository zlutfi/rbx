(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./src/elements/index.ts"),l=n("./node_modules/docz/dist/index.m.js"),s=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,r=e.secondaryName,o=e.secondaryColor,s=e.url,c=void 0===s?{}:/^\/[a-z]/.test(s)?{as:l.c,to:s}:{as:"a",href:s,target:"_blank"};return a.a.createElement(i.g,null,a.a.createElement(i.s.Group,Object.assign({gapless:!0},c),a.a.createElement(i.s,{color:n},t),a.a.createElement(i.s,{color:o},r)))},{Group:function(e){var t=e.children;return a.a.createElement(i.i,{kind:"group",children:t})}}),c=function(e){var t=e.asType;return a.a.createElement(s,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},u=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,r=void 0!==t?"Bulma":"n/a",o=void 0!==t?"primary":"dark";return a.a.createElement(s,{primaryName:"docs",primaryColor:"light",secondaryName:r,secondaryColor:o,url:n})},m=function(e){var t=e.customize,n=!0===t?"yes":"no",r=!0===t?"success":"danger";return a.a.createElement(s,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:r,url:"/architecture/customize"})},p=function(e){var t=e.asType,n=e.docPath,r=e.customize;return a.a.createElement(s.Group,null,a.a.createElement(c,{asType:t}),a.a.createElement(m,{customize:r}),a.a.createElement(u,{docPath:n}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=this,o=(e=y(t)).call.apply(e,[this].concat(s)),n=!o||"object"!==d(o)&&"function"!==typeof o?b(r):o,h(b(b(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return a.a.createElement("tbody",null,E(e).map(function(e){var t=e.key,r=e.value;return n.renderRow(t,r)}))}),h(b(b(n)),"renderCellName",function(e){return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,e))}),h(b(b(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return a.a.createElement(i.r.Cell,t)}),h(b(b(n)),"renderCellType",function(e,t){var r=n.props.components.tooltip,o=void 0===t?e:a.a.createElement(r,{text:t},e);return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,o))}),h(b(b(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?a.a.createElement(i.r.Cell,null):a.a.createElement(i.r.Cell,null,e)}),h(b(b(n)),"renderCellDefaultValue",function(e){if(void 0===e)return a.a.createElement(i.r.Cell,{textColor:"grey-light"},a.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,t))}),h(b(b(n)),"renderRow",function(e,t){return a.a.createElement(i.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?a.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return a.a.createElement(i.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&f(n.prototype,r),o&&f(n,o),t}(),O=Object(r.withMDXComponents)(v);function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D={description:a.a.createElement("span",null,"the React Component or JSX Element (e.g. ",a.a.createElement("code",null,'"div"')," or"," ",a.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},_={description:a.a.createElement("span",null,"a handle to the underlying ",a.a.createElement("code",null,"React Component")," or"," ",a.a.createElement("code",null,"JSX Element")),typeName:"Ref"},w=function(e){var t=e.asType,n=e.components,r=e.customize,o=e.docPath,l=e.name,s=e.props,c={asType:t,customize:r,docPath:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.u,{as:"h4",size:4},l),a.a.createElement(p,c),a.a.createElement(v,{components:n,props:s}))},P=(Object(r.withMDXComponents)(w),Object(r.withMDXComponents)(function(e){for(var t=e.component,n=e.components,r=e.customize,o=e.docPath,i=e.props,l=t.defaultProps.as,s="string"===typeof l?l:void 0!==l.displayName?l.displayName:JSON.stringify(l),c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({as:D,ref:_},i),u=Object.keys(c),m=0;m<u.length;m++){var p=u[m],d=t.defaultProps[p];void 0!==d&&(c[p].defaultValue=JSON.stringify(d))}return a.a.createElement(w,{asType:s,components:n,customize:r,docPath:o,name:t.displayName,props:c})})),S=n("./node_modules/react-dom/index.js"),M=n.n(S);function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){A(e,t,n[t])})}return e}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return r=this,o=(e=k(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==T(o)&&"function"!==typeof o?z(r):o,A(z(z(n)),"ref",a.a.createRef()),A(z(z(n)),"updateHeightEnabled",!1),A(z(z(n)),"updateHeightTimeout",void 0),A(z(z(n)),"iframeRoot",void 0),A(z(z(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var r=e[t];"stylesheet"===r.rel&&n.ref.current.contentDocument.head.appendChild(r.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),a=0;a<o.length;a++){var i=o[a];n.ref.current.contentDocument.head.appendChild(i.cloneNode(!0))}}}),A(z(z(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),A(z(z(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),A(z(z(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:x({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?M.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):M.a.createPortal(e,this.iframeRoot):void 0)}}])&&C(n.prototype,r),o&&C(n,o),t}();function B(e){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}A(H,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var U={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},F=function(e){function t(){var e,n,r,o,i,l,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,u=new Array(c),m=0;m<c;m++)u[m]=arguments[m];return r=this,n=!(o=(e=R(t)).call.apply(e,[this].concat(u)))||"object"!==B(o)&&"function"!==typeof o?X(r):o,i=X(X(n)),s=function(e,t){var n;switch(B(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var r="".concat(e).concat(void 0!==n?"=".concat(n):"");return a.a.createElement("code",{key:e,style:{marginRight:"10px"}},r)},(l="renderProp")in i?Object.defineProperty(i,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[l]=s,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.index,o=t.props,l=void 0!==r&&0!==r?a.a.createElement("hr",{style:U}):void 0;return a.a.createElement(i.a,null,l,a.a.createElement(i.u,{as:"h6",size:6},Object.keys(o).map(function(t){return e.renderProp(t,o[t])})),n)}}])&&q(n.prototype,r),o&&q(n,o),t}(),V=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return P}),n.d(t,"f",function(){return D}),n.d(t,"h",function(){return _}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return H}),n.d(t,"d",function(){return F}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return V})},"./src/components/message/__docs__/message.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./src/__docs__/components/index.ts"),s=n("./src/base/helpers/variables.ts"),c=n("./src/elements/index.ts"),u=n("./src/components/message/message.tsx");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,y(t).call(this,e))).layout=null,n}var n,r,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=p(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"message"}},"Message"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Colored ",o.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"message")," blocks, to emphasize part of your page."),o.a.createElement(i.e,{__position:0,__code:"<Message>\n  <Message.Header>\n    <p>Hello world</p>\n    <Delete as=\"button\" />\n  </Message.Header>\n  <Message.Body>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec\n    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n    diam, et dictum <a href=\"#felis\">felis venenatis</a> efficitur. Aenean ac{' '}\n    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et\n    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a\n    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  </Message.Body>\n</Message>",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:s.a,Delete:c.h,Message:u.b,MESSAGE_DEFAULTS:u.a}},o.a.createElement(u.b,null,o.a.createElement(u.b.Header,null,o.a.createElement("p",null,"Hello world"),o.a.createElement(c.h,{as:"button"})),o.a.createElement(u.b.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",o.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",o.a.createElement("a",{href:"#felis"},"felis venenatis")," efficitur. Aenean ac"," ",o.a.createElement("em",null,"eleifend lacus"),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."))),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"colors"}},"Colors"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"color")," prop on ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Message>")," to set the color."),o.a.createElement(i.e,{__position:1,__code:"() =>\n  DEFAULTS.colors.map((color, i) => (\n    <OptionBlock props={{ color }} index={i} key={i}>\n      <Message color={color}>\n        <Message.Header>\n          <p>{color} message</p>\n          <Delete as=\"button\" />\n        </Message.Header>\n        <Message.Body>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n          porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n          gravida purus diam, et dictum <a href=\"#felis\">felis venenatis</a>{' '}\n          efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.\n          Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor\n          ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et\n          sem eget, facilisis sodales sem.\n        </Message.Body>\n      </Message>\n    </OptionBlock>\n  ))\n",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:s.a,Delete:c.h,Message:u.b,MESSAGE_DEFAULTS:u.a}},function(){return s.a.colors.map(function(e,t){return o.a.createElement(l.d,{props:{color:e},index:t,key:t},o.a.createElement(u.b,{color:e},o.a.createElement(u.b.Header,null,o.a.createElement("p",null,e," message"),o.a.createElement(c.h,{as:"button"})),o.a.createElement(u.b.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",o.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",o.a.createElement("a",{href:"#felis"},"felis venenatis")," ","efficitur. Aenean ac ",o.a.createElement("em",null,"eleifend lacus"),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.")))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"message-body-only"}},"Message body only"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Omit the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Message.Header>")," to get a simpler ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Message>"),"."),o.a.createElement(i.e,{__position:2,__code:"() =>\n  DEFAULTS.colors.map((color, i) => (\n    <OptionBlock props={{ color }} index={i} key={i}>\n      <Message color={color}>\n        <Message.Body>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n          porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n          gravida purus diam, et dictum <a href=\"#felis\">felis venenatis</a>{' '}\n          efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.\n          Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor\n          ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et\n          sem eget, facilisis sodales sem.\n        </Message.Body>\n      </Message>\n    </OptionBlock>\n  ))\n",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:s.a,Delete:c.h,Message:u.b,MESSAGE_DEFAULTS:u.a}},function(){return s.a.colors.map(function(e,t){return o.a.createElement(l.d,{props:{color:e},index:t,key:t},o.a.createElement(u.b,{color:e},o.a.createElement(u.b.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",o.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",o.a.createElement("a",{href:"#felis"},"felis venenatis")," ","efficitur. Aenean ac ",o.a.createElement("em",null,"eleifend lacus"),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.")))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"sizes"}},"Sizes"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"size")," prop on ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Message>")," to set the size."),o.a.createElement(i.e,{__position:3,__code:"() => {\n  const sizes = MESSAGE_DEFAULTS.sizes.map(size => ({ name: size, size }))\n  sizes.splice(1, 0, { name: 'normal', size: undefined })\n  return sizes.map(({ name, size }, i) => (\n    <OptionBlock props={{ size }} index={i} key={i}>\n      <Message size={size}>\n        <Message.Header>\n          <p>{name} message</p>\n          <Delete as=\"button\" size={size} />\n        </Message.Header>\n        <Message.Body>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,\n          porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam\n          gravida purus diam, et dictum <a href=\"#felis\">felis venenatis</a>{' '}\n          efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.\n          Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor\n          ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et\n          sem eget, facilisis sodales sem.\n        </Message.Body>\n      </Message>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:s.a,Delete:c.h,Message:u.b,MESSAGE_DEFAULTS:u.a}},function(){var e=u.a.sizes.map(function(e){return{name:e,size:e}});return e.splice(1,0,{name:"normal",size:void 0}),e.map(function(e,t){var n=e.name,r=e.size;return o.a.createElement(l.d,{props:{size:r},index:t,key:t},o.a.createElement(u.b,{size:r},o.a.createElement(u.b.Header,null,o.a.createElement("p",null,n," message"),o.a.createElement(c.h,{as:"button",size:r})),o.a.createElement(u.b.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",o.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",o.a.createElement("a",{href:"#felis"},"felis venenatis")," efficitur. Aenean ac ",o.a.createElement("em",null,"eleifend lacus"),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.")))})}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(l.b,{component:u.b,customize:!0,docPath:"/components/message",props:{color:{description:"set the message's color",typeName:"string",typeTip:Object(l.g)(s.a.colors)},size:{description:"set the message's size",typeName:"string",typeTip:Object(l.g)(u.a.sizes)}}}),o.a.createElement(l.b,{component:u.b.Body,docPath:"/components/message"}),o.a.createElement(l.b,{component:u.b.Header,docPath:"/components/message"}))}}])&&d(n.prototype,r),m&&d(n,m),t}()},"./src/components/message/message.tsx":function(e,t,n){"use strict";var r=n("./node_modules/classnames/index.js"),o=n.n(r),a=n("./node_modules/prop-types/index.js"),i=n.n(a),l=n("./node_modules/react/index.js"),s=n.n(l),c=n("./src/base/index.ts"),u=n("./src/utils.ts");function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=Object(c.b)(function(e,t){var n=e.className,r=m(e,["className"]);return s.a.createElement(c.a,Object.assign({className:o()("message-body",n),ref:t},r))},{as:"div"});function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}p.displayName="Message.Body";var f=Object(c.b)(function(e,t){var n=e.className,r=d(e,["className"]);return s.a.createElement(c.a,Object.assign({className:o()("message-header",n),ref:t},r))},{as:"div"});function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}f.displayName="Message.Header",n.d(t,"a",function(){return b}),n.d(t,"b",function(){return h});var b={sizes:Object(u.d)("small","medium","large")},h=Object.assign(Object(c.b)(function(e,t){var n,r=e.className,a=e.color,i=e.size,l=g(e,["className","color","size"]);return s.a.createElement(c.a,Object.assign({className:o()("message",(n={},y(n,"is-".concat(a),a),y(n,"is-".concat(i),i),n),r),ref:t},l))},{as:"article"}),{Body:p,Header:f});h.displayName="Message",h.propTypes={color:i.a.oneOfType([i.a.string,i.a.number]),size:i.a.oneOfType([i.a.string,i.a.number])}}}]);
//# sourceMappingURL=src-components-message-docs-message-docs.58719c3c4e37a33d4c3d.js.map