(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(113)),l={title:"The Transpiler",description:"The Transpiler | Transloco Angular i18n"},i={unversionedId:"transpiler",id:"transpiler",isDocsHomePage:!1,title:"The Transpiler",description:"The Transpiler | Transloco Angular i18n",source:"@site/docs/transpiler.mdx",slug:"/transpiler",permalink:"/transloco/docs/transpiler",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/transpiler.mdx",version:"current",sidebar:"docs",previous:{title:"Loading Template",permalink:"/transloco/docs/loading-template"},next:{title:"Hack The Library",permalink:"/transloco/docs/hack"}},s=[{value:"DefaultTranspiler",id:"defaulttranspiler",children:[]},{value:"Functional Transpiler",id:"functional-transpiler",children:[{value:"Usage",id:"usage",children:[]},{value:"Usage Notes",id:"usage-notes",children:[]}]},{value:"Custom Transpiler",id:"custom-transpiler",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The transpiler is responsible for resolving the given value.",Object(o.b)("br",{parentName:"p"}),"\n","For example, when given ",Object(o.b)("inlineCode",{parentName:"p"},"Hello {{ key }}")," the default transpiler will replace the dynamic variable ",Object(o.b)("inlineCode",{parentName:"p"},"key")," based on the given params, or in some cases, within the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./additional-functionality#reference-other-keys"}),"translation object itself"),"."),Object(o.b)("h2",{id:"defaulttranspiler"},"DefaultTranspiler"),Object(o.b)("p",null,"The default transpiler can be configured with custom interpolation start and end markings to match message parameters."),Object(o.b)("p",null,"To configure the ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultTranspiler")," interpolation markings you must provide a Transloco config with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./config-options#interpolation"}),"interpolation")," property set. "),Object(o.b)("h2",{id:"functional-transpiler"},"Functional Transpiler"),Object(o.b)("p",null,"In addition to the default transpiler, Transloco also exposes the ",Object(o.b)("inlineCode",{parentName:"p"},"FunctionalTranspiler")," which allows you to implement function calls into your translation values. This way you can leverage Angular's DI power and make your translations even more flexible."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"FunctionalTranspiler")," is compatible with the ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultTranspiler"),", therefore you can switch to the functional without worrying that it'll break your current translations. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Switching back to the default transpiler will require you to remove all the functional syntax."))),Object(o.b)("p",null,"To enable this transpiler, add the following provider in your ",Object(o.b)("inlineCode",{parentName:"p"},"TranslocoRootModule"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'}),"import { FunctionalTranspiler, TRANSLOCO_TRANSPILER } from '@ngneat/transloco';\n\n@NgModule({\n  ...\n  providers: [{\n    provide: TRANSLOCO_TRANSPILER,\n    useClass: FunctionalTranspiler\n  }]\n})\nexport class TranslocoRootModule {}\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"In order to use a function in the translation, we need to provide it to the transpiler.",Object(o.b)("br",{parentName:"p"}),"\n","We do so by creating a new class that implements the ",Object(o.b)("inlineCode",{parentName:"p"},"TranslocoTranspilerFunction")," interface."),Object(o.b)("p",null,"For example, let's say we want to display different texts, based on whether the user is exposed to a specific feature or not:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="has-feature-flag.ts"',title:'"has-feature-flag.ts"'}),"import { FFService } from './feature-flag.service';\nimport { TranslocoTranspilerFunction } from '@ngneat/transloco';\n\nclass FeatureFlagResolver implements TranslocoTranspilerFunction {\n  constructor(private featureFlagService: FFService) {}\n  \n  transpile(...args: string[]): any {\n    const [flagName, trueValue, falseValue] = args;\n    \n    return this.featureFlagService.hasFF(flagName) ? trueValue : falseValue;\n  }\n}\n")),Object(o.b)("p",null,"As you can see, the ",Object(o.b)("inlineCode",{parentName:"p"},"transpile")," function can accept any number of arguments; you're the one who defines which arguments will be passed. In my case I'm passing three:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The feature flag's name."),Object(o.b)("li",{parentName:"ul"},"The value I want to present in case the user has the flag."),Object(o.b)("li",{parentName:"ul"},"The value I want to present in case the user doesn't have the flag.")),Object(o.b)("p",null,"Now we will add this transpiler function to the ",Object(o.b)("inlineCode",{parentName:"p"},"TranslocoRootModule")," providers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'}),"import { FunctionalTranspiler, TRANSLOCO_TRANSPILER } from '@ngneat/transloco';\nimport { FeatureFlagResolver } from './has-feature-flag';\n\n@NgModule({\n  ...\n  providers: [{\n    provide: TRANSLOCO_TRANSPILER,\n    useClass: FunctionalTranspiler\n  },\n  {\n    provide: 'hasFeatureFlag', // ====> The function name used in the translation\n    useClass: FeatureFlagResolver\n  }],\n})\nexport class TranslocoRootModule {}\n")),Object(o.b)("p",null,"The functional syntax is very similar to calling a regular function, here is an example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "title": "[[ hasFeatureFlag(newDashboards, has flag, missing flag) ]]",\n}\n')),Object(o.b)("p",null,"In this case, we are checking if the user has the ",Object(o.b)("inlineCode",{parentName:"p"},"newDashboard")," flag, and in case he does, we want to display ",Object(o.b)("inlineCode",{parentName:"p"},"'has flag'"),"; otherwise, we will display ",Object(o.b)("inlineCode",{parentName:"p"},"'missing flag'"),"."),Object(o.b)("h3",{id:"usage-notes"},"Usage Notes"),Object(o.b)("p",null,"If the function returns a string that includes the interpolation syntax (",Object(o.b)("inlineCode",{parentName:"p"},"{{value}}"),"), the transpiler will replace it with the ",Object(o.b)("inlineCode",{parentName:"p"},"params")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./additional-functionality#reference-other-keys"}),"other keys references")," just like the default transpiler does."),Object(o.b)("p",null,"If your function param needs to include a comma, you need to escape it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "title": "[[ someFunc(Hello {{user}}\\\\, welcome ,...) ]]",\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"'Hello {{user}}, welcome'")," will be the first param passed."),Object(o.b)("h2",{id:"custom-transpiler"},"Custom Transpiler"),Object(o.b)("p",null,"You can also provide a custom transpiler by creating a class that implements the ",Object(o.b)("inlineCode",{parentName:"p"},"TranslocoTranspiler")," interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { TranslocoTranspiler } from '@ngneat/transloco';\n\nexport class CustomTranspiler implements TranslocoTranspiler {\n  transpile(value: any, params, translation: Translation) {\n    return ...;\n  }\n}\n\nexport const customTranspiler = {\n  provide: TRANSLOCO_TRANSPILER,\n  useClass: CustomTranspiler\n}\n")))}p.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);