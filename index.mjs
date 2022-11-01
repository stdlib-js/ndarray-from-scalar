// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,d){var o,l,j,p;if(l=s(n),j=arguments.length<2?l?"float64":e(n)?"complex128":"generic":d,null===(o=t(j,1)))throw new TypeError(m("0Ms3J",j));return p=/^complex/.test(j)&&l?[n,0]:n,r(o).setter(o,0,p),new i(j,o,[],[0],0,"row-major")}export{n as default};
//# sourceMappingURL=index.mjs.map
