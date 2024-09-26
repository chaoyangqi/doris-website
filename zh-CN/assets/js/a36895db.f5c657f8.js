"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[434445],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>N});var n=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=n.createContext({}),y=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=y(e.components);return n.createElement(g.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=y(t),u=l,N=d["".concat(g,".").concat(u)]||d[u]||m[u]||r;return t?n.createElement(N,p(p({ref:a},i),{},{components:t})):n.createElement(N,p({ref:a},i))}));function N(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=u;var o={};for(var g in a)hasOwnProperty.call(a,g)&&(o[g]=a[g]);o.originalType=e,o[d]="string"==typeof e?e:l,p[1]=o;for(var y=2;y<r;y++)p[y]=t[y];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},733609:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>y});var n=t(58168),l=(t(296540),t(15680));const r={title:"MySQL Load",language:"zh-CN"},p=void 0,o={unversionedId:"data-operate/import/mysql-load-manual",id:"version-2.0/data-operate/import/mysql-load-manual",title:"MySQL Load",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/import/mysql-load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/mysql-load-manual",permalink:"/zh-CN/docs/2.0/data-operate/import/mysql-load-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MySQL Load",language:"zh-CN"},sidebar:"docs",previous:{title:"Insert Into",permalink:"/zh-CN/docs/2.0/data-operate/import/insert-into-manual"},next:{title:"JSON \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/2.0/data-operate/import/load-json-format"}},g={},y=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u652f\u6301\u683c\u5f0f",id:"\u652f\u6301\u683c\u5f0f",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u524d\u7f6e\u68c0\u67e5",id:"\u524d\u7f6e\u68c0\u67e5",level:3},{value:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",id:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7ed3\u679c",id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7ed3\u679c",level:3},{value:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a",id:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u53c2\u8003\u624b\u518c",id:"\u53c2\u8003\u624b\u518c",level:2},{value:"\u5bfc\u5165\u8bed\u6cd5",id:"\u5bfc\u5165\u8bed\u6cd5",level:3},{value:"\u5bfc\u5165\u53c2\u6570",id:"\u5bfc\u5165\u53c2\u6570",level:3},{value:"\u5bfc\u5165\u4e3e\u4f8b",id:"\u5bfc\u5165\u4e3e\u4f8b",level:2},{value:"\u6307\u5b9a\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4",id:"\u6307\u5b9a\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4",level:3},{value:"\u6307\u5b9a\u5bfc\u5165\u5141\u8bb8\u8bef\u5dee\u7387",id:"\u6307\u5b9a\u5bfc\u5165\u5141\u8bb8\u8bef\u5dee\u7387",level:3},{value:"\u6620\u5c04\u5bfc\u5165\u5217",id:"\u6620\u5c04\u5bfc\u5165\u5217",level:3},{value:"\u6307\u5b9a\u5bfc\u5165\u5217\u5206\u9694\u7b26\u4e0e\u884c\u5206\u9694\u7b26",id:"\u6307\u5b9a\u5bfc\u5165\u5217\u5206\u9694\u7b26\u4e0e\u884c\u5206\u9694\u7b26",level:3},{value:"\u6307\u5b9a\u5bfc\u5165\u5206\u533a",id:"\u6307\u5b9a\u5bfc\u5165\u5206\u533a",level:3},{value:"\u6307\u5b9a\u5bfc\u5165\u65f6\u533a",id:"\u6307\u5b9a\u5bfc\u5165\u65f6\u533a",level:3},{value:"\u9650\u5236\u5bfc\u5165\u5185\u5b58",id:"\u9650\u5236\u5bfc\u5165\u5185\u5b58",level:3},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],i={toc:y},d="wrapper";function m(e){let{components:a,...t}=e;return(0,l.yg)(d,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris \u517c\u5bb9 MySQL \u534f\u8bae\uff0c\u53ef\u4ee5\u4f7f\u7528 MySQL \u6807\u51c6\u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html"},"LOAD DATA")," \u8bed\u6cd5\u5bfc\u5165\u672c\u5730\u6587\u4ef6\u3002MySQL Load \u662f\u4e00\u79cd\u540c\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u6267\u884c\u5bfc\u5165\u540e\u5373\u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002\u53ef\u4ee5\u901a\u8fc7 LOAD DATA \u8bed\u53e5\u7684\u8fd4\u56de\u7ed3\u679c\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u53ef\u4ee5\u4f7f\u7528 MySQL Load \u5bfc\u5165 10GB \u4ee5\u4e0b\u7684\u6587\u4ef6\uff0c\u5982\u679c\u6587\u4ef6\u8fc7\u5927\uff0c\u5efa\u8bae\u5c06\u6587\u4ef6\u8fdb\u884c\u5207\u5206\u540e\u4f7f\u7528 MySQL Load \u8fdb\u884c\u5bfc\u5165\u3002MySQL Load \u53ef\u4ee5\u4fdd\u8bc1\u4e00\u6279\u5bfc\u5165\u4efb\u52a1\u7684\u539f\u5b50\u6027\uff0c\u8981\u4e48\u5168\u90e8\u5bfc\u5165\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5bfc\u5165\u5931\u8d25\u3002"),(0,l.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.yg)("h3",{id:"\u652f\u6301\u683c\u5f0f"},"\u652f\u6301\u683c\u5f0f"),(0,l.yg)("p",null,"MySQL Load \u4e3b\u8981\u9002\u7528\u4e8e\u5bfc\u5165\u5ba2\u6237\u7aef\u672c\u5730 CSV \u6587\u4ef6\uff0c\u6216\u901a\u8fc7\u7a0b\u5e8f\u5bfc\u5165\u6570\u636e\u6d41\u4e2d\u7684\u6570\u636e\u3002"),(0,l.yg)("h3",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,l.yg)("p",null,"\u5728\u5bfc\u5165 CSV \u6587\u4ef6\u65f6\uff0c\u9700\u8981\u660e\u786e\u533a\u5206\u7a7a\u503c\uff08null\uff09\u4e0e\u7a7a\u5b57\u7b26\u4e32\uff08''\uff09\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7a7a\u503c\uff08null\uff09\u9700\u8981\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"\\N")," \u8868\u793a\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"a,\\N,b")," \u6570\u636e\u8868\u793a\u4e2d\u95f4\u5217\u662f\u4e00\u4e2a\u7a7a\u503c\uff08null\uff09")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7a7a\u5b57\u7b26\u4e32\u76f4\u63a5\u5c06\u6570\u636e\u7f6e\u7a7a\uff0ca, ,b \u6570\u636e\u8868\u793a\u4e2d\u95f4\u5217\u662f\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32"))),(0,l.yg)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,l.yg)("p",null,"MySQL Load \u4e0e Stream Load \u529f\u80fd\u76f8\u4f3c\uff0c\u90fd\u662f\u5bfc\u5165\u672c\u5730\u6587\u4ef6\u5230 Doris \u96c6\u7fa4\u4e2d\u3002\u56e0\u6b64 MySQL Load \u7684\u5b9e\u73b0\u590d\u7528\u4e86 Stream Load \u7684\u57fa\u672c\u5bfc\u5165\u80fd\u529b\u3002"),(0,l.yg)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86 MySQL Load \u7684\u4e3b\u8981\u6d41\u7a0b\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u7528\u6237\u5411 FE \u63d0\u4ea4 LOAD DATA \u8bf7\u6c42\uff0cFE \u5b8c\u6210\u89e3\u6790\u5de5\u4f5c\uff0c\u5e76\u5c06\u8bf7\u6c42\u5c01\u88c5\u6210 Stream Load\uff1b")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"FE \u4f1a\u9009\u62e9\u4e00\u4e2a BE \u8282\u70b9\u53d1\u9001 Stream Load \u8bf7\u6c42\uff1b")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u53d1\u9001\u8bf7\u6c42\u7684\u540c\u65f6\uff0cFE \u4f1a\u5f02\u6b65\u4e14\u6d41\u5f0f\u7684\u4ece MySQL \u5ba2\u6237\u7aef\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\u6570\u636e\uff0c\u5e76\u5b9e\u65f6\u7684\u53d1\u9001\u5230 Stream Load \u7684 HTTP \u8bf7\u6c42\u4e2d\uff1b")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"MySQL \u5ba2\u6237\u7aef\u6570\u636e\u4f20\u8f93\u5b8c\u6bd5\uff0cFE \u7b49\u5f85 Stream Load \u5b8c\u6210\uff0c\u5e76\u5c55\u793a\u5bfc\u5165\u6210\u529f\u6216\u8005\u5931\u8d25\u7684\u4fe1\u606f\u7ed9\u5ba2\u6237\u7aef\u3002"))),(0,l.yg)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,l.yg)("h3",{id:"\u524d\u7f6e\u68c0\u67e5"},"\u524d\u7f6e\u68c0\u67e5"),(0,l.yg)("p",null,"MySQL Load \u9700\u8981\u5bf9\u76ee\u6807\u8868\u7684 INSERT \u6743\u9650\u3002\u5982\u679c\u6ca1\u6709 INSERT \u6743\u9650\uff0c\u53ef\u4ee5\u901a\u8fc7 GRANT \u547d\u4ee4\u7ed9\u7528\u6237\u6388\u6743\u3002"),(0,l.yg)("h3",{id:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a"},"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u51c6\u5907\u6d4b\u8bd5\u6570\u636e")),(0,l.yg)("p",null,"\u521b\u5efa\u540d\u4e3a client_local.csv \u7684\u6587\u4ef6\uff0c\u6837\u4f8b\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"1,10\n2,20\n3,30\n4,40\n5,50\n6,60\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u94fe\u63a5\u5ba2\u6237\u7aef")),(0,l.yg)("p",null,"\u5728\u6267\u884c LOAD DATA \u547d\u4ee4\u524d\uff0c\u9700\u8981\u5148\u94fe\u63a5 MySQL \u5ba2\u6237\u7aef\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Shell"},"mysql --local-infile  -h <fe_ip> -P <fe_query_port> -u root -D testdb\n")),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"\u6267\u884c MySQL Load\uff0c\u5728\u8fde\u63a5\u65f6\u9700\u8981\u4f7f\u7528\u6307\u5b9a\u53c2\u6570\u9009\u9879\uff1a"),(0,l.yg)("ol",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5728\u94fe\u63a5 mysql \u5ba2\u6237\u7aef\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"--local-infile")," \u9009\u9879\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u62a5\u9519\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 JDBC \u94fe\u63a5\uff0c\u9700\u8981\u5728 URL \u4e2d\u6307\u5b9a\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"allowLoadLocalInfile=true"))))),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u521b\u5efa\u6d4b\u8bd5\u7528\u8868")),(0,l.yg)("p",null,"\u5728 Doris \u4e2d\u521b\u5efa\u4ee5\u4e0b\u8868\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE testdb.t1 (\n    pk     INT, \n    v1     INT SUM\n) AGGREGATE KEY (pk) \nDISTRIBUTED BY hash (pk);\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u8fd0\u884c LOAD DATA \u5bfc\u5165\u547d\u4ee4")),(0,l.yg)("p",null,"\u94fe\u63a5 MySQL Client \u540e\uff0c\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n")),(0,l.yg)("h3",{id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7ed3\u679c"},"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7ed3\u679c"),(0,l.yg)("p",null,"MySQL Load \u662f\u4e00\u79cd\u540c\u6b65\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u5bfc\u5165\u540e\u7ed3\u679c\u4f1a\u5728\u547d\u4ee4\u884c\u4e2d\u8fd4\u56de\u7ed9\u7528\u6237\u3002\u5982\u679c\u5bfc\u5165\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u5c55\u793a\u5177\u4f53\u7684\u62a5\u9519\u4fe1\u606f\u3002"),(0,l.yg)("p",null,"\u5982\u4e0b\u662f\u5bfc\u5165\u6210\u529f\u7684\u7ed3\u679c\u663e\u793a\uff0c\u4f1a\u8fd4\u56de\u5bfc\u5165\u7684\u884c\u6570\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"Query OK, 6 row affected (0.17 sec)\nRecords: 6  Deleted: 0  Skipped: 0  Warnings: 0\n")),(0,l.yg)("p",null,"\u5f53\u5bfc\u5165\u6709\u5f02\u5e38\u65f6\uff0c\u4f1a\u5728\u5ba2\u6237\u7aef\u663e\u793a\u76f8\u5e94\u5f02\u5e38\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ERROR 1105 (HY000): errCode = 2, detailMessage = [DATA_QUALITY_ERROR]too many filtered rows with load id b612907c-ccf4-4ac2-82fe-107ece655f0f\n")),(0,l.yg)("p",null,"\u5728\u5f02\u5e38\u4fe1\u606f\u4e2d\uff0c\u53ef\u4ee5\u6355\u6349\u5230\u5bfc\u5165\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"loadId"),"\uff0c\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"show load warnings")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5230\u5177\u4f53\u4fe1\u606f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"show load warnings where label='b612907c-ccf4-4ac2-82fe-107ece655f0f';\n")),(0,l.yg)("h3",{id:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a"},"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a"),(0,l.yg)("p",null,"\u7528\u6237\u65e0\u6cd5\u624b\u52a8\u53d6\u6d88 MySQL Load\uff0cMySQL Load \u5728\u8d85\u65f6\u6216\u8005\u5bfc\u5165\u9519\u8bef\u540e\u4f1a\u88ab\u7cfb\u7edf\u81ea\u52a8\u53d6\u6d88\u3002"),(0,l.yg)("h2",{id:"\u53c2\u8003\u624b\u518c"},"\u53c2\u8003\u624b\u518c"),(0,l.yg)("h3",{id:"\u5bfc\u5165\u8bed\u6cd5"},"\u5bfc\u5165\u8bed\u6cd5"),(0,l.yg)("p",null,"LOAD DATA \u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"LOAD DATA LOCAL\nINFILE '<load_data_file>'\nINTO TABLE [<db_name>.]<table_name>\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY '<column_terminated_operator>']\n[LINES TERMINATED BY '<line_terminated_operator>']\n[IGNORE <ignore_lines> LINES]\n[(col_name_or_user_var[, col_name_or_user_var] ...)]\n[SET col_name={expr | DEFAULT}[, col_name={expr | DEFAULT}] ...]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n")),(0,l.yg)("p",null,"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u7684\u6a21\u5757\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6a21\u5757"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INFILE"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u672c\u5730\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\u3002\u76ee\u524d load_data_file \u53ea\u652f\u6301\u5355\u4e2a\u6587\u4ef6\uff0c\u4e0d\u652f\u6301\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INTO TABLE"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6570\u636e\u5e93\u540d\u4e0e\u8868\u540d\uff0c\u53ef\u4ee5\u7701\u7565\u6570\u636e\u5e93\u540d\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"PARTITION"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bfc\u5165\u7684\u5206\u533a\u3002\u5982\u679c\u7528\u6237\u80fd\u591f\u786e\u5b9a\u6570\u636e\u5bf9\u5e94\u7684 partition\uff0c\u63a8\u8350\u6307\u5b9a\u8be5\u9879\u3002\u4e0d\u6ee1\u8db3\u8fd9\u4e9b\u5206\u533a\u7684\u6570\u636e\u5c06\u88ab\u8fc7\u6ee4\u6389\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"COLUMNS TERMINATED BY"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bfc\u5165\u7684\u5217\u5206\u9694\u7b26\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LINE TERMINATED BY"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bfc\u5165\u7684\u884c\u5206\u9694\u7b26\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"IGNORE num LINES"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bfc\u5165\u7684 CSV \u8df3\u8fc7\u884c\u6570\uff0c\u901a\u5e38\u6307\u5b9a 1 \u6765\u8df3\u8fc7\u8868\u5934\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"col_name_or_user_var"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5217\u6620\u5c04\u8bed\u6cd5\uff0c\u6570\u636e\u8f6c\u6362\u8be6\u89c1",(0,l.yg)("a",{parentName:"td",href:"../../data-operate/import/load-data-convert#%E5%88%97%E6%98%A0%E5%B0%84"}," \u5217\u6620\u5c04 "),"\u7ae0\u8282\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"PROPERTIES"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u53c2\u6570\u3002")))),(0,l.yg)("h3",{id:"\u5bfc\u5165\u53c2\u6570"},"\u5bfc\u5165\u53c2\u6570"),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"PROPERTIES (key1 = value1 [, key2=value2])")," \u8bed\u6cd5\u53ef\u4ee5\u6307\u5b9a\u5bfc\u5165\u7684\u53c2\u6570\u914d\u7f6e\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_filter_ratio"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6700\u5927\u8fc7\u6ee4\u7387\u3002\u5fc5\u987b\u5728\u5927\u4e8e\u7b49\u4e8e 0 \u5230\u5c0f\u4e8e\u7b49\u4e8e 1 \u4e4b\u95f4\u3002\u9ed8\u8ba4\u503c\u662f 0\uff0c\u8868\u793a\u4e0d\u5bb9\u5fcd\u4efb\u4f55\u9519\u8bef\u884c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u9ed8\u8ba4\u662f 600 \u79d2\u3002\u53ef\u8bbe\u7f6e\u8303\u56f4\u4e3a 1s ~ 259200s\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"strict_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u6307\u5b9a\u6b64\u6b21\u5bfc\u5165\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timezone"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u672c\u6b21\u5bfc\u5165\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4e1c\u516b\u533a\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"exec_mem_limit"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\u3002\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"trim_double_quotes"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u4e3a true \u65f6\u8868\u793a\u88c1\u526a\u6389\u5bfc\u5165\u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enclose"),(0,l.yg)("td",{parentName:"tr",align:null},'\u6307\u5b9a\u5305\u56f4\u7b26\u3002\u5f53 csv \u6570\u636e\u5b57\u6bb5\u4e2d\u542b\u6709\u884c\u5206\u9694\u7b26\u6216\u5217\u5206\u9694\u7b26\u65f6\uff0c\u4e3a\u9632\u6b62\u610f\u5916\u622a\u65ad\uff0c\u53ef\u6307\u5b9a\u5355\u5b57\u8282\u5b57\u7b26\u4f5c\u4e3a\u5305\u56f4\u7b26\u8d77\u5230\u4fdd\u62a4\u4f5c\u7528\u3002\u4f8b\u5982\u5217\u5206\u9694\u7b26\u4e3a ","\uff0c\u5305\u56f4\u7b26\u4e3a "\'"\uff0c\u6570\u636e\u4e3a "a,\'b,c\'"\uff0c\u5219 "b,c" \u4f1a\u88ab\u89e3\u6790\u4e3a\u4e00\u4e2a\u5b57\u6bb5\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"escape"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8f6c\u4e49\u7b26\u3002\u7528\u4e8e\u8f6c\u4e49\u5728\u5b57\u6bb5\u4e2d\u51fa\u73b0\u7684\u4e0e\u5305\u56f4\u7b26\u76f8\u540c\u7684\u5b57\u7b26\u3002\u4f8b\u5982\u6570\u636e\u4e3a \"a,'b,'c'\"\uff0c\u5305\u56f4\u7b26\u4e3a \"'\"\uff0c\u5e0c\u671b \"b,'c \u88ab\u4f5c\u4e3a\u4e00\u4e2a\u5b57\u6bb5\u89e3\u6790\uff0c\u5219\u9700\u8981\u6307\u5b9a\u5355\u5b57\u8282\u8f6c\u4e49\u7b26\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"td"},"\\"),"\uff0c\u5c06\u6570\u636e\u4fee\u6539\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"a,'b,\\'c'"),"\u3002")))),(0,l.yg)("h2",{id:"\u5bfc\u5165\u4e3e\u4f8b"},"\u5bfc\u5165\u4e3e\u4f8b"),(0,l.yg)("h3",{id:"\u6307\u5b9a\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4"},"\u6307\u5b9a\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4"),(0,l.yg)("p",null,"\u901a\u8fc7\u5236\u5b9a PROPERTIES \u53c2\u6570 timeout \u53ef\u4ee5\u8c03\u6574\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u3002\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u5c06\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\u4e3a 100s\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100");\n')),(0,l.yg)("h3",{id:"\u6307\u5b9a\u5bfc\u5165\u5141\u8bb8\u8bef\u5dee\u7387"},"\u6307\u5b9a\u5bfc\u5165\u5141\u8bb8\u8bef\u5dee\u7387"),(0,l.yg)("p",null,"\u901a\u8fc7\u6307\u5b9a PROPERTIES \u53c2\u6570 max_filter_ratio \u53ef\u4ee5\u8c03\u6574\u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u3002\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u5c06\u9519\u8bef\u5bb9\u5fcd\u7387\u8bbe\u7f6e\u4e3a 20%\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2");\n')),(0,l.yg)("h3",{id:"\u6620\u5c04\u5bfc\u5165\u5217"},"\u6620\u5c04\u5bfc\u5165\u5217"),(0,l.yg)("p",null,"\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u8c03\u6574\u4e86 CSV \u4e2d\u5217\u7684\u987a\u5e8f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\n(k2, k1, v1);\n")),(0,l.yg)("h3",{id:"\u6307\u5b9a\u5bfc\u5165\u5217\u5206\u9694\u7b26\u4e0e\u884c\u5206\u9694\u7b26"},"\u6307\u5b9a\u5bfc\u5165\u5217\u5206\u9694\u7b26\u4e0e\u884c\u5206\u9694\u7b26"),(0,l.yg)("p",null,"\u901a\u8fc7 COLUMNS TERMINATED BY \u4e0e LINES TERMINATED BY \u5b50\u53e5\u53ef\u4ee5\u6307\u5b9a\u5bfc\u5165\u7684\u5217\u4e0e\u884c\u5206\u9694\u7b26\u3002\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u4f7f\u7528\u9017\u53f7\uff08,\uff09\u4e0e\u6362\u884c\u7b26\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"\\n"),"\uff09\u4f5c\u4e3a\u5217\u4e0e\u884c\u5206\u9694\u7b26\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n")),(0,l.yg)("h3",{id:"\u6307\u5b9a\u5bfc\u5165\u5206\u533a"},"\u6307\u5b9a\u5bfc\u5165\u5206\u533a"),(0,l.yg)("p",null,"\u901a\u8fc7 PARTITON \u5b50\u53e5\u53ef\u4ee5\u6307\u5b9a\u5bfc\u5165\u5206\u533a\u3002\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u5c06\u6570\u636e\u5bfc\u5165\u6307\u5b9a\u5206\u533a p1 \u4e0e p2\uff0c\u5982\u679c\u6570\u636e\u4e0d\u5c5e\u4e8e p1 \u4e0e p2 \u5206\u533a\uff0c\u4f1a\u88ab\u8fc7\u6ee4\u6389\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2);\n")),(0,l.yg)("h3",{id:"\u6307\u5b9a\u5bfc\u5165\u65f6\u533a"},"\u6307\u5b9a\u5bfc\u5165\u65f6\u533a"),(0,l.yg)("p",null,"\u901a\u8fc7 PROPERTIES \u53c2\u6570 timezone \u53ef\u4ee5\u6307\u5b9a\u65f6\u533a\u3002\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u8bbe\u7f6e\u65f6\u533a\u4e3a Africa/Abidjan\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timezone"="Africa/Abidjan");\n')),(0,l.yg)("h3",{id:"\u9650\u5236\u5bfc\u5165\u5185\u5b58"},"\u9650\u5236\u5bfc\u5165\u5185\u5b58"),(0,l.yg)("p",null,"\u901a\u8fc7 PROPERTIES \u53c2\u6570 exec_mem_limit \u53ef\u4ee5\u6307\u5b9a\u5bfc\u5165\u7684\u5185\u5b58\u9650\u5236\u3002\u5728\u4ee5\u4e0b\u6848\u4f8b\u4e2d\u8bbe\u7f6e\u5bfc\u5165\u7684\u5185\u5b58\u9650\u5236\u4e3a 10G\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240");\n')),(0,l.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.yg)("p",null,"\u5173\u4e8e MySQL Load \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD"},"MySQL Load")," \u547d\u4ee4\u624b\u518c\u3002"))}m.isMDXComponent=!0}}]);