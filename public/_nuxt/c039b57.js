(window.webpackJsonp=window.webpackJsonp||[]).push([[351,34],{1250:function(t,e,l){"use strict";l.r(e);l(43),l(25),l(7),l(4),l(57),l(40),l(58);var n=l(21),c=l(0),o=(l(5),l(129));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var d={layout:"admin",middleware:["admin","permission"],meta:{permission:"application_banners.index",strategy:"read"},data:function(){return{url:"/backend",application_banner:"",error:!1}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$repositories.application_banners.show(t.$route.params.id);case 2:l=e.sent,data=l.data,t.application_banner=data;case 5:case"end":return e.stop()}}),e)})))()},methods:{},mounted:function(){},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allActiveLanguages:"General/allActiveLanguages"}))},v=d,m=l(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"content-header"},[l("div",{staticClass:"row g-0"},[l("div",{staticClass:"col-sm-12 px-0"},[l("h2",{staticClass:"m-0 text-body bold"},[t._v("\n            "+t._s(this.$t("form.application_banner.view_application_banner"))+"\n          ")])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12 px-0"},[l("ol",{staticClass:"breadcrumb float-sm-right text-body"},[l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:t.localePath("/admin/application_banners")}},[t._v(t._s(this.$t("sidebar.application_banner")))])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item active"},[t._v("\n                "+t._s(this.$t("form.view"))+"\n              ")])]),t._v(" "),l("p",{staticClass:"text-body-secondary"},[t._v("\n              "+t._s(this.$t("form.application_banner.view_description"))+"\n            ")])])])])]),t._v(" "),l("section",{staticClass:"content"},[t.$fetchState.pending?l("div",[l("AdminViewLoader",{attrs:{multilangImage:!0,multilang:!0}})],1):l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"card gutter-b border-0"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"show-table mb-3"},[l("div",{staticClass:"row justify-content-end"},[l("div",{staticClass:"col-3"},[l("label",{attrs:{for:"input-live form-label"}},[t._v(t._s(this.$t("form.application_banner.website_url.label")))])]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.application_banner.website_url))])]),t._v(" "),l("div",{staticClass:"col-3"},[l("label",{staticClass:"label form-label pe-4"},[t._v("\n                    "+t._s(this.$t("form.application_banner.expiry_date.label"))+"\n                  ")])]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.application_banner.expiry_date_index))])]),t._v(" "),l("div",{staticClass:"col-3"},[l("label",{staticClass:"label form-label pe-4"},[t._v("\n                    "+t._s(this.$t("form.application_banner.status.label"))+"\n                  ")])]),t._v(" "),l("div",{staticClass:"col-3"},[l("div",{staticClass:"form-switch"},[l("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked",disabled:""},domProps:{checked:t.application_banner.is_active?"checked":""}})])])])]),t._v(" "),l("div",{staticClass:"row w-100"},[l("div",{staticClass:"col-lg-12 px-0"},[l("div",{staticClass:"px-0 pt-3"},[l("h2",{staticClass:"m-0 text-body bold"},[t._v("\n                      "+t._s(t.$t("form.multilanguage"))+"\n                    ")]),t._v(" "),l("p",[l("span",{staticClass:"heebo-light"},[t._v("\n                        "+t._s(t.$t("lorem_ipsum"))+"\n                      ")])])]),t._v(" "),l("div",{staticClass:"d-md-flex"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 px-0"},[l("ul",{staticClass:"nav nav-tabs px-0",attrs:{id:"myTab",role:"tablist"}},t._l(t.allActiveLanguages.languages,(function(e,n){return l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("a",{staticClass:"nav-link",class:0==n?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,role:"tab","aria-controls":e.code,"aria-selected":0==n?"true":"false"}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),l("div",{staticClass:"row w-100"},[l("div",{staticClass:"col-lg-12 px-0"},[l("div",{},[l("div",{},[l("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,n){return l("div",{staticClass:"tab-pane fade",class:0==n?"active show":"",attrs:{id:e.code,role:"tabpanel","aria-labelledby":e.code+"-tab"}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("div",{attrs:{role:"group"}},[l("label",{attrs:{for:"input-live form-label"}},[t._v(t._s(t.$t("form.application_banner.image.label")))]),t._v(" "),l("div",{staticClass:"py-2"},[t.application_banner&&t.application_banner.image?l("img",{staticClass:"img-fluid rounded show-img",attrs:{width:"300px",height:"300px",src:t.url+""+t.application_banner.images[e.code]}}):t._e()])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("div",{attrs:{role:"group "}},[l("div",{attrs:{role:"group"}},[l("label",{attrs:{for:"input-live form-label"}},[t._v(t._s(t.$t("form.application_banner.name.label")))]),t._v(" "),l("div",{staticClass:"py-3 px-3 rounded shadow-sm border mt-2 show-input"},[t._v("\n                                          "+t._s(t.application_banner.nameTranslations[e.code])+"\n                                        ")])])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 my-1"},[l("div",{attrs:{role:"group "}},[l("div",{attrs:{role:"group"}},[l("label",{attrs:{for:"input-live form-label"}},[t._v(t._s(t.$t("form.application_banner.description.label")))]),t._v(" "),l("div",{staticClass:"py-3 px-3 shadow-sm rounded border mt-2 show-text-area",domProps:{innerHTML:t._s(t.application_banner.descriptionTranslations[e.code])}})])])])])])})),0)])])])])])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminViewLoader:l(676).default})},676:function(t,e,l){"use strict";l.r(e);var n={props:["multilang","multilangImage"]},c=l(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container skeletion-effect"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"card gutter-b border-0"},[l("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t.multilang?l("div",[l("hr",{staticClass:"text-primary"}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12 py-2"},[l("div",{staticClass:"px-0 pt-3"},[l("h2",{staticClass:"skeletion-animation"}),t._v(" "),l("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12 px-0 pt-3 d-flex"},[t._m(1),t._v(" "),l("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[l("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[l("div",{staticClass:"row"},[t.multilangImage?l("div",[t._m(2)]):t._e(),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])])])])])])])]):t._e()])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 my-1"},[l("div",{staticClass:"show-table"},[l("div",{staticClass:"row justify-content-end"},[l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"switch skeletion-animation"})])])])]),t._v(" "),l("div",{staticClass:"col-md-6 my-1"},[l("div",{staticClass:"show-table"},[l("div",{staticClass:"row justify-content-end"},[l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"switch skeletion-animation"})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[l("div",{staticClass:"tabs"}),t._v(" "),l("div",{staticClass:"tabs"}),t._v(" "),l("div",{staticClass:"tabs"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-12 my-1"},[l("div",{attrs:{role:"group"}},[l("div",{staticClass:"label skeletion-animation"}),t._v(" "),l("div",{staticClass:"py-2"},[l("div",{staticClass:"image skeletion-animation"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6 my-1"},[l("div",{attrs:{role:"group "}},[l("label",{staticClass:"label skeletion-animation"}),t._v(" "),l("div",{staticClass:"input skeletion-animation"}),t._v(" "),l("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 my-1"},[l("div",{attrs:{role:"group "}},[l("label",{staticClass:"label skeletion-animation"}),t._v(" "),l("div",{staticClass:"textarea skeletion-animation"}),t._v(" "),l("div",{staticClass:"subheading skeletion-animation"})])])])}],!1,null,null,null);e.default=component.exports}}]);