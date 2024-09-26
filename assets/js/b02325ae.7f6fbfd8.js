"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[79801],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),y=r,g=c["".concat(m,".").concat(y)]||c[y]||u[y]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},687455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"file_cache_statistics",language:"en"},l=void 0,o={unversionedId:"admin-manual/system-tables/file_cache_statistics",id:"version-2.1/admin-manual/system-tables/file_cache_statistics",title:"file_cache_statistics",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/system-tables/file_cache_statistics.md",sourceDirName:"admin-manual/system-tables",slug:"/admin-manual/system-tables/file_cache_statistics",permalink:"/docs/admin-manual/system-tables/file_cache_statistics",draft:!1,tags:[],version:"2.1",frontMatter:{title:"file_cache_statistics",language:"en"},sidebar:"docs",previous:{title:"User Property",permalink:"/docs/admin-manual/config/user-property"},next:{title:"tables",permalink:"/docs/admin-manual/system-tables/tables"}},m={},s=[{value:"Overview",id:"overview",level:2},{value:"Belongs to Database",id:"belongs-to-database",level:2},{value:"Table Information",id:"table-information",level:2},{value:"2.1.x Metrics",id:"21x-metrics",level:3},{value:"3.0.x Metrics",id:"30x-metrics",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Used to view the metric information related to data cache on each BE node. The metric information is sourced from the monitoring metrics related to BE's data cache."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This system table is supported from versions 2.1.6 and 3.0.2.")),(0,r.yg)("h2",{id:"belongs-to-database"},"Belongs to Database"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"table-information"},"Table Information"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BE node ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE_IP"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(256)"),(0,r.yg)("td",{parentName:"tr",align:null},"BE node IP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CACHE_PATH"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(256)"),(0,r.yg)("td",{parentName:"tr",align:null},"BE node cache path")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"METRIC_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(256)"),(0,r.yg)("td",{parentName:"tr",align:null},"Metric name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"METRIC_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"Metric value")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Different Doris version may have different metrics")),(0,r.yg)("h3",{id:"21x-metrics"},"2.1.x Metrics"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Only important metrics are listed.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_curr_elements")),(0,r.yg)("p",{parentName:"li"},"  Number of File Blocks currently in the cache.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_max_elements")),(0,r.yg)("p",{parentName:"li"},"  Maximum number of File Blocks allowed in the cache.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_curr_size")),(0,r.yg)("p",{parentName:"li"},"  Current cache size.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"normal_queue_max_size")),(0,r.yg)("p",{parentName:"li"},"  Maximum cache size allowed.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hits_ratio")),(0,r.yg)("p",{parentName:"li"},"  Overall cache hit ratio since BE startup.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hits_ratio_5m")),(0,r.yg)("p",{parentName:"li"},"  Cache hit ratio in the last 5 minutes.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hits_ratio_1h")),(0,r.yg)("p",{parentName:"li"},"  Cache hit ratio in the last 1 hour."))),(0,r.yg)("h3",{id:"30x-metrics"},"3.0.x Metrics"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Query all cache metrics"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"mysql> select * from information_schema.file_cache_statistics;\n+-------+---------------+----------------------------+----------------------------+--------------------+\n| BE_ID | BE_IP         | CACHE_PATH                 | METRIC_NAME                | METRIC_VALUE       |\n+-------+---------------+----------------------------+----------------------------+--------------------+\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_curr_elements |               1392 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_curr_size     |          248922234 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_max_elements  |             102400 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | normal_queue_max_size      |        21474836480 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio                 | 0.8539634687001242 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio_1h              |                  0 |\n| 10003 | 172.20.32.136 | /mnt/output/be/file_cache/ | hits_ratio_5m              |                  0 |\n+-------+---------------+----------------------------+----------------------------+--------------------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Query cache hit ratio and sort by hit ratio"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'select * from information_schema.file_cache_statistics where METRIC_NAME = "hits_ratio" order by METRIC_VALUE desc;\n')))))}u.isMDXComponent=!0}}]);