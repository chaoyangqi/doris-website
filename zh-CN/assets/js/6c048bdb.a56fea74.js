"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73786],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),S=a,y=m["".concat(i,".").concat(S)]||m[S]||p[S]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=S;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},291597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-COLUMN-STATS",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",title:"SHOW-COLUMN-STATS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLUMN-STATS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-COLUMN-STATS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-COLUMNS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLUMNS"},next:{title:"SHOW-COLLATION",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLLATION"}},i={},u=[{value:"SHOW-COLUMN-STATS",id:"show-column-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-column-stats"},"SHOW-COLUMN-STATS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW COLUMN STATS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW COLUMN STATS")," \u6765\u67e5\u770b\u5217\u7684\u5404\u9879\u7edf\u8ba1\u6570\u636e\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n")),(0,a.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"cached: \u5c55\u793a\u5f53\u524d FE \u5185\u5b58\u7f13\u5b58\u4e2d\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,a.yg)("li",{parentName:"ul"},"table_name: \u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,a.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,a.yg)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\uff0c\u5fc5\u987b\u662f \xa0",(0,a.yg)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002")),(0,a.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"SHOW, COLUMN, STATS"))}p.isMDXComponent=!0}}]);