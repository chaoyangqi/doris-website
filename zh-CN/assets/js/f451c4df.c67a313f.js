"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88644],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var n=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(t),g=l,y=c["".concat(p,".").concat(g)]||c[g]||u[g]||r;return t?n.createElement(y,i(i({ref:a},s),{},{components:t})):n.createElement(y,i({ref:a},s))}));function y(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},896887:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=t(58168),l=(t(296540),t(15680));const r={title:"SET-PROPERTY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",id:"version-3.0/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SET-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/SET-PASSWORD"},next:{title:"LDAP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/LDAP"}},p={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"user",id:"user",level:3},{value:"key",id:"key",level:3},{value:"value",id:"value",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"Keywords",id:"keywords",level:2}],s={toc:m},c="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(c,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"SET PROPERTY \u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027\uff0c\u5305\u62ec\u5206\u914d\u7ed9\u7528\u6237\u7684\u8d44\u6e90\u548c\u5bfc\u5165\u96c6\u7fa4\u8bbe\u7f6e\u3002\u8fd9\u91cc\u8bbe\u7f6e\u7684\u7528\u6237\u5c5e\u6027\u662f\u9488\u5bf9\u7528\u6237\u7684\uff0c\u800c\u4e0d\u662f\u9488\u5bf9 user_identity\u3002\u4f8b\u5982\uff0c\u5982\u679c\u901a\u8fc7 CREATE USER \u8bed\u53e5\u521b\u5efa\u4e86\u4e24\u4e2a\u7528\u6237 'jack'@'%' \u548c 'jack'@'192.%'\uff0c\u5219\u4f7f\u7528 SET PROPERTY \u8bed\u53e5\u53ea\u80fd\u9488\u5bf9\u7528\u6237 'jack'\uff0c\u800c\u4e0d\u662f 'jack'@'%' \u6216 'jack'@'192.%'\u3002"),(0,l.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.yg)("h3",{id:"user"},"user"),(0,l.yg)("p",null,"\u8981\u8bbe\u7f6e\u5c5e\u6027\u7684\u7528\u6237\u540d\u3002\u5982\u679c\u7701\u7565\uff0c\u5219\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6e\u5c5e\u6027\u3002"),(0,l.yg)("h3",{id:"key"},"key"),(0,l.yg)("p",null,"\u8981\u8bbe\u7f6e\u7684\u5c5e\u6027\u952e\u3002\u53ef\u7528\u7684\u952e\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"max_user_connections"),"\uff1a\u6700\u5927\u8fde\u63a5\u6570\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"max_query_instances"),"\uff1a\u7528\u6237\u540c\u4e00\u65f6\u95f4\u70b9\u6267\u884c\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u7684 instance \u4e2a\u6570\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sql_block_rules"),"\uff1a\u8bbe\u7f6e SQL \u963b\u6b62\u89c4\u5219\u3002\u8bbe\u7f6e\u540e\uff0c\u8be5\u7528\u6237\u53d1\u9001\u7684\u67e5\u8be2\u5982\u679c\u5339\u914d\u89c4\u5219\uff0c\u5219\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"cpu_resource_limit"),"\uff1a\u9650\u5236\u67e5\u8be2\u7684 CPU \u8d44\u6e90\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"li"},"cpu_resource_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"exec_mem_limit"),"\uff1a\u9650\u5236\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"li"},"exec_mem_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"resource_tags"),"\uff1a\u6307\u5b9a\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"query_timeout"),"\uff1a\u6307\u5b9a\u7528\u6237\u7684\u67e5\u8be2\u8d85\u65f6\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default_workload_group"),"\uff1a\u6307\u5b9a\u7528\u6237\u7684\u9ed8\u8ba4\u5de5\u4f5c\u8d1f\u8f7d\u7ec4\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default_compute_group"),"\uff1a\u6307\u5b9a\u7528\u6237\u7684\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u3002")),(0,l.yg)("p",null,"\u6ce8\uff1a\u5982\u679c\u672a\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"exec_mem_limit"),"\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u4f1a\u8bdd\u53d8\u91cf\u4e2d\u7684\u503c\u3002"),(0,l.yg)("h3",{id:"value"},"value"),(0,l.yg)("p",null,"\u4e3a\u6307\u5b9a\u952e\u8bbe\u7f6e\u7684\u503c\u3002"),(0,l.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u6700\u5927\u8fde\u63a5\u6570\u4e3a 1000\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u6700\u5927\u67e5\u8be2\u5b9e\u4f8b\u6570\u4e3a 3000\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4e3a\u7528\u6237 'jack' \u8bbe\u7f6e SQL \u963b\u6b62\u89c4\u5219\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684 CPU \u8d44\u6e90\u9650\u5236\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u5185\u5b58\u4f7f\u7528\u9650\u5236\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u9ed8\u8ba4\u5de5\u4f5c\u8d1f\u8f7d\u7ec4\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'default_workload_group' = 'group1';\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237 'jack' \u7684\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'default_compute_group' = 'compute_group1';\n")))),(0,l.yg)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/CREATE-USER"},"CREATE USER")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY"},"SHOW PROPERTY"))),(0,l.yg)("h2",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SET, PROPERTY, WORKLOAD GROUP, COMPUTE GROUP\n")))}u.isMDXComponent=!0}}]);