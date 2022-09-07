"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[963],{1870:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"event"},[e("b-container",[e("div",{staticClass:"event_header d-flex align-items-center justify-content-between mt-4"},[e("div",{staticClass:"h4"},[t._v(t._s(t.eventName))]),e("div",{staticClass:"d-flex"},[t.isOneOnOne?e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon mr-2",attrs:{title:"Reschedule"}},[e("b-icon",{attrs:{icon:"calendar2-event","font-scale":"1.4"}})],1):t._e(),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon mr-2",attrs:{title:"Cancel"}},[e("b-icon",{attrs:{icon:"x-circle","font-scale":"1.4"}})],1)])]),e("div",{staticClass:"event_body mt-5"},[e("div",{staticClass:"field_title"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"link",scale:"1.2"}}),e("span",{staticClass:"title_text"},[t._v("LINK")])],1),e("div",{staticClass:"body mt-2"},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"home"}}},[t._v(t._s(t.event.invite&&t.event.invite.name))])],1)]),e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"calendar2-event",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v("DATE")])],1),e("div",{staticClass:"body mt-2"},[e("span",{staticClass:"text-success font-weight-600"},[t._v(t._s(t.startDate))])])]),t.locationName?e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"geo-alt",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v("LOCATION")])],1),e("div",{staticClass:"body mt-2 fs-md"},[e("span",[t._v(t._s(t._f("toCapitalize")(t.locationName)))]),t.onlineMeeting?[e("span",[t._v(" - ")]),e("a",{staticClass:"text-decoration-none",attrs:{href:t.onlineMeeting.url}},[t._v("Join Meeting")])]:t._e()],2)]):t._e(),t.isOneOnOne?[e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"person",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v("INVITEE")])],1),e("div",{staticClass:"body mt-2"},[e("div",[t._v(t._s(t.invitee.name))]),e("div",{staticClass:"text-muted mt-1"},[t._v(t._s(t.invitee.email))])])]),t.guests.length?e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"people",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v("GUESTS")])],1),e("div",{staticClass:"body mt-2"},t._l(t.guests,(function(i,s){return e("div",{key:s},[e("div",{staticClass:"text-muted"},[t._v(t._s(i.email))])])})),0)]):t._e()]:[e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"grid3x2",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v("ATTENDANCE")])],1),e("div",{staticClass:"body mt-2"},[e("span",{},[t._v(t._s(t.event.invitees.length)+" of "+t._s(t.event.invite.maxInvitees)+" spots filled")])])]),e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"people",scale:"0.9"}}),e("span",{staticClass:"title_text"},[t._v("INVITEES")])],1),e("div",{staticClass:"body mt-2"},t._l(t.event.invitees,(function(i,s){return e("div",{key:s,on:{click:function(e){return t.showInviteeData(i)}}},[e("span",{staticClass:"text-primary cursor-pointer"},[t._v(" "+t._s(i.name)+" ")])])})),0)])]],2)]),e("invitee-modal",{attrs:{invitee:t.inviteeData},on:{"update:invitee":function(e){t.inviteeData=e}}})],1)},a=[],n=function(){var t=this,e=t._self._c;return t.invitee?e("b-modal",{attrs:{id:"InviteeModal","hide-footer":"","hide-header":""},on:{hidden:t.reset},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"header d-flex justify-content-between align-items-center"},[e("span",{staticClass:"fs-lg"},[t._v(t._s(t.invitee.name))]),e("div",{staticClass:"d-flex"},[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon btn_icon_md mr-2",attrs:{title:"Reschedule Invitee"}},[e("BIcon",{attrs:{icon:"calendar2-event","font-scale":"1.4"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],staticClass:"btn_icon btn_icon_md mr-2",attrs:{title:"Remove Invitee"}},[e("BIcon",{attrs:{icon:"x-circle","font-scale":"1.4"}})],1),e("BIcon",{staticClass:"btn_icon btn_icon_md text-muted",attrs:{icon:"x",scale:"0.8"},on:{click:t.reset}})],1)]),e("div",{staticClass:"body mb-3"},[e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"at",scale:"1.1"}}),e("span",{staticClass:"title_text fs-md"},[t._v("INVITEE EMAIL")])],1),e("div",{staticClass:"body mt-2"},[e("div",{staticClass:"mt-1 fs-sm"},[t._v(t._s(t.invitee.email))])])]),t.invitee.customQuestions&&t.invitee.customQuestions.length?e("div",{staticClass:"field_title mt-4"},[e("div",{staticClass:"title"},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"box-arrow-in-right",scale:"1.1"}}),e("span",{staticClass:"title_text fs-md"},[t._v("CUSTOM QUESTIONS")])],1),e("div",{staticClass:"body mt-2"},t._l(t.invitee.customQuestions,(function(i,s){return e("div",{key:s,staticClass:"mb-2"},[e("div",{staticClass:"text-muted"},[t._v(t._s(i.question))]),e("div",{staticClass:"mt-1"},[t._v(t._s(i.answer))])])})),0)]):t._e()])]},proxy:!0}],null,!1,4151005945)}):t._e()},l=[],o={props:{invitee:Object},methods:{reset(){this.$emit("update:invitee",null)}}},c=o,v=i(1001),r=(0,v.Z)(c,n,l,!1,null,null,null),d=r.exports,m={components:{InviteeModal:d},data(){return{inviteeData:null}},mounted(){this.$store.dispatch("getEvent",this.$route.params.id),this.$bvModal.show("InviteeModal")},watch:{inviteeData(t){t||this.$bvModal.hide("InviteeModal")}},computed:{event(){return this.$store.state.events.one},isOneOnOne(){return"oneOnOne"==this.event.invite?.type},locationName(){return this.event.invite?.location?.type?"custom"==this.invite.location.name?this.invite.location.text:this.event.invite?.location?.name:""},onlineMeeting(){return this.event.onlineMeeting},invitee(){return this.event?.invitees?.find((t=>!t.isGuest))},guests(){return this.event?.invitees?.filter((t=>t.isGuest))},eventName(){let t=this.event.invite?.name;if(!t)return"";if(!this.isOneOnOne)return t;let e=this.event.invite.organizer,i=this.event.invitees.find((t=>!t.isGuest));return e=e.firstName+" "+e.lastName,i.name+" and "+e},startDate(){let t=new Date(this.event.startDate),e=t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"2-digit",hour:"numeric",minute:"numeric"}),i=new Date(t.getTime()+60*this.event.duration*1e3);return i=i.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),e+" - "+i}},methods:{showInviteeData(t){this.inviteeData=t,this.$nextTick((()=>this.$bvModal.show("InviteeModal")))}}},u=m,_=(0,v.Z)(u,s,a,!1,null,null,null),C=_.exports}}]);