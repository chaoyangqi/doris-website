"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[397334],{15680:(r,a,e)=>{e.d(a,{xA:()=>l,yg:()=>_});var n=e(296540);function t(r,a,e){return a in r?Object.defineProperty(r,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[a]=e,r}function y(r,a){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),e.push.apply(e,n)}return e}function s(r){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?y(Object(e),!0).forEach((function(a){t(r,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(e,a))}))}return r}function o(r,a){if(null==r)return{};var e,n,t=function(r,a){if(null==r)return{};var e,n,t={},y=Object.keys(r);for(n=0;n<y.length;n++)e=y[n],a.indexOf(e)>=0||(t[e]=r[e]);return t}(r,a);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);for(n=0;n<y.length;n++)e=y[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(t[e]=r[e])}return t}var c=n.createContext({}),i=function(r){var a=n.useContext(c),e=a;return r&&(e="function"==typeof r?r(a):s(s({},a),r)),e},l=function(r){var a=i(r.components);return n.createElement(c.Provider,{value:a},r.children)},p="mdxType",m={inlineCode:"code",wrapper:function(r){var a=r.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(r,a){var e=r.components,t=r.mdxType,y=r.originalType,c=r.parentName,l=o(r,["components","mdxType","originalType","parentName"]),p=i(e),u=t,_=p["".concat(c,".").concat(u)]||p[u]||m[u]||y;return e?n.createElement(_,s(s({ref:a},l),{},{components:e})):n.createElement(_,s({ref:a},l))}));function _(r,a){var e=arguments,t=a&&a.mdxType;if("string"==typeof r||t){var y=e.length,s=new Array(y);s[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=r,o[p]="string"==typeof r?r:t,s[1]=o;for(var i=2;i<y;i++)s[i]=e[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},294884:(r,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>y,metadata:()=>o,toc:()=>i});var n=e(58168),t=(e(296540),e(15680));const y={title:"ARRAY_MAP",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-map",id:"version-2.1/sql-manual/sql-functions/array-functions/array-map",title:"ARRAY_MAP",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-map.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-map",permalink:"/docs/sql-manual/sql-functions/array-functions/array-map",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_MAP",language:"en"},sidebar:"docs",previous:{title:"ARRAY_MIN",permalink:"/docs/sql-manual/sql-functions/array-functions/array-min"},next:{title:"ARRAY_FILTER",permalink:"/docs/sql-manual/sql-functions/array-functions/array-filter"}},c={},i=[{value:"array_map",id:"array_map",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:i},p="wrapper";function m(r){let{components:a,...e}=r;return(0,t.yg)(p,(0,n.A)({},l,e,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_map"},"array_map"),(0,t.yg)("p",null,"array_map(lambda,array,....)"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_map(lambda, ARRAY<T> array1, ARRAY<T> array2)")),(0,t.yg)("p",null,"Use a lambda expression as the input parameter to calculate the corresponding expression for the internal data of other input ARRAY parameters.\nThe number of parameters entered in the lambda expression is 1 or more, which must be consistent with the number of input array columns.\nThe scalar functions can be executed in lambda, and aggregate functions are not supported."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_map(x->x, array1);\narray_map(x->(x+2), array1);\narray_map(x->(abs(x)-2), array1);\n\narray_map((x,y)->(x = y), array1, array2);\narray_map((x,y)->(power(x,2)+y), array1, array2);\narray_map((x,y,z)->(abs(x)+y*z), array1, array2, array3);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\nmysql [test]>select *, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n|    3 | [1]             | [-100]                  | [1, 2, 3]                              |\n|    4 | NULL            | NULL                    | [1, 2, 3]                              |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_map(x->x+2,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) + 2, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+--------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [3, 4, 5]                                  |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [3, 4, 5]                                  |\n|    3 | [1]             | [-100]                  | [3, 4, 5]                                  |\n|    4 | NULL            | NULL                    | [3, 4, 5]                                  |\n+------+-----------------+-------------------------+--------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n| [1]             | [-100]                  | [1, 2, 3]                              |\n| NULL            | NULL                    | [1, 2, 3]                              |\n+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->power(x,2),[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> power(x(0), 2.0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 4, 9]                                          |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 4, 9]                                          |\n| [1]             | [-100]                  | [1, 4, 9]                                          |\n| NULL            | NULL                    | [1, 4, 9]                                          |\n+-----------------+-------------------------+----------------------------------------------------+\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->x+y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> x(0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 22, -37, 84, -95]                                   |\n| [6, 7, 8]       | [10, 12, 13]            | [16, 19, 21]                                             |\n| [1]             | [-100]                  | [-99]                                                    |\n| NULL            | NULL                    | NULL                                                     |\n+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->power(x,2)+y,c_array1, c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> power(x(0), 2.0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 24, -31, 96, -75]                                               |\n| [6, 7, 8]       | [10, 12, 13]            | [46, 61, 77]                                                         |\n| [1]             | [-100]                  | [-99]                                                                |\n| NULL            | NULL                    | NULL                                                                 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n4 rows in set (0.03 sec)\n\nmysql [test]>select *,array_map(x->x=3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) = 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 0]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map(x->x>3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) > 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 0, 1, 1]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                |\n|    3 | [1]             | [-100]                  | [1]                                                      |\n|    4 | NULL            | NULL                    | NULL                                                     |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select array_map(x->cast(x as string), c_array1) from test_array_map_function;\n+-----------------+-------------------------------------------------------+\n| c_array1        | array_map([x] -> CAST(x(0) AS CHARACTER), `c_array1`) |\n+-----------------+-------------------------------------------------------+\n| [1, 2, 3, 4, 5] | ['1', '2', '3', '4', '5']                             |\n| [6, 7, 8]       | ['6', '7', '8']                                       |\n| []              | []                                                    |\n| NULL            | NULL                                                  |\n+-----------------+-------------------------------------------------------+\n4 rows in set (0.01 sec)\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,MAP,ARRAY_MAP"))}m.isMDXComponent=!0}}]);