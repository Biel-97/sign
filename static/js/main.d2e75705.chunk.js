(this.webpackJsonpsign=this.webpackJsonpsign||[]).push([[0],{41:function(e,a,t){},42:function(e,a,t){},61:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),c=t(34),s=t.n(c),o=(t(41),t(42),t(8)),r=t(5),l=Object(r.a)(),j=t(35),d=t.n(j),u="https://sign-back.herokuapp.com/";console.log(u);var b=d.a.create({baseURL:u}),h=t(0);var p=function(){return Object(h.jsxs)("div",{className:"log-form",children:[Object(h.jsx)("div",{className:"error-Message"}),Object(h.jsxs)("form",{className:"form",children:[Object(h.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:"input"}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"password",className:"input"})]}),Object(h.jsx)("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault();var a=document.getElementsByName("email")[0],t=document.getElementsByName("password")[0],n=document.querySelector(".error-Message"),i=function(){a.value="".trim(),t.value="".trim()};b.post("/auth/authenticate",{email:a.value,password:t.value}).then((function(e){return e.data.error||(localStorage.setItem("Token",e.data.token),localStorage.setItem("User_id",e.data.userInfo._id)),e})).then((function(e){e.data.error?(console.log("2"),i(),n.style.display="flex",n.innerHTML=e.data.error,console.log(a.value.trim())):(l.push("sign/#/sign/"),document.location.reload(),console.log("1"))})).catch((function(e){console.log("error"),i(),console.log(e),n.style.display="flex",n.innerHTML=e}))}(e)},className:"button",children:"Log"})]})};var m=function(){return Object(h.jsxs)("div",{className:"reg-form",children:[Object(h.jsx)("div",{className:"error-Message"}),Object(h.jsxs)("form",{className:"form",children:[Object(h.jsx)("input",{type:"text",name:"name",className:"input",placeholder:"Name"}),Object(h.jsx)("input",{type:"email",name:"email",className:"input",placeholder:"Email"}),Object(h.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password"})]}),Object(h.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var a=document.querySelector(".error-Message"),t=document.getElementsByName("name")[0],n=document.getElementsByName("email")[0],i=document.getElementsByName("password")[0],c=function(){n.value="",t.value="",i.value=""};if(!n.checkValidity())return c(),a.innerHTML="Email invalid";b.post("/auth/register",{name:t.value,email:n.value,password:i.value}).then((function(e){e.data.error?(c(),a.style.display="flex",a.innerHTML=e.data.error):(localStorage.setItem("Token",e.data.token),localStorage.setItem("User_id",e.data.userInfo._id),l.push("/"),document.location.reload(),a.style.display="none")})).catch((function(e){c(),a.style.display="flex",a.innerHTML="Ops, something wrong"}))}(e)},className:"button",children:"Register"})]})},O=(t(61),t(18)),x=t(7);var v=function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsxs)("div",{className:"media-social",children:[Object(h.jsx)("span",{className:"github",children:Object(h.jsx)("a",{href:"https://github.com/Biel-97",target:"_blank",children:Object(h.jsx)(x.a,{icon:O.b})})}),Object(h.jsx)("span",{className:"linkedin",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/gabriel-97-oliveira",target:"_blank",children:Object(h.jsx)(x.a,{icon:O.c})})}),Object(h.jsx)("span",{className:"codepen",children:Object(h.jsx)("a",{href:"https://codepen.io/Biel_",target:"_blank",children:Object(h.jsx)(x.a,{icon:O.a})})})]}),Object(h.jsxs)("span",{children:["Developed by Ga",Object(h.jsx)("span",{className:"red",children:"b"}),"r",Object(h.jsx)("span",{className:"red",children:"iel"})," P. Silva"]})]})};t(66);var f=function(){var e=Object(n.useState)({opt:"login",page:Object(h.jsx)(p,{})}),a=Object(o.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){var e=document.querySelector("#button-log"),a=document.querySelector("#button-register"),n=document.querySelector(".reg-form"),i=document.querySelector(".log-form");"login"==t.opt&&(e.className="active",a.className="stand",i.style.opacity="1"),"register"==t.opt&&(a.className="active",e.className="stand",n.style.opacity="1")}),[t]),Object(h.jsxs)("div",{className:"login-body",children:[Object(h.jsxs)("div",{id:"log-Page",children:[Object(h.jsxs)("div",{className:"buttons-options",children:[Object(h.jsx)("div",{id:"button-log",onClick:function(){"register"===t.opt&&(document.querySelector(".reg-form").style.opacity="0",setTimeout((function(){i({opt:"login",page:Object(h.jsx)(p,{})})}),200))},children:"Login"}),Object(h.jsx)("div",{id:"button-register",onClick:function(){"login"===t.opt&&(document.querySelector(".log-form").style.opacity="0",setTimeout((function(){i({opt:"register",page:Object(h.jsx)(m,{})})}),200))},children:"Register"})]}),t.page]}),Object(h.jsx)(v,{})]})},g=t(17),y=(t(67),{ShowColumn:function(){var e=document.querySelector(".column"),a=document.querySelector(".menu");e&&a&&("flex"===e.style.display?(e.style.display="none",a.style.display="none"):(e.style.display="flex",a.style.display="none"))},ShowHeaders:function(){var e=document.querySelector(".menu"),a=document.querySelector(".column");a&&e&&("flex"===e.style.display?(e.style.display="none",a.style.display="none"):(e.style.display="flex",a.style.display="none"))},windowClick:function(e){var a=e.target,t=document.querySelector(".column"),n=document.querySelector(".menu");t&&n&&window.innerWidth<=580&&("header"!==a.className&&"footer"!==a.className&&"body"!==a.id&&"result"!==a.className&&"map"!==a.className&&"H4"!==a.tagName&&"H5"!==a.tagName&&"information"!==a.className&&"inf"!==a.className||(t.style.display="none",n.style.display="none"))},windowResize:function(){var e=document.querySelector(".column"),a=document.querySelector(".menu");e&&a&&(window.innerWidth>=580?(a.style.display="none",e.style.display="block"):e.style.display="none")}});t(68);var M=function(e){var a=e.item,t=e.icon,n=e.cb,i=a+" button-header";return Object(h.jsx)("div",{className:i,onClick:function(){return n()},children:Object(h.jsx)(x.a,{icon:t})})};t(69);var T=function(){return Object(h.jsxs)("div",{className:"information",children:[Object(h.jsxs)("div",{className:"inf",children:[Object(h.jsx)("h4",{className:"inf",children:"About"}),Object(h.jsx)("span",{className:"inf",children:'"Use my knowledge to improve and test my skills as a programmer".\ud83d\ude80'}),Object(h.jsx)("p",{className:"inf",children:"This project is part of my portfolio, so feel free to get in touch for feedback on the code, structure or other reason that will help me become a better programmer!"})]}),Object(h.jsxs)("div",{className:"inf",children:[Object(h.jsx)("h4",{className:"inf",children:"Functionalities"}),Object(h.jsxs)("div",{className:"Functionalities",children:[Object(h.jsx)("li",{className:"inf",children:"Saved all the Signs in a database"}),Object(h.jsx)("li",{className:"inf",children:"Register and login a personal account."}),Object(h.jsx)("li",{className:"inf",children:"Get signs of the planets with a specific date"})]})]}),Object(h.jsxs)("div",{className:"inf",children:[Object(h.jsx)("h4",{className:"inf",children:"Observations"}),Object(h.jsxs)("p",{className:"inf",children:["It was utilized the Astrosoft API to get truthful astrology, you can check the api ",Object(h.jsx)("a",{href:"http://docs.innovativeastrosolutions.com/",target:"_blank",children:"here"}),"."]}),Object(h.jsxs)("p",{className:"inf",children:["Also it was utilized a api to convert places and addresses and get the latitude and longitude, click ",Object(h.jsx)("a",{href:"https://positionstack.com/documentation",target:"_blank",children:"here"})," to read more."]}),Object(h.jsx)("p",{children:"Because of the api's request limit, it is only possible to perform 5 sign searches, however it is possible to delete some old ones and perform another if necessary."})]})]})};var k=function(e){var a=e.state,t=Object(n.useRef)();return Object(h.jsxs)("select",{onChange:function(e){a(t.current.value)},ref:t,name:"timezone",className:"select",children:[Object(h.jsx)("option",{children:"-- Timezone --"}),Object(h.jsx)("option",{value:"Etc/GMT+12",children:"International Date Line West (GMT-12:00) "}),Object(h.jsx)("option",{value:"Pacific/Midway",children:" Midway Island, Samoa (GMT-11:00)"}),Object(h.jsx)("option",{value:"Pacific/Honolulu",children:" Hawaii (GMT-10:00)"}),Object(h.jsx)("option",{value:"US/Alaska",children:" Alaska (GMT-09:00)"}),Object(h.jsx)("option",{value:"America/Los_Angeles",children:" Pacific Time (US & Canada) (GMT-08:00)"}),Object(h.jsx)("option",{value:"America/Tijuana",children:" Tijuana, Baja California (GMT-08:00)"}),Object(h.jsx)("option",{value:"US/Arizona",children:" Arizona (GMT-07:00)"}),Object(h.jsx)("option",{value:"America/Chihuahua",children:" Chihuahua, La Paz, Mazatlan (GMT-07:00)"}),Object(h.jsx)("option",{value:"US/Mountain",children:" Mountain Time (US & Canada) (GMT-07:00)"}),Object(h.jsx)("option",{value:"America/Managua",children:" Central America (GMT-06:00)"}),Object(h.jsx)("option",{value:"US/Central",children:" Central Time (US & Canada) (GMT-06:00)"}),Object(h.jsx)("option",{value:"America/Mexico_City",children:" Guadalajara, Mexico City, Monterrey (GMT-06:00)"}),Object(h.jsx)("option",{value:"Canada/Saskatchewan",children:" Saskatchewan (GMT-06:00)"}),Object(h.jsx)("option",{value:"America/Bogota",children:" Bogota, Lima, Quito, Rio Branco (GMT-05:00)"}),Object(h.jsx)("option",{value:"US/Eastern",children:" Eastern Time (US & Canada) (GMT-05:00)"}),Object(h.jsx)("option",{value:"US/East-Indiana",children:" Indiana (East) (GMT-05:00)"}),Object(h.jsx)("option",{value:"Canada/Atlantic",children:" Atlantic Time (Canada) (GMT-04:00)"}),Object(h.jsx)("option",{value:"America/Caracas",children:" Caracas, La Paz (GMT-04:00)"}),Object(h.jsx)("option",{value:"America/Manaus",children:" Manaus (GMT-04:00)"}),Object(h.jsx)("option",{value:"America/Santiago",children:" Santiago (GMT-04:00)"}),Object(h.jsx)("option",{value:"Canada/Newfoundland",children:" Newfoundland (GMT-03:30)"}),Object(h.jsx)("option",{value:"America/Sao_Paulo",children:" Brasilia (GMT-03:00)"}),Object(h.jsx)("option",{value:"America/Argentina/Buenos_Aires",children:" Buenos Aires, Georgetown (GMT-03:00)"}),Object(h.jsx)("option",{value:"America/Godthab",children:" Greenland (GMT-03:00)"}),Object(h.jsx)("option",{value:"America/Montevideo",children:" Montevideo (GMT-03:00)"}),Object(h.jsx)("option",{value:"America/Noronha",children:" Mid-Atlantic (GMT-02:00)"}),Object(h.jsx)("option",{value:"Atlantic/Cape_Verde",children:" Cape Verde Is. (GMT-01:00)"}),Object(h.jsx)("option",{value:"Atlantic/Azores",children:" Azores (GMT-01:00)"}),Object(h.jsx)("option",{value:"Africa/Casablanca",children:" Casablanca, Monrovia, Reykjavik (GMT+00:00)"}),Object(h.jsx)("option",{value:"Etc/Greenwich",children:" Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London (GMT+00:00)"}),Object(h.jsx)("option",{value:"Europe/Amsterdam",children:" Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna (GMT+01:00)"}),Object(h.jsx)("option",{value:"Europe/Belgrade",children:" Belgrade, Bratislava, Budapest, Ljubljana, Prague (GMT+01:00)"}),Object(h.jsx)("option",{value:"Europe/Brussels",children:" Brussels, Copenhagen, Madrid, Paris (GMT+01:00)"}),Object(h.jsx)("option",{value:"Europe/Sarajevo",children:" Sarajevo, Skopje, Warsaw, Zagreb (GMT+01:00)"}),Object(h.jsx)("option",{value:"Africa/Lagos",children:" West Central Africa (GMT+01:00)"}),Object(h.jsx)("option",{value:"Asia/Amman",children:" Amman (GMT+02:00)"}),Object(h.jsx)("option",{value:"Europe/Athens",children:" Athens, Bucharest, Istanbul (GMT+02:00)"}),Object(h.jsx)("option",{value:"Asia/Beirut",children:" Beirut (GMT+02:00)"}),Object(h.jsx)("option",{value:"Africa/Cairo",children:" Cairo (GMT+02:00)"}),Object(h.jsx)("option",{value:"Africa/Harare",children:" Harare, Pretoria (GMT+02:00)"}),Object(h.jsx)("option",{value:"Europe/Helsinki",children:" Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius (GMT+02:00)"}),Object(h.jsx)("option",{value:"Asia/Jerusalem",children:" Jerusalem (GMT+02:00)"}),Object(h.jsx)("option",{value:"Europe/Minsk",children:" Minsk (GMT+02:00)"}),Object(h.jsx)("option",{value:"Africa/Windhoek",children:" Windhoek (GMT+02:00)"}),Object(h.jsx)("option",{value:"Asia/Kuwait",children:" Kuwait, Riyadh, Baghdad (GMT+03:00)"}),Object(h.jsx)("option",{value:"Europe/Moscow",children:" Moscow, St. Petersburg, Volgograd (GMT+03:00)"}),Object(h.jsx)("option",{value:"Africa/Nairobi",children:" Nairobi (GMT+03:00)"}),Object(h.jsx)("option",{value:"Asia/Tbilisi",children:" Tbilisi (GMT+03:00)"}),Object(h.jsx)("option",{value:"Asia/Tehran",children:" Tehran (GMT+03:30)"}),Object(h.jsx)("option",{value:"Asia/Muscat",children:" Abu Dhabi, Muscat (GMT+04:00)"}),Object(h.jsx)("option",{value:"Asia/Baku",children:" Baku (GMT+04:00)"}),Object(h.jsx)("option",{value:"Asia/Yerevan",children:" Yerevan (GMT+04:00)"}),Object(h.jsx)("option",{value:"Asia/Kabul",children:" Kabul (GMT+04:30)"}),Object(h.jsx)("option",{value:"Asia/Yekaterinburg",children:" Yekaterinburg (GMT+05:00)"}),Object(h.jsx)("option",{value:"Asia/Karachi",children:" Islamabad, Karachi, Tashkent (GMT+05:00)"}),Object(h.jsx)("option",{value:"Asia/Calcutta",children:" Chennai, Kolkata, Mumbai, New Delhi (GMT+05:30)"}),Object(h.jsx)("option",{value:"Asia/Calcutta",children:" Sri Jayawardenapura (GMT+05:30)"}),Object(h.jsx)("option",{value:"Asia/Katmandu",children:" Kathmandu (GMT+05:45)"}),Object(h.jsx)("option",{value:"Asia/Almaty",children:" Almaty, Novosibirsk (GMT+06:00)"}),Object(h.jsx)("option",{value:"Asia/Dhaka",children:" Astana, Dhaka (GMT+06:00)"}),Object(h.jsx)("option",{value:"Asia/Rangoon",children:" Yangon (Rangoon) (GMT+06:30)"}),Object(h.jsx)("option",{value:"Asia/Bangkok",children:" Bangkok, Hanoi, Jakarta (GMT+07:00)"}),Object(h.jsx)("option",{value:"Asia/Krasnoyarsk",children:" Krasnoyarsk (GMT+07:00)"}),Object(h.jsx)("option",{value:"Asia/Hong_Kong",children:" Beijing, Chongqing, Hong Kong, Urumqi (GMT+08:00)"}),Object(h.jsx)("option",{value:"Asia/Kuala_Lumpur",children:" Kuala Lumpur, Singapore (GMT+08:00)"}),Object(h.jsx)("option",{value:"Asia/Irkutsk",children:" Irkutsk, Ulaan Bataar (GMT+08:00)"}),Object(h.jsx)("option",{value:"Australia/Perth",children:" Perth (GMT+08:00)"}),Object(h.jsx)("option",{value:"Asia/Taipei",children:" Taipei (GMT+08:00)"}),Object(h.jsx)("option",{value:"Asia/Tokyo",children:" Osaka, Sapporo, Tokyo (GMT+09:00)"}),Object(h.jsx)("option",{value:"Asia/Seoul",children:" Seoul (GMT+09:00)"}),Object(h.jsx)("option",{value:"Asia/Yakutsk",children:" Yakutsk (GMT+09:00)"}),Object(h.jsx)("option",{value:"Australia/Adelaide",children:" Adelaide (GMT+09:30)"}),Object(h.jsx)("option",{value:"Australia/Darwin",children:" Darwin (GMT+09:30)"}),Object(h.jsx)("option",{value:"Australia/Brisbane",children:" Brisbane (GMT+10:00)"}),Object(h.jsx)("option",{value:"Australia/Canberra",children:" Canberra, Melbourne, Sydney (GMT+10:00)"}),Object(h.jsx)("option",{value:"Australia/Hobart",children:" Hobart (GMT+10:00)"}),Object(h.jsx)("option",{value:"Pacific/Guam",children:" Guam, Port Moresby (GMT+10:00)"}),Object(h.jsx)("option",{value:"Asia/Vladivostok",children:" Vladivostok (GMT+10:00)"}),Object(h.jsx)("option",{value:"Asia/Magadan",children:" Magadan, Solomon Is., New Caledonia (GMT+11:00)"}),Object(h.jsx)("option",{value:"Pacific/Auckland",children:") Auckland, Wellington (GMT+12:00"}),Object(h.jsx)("option",{value:"Pacific/Fiji",children:" Fiji, Kamchatka, Marshall Is. (GMT+12:00)"}),Object(h.jsx)("option",{value:"Pacific/Tongatapu",children:" Nuku'alofa (GMT+13:00)"})]})},N=(t(70),t(11));function G(e){var a=e.cb,t=Object(n.useState)(""),i=Object(o.a)(t,2),c=i[0],s=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:"horoscopoForm",children:[Object(h.jsx)("input",{type:"text",name:"person",placeholder:"person name",className:"input"}),Object(h.jsx)("input",{type:"text",name:"city",placeholder:"city of birth",className:"input"}),Object(h.jsx)("input",{type:"date",name:"dateOfBirth",placeholder:"date of birth",className:"input-date"}),Object(h.jsx)(k,{state:s}),Object(h.jsx)("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementsByName("person")[0],n=document.getElementsByName("city")[0],i=document.getElementsByName("dateOfBirth")[0],s=document.querySelector(".horoscopoForm"),o=document.querySelector(".loading"),r=document.querySelector(".error-Message"),l=function(){t.value="",n.value="",i.value=""};return""==t.value.trim()||""==n.value.trim()||""==i.value.trim()||""==c.trim()?(r.innerHTML="Error, some fields are empty.",r.style.display="block",void l()):t.value.length<=3||t.value.length>=15?(r.innerHTML="Name must be between 3 and 15 letters.",r.style.display="block",void l()):(s.style.display="none",o.style.display="block",void b.post("/query",{person:t.value,city:n.value,dateOfBirth:i.value,Timezone:c,id:localStorage.User_id,queryId:Date.now()}).then((function(e){e.data.error?(console.log(e),r.innerHTML=e.data.error,r.style.display="block",o.style.display="none"):(console.log(e),a(e.data))})))}(e)},className:"search",children:"Search"})]}),Object(h.jsx)("div",{className:"error-Message"}),Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)(x.a,{icon:N.f})})]})}t(71);var A=Object(n.createContext)({});function S(e){var a=e.children,t=Object(n.useState)({}),i=Object(o.a)(t,2),c=i[0],s=i[1];return Object(h.jsx)(A.Provider,{value:{qeryContext:c,SetQueryContext:s},children:a})}var w=function(e){var a=e.name,t=e.sun,i=e.queryId,c=e.RenderSign,s=(e.setResult,Object(n.useContext)(A).qeryContext);return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{onClick:function(){s.querys.forEach((function(e){e.queryId===i&&c(e)}))},className:"personSign",children:[Object(h.jsx)("span",{className:"personname",children:a}),Object(h.jsx)("span",{className:"sun",children:t})]}),Object(h.jsx)("span",{className:"delete",onClick:function(e){return function(e){e.target.closest(".row").children[0].style.display="none",e.target.closest(".row").children[1].style.display="none",e.target.closest(".row").children[2].style.display="flex"}(e)},children:Object(h.jsx)(x.a,{icon:N.g})}),Object(h.jsxs)("span",{className:"delete-message",children:[Object(h.jsx)("span",{children:"want to delete this sign?"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("span",{onClick:function(){return e=i,void b.get("/delete/query/",{params:{token:"Bearer ".concat(localStorage.Token),User_ID:localStorage.User_id,query_ID:e}}).then((function(e){e.data.ok&&document.location.reload()}));var e},children:"Yes"}),Object(h.jsx)("span",{onClick:function(e){return function(e){e.target.closest(".row").children[0].style.display="flex",e.target.closest(".row").children[1].style.display="flex",e.target.closest(".row").children[2].style.display="none"}(e)},children:"No"})]})]})]})},C={Aries:Object(h.jsx)("span",{children:" \u2648"}),Taurus:Object(h.jsx)("span",{children:"\u2649"}),Gemini:Object(h.jsx)("span",{children:"\u264a"}),Cancer:Object(h.jsx)("span",{children:"\u264b"}),Leo:Object(h.jsx)("span",{children:"\u264c"}),Virgo:Object(h.jsx)("span",{children:"\u264d"}),Libra:Object(h.jsx)("span",{children:"\u264e"}),Scorpio:Object(h.jsx)("span",{children:"\u264f"}),Sagittarius:Object(h.jsx)("span",{children:"\u2650"}),Capricorn:Object(h.jsx)("span",{children:"\u2651"}),Aquarius:Object(h.jsx)("span",{children:"\u2652"}),Pisces:Object(h.jsx)("span",{children:"\u2653"})};var B=function(e){var a=e.name;return Object(h.jsx)(h.Fragment,{children:C[a]})};t(72);var q=function(e){var a=e.query,t=Object(n.useState)([]),i=Object(o.a)(t,2),c=i[0],s=i[1];return Object(n.useEffect)((function(){var e=Object.keys(a);s([]),e.forEach((function(e){"id"!==e&&"person"!==e&&"queryId"!==e&&"dateOfBirth"!==e&&(a.error?(s(Object(h.jsx)("div",{className:"error-Message",children:a[e]})),setInterval((function(){return document.querySelector(".error-Message").style.display="flex"}),100)):s((function(t){return[].concat(Object(g.a)(t),[Object(h.jsxs)("div",{className:"planet",children:[Object(h.jsx)("h3",{children:a[e].planet}),Object(h.jsx)("strong",{children:a[e].sign}),Object(h.jsx)("span",{className:"sign-logo",children:Object(h.jsx)(B,{name:a[e].sign})})]},a[e].position)])})))}))}),[a]),Object(h.jsxs)("div",{className:"map",children:[Object(h.jsx)("h4",{children:a.person}),Object(h.jsx)("h5",{children:a.dateOfBirth}),Object(h.jsx)("div",{className:"result",children:c})]})};var E=function(){var e=Object(n.useState)("usuario"),a=Object(o.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),r=s[0],j=s[1],d=Object(n.useState)([]),u=Object(o.a)(d,2),p=u[0],m=u[1],O=Object(n.useContext)(A).SetQueryContext,f=Object(n.useState)(),k=Object(o.a)(f,2),S=k[0],C=k[1];function B(e){j(e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:Object(h.jsxs)("span",{children:["Welcome,  ",e," !"]})}),Object(h.jsx)(q,{query:S||""})]}):Object(h.jsx)("h3",{children:Object(h.jsxs)("span",{children:["Welcome, ",t.name," !"]})}))}Object(n.useEffect)((function(){b.get("/",{params:{token:"Bearer ".concat(localStorage.Token),id:localStorage.User_id}}).then((function(e){return m([]),B(e.data.name),O(e.data),i(e.data),e.data.querys})).then((function(e){e.forEach((function(e){m((function(a){return[].concat(Object(g.a)(a),[Object(h.jsx)("span",{children:Object(h.jsx)(w,{name:e.person,sun:e.Sun.sign,queryId:e.queryId,RenderSign:E,setResult:C})},e.queryId)])}))}))}))}),[S]);var E=function(e){return j(Object(h.jsx)(q,{query:e||""}))},I=function(){return j(Object(h.jsx)(T,{}))},L=function(){return j(Object(h.jsx)(G,{cb:C}))};function H(){localStorage.removeItem("Token"),localStorage.removeItem("User_id"),document.location.reload(),l.push("/login")}return window.addEventListener("click",(function(e){return y.windowClick(e)})),window.addEventListener("resize",(function(){return y.windowResize()})),Object(h.jsxs)("div",{id:"Dashboard",children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(M,{item:"Home",icon:N.b,cb:B}),Object(h.jsx)(M,{item:"Query",icon:N.d,cb:L}),Object(h.jsx)(M,{item:"Info",icon:N.c,cb:I}),Object(h.jsx)(M,{item:"LogOut",icon:N.e,cb:H}),Object(h.jsx)("span",{className:"hamburguer-column",onClick:y.ShowColumn,children:Object(h.jsx)(x.a,{icon:N.a})}),Object(h.jsx)("span",{className:"hamburguer-menu",onClick:y.ShowHeaders,children:Object(h.jsx)(x.a,{icon:N.a})}),Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("span",{href:"#",onClick:function(){return j(Object(h.jsx)("h3",{children:Object(h.jsxs)("span",{children:["Welcome, ",t.name," !"]})}))},children:"Home"}),Object(h.jsx)("span",{href:"#",onClick:L,children:"query"}),Object(h.jsx)("span",{href:"#",onClick:I,children:"info"}),Object(h.jsx)("span",{href:"#",onClick:H,children:"Logout"})]})]}),Object(h.jsxs)("main",{className:"main",children:[Object(h.jsx)("div",{className:"column",children:p}),Object(h.jsx)("div",{id:"body",children:r})]}),Object(h.jsx)(v,{})]})},I=t(3);var L=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(I.b,{path:"/",exact:!0,component:E}),Object(h.jsx)(I.b,{exact:!0,path:"/",children:localStorage.Token?Object(h.jsx)(I.a,{to:"/"}):Object(h.jsx)(I.a,{to:"login"})}),Object(h.jsx)(I.b,{exact:!0,path:"/login",children:localStorage.Token?Object(h.jsx)(I.a,{to:"/"}):Object(h.jsx)(I.a,{to:"/login"})}),Object(h.jsx)(I.b,{path:"/login",component:f})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),i(e),c(e),s(e)}))},P=t(21);s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(S,{children:Object(h.jsxs)(P.a,{basename:"/sign",children:[console.log("/sign"),Object(h.jsx)(L,{})]})})}),document.getElementById("root")),H()}},[[75,1,2]]]);
//# sourceMappingURL=main.d2e75705.chunk.js.map