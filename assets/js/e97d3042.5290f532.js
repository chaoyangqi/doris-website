"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[278935],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},905255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const o={title:"Show Meta Info Action",language:"en"},i=void 0,p={unversionedId:"admin-manual/open-api/fe-http/show-meta-info-action",id:"admin-manual/open-api/fe-http/show-meta-info-action",title:"Show Meta Info Action",description:"\x3c!--",source:"@site/docs/admin-manual/open-api/fe-http/show-meta-info-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/show-meta-info-action",permalink:"/docs/dev/admin-manual/open-api/fe-http/show-meta-info-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Show Meta Info Action",language:"en"},sidebar:"docs",previous:{title:"Show Data Action",permalink:"/docs/dev/admin-manual/open-api/fe-http/show-data-action"},next:{title:"Show Proc Action",permalink:"/docs/dev/admin-manual/open-api/fe-http/show-proc-action"}},l={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"show-meta-info-action"},"Show Meta Info Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_meta_info")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to display some metadata information"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"action"),(0,r.yg)("p",{parentName:"li"},"  Specify the type of metadata information to be obtained. Currently supports the following:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_DB_SIZE")),(0,r.yg)("p",{parentName:"li"},"  Get the data size of the specified database, in bytes.\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_HA")),(0,r.yg)("p",{parentName:"li"},"  Obtain the playback status of FE metadata logs and the status of electable groups."))))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_DB_SIZE")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:information_schema": 0,\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_HA")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "can_read": "true",\n        "role": "MASTER",\n        "is_ready": "true",\n        "last_checkpoint_version": "1492",\n        "last_checkpoint_time": "1596465109000",\n        "current_journal_id": "1595",\n        "electable_nodes": "",\n        "observer_nodes": "",\n        "master": "10.81.85.89"\n    },\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the data size of each database in the cluster"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_meta_info?action=show_db_size\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:information_schema": 0,\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the FE election group situation"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_meta_info?action=show_ha\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "can_read": "true",\n        "role": "MASTER",\n        "is_ready": "true",\n        "last_checkpoint_version": "1492",\n        "last_checkpoint_time": "1596465109000",\n        "current_journal_id": "1595",\n        "electable_nodes": "",\n        "observer_nodes": "",\n        "master": "10.81.85.89"\n    },\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);