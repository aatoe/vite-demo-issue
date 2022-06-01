var n={exports:{}},e={};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(n){var e,t,a,r;if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;n.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();n.unstable_now=function(){return i.now()-o}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,s=null,c=function(){if(null!==u)try{var e=n.unstable_now();u(!0,e),u=null}catch(t){throw setTimeout(c,0),t}};e=function(n){null!==u?setTimeout(e,0,n):(u=n,setTimeout(c,0))},t=function(n,e){s=setTimeout(n,e)},a=function(){clearTimeout(s)},n.unstable_shouldYield=function(){return!1},r=n.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,b=window.clearTimeout;if("undefined"!=typeof console){window.cancelAnimationFrame;window.requestAnimationFrame}var v=!1,d=null,p=-1,w=5,y=0;n.unstable_shouldYield=function(){return n.unstable_now()>=y},r=function(){},n.unstable_forceFrameRate=function(n){0>n||125<n||(w=0<n?Math.floor(1e3/n):5)};var m=new MessageChannel,_=m.port2;m.port1.onmessage=function(){if(null!==d){var e=n.unstable_now();y=e+w;try{d(!0,e)?_.postMessage(null):(v=!1,d=null)}catch(t){throw _.postMessage(null),t}}else v=!1},e=function(n){d=n,v||(v=!0,_.postMessage(null))},t=function(e,t){p=f((function(){e(n.unstable_now())}),t)},a=function(){b(p),p=-1}}function k(n,e){var t=n.length;n.push(e);n:for(;;){var a=t-1>>>1,r=n[a];if(!(void 0!==r&&0<T(r,e)))break n;n[a]=e,n[t]=r,t=a}}function h(n){return void 0===(n=n[0])?null:n}function x(n){var e=n[0];if(void 0!==e){var t=n.pop();if(t!==e){n[0]=t;n:for(var a=0,r=n.length;a<r;){var l=2*(a+1)-1,i=n[l],o=l+1,u=n[o];if(void 0!==i&&0>T(i,t))void 0!==u&&0>T(u,i)?(n[a]=u,n[o]=t,a=o):(n[a]=i,n[l]=t,a=l);else{if(!(void 0!==u&&0>T(u,t)))break n;n[a]=u,n[o]=t,a=o}}}return e}return null}function T(n,e){var t=n.sortIndex-e.sortIndex;return 0!==t?t:n.id-e.id}var g=[],P=[],I=1,C=null,M=3,F=!1,L=!1,Y=!1;function j(n){for(var e=h(P);null!==e;){if(null===e.callback)x(P);else{if(!(e.startTime<=n))break;x(P),e.sortIndex=e.expirationTime,k(g,e)}e=h(P)}}function q(n){if(Y=!1,j(n),!L)if(null!==h(g))L=!0,e(A);else{var a=h(P);null!==a&&t(q,a.startTime-n)}}function A(e,r){L=!1,Y&&(Y=!1,a()),F=!0;var l=M;try{for(j(r),C=h(g);null!==C&&(!(C.expirationTime>r)||e&&!n.unstable_shouldYield());){var i=C.callback;if("function"==typeof i){C.callback=null,M=C.priorityLevel;var o=i(C.expirationTime<=r);r=n.unstable_now(),"function"==typeof o?C.callback=o:C===h(g)&&x(g),j(r)}else x(g);C=h(g)}if(null!==C)var u=!0;else{var s=h(P);null!==s&&t(q,s.startTime-r),u=!1}return u}finally{C=null,M=l,F=!1}}var E=r;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(n){n.callback=null},n.unstable_continueExecution=function(){L||F||(L=!0,e(A))},n.unstable_getCurrentPriorityLevel=function(){return M},n.unstable_getFirstCallbackNode=function(){return h(g)},n.unstable_next=function(n){switch(M){case 1:case 2:case 3:var e=3;break;default:e=M}var t=M;M=e;try{return n()}finally{M=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=E,n.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=M;M=n;try{return e()}finally{M=t}},n.unstable_scheduleCallback=function(r,l,i){var o=n.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?o+i:o:i=o,r){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return r={id:I++,callback:l,priorityLevel:r,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>o?(r.sortIndex=i,k(P,r),null===h(g)&&r===h(P)&&(Y?a():Y=!0,t(q,i-o))):(r.sortIndex=u,k(g,r),L||F||(L=!0,e(A))),r},n.unstable_wrapCallback=function(n){var e=M;return function(){var t=M;M=e;try{return n.apply(this,arguments)}finally{M=t}}}}(e),n.exports=e;export{n as s};