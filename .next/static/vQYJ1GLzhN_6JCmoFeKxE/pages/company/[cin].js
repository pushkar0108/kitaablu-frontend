(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RgzN:function(e,a,t){"use strict";t.r(a);var i=t("o0o1"),o=t.n(i),s=t("q1tI"),l=t.n(s),r=t("LvDl"),n=t.n(r),c=t("ffb8"),d=t("YFqc"),u=t.n(d),m=t("pjTg"),p=t("kluC"),h=t("qdu6"),N=l.a.createElement,b=function(e){e.t,e.i18n;var a=e.cinData,t=e.similarCompanies,i=void 0===t?[]:t;if(!a)return N(h.d,null,N("h1",{className:"my-4"},N("div",null,"NO DATA FOUND FOR CIN.")),N("div",null,"We will try to update the dataset with the given CIN"),N("div",null,"Please try again later after sometime"));var o=JSON.parse(a.data),s=[{title:"CIN",value:o.CIN},{title:"Company Name",value:o["Company Name"]},{title:"LLP Name",value:o["LLP Name"]},{title:"ROC Code",value:o["ROC Code"]},{title:"Registration Number",value:o["Registration Number"]},{title:"Company Category",value:o["Company Category"]},{title:"Company SubCategory",value:o["Company SubCategory"]},{title:"Class of Company",value:o["Class of Company"]},{title:"Authorised Capital(Rs)",value:o["Authorised Capital(Rs)"]},{title:"Paid up Capital(Rs)",value:o["Paid up Capital(Rs)"]},{title:"Number of Members(Applicable in case of company without Share Capital)",value:o["Number of Members(Applicable in case of company without Share Capital)"]},{title:"Number of Partners",value:o["Number of Partners"]},{title:"Number of Designated Partners",value:o["Number of Designated Partners"]},{title:"Date of Incorporation",value:o["Date of Incorporation"]},{title:"Registered Address",value:o["Registered Address"]},{title:"Address",value:o["Address other than R/o where all or any books of account and papers are maintained"]},{title:"Email Id",value:o["Email Id"]},{title:"Whether Listed or not",value:o["Whether Listed or not"]},{title:"Suspended at stock exchange",value:o["Suspended at stock exchange"]},{title:"Date of last AGM",value:o["Date of last AGM"]},{title:"Date of Balance Sheet",value:o["Date of Balance Sheet"]},{title:"Company Status(for efiling)",value:o["Company Status(for efiling)"]},{title:"LLP Status",value:o["LLP Status"]}],l=o["Company Name"]||o["LLP Name"],r={title:"".concat(l,", ").concat(o.CIN," - Company, charges, directors, CIN, DIN and contact details _ Kitaablu"),description:"Company information, business information, directors/partners details and director/partners contact information of ".concat(l,", ").concat(o.CIN)};return N(h.d,{containerClass:"container-fluid",gridSize:{left:"col-md-2",mid:"col-lg-7 col-md-8",right:"col-lg-3 col-md-4"},leftNav:N("div",{className:"sticky-top",style:{top:"100px"}},N("div",{id:"list-example",className:"list-group shadow-sm bg-white rounded"},N("a",{className:"list-group-item list-group-item-action",href:"#intro"},"Introduction"),N("a",{className:"list-group-item list-group-item-action",href:"#basicInfo"},"Basic Information"),N("a",{className:"list-group-item list-group-item-action",href:"#directors"},"Directors"),N("a",{className:"list-group-item list-group-item-action",href:"#charges"},"Charges"),N("a",{className:"list-group-item list-group-item-action",href:"#similarCompanies"},"Similar Companies")),N(h.b,{lastUpdatedAt:a.updated_at,entityType:"1",entityId:o.CIN}))},N(c.NextSeo,{title:r.title,description:r.description}),N("h1",{className:"my-4"},N("small",null,o.CIN),N("div",null,l)),N("div",{className:"card mb-4 shadow bg-white rounded",id:"intro"},N("div",{className:"card-body"},N("div",null,l," is a ",o["Class of Company"]," incorporated on ",o["Date of Incorporation"],". It is classified as ",o["Company SubCategory"]," and is registered at Registrar of Companies, ",o["ROC Code"],". It's authorized share capital is INR ",o["Authorised Capital(Rs)"]," and paid up capital is INR ",o["Paid up Capital(Rs)"],". It is a ",o["Whether Listed or not"]," company."),N("div",null,"Corporate Identification Number(CIN) of ",l," is ",o.CIN," and it's registration number is ",o["Registration Number"],". Company can be contacted on email - ",o["Email Id"]," and registered address - ",o["Registered Address"],". Current status of ",l," is - ",o["Company Status(for efiling)"]||o["LLP Status"],"."),N("div",null,"Director details of ",l," can be found ",N("a",{href:"#directors"},"Here"),"."))),N("h4",{id:"basicInfo"},"Basic Information"),N("div",{className:"card mb-4 shadow bg-white rounded",id:"basicInfo"},N("div",{className:"card-body"},N("div",{className:"table-responsive"},N("table",{className:"table table-hover"},N("tbody",null,s.filter((function(e){return e.value})).map((function(e){return N("tr",{key:e.title},N("th",{scope:"row"},e.title),N("td",null,e.value))}))))))),N("h4",{id:"directors"},"Directors"),N("div",{className:"card mb-4 shadow bg-white rounded"},N("div",{className:"card-body"},N("div",{className:"table-responsive"},N("table",{className:"table table-hover"},N("thead",null,N("tr",{className:"text-semibold text-fiord-blue"},N("th",{scope:"col"},"#"),N("th",{scope:"col"},"DIN/PAN"),N("th",{scope:"col"},"Name"),N("th",{scope:"col"},"Begin date"),N("th",{scope:"col"},"End date"),N("th",{scope:"col"},"Surrendered DIN"))),N("tbody",null,o.dins.map((function(e,a){return N("tr",{key:"director_".concat(e[0]),className:"text-semibold text-reagent-gray"},N("td",null,a+1),N("td",null,N(u.a,{href:"/director/[din]",as:"/director/".concat(e[0])},N("a",null,e[0]))),N("td",null,e[6]),N("td",null,e[7]),N("td",null,e[8]),N("td",null,e[6]))}))))))),N("h4",{id:"charges"},"Charges"),N("div",{className:"card mb-4 shadow bg-white rounded"},N("div",{className:"card-body"},N("div",{className:"table-responsive"},N("table",{className:"table table-hover"},N("thead",{className:"bg-light"},N("tr",{className:"text-semibold text-fiord-blue"},N("th",{scope:"col",className:"border-0"},"#"),N("th",{scope:"col",className:"border-0"},"Assets under charge"),N("th",{scope:"col",className:"border-0"},"Charge Amount"),N("th",{scope:"col",className:"border-0"},"Date of Creation"),N("th",{scope:"col",className:"border-0"},"Date of Modification"),N("th",{scope:"col",className:"border-0"},"Status"))),N("tbody",null,o.charges.map((function(e,a){return N("tr",{key:"charge_".concat(e[1],"_").concat(a),className:"text-semibold text-reagent-gray"},N("td",null,a+1),N("td",null,e[0]),N("td",null,e[1]),N("td",null,e[2]),N("td",null,e[3]),N("td",null,e[4]))}))))))),N("h4",{id:"similarCompanies"},"List of similar companies"),N("div",{className:"card mb-4 shadow bg-white rounded"},N("div",{className:"card-body"},i.length?N("div",{className:"table-responsive"},N("table",{className:"table table-hover table-sm"},N("thead",null,N("tr",{className:"text-semibold text-fiord-blue"},N("th",{scope:"col"},"#"),N("th",{scope:"col"},"CIN/FCRN"),N("th",{scope:"col"},"Company Name"))),N("tbody",null,i.map((function(e,a){return N("tr",{key:"director_".concat(e.CIN),className:"text-semibold text-reagent-gray"},N("td",null,a+1),N("td",null,N(u.a,{href:"/company/[cin]",as:"/company/".concat(e.CIN)},N("a",null,e.CIN))),N("td",null,e.company_name))}))))):N("div",null,"No similar company registered"))))};b.getInitialProps=function(e){var a,t;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.query.cin,t={cinData:null,similarCompanies:[]},i.prev=2,i.next=5,o.a.awrap(m.a.Request("GET","https://kitaablu.com/api/v1/company/".concat(a)));case 5:return t.cinData=i.sent,i.next=8,o.a.awrap(m.a.Request("GET","https://kitaablu.com/api/v1/company",{roc_code:n.a.get(t,"cinData.roc_code",void 0),class:n.a.get(t,"cinData.class",void 0),limit:100}));case 8:t.similarCompanies=i.sent,i.next=14;break;case 11:i.prev=11,i.t0=i.catch(2),console.log("Error while fetching details for cin: ",a,i.t0);case 14:return i.abrupt("return",t);case 15:case"end":return i.stop()}}),null,null,[[2,11]],Promise)};var f=Object(p.b)("common")(b);a.default=f},xiE8:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/[cin]",function(){return t("RgzN")}])}},[["xiE8",1,2,6,9,0,3,5,7,4]]]);