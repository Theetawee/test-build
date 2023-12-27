var H=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var r=(s,e,t)=>(H(s,e,"read from private field"),t?t.call(s):e.get(s)),h=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},n=(s,e,t,i)=>(H(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);var f=(s,e,t)=>(H(s,e,"access private method"),t);import{S as Re,s as Y,n as Ce,b as ue,c as de,t as xe,f as Se,d as Ee,e as fe,g as me,r as R,k as Ae,j as a}from"./index-NYLOCjoL.js";import{s as Oe}from"./useAxios-6OaYkf_k.js";var g,o,F,p,S,L,b,N,M,B,E,A,x,O,U,P,k,_,Q,$,T,ee,D,te,X,se,J,re,q,ie,V,ve,ye,Ve=(ye=class extends Re{constructor(e,t){super();h(this,U);h(this,k);h(this,Q);h(this,T);h(this,D);h(this,X);h(this,J);h(this,q);h(this,V);h(this,g,void 0);h(this,o,void 0);h(this,F,void 0);h(this,p,void 0);h(this,S,void 0);h(this,L,void 0);h(this,b,void 0);h(this,N,void 0);h(this,M,void 0);h(this,B,void 0);h(this,E,void 0);h(this,A,void 0);h(this,x,void 0);h(this,O,void 0);n(this,o,void 0),n(this,F,void 0),n(this,p,void 0),n(this,O,new Set),n(this,g,e),this.options=t,n(this,b,null),this.bindMethods(),this.setOptions(t)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,o).addObserver(this),pe(r(this,o),this.options)?f(this,U,P).call(this):this.updateResult(),f(this,D,te).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ae(r(this,o),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ae(r(this,o),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,X,se).call(this),f(this,J,re).call(this),r(this,o).removeObserver(this)}setOptions(e,t){const i=this.options,y=r(this,o);if(this.options=r(this,g).defaultQueryOptions(e),Y(i,this.options)||r(this,g).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,o),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),f(this,q,ie).call(this);const l=this.hasListeners();l&&ge(r(this,o),y,this.options,i)&&f(this,U,P).call(this),this.updateResult(t),l&&(r(this,o)!==y||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&f(this,k,_).call(this);const c=f(this,Q,$).call(this);l&&(r(this,o)!==y||this.options.enabled!==i.enabled||c!==r(this,x))&&f(this,T,ee).call(this,c)}getOptimisticResult(e){const t=r(this,g).getQueryCache().build(r(this,g),e),i=this.createResult(t,e);return je(this,i)&&(n(this,p,i),n(this,L,this.options),n(this,S,r(this,o).state)),i}getCurrentResult(){return r(this,p)}trackResult(e){const t={};return Object.keys(e).forEach(i=>{Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:()=>(r(this,O).add(i),e[i])})}),t}getCurrentQuery(){return r(this,o)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=r(this,g).defaultQueryOptions(e),i=r(this,g).getQueryCache().build(r(this,g),t);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,t))}fetch(e){return f(this,U,P).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,p)))}createResult(e,t){var le;const i=r(this,o),y=this.options,l=r(this,p),c=r(this,S),d=r(this,L),j=e!==i?e.state:r(this,F),{state:u}=e;let{error:Z,errorUpdatedAt:oe,fetchStatus:I,status:C}=u,he=!1,v;if(t._optimisticResults){const m=this.hasListeners(),z=!m&&pe(e,t),we=m&&ge(e,i,t,y);(z||we)&&(I=Ee(e.options.networkMode)?"fetching":"paused",u.dataUpdatedAt||(C="pending")),t._optimisticResults==="isRestoring"&&(I="idle")}if(t.select&&typeof u.data<"u")if(l&&u.data===(c==null?void 0:c.data)&&t.select===r(this,N))v=r(this,M);else try{n(this,N,t.select),v=t.select(u.data),v=fe(l==null?void 0:l.data,v,t),n(this,M,v),n(this,b,null)}catch(m){n(this,b,m)}else v=u.data;if(typeof t.placeholderData<"u"&&typeof v>"u"&&C==="pending"){let m;if(l!=null&&l.isPlaceholderData&&t.placeholderData===(d==null?void 0:d.placeholderData))m=l.data;else if(m=typeof t.placeholderData=="function"?t.placeholderData((le=r(this,B))==null?void 0:le.state.data,r(this,B)):t.placeholderData,t.select&&typeof m<"u")try{m=t.select(m),n(this,b,null)}catch(z){n(this,b,z)}typeof m<"u"&&(C="success",v=fe(l==null?void 0:l.data,m,t),he=!0)}r(this,b)&&(Z=r(this,b),v=r(this,M),oe=Date.now(),C="error");const G=I==="fetching",W=C==="pending",K=C==="error",ce=W&&G;return{status:C,fetchStatus:I,isPending:W,isSuccess:C==="success",isError:K,isInitialLoading:ce,isLoading:ce,data:v,dataUpdatedAt:u.dataUpdatedAt,error:Z,errorUpdatedAt:oe,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>j.dataUpdateCount||u.errorUpdateCount>j.errorUpdateCount,isFetching:G,isRefetching:G&&!W,isLoadingError:K&&u.dataUpdatedAt===0,isPaused:I==="paused",isPlaceholderData:he,isRefetchError:K&&u.dataUpdatedAt!==0,isStale:ne(e,t),refetch:this.refetch}}updateResult(e){const t=r(this,p),i=this.createResult(r(this,o),this.options);if(n(this,S,r(this,o).state),n(this,L,this.options),r(this,S).data!==void 0&&n(this,B,r(this,o)),Y(i,t))return;n(this,p,i);const y={},l=()=>{if(!t)return!0;const{notifyOnChangeProps:c}=this.options,d=typeof c=="function"?c():c;if(d==="all"||!d&&!r(this,O).size)return!0;const w=new Set(d??r(this,O));return this.options.throwOnError&&w.add("error"),Object.keys(r(this,p)).some(j=>{const u=j;return r(this,p)[u]!==t[u]&&w.has(u)})};(e==null?void 0:e.listeners)!==!1&&l()&&(y.listeners=!0),f(this,V,ve).call(this,{...y,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,D,te).call(this)}},g=new WeakMap,o=new WeakMap,F=new WeakMap,p=new WeakMap,S=new WeakMap,L=new WeakMap,b=new WeakMap,N=new WeakMap,M=new WeakMap,B=new WeakMap,E=new WeakMap,A=new WeakMap,x=new WeakMap,O=new WeakMap,U=new WeakSet,P=function(e){f(this,q,ie).call(this);let t=r(this,o).fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(Ce)),t},k=new WeakSet,_=function(){if(f(this,X,se).call(this),ue||r(this,p).isStale||!de(this.options.staleTime))return;const t=xe(r(this,p).dataUpdatedAt,this.options.staleTime)+1;n(this,E,setTimeout(()=>{r(this,p).isStale||this.updateResult()},t))},Q=new WeakSet,$=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,o)):this.options.refetchInterval)??!1},T=new WeakSet,ee=function(e){f(this,J,re).call(this),n(this,x,e),!(ue||this.options.enabled===!1||!de(r(this,x))||r(this,x)===0)&&n(this,A,setInterval(()=>{(this.options.refetchIntervalInBackground||Se.isFocused())&&f(this,U,P).call(this)},r(this,x)))},D=new WeakSet,te=function(){f(this,k,_).call(this),f(this,T,ee).call(this,f(this,Q,$).call(this))},X=new WeakSet,se=function(){r(this,E)&&(clearTimeout(r(this,E)),n(this,E,void 0))},J=new WeakSet,re=function(){r(this,A)&&(clearInterval(r(this,A)),n(this,A,void 0))},q=new WeakSet,ie=function(){const e=r(this,g).getQueryCache().build(r(this,g),this.options);if(e===r(this,o))return;const t=r(this,o);n(this,o,e),n(this,F,e.state),this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))},V=new WeakSet,ve=function(e){me.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(r(this,p))}),r(this,g).getQueryCache().notify({query:r(this,o),type:"observerResultsUpdated"})})},ye);function Ue(s,e){return e.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&e.retryOnMount===!1)}function pe(s,e){return Ue(s,e)||s.state.dataUpdatedAt>0&&ae(s,e,e.refetchOnMount)}function ae(s,e,t){if(e.enabled!==!1){const i=typeof t=="function"?t(s):t;return i==="always"||i!==!1&&ne(s,e)}return!1}function ge(s,e,t,i){return t.enabled!==!1&&(s!==e||i.enabled===!1)&&(!t.suspense||s.state.status!=="error")&&ne(s,t)}function ne(s,e){return s.isStaleByTime(e.staleTime)}function je(s,e){return!Y(s.getCurrentResult(),e)}var be=R.createContext(!1),Fe=()=>R.useContext(be);be.Provider;function Le(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var Me=R.createContext(Le()),Be=()=>R.useContext(Me),Ie=(s,e)=>{(s.suspense||s.throwOnError)&&(e.isReset()||(s.retryOnMount=!1))},Pe=s=>{R.useEffect(()=>{s.clearReset()},[s])},Ne=({result:s,errorResetBoundary:e,throwOnError:t,query:i})=>s.isError&&!e.isReset()&&!s.isFetching&&Oe(t,[s.error,i]),ke=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},Qe=(s,e)=>(s==null?void 0:s.suspense)&&e.isPending,Te=(s,e,t)=>e.fetchOptimistic(s).catch(()=>{t.clearReset()});function Ze(s,e,t){const i=Ae(t),y=Fe(),l=Be(),c=i.defaultQueryOptions(s);c._optimisticResults=y?"isRestoring":"optimistic",ke(c),Ie(c,l),Pe(l);const[d]=R.useState(()=>new e(i,c)),w=d.getOptimisticResult(c);if(R.useSyncExternalStore(R.useCallback(j=>{const u=y?()=>{}:d.subscribe(me.batchCalls(j));return d.updateResult(),u},[d,y]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),R.useEffect(()=>{d.setOptions(c,{listeners:!1})},[c,d]),Qe(c,w))throw d.setOptions(c,{listeners:!1}),Te(c,d,l);if(Ne({result:w,errorResetBoundary:l,throwOnError:c.throwOnError,query:d.getCurrentQuery()}))throw w.error;return c.notifyOnChangeProps?w:d.trackResult(w)}const Ge="data:image/webp;base64,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";function We(s,e){const t=s.split(" ");return t.length<=e?s:t.slice(0,e).join(" ")+"..."}const Ke="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20viewBox='0%200%2022%2022'%20aria-hidden='true'%20class='r-4qtqp9%20r-yyyyoo%20r-1yjpyg1%20r-1xvli5t%20r-dnmrzs%20r-bnwqim%20r-1plcrui%20r-lrvibr'%20data-testid='verificationBadge'%20version='1.1'%20id='svg6'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs10'%20/%3e%3cg%20id='g4'%3e%3cpath%20clip-rule='evenodd'%20d='M12.096%201.673c-.593-.635-1.599-.635-2.192%200L8.452%203.227c-.296.316-.714.49-1.147.474L5.18%203.63c-.867-.03-1.579.682-1.55%201.55l.072%202.125c.015.433-.158.851-.474%201.147L1.673%209.904c-.635.593-.635%201.599%200%202.192l1.554%201.452c.316.296.49.714.474%201.147L3.63%2016.82c-.03.867.682%201.579%201.55%201.55l2.125-.072c.433-.015.851.158%201.147.474l1.452%201.555c.593.634%201.599.634%202.192%200l1.452-1.555c.296-.316.714-.49%201.147-.474l2.126.071c.867.03%201.579-.682%201.55-1.55l-.072-2.125c-.015-.433.158-.851.474-1.147l1.555-1.452c.634-.593.634-1.599%200-2.192l-1.555-1.452c-.316-.296-.49-.714-.474-1.147l.071-2.126c.03-.867-.682-1.579-1.55-1.55l-2.125.072c-.433.015-.851-.158-1.147-.474l-1.452-1.554zM6%2011.39l3.74%203.74%206.2-6.77L14.47%207l-4.8%205.23-2.26-2.26L6%2011.39z'%20fill='%23829AAB'%20fill-rule='evenodd'%20id='path2'%20/%3e%3c/g%3e%3c/svg%3e",ze=()=>a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"px-4 py-2",children:a.jsxs("div",{role:"status",className:"w-full animate-pulse ",children:[a.jsxs("div",{className:"flex items-center mb-4",children:[a.jsx("svg",{className:"w-10 h-10 me-3 text-gray-200 dark:text-gray-700","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"})}),a.jsxs("div",{children:[a.jsx("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"}),a.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]})]}),a.jsx("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),a.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),a.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),a.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700"}),a.jsxs("div",{className:"pt-4 px-4 flex items-center",children:[a.jsx("span",{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5 dark:text-gray-700 text-gray-200",children:a.jsx("path",{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"})})}),a.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-8"})]}),a.jsx("span",{className:"sr-only",children:"Loading..."})]})}),a.jsx("hr",{className:"border-gray-200 dark:border-gray-700 my-2 border-t h-px"})]}),He=({message:s})=>a.jsx("section",{className:"p-4",children:a.jsxs("div",{className:"flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",role:"alert",children:[a.jsx("svg",{className:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})}),a.jsx("span",{className:"sr-only",children:"Info"}),a.jsx("div",{children:a.jsx("span",{className:"font-medium",children:s})})]})});export{Ge as D,ze as P,Ve as Q,He as S,Ke as V,We as t,Ze as u};
