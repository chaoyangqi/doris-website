"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[922849],{15680:(e,r,a)=>{a.d(r,{xA:()=>s,yg:()=>b});var n=a(296540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),c=function(e){var r=n.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):m(m({},r),e)),a},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=c(a),u=t,b=y["".concat(l,".").concat(u)]||y[u]||d[u]||i;return a?n.createElement(b,m(m({ref:r},s),{},{components:a})):n.createElement(b,m({ref:r},s))}));function b(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,m=new Array(i);m[0]=u;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[y]="string"==typeof e?e:t,m[1]=o;for(var c=2;c<i;c++)m[c]=a[c];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},876664:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(58168),t=(a(296540),a(15680));const i={title:"Query error Memory Tracker Limit Exceeded",language:"en"},m=void 0,o={unversionedId:"admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",id:"admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",title:"Query error Memory Tracker Limit Exceeded",description:"\x3c!--",source:"@site/docs/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",permalink:"/docs/dev/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",draft:!1,tags:[],version:"current",frontMatter:{title:"Query error Memory Tracker Limit Exceeded",language:"en"},sidebar:"docs",previous:{title:"Query error Process Memory Not Enough",permalink:"/docs/dev/admin-manual/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded"},next:{title:"OOM Killer Crash Analysis",permalink:"/docs/dev/admin-manual/memory-management/memory-analysis/oom-crash-analysis"}},l={},c=[{value:"Error message analysis",id:"error-message-analysis",level:2},{value:"Single execution memory limit and memory over-issuance",id:"single-execution-memory-limit-and-memory-over-issuance",level:2},{value:"Query Memory Analysis",id:"query-memory-analysis",level:2}],s={toc:c},y="wrapper";function d(e){let{components:r,...a}=e;return(0,t.yg)(y,(0,n.A)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"When ",(0,t.yg)("inlineCode",{parentName:"p"},"MEM_LIMIT_EXCEEDED")," appears in the query or load error message and contains ",(0,t.yg)("inlineCode",{parentName:"p"},"memory tracker limit exceeded"),", it means that the task exceeds the single execution memory limit."),(0,t.yg)("h2",{id:"error-message-analysis"},"Error message analysis"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED]PreCatch error code:11, [E11] Allocator mem tracker check failed, [MEM_LIMIT_EXCEEDED] failed alloc size 1.03 MB, memory tracker limit exceeded, tracker label :Query#Id=f78208b15e064527-a84c5c0b04c04fcf, type:query, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB. backend 10.16.10.8, process memory used 2.65 GB. exec node:<execute:<ExecNode:VHASH_JOIN _NODE (id=4)>>, can `set exec_mem_limit=8G` to change limit, details see be.INFO.\n")),(0,t.yg)("p",null,"The error message is divided into two parts:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"failed alloc size 1.03 MB, memory tracker limit exceeded, tracker label:Query#Id=f78208b15e064527-a84c5c0b04c04fcf, type:query, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB"),": Query ",(0,t.yg)("inlineCode",{parentName:"p"},"f78208b15e064527-a84c5c0b04c04fcf")," is currently being executed. When trying to apply for 1.03 MB of memory, it was found that the query exceeded the memory limit for a single execution. The query memory limit is 100 MB (",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," in Session Variables). Currently, 99.25 MB has been used, and the peak memory is 99.29. MB.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"backend 10.16.10.8, process memory used 2.65 GB. exec node:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>, can set exec_mem_limit=8G to change limit, details see be.INFO."),": The location of this memory application is ",(0,t.yg)("inlineCode",{parentName:"p"},"VHASH_JOIN_NODE (id=4)"),", and it is prompted that the memory limit of a single query can be increased by ",(0,t.yg)("inlineCode",{parentName:"p"},"set exec_mem_limit"),"."))),(0,t.yg)("h2",{id:"single-execution-memory-limit-and-memory-over-issuance"},"Single execution memory limit and memory over-issuance"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"show variables;")," You can view Doris Session Veriable, where ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," is the execution memory limit for a single query and load, but since Doris 1.2, query memory over-issuance (overcommit) is supported, aiming to allow queries to set more flexible memory limits. When there is sufficient memory, even if the query memory exceeds the upper limit, it will not be Cancel, so users usually do not need to pay attention to query memory usage. Until the memory is insufficient, the query will wait for a while while trying to allocate new memory. At this time, based on certain rules, the query with a larger ratio of ",(0,t.yg)("inlineCode",{parentName:"p"},"mem_used")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," will be canceled first. If the amount of memory released during the waiting process meets the requirements, the query will continue to execute, otherwise an exception will be thrown and the query will be terminated."),(0,t.yg)("p",null,"If you want to turn off query memory over-issuance, refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/config/be-config"},"BE Configuration Items")," and add ",(0,t.yg)("inlineCode",{parentName:"p"},"enable_query_memory_overcommit=false")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/be.conf"),". At this time, a single query and load memory exceeding ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," will be canceled. If you want to avoid the negative impact of large queries on cluster stability, or want to accurately control the execution of tasks on the cluster to ensure sufficient stability, then you can consider turning off query memory over-issuance."),(0,t.yg)("h2",{id:"query-memory-analysis"},"Query Memory Analysis"),(0,t.yg)("p",null,"If you need to analyze the memory usage of queries, refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/memory-management/memory-analysis/query-memory-analysis"},"Query Memory Analysis"),"."),(0,t.yg)("p",null,"After ",(0,t.yg)("inlineCode",{parentName:"p"},"set enable_profile=true")," is used to enable Query Profile, when a task exceeds the memory limit for a single execution, the call stack of the query requesting memory will be printed in ",(0,t.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO"),", and the current memory used and peak value of each operator in the query can be seen. Refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/memory-management/memory-analysis/memory-log-analysis"},"Memory Log Analysis")," to analyze ",(0,t.yg)("inlineCode",{parentName:"p"},"Process Memory Summary")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," to help confirm whether the current query memory usage meets expectations."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"Allocator mem tracker check failed, [MEM_LIMIT_EXCEEDED]failed alloc size 32.00 MB, memory tracker limit exceeded, tracker label:Query#I\nd=41363cb6ba734ad5-bc8720bdf9b3090d, type:query, limit 100.00 MB, peak used 75.32 MB, current used 72.62 MB. backend 10.16.10.8, process memory used 2.33 GB. exec node:<>, can `set exec_mem_limit=8G`\n to change limit, details see be.INFO.\nProcess Memory Summary:\n    os physical memory 375.81 GB. process memory used 2.33 GB(= 2.60 GB[vm/rss] - 280.53 MB[tc/jemalloc_cache] + 0[reserved] + 0B[waiting_refresh]), limit 338.23 GB, soft limit 304.41 GB. sys availab\nle memory 337.33 GB(= 337.33 GB[proc/available] - 0[reserved] - 0B[waiting_refresh]), low water mark 6.40 GB, warning water mark 12.80 GB.\nMemory Tracker Summary:    MemTrackerLimiter Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Type=query, Limit=100.00 MB(104857600 B), Used=72.62 MB(76146688 B), Peak=75.32 MB(78981248 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=122.00 B(122 B), Peak=122.00 B(122 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=384.00 B(384 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=384.00 B(384 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=21.73 MB(22790276 B), Peak=21.73 MB(22790276 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=2.23 MB(2342912 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=0(0 B), Peak=2.23 MB(2342912 B)\n    MemTracker Label=HASH_JOIN_SINK_OPERATOR, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=24.03 MB(25201284 B), Peak=24.03 MB(25201284 B)\n    MemTracker Label=VDataStreamRecvr:41363cb6ba734ad5-bc8720bdf9b309fe, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=1.08 MB(1130496 B), Peak=7.17 MB(7520256 B)\n    MemTracker Label=local data queue mem tracker, Parent Label=Query#Id=41363cb6ba734ad5-bc8720bdf9b3090d, Used=1.08 MB(1130496 B), Peak=7.17 MB(7520256 B)\n")))}d.isMDXComponent=!0}}]);