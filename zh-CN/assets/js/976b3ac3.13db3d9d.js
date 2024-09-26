"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[907725],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},885321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const o={title:"EXP",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/exp",id:"version-2.0/sql-manual/sql-functions/numeric-functions/exp",title:"EXP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/exp.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/exp",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/exp",draft:!1,tags:[],version:"2.0",frontMatter:{title:"EXP",language:"zh-CN"},sidebar:"docs",previous:{title:"PI",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/pi"},next:{title:"LOG",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/log"}},c={},s=[{value:"exp",id:"exp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"exp"},"exp"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DOUBLE exp(DOUBLE x)"),"\n\u8fd4\u56de\u4ee5",(0,i.yg)("inlineCode",{parentName:"p"},"e"),"\u4e3a\u5e95\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5e42."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"\u8be5\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"dexp"),"\u3002")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select exp(2);\n+------------------+\n| exp(2.0)         |\n+------------------+\n| 7.38905609893065 |\n+------------------+\nmysql> select exp(3.4);\n+--------------------+\n| exp(3.4)           |\n+--------------------+\n| 29.964100047397011 |\n+--------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"EXP, DEXP\n")))}m.isMDXComponent=!0}}]);