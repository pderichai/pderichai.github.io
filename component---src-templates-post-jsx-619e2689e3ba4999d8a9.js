(self.webpackChunkderic_homepage=self.webpackChunkderic_homepage||[]).push([[400],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,s){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),s=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),s=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=s(e,c),u=f(t),m=p.useMemo((function(){if(!r)return null;var e=l({React:p,mdx:i},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(m,l({},a))}},7568:function(e,t,r){"use strict";r.r(t);var n=r(1541),o=r(2850),a=r(8945),s=r(4983),c=r(1955),u=r(7294),l={h1:function(e){return u.createElement("h3",Object.assign({className:"post"},e),e.children)},h2:function(e){return u.createElement("h4",Object.assign({className:"post"},e),e.children)},p:function(e){return u.createElement("p",Object.assign({className:"post"},e),e.children)},code:function(e){return u.createElement("code",Object.assign({className:"post"},e),e.children)},pre:function(e){return u.createElement("pre",Object.assign({className:"post"},e),e.children)},ol:function(e){return u.createElement("ol",Object.assign({className:"post"},e),e.children)},ul:function(e){return u.createElement("ul",Object.assign({className:"post"},e),e.children)},img:function(e){return u.createElement("img",Object.assign({className:"post",alt:""},e),e.children)}};t.default=function(e){var t=e.data.mdx,r=(0,a.d)(t.frontmatter.featuredImage);return u.createElement(n.Z,null,u.createElement(o.Z,{title:t.frontmatter.title,description:t.excerpt,twitterImage:t.frontmatter.twitterImage?t.frontmatter.twitterImage:null,openGraphImage:t.frontmatter.openGraphImage?t.frontmatter.openGraphImage:null}),u.createElement("h2",{className:"post-title"},t.frontmatter.title),u.createElement("p",{className:"post-date"},t.frontmatter.date),t.frontmatter.lastUpdated&&u.createElement("p",{className:"last-updated-date"},"Last updated on "+t.frontmatter.lastUpdated),r&&u.createElement(a.G,{image:r,alt:t.frontmatter.featuredImageAltText,className:"post-featured-image",imgClassName:"post-featured-image-img"}),u.createElement(s.MDXProvider,{components:l},u.createElement(c.MDXRenderer,null,t.body)))}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-619e2689e3ba4999d8a9.js.map