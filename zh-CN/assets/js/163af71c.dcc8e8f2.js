"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[371899],{15680:(e,n,t)=>{t.d(n,{xA:()=>i,yg:()=>g});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},p="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,m=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,g=p["".concat(m,".").concat(d)]||p[d]||o[d]||u;return t?a.createElement(g,l(l({ref:n},i),{},{components:t})):a.createElement(g,l({ref:n},i))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,l=new Array(u);l[0]=d;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<u;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>o,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const u={title:"SEQUENCE_MATCH",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/aggregate-functions/sequence-match",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/sequence-match",title:"SEQUENCE_MATCH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/sequence-match.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/sequence-match",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/sequence-match",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SEQUENCE_MATCH",language:"zh-CN"},sidebar:"docs",previous:{title:"RETENTION",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/retention"},next:{title:"SEQUENCE_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/sequence-count"}},m={},s=[{value:"SEQUENCE-MATCH",id:"sequence-match",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:s},p="wrapper";function o(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"sequence-match"},"SEQUENCE-MATCH"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sequence_match(pattern, timestamp, cond1, cond2, ...);")),(0,r.yg)("p",null,"\u68c0\u67e5\u5e8f\u5217\u662f\u5426\u5305\u542b\u4e0e\u6a21\u5f0f\u5339\u914d\u7684\u4e8b\u4ef6\u94fe\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u8b66\u544a!")," "),(0,r.yg)("p",null,"\u5728\u540c\u4e00\u79d2\u949f\u53d1\u751f\u7684\u4e8b\u4ef6\u53ef\u80fd\u4ee5\u672a\u5b9a\u4e49\u7684\u987a\u5e8f\u6392\u5217\u5728\u5e8f\u5217\u4e2d\uff0c\u4f1a\u5f71\u54cd\u6700\u7ec8\u7ed3\u679c\u3002"),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pattern")," \u2014 \u6a21\u5f0f\u5b57\u7b26\u4e32."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6a21\u5f0f\u8bed\u6cd5")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"(?N)")," \u2014 \u5728\u4f4d\u7f6eN\u5339\u914d\u6761\u4ef6\u53c2\u6570\u3002 \u6761\u4ef6\u5728\u7f16\u53f7 ",(0,r.yg)("inlineCode",{parentName:"p"},"[1, 32]")," \u8303\u56f4\u3002 \u4f8b\u5982, ",(0,r.yg)("inlineCode",{parentName:"p"},"(?1)")," \u5339\u914d\u4f20\u9012\u7ed9 ",(0,r.yg)("inlineCode",{parentName:"p"},"cond1")," \u53c2\u6570\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},".*")," \u2014 \u5339\u914d\u4efb\u4f55\u4e8b\u4ef6\u7684\u6570\u5b57\u3002 \u4e0d\u9700\u8981\u6761\u4ef6\u53c2\u6570\u6765\u5339\u914d\u8fd9\u4e2a\u6a21\u5f0f\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"(?t operator value)")," \u2014 \u5206\u5f00\u4e24\u4e2a\u4e8b\u4ef6\u7684\u65f6\u95f4\u3002 \u5355\u4f4d\u4e3a\u79d2\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"t"),"\u8868\u793a\u4e3a\u4e24\u4e2a\u65f6\u95f4\u7684\u5dee\u503c\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002 \u4f8b\u5982\uff1a ",(0,r.yg)("inlineCode",{parentName:"p"},"(?1)(?t>1800)(?2)")," \u5339\u914d\u5f7c\u6b64\u53d1\u751f\u8d85\u8fc71800\u79d2\u7684\u4e8b\u4ef6\uff0c ",(0,r.yg)("inlineCode",{parentName:"p"},"(?1)(?t>10000)(?2)"),"\u5339\u914d\u5f7c\u6b64\u53d1\u751f\u8d85\u8fc710000\u79d2\u7684\u4e8b\u4ef6\u3002 \u8fd9\u4e9b\u4e8b\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u5b58\u5728\u4efb\u610f\u6570\u91cf\u7684\u4efb\u4f55\u4e8b\u4ef6\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},">="),", ",(0,r.yg)("inlineCode",{parentName:"p"},">"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"<"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"<="),", ",(0,r.yg)("inlineCode",{parentName:"p"},"==")," \u8fd0\u7b97\u7b26\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"timestamp")," \u2014  \u5305\u542b\u65f6\u95f4\u7684\u5217\u3002\u5178\u578b\u7684\u65f6\u95f4\u7c7b\u578b\u662f\uff1a ",(0,r.yg)("inlineCode",{parentName:"p"},"Date")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"DateTime"),"\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u652f\u6301\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"UInt")," \u6570\u636e\u7c7b\u578b\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"cond1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"cond2")," \u2014 \u4e8b\u4ef6\u94fe\u7684\u7ea6\u675f\u6761\u4ef6\u3002 \u6570\u636e\u7c7b\u578b\u662f\uff1a ",(0,r.yg)("inlineCode",{parentName:"p"},"UInt8"),"\u3002 \u6700\u591a\u53ef\u4ee5\u4f20\u901232\u4e2a\u6761\u4ef6\u53c2\u6570\u3002 \u8be5\u51fd\u6570\u53ea\u8003\u8651\u8fd9\u4e9b\u6761\u4ef6\u4e2d\u63cf\u8ff0\u7684\u4e8b\u4ef6\u3002 \u5982\u679c\u5e8f\u5217\u5305\u542b\u672a\u5728\u6761\u4ef6\u4e2d\u63cf\u8ff0\u7684\u6570\u636e\uff0c\u5219\u51fd\u6570\u5c06\u8df3\u8fc7\u8fd9\u4e9b\u6570\u636e\u3002"),(0,r.yg)("h4",{id:"returned-value"},"Returned value"),(0,r.yg)("p",null,"1\uff0c\u5982\u679c\u6a21\u5f0f\u5339\u914d\u3002"),(0,r.yg)("p",null,"0\uff0c\u5982\u679c\u6a21\u5f0f\u4e0d\u5339\u914d\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5339\u914d\u4f8b\u5b50")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_match_test1;\n\nCREATE TABLE sequence_match_test1(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test1(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 13:28:02', 2),\n                                                   (3, '2022-11-02 16:15:01', 1),\n                                                   (4, '2022-11-02 19:05:04', 2),\n                                                   (5, '2022-11-02 20:08:44', 3); \n\nSELECT * FROM sequence_match_test1 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 13:28:02 |      2 |\n|    3 | 2022-11-02 16:15:01 |      1 |\n|    4 | 2022-11-02 19:05:04 |      2 |\n|    5 | 2022-11-02 20:08:44 |      3 |\n+------+---------------------+--------+\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 3) FROM sequence_match_test1;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 3) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 2) FROM sequence_match_test1;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?t>=3600)(?2)', date, number = 1, number = 2) FROM sequence_match_test1;\n\n+---------------------------------------------------------------------------+\n| sequence_match('(?1)(?t>=3600)(?2)', `date`, `number` = 1, `number` = 2) |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4e0d\u5339\u914d\u4f8b\u5b50")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_match_test2;\n\nCREATE TABLE sequence_match_test2(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test2(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_match_test2 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 2) FROM sequence_match_test2;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              0 |\n+----------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?2).*', date, number = 1, number = 2) FROM sequence_match_test2;\n\n+------------------------------------------------------------------+\n| sequence_match('(?1)(?2).*', `date`, `number` = 1, `number` = 2) |\n+------------------------------------------------------------------+\n|                                                                0 |\n+------------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?t>3600)(?2)', date, number = 1, number = 7) FROM sequence_match_test2;\n\n+--------------------------------------------------------------------------+\n| sequence_match('(?1)(?t>3600)(?2)', `date`, `number` = 1, `number` = 7) |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7279\u6b8a\u4f8b\u5b50")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_match_test3;\n\nCREATE TABLE sequence_match_test3(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test3(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_match_test3 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n")),(0,r.yg)("p",null,"Perform the query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5) FROM sequence_match_test3;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n")),(0,r.yg)("p",null,"\u4e0a\u9762\u4e3a\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u5339\u914d\u4f8b\u5b50\uff0c \u8be5\u51fd\u6570\u627e\u5230\u4e86\u6570\u5b575\u8ddf\u968f\u6570\u5b571\u7684\u4e8b\u4ef6\u94fe\u3002 \u5b83\u8df3\u8fc7\u4e86\u5b83\u4eec\u4e4b\u95f4\u7684\u6570\u5b577\uff0c3\uff0c4\uff0c\u56e0\u4e3a\u8be5\u6570\u5b57\u6ca1\u6709\u88ab\u63cf\u8ff0\u4e3a\u4e8b\u4ef6\u3002 \u5982\u679c\u6211\u4eec\u60f3\u5728\u641c\u7d22\u793a\u4f8b\u4e2d\u7ed9\u51fa\u7684\u4e8b\u4ef6\u94fe\u65f6\u8003\u8651\u8fd9\u4e2a\u6570\u5b57\uff0c\u6211\u4eec\u5e94\u8be5\u4e3a\u5b83\u521b\u5efa\u4e00\u4e2a\u6761\u4ef6\u3002"),(0,r.yg)("p",null,"\u73b0\u5728\uff0c\u8003\u8651\u5982\u4e0b\u6267\u884c\u8bed\u53e5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5, number = 4) FROM sequence_match_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 4) |\n+------------------------------------------------------------------------------+\n|                                                                            0 |\n+------------------------------------------------------------------------------+\n")),(0,r.yg)("p",null,"\u60a8\u53ef\u80fd\u5bf9\u8fd9\u4e2a\u7ed3\u679c\u6709\u4e9b\u8bb8\u7591\u60d1\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u51fd\u6570\u627e\u4e0d\u5230\u4e0e\u6a21\u5f0f\u5339\u914d\u7684\u4e8b\u4ef6\u94fe\uff0c\u56e0\u4e3a\u6570\u5b574\u7684\u4e8b\u4ef6\u53d1\u751f\u57281\u548c5\u4e4b\u95f4\u3002 \u5982\u679c\u5728\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u68c0\u67e5\u4e86\u6570\u5b576\u7684\u6761\u4ef6\uff0c\u5219\u5e8f\u5217\u5c06\u4e0e\u6a21\u5f0f\u5339\u914d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5, number = 6) FROM sequence_match_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 6) |\n+------------------------------------------------------------------------------+\n|                                                                            1 |\n+------------------------------------------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"SEQUENCE_MATCH"))}o.isMDXComponent=!0}}]);