"use strict";var v=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var l=v(function(j,p){
var d=require('@stdlib/assert-has-own-property/dist'),f=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-is-number/dist').isPrimitive,c=require('@stdlib/assert-is-complex-like/dist'),m=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/array-base-accessor-setter/dist'),g=require('@stdlib/array-base-setter/dist'),b=require('@stdlib/ndarray-base-buffer/dist'),w=require('@stdlib/ndarray-ctor/dist'),x=require('@stdlib/ndarray-defaults/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist'),O=x.get("order");function h(a){var r,i,t,s,o,e,n;if(i={dtype:"",order:O,readonly:!1},arguments.length>1){if(r=arguments[1],!f(r))throw new TypeError(u('0jv2V',r));d(r,"dtype")&&(i.dtype=r.dtype),d(r,"order")&&(i.order=r.order),d(r,"readonly")&&(i.readonly=r.readonly)}if(s=y(a),i.dtype===""?s?e="float64":c(a)?e="complex128":e="generic":e=i.dtype,t=b(e,1),t===null)throw new TypeError(u('0jvBf',"dtype",e));return/^complex/.test(e)&&s?n=[a,0]:n=a,m(t)?o=q(e):o=g(e),o(t,0,n),new w(e,t,[],[0],0,i.order,i)}p.exports=h
});var E=l();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map