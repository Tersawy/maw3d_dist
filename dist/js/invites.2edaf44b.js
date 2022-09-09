"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[61],{6106:function(t,e,i){i.d(e,{Z:function(){return f}});var s=function(){var t=this,e=t._self._c;return t.invite.inviteID?e("b-card",{staticClass:"rounded-lg h-100",attrs:{"body-class":"pt-2 px-2 pb-2 pb-md-0"}},[e("div",{staticClass:"link-card pt-1 px-1 pb-1 pb-md-0 h-100 d-flex flex-column"},[e("div",{staticClass:"link-card-header d-flex align-items-center justify-content-between"},[e("div",{staticClass:"text-truncate"},[t.isOneOnMany?e("b-icon",{staticClass:"text-primary",attrs:{icon:"people","font-scale":"1.5"}}):e("b-icon",{staticClass:"text-primary",attrs:{icon:"person","font-scale":"1.5"}}),e("strong",{staticClass:"fs-sm mx-2"},[t._v(t._s(t.invite.name))])],1),e("div",{staticClass:"d-flex align-items-center"},[t.invite.imageInvite?e("div",[e("b-icon",{staticStyle:{color:"#bf7b2780"},attrs:{icon:"card-image","font-scale":"1.1",id:t.invite.inviteID.toString()}}),e("LinkImageTooltip",{attrs:{image:t.invite.imageInvite,target:t.invite.inviteID.toString()}})],1):t._e(),e("div",{staticClass:"d-block d-md-none"},[e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon ml-2",attrs:{title:t.$t("moreActions")}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}],null,!1,1899824767)},[t.isOneOnMany?t._e():e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"person-plus",width:"1em","font-scale":"1.4"}}),e("span",[t._v(t._s(t.$t("createPersonalizedInvite")))])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"},on:{click:t.copyLink}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"link",width:"1em","font-scale":"1.4"}}),e("span",[t._v(t._s(t.$t("copyLink")))])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3",to:{name:"editLinkIndexForm",params:{inviteId:t.invite.inviteID}}}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"pencil",width:"1em"}}),e("span",[t._v(t._s(t.$t("edit")))])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"files",width:"1em"}}),e("span",[t._v(t._s(t.$t("clone")))])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center",on:{click:t.onDelete}},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"trash",width:"1em"}}),e("span",[t._v(t._s(t.$t("delete")))])],1)])],1)],1)])]),e("div",{staticClass:"link-card-body ml-3 pl-2 fs-sm text-muted"},[e("div",{staticClass:"voted my-1"},[t._v(t._s(t.durationTxt))]),e("div",{staticClass:"my-1"},[t._v(t._s(t._f("toCapitalize")(t.locationName)))])]),e("div",{staticClass:"link-card-footer mt-auto py-3 d-none d-md-flex justify-content-end"},[t.isOneOnMany?t._e():e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon mx-2",attrs:{title:t.$t("createPersonalizedInvite")}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"person-plus","font-scale":"1.3"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon mx-2",attrs:{title:t.$t("copyLink")},on:{click:t.copyLink}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"link","font-scale":"1.8"}})],1),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon mx-2",attrs:{title:t.$t("edit")},on:{click:function(e){return t.$router.push({name:"editLinkIndexForm",params:{inviteId:t.invite.inviteID}})}}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"pencil","font-scale":"1.3"}})],1),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none p-0 box-shadow-none",right:"","no-caret":"","menu-class":"p-0 shadow border-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn_icon ml-2",attrs:{title:t.$t("moreActions")}},[e("b-icon",{staticClass:"text-muted",attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)]},proxy:!0}],null,!1,1899824767)},[e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"files",width:"1em"}}),e("span",[t._v(t._s(t.$t("clone")))])],1)]),e("b-dropdown-item",{attrs:{"link-class":"p-3"}},[e("div",{staticClass:"d-flex align-items-center",on:{click:t.onDelete}},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"trash",width:"1em"}}),e("span",[t._v(t._s(t.$t("delete")))])],1)])],1)],1)])]):t._e()},a=[],n=function(){var t=this,e=t._self._c;return e("b-tooltip",{attrs:{target:t.target,triggers:"hover","custom-class":"link-image-tooltip","no-fade":""}},[e("img",{staticClass:"rounded",attrs:{src:t._image,width:"100%",height:"100%"}})])},r=[],o={props:{image:{type:String,required:!0},target:{type:String,required:!0}},computed:{_image(){return this.image?/https:\/[A-z0-9]/.test(this.image)?"https://"+this.image.slice(7):this.image:""}}},l=o,c=i(1001),d=(0,c.Z)(l,n,r,!1,null,null,null),p=d.exports,u=i(3673),m={components:{LinkImageTooltip:p},props:{invite:{type:Object,required:!0}},computed:{isOneOnMany(){return"oneOnMany"==this.invite.type},durationTxt(){let t=this.invite.duration;if(t<=30)return"30 min";let e=t/60,i=t%60;return 0==i?`${e} hr`:`${e.toString().split(".")[0]} hr ${i} min`},locationName(){let t=this.invite.location[0];if(!t?.type)return"";if("custom"==t.type)return t.text;let e=this.$store.state.invites.locationOptions.find((e=>e.type==t.type));return e?.name||""}},methods:{onDelete(){this.$emit("onDelete",this.invite)},copyLink(){let t=this.invite.url?.trim(""),e="https://soman-oman.com";e+=t?`/${this.$me.username}/${t}`:`/i/${this.invite.inviteID}`,(0,u.v)(e).then((()=>{this.$bvToast.toast(this.$t("copiedLinkToClipboard"),{noCloseButton:!0,toaster:"b-toaster-bottom-left",toastClass:"w-max-content px-4 bg-dark text-white"})}))}}},v=m,h=(0,c.Z)(v,s,a,!1,null,null,null),f=h.exports},6939:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-end"},[e("div",{staticClass:"mx-2 fs-sm"},[t._v(t._s(t.paginateFrom)+"-"+t._s(t.paginateTo)+" of "+t._s(t.total))]),e("b-pagination",{staticClass:"custom_pagination",attrs:{"hide-goto-end-buttons":"","total-rows":t.total,"per-page":t.perPage},scopedSlots:t._u([{key:"prev-text",fn:function(){return[t._v(" < ")]},proxy:!0},{key:"next-text",fn:function(){return[t._v(" > ")]},proxy:!0}]),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},a=[],n={props:{currentPage:{type:Number,default:1},total:{type:Number,default:1},perPage:{type:Number,default:1}},computed:{page:{get(){return this.currentPage},set(t){this.$emit("update:currentPage",t)}},paginateTo(){let t=this.currentPage*this.perPage;return t>this.total&&(t=this.total),t},paginateFrom(){return(this.currentPage-1)*this.perPage+1}}},r=n,o=i(1001),l=(0,o.Z)(r,s,a,!1,null,null,null),c=l.exports},6938:function(t,e,i){i.d(e,{Z:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("b-modal",{ref:t.id,attrs:{id:t.id,"hide-footer":"","hide-header":"","no-fade":"","no-close-on-esc":t.isBusy,"no-close-on-backdrop":t.isBusy,size:"md",centered:""}},[e("div",{staticClass:"text-center py-4 px-2"},[e("div",{staticClass:"text-danger pt-3 pb-4"},[e("TrashIcon",{staticStyle:{cursor:"auto"},attrs:{width:"80px",height:"80px"}})],1),e("h2",{staticClass:"delete-msg text-primary my-3"},[t._v(t._s(t.$t("actions.deleteMsg",{field:t.field})))]),e("p",{staticClass:"text-muted mb-4"},[t._v(t._s(t.$t("actions.cannotBeDone")))]),e("div",{staticClass:"d-flex text-center"},[e("b-btn",{ref:"cancelBtn",staticClass:"w-50 mr-3",attrs:{variant:"outline-primary",disabled:t.isBusy},on:{click:t.cancel}},[t._v(" "+t._s(t.$t("actions.noCancel"))+" ")]),e("b-btn",{staticClass:"w-50 d-flex align-items-center justify-content-center",attrs:{variant:"danger",disabled:t.isBusy},on:{click:t.ok}},[e("span",[t._v(" "+t._s(t.$t("actions.yesDelete"))+" ")]),t.isBusy?e("b-spinner",{staticClass:"ml-2",attrs:{small:""}}):t._e()],1)],1)])])},a=[],n=function(){var t=this,e=t._self._c;return e("svg",t._g({staticStyle:{display:"inline-block",overflow:"visible","vertical-align":"-0.15rem",outline:"none",cursor:"pointer"},style:{transform:`scale(${t.scale})`},attrs:{viewBox:"0 0 16 16",width:t.width,height:t.height,fill:t.color,xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("g",{attrs:{transform:"translate(8 8) scale(1.5 1.5) translate(-8 -8)"}},[e("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])])},r=[],o={props:{width:{type:String,default:"16px"},height:{type:String,default:"16px"},color:{type:String,default:"currentColor"},scale:{type:[String,Number],default:"1"}}},l=o,c=i(1001),d=(0,c.Z)(l,n,r,!1,null,null,null),p=d.exports;let u=t=>new Promise((e=>setTimeout(e,t)));var m={components:{TrashIcon:p},props:{field:{type:String,default:"field"}},data(){return{id:"deleteModal_",isBusy:!1,bridge:null}},created(){this.id=this.id+this._uid},methods:{open(t){this.bridge=t,this.$nextTick((async()=>{this.$bvModal.show(this.id),await u(50),this.popUpAnimation(),this.$refs.cancelBtn.focus()}))},close(){this.bridge=null,this.setBusy(!1),this.$nextTick((()=>this.$bvModal.hide(this.id)))},cancel(){this.$emit("cancel",this.bridge),this.close()},setBusy(t){this.isBusy=!!t},ok(){this.$emit("ok",this.bridge)},async popUpAnimation(t){t&&t.preventDefault();let e=this.$refs[this.id].$refs.content;e.style.transition="transform 0.2s ease",e.style.transform="scale(0.9)",await u(100),e.style.transform="none",await u(100),e.style.transform="scale(0.9)",await u(100),e.style.transform="none"}}},v=m,h=(0,c.Z)(v,s,a,!1,null,null,null),f=h.exports},7611:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"invites"},[e("b-container",[e("div",{staticClass:"header mt-4"},[e("div",{staticClass:"h3 font-weight-normal"},[t._v("My Links")])]),e("b-overlay",{attrs:{show:t.isLoading,variant:"white","spinner-variant":"primary","no-fade":"",opacity:"1"}},[e("div",{staticClass:"mt-5"},[e("div",[e("b-btn",{class:`filter_btn ${!!t.filters.excludeExpired&&"active"} d-flex align-items-center`,on:{click:function(e){t.filters.excludeExpired=!t.filters.excludeExpired}}},[t.filters.excludeExpired?e("b-icon",{staticClass:"mr-2",attrs:{icon:"check2",variant:"primary",scale:"1.2"}}):e("b-iconstack",{attrs:{"font-scale":"1.4"}},[e("b-icon",{attrs:{stacked:"",icon:"slash",variant:"primary",scale:"1.5"}}),e("b-icon",{attrs:{stacked:"",icon:"circle",variant:"primary"}})],1),e("div",{staticClass:"mx-2"},[t._v("Exclude expired")])],1)],1),e("div",{staticClass:"invites-body pt-4"},[e("b-row",{attrs:{cols:"1","cols-md":"2","cols-lg":"3"}},t._l(t.invites,(function(i){return e("b-col",{key:i.id,staticClass:"mb-4 h-auto"},[e("LinkInvite",{attrs:{invite:i},on:{onDelete:t.openDeleteInviteModal}})],1)})),1)],1),e("Paginate",{attrs:{perPage:t.perPage,currentPage:t.currentPage,total:t.invitesTotal},on:{"update:perPage":function(e){t.perPage=e},"update:per-page":function(e){t.perPage=e},"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])],1),e("DeleteModal",{ref:"deleteModal",attrs:{field:t.$t("theLink")},on:{ok:t.confirmDelete}})],1)},a=[],n=i(6106),r=i(6939),o=i(6938),l=i(2003),c={components:{LinkInvite:n.Z,Paginate:r.Z,DeleteModal:o.Z},data(){return{filters:{excludeExpired:!1},perPage:10,currentPage:1,isLoading:!1}},async beforeRouteEnter(t,e,i){l.Z.commit("setAppLoading",!0);try{await l.Z.dispatch("getInvites")}finally{l.Z.commit("setAppLoading",!1),i()}},watch:{perPage(){this.getInvite()},currentPage(){this.getInvite()},"filters.excludeExpired"(){this.getInvite()}},computed:{invites(){return this.$store.getters.invites},invitesTotal(){return this.$store.state.invites.total}},methods:{async getInvite(){this.isLoading=!0;let t=this.filters.excludeExpired?"exclude":"include",e=`?perPage=${this.perPage}&page=${this.currentPage}&expired=${t}`;try{await this.$store.dispatch("getInvites",e)}finally{this.isLoading=!1}},openDeleteInviteModal(t){this.$refs.deleteModal.open(t)},async confirmDelete(t){this.$refs.deleteModal.setBusy(!0);try{await this.$store.dispatch("deleteInvite",t.inviteID),this.$store.state.invites.total>6&&(1!=this.page?this.page=1:await this.getInvite())}finally{this.$refs.deleteModal.close()}}}},d=c,p=i(1001),u=(0,p.Z)(d,s,a,!1,null,null,null),m=u.exports}}]);