System.register(["./react-legacy-4fcdbd5c.js","./@babel-legacy-5f145b2b.js","./react-is-legacy-7454e434.js","./hoist-non-react-statics-legacy-9f3c22a0.js"],(function(e){"use strict";var t,n,r,o,a,c,s;return{setters:[function(e){t=e.R},function(e){n=e._,r=e.a,o=e.b,a=e.c},function(e){c=e.r},function(e){s=e.h}],execute:function(){var i=t.createContext(),u={},l="PENDING",f="REJECTED",d=function(e){return e};function h(e){var h=e.defaultResolveComponent,p=void 0===h?d:h,y=e.render,v=e.onLoad;function m(e,d){void 0===d&&(d={});var h=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),m={};function g(e){return d.cacheKey?d.cacheKey(e):h.resolve?h.resolve(e):"static"}function b(e,t,n){var r=d.resolveComponent?d.resolveComponent(e,t):p(e);if(d.resolveComponent&&!c.exports.isValidElementType(r))throw new Error("resolveComponent returned something that is not a React component!");return s(n,r,{preload:!0}),r}var E,C,R=function(e){var t=g(e),n=m[t];return n&&n.status!==f||((n=h.requireAsync(e)).status=l,m[t]=n,n.then((function(){n.status="RESOLVED"}),(function(e){n.status=f}))),n},_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:g(t)},function(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!t.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?(!1===d.ssr||(h.requireAsync(t).catch((function(){return null})),n.loadSync(),t.__chunkExtractor.addChunk(h.chunkName(t))),o(n)):(!1!==d.ssr&&(h.isReady&&h.isReady(t)||h.chunkName&&u[h.chunkName(t)])&&n.loadSync(),n)}n(t,e),t.getDerivedStateFromProps=function(e,t){var n=g(e);return r({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var c=t.prototype;return c.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===f&&this.setCache(),this.state.loading&&this.loadAsync()},c.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},c.componentWillUnmount=function(){this.mounted=!1},c.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},c.getCacheKey=function(){return g(this.props)},c.getCache=function(){return m[this.getCacheKey()]},c.setCache=function(e){void 0===e&&(e=void 0),m[this.getCacheKey()]=e},c.triggerOnLoad=function(){var e=this;v&&setTimeout((function(){v(e.state.result,e.props)}))},c.loadSync=function(){if(this.state.loading)try{var e=b(h.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(t){this.state.error=t}},c.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=b(t,e.props,S);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},c.resolveAsync=function(){var e=this.props;e.__chunkExtractor,e.forwardedRef;var t=a(e,["__chunkExtractor","forwardedRef"]);return R(t)},c.render=function(){var e=this.props,t=e.forwardedRef,n=e.fallback;e.__chunkExtractor;var o=a(e,["forwardedRef","fallback","__chunkExtractor"]),c=this.state,s=c.error,i=c.loading,u=c.result;if(d.suspense&&(this.getCache()||this.loadAsync()).status===l)throw this.loadAsync();if(s)throw s;var f=n||d.fallback||null;return i?f:y({fallback:f,result:u,options:d,props:r({},o,{ref:t})})},t}(t.Component),k=(C=function(e){return t.createElement(i.Consumer,null,(function(n){return t.createElement(E,Object.assign({__chunkExtractor:n},e))}))},(E=_).displayName&&(C.displayName=E.displayName+"WithChunkExtractor"),C),S=t.forwardRef((function(e,n){return t.createElement(k,Object.assign({forwardedRef:n},e))}));return S.displayName="Loadable",S.preload=function(e){S.load(e)},S.load=function(e){return R(e)},S}return{loadable:m,lazy:function(e,t){return m(e,r({},t,{suspense:!0}))}}}var p=h({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var n=e.result,r=e.props;return t.createElement(n,r)}}),y=p.loadable,v=p.lazy,m=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),g=m.loadable,b=m.lazy;e("l",y).lib=g,v.lib=b}}}));