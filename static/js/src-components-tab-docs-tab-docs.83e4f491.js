(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/__docs__/components/index.ts":function(e,n,t){"use strict";var a=t("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=t("./node_modules/react/index.js"),r=t.n(o),l=t("./src/elements/index.ts"),c=t("./node_modules/docz/dist/index.m.js"),i=Object.assign(function(e){var n=e.primaryName,t=e.primaryColor,a=e.secondaryName,o=e.secondaryColor,i=e.url,s=void 0===i?{}:/^\/[a-z]/.test(i)?{as:c.c,to:i}:{as:"a",href:i,target:"_blank"};return r.a.createElement(l.g,null,r.a.createElement(l.s.Group,Object.assign({gapless:!0},s),r.a.createElement(l.s,{color:t},n),r.a.createElement(l.s,{color:o},a)))},{Group:function(e){var n=e.children;return r.a.createElement(l.i,{kind:"group",children:n})}}),s=function(e){var n=e.asType;return r.a.createElement(i,{primaryName:"as",primaryColor:"light",secondaryName:n,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},m=function(e){var n=e.docPath,t=void 0!==n?"https://bulma.io/documentation".concat(n):void 0,a=void 0!==n?"Bulma":"n/a",o=void 0!==n?"primary":"dark";return r.a.createElement(i,{primaryName:"docs",primaryColor:"light",secondaryName:a,secondaryColor:o,url:t})},p=function(e){var n=e.customize,t=!0===n?"yes":"no",a=!0===n?"success":"danger";return r.a.createElement(i,{primaryName:"customize",primaryColor:"light",secondaryName:t,secondaryColor:a,url:"/architecture/customize"})},u=function(e){var n=e.asType,t=e.docPath,a=e.customize;return r.a.createElement(i.Group,null,r.a.createElement(s,{asType:n}),r.a.createElement(p,{customize:a}),r.a.createElement(m,{docPath:t}))};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=function(e){return Object.keys(e).sort(function(e,n){return e<n?-1:e===n?0:1}).map(function(n){return{key:n,value:e[n]}})},T=function(e){function n(){var e,t,a,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return a=this,o=(e=b(n)).call.apply(e,[this].concat(i)),t=!o||"object"!==f(o)&&"function"!==typeof o?E(a):o,y(E(E(t)),"renderBody",function(){var e=t.props.props;if(void 0!==e)return r.a.createElement("tbody",null,h(e).map(function(e){var n=e.key,a=e.value;return t.renderRow(n,a)}))}),y(E(E(t)),"renderCellName",function(e){return r.a.createElement(l.r.Cell,null,r.a.createElement("code",null,e))}),y(E(E(t)),"renderCellRequired",function(e){var n={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return r.a.createElement(l.r.Cell,n)}),y(E(E(t)),"renderCellType",function(e,n){var a=t.props.components.tooltip,o=void 0===n?e:r.a.createElement(a,{text:n},e);return r.a.createElement(l.r.Cell,null,r.a.createElement("code",null,o))}),y(E(E(t)),"renderCellDescription",function(e){if(t.hasDescription)return void 0===e?r.a.createElement(l.r.Cell,null):r.a.createElement(l.r.Cell,null,e)}),y(E(E(t)),"renderCellDefaultValue",function(e){if(void 0===e)return r.a.createElement(l.r.Cell,{textColor:"grey-light"},r.a.createElement("em",null,"-"));var n="''"===e?"[Empty String]":e.replace(/\'/g,"");return r.a.createElement(l.r.Cell,null,r.a.createElement("code",null,n))}),y(E(E(t)),"renderRow",function(e,n){return r.a.createElement(l.r.Row,{key:e},t.renderCellName(e),t.renderCellType(n.typeName,n.typeTip),t.renderCellRequired(n.required),t.renderCellDefaultValue(n.defaultValue),t.renderCellDescription(n.description))}),t}var t,a,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?r.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return r.a.createElement(l.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Property"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Required"),r.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(n){return void 0!==e[n].description})}}])&&d(t.prototype,a),o&&d(t,o),n}(),v=Object(a.withMDXComponents)(T);function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var A={description:r.a.createElement("span",null,"the React Component or JSX Element (e.g. ",r.a.createElement("code",null,'"div"')," or"," ",r.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},w={description:r.a.createElement("span",null,"a handle to the underlying ",r.a.createElement("code",null,"React Component")," or"," ",r.a.createElement("code",null,"JSX Element")),typeName:"Ref"},O=function(e){var n=e.asType,t=e.components,a=e.customize,o=e.docPath,c=e.name,i=e.props,s={asType:n,customize:a,docPath:o};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"h4",size:4},c),r.a.createElement(u,s),r.a.createElement(T,{components:t,props:i}))},D=(Object(a.withMDXComponents)(O),Object(a.withMDXComponents)(function(e){for(var n=e.component,t=e.components,a=e.customize,o=e.docPath,l=e.props,c=n.defaultProps.as,i="string"===typeof c?c:void 0!==c.displayName?c.displayName:JSON.stringify(c),s=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){_(e,n,t[n])})}return e}({as:A,ref:w},l),m=Object.keys(s),p=0;p<m.length;p++){var u=m[p],f=n.defaultProps[u];void 0!==f&&(s[u].defaultValue=JSON.stringify(f))}return r.a.createElement(O,{asType:i,components:t,customize:a,docPath:o,name:n.displayName,props:s})})),I=t("./node_modules/react-dom/index.js"),z=t.n(I);function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){C(e,n,t[n])})}return e}function P(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=function(e){function n(){var e,t,a,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return a=this,o=(e=k(n)).call.apply(e,[this].concat(c)),t=!o||"object"!==F(o)&&"function"!==typeof o?x(a):o,C(x(x(t)),"ref",r.a.createRef()),C(x(x(t)),"updateHeightEnabled",!1),C(x(x(t)),"updateHeightTimeout",void 0),C(x(x(t)),"iframeRoot",void 0),C(x(x(t)),"cloneStyles",function(){if(null!==t.ref.current&&null!==t.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),n=0;n<e.length;n++){var a=e[n];"stylesheet"===a.rel&&t.ref.current.contentDocument.head.appendChild(a.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),r=0;r<o.length;r++){var l=o[r];t.ref.current.contentDocument.head.appendChild(l.cloneNode(!0))}}}),C(x(x(t)),"handleLoad",function(){null!==t.ref.current&&null!==t.ref.current.contentDocument&&null!==t.ref.current.contentDocument.body&&(t.iframeRoot=t.ref.current.contentDocument.body,t.cloneStyles(),t.forceUpdate(),t.doUpdateHeight())}),C(x(x(t)),"doUpdateHeight",function(){!0!==t.props.forceHeight&&null!==t.ref.current&&null!==t.ref.current.contentDocument&&null!==t.ref.current.contentDocument.body&&(t.ref.current.style.height="".concat(t.ref.current.contentDocument.body.scrollHeight,"px")),t.updateHeight()}),C(x(x(t)),"updateHeight",function(){var e=t.props.updateHeightDelay;0!==e&&void 0!==e?(t.updateHeightEnabled=!0,t.updateHeightTimeout=setTimeout(t.doUpdateHeight,e)):t.updateHeightEnabled=!1}),t}var t,a,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(n,r.a.Component),t=n,(a=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:j({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?z.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):z.a.createPortal(e,this.iframeRoot):void 0)}}])&&P(t.prototype,a),o&&P(t,o),n}();function U(e){return(U="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,n){return(G=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}C(S,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var B={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},L=function(e){function n(){var e,t,a,o,l,c,i;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var s=arguments.length,m=new Array(s),p=0;p<s;p++)m[p]=arguments[p];return a=this,t=!(o=(e=R(n)).call.apply(e,[this].concat(m)))||"object"!==U(o)&&"function"!==typeof o?X(a):o,l=X(X(t)),i=function(e,n){var t;switch(U(n)){case"boolean":t=!0===n?void 0:"{false}";break;case"number":t="{".concat(n,"}");break;case"undefined":t="{undefined}";break;default:t=JSON.stringify(n)}var a="".concat(e).concat(void 0!==t?"=".concat(t):"");return r.a.createElement("code",{key:e,style:{marginRight:"10px"}},a)},(c="renderProp")in l?Object.defineProperty(l,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):l[c]=i,t}var t,a,o;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&G(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this,n=this.props,t=n.children,a=n.index,o=n.props,c=void 0!==a&&0!==a?r.a.createElement("hr",{style:B}):void 0;return r.a.createElement(l.a,null,c,r.a.createElement(l.u,{as:"h6",size:6},Object.keys(o).map(function(n){return e.renderProp(n,o[n])})),t)}}])&&N(t.prototype,a),o&&N(t,o),n}(),V=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};t.d(n,"b",function(){return D}),t.d(n,"f",function(){return A}),t.d(n,"h",function(){return w}),t.d(n,"a",function(){return u}),t.d(n,"c",function(){return S}),t.d(n,"d",function(){return L}),t.d(n,"e",function(){return v}),t.d(n,"g",function(){return V})},"./src/components/tab/__docs__/tab.docs.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return T});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),c=t("./node_modules/@fortawesome/react-fontawesome/index.es.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./src/__docs__/components/index.ts"),m=t("./src/base/helpers/variables.ts"),p=t("./src/elements/index.ts"),u=t("./src/components/tab/tab.tsx"),f=t("./src/components/tab/tab-group.tsx");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function g(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var T=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=E(this,y(n).call(this,e))).layout=null,t}var t,a,d;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components,t=b(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"tab"}},"Tab"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Simple responsive horizontal navigation ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"tabs"),", with different styles."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The default tabs style has a single border at the bottom."),o.a.createElement(i.e,{__position:0,__code:"<Tab.Group>\n  <Tab active>Pictures</Tab>\n  <Tab>Music</Tab>\n  <Tab>Videos</Tab>\n  <Tab>Documents</Tab>\n</Tab.Group>",__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,null,o.a.createElement(u.a,{active:!0},"Pictures"),o.a.createElement(u.a,null,"Music"),o.a.createElement(u.a,null,"Videos"),o.a.createElement(u.a,null,"Documents"))),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"alignments"}},"Alignments"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"align")," prop of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Tab.Group>")," to align the tabs list."),o.a.createElement(i.e,{__position:1,__code:"() => {\n  const alignments = TAB_GROUP_DEFAULTS.alignments.map(align => ({\n    align,\n    name: align,\n  }))\n  alignments.splice(0, 0, { align: undefined, name: 'left' })\n  return alignments.map(({ align, name }, i) => (\n    <OptionBlock props={{ align }} index={i} key={i}>\n      <Tab.Group align={align}>\n        <Tab active>Pictures</Tab>\n        <Tab>Music</Tab>\n        <Tab>Videos</Tab>\n        <Tab>Documents</Tab>\n      </Tab.Group>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},function(){var e=f.a.alignments.map(function(e){return{align:e,name:e}});return e.splice(0,0,{align:void 0,name:"left"}),e.map(function(e,n){var t=e.align;e.name;return o.a.createElement(s.d,{props:{align:t},index:n,key:n},o.a.createElement(u.a.Group,{align:t},o.a.createElement(u.a,{active:!0},"Pictures"),o.a.createElement(u.a,null,"Music"),o.a.createElement(u.a,null,"Videos"),o.a.createElement(u.a,null,"Documents")))})}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"icons"}},"Icons"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Icon>")," component to add icons."),o.a.createElement(i.e,{__position:2,__code:'<Tab.Group align="centered">\n  <Tab active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faImage} />\n    </Icon>\n    <span>Pictures</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faMusic} />\n    </Icon>\n    <span>Music</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFilm} />\n    </Icon>\n    <span>Videos</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFileAlt} />\n    </Icon>\n    <span>Documents</span>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{align:"centered"},o.a.createElement(u.a,{active:!0},o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.v})),o.a.createElement("span",null,"Pictures")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.z})),o.a.createElement("span",null,"Music")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.q})),o.a.createElement("span",null,"Videos")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.p})),o.a.createElement("span",null,"Documents")))),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"sizes"}},"Sizes"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"size")," prop of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Tab.Group>")," to set the size."),o.a.createElement(i.e,{__position:3,__code:"() => {\n  const sizes = TAB_GROUP_DEFAULTS.sizes.map(size => ({ name: size, size }))\n  sizes.splice(1, 0, { name: 'normal', size: undefined })\n  return sizes.map(({ size, name }, i) => (\n    <OptionBlock props={{ size }} index={i} key={i}>\n      <Tab.Group size={size}>\n        <Tab active>Pictures</Tab>\n        <Tab>Music</Tab>\n        <Tab>Videos</Tab>\n        <Tab>Documents</Tab>\n      </Tab.Group>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},function(){var e=f.a.sizes.map(function(e){return{name:e,size:e}});return e.splice(1,0,{name:"normal",size:void 0}),e.map(function(e,n){var t=e.size;e.name;return o.a.createElement(s.d,{props:{size:t},index:n,key:n},o.a.createElement(u.a.Group,{size:t},o.a.createElement(u.a,{active:!0},"Pictures"),o.a.createElement(u.a,null,"Music"),o.a.createElement(u.a,null,"Videos"),o.a.createElement(u.a,null,"Documents")))})}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"kinds"}},"Kinds"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"kind")," prop on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Tab.Group>")," to change the styling of the tabs."),o.a.createElement(r.MDXTag,{name:"p",components:n},"With the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"kind")," prop as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"boxed"'),", you'll have classic style ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"borders"),"."),o.a.createElement(i.e,{__position:4,__code:'<Tab.Group kind="boxed">\n  <Tab active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faImage} />\n    </Icon>\n    <span>Pictures</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faMusic} />\n    </Icon>\n    <span>Music</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFilm} />\n    </Icon>\n    <span>Videos</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFileAlt} />\n    </Icon>\n    <span>Documents</span>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{kind:"boxed"},o.a.createElement(u.a,{active:!0},o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.v})),o.a.createElement("span",null,"Pictures")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.z})),o.a.createElement("span",null,"Music")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.q})),o.a.createElement("span",null,"Videos")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.p})),o.a.createElement("span",null,"Documents")))),o.a.createElement(r.MDXTag,{name:"p",components:n},"With the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"kind")," prop as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"toggle"'),", you'll have ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"mutually exclusive")," tabs, like radio buttons."),o.a.createElement(i.e,{__position:5,__code:'<Tab.Group kind="toggle">\n  <Tab active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faImage} />\n    </Icon>\n    <span>Pictures</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faMusic} />\n    </Icon>\n    <span>Music</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFilm} />\n    </Icon>\n    <span>Videos</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFileAlt} />\n    </Icon>\n    <span>Documents</span>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{kind:"toggle"},o.a.createElement(u.a,{active:!0},o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.v})),o.a.createElement("span",null,"Pictures")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.z})),o.a.createElement("span",null,"Music")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.q})),o.a.createElement("span",null,"Videos")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.p})),o.a.createElement("span",null,"Documents")))),o.a.createElement(r.MDXTag,{name:"p",components:n},"With the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"kind")," prop as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"toggle-rounded"'),", the first and last items will be ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"rounded")),o.a.createElement(i.e,{__position:6,__code:'<Tab.Group kind="toggle-rounded">\n  <Tab active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faImage} />\n    </Icon>\n    <span>Pictures</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faMusic} />\n    </Icon>\n    <span>Music</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFilm} />\n    </Icon>\n    <span>Videos</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFileAlt} />\n    </Icon>\n    <span>Documents</span>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{kind:"toggle-rounded"},o.a.createElement(u.a,{active:!0},o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.v})),o.a.createElement("span",null,"Pictures")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.z})),o.a.createElement("span",null,"Music")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.q})),o.a.createElement("span",null,"Videos")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.p})),o.a.createElement("span",null,"Documents")))),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"fullwidth"}},"Fullwidth"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullwidth")," prop on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Tab.Group>")," to expand the tabs to take up all available horizontal width."),o.a.createElement(i.e,{__position:7,__code:'<Tab.Group fullwidth>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faAngleLeft} />\n    </Icon>\n    <span>Left</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faAngleUp} />\n    </Icon>\n    <span>Up</span>\n  </Tab>\n  <Tab>\n    <span>Right</span>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faAngleRight} />\n    </Icon>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{fullwidth:!0},o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.e})),o.a.createElement("span",null,"Left")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.g})),o.a.createElement("span",null,"Up")),o.a.createElement(u.a,null,o.a.createElement("span",null,"Right"),o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.f}))))),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"combining"}},"Combining"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"combine")," different modifiers to get interesting combinations."),o.a.createElement(r.MDXTag,{name:"p",components:n},"For example, here are ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"centered boxed")," tabs:"),o.a.createElement(i.e,{__position:8,__code:'<Tab.Group align="centered" kind="boxed">\n  <Tab active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faImage} />\n    </Icon>\n    <span>Pictures</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faMusic} />\n    </Icon>\n    <span>Music</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFilm} />\n    </Icon>\n    <span>Videos</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFileAlt} />\n    </Icon>\n    <span>Documents</span>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{align:"centered",kind:"boxed"},o.a.createElement(u.a,{active:!0},o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.v})),o.a.createElement("span",null,"Pictures")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.z})),o.a.createElement("span",null,"Music")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.q})),o.a.createElement("span",null,"Videos")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.p})),o.a.createElement("span",null,"Documents")))),o.a.createElement(r.MDXTag,{name:"p",components:n},"And here are ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"fullwidth toggle")," tabs:"),o.a.createElement(i.e,{__position:9,__code:'<Tab.Group fullwidth kind="toggle">\n  <Tab active>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faImage} />\n    </Icon>\n    <span>Pictures</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faMusic} />\n    </Icon>\n    <span>Music</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFilm} />\n    </Icon>\n    <span>Videos</span>\n  </Tab>\n  <Tab>\n    <Icon size="small">\n      <FontAwesomeIcon icon={faFileAlt} />\n    </Icon>\n    <span>Documents</span>\n  </Tab>\n</Tab.Group>',__scope:{props:this?this.props:t,faAngleLeft:l.e,faAngleRight:l.f,faAngleUp:l.g,faFileAlt:l.p,faFilm:l.q,faImage:l.v,faMusic:l.z,FontAwesomeIcon:c.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,OptionBlock:s.d,DEFAULTS:m.a,Block:p.a,Icon:p.m,Title:p.u,Tab:u.a,TAB_GROUP_DEFAULTS:f.a}},o.a.createElement(u.a.Group,{fullwidth:!0,kind:"toggle"},o.a.createElement(u.a,{active:!0},o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.v})),o.a.createElement("span",null,"Pictures")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.z})),o.a.createElement("span",null,"Music")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.q})),o.a.createElement("span",null,"Videos")),o.a.createElement(u.a,null,o.a.createElement(p.m,{size:"small"},o.a.createElement(c.a,{icon:l.p})),o.a.createElement("span",null,"Documents")))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"api"}},"API"),o.a.createElement(s.b,{component:u.a,docPath:"/components/tabs",props:{active:{description:"set the tab as currently active",typeName:"boolean"}}}),o.a.createElement(s.b,{component:u.a.Group,customize:!0,docPath:"/components/tabs",props:{align:{description:"set the tab group's alignment",typeName:"string",typeTip:Object(s.g)(f.a.alignments)},fullsize:{description:"expand the tab group to consume all available horizontal space",typeName:"boolean"},kind:{description:"set the tab group's styling",typeName:"string",typeTip:Object(s.g)(f.a.kinds)},size:{description:"set the tab group's size",typeName:"string",typeTip:Object(s.g)(f.a.sizes)}}}))}}])&&g(t.prototype,a),d&&g(t,d),n}()},"./src/components/tab/tab-group.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return f}),t.d(n,"b",function(){return d});var a=t("./node_modules/classnames/index.js"),o=t.n(a),r=t("./node_modules/prop-types/index.js"),l=t.n(r),c=t("./node_modules/react/index.js"),i=t.n(c),s=t("./src/base/index.ts"),m=t("./src/utils.ts");function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f={alignments:Object(m.d)("centered","right"),sizes:Object(m.d)("small","medium","large"),kinds:Object(m.d)("boxed","toggle","toggle-rounded")},d=Object(s.b)(function(e,n){var t,a=e.align,r=e.children,l=e.className,c=e.fullwidth,m=e.kind,f=e.size,d=u(e,["align","children","className","fullwidth","kind","size"]);return i.a.createElement(s.a,Object.assign({className:o()("tabs",(t={},p(t,"is-".concat(a),a),p(t,"is-".concat(f),f),p(t,"is-fullwidth",c),p(t,"is-".concat(m),m),p(t,"is-toggle","toggle"===m||"toggle-rounded"===m),p(t,"is-toggle-rounded","toggle-rounded"===m),t),l),children:i.a.createElement("ul",null,r),ref:n},d))},{as:"div"});d.displayName="Tab.Group",d.propTypes={align:l.a.oneOfType([l.a.string,l.a.number]),fullwidth:l.a.bool,kind:l.a.oneOfType([l.a.string,l.a.number]),size:l.a.oneOfType([l.a.string,l.a.number])}},"./src/components/tab/tab.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t("./node_modules/classnames/index.js"),o=t.n(a),r=t("./node_modules/prop-types/index.js"),l=t.n(r),c=t("./node_modules/react/index.js"),i=t.n(c),s=t("./src/base/index.ts"),m=t("./src/components/tab/tab-group.tsx");function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=Object.assign(Object(s.b)(function(e,n){var t=e.active,a=p(e,["active"]);return i.a.createElement("li",{className:o()({"is-active":t})},i.a.createElement(s.a,Object.assign({ref:n},a)))},{as:"a"}),{Group:m.b});u.displayName="Tab",u.propTypes={active:l.a.bool}}}]);
//# sourceMappingURL=src-components-tab-docs-tab-docs.58719c3c4e37a33d4c3d.js.map