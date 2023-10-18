(window.webpackJsonp=window.webpackJsonp||[]).push([[541,17,30],{1233:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(4),n(57),n(40),n(58);var r=n(21),o=n(0),c=(n(33),n(81),n(26),n(5),n(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",middleware:["admin","permission"],meta:{permission:"zones.create",strategy:"create"},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.params;case 1:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allActiveCountries.countries){e.next=3;break}return e.next=3,t.fetchActiveCountries();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{formData:{name:"",country_id:"",code:"",is_active:!1},disabled:!1,error:!1}},methods:d(d({},Object(c.b)({addZones:"Zones/addZones",fetchActiveZones:"General/fetchActiveZones",fetchActiveCountries:"General/fetchActiveCountries"})),{},{add:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/zones"));case 3:case"end":return e.stop()}}),e)})))()},addAndContinue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!0,e.next=3,t.addZones(t.formData).then((function(e){var n;e.response?(t.error=null!==(n=e.response.data.errors)&&void 0!==n?n:e.response.data,t.$toast.error(e.response.data.message)):(t.error=!1,t.formData.name="",t.formData.country_id="",t.formData.code="",t.$toast.success(e.message),t.fetchActiveZones())}));case 3:t.disabled=!1;case 4:case"end":return e.stop()}}),e)})))()}}),computed:d({},Object(c.c)({allZones:"Zones/allZones",allActiveCountries:"General/allActiveCountries"})),mounted:function(){}},v=n(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-header"},[n("div",{staticClass:"row g-0"},[n("div",{staticClass:"col-sm-12 px-0"},[n("h2",{staticClass:"m-0 text-body bold"},[t._v("\n            "+t._s(this.$t("form.zone.create_new_zone"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 px-0"},[n("ol",{staticClass:"breadcrumb float-sm-right text-body"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:t.localePath("/admin/zones")}},[t._v(t._s(this.$t("sidebar.zone")))])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active"},[t._v("\n                "+t._s(this.$t("form.create"))+"\n              ")])]),t._v(" "),n("p",{staticClass:"text-body-secondary"},[t._v("\n              "+t._s(this.$t("form.zone.form_description"))+"\n            ")])])])])]),t._v(" "),n("section",{staticClass:"content pb-5"},[t.$fetchState.pending?n("div",[n("AdminFormLoader")],1):n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1 ps-md-0"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:" form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.zone.name.label"))+":")]),t._v(" "),t.error&&t.error.name?n("span",{staticClass:"float-end text-danger"},[t._v("\n                        "+t._s(t.error.name[0])+"\n                      ")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.zone.name.placeholder"),trim:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),n("span",{staticClass:"heebo-light"},[t._v("\n                        "+t._s(this.$t("form.zone.name.subheading"))+"\n                      ")])])]),t._v(" "),n("div",{staticClass:"col-md-6 my-1 pe-md-0"},[n("div",{attrs:{role:"group"}},[n("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.zone.code.label"))+":")]),t._v(" "),t.error&&t.error.code?n("span",{staticClass:"float-end text-danger"},[t._v("\n                        "+t._s(t.error.code[0])+"\n                      ")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.code,expression:"formData.code"}],staticClass:"form-control",class:t.error&&t.error.code?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.zone.code.placeholder"),trim:""},domProps:{value:t.formData.code},on:{input:function(e){e.target.composing||t.$set(t.formData,"code",e.target.value)}}}),t._v(" "),n("span",{staticClass:" heebo-light"},[t._v("\n                               "+t._s(t.$t("form.zone.code.subheading"))+"\n                           ")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1 ps-md-0"},[n("div",{attrs:{role:"group"}},[n("label",{staticClass:" form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.zone.country.label"))+":")]),t._v(" "),t.error&&t.error.country_id?n("span",{staticClass:"float-end text-danger"},[t._v("\n                        "+t._s(t.error.country_id[0])+"\n                      ")]):t._e(),t._v(" "),n("AdminSearchSelectable",{class:t.error&&t.error.country_id?"error":"",attrs:{apiMethod:"activeCountries",responseKey:"countries",initialOptions:t.allActiveCountries.countries,placeholder:this.$t("form.zone.country.placeholder")},model:{value:t.formData.country_id,callback:function(e){t.$set(t.formData,"country_id",e)},expression:"formData.country_id"}}),t._v(" "),n("span",{staticClass:" heebo-light"},[t._v("\n                               "+t._s(t.$t("form.zone.country.subheading"))+"\n                           ")])],1)]),t._v(" "),n("div",{staticClass:"col-md-6 my-1 pe-md-0"},[n("div",{attrs:{role:"group"}},[n("label",{staticClass:"label form-label me-4 text-capitalize"},[t._v("\n                         "+t._s(this.$t("form.zone.status.label"))+"\n                       ")]),t._v(" "),n("div",{staticClass:"form-switch d-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.is_active,expression:"formData.is_active"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.is_active?"checked":"",checked:Array.isArray(t.formData.is_active)?t._i(t.formData.is_active,null)>-1:t.formData.is_active},on:{change:function(e){var n=t.formData.is_active,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&t.$set(t.formData,"is_active",n.concat([null])):c>-1&&t.$set(t.formData,"is_active",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.formData,"is_active",o)}}})]),t._v(" "),n("span",{staticClass:" heebo-light"},[t._v("\n                           "+t._s(t.$t("form.zone.status.subheading"))+"\n                         ")])])])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[n("button",{staticClass:"btn btn-primary mb-3 px-3 py-2",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.add}},[t._v("\n                      "+t._s(this.$t("form.add"))+"\n                    ")])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminFormLoader:n(660).default,AdminSearchSelectable:n(666).default})},660:function(t,e,n){"use strict";n.r(e);var r={props:["multilang"]},o=n(71),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container skeletion-effect"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.multilang?n("div",[n("hr",{staticClass:"text-primary"}),t._v(" "),t._m(2)]):t._e()])])]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),n("div",{staticClass:"col-md-6 my-1"},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6  my-1 d-flex justify-content-center flex-column "},[n("div",{staticClass:"d-flex align-items-center "},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"switch skeletion-animation"})]),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 py-2"},[n("div",{staticClass:"px-0 pt-3"},[n("h2",{staticClass:" skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 px-0 pt-3 d-md-flex"},[n("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[n("div",{staticClass:"tabs"}),t._v(" "),n("div",{staticClass:"tabs"}),t._v(" "),n("div",{staticClass:"tabs"})]),t._v(" "),n("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[n("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 my-1"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"input  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 my-1"},[n("div",{attrs:{role:"group "}},[n("label",{staticClass:"label skeletion-animation"}),t._v(" "),n("div",{staticClass:"textarea  skeletion-animation"}),t._v(" "),n("div",{staticClass:"subheading skeletion-animation"})])])])])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[n("div",{staticClass:"button-add skeletion-animation"}),t._v(" "),n("div",{staticClass:"button-continue skeletion-animation"})])])}],!1,null,null,null);e.default=component.exports},666:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(57),n(40),n(58);var r=n(59),o=n(0),c=n(21);n(5),n(47),n(101),n(4),n(33),n(258),n(27),n(259),n(28),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(66);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={data:function(){return{loadMoreClicked:!1,options:{data:[]},selectedData:"",searchData:{page:1,search:""}}},props:{value:{required:!1},show_key:{required:!1,default:"name"},initialOptions:{required:!1},selectedOptions:{required:!1},search_id:{required:!1},multiple:{required:!1},disabled:{required:!1},apiMethod:{required:!1},responseKey:{required:!1},placeholder:{required:!1}},mounted:function(){this.initialOptions&&(this.options=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.initialOptions)),this.selectedOptions&&(this.options.data=this.options.data.concat(this.selectedOptions),this.makeConcatedOptionsUnique())},methods:{sendWholeObj:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.options.data.find((function(e){return e.id==t})),e.$emit("input",t,r),e.selectedData=r,null!==t){n.next=8;break}return e.searchData.search="",e.selectedData="",n.next=8,e.callApi(!0);case 8:case"end":return n.stop()}}),n)})))()},onSearch:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.loadMoreClicked=!1,n.searchData.page=1,n.searchData.search=t||"",e(!0),r.next=6,n.callApi(e,t);case 6:case"end":return r.stop()}}),r)})))()},callApi:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.search_id){r.next=5;break}return r.next=3,n.$generalService[n.apiMethod](n.search_id,n.searchData).then((function(r){n.options.meta=r[n.responseKey][n.responseKey].meta,n.options.links=r[n.responseKey][n.responseKey].links,n.loadMoreClicked?n.options.data=n.options.data.concat(r[n.responseKey][n.responseKey].data):n.options.data=r[n.responseKey][n.responseKey].data,n.makeConcatedOptionsUnique(),n.searchData.page=r[n.responseKey][n.responseKey].meta.current_page,e||n.options.data.push(n.selectedData),t&&t(!1)})).catch((function(t){}));case 3:r.next=7;break;case 5:return r.next=7,n.$generalService[n.apiMethod](n.searchData).then((function(r){n.options.meta=r[n.responseKey][n.responseKey].meta,n.options.links=r[n.responseKey][n.responseKey].links,n.loadMoreClicked?n.options.data=n.options.data.concat(r[n.responseKey][n.responseKey].data):n.options.data=r[n.responseKey][n.responseKey].data,n.makeConcatedOptionsUnique(),n.searchData.page=r[n.responseKey][n.responseKey].meta.current_page,e||n.options.data.push(n.selectedData),t&&t(!1)})).catch((function(t){}));case 7:case"end":return r.stop()}}),r)})))()},makeConcatedOptionsUnique:function(){var t=Object(r.a)(new Map(this.options.data.map((function(t){return[t.id,t]}))).values());this.options.data=t},loadMore:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadMoreClicked=!0,t.options&&t.options.links&&t.options.links.next&&(t.searchData.page+=1,t.callApi());case 2:case"end":return e.stop()}}),e)})))()}}},m=d,v=n(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-select",{attrs:{value:t.value,reduce:function(t){return t.id},multiple:t.multiple,placeholder:t.placeholder,disabled:t.disabled,label:t.show_key,filterable:!1,options:t.options.data},on:{input:function(e){return t.sendWholeObj(e)},search:t.onSearch},scopedSlots:t._u([{key:"option",fn:function(option){return[n("div",{staticClass:"d-center"},[t._v("\n      "+t._s(option[t.show_key])+"\n    ")])]}},{key:"selected-option",fn:function(option){return[n("div",{staticClass:"selected d-center"},[t._v("\n      "+t._s(option[t.show_key])+"\n    ")])]}},{key:"list-footer",fn:function(){return[n("div",{staticClass:"text-center"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.options&&t.options.links&&t.options.links.next&&t.options.meta&&t.options.meta.total!=t.options.data.length,expression:"\n          options &&\n          options.links &&\n          options.links.next &&\n          options.meta &&\n          options.meta.total != options.data.length\n        "}],staticClass:"btn btn-transparent text-primary",attrs:{type:"button",name:"button"},on:{click:t.loadMore}},[t._v("\n        "+t._s(t.$t("load_more"))+"\n      ")])])]},proxy:!0}])},[n("template",{slot:"no-options"},[t._v("\n    "+t._s(t.$t("form.search_select.no_options"))+"\n  ")])],2)}),[],!1,null,"7b020332",null);e.default=component.exports}}]);