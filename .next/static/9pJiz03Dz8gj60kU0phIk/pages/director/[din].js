(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"68Av":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/director/[din]",function(){return a("K7wr")}])},K7wr:function(e,t,a){"use strict";a.r(t);var l=a("o0o1"),n=a.n(l),c=a("q1tI"),o=a("YFqc"),s=a.n(o),r=a("ffb8"),i=a("/MKj"),d=a("pjTg"),u=a("kluC"),m=a("bhCS"),p=a("qdu6"),b=c.createElement,N=function(e){e.t,e.i18n;var t=e.dinData,a=(Object(i.c)((function(e){return e.home})),Object(i.b)(),[{title:"DIN",value:t.DIN},{title:"Name",value:t.name},{title:"Date of birth",value:t.dob},{title:"Father Name",value:"*********"},{title:"Mobile",value:"*********"},{title:"Phone",value:"*********"},{title:"Email",value:"*********"},{title:"Address",value:"*********"},{title:"City",value:t.city},{title:"Gender",value:t.gender}]),l=t.name,n={title:"".concat(t.name,", ").concat(t.DIN," - Company, charges, directors, CIN, DIN and contact details _ Kitaablu"),description:"Company information, business information, directors/partners details and director/partners contact information of ".concat(l,", ").concat(t.DIN)};return b(p.b,null,b(r.NextSeo,{title:n.title,description:n.description}),b("h1",{className:"my-4"},b("small",null,t.DIN),b("div",null,l)),b("div",{className:"card mb-4"},b("div",{className:"card-body"},b("table",{className:"table table-hover"},b("tbody",null,a.map((function(e){return b("tr",{key:e.title},b("th",{scope:"row"},e.title),b("td",null,e.value))})))))),b("div",{className:"card mb-4"},b("h2",{className:"card-header"},"List Of Companies"),b("div",{className:"card-body"},t.companies.length?b("table",{className:"table table-hover"},b("thead",null,b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col"},"#"),b("th",{scope:"col"},"CIN/FCRN"),b("th",{scope:"col"},"Company Name"),b("th",{scope:"col"},"Begin date"),b("th",{scope:"col"},"End date"),b("th",{scope:"col"},"Active compliance"))),b("tbody",null,t.companies.map((function(e,t){return b("tr",{key:"director_".concat(e.CIN),className:"text-semibold text-reagent-gray"},b("td",null,t+1),b("td",null,b(s.a,{href:"/company/[cin]",as:"/company/".concat(e.CIN)},b("a",null,e.CIN))),b("td",null,e.name),b("td",null,e.beginDate),b("td",null,e.endDate),b("td",null,e.status))})))):b("div",null,"No Companies mapped to the director"))),b("div",{className:"card mb-4"},b("h2",{className:"card-header"},"List Of LLP"),b("div",{className:"card-body"},t.llps.length?b("table",{className:"table table-hover"},b("thead",{className:"bg-light"},b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col",className:"border-0"},"#"),b("th",{scope:"col",className:"border-0"},"LLPIN/FLLPIN"),b("th",{scope:"col",className:"border-0"},"LLP Name"),b("th",{scope:"col",className:"border-0"},"Begin date"),b("th",{scope:"col",className:"border-0"},"End date"),b("th",{scope:"col",className:"border-0"},"Status"))),b("tbody",null,t.llps.map((function(e,t){return b("tr",{key:"charge_".concat(e.CIN),className:"text-semibold text-reagent-gray"},b("td",null,t+1),b("td",null,b(s.a,{href:"/company/[cin]",as:"/company/".concat(e.CIN)},b("a",null,e.CIN))),b("td",null,e.name),b("td",null,e.beginDate),b("td",null,e.endDate),b("td",null,e.status))})))):b("div",null,"No LLPs mapped to the director"))))};N.getInitialProps=function(e){var t,a;return n.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.query.din,l.next=3,n.a.awrap(d.a.Request("GET","api/v1/director/".concat(t)));case 3:return a=l.sent,l.next=6,n.a.awrap(e.store.dispatch(m.a.GetApod({params:{hd:!0}})));case 6:return l.abrupt("return",{namespacesRequired:["common"],dinData:a});case 7:case"end":return l.stop()}}),null,null,null,Promise)};var h=Object(u.b)("common")(N);t.default=h}},[["68Av",1,2,0,3,5,6,4]]]);