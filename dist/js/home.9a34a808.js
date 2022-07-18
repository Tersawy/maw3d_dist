"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[177],{1238:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("b-tooltip",{attrs:{target:t.target,triggers:"hover","custom-class":"link-image-tooltip","no-fade":""}},[e("img",{staticClass:"rounded",attrs:{src:t.image,width:"100%",height:"100%"}})])},n=[],a={props:{image:{type:String,required:!0},target:{type:String,required:!0}}},r=a,o=i(1001),l=(0,o.Z)(r,s,n,!1,null,null,null),c=l.exports},86:function(t,e,i){i.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"rounded-lg h-100",attrs:{"body-class":"pt-2 px-2 pb-2 pb-md-0"}},[e("div",{staticClass:"link-card pt-1 px-1 pb-1 pb-md-0 h-100 d-flex flex-column"},[e("div",{staticClass:"link-card-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"text-truncate"},[t.isOneOnMany?e("b-icon",{staticClass:"text-primary mr-2",attrs:{icon:"people","font-scale":"1.5"}}):e("b-icon",{staticClass:"text-primary mr-2",attrs:{icon:"person","font-scale":"1.5"}}),e("strong",{staticClass:"fs-sm"},[t._v(t._s(t.invite.name))])],1),e("div",{staticClass:"d-flex align-items-center"},[t.invite.image?e("div",[e("b-icon",{staticStyle:{color:"#bf7b2780"},attrs:{icon:"card-image","font-scale":"1.1",id:t.invite.id.toString()}}),e("LinkImageTooltip",{attrs:{image:t.invite.image,target:t.invite.id.toString()}})],1):t._e(),e("div",{staticClass:"d-block d-md-none"},[e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn ml-2 rounded-circle d-flex justify-content-center align-items-center",attrs:{title:"More actions"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}])},[t.isOneOnMany?t._e():e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"person-plus",width:"1em","font-scale":"1.4"}}),e("span",[t._v("Create personalized invite")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"link",width:"1em","font-scale":"1.4"}}),e("span",[t._v("Copy Link")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"envelope",width:"1em"}}),e("span",[t._v("Copy times to email")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"code",width:"1em","font-scale":"1.6"}}),e("span",[t._v("Embed")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"pencil",width:"1em"}}),e("span",[t._v("Edit")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"files",width:"1em"}}),e("span",[t._v("Clone")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"trash",width:"1em"}}),e("span",[t._v("Delete")])],1)])],1)],1)])]),e("div",{staticClass:"link-card-body ml-3 pl-2 fs-sm text-muted"},[e("div",{staticClass:"voted my-1"},[t._v(t._s(t.durationTxt))]),e("div",{staticClass:"my-1"},[t._v(t._s(t._f("toCapitalize")(t.location)))])]),e("div",{staticClass:"link-card-footer mt-auto py-3 d-none d-md-flex justify-content-end"},[t.isOneOnMany?t._e():e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"Create personalized invite"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"person-plus","font-scale":"1.3"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"Copy Link"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"link","font-scale":"1.8"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"Edit"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"pencil","font-scale":"1.3"}})],1),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn ml-2 rounded-circle d-flex justify-content-center align-items-center",attrs:{title:"More actions"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}])},[e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"envelope",width:"1em"}}),e("span",[t._v("Copy times to email")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"code",width:"1em","font-scale":"1.6"}}),e("span",[t._v("Embed")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"files",width:"1em"}}),e("span",[t._v("Clone")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"trash",width:"1em"}}),e("span",[t._v("Delete")])],1)])],1)],1)])])},n=[],a=i(1238),r={components:{LinkImageTooltip:a.Z},props:{invite:{type:Object,required:!0}},computed:{isOneOnMany(){return"oneOnMany"==this.invite.type},durationTxt(){let t=this.invite.duration;if(t<=30)return"30 min";let e=t/60,i=t%60;return 0==i?`${e} hr`:`${e.toString().split(".")[0]} hr ${i} min`},location(){let t=this.invite.location?.name;return t?"google"==t?"Google Meet":t:""}}},o=r,l=i(1001),c=(0,l.Z)(o,s,n,!1,null,null,null),d=c.exports},7705:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("b-container",[e("div",{staticClass:"header mt-4 d-flex w-100 align-items-center justify-content-between"},[e("div",[e("h5",{staticClass:"text-muted"},[t._v("Haytham Saqer")]),e("a",{staticClass:"fs-sm text-decoration-none",attrs:{href:"https://zcal.co/tersawy",target:"_blank"}},[e("span",[t._v("https://mawed.net/haytham")]),e("b-icon",{staticClass:"ml-1",attrs:{icon:"box-arrow-up-right"}})],1)]),e("router-link",{staticClass:"btn-add-link rounded-pill shadow-lg d-flex align-items-center justify-content-center btn btn-lg",attrs:{to:"/create"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"plus",scale:"1.7",variant:"primary"}}),e("span",{staticClass:"fs-md"},[t._v(" New Link ")])],1)],1),e("div",{staticClass:"invites mt-5"},[e("div",{staticClass:"invites-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("h4",{staticClass:"m-0"},[t._v("Invites")]),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"These invites are available for booking new appointments."}},[e("b-icon",{staticClass:"fs-sm text-muted mx-1",attrs:{icon:"info-circle"}})],1)]),e("router-link",{staticClass:"fs-sm text-decoration-none",attrs:{to:"/invites"}},[t._v("View all invites")])],1),e("div",{staticClass:"invites-body pt-4"},[e("b-row",{attrs:{cols:"1","cols-md":"2","cols-lg":"3"}},t._l(t.invites,(function(t){return e("b-col",{key:t.id,staticClass:"mb-4 h-auto"},[e("LinkInvite",{attrs:{invite:t}})],1)})),1)],1)]),e("div",{staticClass:"event mt-5"},[e("div",{staticClass:"event-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("h4",{staticClass:"m-0"},[t._v("Upcoming Maw3d events")]),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"These Maw3d events are coming up soon."}},[e("b-icon",{staticClass:"fs-sm text-muted mx-1",attrs:{icon:"info-circle"}})],1)]),e("router-link",{staticClass:"fs-sm text-decoration-none",attrs:{to:"/events"}},[t._v("View all events")])],1),e("div",{staticClass:"event-body pt-4"},[t.events.length?e("b-row",{attrs:{cols:"1","cols-md":"2","cols-lg":"3"}},t._l(t.events,(function(t){return e("b-col",{key:t.id,staticClass:"mb-4 h-auto"},[e("LinkEvent",{attrs:{event:t}})],1)})),1):e("p",{staticClass:"lead text-muted fs-default"},[t._v(" You don't have any upcoming Maw3d events. Share your scheduling links with guests. As events are scheduled, they'll appear here. ")])],1)])])],1)},n=[],a=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"rounded-lg h-100",attrs:{"body-class":"pt-2 px-2 pb-2 pb-md-0"}},[e("div",{staticClass:"link-card pt-1 px-1 pb-1 pb-md-0 h-100 d-flex flex-column"},[e("div",{staticClass:"link-card-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"text-truncate"},[e("b-icon",{staticClass:"fs-default text-primary mr-2",attrs:{icon:"calendar2-week"}}),e("strong",{staticClass:"fs-sm"},[t._v(t._s(t.poll.name))])],1),e("div",{staticClass:"d-flex align-items-center"},[t.poll.image?e("div",[e("b-icon",{staticStyle:{color:"#bf7b2780"},attrs:{icon:"card-image","font-scale":"1.1",id:t.poll.id.toString()}}),e("LinkImageTooltip",{attrs:{image:t.poll.image,target:t.poll.id.toString()}})],1):t._e(),e("div",{staticClass:"d-block d-md-none"},[e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn ml-2 rounded-circle d-flex justify-content-center align-items-center",attrs:{title:"More actions"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}])},[e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"link",width:"1em","font-scale":"1.4"}}),e("span",[t._v("Copy Link")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"calendar2-check",width:"1em"}}),e("span",[t._v("View Poll Status")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"pencil",width:"1em"}}),e("span",[t._v("Edit")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"files",width:"1em"}}),e("span",[t._v("Clone")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"trash",width:"1em"}}),e("span",[t._v("Delete")])],1)])],1)],1)])]),e("div",{staticClass:"link-body ml-3 pl-2 fs-sm text-muted"},[e("div",{staticClass:"voted my-1"},[t._v(t._s(t.voted)+" People voted")]),e("span",{class:`d-inline-block my-1 remaining rounded ${t.remaining.variant}`},[t._v(t._s(t.remaining.text))])]),e("div",{staticClass:"link-card-footer mt-auto py-3 d-none d-md-flex justify-content-end"},[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"Copy Link"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"link","font-scale":"1.8"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"View Poll Status"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"calendar2-check","font-scale":"1.3"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"Edit"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"pencil","font-scale":"1.3"}})],1),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn ml-2 rounded-circle d-flex justify-content-center align-items-center",attrs:{title:"More actions"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}])},[e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"files",width:"1em"}}),e("span",[t._v("Clone")])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"trash",width:"1em"}}),e("span",[t._v("Delete")])],1)])],1)],1)])])},r=[],o=i(1238),l={components:{LinkImageTooltip:o.Z},props:{poll:{type:Object,required:!0}},computed:{voted(){return this.poll.responders.length},remaining(){let t={variant:"success",text:"Open indefinitely"};if(-1==this.poll.votingWindow)return t;let e=new Date(this.poll.createdAt).getTime(),i=Date.now(),s=e+60*this.poll.votingWindow*1e3,n=s-i,a=n/1e3/60/60;if(a<1)return t.text="Voting closed",t.variant="danger",t;if(a=Math.round(a),1==a)return t.text="An hour Remaining",t.variant="danger",t;if(a<24)return t.text=`${a.toFixed(0)} hours Remaining`,t.variant="danger",t;let r=a/24;return r=Math.round(r),1==r?(t.text="A day Remaining",t.variant="danger",t):(t.text=`${r.toFixed(0)} days Remaining`,t)}}},c=l,d=i(1001),m=(0,d.Z)(c,a,r,!1,null,"f36da8e4",null),v=m.exports,p=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"rounded-lg h-100",attrs:{"body-class":"pt-2 px-2 pb-2 pb-md-0"}},[e("div",{staticClass:"link-card pt-1 px-1 pb-1 pb-md-0 h-100 d-flex flex-column"},[e("div",{staticClass:"link-card-header d-flex w-100 align-items-center justify-content-between"},[e("div",{staticClass:"text-truncate"},[e("b-icon",{staticClass:"text-primary mr-2",attrs:{icon:"calendar2-event","font-scale":"1.4"}}),e("router-link",{staticClass:"text-decoration-none text-dark",attrs:{to:{name:"event",params:{id:t.event.id}}}},[e("strong",{staticClass:"fs-sm"},[t._v(t._s(t.eventTitle))])])],1),e("div",{staticClass:"d-block d-md-none"},[e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn ml-2 rounded-circle d-flex justify-content-center align-items-center",attrs:{title:"More actions"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}])},[e("b-dropdown-item",{attrs:{"link-class":"p-3",to:{name:"event",params:{id:t.event.id}}}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"calendar2-date",width:"1em","font-scale":"1.4"}}),e("span",[t._v("View event details")])],1)]),t.isOneOnOne?e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"calendar2-event",width:"1em","font-scale":"1.4"}}),e("span",[t._v("Reschedule")])],1)]):t._e(),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"x-circle",width:"1em"}}),e("span",[t._v("Cancel")])],1)])],1)],1)]),e("div",{staticClass:"link-card-body ml-3 pl-2 fs-sm text-muted"},[e("div",{staticClass:"voted my-1"},[t._v(t._s(t.eventDate))]),e("div",{staticClass:"my-1"},[t._v(t._s(t.eventFrom)+" - "+t._s(t.eventTo))])]),e("div",{staticClass:"link-card-footer mt-auto py-3 d-none d-md-flex justify-content-end"},[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mx-2",attrs:{title:"View event details"}},[e("router-link",{staticClass:"text-decoration-none text-dark",attrs:{to:{name:"event",params:{id:t.event.id}}}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"calendar2-date","font-scale":"1.3"}})],1)],1),t.isOneOnOne?e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center mr-2",attrs:{title:"Reschedule"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"calendar2-event","font-scale":"1.5"}})],1):t._e(),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"link-card-btn rounded-circle d-flex justify-content-center align-items-center",attrs:{title:"Cancel"}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"x-circle","font-scale":"1.5"}})],1)])])])},u=[],f={props:{event:{type:Object,required:!0}},computed:{eventDate(){let t=new Date(this.event.startDate);return t=t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),t},eventFrom(){let t=new Date(this.event.startDate);return t=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),t.toLowerCase()},eventTo(){let t=60*this.event.duration*1e3,e=new Date(this.event.startDate);return e=e.getTime()+t,e=new Date(e),e=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),e.toLowerCase()},isOneOnOne(){return"oneOnOne"==this.event.invite.type},eventTitle(){if(this.isOneOnOne){let t=this.event.invitees.find((t=>!t.isGuest)),e=this.event.invite.organizer.firstName+" "+this.event.invite.organizer.lastName;return t.name+" and "+e}return this.event.invite.name}}},b=f,h=(0,d.Z)(b,p,u,!1,null,null,null),C=h.exports,g=i(86),x={components:{LinkPoll:v,LinkEvent:C,LinkInvite:g.Z},computed:{polls(){return this.$store.getters.polls},invites(){return this.$store.getters.invites},events(){return this.$store.getters.events}}},w=x,k=(0,d.Z)(w,s,n,!1,null,null,null),y=k.exports}}]);
//# sourceMappingURL=home.9a34a808.js.map