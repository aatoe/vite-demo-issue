System.register([],(function(e){"use strict";return{execute:function(){var t={exports:{}},r=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};t.exports=s,t.exports.parse=o,t.exports.compile=function(e,t){return p(o(e,t),t)},t.exports.tokensToFunction=p,t.exports.tokensToRegExp=f;var n=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function o(e,t){for(var r,o=[],i=0,p=0,c="",l=t&&t.delimiter||"/";null!=(r=n.exec(e));){var f=r[0],s=r[1],g=r.index;if(c+=e.slice(p,g),p=g+f.length,s)c+=s[1];else{var h=e[p],x=r[2],d=r[3],v=r[4],m=r[5],y=r[6],w=r[7];c&&(o.push(c),c="");var E=null!=x&&null!=h&&h!==x,b="+"===y||"*"===y,R="?"===y||"*"===y,$=r[2]||l,T=v||m;o.push({name:d||i++,prefix:x||"",delimiter:$,optional:R,repeat:b,partial:E,asterisk:!!w,pattern:T?u(T):w?".*":"[^"+a($)+"]+?"})}}return p<e.length&&(c+=e.substr(p)),c&&o.push(c),o}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function p(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",l(t)));return function(t,o){for(var p="",a=t||{},u=(o||{}).pretty?i:encodeURIComponent,c=0;c<e.length;c++){var l=e[c];if("string"!=typeof l){var f,s=a[l.name];if(null==s){if(l.optional){l.partial&&(p+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(s)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var g=0;g<s.length;g++){if(f=u(s[g]),!n[c].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");p+=(0===g?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(s).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(s),!n[c].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');p+=l.prefix+f}}else p+=l}return p}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function l(e){return e&&e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,p="",u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)p+=a(f);else{var s=a(f.prefix),g="(?:"+f.pattern+")";t.push(f),f.repeat&&(g+="(?:"+s+g+")*"),p+=g=f.optional?f.partial?s+"("+g+")?":"(?:"+s+"("+g+"))?":s+"("+g+")"}}var h=a(n.delimiter||"/"),x=p.slice(-h.length)===h;return o||(p=(x?p.slice(0,-h.length):p)+"(?:"+h+"(?=$))?"),p+=i?"$":o&&x?"":"(?="+h+"|$)",c(new RegExp("^"+p,l(n)),t)}function s(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(e,t):r(e)?function(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(s(e[o],t,r).source);return c(new RegExp("(?:"+n.join("|")+")",l(r)),t)}(e,t,n):function(e,t,r){return f(o(e,r),t,r)}(e,t,n)}e("p",t.exports)}}}));