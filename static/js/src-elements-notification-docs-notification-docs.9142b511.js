(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./src/elements/index.ts"),c=n("./node_modules/docz/dist/index.m.js"),l=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,r=e.secondaryName,o=e.secondaryColor,l=e.url,u=void 0===l?{}:/^\/[a-z]/.test(l)?{as:c.c,to:l}:{as:"a",href:l,target:"_blank"};return a.a.createElement(i.g,null,a.a.createElement(i.s.Group,Object.assign({gapless:!0},u),a.a.createElement(i.s,{color:n},t),a.a.createElement(i.s,{color:o},r)))},{Group:function(e){var t=e.children;return a.a.createElement(i.i,{kind:"group",children:t})}}),u=function(e){var t=e.asType;return a.a.createElement(l,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},s=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,r=void 0!==t?"Bulma":"n/a",o=void 0!==t?"primary":"dark";return a.a.createElement(l,{primaryName:"docs",primaryColor:"light",secondaryName:r,secondaryColor:o,url:n})},p=function(e){var t=e.customize,n=!0===t?"yes":"no",r=!0===t?"success":"danger";return a.a.createElement(l,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:r,url:"/architecture/customize"})},f=function(e){var t=e.asType,n=e.docPath,r=e.customize;return a.a.createElement(l.Group,null,a.a.createElement(u,{asType:t}),a.a.createElement(p,{customize:r}),a.a.createElement(s,{docPath:n}))};function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},E=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return r=this,o=(e=y(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==m(o)&&"function"!==typeof o?b(r):o,g(b(b(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return a.a.createElement("tbody",null,v(e).map(function(e){var t=e.key,r=e.value;return n.renderRow(t,r)}))}),g(b(b(n)),"renderCellName",function(e){return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,e))}),g(b(b(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return a.a.createElement(i.r.Cell,t)}),g(b(b(n)),"renderCellType",function(e,t){var r=n.props.components.tooltip,o=void 0===t?e:a.a.createElement(r,{text:t},e);return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,o))}),g(b(b(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?a.a.createElement(i.r.Cell,null):a.a.createElement(i.r.Cell,null,e)}),g(b(b(n)),"renderCellDefaultValue",function(e){if(void 0===e)return a.a.createElement(i.r.Cell,{textColor:"grey-light"},a.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,t))}),g(b(b(n)),"renderRow",function(e,t){return a.a.createElement(i.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?a.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return a.a.createElement(i.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&d(n.prototype,r),o&&d(n,o),t}(),O=Object(r.withMDXComponents)(E);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={description:a.a.createElement("span",null,"the React Component or JSX Element (e.g. ",a.a.createElement("code",null,'"div"')," or"," ",a.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},_={description:a.a.createElement("span",null,"a handle to the underlying ",a.a.createElement("code",null,"React Component")," or"," ",a.a.createElement("code",null,"JSX Element")),typeName:"Ref"},P=function(e){var t=e.asType,n=e.components,r=e.customize,o=e.docPath,c=e.name,l=e.props,u={asType:t,customize:r,docPath:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.u,{as:"h4",size:4},c),a.a.createElement(f,u),a.a.createElement(E,{components:n,props:l}))},C=(Object(r.withMDXComponents)(P),Object(r.withMDXComponents)(function(e){for(var t=e.component,n=e.components,r=e.customize,o=e.docPath,i=e.props,c=t.defaultProps.as,l="string"===typeof c?c:void 0!==c.displayName?c.displayName:JSON.stringify(c),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}({as:j,ref:_},i),s=Object.keys(u),p=0;p<s.length;p++){var f=s[p],m=t.defaultProps[f];void 0!==m&&(u[f].defaultValue=JSON.stringify(m))}return a.a.createElement(P,{asType:l,components:n,customize:r,docPath:o,name:t.displayName,props:u})})),D=n("./node_modules/react-dom/index.js"),S=n.n(D);function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return r=this,o=(e=x(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==T(o)&&"function"!==typeof o?H(r):o,z(H(H(n)),"ref",a.a.createRef()),z(H(H(n)),"updateHeightEnabled",!1),z(H(H(n)),"updateHeightTimeout",void 0),z(H(H(n)),"iframeRoot",void 0),z(H(H(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var r=e[t];"stylesheet"===r.rel&&n.ref.current.contentDocument.head.appendChild(r.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),a=0;a<o.length;a++){var i=o[a];n.ref.current.contentDocument.head.appendChild(i.cloneNode(!0))}}}),z(H(H(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),z(H(H(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),z(H(H(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:k({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?S.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):S.a.createPortal(e,this.iframeRoot):void 0)}}])&&N(n.prototype,r),o&&N(n,o),t}();function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}z(X,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var U={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},V=function(e){function t(){var e,n,r,o,i,c,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),p=0;p<u;p++)s[p]=arguments[p];return r=this,n=!(o=(e=A(t)).call.apply(e,[this].concat(s)))||"object"!==M(o)&&"function"!==typeof o?L(r):o,i=L(L(n)),l=function(e,t){var n;switch(M(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var r="".concat(e).concat(void 0!==n?"=".concat(n):"");return a.a.createElement("code",{key:e,style:{marginRight:"10px"}},r)},(c="renderProp")in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.index,o=t.props,c=void 0!==r&&0!==r?a.a.createElement("hr",{style:U}):void 0;return a.a.createElement(i.a,null,c,a.a.createElement(i.u,{as:"h6",size:6},Object.keys(o).map(function(t){return e.renderProp(t,o[t])})),n)}}])&&q(n.prototype,r),o&&q(n,o),t}(),J=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return C}),n.d(t,"f",function(){return j}),n.d(t,"h",function(){return _}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return X}),n.d(t,"d",function(){return V}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return J})},"./src/elements/notification/__docs__/notification.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),c=n("./src/__docs__/components/index.ts"),l=n("./src/base/helpers/variables.ts"),u=n("./src/elements/index.ts"),s=n("./src/elements/notification/notification.tsx");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,y(t).call(this,e))).layout=null,n}var n,r,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"notification"}},"Notification"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Bold ",o.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"notification")," blocks, to alert your users of something."),o.a.createElement(i.e,{__position:0,__code:'<Notification>\n  <Delete as="button" />\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.\n  <strong> Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec\n  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus\n  diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur\n  adipiscing elit\n</Notification>',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:c.b,mapEnumerable:c.g,OptionBlock:c.d,DEFAULTS:l.a,Delete:u.h,Notification:s.a}},o.a.createElement(s.a,null,o.a.createElement(u.h,{as:"button"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.",o.a.createElement("strong",null," Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",o.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"colors"}},"Colors"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"color")," prop to specfiy the color of the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Notification>"),"."),o.a.createElement(i.e,{__position:1,__code:'() =>\n  DEFAULTS.colors.map((color, i) => (\n    <OptionBlock props={{ color }} index={i} key={i}>\n      <Notification color={color}>\n        <Delete as="button" />\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{\' \'}\n        <a href="#felis">felis venenatis</a> efficitur. Sit amet, consectetur\n        adipiscing elit\n      </Notification>\n    </OptionBlock>\n  ))\n',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:c.b,mapEnumerable:c.g,OptionBlock:c.d,DEFAULTS:l.a,Delete:u.h,Notification:s.a}},function(){return l.a.colors.map(function(e,t){return o.a.createElement(c.d,{props:{color:e},index:t,key:t},o.a.createElement(s.a,{color:e},o.a.createElement(u.h,{as:"button"}),"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",o.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",o.a.createElement("a",{href:"#felis"},"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit"))})}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(c.b,{component:s.a,customize:!0,docPath:"/elements/notification",props:{color:{description:"the color of the notification",typeName:"string",typeTip:Object(c.g)(l.a.colors)}}}))}}])&&m(n.prototype,r),p&&m(n,p),t}()}}]);
//# sourceMappingURL=src-elements-notification-docs-notification-docs.58719c3c4e37a33d4c3d.js.map