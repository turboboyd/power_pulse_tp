"use strict";(self.webpackChunkpowerpulse=self.webpackChunkpowerpulse||[]).push([[126],{4112:function(e,t,r){r.d(t,{Z:function(){return n}});var i="TitlePage_title__zyjBQ",s=r(3329);function n(e){var t=e.title;return(0,s.jsx)("h1",{className:i,children:t})}},5781:function(e,t,r){r.d(t,{Z:function(){return x}});var i=r(9434),s=function(e){return e.exercises.exercisesFilter},n=function(e){return e.exercises.totalRecords},c=function(e){return e.exercises.page},a=function(e){return e.exercises.itemsSelectedFilter},o=function(e){return e.exercises.isLoading},l=function(e){return e.exercises.error},u=function(e){return e.exercises.getMore},x=function(){return{exercisesFilter:(0,i.v9)(s),exercisesTotalRecords:(0,i.v9)(n),exercisesPage:(0,i.v9)(c),exercisesItemsSelectFilter:(0,i.v9)(a),exercisesIsLoading:(0,i.v9)(o),exercisesError:(0,i.v9)(l),exercisesGetMore:(0,i.v9)(u)}}},4126:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var i=r(9439),s=r(2791),n=r(7689),c=r(4112),a=r(1087),o="BackLink_link__Echxs",l="BackLink_svgBack__T0qDj",u=r(182),x=r(2041),_=r(3329),d=function(e){e.to;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(a.rU,{to:x.ZT,className:o,children:[(0,_.jsx)(u.Z,{className:l,iconId:"Arrow-back"}),"Back"]})})},m={categoryUl:"ExercisesFilter_categoryUl__9GPTM",backButton:"ExercisesFilter_backButton__+cuVM",subCatH:"ExercisesFilter_subCatH__fBj9k",sliderUl:"ExercisesFilter_sliderUl__Iujgm",sliderLi:"ExercisesFilter_sliderLi__65RO1",active:"ExercisesFilter_active__ETb-K",exercisesContainer:"ExercisesFilter_exercisesContainer__1ubKS",exerciseItem:"ExercisesFilter_exerciseItem__yN73B",sliderContainer:"ExercisesFilter_sliderContainer__-S0qj",pagination:"ExercisesFilter_pagination__DUwIu",paginationDot:"ExercisesFilter_paginationDot__vZAFD",activeDot:"ExercisesFilter_activeDot__IsFyc"};var g=function(e){var t=e.selectedCategory,r=e.setSelectedCategory,i=e.setCurrentPage,s=(e.setPath,(0,n.s0)()),c=function(e){return"".concat(t===e?m.active:""," ").concat(m.sliderLi)};return(0,_.jsx)("div",{className:m.categoryContainer,children:(0,_.jsx)("ul",{className:m.sliderUl,children:["Body parts","Equipment","Muscles"].map((function(e){return(0,_.jsx)("li",{onClick:function(){return function(e){t!==e&&(i(1),s(x.ZT)),r(e)}(e)},className:c(e),children:e},e)}))})})},f=r(9434),v=r(5781),p="ExercisesSubcategoriesItem_exerciseItemWrap__+WjCw",h="ExercisesSubcategoriesItem_exerciseItem__S5cc+",j=function(e){var t=e.exercise,r=e.onClick;return(0,_.jsxs)("div",{className:p,onClick:r,children:[(0,_.jsx)("span",{className:h,children:t.name}),(0,_.jsx)("img",{src:t.imgURL,alt:t.filter})]})},E="ExercisesItemType_exercisesContainer__rIv7J",F="ExercisesItemType_exerciseItem__GW0cF",C=r(365);var y=function(e){var t=e.type,r=e.page,i=e.limit,c=e.setLimit,a=(0,v.Z)().exercisesFilter,o=(0,n.s0)(),l=(0,f.I0)(),u=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--item-width")),d=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--item-height"));return(0,s.useEffect)((function(){var e=function(){var e=window.innerWidth;c(e>=1440||e<768?10:9)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[c]),(0,s.useEffect)((function(){l((0,C.h)({type:t,page:r,limit:i}))}),[l,t,r,i]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:E,children:a&&a.map((function(e){return(0,_.jsx)("div",{className:F,children:(0,_.jsx)(j,{exercise:e,style:{width:u,height:d},onClick:function(){return t=e._id,void o("".concat(x.ZT,"/").concat(t));var t}})},e._id)}))})})},I="ExercisesPagination_active__LmjRw",k="ExercisesPagination_pagination__qF7m-",P="ExercisesPagination_paginationDot__IEe+i",Z="ExercisesPagination_activeDot__G6UhK";var w=function(e){var t=e.currentPage,r=e.setCurrentPage,i=e.limit,s=(0,v.Z)(),n=s.exercisesFilter,c=s.exercisesTotalRecords,a=n?Math.ceil(c/i):0,o=i!==c;return(0,_.jsx)(_.Fragment,{children:o&&(0,_.jsx)("div",{className:k,children:Array.from({length:a},(function(e,s){return s*i<c&&(0,_.jsx)("span",{onClick:function(){return function(e){var t=Math.min(Math.max(1,e),a);(t-1)*i<c&&r(t)}(s+1)},className:t===s+1?"".concat(I," ").concat(P," ").concat(Z):P,children:"\u2022"},s+1)}))})})},L=r(4812),S="ExercisesPage_wrapperTopLine__4Gv7f",T=r(2232),N=function(){var e=(0,n.TH)(),t=(0,v.Z)(),r=t.exercisesIsLoading,a=t.exercisesPage,o=(0,s.useState)("Body parts"),l=(0,i.Z)(o,2),u=l[0],m=l[1],f=(0,s.useState)(1),p=(0,i.Z)(f,2),h=p[0],j=p[1],E=(0,s.useState)(x.ZT),F=(0,i.Z)(E,2),C=F[0],I=F[1],k=(0,s.useState)(),P=(0,i.Z)(k,2),Z=P[0],N=P[1];(0,s.useEffect)((function(){var t=e.pathname;I(t)}),[e.pathname]);var b=C===x.ZT;return(0,_.jsxs)(_.Fragment,{children:[r&&1===a&&(0,_.jsx)(T.Z,{}),!b&&(0,_.jsx)(d,{}),(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)(c.Z,{title:b?"Exercises":u}),(0,_.jsx)(g,{selectedCategory:u,setSelectedCategory:m,setCurrentPage:j,setPath:I})]}),b?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(y,{type:u,page:h,limit:Z,setLimit:N}),(0,_.jsx)(w,{currentPage:h,setCurrentPage:j,limit:Z})]}):(0,_.jsx)(L.fZ,{})]})}}}]);
//# sourceMappingURL=126.55c03654.chunk.js.map