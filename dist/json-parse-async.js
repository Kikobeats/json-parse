/**
 * json-parse-async - The missing JSON.parse async interface.
 * @version v1.0.2
 * @link    https://github.com/Kikobeats/json-parse-async
 * @license MIT
 */require=function t(e,n,r){function o(s,c){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[s]={exports:{}};e[s][0].call(a.exports,function(t){var n=e[s][1][t];return o(n?n:t)},a,a.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){"use strict";t("coffee-script/register"),e.exports=t("./lib/cb2promise")},{"./lib/cb2promise":2,"coffee-script/register":7}],2:[function(t,e,n){"use strict";var r;r=t("pinkie-promise"),e.exports=function(){var t,e,n,o,i;return t=Array.prototype.slice.call(arguments),n=t.shift(),i=null,o=null,e=function(){var e;return t=Array.prototype.slice.call(arguments),e=t.shift(),e?o(e):i.apply(null,t)},t.push(e),new r(function(e,r){return i=e,o=r,n.apply(null,t)})}},{"pinkie-promise":3}],3:[function(t,e,n){(function(n){"use strict";e.exports=n.Promise||t("pinkie")}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{pinkie:4}],4:[function(t,e,n){"use strict";function r(){for(var t=0;t<x.length;t++)x[t][0](x[t][1]);x=[],g=!1}function o(t,e){x.push([t,e]),g||(g=!0,b(r,0))}function i(t,e){function n(t){u(e,t)}function r(t){a(e,t)}try{t(n,r)}catch(o){r(o)}}function s(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n=v;try{r=o(r)}catch(s){a(i,s)}}c(i,r)||(n===v&&u(i,r),n===w&&a(i,r))}function c(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"==typeof e)){var r=e.then;if("function"==typeof r)return r.call(e,function(r){n||(n=!0,e!==r?u(t,r):f(t,r))},function(e){n||(n=!0,a(t,e))}),!0}}catch(o){return n||a(t,o),!0}return!1}function u(t,e){t!==e&&c(t,e)||f(t,e)}function f(t,e){t._state===y&&(t._state=d,t._data=e,o(l,t))}function a(t,e){t._state===y&&(t._state=d,t._data=e,o(h,t))}function p(t){t._then=t._then.forEach(s)}function l(t){t._state=v,p(t)}function h(t){t._state=w,p(t)}function m(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof m==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],i(t,this)}var g,y="pending",d="settled",v="fulfilled",w="rejected",_=function(){},b="undefined"!=typeof setImmediate?setImmediate:setTimeout,x=[];m.prototype={constructor:m,_state:y,_then:null,_data:void 0,then:function(t,e){var n={owner:this,then:new this.constructor(_),fulfilled:t,rejected:e};return this._state===v||this._state===w?o(s,n):this._then.push(n),n.then},"catch":function(t){return this.then(null,t)}},m.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new m(function(e,n){function r(t){return s++,function(n){i[t]=n,--s||e(i)}}for(var o,i=[],s=0,c=0;c<t.length;c++)o=t[c],o&&"function"==typeof o.then?o.then(r(c),n):i[c]=o;s||e(i)})},m.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new m(function(e,n){for(var r,o=0;o<t.length;o++)r=t[o],r&&"function"==typeof r.then?r.then(e,n):e(r)})},m.resolve=function(t){return t&&"object"==typeof t&&t.constructor===m?t:new m(function(e){e(t)})},m.reject=function(t){return new m(function(e,n){n(t)})},e.exports=m},{}],5:[function(t,e,n){"use strict";t("coffee-script/register"),e.exports=t("./lib/Errorifier")},{"./lib/Errorifier":6,"coffee-script/register":7}],6:[function(t,e,n){"use strict";var r;e.exports=r=function(){function t(t){var e,n;return e=new Error,(n="string"==typeof t?this._composeMessageFromString:this._composeMessageFromObject)(e,t)}return t.prototype._composeMessageFromObject=function(t,e){var n,r;for(n in e)r=e[n],t[n]=r;return t.message=t.message||t.description,t.message&&t.code?(t.message=t.code+", "+t.message,t):t},t.prototype._composeMessageFromString=function(t,e){var n;return t.message=e,n=e.split(","),n.length<2?t:(t.code=n[0].trim(),t)},t}()},{}],7:[function(t,e,n){},{}],8:[function(t,e,n){function r(){a=!1,c.length?f=c.concat(f):p=-1,f.length&&o()}function o(){if(!a){var t=setTimeout(r);a=!0;for(var e=f.length;e;){for(c=f,f=[];++p<e;)c[p].run();p=-1,e=f.length}c=null,a=!1,clearTimeout(t)}}function i(t,e){this.fun=t,this.array=e}function s(){}var c,u=e.exports={},f=[],a=!1,p=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new i(t,e)),1!==f.length||a||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],"json-parse-async":[function(t,e,n){(function(n){"use strict";function r(t,e){return 1===arguments.length?o(s,t):s(t,e)}var o=t("cb2promise"),i=t("errorifier"),s=function(t,e){var r,o;try{r=JSON.parse(t)}catch(s){r={},o=new i({code:"ENOVALIDJSON",message:s.message})}finally{return n.nextTick(function(){return e(o,r)})}};e.exports=r}).call(this,t("_process"))},{_process:8,cb2promise:1,errorifier:5}]},{},[]);