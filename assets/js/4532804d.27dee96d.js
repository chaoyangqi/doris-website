"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[957321],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>f});var r=t(296540);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var i=r.createContext({}),l=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(i.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,o=n.originalType,i=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=l(t),y=s,f=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return t?r.createElement(f,a(a({ref:e},u),{},{components:t})):r.createElement(f,a({ref:e},u))}));function f(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=t.length,a=new Array(o);a[0]=y;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c[p]="string"==typeof n?n:s,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},838725:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),s=(t(296540),t(15680));const o={title:"CONCAT_WS",language:"en"},a=void 0,c={unversionedId:"sql-manual/sql-functions/string-functions/concat-ws",id:"version-3.0/sql-manual/sql-functions/string-functions/concat-ws",title:"CONCAT_WS",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/concat-ws.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/concat-ws",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/concat-ws",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CONCAT_WS",language:"en"},sidebar:"docs",previous:{title:"CONCAT",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/concat"},next:{title:"SUBSTRING",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/substring"}},i={},l=[{value:"concat_ws",id:"concat_ws",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function d(n){let{components:e,...t}=n;return(0,s.yg)(p,(0,r.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"concat_ws"},"concat_ws"),(0,s.yg)("h3",{id:"description"},"Description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},"VARCHAR concat_ws(VARCHAR sep, VARCHAR str,...)\nVARCHAR concat_ws(VARCHAR sep, ARRAY array)\n")),(0,s.yg)("p",null,"Using the first parameter SEP as a connector, the second parameter and all subsequent parameters(or all string in an ARRAY) are spliced into a string.\nIf the separator is NULL, return NULL.\nThe ",(0,s.yg)("inlineCode",{parentName:"p"},"concat_ws")," function does not skip empty strings, it skips NULL values."),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'mysql> select concat_ws("or", "d", "is");\n+----------------------------+\n| concat_ws(\'or\', \'d\', \'is\') |\n+----------------------------+\n| doris                      |\n+----------------------------+\n\nmysql> select concat_ws(NULL, "d", "is");\n+----------------------------+\n| concat_ws(NULL, \'d\', \'is\') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nmysql> select concat_ws("or", "d", NULL,"is");\n+---------------------------------+\n| concat_ws("or", "d", NULL,"is") |\n+---------------------------------+\n| doris                           |\n+---------------------------------+\n\nmysql> select concat_ws("or", ["d", "is"]);\n+-----------------------------------+\n| concat_ws(\'or\', ARRAY(\'d\', \'is\')) |\n+-----------------------------------+\n| doris                             |\n+-----------------------------------+\n\nmysql> select concat_ws(NULL, ["d", "is"]);\n+-----------------------------------+\n| concat_ws(NULL, ARRAY(\'d\', \'is\')) |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n\nmysql> select concat_ws("or", ["d", NULL,"is"]);\n+-----------------------------------------+\n| concat_ws(\'or\', ARRAY(\'d\', NULL, \'is\')) |\n+-----------------------------------------+\n| doris                                   |\n+-----------------------------------------+\n')),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"CONCAT_WS,CONCAT,WS,ARRAY\n")))}d.isMDXComponent=!0}}]);