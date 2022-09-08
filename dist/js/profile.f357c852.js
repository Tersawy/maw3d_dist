"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[845],{4106:function(t,e,a){a.d(e,{Z:function(){return n}});var i=function(){var t=this,e=t._self._c;return e("svg",{attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"}},[e("path",{attrs:{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}})])},s=[],l=a(1001),r={},o=(0,l.Z)(r,i,s,!1,null,null,null),n=o.exports},9868:function(t,e,a){a.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input_form_wrapper",class:{active:t.isFoucsed,required:t.required,icon_left:t.$slots.icon_left,is_invalid:t.is_invalid||!!t.errorMsg}},[e("div",{staticClass:"icon_left"},[t._t("icon_left",null,null,{active:t.isFoucsed})],2),e("div",{staticClass:"input_control"},[t.label?e("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),e("div",{staticClass:"input_wrapper"},["checkbox"===t.type?e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"form_input",attrs:{id:t.id,placeholder:t.placeholder,required:t.required,type:"checkbox"},domProps:{checked:Array.isArray(t.val)?t._i(t.val,null)>-1:t.val},on:{focus:t.focus,blur:t.blur,change:function(e){var a=t.val,i=e.target,s=!!i.checked;if(Array.isArray(a)){var l=null,r=t._i(a,l);i.checked?r<0&&(t.val=a.concat([l])):r>-1&&(t.val=a.slice(0,r).concat(a.slice(r+1)))}else t.val=s}}},"input",t.inputProps,!1)):"radio"===t.type?e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"form_input",attrs:{id:t.id,placeholder:t.placeholder,required:t.required,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{focus:t.focus,blur:t.blur,change:function(e){t.val=null}}},"input",t.inputProps,!1)):e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"form_input",attrs:{id:t.id,placeholder:t.placeholder,required:t.required,type:t.type},domProps:{value:t.val},on:{focus:t.focus,blur:t.blur,input:function(e){e.target.composing||(t.val=e.target.value)}}},"input",t.inputProps,!1)),t._t("end_of_input")],2),t.errorMsg?e("span",{staticClass:"error_msg"},[t._v(t._s(t.errorMsg))]):t._e()])])},s=[],l={props:{inputProps:{type:Object},id:{type:String},label:{type:String},value:{type:[String,Number]},type:{type:String,default:"text"},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},is_invalid:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data(){return{isFoucsed:!1}},computed:{val:{get(){return this.value},set(t){this.$emit("input",t)}}},methods:{onChange(t){this.value=t.target.value},focus(t){this.isFoucsed=!0,this.$emit("focus",t)},blur(t){this.isFoucsed=!1,this.$emit("blur",t)}}},r=l,o=a(1001),n=(0,o.Z)(r,i,s,!1,null,"f90c3a30",null),c=n.exports},3375:function(t,e,a){a.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"virtual_input_wrapper",class:{is_active:t.is_active}},[t.$slots.icon_left?e("span",{staticClass:"icon_left"},[t._t("icon_left")],2):t._e(),e("div",{staticClass:"virtual_input_control"},[e("span",{staticClass:"virtual_input_label fs-sm"},[t._v(t._s(t.label))]),e("div",t._b({staticClass:"virtual_input",on:{click:function(e){return t.$emit("click")}}},"div",t.inputProps,!1),[t._t("default",(function(){return[e("span",[t._t("placeholder",(function(){return[t._v(t._s(t.placeholder))]}))],2),e("span",{staticClass:"icon_right"},[t._t("icon_right")],2)]}))],2)])])},s=[],l={props:{label:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},is_active:{type:Boolean,default:!1},inputProps:{type:Object,default:()=>({})}}},r=l,o=a(1001),n=(0,o.Z)(r,i,s,!1,null,null,null),c=n.exports},9730:function(t,e,a){a.d(e,{Z:function(){return g}});var i=function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"ImageModal","dialog-class":"full_modal","hide-footer":"","hide-header":"",centered:""},on:{hidden:t.reset,shown:t.shown},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"header d-flex justify-content-between align-items-center"},[e("span",{staticClass:"fs-lg"},[t._v(t._s(t.$t("addPhoto")))]),e("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:t.reset}})],1),e("div",{staticClass:"body pt-5"},[e("b-nav",{attrs:{fill:""}},t._l(t.tabs,(function(a){return e("b-nav-item",{key:a.value,attrs:{"active-class":"border-bottom border-lg",active:a.isActive},on:{click:function(e){return t.setActiveTab(a)}}},[t._v(t._s(a.title))])})),1),e("div",{staticClass:"tab mt-2"},["unsplash"==t.activeTab.value?[e("b-row",{attrs:{cols:"4","no-gutters":""}},t._l(t.unsplashData,(function(a,i){return e("b-col",{key:i},[e("div",{staticClass:"image_thumb h-100",on:{click:function(e){return t.setUnsplashImage(a)}}},[e("b-img",{staticClass:"h-100 border-0",attrs:{thumbnail:"",src:a.urls.thumb,alt:a.user.name}}),e("span",{staticClass:"image_title"},[t._v(t._s(a.user.name))])],1)])})),1),e("div",{staticClass:"load_more my-3"},[e("b-button",{staticClass:"filter_btn active px-3 py-2 mx-auto font-weight-500",on:{click:t.loadMore}},[e("BIcon",{staticClass:"mr-2",attrs:{icon:"arrow-repeat"}}),e("div",{staticClass:"fs-sm"},[t._v(t._s(t.$t("loadNewPhotos")))])],1)],1)]:"upload"==t.activeTab.value?[e("div",{staticClass:"pb-5 mb-5"},[e("div",{staticClass:"fs-sm text-muted text-center my-4"},[t._v(t._s(t.$t("uploadTabDesc")))]),t.imageUpload.isInvalid?e("div",{staticClass:"text-danger fs-xs text-center mb-2"},[t._v(t._s(t.imageUpload.errorMsg))]):t._e(),e("FileBtn",{on:{upload:t.uploadImage,error:t.handleImageUploadError}})],1)]:"link"==t.activeTab.value?[e("div",{staticClass:"pb-3 text-center"},[e("div",{staticClass:"fs-sm text-muted my-4"},[t._v(t._s(t.$t("linkTabDesc")))]),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submitURLImage.apply(null,arguments)}}},[e("form-input",{attrs:{dir:"ltr",type:"url",label:t.$t("imageUrl"),placeholder:"ex. https://www.example.com/image.jpg",is_invalid:t.imageURL.isInvalid,errorMsg:t.imageURL.errorMsg},model:{value:t.imageURL.url,callback:function(e){t.$set(t.imageURL,"url",e)},expression:"imageURL.url"}}),e("b-btn",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("save")))])],1)],1)]:t._e()],2)],1)]},proxy:!0}])})},s=[],l=a(9868),r=a(4659),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"file_btn",class:{file_btn_label:!t.$slots.default}},[e("label",{attrs:{for:t.compId}},[t._t("default",(function(){return[t._v(" "+t._s(t.$t(t.label))+" ")]}))],2),e("input",{staticClass:"file_input",attrs:{id:t.compId,type:"file",hidden:"",accept:t._accept,multiple:t.multiple},on:{change:t.uploadFile}})])},n=[],c={props:{id:{type:String},label:{type:String,default:"selectFile"},accept:{type:String,default:"jpg,jpeg,png"},multiple:{type:Boolean,default:!1},maxSize:{type:Number,default:5242880}},computed:{compId(){return this.id||"file_btn_"+this._uid},_accept(){return this.accept.split(",").map((t=>"image/"+t.trim()))}},methods:{uploadFile(t){let e=t.target.files[0];if(e){if(-1===this._accept.indexOf(e.type))return void this.$emit("error",this.$t("fileNotSupported"));if(e.size>this.maxSize)return void this.$emit("error",this.$t("fileSizeTooLarge"));this.$emit("upload",e)}}}},u=c,d=a(1001),p=(0,d.Z)(u,o,n,!1,null,null,null),m=p.exports,v={components:{FormInput:l.Z,FileBtn:m},mixins:[r.oE],data(){return{tabs:[{title:"Unsplash",value:"unsplash",isActive:!0},{title:this.$t("upload"),value:"upload",isActive:!1},{title:this.$t("link"),value:"link",isActive:!1}],imageURL:{isInvalid:!1,errorMsg:"",url:""},imageUpload:{isInvalid:!1,errorMsg:"",image:null}}},computed:{activeTab(){return this.tabs.find((t=>t.isActive))},unsplashData(){return this.$store.state.unsplash.data},isValidImageURL(){if(!this.imageURL.url)return!1;let t=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(this.imageURL.url);return!!t}},watch:{"imageURL.url"(){this.isValidImageURL?(this.imageURL.isInvalid=!1,this.imageURL.errorMsg=""):(this.imageURL.isInvalid=!0,this.imageURL.errorMsg=this.$t("enterValidUrl"))}},methods:{setActiveTab(t){this.tabs.forEach((e=>{e.isActive=e.value===t.value}))},submitURLImage(){if(!this.isValidImageURL)return this.imageURL.isInvalid=!0,void(this.imageURL.errorMsg=this.$t("enterValidUrl"));this.$emit("input",this.imageURL.url),this.$bvModal.hide("ImageModal")},uploadImage(t){this.imageUpload.isInvalid=!1,this.imageUpload.errorMsg="",this.imageUpload.image=t,this.$emit("input",t),this.$bvModal.hide("ImageModal")},setUnsplashImage(t){this.$emit("input",t.urls.regular),this.$bvModal.hide("ImageModal")},handleImageUploadError(t){this.imageUpload.isInvalid=!0,this.imageUpload.errorMsg=t},loadMore(){},shown(){},reset(){this.$bvModal.hide("ImageModal"),setTimeout((()=>{this.tabs.forEach((t=>{t.isActive="unsplash"===t.value})),this.imageURL={isInvalid:!1,errorMsg:"",url:""},this.imageUpload={isInvalid:!1,errorMsg:"",image:null}}),300)}}},f=v,h=(0,d.Z)(f,i,s,!1,null,null,null),g=h.exports},1367:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"account create_one mt-5 position-relative"},[e("b-container",[e("div",{staticClass:"header mt-4"},[e("div",{staticClass:"h3 mb-0"},[t._v(t._s(t.$t("edit"))+" "+t._s(t.$t("profilePage")))])]),e("b-form",{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("div",{staticClass:"field_title pt-1 mb-4"},[e("div",{staticClass:"title font-weight-500"},[t._v(t._s(t.$t("apperance")))])]),e("b-row",[e("b-col",{staticClass:"mb-4",attrs:{cols:"12",lg:"8"}},[e("form-input",{directives:[{name:"visible",rawName:"v-visible",value:"welcomeMessage",expression:"'welcomeMessage'"}],attrs:{label:t.$t("welcomeMessage"),placeholder:t.$t("welecomeMessagePlaceholder")},scopedSlots:t._u([{key:"icon_left",fn:function(){return[e("BIcon",{attrs:{icon:"chat-left-dots","font-scale":"1.4"}})]},proxy:!0}]),model:{value:t.profile.welcomeMessage,callback:function(e){t.$set(t.profile,"welcomeMessage",e)},expression:"profile.welcomeMessage"}})],1),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"25px"},attrs:{"data-visible":"welcomeMessage"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$t("welcomeMessageDesc")))])],1)]),e("b-col",{staticClass:"mb-4",attrs:{cols:"12",lg:"8"}},[e("virtual-input",{directives:[{name:"visible",rawName:"v-visible",value:"image",expression:"'image'"}],attrs:{label:t.$t("photoCover"),inputProps:{class:"cursor-auto"}},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"image_upload_wrapper"},[e("div",{staticClass:"btns d-flex",class:{has_review:t.imageReview}},[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"b-modal",rawName:"v-b-modal.ImageModal",modifiers:{ImageModal:!0}}],staticClass:"btn_icon btn_icon_md",attrs:{title:t.$t("addPhoto")}},[e("CameraPlus",{attrs:{width:"1.7rem"}})],1),t.imageReview?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon btn_icon_md mx-4",attrs:{title:t.$t("removePhoto")},on:{click:function(e){t.profile.imageCover=null}}},[e("BIcon",{attrs:{icon:"trash",scale:"1.5"}})],1):t._e()]),t.imageReview?e("img",{staticClass:"w-100 h-100",attrs:{src:t.imageReview,alt:"Cover"}}):t._e()])]},proxy:!0}])},[e("BIcon",{attrs:{slot:"icon_left",icon:"image"},slot:"icon_left"})],1)],1),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"25px"},attrs:{"data-visible":"image"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$t("coverPhotoDesc")))])],1)])],1)],1)],1),e("div",{staticClass:"footer_control bg-white border-top w-100"},[e("b-container",{staticClass:"h-100"},[e("div",{staticClass:"d-flex justify-content-end align-items-center h-100"},[e("b-overlay",{staticClass:"d-inline-block",attrs:{show:t.isLoading,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[e("b-button",{staticClass:"px-3",attrs:{variant:"primary",disabled:t.isLoading},on:{click:t.save}},[t._v(" "+t._s(t.$t("save"))+" ")])],1)],1)])],1),e("ImageModal",{model:{value:t.profile.imageCover,callback:function(e){t.$set(t.profile,"imageCover",e)},expression:"profile.imageCover"}})],1)},s=[],l=a(9868),r=a(9730),o=a(3375),n=a(4106),c=a(2003),u={components:{FormInput:l.Z,ImageModal:r.Z,VirtualInput:o.Z,CameraPlus:n.Z},data(){return{profile:{welcomeMessage:"",imageCover:""},isLoading:!1}},async beforeRouteEnter(t,e,a){if(c.Z.state.auth.isLoggedIn||await c.Z.dispatch("getMe"),c.Z.state.auth.me?.username)return a();a({name:"usernameForm"})},mounted(){this.profile={...this.$me.profile},this.endAppLoading()},watch:{"$me.profile"(t){this.profile={...t}}},computed:{imageReview(){let t=this.profile.imageCover;return t?("string"!=typeof t&&(t=URL.createObjectURL(t)),t):""}},methods:{async save(){this.isLoading=!0;let t=[{imgCover:this.profile.imageCover,welcomeMessage:this.profile.welcomeMessage}];if(this.profile.imageCover instanceof File){let e=new FormData;e.set("imgCover",this.profile.imageCover),e.set("welcomeMessage",this.profile.welcomeMessage),t=[e,{"Content-Type":"multipart/form-data"}]}try{await this.$store.dispatch("updateProfile",t)}finally{this.isLoading=!1}}}},d=u,p=a(1001),m=(0,p.Z)(d,i,s,!1,null,null,null),v=m.exports}}]);