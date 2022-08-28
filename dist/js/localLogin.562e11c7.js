"use strict";(self["webpackChunkmawed"]=self["webpackChunkmawed"]||[]).push([[415],{2691:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth_page"},[t("b-container",[t("b-navbar",{staticClass:"app-navbar p-0"},[t("b-navbar-brand",{attrs:{to:"/"}},[t("Logo")],1)],1),t("b-card",{staticClass:"auth_card border-0 mx-auto",attrs:{"no-body":""}},[t("h4",{staticClass:"mb-5 text-center"},[e._v(e._s(e.$t("login")))]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:e.$t("email"),"label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email"},model:{value:e.login.email,callback:function(t){e.$set(e.login,"email",t)},expression:"login.email"}})],1),t("b-form-group",{attrs:{label:e.$t("password"),"label-for":"password"}},[t("div",{staticClass:"password_wrapper"},[t("b-form-input",{ref:"password",class:{is_invalid:e.validateState("password")},attrs:{id:"password",type:e.passwordType},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}}),t("span",{staticClass:"icon_show_password",class:{show:e.isPasswordShown},on:{click:function(t){return t.preventDefault(),e.showPassword.apply(null,arguments)}}},[t("b-icon",{attrs:{icon:"eye",scale:"1.2"}})],1)],1)]),t("router-link",{staticClass:"text-decoration-none mb-3 d-inline-block fs-sm mt-3",attrs:{to:"/forget"}},[e._v(e._s(e.$t("forgetPassword")))]),t("b-btn",{attrs:{type:"submit",variant:"primary",block:""}},[e._v(e._s(e.$t("login")))])],1),t("div",{staticClass:"auth_card_footer text-decoration-none fs-sm text-center"},[t("div",{staticClass:"mb-4 mt-5"},[t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/login"}},[e._v(e._s(e.$t("loginWithCalendarProvider")))])],1),t("div",{staticClass:"my-4"},[t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("donNotHanveAnAccount"))+" ")]),t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/signup"}},[e._v(e._s(e.$t("signup")))])],1)])],1)],1)],1)},o=[],a=r(7014),u=r(4659),i=r(5795),f={components:{Logo:a.Z},mixins:[u.oE],data(){return{login:{email:"",password:""},passwordType:"password",errors:{}}},validations:{login:{email:{required:i.C1,email:i.Do},password:{required:i.C1,minLength:(0,i.Ei)(8),maxLength:(0,i.BS)(20)}}},computed:{isPasswordShown(){return"text"===this.passwordType}},methods:{showPassword(){this.passwordType="password"===this.passwordType?"text":"password"},submit(){this.$v.$touch(),this.$v.$invalid||console.log(this.login)},validateState(e){return this.$v.login[e].$dirty&&this.$v.login[e].$invalid}}},l=f,s=r(1001),d=(0,s.Z)(l,n,o,!1,null,null,null),c=d.exports},4689:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=o},3331:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=o},7673:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=o},450:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=o},4111:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=o(r(8751));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=i;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=l},3107:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=o},184:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,a=(0,n.regex)("email",o);t["default"]=a},5795:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"vX",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"BS",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"PW",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"uv",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"uR",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"CF",{enumerable:!0,get:function(){return v.default}});var o=A(r(4689)),a=A(r(3331)),u=A(r(8603)),i=A(r(450)),f=A(r(184)),l=A(r(2632)),s=A(r(837)),d=A(r(5136)),c=A(r(3795)),p=A(r(367)),v=A(r(2035)),y=A(r(310)),b=A(r(8612)),m=A(r(2009)),_=A(r(5208)),g=A(r(7673)),h=A(r(7850)),P=A(r(9935)),w=A(r(3134)),x=A(r(719)),O=A(r(3107)),j=M(r(4111));function $(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return($=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=$(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(o,u,i):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}function A(e){return e&&e.__esModule?e:{default:e}}},719:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=o},2632:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t["default"]=o;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},837:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t["default"]=o;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5136:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=o},3134:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=o},3795:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=o},9935:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=o},7850:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=o},8603:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=o},5208:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=o},367:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=o},2035:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=o},310:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=o},8612:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=o},2009:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),o=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",o);t["default"]=a},8751:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_API_URL:"https://soman-oman.com/api/v1",VUE_APP_BASE_URL:"https://soman-oman.com",BASE_URL:"/"}.BUILD?r(9886).R:r(7801).withParams,o=n;t["default"]=o},9886:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var o="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},a=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},u=o.vuelidate?o.vuelidate.withParams:a;t.R=u}}]);
//# sourceMappingURL=localLogin.562e11c7.js.map