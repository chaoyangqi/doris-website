"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[287997],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},226614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),i=(n(296540),n(15680));const o={title:"Compaction",language:"en"},r=void 0,l={unversionedId:"admin-manual/compaction",id:"admin-manual/compaction",title:"Compaction",description:"\x3c!--",source:"@site/docs/admin-manual/compaction.md",sourceDirName:"admin-manual",slug:"/admin-manual/compaction",permalink:"/docs/dev/admin-manual/compaction",draft:!1,tags:[],version:"current",frontMatter:{title:"Compaction",language:"en"},sidebar:"docs",previous:{title:"Small File Manager",permalink:"/docs/dev/admin-manual/small-file-mgr"},next:{title:"Using rowsets",permalink:"/docs/dev/admin-manual/rowsets"}},c={},s=[{value:"Vertical compaction",id:"vertical-compaction",level:2},{value:"Segment compaction",id:"segment-compaction",level:2},{value:"Single replica compaction",id:"single-replica-compaction",level:2},{value:"Compaction strategy",id:"compaction-strategy",level:2},{value:"Size-based compaction strategy",id:"size-based-compaction-strategy",level:3},{value:"Time series compaction strategy",id:"time-series-compaction-strategy",level:3},{value:"Compaction concurrency control",id:"compaction-concurrency-control",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"compaction"},"Compaction"),(0,i.yg)("p",null,"Doris writes data through a structure similar to LSM-Tree, and continuously merges small files into large ordered files through compaction in the background. Compaction handles operations such as deletion and updating. "),(0,i.yg)("p",null,"Appropriately adjusting the compaction strategy can greatly improve load and query efficiency. Doris provides the following compaction strategies for tuning:"),(0,i.yg)("h2",{id:"vertical-compaction"},"Vertical compaction"),(0,i.yg)("p",null,"Vertical compaction is a new compaction algorithm implemented in Doris 1.2.2, which is used to optimize compaction execution efficiency and resource overhead in large-scale and wide table scenarios. It can effectively reduce the memory overhead of compaction and improve the execution speed of compaction. The test results show that the memory consumption by vertical compaction is only 1/10 of the original compaction algorithm, and the compaction rate is increased by 15%."),(0,i.yg)("p",null,"In vertical compaction, merging by row is changed to merging by column group. The granularity of each merge is changed to column group, which reduces the amount of data involved in single compaction and reduces the memory usage during compaction."),(0,i.yg)("p",null,"BE configuration\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enable_vertical_compaction = true")," will turn on vertical compaction"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"vertical_compaction_num_columns_per_group = 5")," The number of columns contained in each column group, by testing, the efficiency and memory usage of a group of 5 columns by default is more friendly"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"vertical_compaction_max_segment_size")," is used to configure the size of the disk file after vertical compaction, the default value is 268435456 (bytes)")),(0,i.yg)("h2",{id:"segment-compaction"},"Segment compaction"),(0,i.yg)("p",null,"Segment compaction mainly deals with the large-scale data load. Segment compaction operates during the load process and compact segments inside the job, which is different from normal compaction and vertical compaction. This mechanism can effectively reduce the number of generated segments and avoid the -238 (OLAP_ERR_TOO_MANY_SEGMENTS) errors."),(0,i.yg)("p",null,"The following features are provided by segment compaction:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"reduce the number of segments generated by load"),(0,i.yg)("li",{parentName:"ul"},"the compacting process is parallel to the load process, which will not increase the load time"),(0,i.yg)("li",{parentName:"ul"},"memory consumption and computing resources will increase during loading, but the increase is relatively low because it is evenly distributed throughout the long load process."),(0,i.yg)("li",{parentName:"ul"},"data after segment compaction will have resource and performance advantages in subsequent queries and normal compaction.")),(0,i.yg)("p",null,"BE configuration:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enable_segcompaction=true")," turn it on."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"segcompaction_batch_size")," is used to configure the interval for merging. The default value 10 means that every 10 segment files will trigger a segment compaction. It is recommended to set between 10 - 30. The larger value will increase the memory usage of segment compaction.")),(0,i.yg)("p",null,"Situations where segment compaction is recommended:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Loading large amounts of data fails at OLAP",(0,i.yg)("em",{parentName:"li"}," ERR")," TOO",(0,i.yg)("em",{parentName:"li"}," MANY")," SEGMENTS (errcode - 238) error. Then it is recommended to turn on segment compaction to reduce the quantity of segments during the load process."),(0,i.yg)("li",{parentName:"ul"},"Too many small files are generated during the load process: although the amount of loading data is reasonable, the generation of a large number of small segment files may also fail the load job because of low cardinality or memory constraints that trigger memtable to be flushed in advance. Then it is recommended to turn on this function."),(0,i.yg)("li",{parentName:"ul"},"Query immediately after loading. When the load is just finished and the standard compaction has not finished, large number of segment files will affect the efficiency of subsequent queries. If the user needs to query immediately after loading, it is recommended to turn on this function."),(0,i.yg)("li",{parentName:"ul"},"The pressure of normal compaction is high after loading: segment compaction evenly puts part of the pressure of normal compaction on the loading process. At this time, it is recommended to enable this function.")),(0,i.yg)("p",null,"Situations where segment compaction is not recommended:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When the load operation itself has exhausted memory resources, it is not recommended to use the segment compaction to avoid further increasing memory pressure and causing the load job to fail.")),(0,i.yg)("p",null,"Refer to this ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12866"},"link")," for more information about implementation and test results."),(0,i.yg)("h2",{id:"single-replica-compaction"},"Single replica compaction"),(0,i.yg)("p",null,"By default, compaction for multiple replicas is performed independently, with each replica consuming CPU and IO resources. When single replica compaction is enabled, only one replica performs the compaction. Afterward, the other replicas pull the compacted files from this replica, resulting in CPU resources being consumed only once, saving N - 1 times CPU usage (where N is the number of replicas)."),(0,i.yg)("p",null,"Single replica compaction is specified in the table's PROPERTIES via the parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_single_replica_compaction"),", which is false by default (disabled). To enable it, set the parameter to true."),(0,i.yg)("p",null,"This parameter can be specified when creating the table or modified later using:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name SET("enable_single_replica_compaction" = "true");\n')),(0,i.yg)("h2",{id:"compaction-strategy"},"Compaction strategy"),(0,i.yg)("p",null,"The compaction strategy determines when and which small files are merged into larger files. Doris currently offers two compaction strategies, specified by the ",(0,i.yg)("inlineCode",{parentName:"p"},"compaction_policy")," parameter in the table properties."),(0,i.yg)("h3",{id:"size-based-compaction-strategy"},"Size-based compaction strategy"),(0,i.yg)("p",null,"The size-based compaction strategy is the default strategy and is suitable for most scenarios."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'"compaction_policy" = "size_based"\n')),(0,i.yg)("h3",{id:"time-series-compaction-strategy"},"Time series compaction strategy"),(0,i.yg)("p",null,"The time series compaction strategy is optimized for scenarios like logs and time-series data. It leverages the time locality of time-series data, merging small files written in adjacent times into larger files. Each file participates in compaction only once, reducing write amplification from repeated compaction."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'"compaction_policy" = "time_series"\n')),(0,i.yg)("p",null,"The time series compaction strategy is triggered when any of the following conditions are met:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The size of unmerged files exceeds ",(0,i.yg)("inlineCode",{parentName:"li"},"time_series_compaction_goal_size_mbytes")," (default 1 GB)."),(0,i.yg)("li",{parentName:"ul"},"The number of unmerged files exceeds ",(0,i.yg)("inlineCode",{parentName:"li"},"time_series_compaction_file_count_threshold")," (default 2000)."),(0,i.yg)("li",{parentName:"ul"},"The time since the last compaction exceeds ",(0,i.yg)("inlineCode",{parentName:"li"},"time_series_compaction_time_threshold_seconds")," (default 1 hour).")),(0,i.yg)("p",null,"These parameters are set in the table's PROPERTIES and can be specified when creating the table or modified later using:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'ALTER TABLE table_name SET("name" = "value");\n')),(0,i.yg)("h2",{id:"compaction-concurrency-control"},"Compaction concurrency control"),(0,i.yg)("p",null,"Compaction runs in the background and consumes CPU and IO resources. The resource consumption can be controlled by adjusting the number of concurrent compaction threads."),(0,i.yg)("p",null,"The number of concurrent compaction threads is configured in the BE configuration file, including the following parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"max_base_compaction_threads"),": Number of base compaction threads, default is 4."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"max_cumu_compaction_threads"),": Number of cumulative compaction threads, default is -1, which mean that 1 thread per disk."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"max_single_replica_compaction_threads"),": Number of threads for fetching data files during single replica compaction, default is 10.")))}u.isMDXComponent=!0}}]);