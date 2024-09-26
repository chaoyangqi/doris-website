"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[776871],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),b=i,u=p["".concat(c,".").concat(b)]||p[b]||m[b]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},78794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(58168),i=(a(296540),a(15680));const r={title:"Smartbi",language:"en"},o=void 0,s={unversionedId:"ecosystem/bi/smartbi",id:"version-3.0/ecosystem/bi/smartbi",title:"Smartbi",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/bi/smartbi.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/smartbi",permalink:"/docs/3.0/ecosystem/bi/smartbi",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Smartbi",language:"en"},sidebar:"ecosystem",previous:{title:"Quick BI",permalink:"/docs/3.0/ecosystem/bi/quickbi"}},c={},l=[{value:"Smartbi Introduction",id:"smartbi-introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Data connection and application",id:"data-connection-and-application",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"smartbi-introduction"},"Smartbi Introduction"),(0,i.yg)("p",null,"Smartbi is a collection of software services and application connectors that can connect to a variety of data sources, including Oracle, SQL Server, MySQL, and Doris, enabling users to integrate and cleanse their data easily. With Smartbi's data modeling capabilities, users can not only create complex relational models but also write data analysis expressions and establish data relationships, laying the foundation for advanced data analysis and visualization. SmartBI offers a diverse range of visualization options, including various types of charts, geographic maps, interactive dashboards, and customizable visualization tools. These powerful tools help users understand and present their data more intuitively and comprehensively, enhancing the effectiveness and efficiency of data analysis."),(0,i.yg)("h2",{id:"precondition"},"Precondition"),(0,i.yg)("p",null,"you can visit  ",(0,i.yg)("a",{parentName:"p",href:"https://www.smartbi.info/download"},"https://www.smartbi.info/download")," to download and install Smartbi."),(0,i.yg)("h2",{id:"data-connection-and-application"},"Data connection and application"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Log into Smartbi and click Data Connections."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"main page",src:a(890024).A,width:"1800",height:"1408"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After clicking the data connections, you can find a list of databases to be connected with and select the Doris database."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"selectdb",src:a(691651).A,width:"326",height:"338"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After selecting the database, fill in the connection information of the Doris database"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"data source connection",src:a(374074).A,width:"2038",height:"1080"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"If the information is correct and the network is connected, a message is displayed indicating that the Test passed."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"test passed",src:a(130581).A,width:"512",height:"270"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After the connection is successful, you can customize and set the required report information in the data analysis module Self-service dashboard."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"data analysis",src:a(761484).A,width:"732",height:"832"})))))}m.isMDXComponent=!0},890024:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-smartbi-en-1-ba1fe7838e1e6c444dc7be097a31fbda.png"},691651:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-smartbi-en-2-68da5c476c7b3b5316bb5bf61719d9d4.png"},374074:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-smartbi-en-3-eb95d02a9bcc6bec0debb34927b6c4d2.png"},130581:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-smartbi-en-4-12c850b0f35e5704a2c3a4beed202a01.png"},761484:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-smartbi-en-5-e01aa9d2d89867b981bce724215fbab5.png"}}]);