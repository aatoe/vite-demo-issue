System.register(["./@babel-legacy-5f145b2b.js","./resolve-pathname-legacy-e9f547fe.js","./tiny-invariant-legacy-fa204dea.js"],(function(n){"use strict";var t,e,i;return{setters:[function(n){t=n.a},function(n){e=n.r},function(n){i=n.i}],execute:function(){function o(n){return"/"===n.charAt(0)?n:"/"+n}function r(n){return"/"===n.charAt(0)?n.substr(1):n}function a(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function c(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function f(n){var t=n.pathname,e=n.search,i=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),i&&"#"!==i&&(o+="#"===i.charAt(0)?i:"#"+i),o}function u(n,i,o,r){var a;"string"==typeof n?(a=function(n){var t=n||"/",e="",i="",o=t.indexOf("#");-1!==o&&(i=t.substr(o),t=t.substr(0,o));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===i?"":i}}(n),a.state=i):(void 0===(a=t({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==i&&void 0===a.state&&(a.state=i));try{a.pathname=decodeURI(a.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return o&&(a.key=o),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=e(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a}function s(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,i,o){if(null!=n){var r="function"==typeof n?n(t,e):n;"string"==typeof r?"function"==typeof i?i(r,o):o(!0):o(!1!==r)}else o(!0)},appendListener:function(n){var e=!0;function i(){e&&n.apply(void 0,arguments)}return t.push(i),function(){e=!1,t=t.filter((function(n){return n!==i}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];t.forEach((function(n){return n.apply(void 0,e)}))}}}n({a:u,b:f,c:function(n){void 0===n&&(n={});var e=n,i=e.getUserConfirmation,o=e.initialEntries,r=void 0===o?["/"]:o,a=e.initialIndex,c=void 0===a?0:a,h=e.keyLength,d=void 0===h?6:h,l=s();function v(n){t(P,n),P.length=P.entries.length,l.notifyListeners(P.location,P.action)}function w(){return Math.random().toString(36).substr(2,d)}var p=x(c,0,r.length-1),g=r.map((function(n){return u(n,void 0,"string"==typeof n?w():n.key||w())})),m=f;function y(n){var t=x(P.index+n,0,P.entries.length-1),e=P.entries[t];l.confirmTransitionTo(e,"POP",i,(function(n){n?v({action:"POP",location:e,index:t}):v()}))}var P={length:g.length,action:"POP",location:g[p],index:p,entries:g,createHref:m,push:function(n,t){var e="PUSH",o=u(n,t,w(),P.location);l.confirmTransitionTo(o,e,i,(function(n){if(n){var t=P.index+1,i=P.entries.slice(0);i.length>t?i.splice(t,i.length-t,o):i.push(o),v({action:e,location:o,index:t,entries:i})}}))},replace:function(n,t){var e="REPLACE",o=u(n,t,w(),P.location);l.confirmTransitionTo(o,e,i,(function(n){n&&(P.entries[P.index]=o,v({action:e,location:o}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(n){var t=P.index+n;return t>=0&&t<P.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return P},d:function(n){void 0===n&&(n={}),h||i(!1);var e,r=window.history,p=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,g=!(-1===window.navigator.userAgent.indexOf("Trident")),m=n,y=m.forceRefresh,P=void 0!==y&&y,x=m.getUserConfirmation,O=void 0===x?d:x,b=m.keyLength,k=void 0===b?6:b,T=n.basename?c(o(n.basename)):"";function A(n){var t=n||{},e=t.key,i=t.state,o=window.location,r=o.pathname+o.search+o.hash;return T&&(r=a(r,T)),u(r,i,e)}function L(){return Math.random().toString(36).substr(2,k)}var E=s();function S(n){t(W,n),W.length=r.length,E.notifyListeners(W.location,W.action)}function C(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||R(A(n.state))}function U(){R(A(w()))}var I=!1;function R(n){I?(I=!1,S()):E.confirmTransitionTo(n,"POP",O,(function(t){t?S({action:"POP",location:n}):function(n){var t=W.location,e=M.indexOf(t.key);-1===e&&(e=0);var i=M.indexOf(n.key);-1===i&&(i=0);var o=e-i;o&&(I=!0,j(o))}(n)}))}var H=A(w()),M=[H.key];function F(n){return T+f(n)}function j(n){r.go(n)}var B=0;function q(n){1===(B+=n)&&1===n?(window.addEventListener(l,C),g&&window.addEventListener(v,U)):0===B&&(window.removeEventListener(l,C),g&&window.removeEventListener(v,U))}var G=!1,W={length:r.length,action:"POP",location:H,createHref:F,push:function(n,t){var e="PUSH",i=u(n,t,L(),W.location);E.confirmTransitionTo(i,e,O,(function(n){if(n){var t=F(i),o=i.key,a=i.state;if(p)if(r.pushState({key:o,state:a},null,t),P)window.location.href=t;else{var c=M.indexOf(W.location.key),f=M.slice(0,c+1);f.push(i.key),M=f,S({action:e,location:i})}else window.location.href=t}}))},replace:function(n,t){var e="REPLACE",i=u(n,t,L(),W.location);E.confirmTransitionTo(i,e,O,(function(n){if(n){var t=F(i),o=i.key,a=i.state;if(p)if(r.replaceState({key:o,state:a},null,t),P)window.location.replace(t);else{var c=M.indexOf(W.location.key);-1!==c&&(M[c]=i.key),S({action:e,location:i})}else window.location.replace(t)}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return G||(q(1),G=!0),function(){return G&&(G=!1,q(-1)),t()}},listen:function(n){var t=E.appendListener(n);return q(1),function(){q(-1),t()}}};return W},e:function(n){void 0===n&&(n={}),h||i(!1);var e=window.history;window.navigator.userAgent.indexOf("Firefox");var r=n,l=r.getUserConfirmation,v=void 0===l?d:l,w=r.hashType,x=void 0===w?"slash":w,O=n.basename?c(o(n.basename)):"",b=g[x],k=b.encodePath,T=b.decodePath;function A(){var n=T(y());return O&&(n=a(n,O)),u(n)}var L=s();function E(n){t(G,n),G.length=e.length,L.notifyListeners(G.location,G.action)}var S=!1,C=null;function U(){var n,t,e=y(),i=k(e);if(e!==i)P(i);else{var o=A(),r=G.location;if(!S&&(t=o,(n=r).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(C===f(o))return;C=null,function(n){if(S)S=!1,E();else{var t="POP";L.confirmTransitionTo(n,t,v,(function(e){e?E({action:t,location:n}):function(n){var t=G.location,e=M.lastIndexOf(f(t));-1===e&&(e=0);var i=M.lastIndexOf(f(n));-1===i&&(i=0);var o=e-i;o&&(S=!0,F(o))}(n)}))}}(o)}}var I=y(),R=k(I);I!==R&&P(R);var H=A(),M=[f(H)];function F(n){e.go(n)}var j=0;function B(n){1===(j+=n)&&1===n?window.addEventListener(p,U):0===j&&window.removeEventListener(p,U)}var q=!1,G={length:e.length,action:"POP",location:H,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=m(window.location.href)),e+"#"+k(O+f(n))},push:function(n,t){var e="PUSH",i=u(n,void 0,void 0,G.location);L.confirmTransitionTo(i,e,v,(function(n){if(n){var t=f(i),o=k(O+t);if(y()!==o){C=t,function(n){window.location.hash=n}(o);var r=M.lastIndexOf(f(G.location)),a=M.slice(0,r+1);a.push(t),M=a,E({action:e,location:i})}else E()}}))},replace:function(n,t){var e="REPLACE",i=u(n,void 0,void 0,G.location);L.confirmTransitionTo(i,e,v,(function(n){if(n){var t=f(i),o=k(O+t);y()!==o&&(C=t,P(o));var r=M.indexOf(f(G.location));-1!==r&&(M[r]=t),E({action:e,location:i})}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return q||(B(1),q=!0),function(){return q&&(q=!1,B(-1)),t()}},listen:function(n){var t=L.appendListener(n);return B(1),function(){B(-1),t()}}};return G}});var h=!("undefined"==typeof window||!window.document||!window.document.createElement);function d(n,t){t(window.confirm(n))}var l="popstate",v="hashchange";function w(){try{return window.history.state||{}}catch(n){return{}}}var p="hashchange",g={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+r(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:r,decodePath:o},slash:{encodePath:o,decodePath:o}};function m(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function y(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function P(n){window.location.replace(m(window.location.href)+"#"+n)}function x(n,t,e){return Math.min(Math.max(n,t),e)}}}}));