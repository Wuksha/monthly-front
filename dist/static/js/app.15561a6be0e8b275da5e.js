webpackJsonp([1],{"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.42bfe0d.png"},"99wj":function(t,e){},GP6o:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n("7Otq")}})]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(t){n("g2VG")},null,null).exports,o=n("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("Choose to "),e("router-link",{attrs:{to:"/login"}},[this._v("log in")]),this._v(" or "),e("router-link",{attrs:{to:"/register"}},[this._v("register.")])],1)])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{}}},i,!1,function(t){n("bngJ")},"data-v-1b0e3521",null).exports,l=n("//Fk"),u=n.n(l),d=n("mvHQ"),m=n.n(d),p=n("mtWM"),v=n.n(p),f=["/transactions","/view/transactions"],h=["/","/login","/register"],g=["https://wukshas-monthly-spendings-back.herokuapp.com/api/"],j={saveToken:function(t){console.log(t);var e={value:t.token,expireDate:1e3*t.expires_in+Date.now()};localStorage.setItem("AuthenticationToken",m()(e))},login:function(t){var e=this;return new u.a(function(n,s){console.log(t),v.a.post(g+"/login",t).then(function(t){e.saveToken(t.data),n(t.data)}).catch(function(t){console.log(t),s("Jebga")})})},register:function(t){return new u.a(function(e,n){console.log(t),v.a.post(g+"/register",t).then(function(t){e(t.data)}).catch(function(t){console.log(t),n("Jebga")})})},isLoggedIn:function(){var t=localStorage.getItem("AuthenticationToken");return t?JSON.parse(t).expireDate>=Date.now()?(console.log("Token valid"),!0):(console.log("Token expired"),!1):(console.log("No token"),!1)}},y=n("Zrlr"),_=n.n(y),w=function t(){_()(this,t),this.email="",this.username="",this.password="",this.password_confirmation=""},k={name:"Login",data:function(){return{user:new w}},methods:{login:function(){var t=this;j.login(this.user).then(function(e){console.log(e),t.$router.push("/")}).catch(function(t){console.log(t)})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("form",{attrs:{action:"/login.php"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email address:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.user.email},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pwd"}},[t._v("Password:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"pwd",required:""},domProps:{value:t.user.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Log in")])])])])])},staticRenderFns:[]};var C=n("VU/8")(k,b,!1,function(t){n("GP6o")},"data-v-c576c2a4",null).exports,Y={name:"Register",data:function(){return{user:new w}},methods:{register:function(){var t=this;console.log(g),j.register(this.user).then(function(e){console.log(e),t.$router.push("/login")}).catch(function(t){console.log(t)})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email address:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.user.email},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.user.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pwd"}},[t._v("Password:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:t.user.password_confirmation},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.register(e)}}},[t._v("Register")])])])])])},staticRenderFns:[]};var z=n("VU/8")(Y,x,!1,function(t){n("VW9d")},"data-v-42992057",null).exports,T=n("BO1k"),M=n.n(T),E=function t(e){_()(this,t),e?(this.description=e.description,this.moneyspent=e.moneyspent,this.date=e.created_at,this.id=e.id):(this.description="",this.moneyspent="",this.date="",this.id="")},F=n("PJh5"),N=n.n(F),P=function(t){return new u.a(function(e,n){var s=JSON.parse(localStorage.getItem("AuthenticationToken"));v.a.post(g+"/transactions",t,{headers:{Authorization:"Bearer "+s.value}}).then(function(t){var n=new E(t.data);e(n)}).catch(function(t){n(t)})})},O=function(t,e){return new u.a(function(n,s){var a=JSON.parse(localStorage.getItem("AuthenticationToken"));v.a.get(g+"/view/transactions",{params:{Year:e,Month:t},headers:{Authorization:"Bearer "+a.value}}).then(function(t){var e=[],s=!0,a=!1,r=void 0;try{for(var o,i=M()(t.data);!(s=(o=i.next()).done);s=!0){var c=o.value;e.push(new E(c))}}catch(t){a=!0,r=t}finally{try{!s&&i.return&&i.return()}finally{if(a)throw r}}n(e)}).catch(function(t){s(t)})})},V=function(){return new u.a(function(t,e){var n=JSON.parse(localStorage.getItem("AuthenticationToken"));v.a.get(g+"/transactions/getYears",{headers:{Authorization:"Bearer "+n.value}}).then(function(e){var n=[];n.push(e.data),console.log("yearList",n),t(n)}).catch(function(t){e(t)})})},L=function(t){return new u.a(function(e,n){var s=JSON.parse(localStorage.getItem("AuthenticationToken"));v.a.get(g+"/transactions",{params:{Year:t},headers:{Authorization:"Bearer "+s.value}}).then(function(n){console.log("server response",n);for(var s=[],a=0,r=1;r<13;r++){var o=!0,i=!1,c=void 0;try{for(var l,u=M()(n.data);!(o=(l=u.next()).done);o=!0){var d=l.value;console.log("response.data",d),console.log("year of transaction",N()(d.created_at).format("YYYY")),r==N()(d.created_at).format("M")&&t==N()(d.created_at).format("YYYY")&&(a+=d.moneyspent)}}catch(t){i=!0,c=t}finally{try{!o&&u.return&&u.return()}finally{if(i)throw c}}s.push(a),a=0}e(s)}).catch(function(t){n(t)})})},q={name:"TransactionView",props:["Year","Month"],data:function(){return{selectedYear:2018,allYears:[],singleYear:"",yearToSend:"",monthToSend:"",month_names:["January","February","March","April","May","June","July","August","September","October","November","December"],transaction:new E,transactionList:[]}},mounted:function(){this.getTransactionsForYear(N()(Date.now()).format("YYYY")),this.getAllYears()},methods:{getTransactionsForYear:function(t){var e=this;L(t).then(function(t){console.log("trans list after response",t),e.transactionList=t}).catch(function(t){alert(t)})},getTransactionsForMonth:function(t,e){this.$router.push({name:"TransactionView",params:{Month:t,Year:e}})},getAllYears:function(){var t=this;V().then(function(e){1==e.length&&e[0]<2e3&&t.$router.push({name:"TransactionView",params:{Month:N()(Date.now()).format("M"),Year:N()(Date.now()).format("YYYY")}}),t.allYears=e[0]}).catch(function(e){alert(e),t.$router.push({name:"TransactionView",params:{Month:N()(Date.now()).format("M"),Year:N()(Date.now()).format("YYYY")}})})}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedYear,expression:"selectedYear"}],staticClass:"moveToLeft",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedYear=e.target.multiple?n:n[0]},function(e){t.getTransactionsForYear(t.selectedYear)}]}},t._l(t.allYears,function(e){return n("option",{key:e},[t._v(" "+t._s(e)+" ")])})),t._v(" "),n("div",[n("table",{attrs:{id:"transactions"}},[t._m(0),t._v(" "),t._l(t.month_names,function(e,s){return 0!=t.transactionList[s]?n("tr",{key:e,on:{click:function(e){t.getTransactionsForMonth(s+1,t.selectedYear)}}},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.transactionList[s]))])]):t._e()})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Month")]),this._v(" "),e("th",{staticClass:"money-spent"},[this._v("Total Money spent")])])}]};var S=n("VU/8")(q,D,!1,function(t){n("y8gi")},"data-v-b8d15f6c",null).exports,A={name:"TransactionView",data:function(){return{isCurrentMonth:!1,transaction:new E,transactionList:[]}},mounted:function(){this.getTransactionsForMonth()},methods:{createTransaction:function(){var t=this;P(this.transaction).then(function(e){t.transaction.data="",t.transaction.moneyspent="",t.transactionList.push(e),alert("Created")}).catch(function(t){alert(t)})},getTransactionsForMonth:function(){var t=this,e=N()(Date.now()).format("M"),n=N()(Date.now()).format("YYYY"),s=this.$route.params.Year,a=this.$route.params.Month;this.isCurrentMonth=e==a&&n==s,O(a,s).then(function(e){t.transactionList=e}).catch(function(t){alert(t)})}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("table",{attrs:{id:"transactions"}},[t._m(0),t._v(" "),t._l(t.transactionList,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",[t._v(t._s(e.moneyspent))])])}),t._v(" "),t.isCurrentMonth?n("tr",[n("td",[t._v("New transaction")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description of new transaction"},domProps:{value:t.transaction.description},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.createTransaction(e):null},input:function(e){e.target.composing||t.$set(t.transaction,"description",e.target.value)}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.moneyspent,expression:"transaction.moneyspent"}],staticClass:"form-control",attrs:{type:"text",placeholder:"$$"},domProps:{value:t.transaction.moneyspent},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.createTransaction(e):null},input:function(e){e.target.composing||t.$set(t.transaction,"moneyspent",e.target.value)}}})])]):t._e(),t._v(" "),t.isCurrentMonth?n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.createTransaction(e)}}},[t._v("Add transaction")]):t._e()],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{staticClass:"transaction-date"},[this._v("Date")]),this._v(" "),e("th",{staticClass:"description"},[this._v("Description")]),this._v(" "),e("th",{staticClass:"money-spent"},[this._v("Money spent")])])}]};var $=n("VU/8")(A,R,!1,function(t){n("99wj")},"data-v-30695cc6",null).exports;s.a.use(o.a);var H=new o.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/login",name:"Login",component:C},{path:"/register",name:"Register",component:z},{path:"/transactions",name:"Transactions",props:!0,component:S},{path:"/view/transactions",name:"TransactionView",props:!0,component:$}],mode:"history"});H.beforeEach(function(t,e,n){j.isLoggedIn()?h.filter(function(e){return e==t.path}).length<1?n():n("/transactions"):f.filter(function(e){return e==t.path}).length<1?n():n("/")});var J=H;s.a.config.productionTip=!1,new s.a({el:"#app",router:J,components:{App:r},template:"<App/>"})},VW9d:function(t,e){},bngJ:function(t,e){},g2VG:function(t,e){},uslO:function(t,e,n){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return n(r(t))}function r(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="uslO"},y8gi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.15561a6be0e8b275da5e.js.map