"use strict";(self.webpackChunkpowerpulse=self.webpackChunkpowerpulse||[]).push([[800],{2610:function(e,a,s){s.d(a,{Z:function(){return h}});var t="StatisticsItem_statisticItem__ZAGsK",n="StatisticsItem_statisticItemPositive__kw-pk",c="StatisticsItem_statisticItemNegative__HJTjN",r="StatisticsItem_primaryStatisticItem__WSxqY",i="StatisticsItem_statisticTitleWrap__NRxuv",l="StatisticsItem_statisticTitle__9-4pX",o="StatisticsItem_statisticPrimaryTitle__4BDlN",d="StatisticsItem_statisticIcon__X8AOQ",u="StatisticsItem_statisticValue__qdzXl",m=s(182),_=s(3329),h=function(e){var a=e.statisticsName,s=e.statisticsIcon,h=e.statisticsValue,x=e.statisticPrimary,y=e.fulfilledNorm,j=void 0===y?"":y;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("li",{className:"".concat(t," ").concat(x&&r," ").concat(""!==j&&"positive"===j?n:""!==j&&"negative"===j?c:""),children:[(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)(m.Z,{className:d,iconId:s}),(0,_.jsx)("p",{className:"".concat(l," ").concat(x&&o),children:a})]}),(0,_.jsx)("div",{className:u,children:h})]})})}},4112:function(e,a,s){s.d(a,{Z:function(){return c}});var t="TitlePage_title__zyjBQ",n=s(3329);function c(e){var a=e.title;return(0,n.jsx)("h1",{className:t,children:a})}},1301:function(e,a,s){var t=s(9434),n=s(3027);a.Z=function(){return{diaryProducts:(0,t.v9)(n.P3),diaryExercises:(0,t.v9)(n.KR),diaryIsLoading:(0,t.v9)(n.$x),diaryError:(0,t.v9)(n.QN)}}},800:function(e,a,s){s.r(a),s.d(a,{default:function(){return Ne}});var t=s(5861),n=s(9439),c=s(4687),r=s.n(c),i="DiaryPage_diaryPage__pKsQy",l="DiaryPage_calendarWrap__cPPCu",o="DiaryPage_calendar__EWxfj",d="DiaryPage_sectionWrap__fGhT1",u=s(4112),m="DayDashboard_dayDashboard__XV93s",_="DayDashboard_statisticList__nct9L",h="DayDashboard_adviceWrap__d1eN6",x="DayDashboard_adviceIconWrap__f+yUg",y="DayDashboard_exclamationIcon__xfLbC",j="DayDashboard_adviceText__Ky3eB",N=s(182),v=s(2610),p=s(9434),f=s(4289),b=s(3027),D=function(){var e,a,s=(0,p.v9)(f.dy),t=(0,p.v9)(b.P3),n=(0,p.v9)(b.KR),c=null!==(e=null===(a=s.profileSettings)||void 0===a?void 0:a.bmr)&&void 0!==e?e:"0",r=t.reduce((function(e,a){return e+a.calories}),0),i=c-r,l=n.reduce((function(e,a){return e+a.calories}),0),o=n.reduce((function(e,a){return e+a.time}),0);return{dailyCalorieIntake:c,caloriesConsumed:r,caloriesRemaining:i,dailyPhysicalActivity:110,caloriesBurned:l,sportsRemaining:Math.floor(o/60)-110}},I=s(3329),g=function(){var e=D(),a=e.dailyCalorieIntake,s=e.caloriesConsumed,t=e.caloriesRemaining,n=e.dailyPhysicalActivity,c=e.caloriesBurned,r=e.sportsRemaining,i=s<a?"positive":"negative",l=r>0?"positive":"negative";return(0,I.jsxs)("div",{className:m,children:[(0,I.jsxs)("ul",{className:_,children:[(0,I.jsx)(v.Z,{statisticsName:"Daily calorie intake",statisticsValue:"".concat(a),statisticsIcon:"Fluent_food",statisticPrimary:!0}),(0,I.jsx)(v.Z,{statisticsName:"Daily physical activity",statisticsValue:"".concat(n," min"),statisticsIcon:"Dumbbell",statisticPrimary:!0}),(0,I.jsx)(v.Z,{statisticsName:"\u0421alories consumed",statisticsValue:"".concat(s),statisticsIcon:"Apple"}),(0,I.jsx)(v.Z,{statisticsName:"\u0421alories burned",statisticsValue:"".concat(c),statisticsIcon:"Calories"}),(0,I.jsx)(v.Z,{statisticsName:"Calories remaining",statisticsValue:"".concat(t),statisticsIcon:"Bubble",fulfilledNorm:i}),(0,I.jsx)(v.Z,{statisticsName:"Sports remaining",statisticsValue:"positive"===l?"+".concat(r," min"):"".concat(r," min"),statisticsIcon:"Runner",fulfilledNorm:l})]}),(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)("div",{className:x,children:(0,I.jsx)(N.Z,{className:y,iconId:"tabler:exclamation-mark"})}),(0,I.jsx)("p",{className:j,children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},T="DayExercises_dayExecrcises__bQ6ZY",P="DayExercises_dayScrollWrap__LYu-4",k="DayExercises_diaryNav__wSSyn",S="DayExercises_diarySubtitle__56ycD",C=s(1301),w=s(2041),E=s(2791),Z=s(1087),W="ButtonAddItem_addButtonLink__6S3vs",L="ButtonAddItem_addButtonImg__mhW8u",V=function(e){var a=e.titleLink,s=e.titleRoute;return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(Z.OL,{className:W,to:s,children:[a,(0,I.jsx)(N.Z,{className:L,iconId:"Arrow"})]})})},R={diaryMainItem:"ExercisesTable_diaryMainItem__Uq6bI",table:"ExercisesTable_table__57s17",element:"ExercisesTable_element__XGGXa",elementWrap:"ExercisesTable_elementWrap__Dw79t",nameCategory:"ExercisesTable_nameCategory__NXhaV",nameValue:"ExercisesTable_nameValue__ktQfv",trashImg:"ExercisesTable_trashImg__f8acI",nameTrash:"ExercisesTable_nameTrash__DY8HQ",bodyTable:"ExercisesTable_bodyTable__D7rlB",diaryMainList:"ExercisesTable_diaryMainList__eIyzS"},F=s(9577),B=s(7120),A=function(e){var a=e.exercises,s=(0,p.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("ul",{className:R.diaryMainList,children:a.map((function(e){var a=e._id,t=e.bodyPart,n=e.equipment,c=e.name,r=e.target,i=e.calories,l=e.time;return(0,I.jsx)("li",{className:R.diaryMainItem,children:(0,I.jsxs)("table",{className:R.table,children:[(0,I.jsxs)("tbody",{className:R.bodyTable,children:[(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Body Part"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(t)})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Equipment"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(n)})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Name"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(c)})]})]}),(0,I.jsxs)("tbody",{className:R.elementWrap,children:[(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Target"}),(0,I.jsx)("td",{className:R.nameValue,children:(0,F.Z)(r)})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Burned Calories"}),(0,I.jsx)("td",{className:R.nameValue,children:i})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:R.nameCategory,children:"Time"}),(0,I.jsx)("td",{className:R.nameValue,children:l})]}),(0,I.jsxs)("tr",{className:R.element,children:[(0,I.jsx)("th",{className:"".concat(R.nameCategory," ").concat(R.nameTrash),children:"Trash"}),(0,I.jsx)("td",{className:R.trashValue,onClick:function(){return function(e){s((0,B.xm)(e))}(a)},children:(0,I.jsx)(N.Z,{className:R.trashImg,iconId:"Trash"})})]})]})]})},a)}))})})},M="EmptyList_notFoundPlugTextWrap__t6Msc",K="EmptyList_notFoundPlugText__zPRyy",Q=function(e){var a=e.listName;return(0,I.jsx)("div",{className:M,children:(0,I.jsxs)("p",{className:K,children:["Not found ",a]})})},X=function(){var e=(0,C.Z)().diaryExercises;return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:T,children:(0,I.jsxs)("div",{className:P,children:[(0,I.jsxs)("div",{className:k,children:[(0,I.jsx)("h3",{className:S,children:"Execrcises"}),(0,I.jsx)(V,{titleLink:"Add exercise",titleRoute:w.ZT})]}),0===e.length?(0,I.jsx)(Q,{listName:"exercises"}):(0,I.jsx)(A,{exercises:e})]})})})},Y="DayProducts_dayProducts__LAo5g",q="DayProducts_dayScrollWrap__DIuIV",G="DayProducts_diaryNav__JjD4d",H="DayProducts_diarySubtitle__3acfh",J="ProductsTable_diaryMainItem__qlJX4",z="ProductsTable_element__aIisf",O="ProductsTable_elementWrap__0QI3A",U="ProductsTable_nameCategory__e1unZ",$="ProductsTable_nameValue__dFBF+",ee="ProductsTable_recommendWrap__ZRMtE",ae="ProductsTable_productRecommend__rAcms",se="ProductsTable_productNotRecommend__reFto",te="ProductsTable_trashValue__YrW-N",ne="ProductsTable_trashImg__HTxxa",ce="ProductsTable_nameTrash__tJVPK",re="ProductsTable_table__IpdJ7",ie="ProductsTable_bodyTable__JWiA8",le="ProductsTable_diaryMainList__bG8Dg",oe=function(e){var a=e.products,s=(0,p.I0)();return(0,I.jsx)("ul",{className:le,children:a.map((function(e,a){var t=e._id,n=e.title,c=e.category,r=e.calories,i=e.amount,l=e.recommended;return(0,I.jsx)("li",{className:J,children:(0,I.jsxs)("table",{className:re,children:[(0,I.jsxs)("tbody",{className:ie,children:[(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Title"}),(0,I.jsx)("td",{className:$,children:(0,F.Z)(n)})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Category"}),(0,I.jsx)("td",{className:$,children:(0,F.Z)(c)})]})]}),(0,I.jsxs)("tbody",{className:O,children:[(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Calories"}),(0,I.jsx)("td",{className:$,children:r})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Weight"}),(0,I.jsx)("td",{className:$,children:i})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:U,children:"Recommend"}),(0,I.jsx)("td",{className:$,children:(0,I.jsxs)("div",{className:"".concat(ee),children:[(0,I.jsx)("span",{className:"".concat(l?ae:se)}),l?"Yes":"No"]})})]}),(0,I.jsxs)("tr",{className:z,children:[(0,I.jsx)("th",{className:"".concat(U," ").concat(ce),children:"Trash"}),(0,I.jsx)("td",{className:te,onClick:function(){var e;e=t,s((0,B.Wq)(e))},children:(0,I.jsx)(N.Z,{className:ne,iconId:"Trash"})})]})]})]})},t)}))})},de=function(){var e=(0,C.Z)().diaryProducts;return(0,I.jsx)("div",{className:Y,children:(0,I.jsxs)("div",{className:q,children:[(0,I.jsxs)("div",{className:G,children:[(0,I.jsx)("h3",{className:H,children:"Products"}),(0,I.jsx)(V,{titleLink:"Add product",titleRoute:w.H1})]}),0===e.length?(0,I.jsx)(Q,{listName:"products"}):(0,I.jsx)(oe,{products:e})]})})},ue={daySwitch:"DaySwitch_daySwitch__Fv7Lz",inputWrap:"DaySwitch_inputWrap__Ra4R+",calendarInput:"DaySwitch_calendarInput__0uBnb",calendarIcon:"DaySwitch_calendarIcon__LyIhh",currentDate:"DaySwitch_currentDate__BhZlX",chevronIconWrap:"DaySwitch_chevronIconWrap__ooP6n",chevronIcon:"DaySwitch_chevronIcon__ih5GH",chevronLeftIcon:"DaySwitch_chevronLeftIcon__E70xl"},me=s(9513),_e=s.n(me),he=s(7834),xe=(s(8639),(0,E.forwardRef)((function(e,a){var s=e.value,t=e.onClick,n=e.onChange,c=e.onKeyDown;return(0,I.jsx)("div",{children:(0,I.jsx)("input",{ref:a,className:ue.calendarInput,value:s,onClick:function(e){t(e)},onChange:function(e){n(e.target.value)},onKeyDown:c,readOnly:!0})})}))),ye=function(e){var a=e.handleDate,s=(0,E.useState)(new Date),t=(0,n.Z)(s,2),c=t[0],r=t[1],i=(0,E.useState)(!1),l=(0,n.Z)(i,2),o=l[0],d=l[1],u=(0,he.Z)().user,m=new Date(u.registrDate);(0,E.useEffect)((function(){a(c)}),[c,a]);return(0,I.jsxs)("div",{children:[(0,I.jsx)("style",{children:"\n  .react-datepicker__month-container{\n    border-radius: 8px;\n    background: #EF8964;\n  }\n  .react-datepicker__header {\n    background-color:  #EF8964;\n    color: #EFEDE8;\n  }\n    .react-datepicker__year-read-view{\n      display:none;\n    }\n  .react-datepicker__day-name{\n     color:rgba(239, 237, 232, 0.50);\n}\n.react-datepicker__day--disabled{\n  color:rgba(239, 237, 232, 0.50) !important;\n}\n\n.react-datepicker__day--disabled:hover{\n  background-color:inherit !important;\n}\n   .react-datepicker__current-month {\n     color:#EFEDE8;\n}\n.react-datepicker__day--selected{\n  border-radius: 50px;\n  background-color: black;\n}\n.react-datepicker__day {\n  color:#EFEDE8;\n}\n.react-datepicker__day:hover{\n background-color:black;\nborder-radius: 50px;\ntransition: all 150ms linear;\n}\n"}),(0,I.jsxs)("div",{className:ue.daySwitch,children:[(0,I.jsxs)("div",{className:ue.inputWrap,onClick:function(){document.querySelector(".".concat(ue.calendarInput)).click()},children:[(0,I.jsx)(_e(),{showYearDropdown:!0,scrollableYearDropdown:!0,yearDropdownItemNumber:100,dateFormat:"dd/MM/yyyy",selected:c,onChange:function(e){r(e)},onKeyDown:function(e){"Escape"===e.key&&o&&d(!1)},minDate:m,maxDate:new Date,calendarClassName:ue.customCalendar,dayClassName:function(e){return e.toDateString()===(new Date).toDateString()?"".concat(ue.currentDate):null},customInput:(0,I.jsx)(xe,{}),onClickOutside:function(){return d(!1)}}),(0,I.jsx)("div",{children:(0,I.jsx)(N.Z,{className:ue.calendarIcon,iconId:"Calendar"})})]}),(0,I.jsxs)("div",{className:ue.chevronIconWrap,children:[(0,I.jsx)(N.Z,{className:"".concat(ue.chevronIcon," ").concat(ue.chevronLeftIcon),iconId:"Chevron",onClick:function(){var e=new Date(c);e.setHours(0,0,0,0),e>m&&(e.setDate(e.getDate()-1),r(e))}}),(0,I.jsx)(N.Z,{className:ue.chevronIcon,iconId:"Chevron",onClick:function(){var e=new Date(c);e.setDate(e.getDate()+1),e<=new Date&&r(e)}})]})]})]})},je=s(0),Ne=function(){var e=(0,p.I0)(),a=(0,E.useState)(null),s=(0,n.Z)(a,2),c=s[0],m=s[1];(0,E.useEffect)((function(){!function(){if(c){var a={date:c};e((0,B.hw)(a))}}()}),[e,c]);var _=function(){var e=(0,t.Z)(r().mark((function e(a){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,je.Z)(a),e.next=3,m(s);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,I.jsxs)("div",{className:i,children:[(0,I.jsxs)("div",{className:l,children:[(0,I.jsx)(u.Z,{title:"Diary"}),(0,I.jsx)("div",{className:o,children:(0,I.jsx)(ye,{handleDate:_})})]}),(0,I.jsxs)("div",{className:d,children:[(0,I.jsx)(g,{}),(0,I.jsxs)("div",{children:[(0,I.jsx)(de,{}),(0,I.jsx)(X,{})]})]})]})}},3027:function(e,a,s){s.d(a,{$x:function(){return c},KR:function(){return n},P3:function(){return t},QN:function(){return r}});var t=function(e){return e.diary.diaryProducts},n=function(e){return e.diary.diaryExercises},c=function(e){return e.diary.isLoading},r=function(e){return e.diary.error}},9577:function(e,a){a.Z=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}},0:function(e,a){a.Z=function(e){var a=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),t=e.getFullYear();return"".concat(t,"-").concat(s,"-").concat(a)}}}]);
//# sourceMappingURL=800.5ad438ef.chunk.js.map