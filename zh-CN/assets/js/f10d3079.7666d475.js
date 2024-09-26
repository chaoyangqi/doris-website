"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[148329],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>f});var t=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,u=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||u;return r?t.createElement(f,c(c({ref:n},s),{},{components:r})):t.createElement(f,c({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=r.length,c=new Array(u);c[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[p]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<u;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21159:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>l});var t=r(58168),i=(r(296540),r(15680));const u={title:"uuid_numeric",language:"zh-CN"},c=void 0,o={unversionedId:"sql-manual/sql-functions/numeric-functions/uuid_numeric",id:"sql-manual/sql-functions/numeric-functions/uuid_numeric",title:"uuid_numeric",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/uuid_numeric.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/uuid_numeric",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/uuid_numeric",draft:!1,tags:[],version:"current",frontMatter:{title:"uuid_numeric",language:"zh-CN"},sidebar:"docs",previous:{title:"RUNNING_DIFFERENCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/running-difference"},next:{title:"AES_ENCRYPT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt"}},a={},l=[{value:"uuid_numeric",id:"uuid_numeric",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"uuid_numeric"},"uuid_numeric"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"LARGEINT uuid_numeric()")),(0,i.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"p"},"LARGEINT")," \u7c7b\u578b\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"uuid"),"\u3002\u6ce8\u610f ",(0,i.yg)("inlineCode",{parentName:"p"},"LARGEINT")," \u662f\u4e00\u4e2a Int128\uff0c\u6240\u4ee5 ",(0,i.yg)("inlineCode",{parentName:"p"},"uuid_numeric()")," \u53ef\u80fd\u4f1a\u5f97\u5230\u8d1f\u503c\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\nmysql> select uuid_numeric();\n+----------------------------------------+\n| uuid_numeric()                         |\n+----------------------------------------+\n| 82218484683747862468445277894131281464 |\n+----------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"UUID UUID-NUMERIC\n")))}d.isMDXComponent=!0}}]);