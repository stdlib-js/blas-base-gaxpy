"use strict";var M=function(e,f){return function(){return f||e((f={exports:{}}).exports,f),f.exports}};var R=M(function(D,O){
var s=4;function w(e,f,i,t,v,n){var c,m,u,r;if(e<=0||f===0)return v;if(t===1&&n===1){if(u=e%s,u>0)for(r=0;r<u;r++)v[r]+=f*i[r];if(e<s)return v;for(r=u;r<e;r+=s)v[r]+=f*i[r],v[r+1]+=f*i[r+1],v[r+2]+=f*i[r+2],v[r+3]+=f*i[r+3];return v}for(t<0?c=(1-e)*t:c=0,n<0?m=(1-e)*n:m=0,r=0;r<e;r++)v[m]+=f*i[c],c+=t,m+=n;return v}O.exports=w
});var j=M(function(E,b){
var q=4;function z(e,f,i,t,v,n,c,m){var u,r,g,o;if(e<=0||f===0)return n;if(u=v,r=m,t===1&&c===1){if(g=e%q,g>0)for(o=0;o<g;o++)n[r]+=f*i[u],u+=t,r+=c;if(e<q)return n;for(o=g;o<e;o+=q)n[r]+=f*i[u],n[r+1]+=f*i[u+1],n[r+2]+=f*i[u+2],n[r+3]+=f*i[u+3],u+=q,r+=q;return n}for(o=0;o<e;o++)n[r]+=f*i[u],u+=t,r+=c;return n}b.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=R(),B=j();A(k,"ndarray",B);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
