"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[927274],{15680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>f});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=a.createContext({}),c=function(e){var n=a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},y=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return r?a.createElement(f,s(s({ref:n},y),{},{components:r})):a.createElement(f,s({ref:n},y))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},888289:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(58168),t=(r(296540),r(15680));const l={title:"ARRAY_LAST_INDEX",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-last-index",id:"version-2.1/sql-manual/sql-functions/array-functions/array-last-index",title:"ARRAY_LAST_INDEX",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-last-index.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-last-index",permalink:"/docs/sql-manual/sql-functions/array-functions/array-last-index",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_LAST_INDEX",language:"en"},sidebar:"docs",previous:{title:"ARRAY_FIRST_INDEX",permalink:"/docs/sql-manual/sql-functions/array-functions/array-first-index"},next:{title:"ARRAY_FIRST",permalink:"/docs/sql-manual/sql-functions/array-functions/array-first"}},o={},c=[{value:"array_last_index",id:"array_last_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_last_index"},"array_last_index"),(0,t.yg)("p",null,"array_last_index"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_last_index(lambda, ARRAY<T> array1, ...)")),(0,t.yg)("p",null,"Use an lambda expression as an input parameter to perform corresponding expression calculations on the internal data of other input ARRAY parameters. Returns the last index such that the return value of ",(0,t.yg)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," is not 0. Return 0 if such index is not found."),(0,t.yg)("p",null,"There are one or more parameters input in the lambda expression, and the number of elements of all input arrays must be the same. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_last_index(x->x>1, array1);\narray_last_index(x->(x%2 = 0), array1);\narray_last_index(x->(abs(x)-1), array1);\narray_last_index((x,y)->(x = y), array1, array2);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_last_index(x -> x is null, [null, null, 1, 2]);\n+------------------------------------------------------------------------+\n| array_last_index(array_map([x] -> x IS NULL, ARRAY(NULL, NULL, 1, 2))) |\n+------------------------------------------------------------------------+\n|                                                                      2 |\n+------------------------------------------------------------------------+\n\n\nmysql> select array_last_index(x->x='s', ['a', 's', 's', 's', 'b']);\n+-----------------------------------------------------------------------------+\n| array_last_index(array_map([x] -> x = 's', ARRAY('a', 's', 's', 's', 'b'))) |\n+-----------------------------------------------------------------------------+\n|                                                                           4 |\n+-----------------------------------------------------------------------------+\n\nmysql> select array_last_index(x->power(x,2)>10, [1, 4, 3, 4]);\n+-----------------------------------------------------------------------------+\n| array_last_index(array_map([x] -> power(x, 2.0) > 10.0, ARRAY(1, 4, 3, 4))) |\n+-----------------------------------------------------------------------------+\n|                                                                           4 |\n+-----------------------------------------------------------------------------+\n\nmysql> select col2, col3, array_last_index((x,y)->x>y, col2, col3) from array_test;\n+--------------+--------------+---------------------------------------------------------------------+\n| col2         | col3         | array_last_index(array_map([x, y] -> x(0) > y(1), `col2`, `col3`)) |\n+--------------+--------------+---------------------------------------------------------------------+\n| [1, 2, 3]    | [3, 4, 5]    |                                                                   0 |\n| [1, NULL, 2] | [NULL, 3, 1] |                                                                   3 |\n| [1, 2, 3]    | [9, 8, 7]    |                                                                   0 |\n| NULL         | NULL         |                                                                   0 |\n+--------------+--------------+---------------------------------------------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,FIRST_INDEX,array_last_index"))}p.isMDXComponent=!0}}]);