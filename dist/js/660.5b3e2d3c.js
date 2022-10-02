"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[660],{5575:function(t,e,s){s.d(e,{Z:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"preview_invite position-fixed",class:{is_open:t.isOpen}},[e("div",{staticClass:"preview_header border-bottom"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"fs-lg"},[t._v(t._s(t.$t("preview")))]),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-2 mt-1",attrs:{title:t.$t("previewDesc")}},[e("BIcon",{staticClass:"mr-3",staticStyle:{opacity:"0.3"},attrs:{icon:"question-circle",scale:"1.2"}})],1)]),e("b-btn",{staticClass:"font-weight-500 border d-flex align-items-center px-4 py-2",attrs:{variant:"outline-dark"},on:{click:t.close}},[e("BIcon",{staticClass:"mr-2",staticStyle:{"margin-bottom":"1px"},attrs:{icon:"box-arrow-left",scale:"1"}}),t._v(" "+t._s(t.$t("exitPreview"))+" ")],1)],1),e("div",{staticClass:"preview_body"},[e("b-container",{style:`max-width: ${t.availableDate?"1130px":"880px"} !important`},[e("b-card",{staticStyle:{"border-radius":"10px"},attrs:{"body-class":"pt-5 pb-2 px-3 px-lg-5","img-src":t.inviteImage,"img-top":"","img-height":"250px"}},[e("b-row",[e("b-col",{attrs:{cols:"12",lg:"4"}},[e("div",{staticClass:"position-relative",style:""+(t.inviteImage?"top: -7rem":"")},[e("b-avatar",{staticClass:"p-1 bg-white",attrs:{src:t.userPicture,size:"9rem"}}),e("h4",{staticClass:"mt-2 text-muted"},[t._v(t._s(t.$me.username))]),e("h3",{staticClass:"mt-2 mb-3"},[t._v(t._s(t.invite.name))]),e("div",[e("BIcon",{staticClass:"mr-2",attrs:{icon:"clock-history",scale:"1.2"}}),e("span",{staticClass:"text-muted"},[t._v(t._s(t.durationStr))])],1),t.selectedDate?e("div",{staticClass:"my-3 font-weight-500 text-success"},[e("BIcon",{staticClass:"mr-2",attrs:{icon:"calendar4-event",scale:"1.2"}}),e("span",[t._v(t._s(t.selectedDateFormat))])],1):t._e()],1)]),e("b-col",{attrs:{cols:"12",lg:"8"}},[e("div",{staticClass:"d-flex flex-column",staticStyle:{"min-height":"561px"}},[t.selectedDate?[e("span",{staticClass:"mb-5",staticStyle:{"font-size":"1.5rem"}},[t._v(t._s(t.$t("yourContactInfo")))]),e("FormInput",{directives:[{name:"vuelidate",rawName:"v-vuelidate",value:t.contact.fullName,expression:"contact.fullName"}],staticClass:"mb-5",attrs:{label:t.$t("fullName"),placeholder:t.$t("fullNamePlaceholder"),required:""},model:{value:t.contact.fullName,callback:function(e){t.$set(t.contact,"fullName",e)},expression:"contact.fullName"}}),e("FormInput",{directives:[{name:"vuelidate",rawName:"v-vuelidate",value:t.contact.email,expression:"contact.email"}],staticClass:"mb-5",attrs:{label:t.$t("email"),placeholder:t.$t("emailPlaceholder"),required:"",type:"email"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),t.contact.hasGuests?e("div",[e("label",{staticClass:"fs-sm text-muted",attrs:{for:"guestsEmail"}},[t._v(t._s(t.$t("guestsEmail")))]),e("BFormTags",{attrs:{"tag-validator":t.isValidEmail,id:"guestsEmail",placeholder:t.$t("addGuestsPlaceholder"),"invalid-tag-text":t.$t("invalidEmails"),"add-button-text":t.$t("add"),"tag-variant":"primary"},model:{value:t.contact.guests,callback:function(e){t.$set(t.contact,"guests",e)},expression:"contact.guests"}})],1):e("span",[e("b-button",{staticClass:"filter_btn active font-weight-500",attrs:{size:"sm"},on:{click:function(e){t.contact.hasGuests=!0}}},[e("BIcon",{staticClass:"mr-2",attrs:{icon:"plus-lg",scale:"0.8"}}),t._v(" "+t._s(t.$t("addGuests"))+" ")],1)],1),e("div",{staticClass:"d-flex align-items-center justify-content-end mt-auto py-3"},[e("b-button",{staticClass:"filter_btn active mr-3 font-weight-500",attrs:{size:"sm"},on:{click:function(e){t.selectedDate=null}}},[e("BIcon",{staticClass:"mr-2",attrs:{icon:""+(t.$isRtl?"chevron-right":"chevron-left"),scale:"0.8"}}),t._v(" "+t._s(t.$t("back"))+" ")],1),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.$t("scheduleMeetingDisabledTooltip")}},[e("b-button",{staticClass:"filter_btn disabled font-weight-500",attrs:{size:"sm",disabled:""}},[t._v(" "+t._s(t.$t("scheduleMeeting"))+" ")])],1)],1)]:[e("span",{staticStyle:{"font-size":"1.5rem"}},[t._v(t._s(t.$t("selectDateAndTime")))]),e("div",{staticClass:"custom_calendar mt-5"},[e("div",{staticClass:"d-flex"},[e("div",{style:""+(t.times.length?"min-width: 70%":"width:100%")},[e("date-picker",{staticClass:"border-0",attrs:{timezone:"UTC","max-date":t.maxDate,"min-date":t.minDate,"disabled-dates":{start:null,end:null},"available-dates":t.availableDates.map((t=>t.date)),"is-expanded":"","title-position":"left",locale:{id:t.$i18n.locale,firstDayOfWeek:2}},on:{"update:from-page":t.updateFromPage},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),e("div",{staticClass:"mt-5"},[e("time-zones",{ref:"timezone",staticClass:"custom_timezone",model:{value:t.timezone,callback:function(e){t.timezone=e},expression:"timezone"}})],1)],1),t.times.length?e("div",{staticClass:"times w-100"},[e("div",{staticClass:"mt-2 pt-1 mb-3 text-nowrap font-weight-500 pl-3"},[t._v(" "+t._s(t.$moment(t.date).format("dddd, MMM D"))+" ")]),e("div",{staticClass:"times_body custom_scroll px-3"},t._l(t.times,(function(s,i){return e("div",{key:i,staticClass:"btn_outline",attrs:{role:"button"},on:{click:function(e){return t.handleSelect(s.value)}}},[t._v(" "+t._s(s.text)+" ")])})),0)]):t._e()])])]],2)])],1)],1)],1)],1)])},a=[],n=s(2416),l=s.n(n),o=s(8557),r=s(9868),c=s(4165),d=s(3673),m=s(6289),u=s(4659),h=s(5795),v={components:{DatePicker:l(),TimeZones:o.Z,FormInput:r.Z},mixins:[u.oE],data(){return{isOpen:!1,date:"",month:(0,c.Z)().month(),year:(0,c.Z)().year(),timezone:c.Z.tz.guess(),selectedDate:"",contact:{fullName:"",email:"",guests:[],hasGuests:!1}}},mounted(){this.getCalendarsEvents()},validations:{contact:{fullName:{required:h.C1,minLength:(0,h.Ei)(4),maxLength:(0,h.BS)(50)},email:{required:h.C1,email:h.Do}}},computed:{invite(){return this.$store.state.invites.one},userPicture(){return(0,d.$h)(this.$me.profile?.picture)},inviteImage(){return this.invite.image instanceof File?URL.createObjectURL(this.invite.image):(0,d.$h)(this.invite.image)},calendarsEvents(){return this.$store.state.calendarsEvents},offset(){return(0,d.os)(this.invite.timezone)-(0,d.os)(this.timezone)},minDate(){return this.invite.dateRange.start.clone().add(this.offset,"m").toDate()},maxDate(){let t=this.invite.dateRange.end;if(t)return t.clone().add(this.offset,"m").toDate()},durationStr(){let t=this.invite.duration;if(t<60)return this.$moment.duration(t,"minutes").humanize();let e=Math.floor(t/60);if(t%=60,0===t)return this.$moment.duration(e,"hours").humanize();e=this.$moment.duration(e,"hours").humanize(),t=this.$moment.duration(t,"minutes").humanize();let s=this.$isRtl?" و ":" ";return e+s+t},availableDates(){let t=[],e=this.$moment().utc().startOf("date").month(this.month).year(this.year).startOf("month"),s=e.clone().endOf("month");for(let i of this.invite.availability){let a=(0,m.SA)(i.rrule),n=a.between(e.toDate(),s.toDate());for(let e of n){e=this.$moment(e).utc().add(this.offset,"m");let s=e.clone().startOf("date"),a=e.clone(),n=i.duration,l=t.find((t=>t.date.isSame(s,"date")));l||(l={date:s,intervals:[]},t.push(l));while(n>0){let e=60*a.hour()+a.minute(),i=this.invite.minimumNotice+-1*(0,d.os)(this.timezone);a.clone().isAfter(this.$moment().utc().add(i,"m"))&&(this.isReservedDate(a)||(a.isSame(s,"date")?l.intervals.push({minutes:e}):(s=a.clone(),l=t.find((t=>t.date.isSame(s,"date"))),l?l.intervals.push({minutes:e}):(l={date:s.clone().startOf("date"),intervals:[{minutes:e}]},t.push(l))))),n-=this.invite.slotIncrement,a.add(this.invite.slotIncrement,"m")}}}return t=t.filter((t=>t.intervals.length>0)),t=t.map((t=>(t.intervals.sort(((t,e)=>t.minutes-e.minutes)),t.date=t.date.toDate(),t))),t},availableDate(){return this.availableDates.find((t=>this.$moment(this.date).utc().startOf("date").isSame(this.$moment(t.date).utc().startOf("date"),"date")))},times(){if(!this.availableDate)return[];let{date:t,intervals:e}=this.availableDate;return 0==e.length?[]:(t=this.$moment(t).utc().startOf("date"),e=e.map((e=>{let s=t.clone().minute(e.minutes);return{text:s.clone().format("h:mm a"),value:s.clone().add(-1*this.offset,"m").add((0,d.os)(this.invite.timezone),"m").toDate().toISOString()}})),e)},selectedDateFormat(){let t=this.$moment(this.selectedDate).tz(this.timezone);return t=t.format("ddd, MMM D, h:mm a"),t+" "+this.$moment.tz(this.timezone).format("z")}},watch:{isOpen(t){let e=document.querySelector("body");t?(e.classList.add("preview_invite_open"),e.style.overflow="hidden"):(e.classList.remove("preview_invite_open"),e.style.overflow="auto",this.close())},date(){this.selectedDate=""},timezone(){this.date=""},month(t){this.getCalendarsEvents(t)}},methods:{open(){this.isOpen=!0},close(){this.isOpen=!1,this.date="",this.timezone=this.$moment.tz.guess(),this.contact.hasGuests=!1},getCalendarsEvents(t){t="undefined"==typeof t?this.month:t;let e=this.$moment().month(t).utc().startOf("month").toDate().toISOString(),s=this.$moment().month(t).utc().endOf("month").toDate().toISOString(),i=`?startDate=${e}&endDate=${s}&timezone=UTC`;return this.$store.dispatch("getCalendarsEvents",{query:i})},isReservedDate(t){if(!this.invite.preventConflict)return!1;let e=-1*(0,d.os)(this.timezone);for(let s of this.calendarsEvents){let i=this.$moment(s.start).utc().add(e,"m"),a=this.$moment(s.end).utc().add(e,"m");if(t.isSame(i,"minute"))return!0;if(t.isBetween(i,a))return!0;if(t.isBetween(i.clone().add(-1*this.invite.bufferBeforeEvent,"m"),i.clone().add(this.invite.bufferAfterEvent,"m")))return!0}return!1},updateFromPage(t){this.month=t.month-1,this.year=t.year},handleSelect(t){this.selectedDate=t},isValidEmail(t){let e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())}}},p=v,f=s(1001),_=(0,f.Z)(p,i,a,!1,null,null,null),b=_.exports},965:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown_select_wrapper",class:{active:t.isFoucsed||t.isShown,required:t.required,icon_left:t.$slots.icon_left,is_invalid:t.is_invalid}},[e("div",{staticClass:"icon_left"},[t._t("icon_left",null,null,{active:t.isFoucsed||t.isShown})],2),e("div",{staticClass:"dropdown_select_control"},[e("span",{staticClass:"dropdown_select_label"},[t._v(t._s(t.label))]),t.$slots.default?t._e():e("b-dropdown",{staticClass:"dropdown_select",attrs:{block:"","toggle-class":"dropdown_select_btn d-flex justify-content-between align-items-center pl-0 ","menu-class":"w-100 p-0 shadow-lg border-0",variant:"text"},on:{shown:t.shown,hidden:t.hidden},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("label",(function(){return[t.selectedOption?e("span",[t._v(t._s(t.selectedOption.text))]):t._e()]}))]},proxy:!0}],null,!0)},t._l(t.options,(function(s,i){return e("b-dropdown-item",{key:i,attrs:{"link-class":"p-3"},on:{click:function(e){return t.select(s)}}},[t._v(" "+t._s(s.text)+" ")])})),1),t._t("default")],2)])},a=[],n={props:{label:{type:String},value:{type:[String,Number]},required:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},is_invalid:{type:Boolean,default:!1}},data(){return{isFoucsed:!1,isShown:!1}},mounted(){let t=document.querySelector(".dropdown_select_btn");t&&(t.addEventListener("focus",(()=>{this.isFoucsed=!0})),t.addEventListener("blur",(()=>{this.isFoucsed=!1})))},computed:{val:{get(){return this.value},set(t){this.$emit("input",t)}},selectedOption(){return this.options.find((t=>t.value==this.value))}},methods:{shown(){this.isShown=!0},hidden(){this.isShown=!1},select(t){this.val=t.value,this.$emit("change",t.value),this.$emit("item-selected",t)}}},l=n,o=s(1001),r=(0,o.Z)(l,i,a,!1,null,null,null),c=r.exports},9276:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"virtual_input_wrapper",class:{is_active:t.is_active,has_error:t.has_error}},[t.$slots.icon_left?e("span",{staticClass:"icon_left"},[t._t("icon_left")],2):t._e(),e("div",{staticClass:"virtual_input_control"},[e("span",{staticClass:"virtual_input_label fs-sm"},[t._v(t._s(t.label))]),e("div",t._b({staticClass:"virtual_input",on:{click:function(e){return t.$emit("click")}}},"div",t.inputProps,!1),[t._t("default",(function(){return[e("span",[t._t("placeholder",(function(){return[t._v(t._s(t.placeholder))]}))],2),e("span",{staticClass:"icon_right"},[t._t("icon_right")],2)]}))],2)])])},a=[],n={props:{label:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},is_active:{type:Boolean,default:!1},has_error:{type:Boolean,default:!1},inputProps:{type:Object,default:()=>({})}}},l=n,o=s(1001),r=(0,o.Z)(l,i,a,!1,null,null,null),c=r.exports},8528:function(t,e){e["Z"]={mounted(){this.init(this.$store.state.invites.one)},computed:{isGroup(){let t=this.$route.meta.type;return t?"group"==this.$route.meta.type:"group"==this.$store.state.invites.one.type},formTitle(){return this.isGroup?this.$t(this.isEdit?"editGroupInvite":"createGroupInvite"):this.$t(this.isEdit?"editOneOnOneInvite":"createOneOnOneInvite")},isEdit(){return!!this.$route.params.inviteId},getNext(){let t=["Index","When","Options","Done"],e=t.indexOf(this.$options.name),s=t[e+1];return s?this.isEdit?{name:`editLink${s}Form`,params:{isTrusted:!0}}:{name:`${this.$route.meta.type}${s}Form`,params:{isTrusted:!0}}:null},getBack(){let t=["Index","When","Options","Done"],e=t.indexOf(this.$options.name),s=t[e-1];return s?this.isEdit?{name:`editLink${s}Form`,params:{isTrusted:!0}}:{name:`${this.$route.meta.type}${s}Form`,params:{isTrusted:!0}}:null}},methods:{init(t){for(let e in t)this.invite[e]=t[e]},preview(){this.$store.commit("setInvite",this.invite),this.$nextTick((()=>this.$refs.preview.open()))},next(){this.$v.$touch(),this.$v.$invalid||(this.$store.commit("setInvite",this.invite),this.$router.push(this.getNext))},back(){this.$store.commit("setInvite",this.invite),this.$router.push(this.getBack)}}}}}]);