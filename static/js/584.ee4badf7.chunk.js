"use strict";(self.webpackChunkpowerpulse=self.webpackChunkpowerpulse||[]).push([[584],{4112:function(e,t,r){r.d(t,{Z:function(){return n}});var i="TitlePage_title__zyjBQ",s=r(3329);function n(e){var t=e.title;return(0,s.jsx)("h1",{className:i,children:t})}},5781:function(e,t,r){r.d(t,{Z:function(){return u}});var i=r(9434),s=function(e){return e.exercises.exercisesFilter},n=function(e){return e.exercises.totalRecords},c=function(e){return e.exercises.itemsSelectedFilter},a=function(e){return e.exercises.isLoading},o=function(e){return e.exercises.error},l=function(e){return e.exercises.getMore},u=function(){return{exercisesFilter:(0,i.v9)(s),exercisesTotalRecords:(0,i.v9)(n),exercisesItemsSelectFilter:(0,i.v9)(c),exercisesIsLoading:(0,i.v9)(a),exercisesError:(0,i.v9)(o),exercisesGetMore:(0,i.v9)(l)}}},8584:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var i=r(9439),s=r(2791),n=r(4112),c="ExercisesPage_wrapperTopLine__4Gv7f",a=r(2041),o={categoryUl:"ExercisesFilter_categoryUl__9GPTM",backButton:"ExercisesFilter_backButton__+cuVM",subCatH:"ExercisesFilter_subCatH__fBj9k",sliderUl:"ExercisesFilter_sliderUl__Iujgm",sliderLi:"ExercisesFilter_sliderLi__65RO1",active:"ExercisesFilter_active__ETb-K",exercisesContainer:"ExercisesFilter_exercisesContainer__1ubKS",exerciseItem:"ExercisesFilter_exerciseItem__yN73B",sliderContainer:"ExercisesFilter_sliderContainer__-S0qj",pagination:"ExercisesFilter_pagination__DUwIu",paginationDot:"ExercisesFilter_paginationDot__vZAFD",activeDot:"ExercisesFilter_activeDot__IsFyc"},l=r(3329);var u=function(e){var t=e.selectedCategory,r=e.setSelectedCategory,i=e.setCurrentPage,s=e.setPath,n=function(e){return"".concat(t===e?o.active:""," ").concat(o.sliderLi)};return(0,l.jsx)("div",{className:o.categoryContainer,children:(0,l.jsx)("ul",{className:o.sliderUl,children:["Body parts","Equipment","Muscles"].map((function(e){return(0,l.jsx)("li",{onClick:function(){return function(e){t!==e&&(i(1),s(a.ZT)),r(e)}(e)},className:n(e),children:e},e)}))})})},x=r(7689),_=r(9434),d=r(5781),m=r(2232),g="ExercisesSubcategoriesItem_exerciseItemWrap__+WjCw",f="ExercisesSubcategoriesItem_exerciseItem__S5cc+",v=function(e){var t=e.exercise,r=e.onClick;return(0,l.jsxs)("div",{className:g,onClick:r,children:[(0,l.jsx)("span",{className:f,children:t.name}),(0,l.jsx)("img",{src:t.imgURL,alt:t.filter})]})},p="ExercisesItemType_exercisesContainer__rIv7J",h="ExercisesItemType_exerciseItem__GW0cF",E=r(365);var j=function(e){var t=e.type,r=void 0===t?"Body parts":t,i=e.page,n=e.limit,c=e.setLimit,o=(0,d.Z)(),u=o.exercisesFilter,g=o.exercisesIsLoading,f=(0,x.s0)(),j=(0,_.I0)(),C=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--item-width")),F=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--item-height"));return(0,s.useEffect)((function(){var e=function(){var e=window.innerWidth;c(e>=1440||e<768?10:9)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[c]),(0,s.useEffect)((function(){j((0,E.h)({type:r,page:i,limit:n}))}),[j,r,i,n]),(0,l.jsxs)(l.Fragment,{children:[g&&(0,l.jsx)(m.Z,{}),(0,l.jsx)("div",{className:p,children:u&&u.map((function(e){return(0,l.jsx)("div",{className:h,children:(0,l.jsx)(v,{exercise:e,style:{width:C,height:F},onClick:function(){return t=e._id,void f("".concat(a.ZT,"/").concat(t));var t}})},e._id)}))})]})},C="ExercisesPagination_active__LmjRw",F="ExercisesPagination_pagination__qF7m-",y="ExercisesPagination_paginationDot__IEe+i",I="ExercisesPagination_activeDot__G6UhK";var P=function(e){var t=e.currentPage,r=e.setCurrentPage,i=e.limit,s=(0,d.Z)(),n=s.exercisesFilter,c=s.exercisesTotalRecords,a=n?Math.ceil(c/i):0,o=i!==c;return(0,l.jsx)(l.Fragment,{children:o&&(0,l.jsx)("div",{className:F,children:Array.from({length:a},(function(e,s){return s*i<c&&(0,l.jsx)("span",{onClick:function(){return function(e){var t=Math.min(Math.max(1,e),a);(t-1)*i<c&&r(t)}(s+1)},className:t===s+1?"".concat(C," ").concat(y," ").concat(I):y,children:"\u2022"},s+1)}))})})},w=r(4812),Z=function(){var e=(0,x.TH)(),t=(0,s.useState)("Body parts"),r=(0,i.Z)(t,2),o=r[0],_=r[1],d=(0,s.useState)(1),m=(0,i.Z)(d,2),g=m[0],f=m[1],v=(0,s.useState)(a.ZT),p=(0,i.Z)(v,2),h=p[0],E=p[1],C=(0,s.useState)(),F=(0,i.Z)(C,2),y=F[0],I=F[1];(0,s.useEffect)((function(){var t=e.pathname;E(t)}),[e.pathname]);var Z=h===a.ZT;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)(n.Z,{title:"Exercises"}),(0,l.jsx)(u,{selectedCategory:o,setSelectedCategory:_,setCurrentPage:f,setPath:E})]}),Z?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{type:o,page:g,limit:y,setLimit:I}),(0,l.jsx)(P,{currentPage:g,setCurrentPage:f,limit:y})]}):(0,l.jsx)(w.fZ,{})]})}}}]);
//# sourceMappingURL=584.ee4badf7.chunk.js.map