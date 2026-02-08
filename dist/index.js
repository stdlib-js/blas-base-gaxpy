"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var k=m(function(G,j){
function y(a,e,v,c,n,r,f,x){var u,o,q,i,s,t,b;for(u=v.data,o=r.data,i=v.accessors[0],q=r.accessors[1],s=n,t=x,b=0;b<a;b++)q(o,t,i(o,t)+e*i(u,s)),s+=c,t+=f;return r}j.exports=y
});var P=m(function(H,O){
var M=require('@stdlib/array-base-arraylike2object/dist'),z=k(),g=4;function A(a,e,v,c,n,r,f,x){var u,o,q,i,s,t;if(a<=0||e===0)return r;if(q=M(v),i=M(r),q.accessorProtocol||i.accessorProtocol)return z(a,e,q,c,n,i,f,x),i.data;if(u=n,o=x,c===1&&f===1){if(s=a%g,s>0)for(t=0;t<s;t++)r[o]+=e*v[u],u+=c,o+=f;if(a<g)return r;for(t=s;t<a;t+=g)r[o]+=e*v[u],r[o+1]+=e*v[u+1],r[o+2]+=e*v[u+2],r[o+3]+=e*v[u+3],u+=g,o+=g;return r}for(t=0;t<a;t++)r[o]+=e*v[u],u+=c,o+=f;return r}O.exports=A
});var p=m(function(I,d){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=P();function C(a,e,v,c,n,r){return B(a,e,v,c,R(a,c),n,r,R(a,r))}d.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=p(),E=P();D(w,"ndarray",E);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
