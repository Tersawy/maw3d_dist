"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[875],{965:function(t,e,s){s.d(e,{Z:function(){return r}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown_select_wrapper",class:{active:t.isFoucsed||t.isShown,required:t.required,icon_left:t.$slots.icon_left,is_invalid:t.is_invalid}},[e("div",{staticClass:"icon_left"},[t._t("icon_left",null,null,{active:t.isFoucsed||t.isShown})],2),e("div",{staticClass:"dropdown_select_control"},[e("span",{staticClass:"dropdown_select_label"},[t._v(t._s(t.label))]),t.$slots.default?t._e():e("b-dropdown",{staticClass:"dropdown_select",attrs:{block:"","toggle-class":"dropdown_select_btn d-flex justify-content-between align-items-center pl-0 ","menu-class":"w-100 p-0 shadow-lg border-0",variant:"text"},on:{shown:t.shown,hidden:t.hidden},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("label",(function(){return[t.selectedOption?e("span",[t._v(t._s(t.selectedOption.text))]):t._e()]}))]},proxy:!0}],null,!0)},t._l(t.options,(function(s,i){return e("b-dropdown-item",{key:i,attrs:{"link-class":"p-3"},on:{click:function(e){return t.select(s)}}},[t._v(" "+t._s(s.text)+" ")])})),1),t._t("default")],2)])},a=[],l={props:{label:{type:String},value:{type:[String,Number]},required:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},is_invalid:{type:Boolean,default:!1}},data(){return{isFoucsed:!1,isShown:!1}},mounted(){let t=document.querySelector(".dropdown_select_btn");t&&(t.addEventListener("focus",(()=>{this.isFoucsed=!0})),t.addEventListener("blur",(()=>{this.isFoucsed=!1})))},computed:{val:{get(){return this.value},set(t){this.$emit("input",t)}},selectedOption(){return this.options.find((t=>t.value==this.value))}},methods:{shown(){this.isShown=!0},hidden(){this.isShown=!1},select(t){this.val=t.value,this.$emit("change",t.value),this.$emit("item-selected",t)}}},n=l,o=s(1001),c=(0,o.Z)(n,i,a,!1,null,null,null),r=c.exports},7543:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"create_one mt-5 position-relative"},[e("b-container",[e("div",{staticClass:"header mt-4 d-flex align-items-center justify-content-between"},[e("div",{staticClass:"h4 mb-0 font-weight-normal"},[t._v(t._s(t.$t("createGroupInvite")))]),e("button",{staticClass:"fs-sm mx-3 filter_btn active",on:{click:t.preview}},[e("BIcon",{staticClass:"mr-2",attrs:{icon:"eye",scale:"1.5"}}),t._v(" "+t._s(t.$t("previewInvite"))+" ")],1)]),e("div",{staticClass:"field_title mt-4 pt-1"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("inviteDisplayOptions")))])]),e("b-form",{staticClass:"mt-4 pt-2",on:{submit:function(e){return e.preventDefault(),t.createInvite.apply(null,arguments)}}},[e("b-row",[e("b-col",{staticClass:"mb-5",attrs:{cols:"12",lg:"8"}},[e("div",{directives:[{name:"visible",rawName:"v-visible",value:"addCustomQuestions",expression:"'addCustomQuestions'"}]},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",[e("BIcon",{staticStyle:{color:"#5e5e5e"},attrs:{icon:"box-arrow-in-right",scale:"1.6"}}),e("span",{staticClass:"text-muted mx-3 pl-1"},[t._v(t._s(t.$t("addCustomQuestions")))])],1),e("div",{staticClass:"text-primary cursor-pointer font-weight-500"},[e("BIcon",{staticClass:"mr-1",attrs:{icon:"plus-circle-fill",scale:"1.2"}}),t._v(" "+t._s(t.$t("add"))+" ")],1)])])]),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"0px"},attrs:{"data-visible":"addCustomQuestions"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$t("addCustomQuestionsDesc")))])],1)]),e("b-col",{staticClass:"mb-5",attrs:{cols:"12",lg:"8"}},[e("form-select",{directives:[{name:"visible",rawName:"v-visible",value:"eventNameFormat",expression:"'eventNameFormat'"}],attrs:{label:t.$t("eventNameFormat"),options:t.eventNameFormatOptions},model:{value:t.invite.eventNameFormat,callback:function(e){t.$set(t.invite,"eventNameFormat",e)},expression:"invite.eventNameFormat"}},[e("BIcon",{staticStyle:{color:"#5e5e5e"},attrs:{slot:"icon_left",icon:"calendar3"},slot:"icon_left"})],1)],1),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"25px"},attrs:{"data-visible":"eventNameFormat"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(" "+t._s(t.$t("eventNameFormatDesc"))+" ")])],1)]),e("b-col",{staticClass:"mb-5",attrs:{cols:"12",lg:"8"}},[e("form-select",{directives:[{name:"visible",rawName:"v-visible",value:"displayedTimezone",expression:"'displayedTimezone'"}],attrs:{label:t.$t("displayedTimezone"),options:t.displayedTimezoneOptions},model:{value:t.invite.displayedTimezone,callback:function(e){t.$set(t.invite,"displayedTimezone",e)},expression:"invite.displayedTimezone"}},[e("EarthIcon",{staticStyle:{fill:"#5e5e5e",transform:"scale(1.3)"},attrs:{slot:"icon_left"},slot:"icon_left"})],1)],1),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"25px"},attrs:{"data-visible":"displayedTimezone"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("div",{staticClass:"ml-3 mb-0"},[e("div",{staticClass:"font-weight-500"},[t._v(t._s(t.$t("inviteeLocalTimezone")))]),e("div",{staticClass:"mb-3"},[t._v(t._s(t.$t("inviteeLocalTimezoneDesc")))]),e("div",{staticClass:"font-weight-500"},[t._v(t._s(t.$t("lockedTimezone")))]),e("div",[t._v(t._s(t.$t("lockedTimezoneDesc")))])])],1)]),e("b-col",{staticClass:"mb-5 mt-3",attrs:{cols:"12",lg:"8"}},[e("div",{directives:[{name:"visible",rawName:"v-visible",value:"showIntro",expression:"'showIntro'"}]},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",[e("PersonIcon",{staticStyle:{fill:"#5e5e5e",transform:"scale(1.6)"},attrs:{width:"1rem"}}),e("span",{staticClass:"text-muted mx-3 pl-1"},[t._v(t._s(t.$t("showIntro")))])],1),e("div",{staticClass:"text-primary cursor-pointer font-weight-500"},[e("b-checkbox",{attrs:{switch:"",size:"lg"},model:{value:t.invite.showIntro,callback:function(e){t.$set(t.invite,"showIntro",e)},expression:"invite.showIntro"}})],1)])])]),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"17px"},attrs:{"data-visible":"showIntro"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$t("showIntroDesc")))])],1)]),e("b-col",{staticClass:"mb-5 mt-3",attrs:{cols:"12",lg:"8"}},[e("div",{directives:[{name:"visible",rawName:"v-visible",value:"showInYourProfilePage",expression:"'showInYourProfilePage'"}]},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",[e("BIcon",{staticClass:"mt-1",staticStyle:{color:"#5e5e5e"},attrs:{icon:"person-circle",scale:"1.5"}}),e("span",{staticClass:"text-muted mx-3 pl-1"},[t._v(t._s(t.$t("showInYourProfilePage")))])],1),e("div",{staticClass:"text-primary cursor-pointer font-weight-500"},[e("b-checkbox",{attrs:{switch:"",size:"lg"},model:{value:t.invite.showInYourProfilePage,callback:function(e){t.$set(t.invite,"showInYourProfilePage",e)},expression:"invite.showInYourProfilePage"}})],1)])])]),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"17px"},attrs:{"data-visible":"showInYourProfilePage"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$t("showInYourProfilePageDesc")))])],1)])],1),e("div",{staticClass:"field_title pt-3 mb-4"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("schedulingOptions")))])]),e("b-row",[e("b-col",{staticClass:"mb-5",attrs:{cols:"12",lg:"8"}},[e("form-select",{directives:[{name:"visible",rawName:"v-visible",value:"minimumNotice",expression:"'minimumNotice'"}],attrs:{label:t.$t("minimumNotice"),options:t.minimumNoticeOptions},model:{value:t.invite.minimumNotice,callback:function(e){t.$set(t.invite,"minimumNotice",e)},expression:"invite.minimumNotice"}},[e("BIcon",{staticStyle:{color:"#5e5e5e"},attrs:{slot:"icon_left",scale:"1.1",icon:"alarm"},slot:"icon_left"})],1)],1),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"25px"},attrs:{"data-visible":"minimumNotice"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(" "+t._s(t.$t("minimumNoticeDesc"))+" ")])],1)]),e("b-col",{staticClass:"mb-5",attrs:{cols:"12",lg:"8"}},[e("div",{directives:[{name:"visible",rawName:"v-visible",value:"bufferEvent",expression:"'bufferEvent'"}],staticClass:"d-flex"},[e("form-select",{staticClass:"pr-3",attrs:{label:t.$t("bufferBeforeEvent"),options:t.bufferEventOptions},model:{value:t.invite.bufferBeforeEvent,callback:function(e){t.$set(t.invite,"bufferBeforeEvent",e)},expression:"invite.bufferBeforeEvent"}},[e("BIcon",{staticStyle:{color:"#5e5e5e"},attrs:{slot:"icon_left",icon:"arrow-left-right"},slot:"icon_left"})],1),e("form-select",{staticClass:"pl-3",attrs:{label:t.$t("bufferAfterEvent"),options:t.bufferEventOptions},model:{value:t.invite.bufferAfterEvent,callback:function(e){t.$set(t.invite,"bufferAfterEvent",e)},expression:"invite.bufferAfterEvent"}})],1)]),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"25px"},attrs:{"data-visible":"bufferEvent"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(" "+t._s(t.$t("bufferEventDesc"))+" ")])],1)]),e("b-col",{staticClass:"mb-5 mt-3",attrs:{cols:"12",lg:"8"}},[e("div",{directives:[{name:"visible",rawName:"v-visible",value:"limitMaxNumberEvents",expression:"'limitMaxNumberEvents'"}]},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",[e("div",{staticClass:"d-flex"},[e("BIcon",{staticClass:"mt-1",staticStyle:{color:"#5e5e5e"},attrs:{icon:"calendar4-week",scale:"1.4"}}),e("div",{staticClass:"mx-3 pl-1"},[e("div",{staticClass:"text-muted mt-1"},[t._v(t._s(t.$t("limitMaxNumberEvents")))]),t.invite.limitMaxNumberEvents?e("div",{staticClass:"mt-4 d-flex align-items-center"},[e("b-form-input",{staticClass:"pl-4 pr-2",staticStyle:{width:"70px",height:"51px"},attrs:{type:"number"},model:{value:t.invite.maxNumberEvents,callback:function(e){t.$set(t.invite,"maxNumberEvents",e)},expression:"invite.maxNumberEvents"}}),e("span",{staticClass:"mx-3"},[t._v(t._s(t.$t("per")))]),e("b-form-select",{staticClass:"pl-3 fs-md",staticStyle:{width:"100px",height:"51px"},attrs:{options:t.maxNumberEventsPerOptions},model:{value:t.invite.maxNumberEventsPer,callback:function(e){t.$set(t.invite,"maxNumberEventsPer",e)},expression:"invite.maxNumberEventsPer"}})],1):t._e()])],1)]),e("div",{staticClass:"text-primary cursor-pointer font-weight-500 align-self-start"},[e("b-checkbox",{attrs:{switch:"",size:"lg"},model:{value:t.invite.limitMaxNumberEvents,callback:function(e){t.$set(t.invite,"limitMaxNumberEvents",e)},expression:"invite.limitMaxNumberEvents"}})],1)])])]),e("b-col",{staticClass:"d-none d-lg-block",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex position-absolute fs-sm text-muted",staticStyle:{top:"17px"},attrs:{"data-visible":"limitMaxNumberEvents"}},[e("BIcon",{staticClass:"mt-1",attrs:{icon:"info-circle",scale:"1.5"}}),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$t("limitMaxNumberEventsDesc")))])],1)])],1)],1)],1),e("div",{staticClass:"footer_control bg-white border-top w-100"},[e("b-container",{staticClass:"h-100"},[e("div",{staticClass:"d-flex justify-content-end align-items-center h-100"},[e("b-button",{staticClass:"filter_btn active mr-3 font-weight-500",attrs:{size:"sm"},on:{click:t.back}},[e("BIcon",{staticClass:"mr-2",attrs:{icon:""+(t.$isRtl?"chevron-right":"chevron-left"),scale:"0.8"}}),t._v(" "+t._s(t.$t("back"))+" ")],1),e("b-button",{staticClass:"px-4",attrs:{variant:"primary"},on:{click:t.createInvite}},[t._v(" "+t._s(t.$t("createInvite"))+" ")])],1)])],1),e("PreviewInvite",{ref:"preview"})],1)},a=[],l=s(5294),n=s(965),o=s(3375),c=s(2513),r=s(3679),m=s(9033),v=s(4915),u=s(4659),d=s(5795),f={components:{FormInput:l.Z,VirtualInput:o.Z,FormSelect:n.Z,EarthIcon:c.Z,PersonIcon:r.Z,PreviewInvite:m.Z},mixins:[u.oE],data(){return{invite:{name:"",eventNameFormat:"invitee_organizer",displayedTimezone:"local",showIntro:!0,showInYourProfilePage:!0,minimumNotice:360,bufferBeforeEvent:0,bufferAfterEvent:0,limitMaxNumberEvents:!1,maxNumberEvents:3,maxNumberEventsPer:"day"},displayedTimezoneOptions:[{value:"local",text:this.$t("inviteeLocalTimezone")},{value:"locked",text:this.$t("lockedTimezone")}],minimumNoticeOptions:[{value:15,text:this.$t("15min")},{value:60,text:this.$t("1hour")},{value:360,text:this.$t("6hours")},{value:720,text:this.$t("12hours")},{value:1440,text:this.$t("1day")},{value:2880,text:this.$t("2days")},{value:10080,text:this.$t("7days")}],bufferEventOptions:[{value:0,text:this.$t("0min")},{value:5,text:this.$t("5min")},{value:10,text:this.$t("10min")},{value:15,text:this.$t("15min")},{value:30,text:this.$t("30min")},{value:60,text:this.$t("1hour")},{value:120,text:this.$t("2hours")},{value:240,text:this.$t("4hours")}],maxNumberEventsPerOptions:[{value:"day",text:this.$t("day")},{value:"week",text:this.$t("week")},{value:"month",text:this.$t("month")}]}},validations:{invite:{eventNameFormat:{},showIntro:{},showInYourProfilePage:{},minimumNotice:{},bufferBeforeEvent:{},bufferAfterEvent:{},limitMaxNumberEvents:{},maxNumberEvents:{requiredIf:t=>t.limitMaxNumberEvents,numeric:d.uR,minValue:(0,d.uv)(1),maxValue:(0,d.PW)(100)},maxNumberEventsPer:{},allowGuests:{}}},async beforeRouteEnter(t,e,s){let i=v.Z.state.invites.one;if(!i.name)return s("/create/group");s((t=>t.init(i)))},mounted(){},computed:{eventNameFormatOptions(){let t=this.$t("invitee"),e=this.$me.username,s=this.invite.name,i=this.$t("and");return[{value:"invitee_organizer",text:`[${t}] ${i} ${e}`},{value:"invitee_organizer_name",text:`[${t}] ${i} ${e}: ${s}`},{value:"name_invitee_organizer",text:`${s}: [${t}] ${i} ${e}`}]}},methods:{init(t){for(let e in t)this.invite[e]=t[e]},preview(){this.$store.commit("setInvite",this.invite),this.$nextTick((()=>this.$refs.preview.open()))},createInvite(){this.$v.$touch(),this.$v.$invalid||this.$store.commit("setInvite",this.invite)},back(){this.$store.commit("setInvite",this.invite),this.$router.push("/create/group/when")}}},b=f,p=s(1001),h=(0,p.Z)(b,i,a,!1,null,null,null),x=h.exports}}]);
//# sourceMappingURL=groupOptions.f76d79d0.js.map