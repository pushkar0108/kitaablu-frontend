(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5XSU":function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),n=a.n(r),o=a("q1tI"),s=a("/MKj"),c=a("kluC"),i=a("bhCS"),u=a("qdu6"),d=o.createElement,l=function(e){e.t,e.i18n,e.cinData,Object(s.c)((function(e){return e.home})),Object(s.b)();return d(u.b,null,d("h1",{className:"my-4"},d("div",null,"Home")),d("div",{className:"card mb-4"},d("div",{className:"card-body"},d("h2",{className:"card-title"},"What we do?"),d("p",{className:"card-text"},"We are provider of commercial information and insight on businesses. The team have one goal - to be your sole resource for critical information. We gather data from a number of official sources and third parties to give you all the information you need, in one easy to use website."))),d("div",{className:"card mb-4"},d("div",{className:"card-body"},d("h2",{className:"card-title"},"We have authentic dataset"),d("p",{className:"card-text"},"We have a continuously growing dataset with data of more than 20 Lakh companies and 45 Lakh directors."))),d("div",{className:"card mb-4"},d("div",{className:"card-body"},d("h2",{className:"card-title"},"How well do you know your customers, suppliers or competitors ?"),d("p",{className:"card-text"},"When asked how well they know their competition, most business owners respond by naming direct competitors. Knowing your direct competitors is important, but it's not enough. Your direct competitors do not represent the entire competitive landscape facing your business, service or product. A myriad of other dangerous competitors are lurking out there. To succeed in the long term, you must identify, analyze, then differentiate from them."))),d("div",{className:"card mb-4"},d("div",{className:"card-body"},d("h2",{className:"card-title"},"Get data in your required formats"),d("p",{className:"card-text"},"Just mail us your requirements and we will provide you data in your required formats. We can also provide you director contact information. Feel free to connect.")),d("div",{className:"card-footer text-muted"},"Email us at kitaablueterprise@gmail.com")))};l.getInitialProps=function(e){return n.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.awrap(e.store.dispatch(i.a.GetApod({params:{hd:!0}})));case 2:return t.abrupt("return",{namespacesRequired:["common"]});case 3:case"end":return t.stop()}}),null,null,null,Promise)};var m=Object(c.b)("common")(l);t.default=m},"70uq":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return a("5XSU")}])},bhCS:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("o0o1"),n=a.n(r),o=a("h1MZ"),s=a("pjTg"),c=function(e){var t;return n.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n.a.awrap(s.a.Request("GET","/planetary/apod",e.params));case 3:t=a.sent,a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),t={copyright:"",date:"",explanation:"",hdurl:"",service_version:"",title:"",url:""};case 9:return a.abrupt("return",t);case 10:case"end":return a.stop()}}),null,null,[[0,6]],Promise)},i={Map:function(e){return{payload:e,type:o.a.Home.SetReducer}},Reset:function(){return{type:o.a.Home.ResetReducer}},GetApod:function(e){return function(t){var a;return n.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.a.awrap(c({params:e.params}));case 2:a=r.sent,t({payload:{image:a},type:o.a.Home.SetReducer});case 4:case"end":return r.stop()}}),null,null,null,Promise)}}}}},[["70uq",0,2,1,3,5,6,4]]]);