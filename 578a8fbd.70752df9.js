(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(r,".").concat(m)]||s[m]||d[m]||i;return n?l.a.createElement(O,o(o({ref:t},b),{},{components:n})):l.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<i;b++)r[b]=n[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(113)),r={title:"ngx-translate",description:"ngx-translate Migration | Transloco Angular i18n"},o={unversionedId:"migration/ngx",id:"migration/ngx",isDocsHomePage:!1,title:"ngx-translate",description:"ngx-translate Migration | Transloco Angular i18n",source:"@site/docs/migration/ngx.mdx",slug:"/migration/ngx",permalink:"/transloco/docs/migration/ngx",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/migration/ngx.mdx",version:"current",sidebar:"docs",previous:{title:"Schematics",permalink:"/transloco/docs/schematics"},next:{title:"Angular",permalink:"/transloco/docs/migration/angular"}},c=[{value:"Command",id:"command",children:[]},{value:"What will be done?",id:"what-will-be-done",children:[{value:"Pipes",id:"pipes",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Imports",id:"imports",children:[]},{value:"Constructor Injections",id:"constructor-injections",children:[]},{value:"Service Usages",id:"service-usages",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Specs",id:"specs",children:[]},{value:"Issues",id:"issues",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"some manual changes might still be needed after the script ran."))),Object(i.b)("h3",{id:"command"},"Command"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ng g @ngneat/transloco:migrate")),Object(i.b)("h2",{id:"what-will-be-done"},"What will be done?"),Object(i.b)("p",null,"The script will iterate recursively over all your ",Object(i.b)("inlineCode",{parentName:"p"},"HTML")," and ",Object(i.b)("inlineCode",{parentName:"p"},"TS")," files and will execute the replacements described below:"),Object(i.b)("h3",{id:"pipes"},"Pipes"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"translate")," pipes will be replaced with the ",Object(i.b)("inlineCode",{parentName:"p"},"transloco")," pipe."),Object(i.b)("h5",{id:"examples"},"Examples:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},'{{ "hello.world" | translate }}')," will be replaced with",Object(i.b)("inlineCode",{parentName:"li"},'{{ "hello.world" | transloco }}')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},'{{ "hello.world" | translate | anotherPipe | oneMore ... }}')," will be replaced with",Object(i.b)("inlineCode",{parentName:"li"},'{{ "hello.world" | transloco | anotherPipe | oneMore ... }}')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"{{ \"hello\" | translate:{name: 'Jhon'} }}")," will be replaced with",Object(i.b)("inlineCode",{parentName:"li"},"{{ \"hello\" | transloco:{name: 'Jhon'} }}")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"{{ \"hello\" | translate:{name: 'Jhon'} | anotherPipe }}")," will be replaced with",Object(i.b)("inlineCode",{parentName:"li"},"{{ \"hello\" | transloco:{name: 'Jhon'} | anotherPipe }}")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"<component [header]=\"'hello.world' | translate\"...")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"<component [header]=\"'hello.world' | transloco\"...")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"<component [header]=\"'hello.world' | translate | anotherPipe\"...")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"<component [header]=\"'hello.world' | transloco | anotherPipe\"...")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"<component [header]=\"'hello' | translate:params | anotherPipe\"...")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"<component [header]=\"'hello' | transloco:params | anotherPipe\"..."))),Object(i.b)("h3",{id:"directives"},"Directives"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"translate")," & ",Object(i.b)("inlineCode",{parentName:"p"},"translateParams")," directives will be replaced with the matching ",Object(i.b)("inlineCode",{parentName:"p"},"transloco")," directives."),Object(i.b)("h5",{id:"examples-1"},"Examples:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"<div [translate]=\"'HELLO'\" [translateParams]=\"{value: 'world'}\"></div>")," will be replaced with",Object(i.b)("inlineCode",{parentName:"li"},"<div [transloco]=\"'HELLO'\" [translocoParams]=\"{value: 'world'}\"></div>"))),Object(i.b)("h3",{id:"imports"},"Imports"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"TranslateService")," imports will be replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"TranslocoService"),"."),Object(i.b)("h5",{id:"examples-2"},"Examples:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"import {TranslateService} from '@ngx-translate/core';")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"import { TranslocoService } from '@ngneat/transloco';")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"import {TranslateModule, TranslateLoader} from '@ngx-translate/core';")," will be replaced with\n",Object(i.b)("inlineCode",{parentName:"li"},"import {TranslateLoader} from '@ngx-translate/core';"),Object(i.b)("inlineCode",{parentName:"li"},"import { TranslocoService } from '@ngneat/transloco';"))),Object(i.b)("h3",{id:"constructor-injections"},"Constructor Injections"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"TranslateService")," injections will be replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"TranslocoService"),"."),Object(i.b)("h5",{id:"examples-3"},"Examples:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"constructor(private translate: TranslateService) {")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"constructor(private translate: TranslocoService) {"))),Object(i.b)("h3",{id:"service-usages"},"Service Usages"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.currentLang")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.getActiveLang()"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.onLangChange")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.langChanges$"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.use(...)")," calls will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.setActiveLang(...)"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.instant(...)")," calls will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.translate(...)"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.get(...)")," calls will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.selectTranslate(...)")," and ",Object(i.b)("inlineCode",{parentName:"li"},"take(1)")," needs to be manually added ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.selectTranslate(...).pipe(take(1))")," in order to prevent listening to language changes."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.stream(...)")," calls will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.selectTranslate(...)"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"translateService.set(...)")," calls will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"translateService.setTranslation(...)"),".")),Object(i.b)("h5",{id:"examples-4"},"Examples:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"const translation = this.translateService.instant('hello')")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"const translation = this.translateService.translate('hello')"))),Object(i.b)("h5",{id:"manual-replacements"},"Manual Replacements"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"getBrowserLang()")," - In Transloco it's a pure function that needs to be imported."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"getBrowserCultureLang()")," - In Transloco it's a pure function that needs to be imported."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"currentLoader")," - No equivalent in Transloco."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"addLangs(...)")," - No equivalent in Transloco."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"getLangs(...)")," - No equivalent in Transloco."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"reloadLang(...)")," - No equivalent in Transloco."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"resetLang(...)")," - No equivalent in Transloco.")),Object(i.b)("h3",{id:"modules"},"Modules"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TranslateModule")," & ",Object(i.b)("inlineCode",{parentName:"p"},"TranslateModule.forChild(...)")," & ",Object(i.b)("inlineCode",{parentName:"p"},"TranslateModule.forRoot(...)")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"TranslocoModule")),Object(i.b)("h5",{id:"examples-5"},"Examples:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"TranslateModule.forChild({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } })")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"TranslocoModule"))),Object(i.b)("h3",{id:"specs"},"Specs"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#imports"}),"Imports"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#modules"}),"Modules")," and ",Object(i.b)("inlineCode",{parentName:"p"},"TranslateService")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"TranslocoService")),Object(i.b)("h3",{id:"issues"},"Issues"),Object(i.b)("p",null,"If you encounter any issues with the migration script please open a github issue so we can resolve them and make a better experience for all."))}p.isMDXComponent=!0}}]);