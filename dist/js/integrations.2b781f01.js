"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[801],{8108:function(t,e,s){s.d(e,{Z:function(){return r}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"account mt-5 position-relative"},[e("b-container",[e("div",{staticClass:"header mt-4"},[e("div",{staticClass:"h3 mb-0"},[t._v(t._s(t.$t("accountSettings")))])]),e("div",{staticClass:"my-4 py-2"},[e("b-nav",{staticClass:"custom_nav",attrs:{fill:""}},t._l(t.tabs,(function(s){return e("b-nav-item",{key:s.value,attrs:{active:t.isActive(s),to:s.to}},[t._v(t._s(s.title))])})),1)],1),e("b-row",[e("b-col",{attrs:{cols:"12",md:"9"}},[t._t("default")],2)],1)],1)],1)},a=[],o={props:{activeTab:{type:String,default:"general"}},data(){return{tabs:[{title:this.$t("general"),value:"general",isActive:!0,to:"/account"},{title:this.$t("calendars"),value:"calendars",isActive:!1,to:"/account/calendars"},{title:this.$t("integrations"),value:"integrations",isActive:!1,to:"/account/integrations"},{title:this.$t("availability"),value:"availability",isActive:!1,to:"/account/availability"},{title:this.$t("contacts"),value:"contacts",isActive:!1,to:"/account/contacts"}]}},methods:{isActive(t){return t.value==this.activeTab}}},n=o,c=s(1001),l=(0,c.Z)(n,i,a,!1,null,null,null),r=l.exports},3499:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("account",{attrs:{activeTab:"integrations"}},[e("section",[e("div",{staticClass:"field_title pt-1 d-flex align-items-center"},[e("BIcon",{staticClass:"mr-2",attrs:{icon:"code",scale:"1.4"}}),e("div",{staticClass:"title font-weight-500"},[t._v(t._s(t.$t("connections")))])],1),e("div",{staticClass:"mt-4"},[e("div",{staticClass:"mb-4"},[e("div",{staticClass:"d-flex align-items-center"},[e("b-img",{attrs:{src:s(1565),width:"50px"}}),e("div",{staticClass:"ml-3"},[e("div",{staticClass:"mb-1",class:{"text-muted":t.zoomEmail}},[t._v(t._s(t.$t("zoom")))]),e("div",[t._v(t._s(t.zoomEmail))]),t.zoomEmail?t._e():e("div",{staticClass:"text-muted fs-sm"},[t._v(t._s(t.$t("automaticallyCreateZoomMeetings")))])]),e("div",{staticClass:"ml-auto"},[t.zoomEmail?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon",attrs:{title:t.$t("disconnect")}},[e("b-iconstack",{attrs:{"font-scale":"0.8"}},[e("b-icon",{attrs:{stacked:"",icon:"triangle","shift-v":"5"}}),e("b-icon",{attrs:{stacked:"",icon:"dash-lg","shift-v":"-6"}})],1)],1):e("a",{staticClass:"btn_outline",attrs:{href:t.$store.state.auth.zoomRedirectURL}},[t._v(t._s(t.$t("connect")))])])],1)]),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"d-flex align-items-center"},[e("b-img",{attrs:{src:s(4056),width:"50px"}}),e("div",{staticClass:"ml-3"},[e("div",{staticClass:"mb-1",class:{"text-muted":t.isGoogleConnected}},[t._v(t._s(t.$t("googleMeet")))]),t.isGoogleConnected?[t.googleHasWriteCalendar?e("div",[t._v(t._s(t.$t("googleWriteCalendarConnected")))]):e("div",[t._v(t._s(t.$t("setGoogleWriteCalendar")))])]:e("div",{staticClass:"text-muted fs-sm"},[t._v(t._s(t.$t("connectGoogleMeetDesc")))])],2),e("div",{staticClass:"ml-auto"},[t.isGoogleConnected?t._e():e("button",{staticClass:"btn_outline"},[t._v(t._s(t.$t("connect")))])])],1)])])])])},a=[],o=s(8108),n={components:{Account:o.Z},data(){return{calendarImages:{"microsoft.com":"microsoft_teams.svg","google.com":"google_meet.svg",zoom:"zoom.png"},calendarNames:{"microsoft.com":this.$t("microsoftTeams"),"google.com":this.$t("googleMeet"),zoom:this.$t("zoom")}}},async mounted(){await this.$store.dispatch("getZoomRedirect");let{state:t,code:e,provider:s}=this.$route.query;t&&e&&s&&this.$store.dispatch("zoom",{state:t,code:e})},computed:{zoomEmail(){let t=this.$me.integrations.find((t=>"zoom"===t.providerName));return t?t.userEmail:""},isGoogleConnected(){let t=this.$me.integrations.find((t=>"google.com"===t.providerName));return!!t},googleHasWriteCalendar(){let t=this.$me.integrations.find((t=>"google.com"===t.providerName));return!!t&&t.calendars.some((t=>t.shouldWrite))},providers(){return this.$me.integrations.map((t=>({name:this.calendarNames[t.providerName],image:this.calendarImages[t.providerName],email:t.userEmail,userId:t.userId,hasDisconnect:!this.$me.authProviders.some((e=>e.userId===t.userId))})))}}},c=n,l=s(1001),r=(0,l.Z)(c,i,a,!1,null,null,null),m=r.exports},4056:function(t,e,s){t.exports=s.p+"img/google_meet.f7a2238f.svg"},1565:function(t,e,s){t.exports=s.p+"img/zoom.c66d5376.png"}}]);
//# sourceMappingURL=integrations.2b781f01.js.map