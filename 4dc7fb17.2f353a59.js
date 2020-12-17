(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(113)),c={title:"SSR Support",description:"SSR Support | Transloco Angular i18n"},i={unversionedId:"ssr-support",id:"ssr-support",isDocsHomePage:!1,title:"SSR Support",description:"SSR Support | Transloco Angular i18n",source:"@site/docs/ssr-support.mdx",slug:"/ssr-support",permalink:"/transloco/docs/ssr-support",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/ssr-support.mdx",version:"current",sidebar:"docs",previous:{title:"Unit Testing",permalink:"/transloco/docs/unit-testing"},next:{title:"Multiple Languages Simultaneously",permalink:"/transloco/docs/multi-lang"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Create a new CLI project and add SSR support:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng add @nguniversal/express-engine --clientProject <PROJECT-NAME>\n")),Object(a.b)("p",null,"When employing Angular SSR, we need to change our loader base path to be absolute instead of relative, in order for it to work. Run ",Object(a.b)("inlineCode",{parentName:"p"},"ng add @ngneat/transloco")," and choose the SSR option. This will make sure to update the loader to use an absolute path."),Object(a.b)("p",null,"Moreover, Transloco will add a ",Object(a.b)("inlineCode",{parentName:"p"},"baseUrl")," key to the ",Object(a.b)("inlineCode",{parentName:"p"},"environment")," object. Make sure to update it based on your environments."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="environment.ts"',title:'"environment.ts"'}),"export const environment = {\n  production: false,\n  baseUrl: 'http://localhost:4200' <====\n};\n")))}l.isMDXComponent=!0}}]);