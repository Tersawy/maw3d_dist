"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[963],{7960:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return t.onlineMeeting&&t.text?e("div",[t.image?e("b-img",{staticClass:"mr-2",attrs:{src:t.image,width:"14.5"}}):e("b-icon",{staticClass:"mr-2",attrs:{icon:"geo-alt",scale:"0.9"}}),e("span",{staticClass:"text-muted"},[t._v(t._s(t.text))]),t.onlineMeeting.url&&!t.noLink?[e("span",[t._v(" - ")]),e("a",{staticClass:"text-decoration-none",attrs:{href:t.onlineMeeting.url,target:"blank"}},[t._v(t._s(t.$t("joinMeeting")))])]:t._e()],2):t._e()},n=[],a={props:{onlineMeeting:{type:Object,default:()=>({meetingType:"",url:"",text:""})},noLink:{type:Boolean,default:!1}},computed:{text(){let t=this.onlineMeeting.meetingType;return"google"==t?this.$t("googleMeet"):"zoom"==t?this.$t("zoom"):"custom"==t?this.onlineMeeting.text:""},image(){let t=this.onlineMeeting.meetingType;return"google"==t?i(4056):"zoom"==t?i(1565):""}}},o=a,l=i(1001),r=(0,l.Z)(o,s,n,!1,null,null,null),c=r.exports},8026:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"event"},[e("b-container",[e("div",{staticClass:"event_header d-flex align-items-center justify-content-between mt-4"},[e("div",{staticClass:"h4"},[t._v(t._s(t.eventName))]),e("div",{staticClass:"d-flex"},[t.isOneOnOne?e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon mr-2",attrs:{title:"Reschedule"}},[e("b-icon",{attrs:{icon:"calendar2-event","font-scale":"1.4"}})],1):t._e(),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon mr-2",attrs:{title:"Cancel",role:"button"},on:{click:function(e){return t.$router.push({name:"eventCancel",params:t.$route.params})}}},[e("b-icon",{attrs:{icon:"x-circle","font-scale":"1.4"}})],1)])]),e("div",{staticClass:"event_body mt-5"},[e("div",{staticClass:"field_title"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"link",scale:"1.2"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("link"))))])],1),e("div",{staticClass:"body mt-2"},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"createEvent",params:t.inviteParams}}},[t._v(t._s(t.event.invite&&t.event.invite.name))])],1)]),e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"calendar2-event",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("date"))))])],1),e("div",{staticClass:"body mt-2"},[e("span",{staticClass:"text-success font-weight-600"},[t._v(t._s(t.startDate))])])]),t.hasMeet?e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"geo-alt",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("location"))))])],1),e("div",{staticClass:"body mt-2 fs-md"},[e("Location",{attrs:{onlineMeeting:t.event.onlineMeeting}})],1)]):t._e(),t.isOneOnOne?[e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"person",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("invitee"))))])],1),e("div",{staticClass:"body mt-2"},[e("div",[t._v(t._s(t.invitee.name))]),e("div",{staticClass:"text-muted mt-1"},[t._v(t._s(t.invitee.email))])])]),t.guests.length?e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"people",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("guests"))))])],1),e("div",{staticClass:"body mt-2"},t._l(t.guests,(function(i,s){return e("div",{key:s},[e("div",{staticClass:"text-muted"},[t._v(t._s(i.email))])])})),0)]):t._e()]:[e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"grid3x2",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("attendance"))))])],1),e("div",{staticClass:"body mt-2"},[e("span",{},[t._v(t._s(t.event.invitees.length)+" "+t._s(t.$t("of"))+" "+t._s(t.event.invite.maxInvitees)+" "+t._s(t.$t("spotsFilled")))])])]),e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"people",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v(t._s(t._f("toUpperCase")(t.$t("invitees"))))])],1),e("div",{staticClass:"body mt-2"},t._l(t.event.invitees,(function(i,s){return e("div",{key:s,on:{click:function(e){return t.showInviteeData(i)}}},[e("span",{staticClass:"text-primary cursor-pointer"},[t._v(" "+t._s(i.name)+" ")])])})),0)])]],2)]),e("invitee-modal",{attrs:{invitee:t.inviteeData},on:{"update:invitee":function(e){t.inviteeData=e}}})],1)},n=[],a=i(7960),o=function(){var t=this,e=t._self._c;return t.invitee?e("b-modal",{attrs:{id:"InviteeModal","hide-footer":"","hide-header":""},on:{hidden:t.reset},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"header d-flex justify-content-between align-items-center"},[e("span",{staticClass:"fs-lg"},[t._v(t._s(t.invitee.name))]),e("div",{staticClass:"d-flex"},[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon btn_icon_md mr-2",attrs:{title:"Reschedule Invitee"}},[e("BIcon",{attrs:{icon:"calendar2-event","font-scale":"1.4"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon btn_icon_md mr-2",attrs:{title:"Remove Invitee"}},[e("BIcon",{attrs:{icon:"x-circle","font-scale":"1.4"}})],1),e("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:t.reset}})],1)]),e("div",{staticClass:"body mb-3"},[e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"at",scale:"1.1"}}),e("span",{staticClass:"title_text fs-md"},[t._v("INVITEE EMAIL")])],1),e("div",{staticClass:"body mt-2"},[e("div",{staticClass:"mt-1 fs-sm"},[t._v(t._s(t.invitee.email))])])]),t.invitee.customQuestions&&t.invitee.customQuestions.length?e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"box-arrow-in-right",scale:"1.1"}}),e("span",{staticClass:"title_text fs-md"},[t._v("CUSTOM QUESTIONS")])],1),e("div",{staticClass:"body mt-2"},t._l(t.invitee.customQuestions,(function(i,s){return e("div",{key:s,staticClass:"mb-2"},[e("div",{staticClass:"text-muted"},[t._v(t._s(i.question))]),e("div",{staticClass:"mt-1"},[t._v(t._s(i.answer))])])})),0)]):t._e()])]},proxy:!0}],null,!1,4151005945)}):t._e()},l=[],r={props:{invitee:Object},methods:{reset(){this.$emit("update:invitee",null)}}},c=r,v=i(1001),d=(0,v.Z)(c,o,l,!1,null,null,null),m=d.exports,u=i(3483),_={components:{InviteeModal:m,Location:a.Z},data(){return{inviteeData:null}},async beforeRouteEnter(t,e,i){u.Z.commit("setAppLoading",!0);try{await u.Z.dispatch("getEvent",t.params.id)}catch(s){return i({name:"notFound"})}i()},mounted(){this.endAppLoading()},watch:{inviteeData(t){t||this.$bvModal.hide("InviteeModal")}},computed:{event(){return this.$store.state.events.one},isOneOnOne(){return"oneOnOne"==this.event.invite?.type},hasMeet(){return this.event?.onlineMeeting?.meetingType},invitee(){return this.event?.invitees?.find((t=>!t.isGuest))},inviteParams(){let t=this.event.invite.url,{user:e,inviteID:i}=this.event.invite;return t?{username:e.username,inviteId:t}:{username:"i",inviteId:i}},guests(){return this.event?.invitees?.filter((t=>t.isGuest))},eventName(){if(this.isOneOnOne){let t=this.event.invite.name,e=this.event.invitees.find((t=>!t.isGuest)).name,i=this.event.invite.user.firstName+" "+this.event.invite.user.lastName,s=this.$t("and");if("invitee_organizer"==this.event.invite.eventNameFormat)return`${e} ${s} ${i}`;if("invitee_organizer_name"==this.event.invite.eventNameFormat)return`[${e}] ${s} ${i}: ${t}`;if("invitee_organizer"==this.event.invite.eventNameFormat)return`${t}: [${e}] ${s} ${i}`}return this.event.invite.name},startDate(){let t=this.$moment(this.event.startDate).tz(this.event.invite.timezone);return t.format("ddd, MMM D, h:mm a - ")+t.clone().add(this.event.duration,"m").format("h:mm a")}},methods:{showInviteeData(t){this.inviteeData=t,this.$nextTick((()=>this.$bvModal.show("InviteeModal")))}}},p=_,C=(0,v.Z)(p,s,n,!1,null,null,null),f=C.exports},4056:function(t,e,i){t.exports=i.p+"img/google_meet.f7a2238f.svg"},1565:function(t,e,i){t.exports=i.p+"img/zoom.c66d5376.png"}}]);