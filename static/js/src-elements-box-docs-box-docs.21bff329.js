(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=n("./node_modules/react/index.js"),a=n.n(o),l=n("./src/elements/index.ts"),i=n("./node_modules/docz/dist/index.m.js"),c=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,r=e.secondaryName,o=e.secondaryColor,c=e.url,u=void 0===c?{}:/^\/[a-z]/.test(c)?{as:i.c,to:c}:{as:"a",href:c,target:"_blank"};return a.a.createElement(l.g,null,a.a.createElement(l.s.Group,Object.assign({gapless:!0},u),a.a.createElement(l.s,{color:n},t),a.a.createElement(l.s,{color:o},r)))},{Group:function(e){var t=e.children;return a.a.createElement(l.i,{kind:"group",children:t})}}),u=function(e){var t=e.asType;return a.a.createElement(c,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},s=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,r=void 0!==t?"Bulma":"n/a",o=void 0!==t?"primary":"dark";return a.a.createElement(c,{primaryName:"docs",primaryColor:"light",secondaryName:r,secondaryColor:o,url:n})},m=function(e){var t=e.customize,n=!0===t?"yes":"no",r=!0===t?"success":"danger";return a.a.createElement(c,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:r,url:"/architecture/customize"})},f=function(e){var t=e.asType,n=e.docPath,r=e.customize;return a.a.createElement(c.Group,null,a.a.createElement(u,{asType:t}),a.a.createElement(m,{customize:r}),a.a.createElement(s,{docPath:n}))};function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},E=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return r=this,o=(e=y(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==p(o)&&"function"!==typeof o?h(r):o,g(h(h(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return a.a.createElement("tbody",null,v(e).map(function(e){var t=e.key,r=e.value;return n.renderRow(t,r)}))}),g(h(h(n)),"renderCellName",function(e){return a.a.createElement(l.r.Cell,null,a.a.createElement("code",null,e))}),g(h(h(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return a.a.createElement(l.r.Cell,t)}),g(h(h(n)),"renderCellType",function(e,t){var r=n.props.components.tooltip,o=void 0===t?e:a.a.createElement(r,{text:t},e);return a.a.createElement(l.r.Cell,null,a.a.createElement("code",null,o))}),g(h(h(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?a.a.createElement(l.r.Cell,null):a.a.createElement(l.r.Cell,null,e)}),g(h(h(n)),"renderCellDefaultValue",function(e){if(void 0===e)return a.a.createElement(l.r.Cell,{textColor:"grey-light"},a.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return a.a.createElement(l.r.Cell,null,a.a.createElement("code",null,t))}),g(h(h(n)),"renderRow",function(e,t){return a.a.createElement(l.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?a.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return a.a.createElement(l.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&d(n.prototype,r),o&&d(n,o),t}(),w=Object(r.withMDXComponents)(E);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={description:a.a.createElement("span",null,"the React Component or JSX Element (e.g. ",a.a.createElement("code",null,'"div"')," or"," ",a.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},_={description:a.a.createElement("span",null,"a handle to the underlying ",a.a.createElement("code",null,"React Component")," or"," ",a.a.createElement("code",null,"JSX Element")),typeName:"Ref"},C=function(e){var t=e.asType,n=e.components,r=e.customize,o=e.docPath,i=e.name,c=e.props,u={asType:t,customize:r,docPath:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.u,{as:"h4",size:4},i),a.a.createElement(f,u),a.a.createElement(E,{components:n,props:c}))},P=(Object(r.withMDXComponents)(C),Object(r.withMDXComponents)(function(e){for(var t=e.component,n=e.components,r=e.customize,o=e.docPath,l=e.props,i=t.defaultProps.as,c="string"===typeof i?i:void 0!==i.displayName?i.displayName:JSON.stringify(i),u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({as:j,ref:_},l),s=Object.keys(u),m=0;m<s.length;m++){var f=s[m],p=t.defaultProps[f];void 0!==p&&(u[f].defaultValue=JSON.stringify(p))}return a.a.createElement(C,{asType:c,components:n,customize:r,docPath:o,name:t.displayName,props:u})})),x=n("./node_modules/react-dom/index.js"),S=n.n(x);function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return r=this,o=(e=T(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==I(o)&&"function"!==typeof o?N(r):o,z(N(N(n)),"ref",a.a.createRef()),z(N(N(n)),"updateHeightEnabled",!1),z(N(N(n)),"updateHeightTimeout",void 0),z(N(N(n)),"iframeRoot",void 0),z(N(N(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var r=e[t];"stylesheet"===r.rel&&n.ref.current.contentDocument.head.appendChild(r.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),a=0;a<o.length;a++){var l=o[a];n.ref.current.contentDocument.head.appendChild(l.cloneNode(!0))}}}),z(N(N(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),z(N(N(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),z(N(N(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:D({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?S.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):S.a.createPortal(e,this.iframeRoot):void 0)}}])&&k(n.prototype,r),o&&k(n,o),t}();function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}z(H,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var J={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},q=function(e){function t(){var e,n,r,o,l,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),m=0;m<u;m++)s[m]=arguments[m];return r=this,n=!(o=(e=A(t)).call.apply(e,[this].concat(s)))||"object"!==M(o)&&"function"!==typeof o?X(r):o,l=X(X(n)),c=function(e,t){var n;switch(M(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var r="".concat(e).concat(void 0!==n?"=".concat(n):"");return a.a.createElement("code",{key:e,style:{marginRight:"10px"}},r)},(i="renderProp")in l?Object.defineProperty(l,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[i]=c,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.index,o=t.props,i=void 0!==r&&0!==r?a.a.createElement("hr",{style:J}):void 0;return a.a.createElement(l.a,null,i,a.a.createElement(l.u,{as:"h6",size:6},Object.keys(o).map(function(t){return e.renderProp(t,o[t])})),n)}}])&&L(n.prototype,r),o&&L(n,o),t}(),F=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return P}),n.d(t,"f",function(){return j}),n.d(t,"h",function(){return _}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return H}),n.d(t,"d",function(){return q}),n.d(t,"e",function(){return w}),n.d(t,"g",function(){return F})},"./src/elements/box/__docs__/box.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),i=n("./node_modules/@fortawesome/react-fontawesome/index.es.js"),c=n("./node_modules/docz/dist/index.m.js"),u=n("./src/__docs__/components/index.ts"),s=n("./src/components/index.ts"),m=n("./src/elements/index.ts"),f=n("./src/elements/box/box.tsx");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,h(t).call(this,e))).layout=null,n}var n,r,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"box"}},"Box"),o.a.createElement(a.MDXTag,{name:"p",components:t},"A white box to contain other elements."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Box>")," component is a container with a shadow, border, radius and some padding.\nIt's children can be images, media objects, or anything else."),o.a.createElement(c.e,{__position:0,__code:'<Box>\n  <Media>\n    <Media.Item align="left">\n      <Image.Container size={64}>\n        <Image\n          alt="Image"\n          src="https://bulma.io/images/placeholders/128x128.png"\n        />\n      </Image.Container>\n    </Media.Item>\n    <Media.Item>\n      <Content>\n        <p>\n          <strong>John Smith</strong> <small>@johnsmith</small> <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\n          ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas\n          non massa sem. Etiam finibus odio quis feugiat facilisis.\n        </p>\n      </Content>\n      <Level breakpoint="mobile">\n        <Level.Item align="left">\n          <Level.Item as="a" aria-label="reply">\n            <Icon size="small">\n              <FontAwesomeIcon icon={faReply} />\n            </Icon>\n          </Level.Item>\n          <Level.Item as="a" aria-label="retweet">\n            <Icon size="small">\n              <FontAwesomeIcon icon={faRetweet} />\n            </Icon>\n          </Level.Item>\n          <Level.Item as="a" aria-label="like">\n            <Icon size="small">\n              <FontAwesomeIcon icon={faHeart} />\n            </Icon>\n          </Level.Item>\n        </Level.Item>\n      </Level>\n    </Media.Item>\n  </Media>\n</Box>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:u.b,mapEnumerable:u.g,Level:s.a,Media:s.b,Content:m.f,Icon:m.m,Image:m.n,Box:f.a}},o.a.createElement(f.a,null,o.a.createElement(s.b,null,o.a.createElement(s.b.Item,{align:"left"},o.a.createElement(m.n.Container,{size:64},o.a.createElement(m.n,{alt:"Image",src:"https://bulma.io/images/placeholders/128x128.png"}))),o.a.createElement(s.b.Item,null,o.a.createElement(m.f,null,o.a.createElement("p",null,o.a.createElement("strong",null,"John Smith")," ",o.a.createElement("small",null,"@johnsmith")," ",o.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")),o.a.createElement(s.a,{breakpoint:"mobile"},o.a.createElement(s.a.Item,{align:"left"},o.a.createElement(s.a.Item,{as:"a","aria-label":"reply"},o.a.createElement(m.m,{size:"small"},o.a.createElement(i.a,{icon:l.B}))),o.a.createElement(s.a.Item,{as:"a","aria-label":"retweet"},o.a.createElement(m.m,{size:"small"},o.a.createElement(i.a,{icon:l.C}))),o.a.createElement(s.a.Item,{as:"a","aria-label":"like"},o.a.createElement(m.m,{size:"small"},o.a.createElement(i.a,{icon:l.t}))))))))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(u.b,{component:f.a,docPath:"/elements/box"}))}}])&&y(n.prototype,r),p&&y(n,p),t}()}}]);
//# sourceMappingURL=src-elements-box-docs-box-docs.58719c3c4e37a33d4c3d.js.map