(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),i=c.n(s),a=c(3),o=(c(36),c(0));function j(e){var t=e.item,c=Object(a.b)();return Object(o.jsxs)("div",{className:"cart-qty-container",children:[Object(o.jsx)("p",{className:"cart-qty__modify decrement",id:t.id,onClick:function(){return c({type:"MODIFY_QUANTITY",payload:{item:t,operation:"decrement"}})},children:"-"}),Object(o.jsx)("p",{children:t.qty}),Object(o.jsx)("p",{className:"cart-qty__modify increment",id:t.id,onClick:function(){return c({type:"MODIFY_QUANTITY",payload:{item:t,operation:"increment"}})},children:"+"})]})}c(38);function l(e){var t=e.item,c=Object(a.b)();return Object(o.jsxs)("div",{className:"cart-item-container",children:[Object(o.jsx)("div",{className:"cart-item__image",children:Object(o.jsx)("img",{src:t.imageUrl,alt:"something"})}),Object(o.jsxs)("div",{className:"cart-item__description",children:[Object(o.jsxs)("p",{children:[t.name," - (",t.selectedSize,")"]}),Object(o.jsx)(j,{item:t})]}),Object(o.jsxs)("div",{className:"cart-item__info",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"las la-times cart-item__delete",onClick:function(){return c({type:"REMOVE_FROM_CART",payload:{item:t}})},id:"".concat(t.id)})}),Object(o.jsxs)("p",{children:["$",t.price]})]})]})}c(39);function d(e){e.removeFromCart,e.modifyCart;return Object(a.c)((function(e){return e})).cart.map((function(e){return Object(o.jsx)(l,{item:e},e.id+e.selectedSize)}))}c(40);var u=function(e){var t=e.removeFromCart,c=e.modifyCart,n=Object(a.c)((function(e){return e})).cartIsOpen,r=Object(a.b)();return n?Object(o.jsxs)("div",{className:"cart-container",children:[Object(o.jsxs)("div",{className:"cart-container__header",children:[Object(o.jsx)("h1",{children:"Your Cart."}),Object(o.jsx)("p",{onClick:function(){return r({type:"TOGGLE_CART"})},children:Object(o.jsx)("i",{className:"las la-times"})})]}),Object(o.jsx)("hr",{}),Object(o.jsx)(d,{removeFromCart:t,modifyCart:c})]}):null},b=c(5),m=c(7),O=c(4);function h(){var e=Object(O.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var p=c(14);c(42);var x=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var r=this,s=arguments,i=function(){t=null,n||e.apply(r,s)},a=n&&!t;clearTimeout(t),t=setTimeout(i,c),a&&e.apply(r,s)}};var f=function(){var e=Object(a.c)((function(e){return e})).cart,t=Object(a.b)(),c=Object(n.useState)(0),r=Object(p.a)(c,2),s=r[0],i=r[1];return window.addEventListener("scroll",x((function(){return window.scrollY>10?i(1):i(0)}))),Object(o.jsxs)("div",{className:"header-container",style:0!==s?{backgroundColor:"#fff"}:{backgroundColor:"transparent"},children:[Object(o.jsxs)("div",{className:"header-container__motto",children:[Object(o.jsx)("p",{children:"Comfort"}),Object(o.jsx)("p",{children:"For"}),Object(o.jsx)("p",{children:"You"})]}),Object(o.jsx)("div",{className:"header-container__logo",children:Object(o.jsx)(m.b,{to:"/",children:Object(o.jsx)("h2",{children:"Octane."})})}),Object(o.jsx)("div",{className:"header-container__cart",onClick:function(){return t({type:"TOGGLE_CART"})},children:Object(o.jsxs)("p",{children:["Cart(",e.length,")"]})})]})};c(43);var v=function(){return document.title="Octane | Home of comfort for your feet",Object(o.jsxs)("div",{className:"homepage-container",children:[Object(o.jsxs)("div",{className:"homepage-conatiner__hero",children:[Object(o.jsxs)("div",{className:"hero-item",children:[Object(o.jsx)("img",{src:"https://images.pexels.com/photos/4462782/pexels-photo-4462782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"a shoe"}),Object(o.jsx)("p",{children:"Peep into comfort by shopping our eco-friendly shoes made from cotton and wool and built for the total comfort of your feet."}),Object(o.jsx)(m.b,{to:"/products",children:Object(o.jsx)("button",{className:"btn",children:"Shop Shoes"})})]}),Object(o.jsxs)("div",{className:"hero-item",children:[Object(o.jsx)("img",{src:"https://images.pexels.com/photos/4431401/pexels-photo-4431401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"face mask"}),Object(o.jsx)("p",{children:"Keep yourself and everyone around you safe with our custom made emission free N12 face-mask which fits effortlessly on your face. guaranteed to keep you safe from the COVID all day long"}),Object(o.jsx)(m.b,{to:"/products",children:Object(o.jsx)("button",{className:"btn",children:"Shop Masks"})})]})]}),Object(o.jsxs)("div",{className:"homepage-container__showcase",children:[Object(o.jsx)("h1",{children:"Shop the collection"}),Object(o.jsxs)("div",{className:"homepage-container__showcase-slider",children:[Object(o.jsxs)("div",{className:"slider-item",children:[Object(o.jsx)("img",{src:"https://cutt.ly/qc58vSp",alt:"model 001",loading:"lazy"}),Object(o.jsx)("h3",{children:" Model #001"}),Object(o.jsx)("p",{children:"Crafted from wool to provide complete comfort for the heel."}),Object(o.jsx)(m.b,{to:"/products",children:Object(o.jsx)("button",{className:"btn",children:"Shop Now"})})]}),Object(o.jsxs)("div",{className:"slider-item",children:[Object(o.jsx)("img",{src:"https://cutt.ly/zc58Yn1",alt:"model 002",loading:"lazy"}),Object(o.jsx)("h3",{children:" Model #002"}),Object(o.jsx)("p",{children:"Cotton based sole to ease stress on walking."}),Object(o.jsx)(m.b,{to:"/products",children:Object(o.jsx)("button",{className:"btn",children:"Shop Now"})})]}),Object(o.jsxs)("div",{className:"slider-item",children:[Object(o.jsx)("img",{src:"https://cutt.ly/Dc58G5e",alt:"model 003",loading:"lazy"}),Object(o.jsx)("h3",{children:" Model #003"}),Object(o.jsx)("p",{children:"Fine tuned sneaker perfect for summer."}),Object(o.jsx)(m.b,{to:"/products",children:Object(o.jsx)("button",{className:"btn",children:"Shop Now"})})]})]})]})]})};c(44);var g=function(e){var t=e.images.map((function(e,t){return"image"===e.type?Object(o.jsx)("img",{src:e.url,alt:e.name},t):Object(o.jsx)("video",{src:e.url,autoPlay:"autoplay",loop:!0,muted:!0},t)}));return Object(o.jsx)("div",{className:"product-images-container",children:t})};c(45),c(46),c(47);var _=function(e){var t=e.size,c=e.selectSize,n=e.selectedSize===t?"size-active":"";return Object(o.jsx)("button",{className:"size-item-container ".concat(n),onClick:function(){return c(t)},children:t})};var y=function(e){var t=e.availableSizes,c=e.selectSize,n=e.selectedSize,r=t.map((function(e,t){return Object(o.jsx)(_,{size:e,selectSize:c,selectedSize:n},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Select Size:"}),Object(o.jsx)("div",{className:"size-list-container",children:r})]})};c(48);var N=function(e){var t=e.product,c=e.selectedSize,n=e.sizeIsSelected,r=Object(a.b)(),s=!n,i=n?"add-to-cart-btn-active":"add-to-cart-btn-disabled";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"add-to-cart-btn ".concat(i),onClick:function(){return r({type:"ADD_TO_CART",payload:{product:Object(b.a)(Object(b.a)({},t),{},{selectedSize:c})}})},disabled:s,children:"Add to Cart"}),Object(o.jsx)("p",{children:"Please select a size first in order to cart"})]})};var S=function(e){var t=e.product,c=Object(n.useState)(null),r=Object(p.a)(c,2),s=r[0],i=r[1],a=Object(n.useState)(!1),j=Object(p.a)(a,2),l=j[0],d=j[1];return Object(o.jsxs)("div",{className:"product-description-container",children:[Object(o.jsx)("h1",{children:t.name}),Object(o.jsxs)("p",{children:["$",t.price]}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)(y,{availableSizes:t.availableSizes,selectSize:function(e){if(e===s)return i(null),void d(!1);i(e),d(!0)},selectedSize:s}),Object(o.jsx)(N,{product:t,selectedSize:s,sizeIsSelected:l})]})};c(49),c(50);function C(e){var t=e.stars,c=[],n=[];return function(e){for(var t=0;t<e;t++)n.push(t)}(t),function(e){var t=5-e;if(t)for(var n=0;n<t;n++)c.push(n)}(t),Object(o.jsxs)("div",{className:"star-rating-container",children:[n.map((function(e){return Object(o.jsx)("i",{className:"las la-star"},e)})),c.map((function(e){return Object(o.jsx)("i",{className:"lar la-star"},n.length+e)}))]})}function z(e){var t=e.comment;return Object(o.jsxs)("li",{className:"review-item-container",children:[Object(o.jsx)("p",{className:"review-item__name",children:Object(o.jsx)("strong",{children:t.user.name})}),Object(o.jsxs)("div",{className:"review-item__main",children:[Object(o.jsx)("p",{className:"review-item__main__remark",children:Object(o.jsx)("strong",{children:t.remark})}),Object(o.jsx)("p",{className:"review-item__main__comment",children:t.comment})]}),Object(o.jsx)(C,{stars:t.star})]})}c(51);function w(e){var t=e.comments;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{style:{textAlign:"center",margin:"2rem"},children:"Here's what some our enantiomers have to say"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("ul",{className:"review-list-container",children:t.map((function(e,t){return Object(o.jsx)(z,{comment:e},t)}))})]})}c(52);var T=function(e){var t=e.match,c=Object(a.c)((function(e){return e})).products,n=t.params.productId,r=c.find((function(e){return e.id===n}));return document.title="Collection | ".concat(r.name),Object(o.jsxs)("div",{className:"product-page-container",children:[Object(o.jsxs)("div",{className:"project-page-container__info",children:[Object(o.jsx)(g,{images:r.imagesUrl}),Object(o.jsx)(S,{product:r})]}),Object(o.jsx)(w,{comments:r.comments})]})};c(53);var k=function(e){var t=e.product;return Object(o.jsx)(m.b,{to:"/product/".concat(t.id),children:Object(o.jsxs)("div",{className:"product-item-container",children:[Object(o.jsx)("div",{className:"product-item-container__imgBg",children:Object(o.jsx)("img",{src:t.imagesUrl[0].url,alt:t.name})}),Object(o.jsxs)("div",{className:"product-item-container__info",children:[Object(o.jsxs)("p",{children:["$",t.price]}),Object(o.jsx)("p",{children:t.name})]})]})})};c(54);var I=function(){var e=Object(a.c)((function(e){return e})).products.map((function(e){return Object(o.jsx)(k,{product:e},e.id)}));return Object(o.jsxs)("div",{className:"product-list-container",children:[Object(o.jsx)("h1",{children:"This is Octane."}),Object(o.jsx)("div",{className:"products-list",children:e})]})};var A=function(){return document.title="Octane | Full Summer Collection",Object(o.jsx)(I,{})};var R=function(){return Object(o.jsx)("h1",{children:"Hello Checkout page"})},D=function(){return Object(o.jsxs)(m.a,{basename:"/TOP-React-project-4",children:[Object(o.jsx)(h,{}),Object(o.jsx)(f,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{exact:!0,path:"/",component:v}),Object(o.jsx)(O.a,{exact:!0,path:"/products",component:A}),Object(o.jsx)(O.a,{exact:!0,path:"/product/:productId",render:function(e){return Object(o.jsx)(T,Object(b.a)({},e))}}),Object(o.jsx)(O.a,{exact:!0,path:"/checkout",component:R})]})]})},F=function(){var e=Object(a.b)();return Object(n.useEffect)((function(){fetch("https://react-project-4-api.herokuapp.com/api/v1/products").then((function(e){return e.json()})).then((function(t){var c=t.data;e({type:"LOAD_ALL_PRODUCTS",payload:{products:c.products}})}))})),Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)(D,{})]})},M=(c(55),c(26)),q=c(17),E=function(e,t){var c,n,r=Object(q.a)(e.cart),s=Object(b.a)(Object(b.a)({},t),{},{qty:1,imageUrl:t.imagesUrl[2].url}),i=r.findIndex((function(e){return e.id===t.id}));return i>=0&&(n=(c=r.find((function(e){return e.id===s.id}))).selectedSize===s.selectedSize),c&&n?(s.qty=e.cart[i].qty+1,r.splice(i,1,s)):r.push(s),Object(b.a)(Object(b.a)({},e),{},{cart:r})},L=function(e,t){var c=t.id,n=Object(q.a)(e.cart),r=n.findIndex((function(e){return e.id===c}));return n.splice(r,1),Object(b.a)(Object(b.a)({},e),{},{cart:n})},U=function(e,t){var c=t.item.id,n=Object(q.a)(e.cart),r=n.findIndex((function(e){return e.id===c}));if("decrement"===t.operation){if(n[r].qty<2)return L(e,t.item);n[r].qty-=1}else n[r].qty+=1;return Object(b.a)(Object(b.a)({},e),{},{cart:n})},Y=function(e,t){var c=t.products;return Object(b.a)(Object(b.a)({},e),{},{products:c})},G={products:[],cart:[],isLoggedIn:!1,cartIsOpen:!1};var P=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case"TOGGLE_CART":return Object(b.a)(Object(b.a)({},e),{},{cartIsOpen:!e.cartIsOpen});case"ADD_TO_CART":return E(e,n.product);case"REMOVE_FROM_CART":return L(e,n.item);case"MODIFY_QUANTITY":return U(e,n);case"LOAD_ALL_PRODUCTS":return Y(e,n);default:return e}}));i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(a.a,{store:P,children:Object(o.jsx)(F,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.937ebaaf.chunk.js.map