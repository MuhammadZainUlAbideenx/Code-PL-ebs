(window.webpackJsonp=window.webpackJsonp||[]).push([[547,19,108,244],{1076:function(t,e,r){"use strict";r.r(e);var n=r(21),o=r(0),c=(r(5),r(47),r(43),r(25),r(7),r(4),r(57),r(40),r(58),r(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={auth:!1,data:function(){return{currentlyActiveTemplate:"",loading_more:!1,searching:!1,key:1,detail:"",seo:{},brands:"",pagination:{page:1,column:"",search:"",perPage:10,sort:{type:"",field:""}},options:[{field:"name",type:"ASC",display:this.$t("name_a_to_z")},{field:"name",type:"DESC",display:this.$t("name_z_to_a")}]}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},head:function(){return this.seo},methods:{loadmore:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading_more=!0,t.pagination.page+=1,e.next=4,t.$webService.allBrands(t.pagination);case 4:r=e.sent,data=r.data,t.brands.data=t.brands.data.concat(data.data),t.brands.meta=data.meta,t.brands.links=data.links,t.loading_more=!1;case 10:case"end":return e.stop()}}),e)})))()},onSearch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.searching=!0,t.pagination.page=1,e.next=4,t.$webService.allBrands(t.pagination);case 4:r=e.sent,data=r.data,t.brands.data=data.data,t.brands.meta=data.meta,t.brands.links=data.links,t.searching=!1;case 10:case"end":return e.stop()}}),e)})))()},onOrderChange:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.searching=!0,t.pagination.page=1,e.next=4,t.$webService.allBrands(t.pagination);case 4:r=e.sent,data=r.data,t.searching=!1,t.brands=data;case 8:case"end":return e.stop()}}),e)})))()},onPerPageChange:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.searching=!0,t.pagination.page=1,e.next=4,t.$webService.allBrands(t.pagination);case 4:r=e.sent,data=r.data,t.brands.data=data.data,t.brands.meta=data.meta,t.brands.links=data.links,t.searching=!1;case 10:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allSettings:"allDefaultSettings"})),fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.allBrands();case 2:r=e.sent,data=r.data,t.brands=data,t.pagination.perPage=t.brands.meta.per_page;case 6:case"end":return e.stop()}}),e)})))()}},m=d,v=(r(977),r(71)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"brands-page m-0"},[n("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"brands"}}),t._v(" "),t.$fetchState.pending?n("div",[n("WebsiteSkeleton"+t.currentlyActiveTemplate+"BrandsPage",{tag:"Component"})],1):n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-md-flex justify-content-between filter-bar mb-4 rounded mt-5 bg-secondary mt-100"},[n("div",[n("div",{staticClass:"d-flex align-items-center position-relative mb-3 mb-md-0 search"},[n("label",{staticClass:"form-label flex-shrink-0 text-medium mb-0 me-3"},[t._v(t._s(t.$t("search"))+":\n                ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pagination.search,expression:"pagination.search"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:this.$t("search")},domProps:{value:t.pagination.search},on:{change:t.onSearch,input:function(e){e.target.composing||t.$set(t.pagination,"search",e.target.value)}}}),t._v(" "),n("div",{staticClass:"position-absolute top-50 end-0 translate-middle-y px-3"},[n("fa",{staticClass:"text-primary",attrs:{icon:"search","fixed-width":""}})],1)])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"dropdown-fild d-flex align-items-center sort-by-dropdown"},[n("label",{staticClass:"form-label flex-shrink-0 text-medium mb-0 me-3"},[t._v(t._s(t.$t("sort_by"))+":\n                ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.pagination.sort,expression:"pagination.sort"}],staticClass:"form-select",attrs:{id:"item-per-page","aria-describedby":"item-per-pageFeedback",placeholder:"Featured",required:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pagination,"sort",e.target.multiple?r:r[0])},t.onOrderChange]}},[n("option",{attrs:{selected:"",hidden:""},domProps:{value:{type:"",field:""}}},[t._v(t._s(t.$t("select_sort")))]),t._v(" "),t._l(t.options,(function(option,e){return n("option",{key:e,domProps:{value:option}},[t._v(t._s(option.display))])}))],2)])])])])]),t._v(" "),n("div",{staticClass:"row mt-3 gy-4 my-0"},[t._l(t.brands.data,(function(e){return n("div",{key:e.id,staticClass:"col-6 col-md-3 col-lg-2"},[n("div",{staticClass:"card p-2"},[n("div",{staticClass:"img-wrap"},[n("nuxt-link",{attrs:{to:"/shop?brand="+e.id}},[e.image?n("img",{attrs:{src:"/backend"+e.image.thumbnails.large.thumbnail}}):n("img",{staticClass:"w-sm-100 img-fluid",attrs:{src:r(712),alt:"..."}})])],1)]),t._v(" "),n("h5",{staticClass:"pt-3 mb-0 text-center"},[t._v(t._s(e.name))])])})),t._v(" "),n("div",{staticClass:"col-12 my-0"},[t.loading_more?n("AdminLoader"):t._e(),t._v(" "),n("div",{staticClass:"load-more-btn d-flex justify-content-center align-items-center mt-4 mb-5 mt-50"},[t.brands.meta.current_page!=t.brands.meta.last_page?n("button",{staticClass:"btn btn-primary text-uppercase fw-bold px-5 py-2 d-flex align-items-center",attrs:{type:"button",name:"button"},on:{click:t.loadmore}},[n("fa",{staticClass:"me-2 fs-5",attrs:{icon:["fas","arrow-down"]}}),t._v("\n              "+t._s(t.$t("load_more"))+"\n            ")],1):t._e()])],1)],2)]),t._v(" "),n("WebsiteTemplate1NewsLetterSection")],1)}),[],!1,null,"b04f8316",null);e.default=component.exports;installComponents(component,{WebsiteGlobalComponentsBreadCrumb:r(687).default,AdminLoader:r(661).default,WebsiteTemplate1NewsLetterSection:r(691).default})},661:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=l,m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):n("div",{staticClass:"text-center"},[n("img",{attrs:{src:r(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){t.exports=r.p+"img/loader.1aa8404.gif"},677:function(t,e,r){var content=r(690);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("e62035f2",content,!0,{sourceMap:!1})},687:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:["page","post","product"],data:function(){return{currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=l,m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"site-breadcrumb bg-secondary py-3 mt-0 mb-0"},["Template1"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row mx-0"},[r("div",{staticClass:"col px-0"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},689:function(t,e,r){"use strict";r(677)},690:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".cursor-pointer{cursor:pointer}",""]),n.locals={},t.exports=n},691:function(t,e,r){"use strict";r.r(e);var n=r(0),o=(r(5),{data:function(){return{formData:{email:""}}},methods:{add_email:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.addNewsletterEmail({email:t.formData.email}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==r.success?t.$toast.error(t.$t("subscription_email_already_exists_message")):(t.formData.email="",t.$toast.success(t.$t("subscription_email_added_message")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.response.data.errors&&(t.error=r.response.data.errors,t.error.email&&t.$toast.error(t.error.email[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}}),c=o,l=(r(689),r(71)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"news-letter m-0 news-temp2"},[r("div",{staticClass:"news-letter-mail py-5 mt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 pe-5"},[r("h2",{staticClass:"text-uppercase"},[t._v(t._s(this.$t("web.home.news.newsletter.heading")))]),t._v(" "),r("p",[t._v(t._s(this.$t("web.home.news.newsletter.description")))])]),t._v(" "),r("div",{staticClass:"col-sm-6 my-auto"},[r("div",{staticClass:"input-group mail shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control border rounded px-3",attrs:{placeholder:t.$t("enter_email"),type:"email"},domProps:{value:t.formData.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_email()},input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("span",{staticClass:"\n                input-group-append\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                me-3\n                cursor-pointer\n              ",on:{click:function(e){return t.add_email()}}},[r("fa",{attrs:{icon:["fa","paper-plane"]}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},712:function(t,e,r){t.exports=r.p+"img/placeholder.c8ebdf4.png"},866:function(t,e,r){var content=r(978);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("b395c510",content,!0,{sourceMap:!1})},977:function(t,e,r){"use strict";r(866)},978:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".img-wrap[data-v-b04f8316]{background-color:transparent!important}.img-wrap img[data-v-b04f8316]{max-height:calc(148px - 2rem)}.card[data-v-b04f8316]{background-color:var(--page-background-secondary)}",""]),n.locals={},t.exports=n}}]);