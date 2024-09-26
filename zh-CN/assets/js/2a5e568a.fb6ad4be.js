"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[589914],{15680:(e,n,t)=>{t.d(n,{xA:()=>i,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,d=p["".concat(u,".").concat(m)]||p[m]||g[m]||l;return t?r.createElement(d,s(s({ref:n},i),{},{components:t})):r.createElement(d,s({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},343038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"\u8ba1\u7b97\u96c6\u7fa4\u64cd\u4f5c",language:"zh-CN"},s=void 0,o={unversionedId:"compute-storage-decoupled/managing-compute-cluster",id:"compute-storage-decoupled/managing-compute-cluster",title:"\u8ba1\u7b97\u96c6\u7fa4\u64cd\u4f5c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/compute-storage-decoupled/managing-compute-cluster.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/managing-compute-cluster",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/managing-compute-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8ba1\u7b97\u96c6\u7fa4\u64cd\u4f5c",language:"zh-CN"},sidebar:"docs",previous:{title:"\u521b\u5efa\u96c6\u7fa4",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/creating-cluster"},next:{title:"\u6570\u636e\u7f13\u5b58",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/file-cache"}},u={},c=[{value:"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4",id:"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4",level:2},{value:"\u6388\u4e88\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650",id:"\u6388\u4e88\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650",level:2},{value:"\u64a4\u9500\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650",id:"\u64a4\u9500\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650",level:2},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4",level:2},{value:"\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u7684\u9009\u62e9\u673a\u5236",id:"\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u7684\u9009\u62e9\u673a\u5236",level:2},{value:"\u5207\u6362\u8ba1\u7b97\u96c6\u7fa4",id:"\u5207\u6362\u8ba1\u7b97\u96c6\u7fa4",level:2}],i={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5728\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e0b\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8ba1\u7b97\u8282\u70b9 (BE) \u7ec4\u6210\u4e00\u4e2a\u8ba1\u7b97\u96c6\u7fa4 (Compute Cluster)\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8ba1\u7b97\u96c6\u7fa4\uff0c\u5176\u4e2d\u6d89\u53ca\u7684\u64cd\u4f5c\u5305\u62ec\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4"),(0,a.yg)("li",{parentName:"ul"},"\u8ba1\u7b97\u96c6\u7fa4\u6388\u6743"),(0,a.yg)("li",{parentName:"ul"},"\u5728\u7528\u6237\u7ea7\u522b\u7ed1\u5b9a\u8ba1\u7b97\u96c6\u7fa4 (",(0,a.yg)("inlineCode",{parentName:"li"},"default_cloud_cluster"),") \u4ee5\u8fbe\u5230\u7528\u6237\u7ea7\u522b\u7684\u9694\u79bb\u6548\u679c")),(0,a.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u672c\u6587\u6d89\u53ca\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster")," \u5747\u8868\u793a\u8ba1\u7b97\u96c6\u7fa4\u3002")),(0,a.yg)("h2",{id:"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4"},"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4"),(0,a.yg)("p",null,"\u53ef\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"show clusters")," \u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u62e5\u6709\u7684\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"> mysql show clusters;\n+-------------------------------+------------+------------+\n| cluster                       | is_current | users      |\n+-------------------------------+------------+------------+\n| regression_test_cluster_name0 | FALSE      | root, jack |\n| regression_test_cluster_name5 | FALSE      |            |\n+-------------------------------+------------+------------+\n2 rows in set (0.01 sec)\n\nmysql SET PROPERTY 'default_cloud_cluster' = 'regression_test_cluster_name5';\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,a.yg)("h2",{id:"\u6388\u4e88\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650"},"\u6388\u4e88\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650"),(0,a.yg)("p",null,"\u4f7f\u7528 MySQL Client \u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"GRANT USAGE_PRIV ON CLUSTER {cluster_name} TO {user}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"// \u4f7f\u7528 Root \u8d26\u53f7\u5728 MySQL Client \u4e2d\u521b\u5efa Jack \u7528\u6237\nmysql CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\";\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql GRANT USAGE_PRIV ON CLUSTER regression_test_cluster_name0 TO jack;\nQuery OK, 0 rows affected (0.01 sec)\n\n// \u4f7f\u7528 Jack \u767b\u5f55 MySQL Client\nmysql use d1@regression_test_cluster_name0;\nDatabase changed\n\nmysql show grants for jack\\G\n*************************** 1. row ***************************\n UserIdentity: 'jack'@'%'\n     Password: Yes\n  GlobalPrivs: Admin_priv  (false)\n CatalogPrivs: NULL\nDatabasePrivs: internal.information_schema: Select_priv  (false)\n   TablePrivs: NULL\nResourcePrivs: NULL\n CloudCluster: regression_test_cluster_name0: Usage_priv  (false)\n   CloudStage: NULL\n1 row in set (0.00 sec)\n\nmysql select * from t1;\n+------+------+-------+\n| id   | name | score |\n+------+------+-------+\n|    1 | aaa  |    20 |\n|    2 | bbb  |   320 |\n|    3 | ccc  |    30 |\n|    4 | ddd  |   120 |\n|    5 | eee  |    30 |\n|    6 | fff  |    30 |\n|    7 | ggg  |    90 |\n|    8 | hhh  |    30 |\n+------+------+-------+\n8 rows in set (12.70 sec)\n\nmysql insert into t1 (id, name, score) values (8, \"hhh\", 30);\nQuery OK, 1 row affected (7.22 sec)\n{'label':'insert_6f40c1713baf4d61_9c33c0962c68ab07', 'status':'VISIBLE', 'txnId':'5462662627547136'}\n")),(0,a.yg)("p",null,"\u82e5\u5411 Jack \u7528\u6237\u6388\u6743\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u8ba1\u7b97\u96c6\u7fa4\uff0c\u7cfb\u7edf\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u4f1a\u5728\u6267\u884c\u76f8\u5e94\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"use @cluster")," \u65f6\u62a5\u9519\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql GRANT USAGE_PRIV ON CLUSTER not_exist_cluster TO jack;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql show grants for jack\\G\n*************************** 1. row ***************************\n UserIdentity: 'jack'@'%'\n     Password: Yes\n  GlobalPrivs: Admin_priv  (false)\n CatalogPrivs: NULL\nDatabasePrivs: internal.information_schema: Select_priv  (false)\n   TablePrivs: NULL\nResourcePrivs: NULL\n CloudCluster: not_exist_cluster: Usage_priv  (false)\n   CloudStage: NULL\n1 row in set (0.00 sec)\n\n\u5207\u6362\u5230 Jack \u8d26\u53f7\uff0c\u6267\u884c use @not_exist_cluster\uff0c\u5c06\u51fa\u73b0\u63d0\u793a not_exist_cluster \u4e0d\u5b58\u5728\u7684\u62a5\u9519\u63d0\u793a\n\nmysql use information_schema@not_exist_cluster;\nNo connection. Trying to reconnect...\nConnection id:    1\nCurrent database: *** NONE ***\n\nERROR 5091 (42000): Cluster not_exist_cluster not exist\n")),(0,a.yg)("h2",{id:"\u64a4\u9500\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650"},"\u64a4\u9500\u8ba1\u7b97\u96c6\u7fa4\u8bbf\u95ee\u6743\u9650"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"REVOKE USAGE_PRIV ON CLUSTER {cluster_name} FROM {user}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"// \u4f7f\u7528 Root \u8d26\u53f7\u5728 MySQL Client \u4e2d\u521b\u5efa Jack \u7528\u6237\nmysql REVOKE USAGE_PRIV ON CLUSTER regression_test_cluster_name0 FROM jack;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql show grants for jack\\G\n*************************** 1. row ***************************\n UserIdentity: 'jack'@'%'\n     Password: Yes\n  GlobalPrivs: Admin_priv  (false)\n CatalogPrivs: NULL\nDatabasePrivs: internal.information_schema: Select_priv  (false)\n   TablePrivs: NULL\nResourcePrivs: NULL\n CloudCluster: NULL\n   CloudStage: NULL\n1 row in set (0.01 sec)\n")),(0,a.yg)("h2",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4"},"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4"),(0,a.yg)("p",null,"\u7528\u6237\u53ef\u4ece\u591a\u4e2a\u8ba1\u7b97\u96c6\u7fa4\u9009\u62e9\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.yg)("p",null,"\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SET PROPERTY 'default_cloud_cluster' = '{clusterName}';\n")),(0,a.yg)("p",null,"\u4e3a\u5176\u4ed6\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff08\u6b64\u64cd\u4f5c\u9700\u8981 Admin \u6743\u9650\uff09\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SET PROPERTY FOR {user} 'default_cloud_cluster' = '{clusterName}';\n")),(0,a.yg)("p",null,"\u67e5\u770b\u5f53\u524d\u7528\u6237\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff0c\u8fd4\u56de\u7ed3\u679c\u4e2d",(0,a.yg)("inlineCode",{parentName:"p"},"default_cloud_cluster")," \u7684\u503c\u5373\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROPERTY;\n")),(0,a.yg)("p",null,"\u67e5\u770b\u5176\u4ed6\u7528\u6237\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff0c\u6b64\u64cd\u4f5c\u9700\u8981\u5f53\u524d\u7528\u6237\u5177\u5907\u76f8\u5173\u6743\u9650\uff0c\u8fd4\u56de\u7ed3\u679c\u4e2d",(0,a.yg)("inlineCode",{parentName:"p"},"default_cloud_cluster")," \u7684\u503c\u5373\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROPERTY FOR {user};\n")),(0,a.yg)("p",null,"\u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u4e0b\u6240\u6709\u53ef\u7528\u7684\u8ba1\u7b97\u96c6\u7fa4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW CLUSTERS;\n")),(0,a.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u62e5\u6709 Admin \u89d2\u8272\uff0c\u4f8b\u5982\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\""),"\uff0c\u5219\uff1a",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e3a\u81ea\u8eab\u4ee5\u53ca\u5176\u4ed6\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u67e5\u770b\u81ea\u8eab\u4ee5\u53ca\u5176\u4ed6\u7528\u6237\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"PROPERTY"),"\u3002"))),(0,a.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u65e0 Admin \u89d2\u8272\uff0c\u4f8b\u5982\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"CREATE USER jack1 IDENTIFIED BY '123456'"),"\uff0c\u5219\uff1a",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e3a\u81ea\u8eab\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u67e5\u770b\u81ea\u8eab\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"PROPERTY"),"\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u65e0\u6cd5\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u96c6\u7fa4\uff0c\u56e0\u8be5\u64cd\u4f5c\u9700\u8981 ",(0,a.yg)("inlineCode",{parentName:"li"},"GRANT ADMIN")," \u6743\u9650\u3002"))),(0,a.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u672a\u914d\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff0c\u73b0\u6709\u7cfb\u7edf\u5728\u6267\u884c\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u65f6\u5c06\u4f1a\u89e6\u53d1\u9519\u8bef\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0c\u7528\u6237\u53ef\u901a\u8fc7\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"li"},"use @cluster")," \u547d\u4ee4\u6765\u6307\u5b9a\u5f53\u524d Context \u6240\u4f7f\u7528\u7684\u8ba1\u7b97\u96c6\u7fa4\uff0c\u6216\u8005\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"SET PROPERTY")," \u8bed\u53e5\u6765\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u5df2\u914d\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff0c\u4f46\u968f\u540e\u8be5\u96c6\u7fa4\u88ab\u5220\u9664\uff0c\u5219\u5728\u6267\u884c\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u65f6\u540c\u6837\u4f1a\u89e6\u53d1\u9519\u8bef\u3002\u7528\u6237\u53ef\u901a\u8fc7\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"li"},"use @cluster")," \u547d\u4ee4\u6765\u91cd\u65b0\u6307\u5b9a\u5f53\u524d Context \u6240\u4f7f\u7528\u7684\u8ba1\u7b97\u96c6\u7fa4\uff0c\u6216\u8005\u5229\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"SET PROPERTY")," \u8bed\u53e5\u6765\u66f4\u65b0\u9ed8\u8ba4\u96c6\u7fa4\u8bbe\u7f6e\u3002"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"// \u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u7684\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\nmysql SET PROPERTY 'default_cloud_cluster' = 'regression_test_cluster_name0';\nQuery OK, 0 rows affected (0.02 sec)\n\n// \u5c55\u793a\u5f53\u524d\u7528\u6237\u7684\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\nmysql show PROPERTY;\n+------------------------+-------------------------------+\n| Key                    | Value                         |\n+------------------------+-------------------------------+\n| cpu_resource_limit     | -1                            |\n| default_cloud_cluster  | regression_test_cluster_name0 |\n| exec_mem_limit         | -1                            |\n| load_mem_limit         | -1                            |\n| max_query_instances    | -1                            |\n| max_user_connections   | 100                           |\n| quota.high             | 800                           |\n| quota.low              | 100                           |\n| quota.normal           | 400                           |\n| resource.cpu_share     | 1000                          |\n| resource.hdd_read_iops | 80                            |\n| resource.hdd_read_mbps | 30                            |\n| resource.io_share      | 1000                          |\n| resource.ssd_read_iops | 1000                          |\n| resource.ssd_read_mbps | 30                            |\n| resource_tags          |                               |\n| sql_block_rules        |                               |\n+------------------------+-------------------------------+\n17 rows in set (0.00 sec)\n\n// \u4f7f\u7528 Root \u8d26\u53f7\u5728 MySQL Client \u4e2d\u521b\u5efa Jack \u7528\u6237\nmysql CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\";\nQuery OK, 0 rows affected (0.01 sec)\n\n// \u4e3a jack \u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\nmysql SET PROPERTY FOR jack 'default_cloud_cluster' = 'regression_test_cluster_name1';\nQuery OK, 0 rows affected (0.00 sec)\n\n// \u67e5\u770b\u5176\u4ed6\u7528\u6237\u7684\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\nmysql show PROPERTY for jack;\n+------------------------+-------------------------------+\n| Key                    | Value                         |\n+------------------------+-------------------------------+\n| cpu_resource_limit     | -1                            |\n| default_cloud_cluster  | regression_test_cluster_name1 |\n| exec_mem_limit         | -1                            |\n| load_mem_limit         | -1                            |\n| max_query_instances    | -1                            |\n| max_user_connections   | 100                           |\n| quota.high             | 800                           |\n| quota.low              | 100                           |\n| quota.normal           | 400                           |\n| resource.cpu_share     | 1000                          |\n| resource.hdd_read_iops | 80                            |\n| resource.hdd_read_mbps | 30                            |\n| resource.io_share      | 1000                          |\n| resource.ssd_read_iops | 1000                          |\n| resource.ssd_read_mbps | 30                            |\n| resource_tags          |                               |\n| sql_block_rules        |                               |\n+------------------------+-------------------------------+\n17 rows in set (0.00 sec)\n")),(0,a.yg)("p",null,"\u82e5\u7528\u6237\u610f\u56fe\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u7684\u8ba1\u7b97\u96c6\u7fa4\u4e0d\u5b58\u5728\uff0c\u7cfb\u7edf\u4f1a\u62a5\u9519\u5e76\u63d0\u793a\u7528\u6237\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW CLUSTERS")," \u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u4e0b\u6240\u6709\u6709\u6548\u7684\u8ba1\u7b97\u96c6\u7fa4\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW CLUSTERS")," \u547d\u4ee4\u5c06\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\uff0c\u5176\u4e2d\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Cluster")," \u5217\u8868\u793a\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"is_current")," \u5217\u8868\u793a\u5f53\u524d\u7528\u6237\u662f\u5426\u4f7f\u7528\u6b64\u8ba1\u7b97\u96c6\u7fa4\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Users")," \u5217\u8868\u793a\u8be5\u8ba1\u7b97\u96c6\u7fa4\u88ab\u4ee5\u4e0b\u7528\u6237\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql SET PROPERTY 'default_cloud_cluster' = 'not_exist_cluster';\nERROR 5091 (42000): errCode = 2, detailMessage = Cluster not_exist_cluster not exist, use SQL 'SHOW CLUSTERS' to get a valid cluster\n\nmysql show clusters;\n+-------------------------------+------------+------------+\n| cluster                       | is_current | users      |\n+-------------------------------+------------+------------+\n| regression_test_cluster_name0 | FALSE      | root, jack |\n| regression_test_cluster_name5 | FALSE      |            |\n+-------------------------------+------------+------------+\n2 rows in set (0.01 sec)\n\nmysql SET PROPERTY 'default_cloud_cluster' = 'regression_test_cluster_name5';\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,a.yg)("h2",{id:"\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u7684\u9009\u62e9\u673a\u5236"},"\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u7684\u9009\u62e9\u673a\u5236"),(0,a.yg)("p",null,"\u5f53\u7528\u6237\u672a\u660e\u786e\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u65f6\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u4e3a\u7528\u6237\u9009\u62e9\u4e00\u4e2a\u5177\u6709 Active \u540e\u7aef\u4e14\u7528\u6237\u5177\u6709\u4f7f\u7528\u6743\u9650\u7684\u8ba1\u7b97\u96c6\u7fa4\u3002\u5728\u7279\u5b9a\u4f1a\u8bdd\u4e2d\u786e\u5b9a\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u540e\uff0c\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u5c06\u5728\u8be5\u4f1a\u8bdd\u671f\u95f4\u4fdd\u6301\u4e0d\u53d8\uff0c\u9664\u975e\u7528\u6237\u663e\u5f0f\u66f4\u6539\u4e86\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,a.yg)("p",null,"\u5728\u4e0d\u540c\u6b21\u7684\u4f1a\u8bdd\u4e2d\uff0c\u82e5\u53d1\u751f\u4ee5\u4e0b\u60c5\u51b5\uff0c\u7cfb\u7edf\u53ef\u80fd\u4f1a\u81ea\u52a8\u66f4\u6539\u7528\u6237\u7684\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u7528\u6237\u5931\u53bb\u4e86\u5728\u4e0a\u6b21\u4f1a\u8bdd\u4e2d\u6240\u9009\u62e9\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u7684\u4f7f\u7528\u6743\u9650"),(0,a.yg)("li",{parentName:"ul"},"\u6709\u96c6\u7fa4\u88ab\u6dfb\u52a0\u6216\u79fb\u9664"),(0,a.yg)("li",{parentName:"ul"},"\u4e0a\u6b21\u6240\u9009\u62e9\u7684\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u4e0d\u518d\u5177\u6709 Active \u540e\u7aef")),(0,a.yg)("p",null,"\u5176\u4e2d\uff0c\u60c5\u51b5\u4e00\u548c\u60c5\u51b5\u4e8c\u5fc5\u5b9a\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u81ea\u52a8\u9009\u62e9\u7684\u9ed8\u8ba4\u8ba1\u7b97\u96c6\u7fa4\u66f4\u6539\uff0c\u60c5\u51b5\u4e09\u53ef\u80fd\u4f1a\u5bfc\u81f4\u66f4\u6539\u3002"),(0,a.yg)("h2",{id:"\u5207\u6362\u8ba1\u7b97\u96c6\u7fa4"},"\u5207\u6362\u8ba1\u7b97\u96c6\u7fa4"),(0,a.yg)("p",null,"\u7528\u6237\u53ef\u5728\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684\u6570\u636e\u5e93\u548c\u8ba1\u7b97\u96c6\u7fa4\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"USE { [catalog_name.]database_name[@cluster_name] | @cluster_name }\n")),(0,a.yg)("p",null,"\u82e5\u6570\u636e\u5e93\u6216\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0\u5305\u542b\u662f\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u9700\u7528\u53cd\u5f15\u53f7\u5c06\u76f8\u5e94\u7684\u540d\u79f0 ``` \u5305\u56f4\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("p",null,"\u6307\u5b9a\u4f7f\u7528\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"test_database"),"\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"USE test_database\n\u6216\u8005\nUSE `test_database`\n")),(0,a.yg)("p",null,"\u6307\u5b9a\u4f7f\u7528\u8ba1\u7b97\u96c6\u7fa4 ",(0,a.yg)("inlineCode",{parentName:"p"},"test_cluster"),"\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"USE @test_cluster\n\u6216\u8005\nUSE @`test_cluster`\n")),(0,a.yg)("p",null,"\u540c\u65f6\u6307\u5b9a\u4f7f\u7528\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"test_database")," \u548c\u8ba1\u7b97\u96c6\u7fa4 ",(0,a.yg)("inlineCode",{parentName:"p"},"test_cluster")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"USE test_database@test_cluster\nUSE `test_database`@`test_cluster`\n")))}g.isMDXComponent=!0}}]);