(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1/IK":function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},RgzN:function(e,a,t){"use strict";t.r(a);var l=t("o0o1"),o=t.n(l),n=t("q1tI"),r=t("LvDl"),s=t.n(r),i=t("ffb8"),c=t("YFqc"),d=t.n(c),u=t("pjTg"),m=t("kluC"),p=t("qdu6"),b=n.createElement,N=function(e){e.t,e.i18n;var a=e.cinData,t=e.similarCompanies,l=void 0===t?[]:t;if(!a)return b(p.c,null,b("h1",{className:"my-4"},b("div",null,"NO DATA FOUND FOR CIN.")),b("div",null,"We will try to update the dataset with the given CIN"),b("div",null,"Please try again later after sometime"));var o=JSON.parse(a.data),n=[{title:"CIN",value:o.CIN},{title:"Company Name",value:o["Company Name"]},{title:"LLP Name",value:o["LLP Name"]},{title:"ROC Code",value:o["ROC Code"]},{title:"Registration Number",value:o["Registration Number"]},{title:"Company Category",value:o["Company Category"]},{title:"Company SubCategory",value:o["Company SubCategory"]},{title:"Class of Company",value:o["Class of Company"]},{title:"Authorised Capital(Rs)",value:o["Authorised Capital(Rs)"]},{title:"Paid up Capital(Rs)",value:o["Paid up Capital(Rs)"]},{title:"Number of Members(Applicable in case of company without Share Capital)",value:o["Number of Members(Applicable in case of company without Share Capital)"]},{title:"Number of Partners",value:o["Number of Partners"]},{title:"Number of Designated Partners",value:o["Number of Designated Partners"]},{title:"Date of Incorporation",value:o["Date of Incorporation"]},{title:"Registered Address",value:o["Registered Address"]},{title:"Address",value:o["Address other than R/o where all or any books of account and papers are maintained"]},{title:"Email Id",value:o["Email Id"]},{title:"Whether Listed or not",value:o["Whether Listed or not"]},{title:"Suspended at stock exchange",value:o["Suspended at stock exchange"]},{title:"Date of last AGM",value:o["Date of last AGM"]},{title:"Date of Balance Sheet",value:o["Date of Balance Sheet"]},{title:"Company Status(for efiling)",value:o["Company Status(for efiling)"]},{title:"LLP Status",value:o["LLP Status"]}],r=o["Company Name"]||o["LLP Name"],s={title:"".concat(r,", ").concat(o.CIN," - Company, charges, directors, CIN, DIN and contact details _ Kitaablu"),description:"Company information, business information, directors/partners details and director/partners contact information of ".concat(r,", ").concat(o.CIN)};return b(p.c,null,b(i.NextSeo,{title:s.title,description:s.description}),b("h1",{className:"my-4"},b("small",null,o.CIN),b("div",null,r)),b("div",{className:"card mb-4"},b("div",{className:"card-body"},b("div",{className:"table-responsive"},b("table",{className:"table table-hover"},b("tbody",null,n.filter((function(e){return e.value})).map((function(e){return b("tr",{key:e.title},b("th",{scope:"row"},e.title),b("td",null,e.value))}))))))),b("div",{className:"card mb-4"},b("h2",{className:"card-header"},"Directors"),b("div",{className:"card-body"},b("div",{className:"table-responsive"},b("table",{className:"table table-hover"},b("thead",null,b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col"},"#"),b("th",{scope:"col"},"DIN/PAN"),b("th",{scope:"col"},"Name"),b("th",{scope:"col"},"Begin date"),b("th",{scope:"col"},"End date"),b("th",{scope:"col"},"Surrendered DIN"))),b("tbody",null,o.dins.map((function(e,a){return b("tr",{key:"director_".concat(e[0]),className:"text-semibold text-reagent-gray"},b("td",null,a+1),b("td",null,b(d.a,{href:"/director/[din]",as:"/director/".concat(e[0])},b("a",null,e[0]))),b("td",null,e[6]),b("td",null,e[7]),b("td",null,e[8]),b("td",null,e[6]))}))))))),b("div",{className:"card mb-4"},b("h2",{className:"card-header"},"Charges"),b("div",{className:"card-body"},b("div",{className:"table-responsive"},b("table",{className:"table table-hover"},b("thead",{className:"bg-light"},b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col",className:"border-0"},"#"),b("th",{scope:"col",className:"border-0"},"Assets under charge"),b("th",{scope:"col",className:"border-0"},"Charge Amount"),b("th",{scope:"col",className:"border-0"},"Date of Creation"),b("th",{scope:"col",className:"border-0"},"Date of Modification"),b("th",{scope:"col",className:"border-0"},"Status"))),b("tbody",null,o.charges.map((function(e,a){return b("tr",{key:"charge_".concat(e[1],"_").concat(a),className:"text-semibold text-reagent-gray"},b("td",null,a+1),b("td",null,e[0]),b("td",null,e[1]),b("td",null,e[2]),b("td",null,e[3]),b("td",null,e[4]))}))))))),b("div",{className:"card mb-4"},b("h3",{className:"card-header"},"List of similar companies"),b("div",{className:"card-body"},l.length?b("div",{className:"table-responsive"},b("table",{className:"table table-hover table-sm"},b("thead",null,b("tr",{className:"text-semibold text-fiord-blue"},b("th",{scope:"col"},"#"),b("th",{scope:"col"},"CIN/FCRN"),b("th",{scope:"col"},"Company Name"))),b("tbody",null,l.map((function(e,a){return b("tr",{key:"director_".concat(e.CIN),className:"text-semibold text-reagent-gray"},b("td",null,a+1),b("td",null,b(d.a,{href:"/company/[cin]",as:"/company/".concat(e.CIN)},b("a",null,e.CIN))),b("td",null,e.company_name))}))))):b("div",null,"No similar company registered"))))};N.getInitialProps=function(e){var a,t;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=e.query.cin,t={cinData:null,similarCompanies:[]},l.prev=2,l.next=5,o.a.awrap(u.a.Request("GET","https://kitaablu.com/api/v1/company/".concat(a)));case 5:return t.cinData=l.sent,l.next=8,o.a.awrap(u.a.Request("GET","https://kitaablu.com/api/v1/company",{roc_code:s.a.get(t,"cinData.roc_code",void 0),class:s.a.get(t,"cinData.class",void 0),limit:100}));case 8:t.similarCompanies=l.sent,l.next=14;break;case 11:l.prev=11,l.t0=l.catch(2),console.log("Error while fetching details for cin: ",a,l.t0);case 14:return l.abrupt("return",t);case 15:case"end":return l.stop()}}),null,null,[[2,11]],Promise)};var h=Object(m.b)("common")(N);a.default=h},xiE8:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/[cin]",function(){return t("RgzN")}])}},[["xiE8",1,2,8,0,3,5,7,4]]]);