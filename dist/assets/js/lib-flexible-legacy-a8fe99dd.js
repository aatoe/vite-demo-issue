System.register([],(function(){"use strict";return{execute:function(){!function(e,t){var i,r=e.document,a=r.documentElement,n=r.querySelector('meta[name="viewport"]'),o=r.querySelector('meta[name="flexible"]'),l=0,m=0,s=t.flexible||(t.flexible={});if(n){var d=n.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(m=parseFloat(d[1]),l=parseInt(1/m))}else if(o){var c=o.getAttribute("content");if(c){var p=c.match(/initial\-dpr=([\d\.]+)/),u=c.match(/maximum\-dpr=([\d\.]+)/);p&&(l=parseFloat(p[1]),m=parseFloat((1/l).toFixed(2))),u&&(l=parseFloat(u[1]),m=parseFloat((1/l).toFixed(2)))}}if(!l&&!m){e.navigator.appVersion.match(/android/gi);var f=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;m=1/(l=f?v>=3&&(!l||l>=3)?3:v>=2&&(!l||l>=2)?2:1:1)}if(a.setAttribute("data-dpr",l),!n)if((n=r.createElement("meta")).setAttribute("name","viewport"),n.setAttribute("content","initial-scale="+m+", maximum-scale="+m+", minimum-scale="+m+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(n);else{var h=r.createElement("div");h.appendChild(n),r.write(h.innerHTML)}function x(){var t=a.getBoundingClientRect().width;t/l>540&&(t=540*l);var i=t/10;a.style.fontSize=i+"px",s.rem=e.rem=i}e.addEventListener("resize",(function(){clearTimeout(i),i=setTimeout(x,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(i),i=setTimeout(x,300))}),!1),"complete"===r.readyState?r.body.style.fontSize=12*l+"px":r.addEventListener("DOMContentLoaded",(function(e){r.body.style.fontSize=12*l+"px"}),!1),x(),s.dpr=e.dpr=l,s.refreshRem=x,s.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},s.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))}}}));