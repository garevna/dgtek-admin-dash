(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["services-list"],{eb5c:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{staticClass:"my-5",attrs:{justify:"end"}},[s("h5",[s("small",[e._v("Services list")])])]),s("v-row",{staticClass:"my-5 mx-2 mr-12"},[s("v-text-field",{staticStyle:{display:"inline-block",width:"280px"},attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"",dense:"",outlined:"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("v-spacer"),s("v-btn",{attrs:{text:""},on:{click:e.createNewService}},[s("v-icon",[e._v("mdi-plus")]),e._v(" Create new service ")],1)],1),s("v-data-table",{attrs:{headers:e.headers,items:e.items,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var i=t.item;return[s("v-btn",{staticClass:"primary",attrs:{outlined:"",dark:""},on:{click:function(t){return e.editItem(i)}}},[e._v("Edit")])]}}])}),s("span",{staticClass:"ml-12"},[s("small",[e._v("Total selected services: "+e._s(e.selectedServicesNumber))])])],1)},a=[],r={name:"ListOfServices",data:function(){return{items:[],search:"",selectedServicesNumber:void 0,headers:[{text:"Service name",align:"start",sortable:!0,value:"serviceName"},{text:"Service code",value:"serviceCode"},{text:"Service type",value:"productType"},{text:"Contract term (months)",value:"contractTerm"},{text:"MRC ($)",value:"subscriptionFee"},{text:"Connection fee",value:"connectionFee"},{text:"Trial (months)",value:"freeTrial"},{text:"Actions",value:"actions",sortable:!1}]}},computed:{},methods:{getData:function(e){console.log(e),this.items=e.result},createNewService:function(){this.$router.push({name:"create-new-service"})},editItem:function(e){console.log(e._id),this.selectedServiceId=e.id,this.$router.push({name:"service-details",params:{serviceId:e._id}})}},beforeDestroy:function(){this.$root.$off("services-list-received",this.getData)},mounted:function(){this.$root.$on("services-list-received",this.getData),this.__getListOfServices()}},c=r,n=s("2877"),o=s("6544"),l=s.n(o),v=s("8336"),d=s("a523"),u=s("8fea"),m=s("132d"),h=s("0fd9"),f=s("2fa4"),p=s("8654"),b=Object(n["a"])(c,i,a,!1,null,null,null);t["default"]=b.exports;l()(b,{VBtn:v["a"],VContainer:d["a"],VDataTable:u["a"],VIcon:m["a"],VRow:h["a"],VSpacer:f["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=services-list.5fb50299.js.map