"use strict";(self.webpackChunkpowerpulse=self.webpackChunkpowerpulse||[]).push([[355],{7225:function(e,r,s){s.d(r,{Z:function(){return f}});s(2791);var i=s(5705),a=s(182),t="FormField_fieldWrapper__KIXAg",n="FormField_error__wnDNA",o="FormField_success__y+nuE",u="FormField_field__SGWnB",c="FormField_messageWrapper__-J9sU",l="FormField_errorMessage__A9nB5",d="FormField_svgSuccess__eH+rK",m="FormField_svgError__7bZSD",h="FormField_successMessage__n1ZSt",p=s(3329),_=function(e){var r=e.fieldName,s=e.fieldType,_=e.placeholder,f=e.formik,g=e.successMessage;e.isPassword;return(0,p.jsxs)("div",{className:"".concat(t," ").concat(f.touched[r]&&f.errors[r]?"".concat(n):f.touched[r]&&!f.errors[r]?"".concat(o):""),children:[(0,p.jsx)(i.gN,{className:u,type:s,name:r,placeholder:_}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(a.Z,{"data-status":"error",className:m,iconId:"icon-red"}),(0,p.jsx)(i.Bc,{className:l,name:r,component:"div"})]}),f.touched[r]&&!f.errors[r]&&(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(a.Z,{"data-status":"success",className:d,iconId:"icon-green"}),(0,p.jsx)("div",{className:h,children:g})]})]})},f=function(e,r,s,i,a,t){return(0,p.jsx)(_,{fieldName:e,fieldType:r,placeholder:s,formik:i,successMessage:a,isPassword:t})}},5531:function(e,r,s){var i=s(9439),a=s(2791);r.Z=function(){var e=(0,a.useState)(!1),r=(0,i.Z)(e,2),s=r[0],t=r[1];return{showPassword:s,handleClick:(0,a.useCallback)((function(){t((function(e){return!e}))}),[])}}},8355:function(e,r,s){s.r(r),s.d(r,{default:function(){return k}});var i=s(7689),a=s(1087),t="AuthPage_title__Lon1J",n="AuthPage_text__39734",o="AuthPage_textWrapper__qT-PO",u="AuthPage_textHint__nlAFj",c="AuthPage_link__HQ0pz",l=s(2041),d=s(2791),m=s(9434),h=s(5705),p="AuthForm_form__Fzy2u",_="AuthForm_formWrapper__i4Npv",f="AuthForm_buttonEye__sThsg",g="AuthForm_svgEye__9zGoC",v="AuthForm_link__ymY5D",x=s(9894),w=s(182),F=s(7225),y=s(2598),Z=s(9370),b=s(7834),N=s(5531),j=s(3329),q={name:"",email:"",password:""},A={email:"",password:""},R=function(e){var r=e.isSignUp,s=e.title,t=(0,m.I0)(),n=(0,i.s0)(),o=(0,N.Z)(),u=o.showPassword,c=o.handleClick,R=(0,b.Z)(),S=R.isVerify,k=R.user,M=(0,d.useRef)();(0,d.useEffect)((function(){M.current&&M.current.resetForm(),S&&!k.profileSettings&&n(l._2),S&&k.profileSettings&&n(l.zw)}),[r,S,n,k]);var z=r?q:A,P=r?Z.EQ:Z.zG,E=r?function(e,r){var s=e.name,i=e.email,a=e.password,n=r.resetForm;t((0,y.$_)({name:s,email:i,password:a})),n()}:function(e,r){var s=e.email,i=e.password,a=r.resetForm;t((0,y.pH)({email:s,password:i})),a()};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(h.J9,{initialValues:z,validationSchema:P,onSubmit:E,innerRef:M,children:function(e){return(0,j.jsxs)(h.l0,{className:p,children:[(0,j.jsxs)("div",{className:_,children:[r&&(0,F.Z)("name","text","Name",e,"Success name"),(0,F.Z)("email","email","Email",e,"Success email"),(0,j.jsxs)("div",{style:{position:"relative"},children:[(0,F.Z)("password",u?"text":"password","Password",e,"Success password",!0),!r&&(0,j.jsx)(a.rU,{to:l.FM,className:v,children:"Forget your password"}),(0,j.jsx)("button",{className:f,type:"button",onClick:c,children:(0,j.jsx)(w.Z,{className:g,iconId:u?"icon-eye":"icon-eye-off"})})]})]}),(0,j.jsx)(x.Z,{text:s})]})}})})},S=s(427),k=function(){var e=(0,i.TH)().pathname===l.zN,r=e?"Sign Up":"Sign In",s=e?"Sign In":"Sign Up",d=e?l.vf:l.zN,m=e?" Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.":"Welcome! Please enter your credentials to login to the platform:";return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.Z,{}),(0,j.jsx)("h1",{className:t,children:r}),(0,j.jsx)("p",{className:n,children:m}),(0,j.jsx)(R,{isSignUp:e,title:r}),(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("p",{className:u,children:"Don\u2019t have an account?"}),(0,j.jsx)(a.rU,{className:c,to:d,children:s})]})]})}},5031:function(e,r,s){var i=s(8007),a=i.Ry().shape({amount:i.Rx().positive("Amount must be a positive number").required("Amount is required")});r.Z=a},9370:function(e,r,s){s.d(r,{rQ:function(){return c},bu:function(){return u},zG:function(){return n},EQ:function(){return o}});var i=s(8007),a=/^\w+(-?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,t=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/,n=i.Ry().shape({email:i.Z_().matches(a,"Invalid email format").required("Required field"),password:i.Z_().matches(t,"Must contain at least 1 capital and 1 digit").required("Required field")}),o=i.Ry().shape({name:i.Z_().required("Required field"),email:i.Z_().matches(a,"Invalid email format").required("Required field"),password:i.Z_().matches(t,"Must contain 8 characters, at least 1 capital and 1 number.").required("Required field")}),u=(s(9880),s(5031),i.Ry().shape({password:i.Z_().matches(t,"Must contain at least 1 capital and 1 digit").required("Required field")})),c=i.Ry().shape({email:i.Z_().matches(a,"Invalid email format").required("Required field")})},9880:function(e,r,s){var i=s(8007),a=new Date;a.setFullYear(a.getFullYear()-18);var t=i.Ry({name:i.Z_().required("Name is required"),height:i.Rx("Number").typeError("Must be a number").positive("Must be positive.").min(150,"Height must be at least 150cm").required("Height is required"),currentWeight:i.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Current weight must be at least 35kg").required("Current weight is required"),desiredWeight:i.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Desired weight must be at least 35kg").required("Desired weight is required"),birthday:i.hT().max(a,"Birthday must be in the past").min(new Date("1900-01-01"),"Birthday must be after 1900-01-01").required("Birthday is required")});r.Z=t}}]);
//# sourceMappingURL=355.9daab50b.chunk.js.map