"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[306145],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},495871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TABLETS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS",title:"SHOW-TABLETS",description:"---",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS",draft:!1,tags:[],version:"2.1",frontMatter:{},sidebar:"docs",previous:{title:"SHOW-OPEN-TABLES",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-OPEN-TABLES"},next:{title:"SHOW-LOAD",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-LOAD"}},i={},p=[{value:"}",id:"",level:2},{value:"SHOW-TABLETS",id:"show-tablets",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("p",null,'{\n"title": "SHOW-TABLETS",\n"language": "en"'),(0,r.yg)("h2",{id:""},"}"),(0,r.yg)("h2",{id:"show-tablets"},"SHOW-TABLETS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW TABLETS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to list tablets of the specified table (only for administrators)"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM [database.]table [PARTITIONS(p1,p2)]\n[WHERE where_condition]\n[ORDER BY col_name]\n[LIMIT [offset,] row_count]\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Syntax Description:"))),(0,r.yg)("p",null,"where_condition could be one of:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Version = version\nstate = "NORMAL|ROLLUP|CLONE|DECOMMISSION"\nBackendId = backend_id\nIndexName = rollup_name\n')),(0,r.yg)("p",null,"or compound them with operator ",(0,r.yg)("inlineCode",{parentName:"p"},"AND"),"."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"list all tablets of the specified table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM example_db.table_name;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"list all tablets of the specified partitions"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM example_db.table_name PARTITIONS(p1, p2);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"list all DECOMMISSION tablets on the specified backend"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW TABLETS FROM example_db.table_name WHERE state="DECOMMISSION" AND BackendId=11003;\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, TABLETS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);