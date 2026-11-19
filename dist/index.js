"use strict";var m=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var k=m(function(G,j){
function y(a,r,o,c,n,e,f,x){var v,t,q,i,s,u,b;for(v=o.data,t=e.data,i=o.accessors[0],q=e.accessors[1],s=n,u=x,b=0;b<a;b++)q(t,u,i(t,u)+r*i(v,s)),s+=c,u+=f;return e}j.exports=y
});var P=m(function(H,O){
var M=require('@stdlib/array-base-arraylike2object/dist'),z=k(),g=4;function A(a,r,o,c,n,e,f,x){var v,t,q,i,s,u;if(a<=0||r===0)return e;if(q=M(o),i=M(e),q.accessorProtocol||i.accessorProtocol)return z(a,r,q,c,n,i,f,x),i.data;if(v=n,t=x,c===1&&f===1){if(s=a%g,s>0)for(u=0;u<s;u++)e[t]+=r*o[v],v+=c,t+=f;if(a<g)return e;for(u=s;u<a;u+=g)e[t]+=r*o[v],e[t+1]+=r*o[v+1],e[t+2]+=r*o[v+2],e[t+3]+=r*o[v+3],v+=g,t+=g;return e}for(u=0;u<a;u++)e[t]+=r*o[v],v+=c,t+=f;return e}O.exports=A
});var p=m(function(I,d){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=P();function C(a,r,o,c,n,e){return B(a,r,o,c,R(a,c),n,e,R(a,e))}d.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=p(),E=P();D(w,"ndarray",E);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
