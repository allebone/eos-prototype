(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eede9c8"],{"9d2a":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"grid-view wishlist-items"},t._l(t.products,(function(i){return s("b-card",{key:i.id,staticClass:"ecommerce-card",attrs:{"no-body":""}},[s("div",{staticClass:"item-img text-center"},[s("b-link",{attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:i.slug}}}},[s("b-img",{staticClass:"card-img-top",attrs:{alt:i.name+"-"+i.id,fluid:"",src:i.image}})],1)],1),s("b-card-body",[s("div",{staticClass:"item-wrapper"},[s("div",{staticClass:"item-rating"},[s("ul",{staticClass:"unstyled-list list-inline"},t._l(5,(function(t){return s("li",{key:t,staticClass:"ratings-list-item",class:{"ml-25":t-1}},[s("feather-icon",{class:[{"fill-current":t<=i.rating},t<=i.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"16"}})],1)})),0)]),s("div",[s("h6",{staticClass:"item-price"},[t._v(" $"+t._s(i.price)+" ")])])]),s("h6",{staticClass:"item-name"},[s("b-link",{staticClass:"text-body",attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:i.slug}}}},[t._v(" "+t._s(i.name)+" ")]),s("b-card-text",{staticClass:"item-company"},[t._v(" By "),s("b-link",{staticClass:"ml-25"},[t._v(" "+t._s(i.brand)+" ")])],1)],1),s("b-card-text",{staticClass:"item-description"},[t._v(" "+t._s(i.description)+" ")])],1),s("div",{staticClass:"item-options text-center"},[s("b-button",{staticClass:"btn-wishlist remove-wishlist",attrs:{variant:"light"},on:{click:function(s){return t.removeProductFromWishlistClick(i)}}},[s("feather-icon",{attrs:{icon:"XIcon"}}),s("span",[t._v("Remove")])],1),s("b-button",{staticClass:"btn-cart move-cart",attrs:{variant:"primary"},on:{click:function(s){return t.handleWishlistCartActionClick(i,t.removeProductFromWishlistClick)}}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"ShoppingCartIcon"}}),s("span",[t._v(t._s(i.isInCart?"View In Cart":"Move to Cart"))])],1)],1)],1)})),1)},e=[],c=(s("c740"),s("a434"),s("205f")),n=s("6197"),r=s("4918"),l=s("d6e4"),o=s("aa59"),d=s("1947"),u=s("4360"),m=s("a6f4"),p=s("e316"),C={components:{BCard:c["a"],BCardBody:n["a"],BImg:r["a"],BCardText:l["a"],BLink:o["a"],BButton:d["a"]},setup:function(){var t=Object(p["b"])(),i=t.handleWishlistCartActionClick,s=Object(m["ref"])([]),a=Object(p["a"])(),e=a.removeProductFromWishlist,c=function(t){e(t.id).then((function(){var i=s.value.findIndex((function(i){return i.id===t.id}));s.value.splice(i,1)}))},n=function(){u["a"].dispatch("app-ecommerce/fetchWishlistProducts").then((function(t){s.value=t.data.products}))};return n(),{products:s,handleWishlistCartActionClick:i,removeProductFromWishlistClick:c}}},v=C,h=(s("ee37"),s("2877")),f=Object(h["a"])(v,a,e,!1,null,null,null);i["default"]=f.exports},d368:function(t,i,s){},ee37:function(t,i,s){"use strict";s("d368")}}]);
//# sourceMappingURL=chunk-5eede9c8.9d138ac6.js.map