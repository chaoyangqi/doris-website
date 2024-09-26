"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[600686],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},195125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"\u68c0\u67e5 tablet \u6587\u4ef6\u4e22\u5931",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/open-api/be-http/check-tablet-segment",id:"version-2.1/admin-manual/open-api/be-http/check-tablet-segment",title:"\u68c0\u67e5 tablet \u6587\u4ef6\u4e22\u5931",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/be-http/check-tablet-segment.md",sourceDirName:"admin-manual/open-api/be-http",slug:"/admin-manual/open-api/be-http/check-tablet-segment",permalink:"/zh-CN/docs/admin-manual/open-api/be-http/check-tablet-segment",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u68c0\u67e5 tablet \u6587\u4ef6\u4e22\u5931",language:"zh-CN"},sidebar:"docs",previous:{title:"\u505a\u5feb\u7167",permalink:"/zh-CN/docs/admin-manual/open-api/be-http/snapshot"},next:{title:"BE \u7684\u914d\u7f6e\u4fe1\u606f",permalink:"/zh-CN/docs/admin-manual/open-api/be-http/config"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/check_tablet_segment_lost?repair={bool}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5728 BE \u8282\u70b9\u4e0a\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a\u4e00\u4e9b\u5f02\u5e38\u60c5\u51b5\u5bfc\u81f4\u6570\u636e\u6587\u4ef6\u4e22\u5931\uff0c\u4f46\u662f\u5143\u6570\u636e\u663e\u793a\u6b63\u5e38\uff0c\u8fd9\u79cd\u526f\u672c\u5f02\u5e38\u4e0d\u4f1a\u88ab FE \u68c0\u6d4b\u5230\uff0c\u4e5f\u4e0d\u80fd\u88ab\u4fee\u590d\u3002\n\u5f53\u7528\u6237\u67e5\u8be2\u65f6\uff0c\u4f1a\u62a5\u9519",(0,a.yg)("inlineCode",{parentName:"p"},"failed to initialize storage reader"),"\u3002\u8be5\u63a5\u53e3\u7684\u529f\u80fd\u662f\u68c0\u6d4b\u51fa\u5f53\u524d BE \u8282\u70b9\u4e0a\u6240\u6709\u5b58\u5728\u6587\u4ef6\u4e22\u5931\u7684 tablet\u3002"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"repair")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"true"),"\u65f6\uff0c\u5b58\u5728\u6587\u4ef6\u4e22\u5931\u7684 tablet \u90fd\u4f1a\u88ab\u8bbe\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"SHUTDOWN"),"\u72b6\u6001\uff0c\u8be5\u526f\u672c\u4f1a\u88ab\u4f5c\u4e3a\u574f\u526f\u672c\u5904\u7406\uff0c\u8fdb\u800c\u80fd\u591f\u88ab FE \u68c0\u6d4b\u548c\u4fee\u590d\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"false"),"\u65f6\uff0c\u53ea\u4f1a\u8fd4\u56de\u6240\u6709\u5b58\u5728\u6587\u4ef6\u4e22\u5931\u7684 tablet\uff0c\u5e76\u4e0d\u505a\u4efb\u4f55\u5904\u7406\u3002")))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\u8fd4\u56de\u503c\u662f\u5f53\u524dBE\u8282\u70b9\u4e0a\u6240\u6709\u5b58\u5728\u6587\u4ef6\u4e22\u5931\u7684tablet\n\n```\n{\n    status: "Success",\n    msg: "Succeed to check all tablet segment",\n    num: 3,\n    bad_tablets: [\n        11190,\n        11210,\n        11216\n    ],\n    set_bad: true,\n    host: "172.3.0.101"\n}\n```\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```shell\ncurl http://127.0.0.1:8040/api/check_tablet_segment_lost?repair=false\n```\n")))}m.isMDXComponent=!0}}]);