// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__,l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},p=r()?l:c;function _(e,r,t,o,n,i){var a,u,f,l;if(e<=0||0===r)return n;if(1===o&&1===i){if((f=e%4)>0)for(l=0;l<f;l++)n[l]+=r*t[l];if(e<4)return n;for(l=f;l<e;l+=4)n[l]+=r*t[l],n[l+1]+=r*t[l+1],n[l+2]+=r*t[l+2],n[l+3]+=r*t[l+3];return n}for(a=o<0?(1-e)*o:0,u=i<0?(1-e)*i:0,l=0;l<e;l++)n[u]+=r*t[a],a+=o,u+=i;return n}return p(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n,i,a,u){var f,l,c,p;if(e<=0||0===r)return i;if(f=n,l=u,1===o&&1===a){if((c=e%4)>0)for(p=0;p<c;p++)i[l]+=r*t[f],f+=o,l+=a;if(e<4)return i;for(p=c;p<e;p+=4)i[l]+=r*t[f],i[l+1]+=r*t[f+1],i[l+2]+=r*t[f+2],i[l+3]+=r*t[f+3],f+=4,l+=4;return i}for(p=0;p<e;p++)i[l]+=r*t[f],f+=o,l+=a;return i}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gaxpy=r();
//# sourceMappingURL=browser.js.map
