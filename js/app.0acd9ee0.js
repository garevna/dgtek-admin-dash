(function(e){function t(t){for(var o,n,a=t[0],c=t[1],u=t[2],d=0,p=[];d<a.length;d++)n=a[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,n=1;n<r.length;n++){var a=r[n];0!==s[a]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},s={app:0},i=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0de545":"715753bd","chunk-370098c9":"2e586eb9","chunk-4316a440":"73a7011d","chunk-1599205e":"2d270536","chunk-308485ee":"4c2d7bc6","chunk-a379b5fa":"df768d22","chunk-54deebec":"a49bfc7a","chunk-23f9b52c":"f867e214","chunk-2d0babe1":"0828e77d"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-370098c9":1,"chunk-4316a440":1,"chunk-1599205e":1,"chunk-308485ee":1,"chunk-a379b5fa":1,"chunk-54deebec":1,"chunk-23f9b52c":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0de545":"31d6cfe0","chunk-370098c9":"d4481170","chunk-4316a440":"6e06c64c","chunk-1599205e":"05519c7b","chunk-308485ee":"ce5339a5","chunk-a379b5fa":"d6a520e8","chunk-54deebec":"f22f7d58","chunk-23f9b52c":"e89708d4","chunk-2d0babe1":"31d6cfe0"}[e]+".css",s=c.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===s))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){u=p[a],d=u.getAttribute("data-href");if(d===o||d===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],l.parentNode.removeChild(l),r(i)},l.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){n[e]=0})));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=s[e]=[t,r]}));t.push(o[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(e);var p=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",p.name="ChunkLoadError",p.type=o,p.request=n,r[1](p)}s[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dgtek-admin-dash/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0e1f":function(e,t,r){e.exports=r.p+"img/dgtek-logo.7e6edc83.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a"),r("d3b7"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("a026"),n=r("98d9"),s=function(e,t){window[Symbol.for("vue.prototype")].__worker.addEventListener("message",(function(r){var o=r.data,n=o.status,s=o.route,i=o.action;"init"!==i&&s===e&&i===t&&(r.stopImmediatePropagation(),console.log(n,s,i," EVENT:",d[s][i]),window[Symbol.for("vue.prototype")].$dispatchProgressEvent(!1),window[Symbol.for("vue.instance")].$root.$emit(d[s][i],r.data))}))},i=(r("4160"),r("b64b"),r("159b"),r("ade3")),a=r("5530"),c=r("15fd"),u=r("f223"),d={admin:{redirect:"auth-success",auth:"auth-error",reset:"reset-password",code:"verification-code",change:"password-change"},rsp:{refresh:"client-data-refreshed",get:"client-data-received",put:"client-data-updated"},customers:{refresh:"customers-list-refreshed",list:"customers-list-received",get:"customer-data-received",post:"customer-created",put:"customer-updated"},services:{refresh:"services-list-refreshed",list:"services-list-received",get:"service-data-received",put:"service-data-updated",post:"new-service-created"},tickets:{refresh:"tickets-list-refreshed",categories:"categories-received",list:"tickets-list-received",get:"ticket-data-received",post:"ticket-created",put:"ticket-updated"},buildings:{list:{LIT:"lit-buildings-list",Footprint:"footprint-buildings-list"},put:"buildings-data-saved",post:"new-building-created",getById:"building-data-received",getByAddress:"building-data-received"}};console.log("Actions:\n",u),console.log("Events:\n",d);var p=function(){window[Symbol.for("vue.prototype")].$dispatchProgressEvent=function(e){window[Symbol.for("vue.instance")].$root.$emit("progress-event",e)},window[Symbol.for("vue.prototype")].$sendMessageToWorker=function(e){var t=e.route,r=e.action,o=Object(c["a"])(e,["route","action"]);console.log("Send message to worker:\n",t,r,o),window[Symbol.for("vue.prototype")].$dispatchProgressEvent(!0),window[Symbol.for("vue.prototype")].__worker.postMessage(Object(a["a"])({route:t,action:r},o))},window[Symbol.for("admin.worker")].addEventListener("message",(function(e){e.data.error&&window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:e.data.errorType||e.data.route,errorMessage:e.data.errorMessage||"Unknown error"}),e.data.message&&window[Symbol.for("vue.instance")].$root.$emit("open-message-popup",{messageType:e.data.messageType||e.data.route,messageText:e.data.messageText||"Success"})})),Object.keys(u).forEach((function(e){return Object.assign(window[Symbol.for("vue.prototype")],Object(i["a"])({},"__".concat(e),u[e]))})),Object.keys(d).forEach((function(e){return Object.keys(d[e]).forEach((function(t){return s(e,t)}))}))};function l(){var e="dgtek-admin-dash";window[Symbol.for("map.worker")]=new Worker("".concat(e,"map.worker.js")),window[Symbol.for("map.worker")].onerror=function(e){console.log("Map worker Error\n",e)}}function f(){var e="dgtek-admin-dash";window[Symbol.for("admin.worker")]=new Worker("".concat(e,"admin.worker.js")),window[Symbol.for("admin.worker")].onerror=function(e){console.warn("Admin worker Error\n",e)},window[Symbol.for("vue.prototype")].__worker=window[Symbol.for("admin.worker")],window[Symbol.for("admin.worker")].addEventListener("message",(function(e){300===e.data.status&&(e.stopImmediatePropagation(),console.log("WORKER DEBUGGING MESSAGE:\n",e.data))}))}var m="Error reading the data from remote server",g={rsp:{refresh:{errorType:"Company Details",errorMessage:m},get:{errorType:"Company Details",errorMessage:"Reading the data failed"},put:{errorType:"Company Details",errorMessage:"Data update failed"},password:{errorType:"Company Details",errorMessage:"Password change failed"}},customers:{refresh:{errorType:"Customers",errorMessage:m},list:{errorType:"Customers",errorMessage:"Reading the list of customers failed"},get:{errorType:"Customer",errorMessage:"Reading the customer data failed"},put:{errorType:"Customer",errorMessage:"Customer data update failed"}},tickets:{refresh:{errorType:"Tickets",errorMessage:m},list:{errorType:"Tickets",errorMessage:"Reading the tickets list failed"},get:{errorType:"Tickets",errorMessage:"Reading the ticket data failed"}},services:{refresh:{errorType:"Services",errorMessage:m},list:{errorType:"Services",errorMessage:"Reading the services list failed"}}},v=function(){var e="And then there were three";return function(){return e}}(),y=function(){var e="2S5JN0sN4L03UjNT3ofE95UDoxFTZMPX4VvyxOv4K2HiElZUlPnkdnf50Y2j6ZG872w6hQeVjDXb6Vj9i0Iv7nvE4A6h3I61FHD3";return function(){return e}}(),w=function(){var e="JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0";return function(){return e}}(),b=function(){var e="https://dgtek.herokuapp.com";return function(){return e}}(),h=function(){var e="https://dgtek-staging.herokuapp.com";return function(){return e}}(),k={apiSecret:v,apiKey:y,apiHost:h,geoscapeKey:w,buildingsHost:b},S={install:function(e){e.appConfig=k,e.apiSecret=v,e.apiKey=y,e.apiHost=h,e.geoscapeKey=w,e.buildingsHost=b,e.prototype.$appConfig=k,e.prototype.$apiSecret=v,e.prototype.$apiKey=y,e.prototype.$apiHost=h,e.prototype.$geoscapeKey=w,e.prototype.$buildingsHost=b}};o["a"].use(S),window[Symbol.for("vue.prototype")]=o["a"].prototype,l(),f();var T=o["a"],$=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{staticClass:"transparent"},[o("v-app-bar",{staticClass:"homefone",attrs:{app:"",flat:"",height:"80"}},[o("v-card",{staticClass:"transparent text-left mt-4 ml-0",attrs:{flat:"",height:"50"}},[o("v-img",{staticClass:"mr-8",attrs:{src:r("0e1f"),width:"70"}})],1),o("h3",{staticClass:"main-header mt-4"},[e._v("DGtek Admin provisioning portal")]),o("v-spacer"),"home"!==e.$route.name?o("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.push({name:"home"})}}},[o("v-icon",{attrs:{large:"",color:"primary"}},[e._v("mdi-location-exit")])],1):e._e()],1),o("v-main",{staticClass:"main-content mt-8",staticStyle:{"margin-bottom":"320px"}},[o("v-progress-linear",{staticStyle:{"z-index":"5"},attrs:{active:e.progress,indeterminate:e.progress,color:"primary"}}),o("transition",{attrs:{name:"page-fade-transition",mode:"out-in"}},[o("router-view")],1)],1),o("v-snackbar",{attrs:{timeout:e.timeout,color:e.color,top:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[o("v-btn",e._b({staticClass:"close-icon-snackbar",attrs:{color:"#fff",icon:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[o("v-icon",{attrs:{large:""}},[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")]),o("error-message"),o("simple-message"),o("v-row",{staticStyle:{position:"fixed",bottom:"0","z-index":"100",width:"100%",height:"32px",background:"#aaa"},attrs:{justify:"center"}},[o("p",{staticClass:"text-center",staticStyle:{color:"#efefef"}},[o("small",[o("sub",[e._v("2021 © Dgtek Pty. Ltd ABN 61 600 896 115")])])])]),o("error-message"),o("simple-message")],1)},E=[],M=(r("b0c0"),r("dc44"),r("69d7"),r("ffaa")),x=r("9073"),_={name:"App",components:{},data:function(){return{ready:!1,signIn:!1,progress:!1,snackbar:!1,message:"Welcome to DGtek Admin provisioning portal",timeout:8e3}},computed:{color:function(){return this.authError||this.registeredError||this.error?"#900":"#09b"},text:function(){return this.error||this.registeredError?"Error":"Success"},backgroundImage:function(){return"home"===this.$route.name?x:M}},methods:{},mounted:function(){this.$root.$on("app-is-ready",function(e){this.ready=!0}.bind(this)),this.$root.$on("progress-event",function(e){console.log("PROGRESS: ",e.progress),this.progress=e.progress}.bind(this))},errorCaptured:function(e,t,r){return console.warn("ERROR:\n",e,r,t.$options._componentTag),!1}},A=_,C=(r("034f"),r("2877")),O=r("6544"),P=r.n(O),j=r("7496"),D=r("40dc"),V=r("8336"),I=r("b0af"),F=r("132d"),B=r("adda"),L=r("f6c4"),R=r("8e36"),W=r("0fd9"),N=r("2db4"),H=r("2fa4"),q=Object(C["a"])(A,$,E,!1,null,null,null),U=q.exports;P()(q,{VApp:j["a"],VAppBar:D["a"],VBtn:V["a"],VCard:I["a"],VIcon:F["a"],VImg:B["a"],VMain:L["a"],VProgressLinear:R["a"],VRow:W["a"],VSnackbar:N["a"],VSpacer:H["a"]});r("7db0");var z=r("8c4f"),K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"home-page-content mt-12",attrs:{fluid:""}},[r("v-row",{attrs:{align:"start",justify:"center","justify-md":"end"}},[r("SignIn",{attrs:{reset:e.resetPassword,success:e.success},on:{"update:reset":function(t){e.resetPassword=t},"update:success":function(t){e.success=t}}})],1),e.resetPassword?r("ResetPassword"):e._e()],1)},G=[],Z={name:"Home",components:{SignIn:function(){return Promise.all([r.e("chunk-370098c9"),r.e("chunk-54deebec")]).then(r.bind(null,"a172"))}},data:function(){return{resetPassword:!1,success:!1}},watch:{success:function(e){e&&this.$router.push({name:"dash"})}}},J=Z,Q=(r("cccb"),r("a523")),X=Object(C["a"])(J,K,G,!1,null,null,null),Y=X.exports;P()(X,{VContainer:Q["a"],VRow:W["a"]});var ee=r("f61f");o["a"].use(z["a"]);var te=[{path:"/",name:"home",component:Y},{path:"/dash",name:"dash",component:function(){return Promise.all([r.e("chunk-4316a440"),r.e("chunk-23f9b52c")]).then(r.bind(null,"7277"))},beforeEnter:function(e,t,r){console.log("ROLE HANDLER: ",Object(n["f"])()),Object(n["f"])()||r(!1),r()},children:[{path:"rsp-list",name:"rsp-list",component:function(){return r.e("chunk-2d0de545").then(r.bind(null,"84d7"))},beforeEnter:function(e,t,r){console.log(e);var o=ee["a"].find((function(e){return"rsp-list"===e.route}));console.log(o),o&&o.access.change.find((function(e){return e===Object(n["f"])()}))?r():r(!1)}},{path:"services-list",name:"services-list",component:function(){return Promise.all([r.e("chunk-370098c9"),r.e("chunk-4316a440"),r.e("chunk-1599205e"),r.e("chunk-308485ee")]).then(r.bind(null,"eb5c"))},beforeEnter:function(e,t,r){console.log(e);var o=ee["a"].find((function(e){return"services-list"===e.route}));console.log(o),o&&o.access.change.find((function(e){return e===Object(n["f"])()}))?r():r(!1)}},{path:"create-new-service",name:"create-new-service",component:function(){return Promise.all([r.e("chunk-370098c9"),r.e("chunk-4316a440"),r.e("chunk-1599205e"),r.e("chunk-a379b5fa")]).then(r.bind(null,"10dc"))}},{path:"service-details/:serviceId",name:"service-details",component:function(){return Promise.all([r.e("chunk-370098c9"),r.e("chunk-4316a440"),r.e("chunk-1599205e"),r.e("chunk-a379b5fa")]).then(r.bind(null,"10dc"))},props:!0}]}],re=new z["a"]({mode:"history",base:"/dgtek-admin-dash/",routes:te}),oe=re,ne=r("f309");o["a"].use(ne["a"]);var se=new ne["a"]({icons:{iconfont:"mdi",values:{add:"mdi-note-plus",buildings:"mdi-home-city-outline",chat:"mdi-account-voice",delete:"mdi-trash-can",dropdown:"mdi-menu-down",edit:"mdi-pencil",error:"mdi-alert",externalLink:"mdi-open-in-new",list:"mdi-view-list",menu:"mdi-dots-vertical",message:"mdi-android-messages",orders:"mdi-printer",pdf:"mdi-file-pdf",pageNext:"mdi-page-next-outline",pagePrev:"mdi-page-previous-outline",send:"mdi-send",services:"mdi-apps-box"}},theme:{themes:{light:{primary:"#881F1A",secondary:"#E82F37",buttons:"#881F1A",buttonActive:"#882F1A",homefone:"#FBFBFB",accent:"#f3f3f3",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00",info:"#fbfbfb"},dark:{primary:"#881F1A",secondary:"#E82F37",buttons:"#881F1A",buttonActive:"#882F1A",homefone:"#FBFBFB",accent:"#f3f3f3",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00",info:"#fbfbfb"}}}}),ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{staticClass:"pa-4",attrs:{"max-width":"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",dense:"",color:"buttons"}},[r("v-icon",{staticClass:"mr-4"},[e._v(" $error ")]),r("v-toolbar-title",[e._v(" Error ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{attrs:{large:""}},[e._v(" $close ")])],1)],1),r("v-card-text",{staticClass:"text-center mt-10"},[r("h4",[e._v(e._s(e.errorType||"Unknown error type"))])]),r("v-card-text",{staticClass:"text-center"},[r("p",[e._v(e._s(e.errorMessage||"Unknown Error"))])])],1)],1)},ae=[],ce={name:"ErrorMessage",data:function(){return{error:!1,errorType:"",errorMessage:""}},computed:{dialog:{get:function(){return this.error},set:function(e){!e&&this.resetError()}}},methods:{resetError:function(){this.error=!1,this.errorType="",this.errorMessage=""}},mounted:function(){this.$root.$on("open-error-popup",function(e){var t=Object(n["b"])(),r=t.errorType,o=t.errorMessage;if(r===e.errorType&&o===e.errorMessage)return this.resetError();Object(n["b"])({errorType:e.errorType,errorMessage:e.errorMessage}),this.error=!0,this.errorType=e.errorType,this.errorMessage=e.errorMessage}.bind(this))}},ue=ce,de=r("99d9"),pe=r("169a"),le=r("71d9"),fe=r("2a7f"),me=Object(C["a"])(ue,ie,ae,!1,null,null,null),ge=me.exports;P()(me,{VBtn:V["a"],VCard:I["a"],VCardText:de["a"],VDialog:pe["a"],VIcon:F["a"],VSpacer:H["a"],VToolbar:le["a"],VToolbarTitle:fe["a"]});var ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{staticClass:"pa-4",attrs:{"max-width":"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",dense:"",color:"#999"}},[r("v-icon",{staticClass:"mr-4"},[e._v(" $message ")]),r("v-toolbar-title",[e._v(" Message ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{attrs:{large:""}},[e._v(" $close ")])],1)],1),r("v-card-text",{staticClass:"text-center mt-10"},[r("h4",[e._v(e._s(e.messageType||""))])]),r("v-card-text",{staticClass:"text-center"},[r("p",[e._v(e._s(e.messageText))])])],1)],1)},ye=[],we={name:"MessagePopup",data:function(){return{message:!1,messageType:"",messageText:""}},computed:{dialog:{get:function(){return this.message},set:function(e){!e&&this.resetMessage()}}},methods:{resetMessage:function(){this.message=!1,this.messageType="",this.messageText=""}},mounted:function(){this.$root.$on("open-message-popup",function(e){var t=Object(n["d"])(),r=t.messageType,o=t.messageText;if(r===e.messageType&&o===e.messageText)return this.resetMessage();Object(n["d"])({messageType:e.messageType,messageText:e.messageText}),this.message=!0,this.messageType=e.messageType,this.messageText=e.messageText}.bind(this))}},be=we,he=Object(C["a"])(be,ve,ye,!1,null,null,null),ke=he.exports;function Se(e){var t=e.data,r=t.status,o=t.action;if("init"!==o)return console.log("initCallback not removed");e.stopImmediatePropagation(),200===r?window[Symbol.for("admin.worker")].removeEventListener("message",Se):Te()}function Te(){window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:"Init",errorMessage:"Worker initialization failed"})}P()(he,{VBtn:V["a"],VCard:I["a"],VCardText:de["a"],VDialog:pe["a"],VIcon:F["a"],VSpacer:H["a"],VToolbar:le["a"],VToolbarTitle:fe["a"]}),window[Symbol.for("vue.prototype")].$refreshed={rsp:!1,customers:!1,categories:!1,tickets:!1,services:!1};r("d81d");var $e=r("3835"),Ee=Object.keys(g).map((function(e){return g[e].refresh})),Me=Object($e["a"])(Ee,4);Me[0],Me[1],Me[2],Me[3];var xe=function(){window[Symbol.for("map.worker")].addEventListener("message",(function(e){var t=e.data,r=t.status,o=t.action,n=t.result;if("getById"===o||"getByAddress"===o){if(e.stopImmediatePropagation(),window[Symbol.for("vue.instance")].$root.$emit("progress-event",!1),200===r)return window[Symbol.for("vue.instance")].$root.$emit("building-data-received",Object(a["a"])({},n));window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{messageType:"Reading the building details",messageText:"Operaion faled. Data was not received"})}}))},_e=function(){window[Symbol.for("map.worker")].addEventListener("message",(function(e){var t=e.data,r=t.status,o=t.action;if("put"===o||"post"===o){if(e.stopImmediatePropagation(),window[Symbol.for("vue.instance")].$root.$emit("progress-event",!1),200===r){var n="post"===o?"new-building-created":"buildings-data-saved";return window[Symbol.for("vue.instance")].$root.$emit(n,e.data),void window[Symbol.for("vue.instance")].$root.$emit("open-message-popup",{messageType:"Building details",messageText:"Data saved"})}window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:"Building details",errorMessage:"Operaion faled. Data was not saved"})}}))},Ae=function(){window[Symbol.for("map.worker")].addEventListener("message",(function(e){var t=e.data,r=t.status,o=t.action,n=t.store,s=t.result;if("list"===o)if(window[Symbol.for("vue.instance")].$root.$emit("progress-event",!1),200===r){var i="".concat(n.toLowerCase(),"-buildings-list");window[Symbol.for("vue.instance")].$root.$emit(i,s)}else window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:"".concat(n," buildings"),errorMessage:"Error reading the data"})}))},Ce=function(){window[Symbol.for("map.worker")].addEventListener("message",(function(e){e.data.error&&(e.stopImmediatePropagation(),window[Symbol.for("vue.instance")].$root.$emit("progress-event",!1),window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:e.data.errorType||"Buildings",errorMessage:e.data.errorMessage||"Unknown error"}))}))},Oe=function(){window[Symbol.for("map.worker")].addEventListener("message",(function(e){e.data.message&&window[Symbol.for("vue.instance")].$root.$emit("open-message-popup",{messageType:e.data.messageType,messageText:e.data.messageText})}))},Pe=function(){window[Symbol.for("map.worker")].addEventListener("message",(function(e){if(300===e.data.status)return e.stopImmediatePropagation(),console.log("DEBUGGING MESSAGE FROM WORKER:\n",e.data)})),xe(),_e(),Ae(),Ce(),Oe()};T.config.productionTip=!1,T.component("error-message",ge),T.component("simple-message",ke);var je=new T({router:oe,vuetify:se,render:function(e){return e(U)}}).$mount("#app");window[Symbol.for("vue.instance")]=je,p(),console.log("VUE PROTOTYPE:\n",T.prototype),console.log("INSTANCE:\n",je),je.__worker.addEventListener("message",Se),Object(u["init"])(),Pe()},"5ced":function(e,t,r){},"85ec":function(e,t,r){},9073:function(e,t,r){e.exports=r.p+"img/Webb-Bridge-Melbourne-Drawing-effect.36ac6548.svg"},"98d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return c}));var o=function(){var e="";return function(t){if(!t)return e;e=t}}(),n=function(){var e="";return function(t){if(!t)return e;e=t}}(),s=function(){var e="";return function(t){if(!t)return e;e=t}}(),i=(function(){var e=""}(),function(){var e="";return function(t){if(!t)return e;e=t}}()),a=function(){var e="",t="";return function(r){if(!r)return{messageType:e,messageText:t};e=r.messageType,t=r.messageText}}(),c=function(){var e="",t="";return function(r){if(!r)return{errorType:e,errorMessage:t};e=r.errorType,t=r.errorMessage}}()},cccb:function(e,t,r){"use strict";r("5ced")},dc44:function(e,t,r){},f223:function(e,t,r){"use strict";r.r(t),r.d(t,"init",(function(){return o})),r.d(t,"loginHandler",(function(){return n["c"]})),r.d(t,"passwordHandler",(function(){return n["e"]})),r.d(t,"codeHandler",(function(){return n["a"]})),r.d(t,"auth",(function(){return s})),r.d(t,"changePassword",(function(){return i})),r.d(t,"resetPassword",(function(){return a})),r.d(t,"sendPasswordResetCode",(function(){return c})),r.d(t,"refreshClientData",(function(){return p})),r.d(t,"refreshCustomers",(function(){return S})),r.d(t,"refreshTickets",(function(){return x})),r.d(t,"getClientData",(function(){return u})),r.d(t,"putClientData",(function(){return d})),r.d(t,"getCustomers",(function(){return b})),r.d(t,"getCustomerData",(function(){return w})),r.d(t,"putCustomer",(function(){return k})),r.d(t,"postCustomer",(function(){return h})),r.d(t,"deleteCustomer",(function(){return y})),r.d(t,"refreshServices",(function(){return f})),r.d(t,"getListOfServices",(function(){return l})),r.d(t,"getServiceDetails",(function(){return m})),r.d(t,"createNewService",(function(){return g})),r.d(t,"updateServiceDetails",(function(){return v})),r.d(t,"getTickets",(function(){return E})),r.d(t,"getCategories",(function(){return T})),r.d(t,"getTicketById",(function(){return $})),r.d(t,"postNewTicket",(function(){return M})),r.d(t,"saveTicketData",(function(){return _})),r.d(t,"getBuildingByAddress",(function(){return A})),r.d(t,"getBuildingById",(function(){return C})),r.d(t,"getFootprintBuildings",(function(){return O})),r.d(t,"getLitBuildings",(function(){return P})),r.d(t,"postBuildingDetails",(function(){return j})),r.d(t,"putBuildingDetails",(function(){return D}));r("a4d3"),r("e01a"),r("d3b7");var o=function(){var e=window[Symbol.for("vue.prototype")],t=e.$apiSecret,r=e.$apiKey,o=e.$apiHost;window[Symbol.for("admin.worker")].postMessage({route:"crypto",action:"init",data:{host:o(),key:r(),secret:t()}})},n=r("98d9"),s=function(){Object(n["c"])()&&Object(n["e"])()?window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"admin",action:"auth",login:Object(n["c"])(),password:Object(n["e"])()}):window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:"Authorization",ErrorMessage:"Login and password required"})},i=function(e){var t=e.login,r=e.userPhone,o=e.password;t&&r&&o?window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"admin",action:"password",data:{login:t,userPhone:r,newPass:o}}):window[Symbol.for("vue.instance")].$root.$emit("open-error-popup",{errorType:"Update credentials",ErrorMessage:"Invalid credentials' values"})},a=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({action:"reset",login:Object(n["c"])()})};console.log(Object(n["a"])());var c=function(){return new Promise((function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({action:"code",code:Object(n["a"])()}),window[Symbol.for("vue.instance")].$root.$on("")}))},u=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"rsp",action:"get"})},d=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"rsp",action:"put",data:e})},p=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"rsp",action:"refresh"})},l=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"services",action:"list"})},f=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"services",action:"refresh"})},m=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"services",action:"get",key:e})},g=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"services",action:"post",data:e})},v=function(e,t){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"services",action:"put",key:e,data:t})},y=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"customers",action:"delete",key:e})},w=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"customers",action:"get",key:e})},b=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"customers",action:"list"})},h=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"customers",action:"post",data:e})},k=function(e,t){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"customers",action:"put",key:e,data:t})},S=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"customers",action:"refresh"})},T=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"tickets",action:"categories"})},$=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"tickets",action:"get",key:e})},E=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"tickets",action:"list"})},M=function(e){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"tickets",action:"post",data:e})},x=function(){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"tickets",action:"refresh"})},_=function(e,t){window[Symbol.for("vue.prototype")].$sendMessageToWorker({route:"tickets",action:"put",key:e,data:t})},A=function(e){window[Symbol.for("vue.instance")].$root.$emit("progress-event",!0),window[Symbol.for("map.worker")].postMessage({action:"getByAddress",key:e})},C=function(e){window[Symbol.for("vue.instance")].$root.$emit("progress-event",!0),window[Symbol.for("map.worker")].postMessage({action:"getById",key:e})},O=function(){window[Symbol.for("vue.instance")].$root.$emit("progress-event",!0),window[Symbol.for("map.worker")].postMessage({action:"list",key:"footprint"})},P=function(){window[Symbol.for("vue.instance")].$root.$emit("progress-event",!0),window[Symbol.for("map.worker")].postMessage({action:"list",key:"lit"})},j=function(e){window[Symbol.for("vue.instance")].$root.$emit("progress-event",!0),window[Symbol.for("map.worker")].postMessage({action:"post",data:e})},D=function(e,t){window[Symbol.for("vue.instance")].$root.$emit("progress-event",!0),window[Symbol.for("map.worker")].postMessage({action:"put",key:e,data:t})}},f61f:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"c",(function(){return a}));var o=[{title:"RSP list",component:"RspList",route:"rsp-list",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"RSP details",component:"RspDetails",route:"rsp-details",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Services list",component:"servicesList",route:"services-list",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Service details",component:"serviceDetails",route:"service-details",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Add service",component:"AddService",route:"new-service",access:{change:["Account_manager","SuperAdmin"],read:[]}},{title:"Customers",component:"Customers",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Footprint",component:"Footprint",access:{change:["SuperAdmin","Map_editor"],read:["View_only"]},children:[{title:"Edit polygins",component:"EditPolygons",access:{change:["Map_editor","SuperAdmin"],read:["View_only"]}},{title:"Edit building list",component:"Buildings",access:{change:["Map_editor","SuperAdmin"],read:["View_only"]}}]},{title:"Scheduling",component:"Scheduling",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Tickets",component:"Tickets",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Documents",component:"Documents",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Settings",component:"Settings",access:{change:["SuperAdmin"],read:["View_only"]}}],n={serviceName:{title:"Service name",type:"simple-text",value:""},serviceCode:{title:"Service code",type:"simple-text",value:""},contractTerm:{title:"Term (months)",type:"number",value:0},connectionFee:{title:"Connection fee $NRC",type:"number",value:0},subscriptionFee:{title:"Monthly fee $MRC",type:"number",value:0},serviceType:{title:"Type residential/commercial",type:"select",available:["residential","commercial"],value:"residential"},productType:{title:"Product type",type:"simple-text",value:""},freeTrial:{title:"Trial period",type:"simple-text",value:""},equipmentCost:{title:"Equipment cost",type:"number",value:0},equipmentType:{title:"Equipment type",type:"simple-text",value:""},equipmentRequired:{title:"Equipment required",type:"checkbox",value:!1},dataLimit:{title:"Data",type:"simple-text",value:""},serviceDescription:{title:"Service description",type:"simple-text",value:""},downstreamSpeed:{title:"Downstream speed",type:"number",value:50},upstreamSpeed:{title:"Upstream speed (Mbps)",type:"number",value:50},earlyTerminatioFee:{title:"Early termination fee ($)",type:"number",value:0},gstIncEx:{title:"gstIncEx",type:"checkbox",value:!1},serviceSLA:{title:"Service SLA",type:"simple-text",value:""},promo:{title:"Promo",type:"simple-text",value:""},partners:{title:"Partners",type:"array",value:[]}},s=(Date.now(),Date.now(),r("4d63"),r("ac1f"),r("25f0"),{states:["VIC","NSW","ACT","QLD","SA","WA","TAS","NT"],number:/^[0-9]*$/,email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,mobile:/^(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,phone:/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/,postcode:/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/,url:new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))"),password:new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")}),i=(r("a15b"),r("d81d"),r("13d5"),r("1276"),function(e){if(!e)return!1;var t=[10,1,3,5,7,9,11,13,15,17,19],r=e.split(" ").join("").split("").map((function(e,t){return e-(0===t?1:0)})).reduce((function(e,r,o){return e+r*t[o]}),0);return r%89===0}),a=(r("c975"),{required:function(e){return!!e||"Required."},"simple-text":function(e){return!0},number:function(e){return s.number.test(e)||"Invalid number."},mobile:function(e){return s.mobile.test(e)||"Invalid mobile phone number."},phone:function(e){return s.phone.test(e)||"Invalid phone number."},email:function(e){return s.email.test(e)||"Invalid e-mail."},state:function(e){return-1!==s.state.indexOf(e)||"Invalid state."},postcode:function(e){return s.postcode.test(e)||"Invalid state."},abn:function(e){return i(e)||"Invalid ABN."},url:function(e){return s.url.test(e)||"Invalid URL."},login:function(e){return e.length>5||"Invalid login"},password:function(e){return s.password.test(e)||"Password is not strong enough."}})},ffaa:function(e,t,r){e.exports=r.p+"img/melbourne-2-1.36f066f0.svg"}});
//# sourceMappingURL=app.0acd9ee0.js.map