"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[920],{8108:function(e,t,r){r.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"account mt-5 position-relative"},[t("b-container",[t("div",{staticClass:"header mt-4"},[t("div",{staticClass:"h3 mb-0"},[e._v(e._s(e.$t("accountSettings")))])]),t("div",{staticClass:"my-4 py-2"},[t("b-nav",{staticClass:"custom_nav",attrs:{fill:""}},e._l(e.tabs,(function(r){return t("b-nav-item",{key:r.value,attrs:{active:e.isActive(r),to:r.to}},[e._v(e._s(r.title))])})),1)],1),t("b-row",[t("b-col",{attrs:{cols:"12",md:"9"}},[e._t("default")],2)],1)],1)],1)},a=[],i={props:{activeTab:{type:String,default:"general"}},data(){return{tabs:[{title:this.$t("general"),value:"general",isActive:!0,to:"/account"},{title:this.$t("calendars"),value:"calendars",isActive:!1,to:"/account/calendars"},{title:this.$t("integrations"),value:"integrations",isActive:!1,to:"/account/integrations"},{title:this.$t("availability"),value:"availability",isActive:!1,to:"/account/availability"},{title:this.$t("contacts"),value:"contacts",isActive:!1,to:"/account/contacts"}]}},methods:{isActive(e){return e.value==this.activeTab}}},o=i,l=r(1001),s=(0,l.Z)(o,n,a,!1,null,null,null),u=s.exports},4106:function(e,t,r){r.d(t,{Z:function(){return s}});var n=function(){var e=this,t=e._self._c;return t("svg",{attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"}},[t("path",{attrs:{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}})])},a=[],i=r(1001),o={},l=(0,i.Z)(o,n,a,!1,null,null,null),s=l.exports},5294:function(e,t,r){r.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"input_form_wrapper",class:{active:e.isFoucsed,required:e.required,icon_left:e.$slots.icon_left,is_invalid:e.is_invalid}},[t("div",{staticClass:"icon_left"},[e._t("icon_left",null,null,{active:e.isFoucsed})],2),t("div",{staticClass:"input_control"},[e.label?t("label",{attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),t("div",{staticClass:"input_wrapper"},["checkbox"===e.type?t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form_input",attrs:{id:e.id,placeholder:e.placeholder,required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{focus:e.focus,blur:e.blur,change:function(t){var r=e.val,n=t.target,a=!!n.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);n.checked?o<0&&(e.val=r.concat([i])):o>-1&&(e.val=r.slice(0,o).concat(r.slice(o+1)))}else e.val=a}}},"input",e.inputProps,!1)):"radio"===e.type?t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form_input",attrs:{id:e.id,placeholder:e.placeholder,required:e.required,type:"radio"},domProps:{checked:e._q(e.val,null)},on:{focus:e.focus,blur:e.blur,change:function(t){e.val=null}}},"input",e.inputProps,!1)):t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form_input",attrs:{id:e.id,placeholder:e.placeholder,required:e.required,type:e.type},domProps:{value:e.val},on:{focus:e.focus,blur:e.blur,input:function(t){t.target.composing||(e.val=t.target.value)}}},"input",e.inputProps,!1)),e._t("end_of_input")],2),e.errorMsg?t("span",{staticClass:"error_msg"},[e._v(e._s(e.errorMsg))]):e._e()])])},a=[],i={props:{inputProps:{type:Object},id:{type:String},label:{type:String},value:{type:[String,Number]},type:{type:String,default:"text"},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},is_invalid:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data(){return{isFoucsed:!1}},computed:{val:{get(){return this.value},set(e){this.$emit("input",e)}}},methods:{onChange(e){this.value=e.target.value},focus(){this.isFoucsed=!0,this.$emit("focus")},blur(){this.isFoucsed=!1,this.$emit("focus")}}},o=i,l=r(1001),s=(0,l.Z)(o,n,a,!1,null,"2adeb7ba",null),u=s.exports},7604:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=function(){var e=this,t=e._self._c;return t("account",{attrs:{activeTab:"general"}},[t("section",[t("div",{staticClass:"field_title pt-1 d-flex align-items-center"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"person-badge"}}),t("div",{staticClass:"title font-weight-500"},[e._v(e._s(e.$t("personalInfo")))])],1),t("div",{staticClass:"d-flex align-items-center mt-3"},[t("div",{staticClass:"user_image_wrapper overflow-hidden mr-2 d-flex align-items-center justify-content-center position-relative rounded-circle"},[t("label",{staticClass:"user_image_label position-absolute",attrs:{for:"userImage"}},[t("CameraPlus",{attrs:{width:"1.7rem"}})],1),t("b-form-file",{staticClass:"d-none",attrs:{id:"userImage",hidden:""},on:{input:e.uploadProfileImage}}),t("b-avatar",{attrs:{size:"4rem",variant:"primary",src:e.$me.profile.picture}})],1),t("div",{staticClass:"ml-2"},[t("h5",{staticClass:"font-weight-normal d-flex align-items-center"},[t("span",[e._v(e._s(e.$me.username))]),t("div",{directives:[{name:"b-modal",rawName:"v-b-modal.ProfileInfoModal",modifiers:{ProfileInfoModal:!0}}],staticClass:"d-flex align-items-center fs-md text-primary font-weight-500 ml-4 cursor-pointer"},[t("b-icon",{staticClass:"mr-2",attrs:{icon:"pencil",width:"1em"}}),t("span",[e._v(e._s(e.$t("edit")))])],1)]),t("span",{staticClass:"text-muted"},[e._v("@"+e._s(e.$me.username))])])])]),t("section",{staticClass:"my-5"},[t("div",{staticClass:"field_title pt-1 d-flex align-items-center mb-2"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"shield-lock"}}),t("div",{staticClass:"title font-weight-500"},[e._v(e._s(e.$t("security")))])],1),t("p",[e._v(e._s(e.$t("securityDesc",{email:e.$me.email})))])]),t("section",{staticClass:"my-5"},[t("div",{staticClass:"field_title pt-1 d-flex align-items-center mb-2"},[t("BIcon",{staticClass:"mr-2",attrs:{icon:"exclamation-triangle"}}),t("div",{staticClass:"title font-weight-500"},[e._v(e._s(e.$t("dangerZone")))])],1),t("b-btn",{staticClass:"mt-2",attrs:{variant:"outline-danger"}},[e._v(e._s(e.$t("deleteAccount")))])],1),t("ProfileInfoModal")],1)},a=[],i=(r(6699),r(8108)),o=function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"ProfileInfoModal","dialog-class":"full_modal no_static_height","hide-footer":"","hide-header":"",centered:"",size:"lg"},on:{hidden:e.reset,shown:e.shown},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"header d-flex justify-content-between align-items-center"},[t("span",{staticClass:"fs-lg"},[e._v(e._s(e.$t("editProfileInfo")))]),t("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:e.reset}})],1),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[t("div",{staticClass:"p-2 py-4 my-2"},[t("b-row",[t("b-col",{staticClass:"mb-3",attrs:{cols:"12",sm:"6"}},[t("FormInput",{directives:[{name:"vuelidate",rawName:"v-vuelidate.noDirty",value:e.profile.firstName,expression:"profile.firstName",modifiers:{noDirty:!0}}],attrs:{label:e.$t("firstName"),required:""},model:{value:e.profile.firstName,callback:function(t){e.$set(e.profile,"firstName",t)},expression:"profile.firstName"}})],1),t("b-col",{staticClass:"mb-3",attrs:{cols:"12",sm:"6"}},[t("FormInput",{directives:[{name:"vuelidate",rawName:"v-vuelidate.noDirty",value:e.profile.lastName,expression:"profile.lastName",modifiers:{noDirty:!0}}],attrs:{label:e.$t("lastName"),required:""},model:{value:e.profile.lastName,callback:function(t){e.$set(e.profile,"lastName",t)},expression:"profile.lastName"}})],1),t("b-col",{attrs:{cols:"12"}},[t("FormInput",{directives:[{name:"vuelidate",rawName:"v-vuelidate.noDirty",value:e.profile.username,expression:"profile.username",modifiers:{noDirty:!0}}],attrs:{label:e.$t("username"),required:""},model:{value:e.profile.username,callback:function(t){e.$set(e.profile,"username",t)},expression:"profile.username"}})],1)],1)],1),t("div",{staticClass:"footer d-flex align-items-center justify-content-end"},[t("b-btn",{staticClass:"filter_btn active mx-3",attrs:{size:"sm"},on:{click:e.reset}},[e._v(e._s(e.$t("cancel")))]),t("b-overlay",{staticClass:"d-inline-block",attrs:{show:e.isLoading,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[t("b-btn",{attrs:{type:"submit",variant:"primary",disabled:e.$v.$invalid||e.isLoading}},[e._v(e._s(e.$t("save")))])],1)],1)])]},proxy:!0}])})},l=[],s=r(5294),u=r(4659),f=r(5795);let c=e=>/(^[a-zA-Z0-9]+$)|(^[a-zA-Z0-9]+_[a-zA-Z0-9]+$)/.test(e);var d={components:{FormInput:s.Z},mixins:[u.oE],data(){return{isLoading:!1,profile:{username:this.$me?.username,firstName:this.$me?.firstName,lastName:this.$me?.lastName}}},validations:{profile:{username:{required:f.C1,invalid:c},firstName:{required:f.C1,invalid:c},lastName:{required:f.C1,invalid:c}}},methods:{async save(){if(!this.$v.$invalid){this.isLoading=!0;try{await this.$store.dispatch("updateMe",this.profile)}finally{this.isLoading=!1}this.$bvModal.hide("ProfileInfoModal")}},shown(){this.profile={username:this.$me.username,firstName:this.$me.firstName,lastName:this.$me.lastName}},reset(){this.$bvModal.hide("ProfileInfoModal")}}},p=d,v=r(1001),m=(0,v.Z)(p,o,l,!1,null,null,null),y=m.exports,b=r(4106),_={components:{Account:i.Z,ProfileInfoModal:y,CameraPlus:b.Z},data(){return{}},methods:{uploadProfileImage(e){if(!e)return;let t=["image/png","image/jpg","image/jpeg"];if(!t.includes(e.type))return alert("image type must be one of this types 'png,jpg,jpeg'");let r=5242880;if(e.size>r)return alert("image size is too long");let n=[{image:e}];if(e){let t=new FormData;t.set("image",e),n=[t,{"Content-Type":"multipart/form-data"}]}this.$store.dispatch("updateProfile",n)}}},h=_,g=(0,v.Z)(h,n,a,!1,null,null,null),P=g.exports},4689:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=a},3331:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=a},7673:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=a},450:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=a},4111:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=a(r(8751));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var l=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=l;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var u=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=u},3107:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=a},184:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,i=(0,n.regex)("email",a);t["default"]=i},5795:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"vX",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"BS",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"PW",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"uv",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"uR",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"CF",{enumerable:!0,get:function(){return v.default}});var a=M(r(4689)),i=M(r(3331)),o=M(r(8603)),l=M(r(450)),s=M(r(184)),u=M(r(2632)),f=M(r(837)),c=M(r(5136)),d=M(r(3795)),p=M(r(367)),v=M(r(2035)),m=M(r(310)),y=M(r(8612)),b=M(r(2009)),_=M(r(5208)),h=M(r(7673)),g=M(r(7850)),P=M(r(9935)),x=M(r(3134)),w=M(r(719)),C=M(r(3107)),$=O(r(4111));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(j=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=j(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}function M(e){return e&&e.__esModule?e:{default:e}}},719:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=a},2632:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t["default"]=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},837:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t["default"]=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5136:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=a},3134:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=a},3795:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=a},9935:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=a},7850:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=a},8603:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=a},5208:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=a},367:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=a},2035:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},310:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},8612:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=a},2009:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",a);t["default"]=i},8751:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_API_URL:"https://soman-oman.com/api/v1",VUE_APP_BASE_URL:"https://soman-oman.com",BASE_URL:"/"}.BUILD?r(9886).R:r(7801).withParams,a=n;t["default"]=a},9886:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},i=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},o=a.vuelidate?a.vuelidate.withParams:i;t.R=o}}]);
//# sourceMappingURL=general.d075dd61.js.map