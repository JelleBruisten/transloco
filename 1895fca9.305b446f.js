(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),b=r,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(113)),l={title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n"},i={unversionedId:"multi-lang",id:"multi-lang",isDocsHomePage:!1,title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n",source:"@site/docs/multi-lang.mdx",slug:"/multi-lang",permalink:"/transloco/docs/multi-lang",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/multi-lang.mdx",version:"current",sidebar:"docs",previous:{title:"SSR Support",permalink:"/transloco/docs/ssr-support"},next:{title:"Additional Functionality",permalink:"/transloco/docs/additional-functionality"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are times you may need to use a different language in a specific part of the template, or in a particular component or module. This can be achieved in a similar way to the previous example, except here set the ",Object(a.b)("inlineCode",{parentName:"p"},"TRANSLOCO_LANG")," provider either in lazy module providers list, the component providers or in the template."),Object(a.b)("p",null,"Here's an example of setting it in a component's providers:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'{6,7} title="my-comp.component.ts"',"{6,7}":!0,title:'"my-comp.component.ts"'}),"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [\n    {\n      provide: TRANSLOCO_LANG,\n      useValue: 'es'\n    }\n  ]\n})\nexport class MyComponent {}\n")),Object(a.b)("p",null,"Using Angular's DI rules, this will ensure that the language in this component's template and all of its children's templates is ",Object(a.b)("inlineCode",{parentName:"p"},"es"),"."),Object(a.b)("p",null,"Alternatively, here is how to use it directly in the template:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'{1} title="my-comp.component.html"',"{1}":!0,title:'"my-comp.component.html"'}),"<ng-container *transloco=\"let t; lang: 'en'\">\n  <p>Inline (en) wins: {{ t('home') }}</p>\n</ng-container>\n")),Object(a.b)("p",null,"Note that it will be used as the ",Object(a.b)("strong",{parentName:"p"},"initial")," language. If you need it to be ",Object(a.b)("em",{parentName:"p"},"static"),", you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"static")," pipe:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'{7} title="my-comp.component.ts"',"{7}":!0,title:'"my-comp.component.ts"'}),"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [\n    {\n      provide: TRANSLOCO_LANG,\n      useValue: 'es|static'\n    }\n  ]\n})\nexport class MyComponent {}\n")),Object(a.b)("p",null,"Or in the template:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'}),"// Define the lang dynamically in the component\n<ng-container *transloco=\"let t; lang: someVariable\">\n\n// Or pass it as inline string\n<ng-container *transloco=\"let t; lang: 'es|static'\">\n  <p>Inline (es) wins and stays: {{ t('home') }}</p>\n</ng-container>\n")))}s.isMDXComponent=!0}}]);