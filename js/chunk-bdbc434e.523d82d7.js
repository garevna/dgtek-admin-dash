(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdbc434e"],{"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"4d63":function(e,t,n){var r=n("83ab"),i=n("da84"),o=n("94ca"),s=n("7156"),a=n("9bf2").f,c=n("241c").f,l=n("44e7"),u=n("ad6d"),p=n("9f7f"),d=n("6eeb"),h=n("d039"),m=n("69f3").set,f=n("2626"),v=n("b622"),g=v("match"),y=i.RegExp,b=y.prototype,w=/a/g,S=/a/g,x=new y(w)!==w,_=p.UNSUPPORTED_Y,A=r&&o("RegExp",!x||_||h((function(){return S[g]=!1,y(w)!=w||y(S)==S||"/a/i"!=y(w,"i")})));if(A){var E=function(e,t){var n,r=this instanceof E,i=l(e),o=void 0===t;if(!r&&i&&e.constructor===E&&o)return e;x?i&&!o&&(e=e.source):e instanceof E&&(o&&(t=u.call(e)),e=e.source),_&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var a=s(x?new y(e,t):y(e,t),r?this:b,E);return _&&n&&m(a,{sticky:n}),a},k=function(e){e in E||a(E,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},C=c(y),P=0;while(C.length>P)k(C[P++]);b.constructor=E,E.prototype=b,d(i,"RegExp",E)}f("RegExp")},"4d92":function(e,t,n){},"7e85":function(e,t,n){"use strict";n("4de4"),n("b0c0"),n("a9e3");var r=n("5530"),i=(n("8836"),n("3206")),o=n("a452"),s=n("7560"),a=n("58df"),c=n("d9bd"),l=Object(a["a"])(Object(i["b"])("stepper"),o["a"],s["a"]);t["a"]=l.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var e={isBooted:!1,steps:[],content:[],isReverse:!1};return e.internalLazyValue=null!=this.value?this.value:(e[0]||{}).step||1,e},computed:{classes:function(){return Object(r["a"])({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(c["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(t){return t!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(t){return t!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.internalValue=e}))},updateView:function(){for(var e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(var t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render:function(e){return e("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}})},8836:function(e,t,n){},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(V){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),s=new I(r||[]);return o._invoke=E(e,n,s),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(V){return{type:"throw",arg:V}}}e.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",m="completed",f={};function v(){}function g(){}function y(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,S=w&&w(w(L([])));S&&S!==n&&r.call(S,o)&&(b=S);var x=y.prototype=v.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function n(i,o,s,a){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"===typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(p).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(e,t,n){var r=p;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return O()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?m:d,c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,f;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(A.prototype),A.prototype[s]=function(){return this},e.AsyncIterator=A,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new A(l(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(x),c(x,a,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},9971:function(e,t,n){"use strict";n("4d92")},"9c54":function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n("80d2"),i=n("7e85"),o=(n("45fc"),n("a9e3"),n("d3b7"),n("25f0"),n("9d26")),s=n("a9ad"),a=n("3206"),c=n("5607"),l=n("58df"),u=Object(l["a"])(s["a"],Object(a["a"])("stepper","v-stepper-step","v-stepper")),p=u.extend().extend({name:"v-stepper-step",directives:{ripple:c["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon:function(e){return this.$createElement(o["a"],e)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){return e("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}}),d=n("e516"),h=Object(r["h"])("v-stepper__header"),m=Object(r["h"])("v-stepper__items");i["a"],d["a"]},a172:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"mt-12",attrs:{justify:"center","justify-md":"end"}},[n("v-card",{staticClass:"text-center mt-12 mr-md-12",attrs:{elevation:"12","max-width":"600","min-width":"360",height:"200"}},[n("h5",{staticClass:"my-4 text-right mr-8"},[n("small",[e._v(" Sign In ")])]),n("v-stepper",{staticStyle:{"box-shadow":"none"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[n("v-stepper-items",[n("v-stepper-content",{attrs:{step:1}},[n("v-text-field",{attrs:{outlined:"",color:"success",label:"email",rules:[e.rules.required,e.rules.email]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-spacer"),e.emailError?e._e():n("v-btn",{attrs:{dark:"",color:"buttons"},on:{click:function(t){e.step=2}}},[e._v(" Continue ")])],1),n("v-stepper-content",{attrs:{step:2}},[n("v-text-field",{attrs:{outlined:"","append-icon":e.showPass?"mdi-eye":"mdi-eye-off",type:e.showPass?"text":"password",color:"success",label:"password",rules:[e.rules.required]},on:{input:function(t){return e.updatePassword(t)},"click:append":function(t){e.showPass=!e.showPass}}}),n("v-btn",{staticClass:"reset-password",attrs:{text:"",color:"buttons"},on:{click:function(t){e.reset=!0}}},[e._v(" Reset your password ")]),n("v-spacer"),n("v-btn",{attrs:{dark:"",color:"buttons"},on:{click:e.signIn}},[e._v(" Sign In ")])],1)],1)],1),e.reset?n("ResetPassword",{attrs:{opened:e.reset},on:{"update:opened":function(t){e.reset=t}}}):e._e()],1)],1)},i=[],o=(n("d3b7"),n("96cf"),n("1da1")),s=n("98d9"),a=n("f61f"),c={name:"SignIn",components:{ResetPassword:function(){return n.e("chunk-d864b506").then(n.bind(null,"3905"))}},props:["reset","success"],data:function(){return{step:1,email:"",showPass:!1,emailError:!1,valid:!1,rules:{required:function(e){return!!e||"input is required"},email:function(e){return a["g"].email.test(e)||"Invalid email."}}}},watch:{email:function(e){Object(s["d"])(e)}},methods:{updatePassword:function(e){Object(s["f"])(e)},showResult:function(e){console.log(e),Object(s["g"])(e.data.role),this.$router.push({name:"dash"})},signIn:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$root.$on("auth-success",e.showResult),e.__auth(e.email,Object(s["f"])()),e.step=1;case 3:case"end":return t.stop()}}),t)})))()}}},l=c,u=(n("9971"),n("2877")),p=n("6544"),d=n.n(p),h=n("8336"),m=n("b0af"),f=n("0fd9"),v=n("2fa4"),g=n("7e85"),y=n("e516"),b=n("9c54"),w=n("8654"),S=Object(u["a"])(l,r,i,!1,null,"136fddf7",null);t["default"]=S.exports;d()(S,{VBtn:h["a"],VCard:m["a"],VRow:f["a"],VSpacer:v["a"],VStepper:g["a"],VStepperContent:y["a"],VStepperItems:b["b"],VTextField:w["a"]})},e516:function(e,t,n){"use strict";n("a9e3"),n("d3b7"),n("25f0");var r=n("0789"),i=n("3206"),o=n("80d2"),s=n("58df"),a=Object(s["a"])(Object(i["a"])("stepper","v-stepper-content","v-stepper"));t["a"]=a.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var e=this.$vuetify.rtl?!this.isReverse:this.isReverse;return e?r["f"]:r["g"]},styles:function(){return this.isVertical?{height:Object(o["g"])(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},n={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var r=e("div",n,[this.$slots.default]),i=e("div",t,[r]);return e(this.computedTransition,{on:this.$listeners},[i])}})},f61f:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return d}));var r=[{title:"RSP",icon:"mdi-",children:[{title:"RSP list",route:"rsp-list",icon:"mdi-account-multiple",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"New RSP",route:"create-rsp",icon:"mdi-account-plus",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}}]},{title:"Services",children:[{title:"Service list",route:"services-list",icon:"mdi-ballot-outline",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Add new service",route:"create-new-service",icon:"mdi-text-box-plus-outline",access:{change:["Account_manager","SuperAdmin"],read:[]}}]},{title:"Customers",route:"customers",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Footprint",icon:"mdi-map",access:{change:["SuperAdmin","Map_editor"],read:["View_only"]},children:[{title:"Search address",route:"footprint",icon:"mdi-map-search",access:{change:["SuperAdmin","Map_editor"],read:["View_only"]}},{title:"Edit polygins",route:"polygons",icon:"mdi-map-marker-path",access:{change:["Map_editor","SuperAdmin"],read:["View_only"]}},{title:"Edit building list",route:"buildings",icon:"mdi-home-map-marker",access:{change:["Map_editor","SuperAdmin"],read:["View_only"]}}]},{title:"Scheduling",component:"Scheduling",icon:"mdi-calendar-month",children:[{title:"Installation Schedule",icon:"mdi-table-network",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Calendar Settings",icon:"mdi-calendar-edit",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}}]},{title:"Tickets",component:"Tickets",icon:"mdi-inbox-multiple",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Documents",component:"Documents",icon:"mdi-file-document-multiple",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Settings",component:"Settings",icon:"mdi-cog",access:{change:["SuperAdmin"],read:["View_only"]}}],i=["on-net","footprint","construction-commenced","coming-soon","not-available","list","submit-address"],o={"on-net":{title:"on-net",terms:"1-3 days",buildingStatus:"LIT",storeName:"lit",newCustomerDisabled:!1},footprint:{title:"footprint",terms:"1-2 weeks",buildingStatus:"Footprint",polygonType:"ServiceAvailable",storeName:"footprint",newCustomerDisabled:!1},"construction-commenced":{title:"Construction commenced",terms:"2-6 weeks",buildingStatus:"BuildCommenced",polygonType:"UnderConstruction",storeName:"build",newCustomerDisabled:!1},"coming-soon":{title:"Coming soon",terms:"4-8 weeks",buildingStatus:"ComingSoon",polygonType:"ComingSoon",storeName:"soon",newCustomerDisabled:!1},"not-available":{title:"Not available",terms:"N/A",buildingStatus:"Other",polygonType:null,storeName:"other",newCustomerDisabled:!0}},s=[{title:"On-net buildings",value:"lit",status:"LIT"},{title:"Footprint buildings",value:"footprint",status:"Footprint"},{title:"Construction commenced",value:"build",status:"BuildCommenced"},{title:"Coming Soon Buildings",value:"soon",status:"ComingSoon"},{title:"Not available buildings",value:"other",status:"Other"}],a={address:{title:"Address",type:"address",value:""},buildingUniqueCode:{title:"Building unique code",type:"unique-code",value:""},management:{managerName:{title:"Building manager name",type:"simple-text",value:""},managerPhoneWork:{title:"Building manager phone (work)",type:"phone",value:""},phoneWork:{title:"Phone (work)",type:"phone",value:""},phoneMobile:{title:"Phone (mobile)",type:"mobile",value:""},emailPrimary:{title:"Email (primary)",type:"email",value:""},emailAlternative:{title:"Email (alternative)",type:"email",value:""}},owner:{corporationName:{title:"Owners corporation name",type:"simple-text",value:""},contactPerson:{title:"Owners corporation contact person",type:"simple-text",value:""},corporationPhoneWork:{title:"Owners corporation phone work",type:"phone",value:""},corporationPhoneMobile:{title:"Owners corporation phone mob",type:"mobile",value:""},corporationEmailPrimary:{title:"Owners corporation email primary",type:"email",value:""},corporationEmailAlternative:{title:"Owners corporation email alternative",type:"email",value:""}}},c={address:"",addressComponents:{city:"",postCode:"",state:"",street:"",streetType:"",number:""},buildingUniqueCode:"",buildingName:"",buildingType:"",coordinates:[0,0],status:"Other",type:"",footprint:!0,distanceFromFootprint:0,avgFloorHeight:0,customerInstallApprovalRequired:!1,inductionRequired:!0,infrastructure:{type:"",backbone:{installed:!1,planned:!1},customerAccessCabling:{installed:!1,planned:!1},gPOinMDF:{exist:!1,installed:!1,planned:!1},gPOinRisers:{exist:!1,installed:!1,planned:!1},leadIn:{installed:!1,planned:!1},uPSinMDF:{installed:!1,planned:!1},uPSinRisers:{installed:!1,planned:!1}},levels:[{name:"",planned:{oftu:"",router:"",splicingBox:!1,splitter:!1},installed:{oftu:"",router:"",splicingBox:!1,splitter:!1}}],difficultyLevel:{backboneInstallation:0,customerInstallation:0,leadInInstallation:0},estimatedServiceDeliveryTime:"1-3 days",files:{approoval:"",design:"",laanInspect:"",laanInstall:"",scope:"",photos:[]},management:{managerName:"",managerPhoneWork:"",phoneWork:"",phoneMobile:"",emailPrimary:"",emailAlternative:""},owner:{corporationName:"",contactPerson:"",corporationPhoneWork:"",corporationPhoneMobile:"",corporationEmailPrimary:"",corporationEmailAlternative:""}},l={serviceName:{title:"Service name",type:"simple-text",value:""},serviceCode:{title:"Service code",type:"simple-text",value:""},contractTerm:{title:"Term (months)",type:"number",value:0},connectionFee:{title:"Connection fee $NRC",type:"number",value:0},subscriptionFee:{title:"Monthly fee $MRC",type:"number",value:0},serviceType:{title:"Type residential/commercial",type:"select",available:["residential","commercial"],value:"residential"},productType:{title:"Product type",type:"simple-text",value:""},freeTrial:{title:"Trial period",type:"simple-text",value:""},equipmentCost:{title:"Equipment cost",type:"number",value:0},equipmentType:{title:"Equipment type",type:"simple-text",value:""},equipmentRequired:{title:"Equipment required",type:"checkbox",value:!1},dataLimit:{title:"Data",type:"simple-text",value:""},serviceDescription:{title:"Service description",type:"simple-text",value:""},downstreamSpeed:{title:"Downstream speed",type:"number",value:50},upstreamSpeed:{title:"Upstream speed (Mbps)",type:"number",value:50},earlyTerminatioFee:{title:"Early termination fee ($)",type:"number",value:0},gstIncEx:{title:"gstIncEx",type:"checkbox",value:!1},serviceSLA:{title:"Service SLA",type:"simple-text",value:""},promo:{title:"Promo",type:"simple-text",value:""},partners:{title:"Partners",type:"array",value:[]}},u=(Date.now(),Date.now(),n("4d63"),n("ac1f"),n("25f0"),{states:["VIC","NSW","ACT","QLD","SA","WA","TAS","NT"],number:/^[0-9]*$/,email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,mobile:/^(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,phone:/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/,postcode:/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/,url:new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))"),password:new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")}),p=(n("a15b"),n("d81d"),n("13d5"),n("1276"),function(e){if(!e)return!1;var t=[10,1,3,5,7,9,11,13,15,17,19],n=e.split(" ").join("").split("").map((function(e,t){return e-(0===t?1:0)})).reduce((function(e,n,r){return e+n*t[r]}),0);return n%89===0}),d=(n("c975"),{required:function(e){return!!e||"Required."},"simple-text":function(e){return!0},number:function(e){return u.number.test(e)||"Invalid number."},mobile:function(e){return u.mobile.test(e)||"Invalid mobile phone number."},phone:function(e){return u.phone.test(e)||"Invalid phone number."},email:function(e){return u.email.test(e)||"Invalid e-mail."},state:function(e){return-1!==u.state.indexOf(e)||"Invalid state."},postcode:function(e){return u.postcode.test(e)||"Invalid state."},abn:function(e){return p(e)||"Invalid ABN."},url:function(e){return u.url.test(e)||"Invalid URL."},login:function(e){return e.length>5||"Invalid login"},password:function(e){return u.password.test(e)||"Password is not strong enough."}})}}]);
//# sourceMappingURL=chunk-bdbc434e.523d82d7.js.map