"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[973846],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>m});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),u=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=u(r),d=t,m=y["".concat(p,".").concat(d)]||y[d]||c[d]||l;return r?a.createElement(m,o(o({ref:n},s),{},{components:r})):a.createElement(m,o({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[y]="string"==typeof e?e:t,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},509193:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(58168),t=(r(296540),r(15680));const l={title:"ARRAY_APPLY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-apply",id:"version-2.1/sql-manual/sql-functions/array-functions/array-apply",title:"ARRAY_APPLY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-apply.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-apply",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-apply",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_APPLY",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_COUNT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-count"},next:{title:"COUNTEQUAL",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/countequal"}},p={},u=[{value:"array_apply",id:"array_apply",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},y="wrapper";function c(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_apply"},"array_apply"),(0,t.yg)("p",null,"array_apply"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"\u6570\u7ec4\u4ee5\u7279\u5b9a\u7684\u4e8c\u5143\u6761\u4ef6\u7b26\u8fc7\u6ee4\u5143\u7d20\uff0c \u5e76\u8fd4\u56de\u8fc7\u6ee4\u540e\u7684\u7ed3\u679c"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"array_apply(arr, op, val)\n")),(0,t.yg)("h4",{id:"arguments"},"Arguments"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"arr")," \u2014 \u8f93\u5165\u7684\u6570\u7ec4\uff0c \u5982\u679c\u662fnull\uff0c \u5219\u8fd4\u56denull\n",(0,t.yg)("inlineCode",{parentName:"p"},"op")," \u2014 \u8fc7\u6ee4\u6761\u4ef6\uff0c \u6761\u4ef6\u5305\u62ec ",(0,t.yg)("inlineCode",{parentName:"p"},"="),", ",(0,t.yg)("inlineCode",{parentName:"p"},">="),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<="),", ",(0,t.yg)("inlineCode",{parentName:"p"},">"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"!="),"\uff0c\u4ec5\u652f\u6301\u5e38\u91cf\n",(0,t.yg)("inlineCode",{parentName:"p"},"val")," \u2014 \u8fc7\u6ee4\u7684\u6761\u4ef6\u503c\uff0c \u5982\u679c\u662fnull\uff0c \u5219\u8fd4\u56denull\uff0c\u4ec5\u652f\u6301\u5e38\u91cf"),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"\u8fc7\u6ee4\u540e\u7684\u6570\u7ec4"),(0,t.yg)("p",null,"\u7c7b\u578b: Array."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'mysql> select array_apply([1, 2, 3, 4, 5], ">=", 2);\n+--------------------------------------------+\n| array_apply(ARRAY(1, 2, 3, 4, 5), \'>=\', 2) |\n+--------------------------------------------+\n| [2, 3, 4, 5]                               |\n+--------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_apply([1000000, 1000001, 1000002], "=", "1000002");\n+-------------------------------------------------------------+\n| array_apply(ARRAY(1000000, 1000001, 1000002), \'=\', 1000002) |\n+-------------------------------------------------------------+\n| [1000002]                                                   |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n')),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,APPLY,ARRAY_APPLY"))}c.isMDXComponent=!0}}]);