"use strict";var f=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=f(function(F,l){"use strict";var p=require("@stdlib/assert-has-own-property"),y=require("@stdlib/assert-is-plain-object"),q=require("@stdlib/assert-is-number").isPrimitive,g=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),m=require("@stdlib/assert-is-complex-like"),c=require("@stdlib/assert-is-boolean").isPrimitive,b=require("@stdlib/array-base-assert-is-accessor-array"),E=require("@stdlib/array-base-accessor-setter"),L=require("@stdlib/array-base-setter"),O=require("@stdlib/ndarray-base-buffer"),_=require("@stdlib/ndarray-ctor"),o=require("@stdlib/ndarray-defaults"),w=require("@stdlib/complex-dtype"),u=require("@stdlib/string-format"),A=o.get("order"),T=o.get("dtypes.real_floating_point"),x=o.get("dtypes.complex_floating_point"),D=o.get("dtypes.boolean");function P(i){var r,a,t,s,n,e,d;if(a={dtype:"",order:A,readonly:!1},arguments.length>1){if(r=arguments[1],!y(r))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",r));p(r,"dtype")&&(a.dtype=r.dtype),p(r,"order")&&(a.order=r.order),p(r,"readonly")&&(a.readonly=r.readonly)}if(s=q(i),a.dtype===""?s?e=T:c(i)?e=D:m(i)?(e=w(i),e===null&&(e=x)):e="generic":e=a.dtype,t=O(e,1),t===null)throw new TypeError(u("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",e));return g(e)&&s?d=[i,0]:d=i,b(t)?n=E(e):n=L(e),n(t,0,d),new _(e,t,[],[0],0,a.order,a)}l.exports=P});var h=v();module.exports=h;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
