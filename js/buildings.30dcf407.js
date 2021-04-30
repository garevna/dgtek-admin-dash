(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["buildings"],{1858:function(e,t,i){"use strict";i("7992")},"4d63":function(e,t,i){var n=i("83ab"),a=i("da84"),s=i("94ca"),o=i("7156"),l=i("9bf2").f,r=i("241c").f,c=i("44e7"),u=i("ad6d"),d=i("9f7f"),m=i("6eeb"),p=i("d039"),g=i("69f3").set,f=i("2626"),v=i("b622"),b=v("match"),h=a.RegExp,y=h.prototype,S=/a/g,x=/a/g,C=new h(S)!==S,w=d.UNSUPPORTED_Y,_=n&&s("RegExp",!C||w||p((function(){return x[b]=!1,h(S)!=S||h(x)==x||"/a/i"!=h(S,"i")})));if(_){var A=function(e,t){var i,n=this instanceof A,a=c(e),s=void 0===t;if(!n&&a&&e.constructor===A&&s)return e;C?a&&!s&&(e=e.source):e instanceof A&&(s&&(t=u.call(e)),e=e.source),w&&(i=!!t&&t.indexOf("y")>-1,i&&(t=t.replace(/y/g,"")));var l=o(C?new h(e,t):h(e,t),n?this:y,A);return w&&i&&g(l,{sticky:i}),l},O=function(e){e in A||l(A,e,{configurable:!0,get:function(){return h[e]},set:function(t){h[e]=t}})},D=r(h),T=0;while(D.length>T)O(D[T++]);y.constructor=A,A.prototype=y,m(a,"RegExp",A)}f("RegExp")},"62ad":function(e,t,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),a=i("5530"),s=(i("4b85"),i("a026")),o=i("d9f7"),l=i("80d2"),r=["sm","md","lg","xl"],c=function(){return r.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return r.reduce((function(e,t){return e["offset"+Object(l["D"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return r.reduce((function(e,t){return e["order"+Object(l["D"])(t)]={type:[String,Number],default:null},e}),{})}(),m={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function p(e,t,i){var n=e;if(null!=i&&!1!==i){if(t){var a=t.replace(e,"");n+="-".concat(a)}return"col"!==e||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var g=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var i=t.props,a=t.data,s=t.children,l=(t.parent,"");for(var r in i)l+=String(i[r]);var c=g.get(l);return c||function(){var e,t;for(t in c=[],m)m[t].forEach((function(e){var n=i[e],a=p(t,e,n);a&&c.push(a)}));var a=c.some((function(e){return e.startsWith("col-")}));c.push((e={col:!a||!i.cols},Object(n["a"])(e,"col-".concat(i.cols),i.cols),Object(n["a"])(e,"offset-".concat(i.offset),i.offset),Object(n["a"])(e,"order-".concat(i.order),i.order),Object(n["a"])(e,"align-self-".concat(i.alignSelf),i.alignSelf),e)),g.set(l,c)}(),e(i.tag,Object(o["a"])(a,{class:c}),s)}})},"6a12":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.ready?i("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"",width:"960"}},[i("v-toolbar",{staticClass:"transparent",staticStyle:{"box-shadow":"none"}},[i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:e.exit}},[i("v-icon",{attrs:{large:""}},[e._v("mdi-close")])],1)],1),i("fieldset",{staticClass:"my-4 pa-8"},[i("legend",{staticClass:"ml-4"},[i("h5",[e._v("Building details")])]),e.schema?i("v-card",{staticClass:"transparent mt-0",attrs:{flat:""}},[i("v-container",[i("v-row",{attrs:{justify:"center"}},[i("v-col",{staticClass:"d-none d-md-flex",attrs:{cols:"4","col-lg":"3","col-xl":"2"}},[i("small",[e._v("Building address")])]),i("v-col",{attrs:{cols:"8","col-lg":"6","col-xl":"5"}},[i("GeoscapeAutocomplete",{attrs:{buildingAddressData:e.buildingData},on:{"update:buildingAddressData":function(t){e.buildingData=t},"update:building-address-data":function(t){e.buildingData=t}}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{staticClass:"d-none d-md-flex mb-8",attrs:{cols:"4","col-lg":"3","col-xl":"2"}},[i("small",[e._v("Building unique code")])]),i("v-col",{attrs:{cols:"8","col-lg":"6","col-xl":"5"}},[i("v-text-field",{attrs:{outlined:"",dense:"","hide-details":""},model:{value:e.schema.buildingUniqueCode,callback:function(t){e.$set(e.schema,"buildingUniqueCode",t)},expression:"schema.buildingUniqueCode"}})],1)],1),i("v-row",{staticClass:"mt-0",attrs:{justify:"center"}},[i("v-col",{staticClass:"d-none d-md-flex mb-8",attrs:{cols:"4","col-lg":"3","col-xl":"2"}},[i("small",[e._v("Footprint")])]),i("v-col",{attrs:{cols:"8","col-lg":"6","col-xl":"5"}},[i("v-select",{attrs:{items:e.footprintOptions,"item-text":"title","item-value":"value",outlined:"",dense:"","hide-details":""},model:{value:e.schema.status,callback:function(t){e.$set(e.schema,"status",t)},expression:"schema.status"}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{staticClass:"d-none d-md-flex mb-8",attrs:{cols:"4","col-lg":"3","col-xl":"2"}},[i("small",[e._v("Estimated service delivery time")])]),i("v-col",{attrs:{cols:"8","col-lg":"6","col-xl":"5"}},[i("v-text-field",{attrs:{outlined:"",dense:"","hide-details":""},model:{value:e.schema.estimatedServiceDeliveryTime,callback:function(t){e.$set(e.schema,"estimatedServiceDeliveryTime",t)},expression:"schema.estimatedServiceDeliveryTime"}})],1)],1)],1),e._l(["management","owner"],(function(t){return i("v-container",{key:t},e._l(e.schema[t],(function(t,n){return i("v-row",{key:n,staticClass:"my-0",attrs:{justify:"center"}},[i("v-col",{staticClass:"d-none d-md-flex",attrs:{cols:"4","col-lg":"3","col-xl":"2",justify:"end"}},[i("small",[e._v(e._s(t.title))])]),i("v-col",{attrs:{cols:"8","col-lg":"6","col-xl":"5"}},[e.textField(t)?i("v-text-field",{attrs:{label:t.title,rules:[t.required?e.rules.required:function(e){return!0},e.rule(t)],outlined:"",dense:"","hide-details":""},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"prop.value"}}):e._e(),"mobile"===t.type?i("v-text-field",{attrs:{prefix:"+61",rules:[t.required?e.rules.required:function(e){return!0},e.rules.mobile],label:"prop.title",outlined:"",dense:"","hide-details":""},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"prop.value"}}):e._e()],1)],1)})),1)}))],2):e._e(),i("v-card-actions",{staticClass:"my-8"},[i("v-btn",{attrs:{outlined:"",color:"buttons"},on:{click:e.exit}},[e._v("Exit")]),i("v-spacer"),i("v-btn",{staticClass:"buttons",attrs:{dark:""},on:{click:e.saveBuildingDetails}},[e._v("Save")])],1)],1)],1):e._e()},a=[],s=(i("b0c0"),i("d3b7"),i("ade3")),o=i("f61f"),l=i("ce96"),r=i("98d9"),c={name:"EditBuildingDetails",components:{GeoscapeAutocomplete:function(){return i.e("chunk-481bb125").then(i.bind(null,"4613"))}},props:["buildingId"],data:function(){return{ready:!1,schema:o["a"],footprintOptions:o["d"],buildingDetails:{},rules:o["h"],buildingType:null,value:null}},computed:{buildingData:{get:function(){var e=this.schema,t=e.address,i=e.addressComponents,n=e.coordinates,a=e.relatedBuildingIds,s=e.buildingUniqueCode,o=e.status;return{address:t,addressComponents:i,coordinates:n,relatedBuildingIds:a,buildingUniqueCode:s,status:o}},set:function(e){Object.assign(this.schema,e)}},buildingUniqueCode:{get:function(){return this.schema.buildingUniqueCode},set:function(e){this.schema.buildingUniqueCode=e}}},watch:{schema:{deep:!0,handler:function(e){this.schema.buildingUniqueCode=Object(l["a"])(e.addressComponents),console.log(this.schema.buildingUniqueCode)}}},methods:{getData:function(e){console.log(e);var t=e.result,i=t.address,n=t.addressComponents,a=t.coordinates,s=t.relatedBuildingIds,o=t.estimatedServiceDeliveryTime;Object.assign(this.schema,{address:i,addressComponents:n,coordinates:a,relatedBuildingIds:s,buildingUniqueCode:Object(l["a"])(e.result.addressComponents),status:Object(r["a"])(),estimatedServiceDeliveryTime:o});for(var c=0,u=["management","owner"];c<u.length;c++){var d=u[c];for(var m in this.schema[d])this.schema[d][m].value=e.result[d][m]}console.log(this.schema),this.ready=!0},getNewBuildingId:function(e){console.log("NEW BUILDING CREATED EVENT:\n",e)},rowHeight:function(e){return"textarea"===e.type?160:60},textField:function(e){return Object(l["c"])(e.type)},rule:function(e){return this.rules[e.type]},saveBuildingDetails:function(){console.log("this.schema.estimatedServiceDeliveryTime: ",this.schema.estimatedServiceDeliveryTime);for(var e={address:this.schema.address,addressComponents:this.schema.addressComponents,management:{},owner:{},status:this.schema.buildingStatus,estimatedServiceDeliveryTime:this.schema.estimatedServiceDeliveryTime},t=0,i=["management","owner"];t<i.length;t++){var n=i[t];for(var a in this.schema[n])Object.assign(e[n],Object(s["a"])({},a,this.schema[n][a].value))}this.$root.$emit("progress-event",!0),this.buildingId?this.__putBuildingDetails(this.buildingId,e):this.__postBuildingDetails(e)},sendMessage:function(e){console.log("SAVE EVENT:\n",e),console.log("ROUTE: ",this.$route.name),console.log("ADDRESS: ",this.schema.address),this.$root.$emit("open-message-popup",{messageType:this.schema.address,messageText:"Building details updated"}),this.$router.push({name:"buildings"})},exit:function(){this.$router.push({name:"buildings"})}},beforeDestroy:function(){this.$root.$off("building-details",this.getData),this.$root.$off("buildings-data-saved",this.sendMessage),this.$root.$off("new-building-created",this.getNewBuildingId)},mounted:function(){this.buildingId&&(this.$root.$on("building-details",this.getData),this.__getBuildingById(this.buildingId)),this.$root.$on("building-data-updated",this.sendMessage),this.$root.$on("new-building-created",this.getNewBuildingId)}},u=c,d=(i("1858"),i("2877")),m=i("6544"),p=i.n(m),g=i("8336"),f=i("b0af"),v=i("99d9"),b=i("62ad"),h=i("a523"),y=i("132d"),S=i("0fd9"),x=i("b974"),C=i("2fa4"),w=i("8654"),_=i("71d9"),A=Object(d["a"])(u,n,a,!1,null,"fff30d30",null);t["default"]=A.exports;p()(A,{VBtn:g["a"],VCard:f["a"],VCardActions:v["a"],VCol:b["a"],VContainer:h["a"],VIcon:y["a"],VRow:S["a"],VSelect:x["a"],VSpacer:C["a"],VTextField:w["a"],VToolbar:_["a"]})},7992:function(e,t,i){},"875f":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.ready?i("v-container",{staticStyle:{"max-width":"800px"}},[i("v-data-table",{staticClass:"transparent",attrs:{headers:e.headers,items:e.filteredItems,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[i("v-toolbar-title",[i("v-select",{staticClass:"mt-4",staticStyle:{width:"240px"},attrs:{items:e.available,"item-text":"title","item-value":"value",label:"Building status",outlined:"",dense:"",color:"#900"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),i("v-spacer"),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",icon:""}},[i("v-icon",{attrs:{color:"primary"}},[e._v("mdi-plus")]),e._v(" New building ")],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[i("v-btn",{staticClass:"mb-2",attrs:{color:"primary"},on:{click:function(t){return e.edit(n)}}},[e._v(" Edit ")])]}}],null,!1,865015981)}),i("v-text-field",{staticStyle:{display:"inline-block",width:"280px"},attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"",dense:"",outlined:"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),i("span",{staticClass:"ml-12"},[i("small",[e._v("Total selected buildings: "+e._s(e.selectedBuildingsNumber))])])],1):e._e()},a=[],s=(i("4de4"),i("d81d"),i("ce96")),o=i("98d9"),l=i("f61f"),r={name:"BuildingsList",data:function(){return{ready:!1,buildings:[],search:"",available:l["d"],selectedBuildingId:void 0,selectedBuildingsNumber:null,headers:[{text:"Building address",align:"start",sortable:!0,value:"address"},{text:"Building unique code",value:"buildingUniqueCode"},{text:"Footprint",value:"status"},{text:"Actions",value:"actions",sortable:!1}]}},computed:{status:{get:function(){return Object(o["a"])()},set:function(e){e!==Object(o["a"])()&&(Object(o["a"])(e),this.__getBuildingsByStatus(Object(o["a"])()))}},filteredItems:function(){var e=this;return this.ready?this.buildings.filter((function(t){return!e.postCode||t.addressComponents.postCode===e.postCode})):[]}},methods:{getBuildings:function(e){console.log(e);var t=e.result;this.buildings=t.map((function(e){return{address:e.address,buildingUniqueCode:Object(s["a"])(e.addressComponents),status:t.buildingStatus,id:e.id}})),this.ready=!0},edit:function(e){console.log(e);var t=e.id;this.$router.push({name:"building-details",params:{buildingId:t}})}},beforeDestroy:function(){this.$root.$off("buildings-data-received",this.getBuildings),this.$root.$off("buildings-list-received",this.getBuildings)},mounted:function(){console.log("BUILDINGS LIST MOUNTED"),this.$root.$on("buildings-address-list",this.getBuildings),this.$root.$on("buildings-data-list",this.getBuildings),this.__getBuildingsByStatus(Object(o["a"])()||"lit")}},c=r,u=i("2877"),d=i("6544"),m=i.n(d),p=i("8336"),g=i("a523"),f=i("8fea"),v=i("132d"),b=i("b974"),h=i("2fa4"),y=i("8654"),S=i("71d9"),x=i("2a7f"),C=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=C.exports;m()(C,{VBtn:p["a"],VContainer:g["a"],VDataTable:f["a"],VIcon:v["a"],VSelect:b["a"],VSpacer:h["a"],VTextField:y["a"],VToolbar:S["a"],VToolbarTitle:x["a"]})},ce96:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return r}));i("98d9"),i("c975"),i("fb6a");var n=function(e){var t=e.indexOf(", Australia"),i=-1!==t?e.slice(0,t-e.length):e;return i.toUpperCase()},a=["simple-text","url","phone","email","abn","state","postcode","number","password"],s=function(e){return-1!==a.indexOf(e)};i("99af"),i("7db0"),i("d81d"),i("d3b7"),i("3835");i("a15b"),i("13d5"),i("ac1f"),i("1276"),i("a4d3"),i("e01a"),i("b0c0");var o=i("b85c");function l(e){e=e.split(" ").join("");var t,i=Object(o["a"])("aeiouyAEIOUY".split(""));try{for(i.s();!(t=i.n()).done;){var n=t.value;e=e[0]+e.slice(1).split(n).join("")}}catch(a){i.e(a)}finally{i.f()}return e.toUpperCase()}var r=function(e){if(!e)return"";var t=e.number,i=e.postCode,n=e.street,a=e.streetType;return"PA.".concat(i,".").concat(l(n),".").concat(a||"ST",".").concat(t)}},f61f:function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return s})),i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return l})),i.d(t,"f",(function(){return r})),i.d(t,"i",(function(){return c})),i.d(t,"g",(function(){return u})),i.d(t,"j",(function(){return d})),i.d(t,"h",(function(){return m}));var n=[{title:"RSP",icon:"mdi-",children:[{title:"RSP list",route:"rsp-list",icon:"mdi-account-multiple",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"New RSP",route:"create-rsp",icon:"mdi-account-plus",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}}]},{title:"Services",children:[{title:"Service list",route:"services-list",icon:"mdi-ballot-outline",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Add new service",route:"create-new-service",icon:"mdi-text-box-plus-outline",access:{change:["Account_manager","SuperAdmin"],read:[]}}]},{title:"Customers",route:"customers",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Footprint",icon:"mdi-map",access:{change:["SuperAdmin","Map_editor"],read:["View_only"]},children:[{title:"Search address",route:"footprint",icon:"mdi-map-search",access:{change:["SuperAdmin","Map_editor"],read:["View_only"]}},{title:"Edit polygins",route:"polygons",icon:"mdi-map-marker-path",access:{change:["Map_editor","SuperAdmin"],read:["View_only"]}},{title:"Edit building list",route:"buildings",icon:"mdi-home-map-marker",access:{change:["Map_editor","SuperAdmin"],read:["View_only"]}}]},{title:"Scheduling",component:"Scheduling",icon:"mdi-calendar-month",children:[{title:"Installation Schedule",icon:"mdi-table-network",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Calendar Settings",icon:"mdi-calendar-edit",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}}]},{title:"Tickets",component:"Tickets",icon:"mdi-inbox-multiple",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Documents",component:"Documents",icon:"mdi-file-document-multiple",access:{change:["Account_manager","SuperAdmin"],read:["View_only"]}},{title:"Settings",component:"Settings",icon:"mdi-cog",access:{change:["SuperAdmin"],read:["View_only"]}}],a=["on-net","footprint","construction-commenced","coming-soon","not-available","list","submit-address"],s={"on-net":{title:"on-net",terms:"1-3 days",buildingStatus:"LIT",storeName:"lit",newCustomerDisabled:!1},footprint:{title:"footprint",terms:"1-2 weeks",buildingStatus:"Footprint",polygonType:"ServiceAvailable",storeName:"footprint",newCustomerDisabled:!1},"construction-commenced":{title:"Construction commenced",terms:"2-6 weeks",buildingStatus:"BuildCommenced",polygonType:"UnderConstruction",storeName:"build",newCustomerDisabled:!1},"coming-soon":{title:"Coming soon",terms:"4-8 weeks",buildingStatus:"ComingSoon",polygonType:"ComingSoon",storeName:"soon",newCustomerDisabled:!1},"not-available":{title:"Not available",terms:"N/A",buildingStatus:"Other",polygonType:null,storeName:"other",newCustomerDisabled:!0}},o=[{title:"On-net buildings",value:"lit",status:"LIT"},{title:"Footprint buildings",value:"footprint",status:"Footprint"},{title:"Construction commenced",value:"build",status:"BuildCommenced"},{title:"Coming Soon Buildings",value:"soon",status:"ComingSoon"},{title:"Not available buildings",value:"other",status:"Other"}],l={address:{title:"Address",type:"address",value:""},buildingUniqueCode:{title:"Building unique code",type:"unique-code",value:""},management:{managerName:{title:"Building manager name",type:"simple-text",value:""},managerPhoneWork:{title:"Building manager phone (work)",type:"phone",value:""},phoneWork:{title:"Phone (work)",type:"phone",value:""},phoneMobile:{title:"Phone (mobile)",type:"mobile",value:""},emailPrimary:{title:"Email (primary)",type:"email",value:""},emailAlternative:{title:"Email (alternative)",type:"email",value:""}},owner:{corporationName:{title:"Owners corporation name",type:"simple-text",value:""},contactPerson:{title:"Owners corporation contact person",type:"simple-text",value:""},corporationPhoneWork:{title:"Owners corporation phone work",type:"phone",value:""},corporationPhoneMobile:{title:"Owners corporation phone mob",type:"mobile",value:""},corporationEmailPrimary:{title:"Owners corporation email primary",type:"email",value:""},corporationEmailAlternative:{title:"Owners corporation email alternative",type:"email",value:""}}},r={address:"",addressComponents:{city:"",postCode:"",state:"",street:"",streetType:"",number:""},buildingUniqueCode:"",buildingName:"",buildingType:"",coordinates:[0,0],status:"Other",type:"",footprint:!0,distanceFromFootprint:0,avgFloorHeight:0,customerInstallApprovalRequired:!1,inductionRequired:!0,infrastructure:{type:"",backbone:{installed:!1,planned:!1},customerAccessCabling:{installed:!1,planned:!1},gPOinMDF:{exist:!1,installed:!1,planned:!1},gPOinRisers:{exist:!1,installed:!1,planned:!1},leadIn:{installed:!1,planned:!1},uPSinMDF:{installed:!1,planned:!1},uPSinRisers:{installed:!1,planned:!1}},levels:[{name:"",planned:{oftu:"",router:"",splicingBox:!1,splitter:!1},installed:{oftu:"",router:"",splicingBox:!1,splitter:!1}}],difficultyLevel:{backboneInstallation:0,customerInstallation:0,leadInInstallation:0},estimatedServiceDeliveryTime:"1-3 days",files:{approoval:"",design:"",laanInspect:"",laanInstall:"",scope:"",photos:[]},management:{managerName:"",managerPhoneWork:"",phoneWork:"",phoneMobile:"",emailPrimary:"",emailAlternative:""},owner:{corporationName:"",contactPerson:"",corporationPhoneWork:"",corporationPhoneMobile:"",corporationEmailPrimary:"",corporationEmailAlternative:""}},c={serviceName:{title:"Service name",type:"simple-text",value:""},serviceCode:{title:"Service code",type:"simple-text",value:""},contractTerm:{title:"Term (months)",type:"number",value:0},connectionFee:{title:"Connection fee $NRC",type:"number",value:0},subscriptionFee:{title:"Monthly fee $MRC",type:"number",value:0},serviceType:{title:"Type residential/commercial",type:"select",available:["residential","commercial"],value:"residential"},productType:{title:"Product type",type:"simple-text",value:""},freeTrial:{title:"Trial period",type:"simple-text",value:""},equipmentCost:{title:"Equipment cost",type:"number",value:0},equipmentType:{title:"Equipment type",type:"simple-text",value:""},equipmentRequired:{title:"Equipment required",type:"checkbox",value:!1},dataLimit:{title:"Data",type:"simple-text",value:""},serviceDescription:{title:"Service description",type:"simple-text",value:""},downstreamSpeed:{title:"Downstream speed",type:"number",value:50},upstreamSpeed:{title:"Upstream speed (Mbps)",type:"number",value:50},earlyTerminatioFee:{title:"Early termination fee ($)",type:"number",value:0},gstIncEx:{title:"gstIncEx",type:"checkbox",value:!1},serviceSLA:{title:"Service SLA",type:"simple-text",value:""},promo:{title:"Promo",type:"simple-text",value:""},partners:{title:"Partners",type:"array",value:[]}},u=(Date.now(),Date.now(),i("4d63"),i("ac1f"),i("25f0"),{states:["VIC","NSW","ACT","QLD","SA","WA","TAS","NT"],number:/^[0-9]*$/,email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,mobile:/^(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,phone:/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/,postcode:/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/,url:new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))"),password:new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")}),d=(i("a15b"),i("d81d"),i("13d5"),i("1276"),function(e){if(!e)return!1;var t=[10,1,3,5,7,9,11,13,15,17,19],i=e.split(" ").join("").split("").map((function(e,t){return e-(0===t?1:0)})).reduce((function(e,i,n){return e+i*t[n]}),0);return i%89===0}),m=(i("c975"),{required:function(e){return!!e||"Required."},"simple-text":function(e){return!0},number:function(e){return u.number.test(e)||"Invalid number."},mobile:function(e){return u.mobile.test(e)||"Invalid mobile phone number."},phone:function(e){return u.phone.test(e)||"Invalid phone number."},email:function(e){return u.email.test(e)||"Invalid e-mail."},state:function(e){return-1!==u.state.indexOf(e)||"Invalid state."},postcode:function(e){return u.postcode.test(e)||"Invalid state."},abn:function(e){return d(e)||"Invalid ABN."},url:function(e){return u.url.test(e)||"Invalid URL."},login:function(e){return e.length>5||"Invalid login"},password:function(e){return u.password.test(e)||"Password is not strong enough."}})}}]);
//# sourceMappingURL=buildings.30dcf407.js.map