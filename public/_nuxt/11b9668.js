(window.webpackJsonp=window.webpackJsonp||[]).push([[579,24,29,36,60,61],{1349:function(t,e,r){"use strict";r.r(e);r(43),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),l=(r(5),r(26),r(25),r(49),r(33),r(81),r(274),r(781)),c=r.n(l),d=r(129);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={layout:"vendor",middleware:"vendor",components:{draggable:c.a},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data,i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allActiveMedia.media){e.next=3;break}return e.next=3,t.fetchActiveMedia();case 3:return e.next=5,t.$sellerRepositories.products.show(t.$route.params.id);case 5:if(r=e.sent,data=r.data,t.product=data,data.media)for(t.product_name=data.name,i=0;i<data.media.length;i++)n={media_id:data.media[i].pivot.media_id,path:data.media[i].small_thumbnail[0].thumbnail,description:data.media[i].pivot.description,alt_text:data.media[i].pivot.alt_text},t.formData.media_array.push(n);case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{url:"/backend",manufacturer_image_path:"",formData:{image_id:"",media_array:[]},disabled:!1,product_name:"",error:"",product:""}},methods:v(v({},Object(d.b)({updateProductMedia:"Seller/Products/updateProductMedia",fetchActiveMedia:"General/fetchActiveMedia"})),{},{updateAndNext:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateAndContinue();case 2:t.error||t.$router.replace(t.localePath("/seller/products/edit/"+t.$route.params.id+"/step3"));case 3:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateAndContinue();case 2:t.error||t.$router.replace(t.localePath("/seller/products"));case 3:case"end":return e.stop()}}),e)})))()},increaseOne:function(t){return t+1},imageSelected:function(t,path,e,r){var n={media_id:t,path:path,description:e,alt_text:r};this.formData.media_array.push(n)},removeImage:function(t){this.formData.media_array.splice(t,1)},updateAndContinue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!0,e.next=3,t.updateProductMedia({formData:t.formData,id:t.$route.params.id}).then((function(e){var r;e.response?(t.error=null!==(r=e.response.data.errors)&&void 0!==r?r:e.response.data,t.$toast.error(e.response.data.message)):"fail"==e.state?t.$toast.error(e.message):(t.error=!1,t.$toast.success(e.message))}));case 3:t.disabled=!1;case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:v({},Object(d.c)({allActiveMedia:"General/allActiveMedia"}))},f=r(71),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return this.$auth.user.store?this.$auth.user.is_active?r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n          "+t._s(this.$t("form.product.edit_product"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/seller/products")}},[t._v(t._s(this.$t("sidebar.product")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n              "+t._s(this.$t("form.edit"))+"\n            ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n            "+t._s(this.$t("form.product.edit_description"))+"\n          ")])])])])]),t._v(" "),r("section",{staticClass:"content pb-5"},[t.$fetchState.pending?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("AdminProductMedia")],1)])]):r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-0"},[1==t.product.product_type?r("ul",{staticClass:"nav nav-pills order-profile-tabs my-4 mb-5",attrs:{id:"pills-tab",role:"tablist"}},[r("li",{staticClass:"nav-item col-md-6 col-12 mb-md-0 mb-4",attrs:{role:"presentation"}},[t._m(0),t._v(" "),r("div",{staticClass:"text-dark order-head fw-bold float-end product-step-name"},[t._v("\n                    "+t._s(t.$t("columns.product_info"))+"\n                  ")])]),t._v(" "),r("li",{staticClass:"nav-item col-md-6 col-12 mb-md-0 mb-4",attrs:{role:"presentation"}},[t._m(1),t._v(" "),r("span",{staticClass:"text-dark order-head fw-bold float-end product-step-name"},[t._v(" "+t._s(t.$t("media_upload")))])])]):t._e(),t._v(" "),2==t.product.product_type?r("ul",{staticClass:"nav nav-pills order-profile-tabs my-4 mb-5",attrs:{id:"pills-tab",role:"tablist"}},[r("li",{staticClass:"nav-item col-md-4 col-12 mb-md-0 mb-4",attrs:{role:"presentation"}},[t._m(2),t._v(" "),r("div",{staticClass:"text-dark order-head fw-bold float-end product-step-name"},[t._v("\n                   "+t._s(t.$t("columns.product_info"))+"\n                  ")])]),t._v(" "),r("li",{staticClass:"nav-item col-md-4 col-12 mb-md-0 mb-4",attrs:{role:"presentation"}},[t._m(3),t._v(" "),r("span",{staticClass:"text-dark order-head fw-bold float-end product-step-name"},[t._v(" "+t._s(t.$t("media_upload")))])]),t._v(" "),r("li",{staticClass:"nav-item col-md-4 col-12 mb-md-0 mb-4",attrs:{role:"presentation"}},[t._m(4),t._v(" "),r("span",{staticClass:"text-dark order-head fw-bold float-end product-step-name"},[t._v(" "+t._s(t.$t("add_attributes")))])])]):t._e(),t._v(" "),r("hr",{staticClass:"text-primary"}),t._v(" "),r("div",{staticClass:"py-4"},[r("div",{staticClass:"d-grid mb-4"},[r("div",{staticClass:"btn-media px-3 rounded py-4",attrs:{type:"button",name:"button","data-bs-toggle":"modal","data-bs-target":"#selectProductMedia"}},[t._v("\n                    "+t._s(t.$t("form.If_you_want_to_choose_image"))+"\n                    "),r("span",{staticClass:"text-primary"},[t._v("\n                      "+t._s(t.$t("form.select_media"))+"\n                    ")]),t._v("\n                    "+t._s(t.$t("form.gallery"))+"\n                  ")])]),t._v(" "),r("AdminMediaMultipleModal",{attrs:{product_name:t.product_name,type:"images",modal_id:"selectProductMedia",redirect_panel:"seller"},on:{selectImage:t.imageSelected}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-0"},[r("draggable",{attrs:{draggable:".item"},model:{value:t.formData.media_array,callback:function(e){t.$set(t.formData,"media_array",e)},expression:"formData.media_array"}},t._l(t.formData.media_array,(function(element,e){return r("div",{key:element.id,staticClass:"row"},[r("div",{staticClass:"col-md-6 col-12 py-4 px-0 mb-2",staticStyle:{cursor:"pointer"}},[r("div",{staticClass:"\n                              d-flex\n                              align-items-center\n                              justify-content-between\n                              align-items-center\n                            "},[r("p",{staticClass:"fw-bold text-dark h6 ps-4"},[t._v("\n                              "+t._s(t.$t("form.product.product_media.sort_order"))+"\n                              : "+t._s(t.increaseOne(e))+"\n                            ")]),t._v(" "),r("button",{staticClass:"btn p-0 btn-sm rounded-circle",attrs:{type:"button",name:"button"},on:{click:function(r){return t.removeImage(e)}}},[r("fa",{attrs:{icon:["fas","trash-alt"],"fixed-width":""}})],1)]),t._v(" "),r("div",{staticClass:"bg-secondary-light my-2 p-4 vendorCard"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"d-flex align-items-center h-100"},[r("img",{staticClass:"imgSelected img-wrap",attrs:{src:t.url+""+element.path,alt:""}})])]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",[r("div",[r("label",{staticClass:"label form-label fw-bold",attrs:{for:""}},[t._v("\n                                        "+t._s(t.$t("columns.description"))+"\n                                      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.media_array[e].description,expression:"\n                                        formData.media_array[index]\n                                          .description\n                                      "}],staticClass:"form-control",attrs:{type:"text",placeholder:t.$t("form.product.product_media.description.placeholder")},domProps:{value:t.formData.media_array[e].description},on:{input:function(r){r.target.composing||t.$set(t.formData.media_array[e],"description",r.target.value)}}})]),t._v(" "),r("div",[r("label",{staticClass:"label form-label fw-bold",attrs:{for:""}},[t._v("\n                                      "+t._s(t.$t("form.product.product_media.alt_text.heading"))+"\n                                      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.media_array[e].alt_text,expression:"\n                                        formData.media_array[index].alt_text\n                                      "}],staticClass:"form-control",attrs:{type:"text",placeholder:t.$t("form.product.product_media.alt_text.placeholder")},domProps:{value:t.formData.media_array[e].alt_text},on:{input:function(r){r.target.composing||t.$set(t.formData.media_array[e],"alt_text",r.target.value)}}})])])])])])])])})),0)],1)])],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[r("button",{staticClass:"btn btn-secondary mb-3 px-3 py-2",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.update}},[t._v("\n                "+t._s(this.$t("form.update"))+"\n              ")]),t._v(" "),2==t.product.product_type?r("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.updateAndNext}},[t._v("\n                "+t._s(this.$t("form.add_and_continue"))+"\n              ")]):t._e()])])])])])])]):r("div",{},[r("SellerShopDeactive")],1):r("div",{},[r("SellerShopSettings")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"w-100 p-md-0 pe-none active",attrs:{id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[r("div",{staticClass:"product-border-top-nav position-relative mb-3"},[r("div",{staticClass:"\n                          barIconBg\n                          position-absolute\n                          d-flex\n                          align-items-center\n                          justify-content-center\n                        "},[r("span",{staticClass:"text-white fw-bold"},[t._v("1")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"w-100 p-md-0 pe-none active",attrs:{id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[r("div",{staticClass:"product-border-top-nav position-relative mb-3"},[r("div",{staticClass:"\n                          barIconBg\n                          position-absolute\n                          d-flex\n                          align-items-center\n                          justify-content-center\n                        "},[r("span",{staticClass:"fw-bold text-white"},[t._v("2")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"w-100 p-md-0 pe-none active",attrs:{id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[r("div",{staticClass:"product-border-top-nav position-relative mb-3"},[r("div",{staticClass:"\n                          barIconBg\n                          position-absolute\n                          d-flex\n                          align-items-center\n                          justify-content-center\n                        "},[r("span",{staticClass:"text-white fw-bold"},[t._v("1")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"w-100 p-md-0 pe-none active",attrs:{id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[r("div",{staticClass:"product-border-top-nav position-relative mb-3"},[r("div",{staticClass:"\n                          barIconBg\n                          position-absolute\n                          d-flex\n                          align-items-center\n                          justify-content-center\n                        "},[r("span",{staticClass:"fw-bold text-white"},[t._v("2")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"w-100 p-md-0 pe-none",attrs:{id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}},[r("div",{staticClass:"product-border-top-nav position-relative mb-3"},[r("div",{staticClass:"\n                          barIconBg\n                          position-absolute\n                          d-flex\n                          align-items-center\n                          justify-content-center\n                        "},[r("span",{staticClass:"fw-bold"},[t._v("3")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SellerShopSettings:r(682).default,SellerShopDeactive:r(683).default,AdminProductMedia:r(791).default,AdminMediaMultipleModal:r(792).default})},673:function(t,e,r){var content=r(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("648263e9",content,!0,{sourceMap:!1})},674:function(t,e,r){var content=r(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("661f7a96",content,!0,{sourceMap:!1})},675:function(t,e,r){"use strict";r.r(e);var n={name:"Card",props:{title:{type:String,default:null}}},o=r(71),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t.title?r("div",{staticClass:"card-header"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},678:function(t,e,r){"use strict";r(673)},679:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".svg-inline--fa.fa-w-16[data-v-7b3f0bbc]{font-size:4rem!important}",""]),n.locals={},t.exports=n},680:function(t,e,r){"use strict";r(674)},681:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".svg-inline--fa.fa-w-16[data-v-4eaaa628]{font-size:4rem!important}",""]),n.locals={},t.exports=n},682:function(t,e,r){"use strict";r.r(e);var n={},o=(r(678),r(71)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card bg-white p-5"},[r("div",{staticClass:"text-center"},[r("fa",{staticClass:"fs-5 me-2 mb-4",attrs:{icon:["fas","cog"]}}),t._v(" "),r("h2",[t._v(t._s(t.$t("You_have_not_set_your_store_yet")))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/seller/store_settings",type:"button",name:"button"}},[t._v(t._s(t.$t("form.store_settings.store_settings")))])],1)])])])])])}),[],!1,null,"7b3f0bbc",null);e.default=component.exports},683:function(t,e,r){"use strict";r.r(e);var n={},o=(r(680),r(71)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card bg-white p-5"},[r("div",{staticClass:"text-center"},[r("fa",{staticClass:"fs-5 me-2 mb-4 text-danger",attrs:{icon:["fas","ban"]}}),t._v(" "),r("h2",[t._v(t._s(t.$t("your_store_currently_is_in_active_or_under_review")))])],1)])])])])])}),[],!1,null,"4eaaa628",null);e.default=component.exports},733:function(t,e,r){var content=r(771);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("9ad5eb44",content,!0,{sourceMap:!1})},770:function(t,e,r){"use strict";r(733)},771:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".select-icon[data-v-4f393e40]{display:none}.img-select .media-gallery-img[data-v-4f393e40]{border:2px solid #198754}.img-select .select-icon[data-v-4f393e40]{display:block;position:absolute;right:8px;top:8px}",""]),n.locals={},t.exports=n},791:function(t,e,r){"use strict";r.r(e);var n={},o=r(71),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container skeletion-effect"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-5 p-5"},[r("div",{staticClass:"mx-5"},[r("div",{staticClass:"d-grid"},[r("div",{staticClass:"media-btn skeletion-animation"})])])])]),t._v(" "),r("hr",{staticClass:"text-primary mb-5 product-media-seperator"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"item draggable"},[r("div",{staticClass:"p-4 row selected-media"},[r("div",{staticClass:"\n                            co1-12\n                            d-flex\n                            align-items-center\n                            justify-content-between\n                          "},[r("div",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"icon skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"image skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-8 px-5 py-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-end"}),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input skeletion-animation"}),t._v(" "),r("div",{staticClass:"my-5"},[r("div",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input skeletion-animation"})])])])])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[r("div",{staticClass:"button-add skeletion-animation"}),t._v(" "),r("div",{staticClass:"button-continue skeletion-animation"})])])])])])}],!1,null,null,null);e.default=component.exports},792:function(t,e,r){"use strict";r.r(e);r(43),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=(r(25),r(49),r(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{url:"/backend",description:"",image_id:"",path:"",alt_text:""}},props:["type","modal_id","product_name","redirect_panel"],mounted:function(){this.alt_text=this.changed_alt_text},methods:c(c({},Object(o.b)({fetchActiveMedia:"General/fetchActiveMedia"})),{},{selectImage:function(){""==this.image_id||""==this.alt_text?(""==this.image_id&&this.$toast.error(this.$t("form.product.product_media.image.required_message")),""==this.alt_text&&this.$toast.error(this.$t("form.product.product_media.alt_text.required_message"))):(this.$emit("selectImage",this.image_id,this.path,this.description,this.alt_text),this.image_id="",this.description="",this.path="",this.alt_text=this.product_name)},cancel:function(){this.image_id="",this.description="",this.path="",this.alt_text=this.product_name},refetchMedia:function(){this.fetchActiveMedia()},currentImage:function(t,path){this.image_id=t,this.path=path}}),computed:c(c({},Object(o.c)({allActiveMedia:"General/allActiveMedia"})),{},{changed_alt_text:function(){return this.product_name}})},m=(r(770),r(71)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade in media-gallery-modal",attrs:{id:t.modal_id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog "},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header p-3"},[r("button",{staticClass:"btn rounded-circle btn-primary d-block ms-auto",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[r("fa",{attrs:{icon:"times"}})],1)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("GlobalCard",{staticClass:"my-4 ",staticStyle:{background:"none"}},[r("div",{staticClass:"pop-up-gallery border-bottom border-2 rounded-0 p-5 justify-content-between"},t._l(t.allActiveMedia.media[t.type],(function(image){return r("div",{key:image.id,staticClass:"todo position-relative",class:image.media.id==t.image_id?"img-select":""},[r("fa",{staticClass:"text-success select-icon",attrs:{icon:["fas","check-circle"],"fixed-width":""}}),t._v(" "),r("div",{staticClass:"media-gallery-img mb-3",on:{click:function(e){return t.currentImage(image.media.id,image.thumbnail)}}},[r("img",{attrs:{src:t.url+""+image.thumbnail}})])],1)})),0)])],1),t._v(" "),r("div",{staticClass:"modal-footer mt-3 mb-5 mx-2"},[r("button",{staticClass:"btn btn-danger py-2 px-4 shadow",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-secondary py-2 px-4 shadow",attrs:{to:t.localePath("/"+t.redirect_panel+"/media"),target:"_blank"}},[t._v(t._s(t.$t("upload")))]),t._v(" "),r("button",{staticClass:"btn btn-success py-2 px-4 shadow",on:{click:t.refetchMedia}},[t._v(t._s(this.$t("refresh")))]),t._v(" "),r("button",{staticClass:"btn btn-primary py-2 px-4 shadow",attrs:{"data-bs-dismiss":t.image_id&&t.alt_text?"modal":"",type:"button"},on:{click:function(e){return t.selectImage()}}},[t._v(t._s(t.$t("add")))])],1)])])])}),[],!1,null,"4f393e40",null);e.default=component.exports;installComponents(component,{GlobalCard:r(675).default})}}]);