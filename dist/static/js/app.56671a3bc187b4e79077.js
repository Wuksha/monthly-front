webpackJsonp([1],{"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.42bfe0d.png"},"K6v+":function(t,e){},MtCW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("//Fk"),s=n.n(o),r=n("mvHQ"),i=n.n(r),c=n("mtWM"),u=n.n(c),l=["/transactions","/view/transactions"],d=["/","/login","/register"];function h(){return"https://wukshas-monthly-spendings-back.herokuapp.com/api"}var m={saveToken:function(t){console.log(t);var e={value:t.token,expireDate:1e3*t.expires_in+Date.now()};localStorage.setItem("AuthenticationToken",i()(e))},login:function(t){var e=this;return new s.a(function(n,a){console.log(t),u.a.post("https://wukshas-monthly-spendings-back.herokuapp.com/api/login",t).then(function(t){e.saveToken(t.data),n(t.data)}).catch(function(t){console.log(t),a("Jebga")})})},register:function(t){return new s.a(function(e,n){console.log(t),u.a.post("https://wukshas-monthly-spendings-back.herokuapp.com/api/register",t).then(function(t){e(t.data)}).catch(function(t){console.log(t),n("Jebga")})})},isLoggedIn:function(){var t=localStorage.getItem("AuthenticationToken");return t?JSON.parse(t).expireDate>=Date.now()||(console.log("Token expired"),!1):(console.log("No token"),!1)}},p=n("/ocq"),v={name:"App",data:function(){return{isLoggedIn:!1}},methods:{logOut:function(){localStorage.removeItem("AuthenticationToken"),this.$router.push("/")}},mounted:function(){this.isLoggedInData=m.isLoggedIn()},watch:{$route:function(t,e){this.isLoggedIn=m.isLoggedIn()}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isLoggedIn?a("button",{staticClass:"btn btn-primary move-to-top-right",on:{click:function(e){return e.preventDefault(),t.logOut(e)}}},[t._v("Log out")]):t._e(),t._v(" "),a("div",[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("7Otq")}})]),t._v(" "),a("router-view")],1)])},staticRenderFns:[]};var g=n("VU/8")(v,f,!1,function(t){n("lLy2")},null,null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("Choose to "),e("router-link",{attrs:{to:"/login"}},[this._v("log in")]),this._v(" or "),e("router-link",{attrs:{to:"/register"}},[this._v("register.")])],1)])},staticRenderFns:[]};var _=n("VU/8")({name:"HelloWorld",data:function(){return{}}},y,!1,function(t){n("bngJ")},"data-v-1b0e3521",null).exports,k=n("Zrlr"),w=n.n(k),j=function t(){w()(this,t),this.email="",this.username="",this.password="",this.password_confirmation=""},T={name:"Login",data:function(){return{user:new j}},methods:{login:function(){var t=this;m.login(this.user).then(function(e){console.log(e),t.$router.push("/")}).catch(function(t){console.log(t)})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("form",{attrs:{action:"/login.php"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email address:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.user.email},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pwd"}},[t._v("Password:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"pwd",required:""},domProps:{value:t.user.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Log in")])])])])])},staticRenderFns:[]};var C=n("VU/8")(T,b,!1,function(t){n("Ywqh")},"data-v-f09774b4",null).exports,S={name:"Register",data:function(){return{user:new j}},methods:{register:function(){var t=this;console.log(h),m.register(this.user).then(function(e){console.log(e),t.$router.push("/login")}).catch(function(t){console.log(t)})}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email address:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.user.email},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.user.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pwd"}},[t._v("Password:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:t.user.password_confirmation},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null},input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.register(e)}}},[t._v("Register")])])])])])},staticRenderFns:[]};var L=n("VU/8")(S,M,!1,function(t){n("VW9d")},"data-v-42992057",null).exports,Y=n("BO1k"),N=n.n(Y),x=function t(e){w()(this,t),e?(this.description=e.description,this.moneyspent=e.moneyspent,this.date=e.created_at,this.id=e.id,this.category=e.transaction_category):(this.description="",this.moneyspent="",this.date="",this.id="",this.category={id:"-1"})},z=n("PJh5"),E=n.n(z),F=function(t){return new s.a(function(e,n){var a=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.post("https://wukshas-monthly-spendings-back.herokuapp.com/api/transactions",t,{headers:{Authorization:"Bearer "+a.value}}).then(function(t){var n=new x(t.data);e(n)}).catch(function(t){n(t)})})},O=function(t){return new s.a(function(e,n){var a=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.delete("https://wukshas-monthly-spendings-back.herokuapp.com/api/transactions/"+t,{headers:{Authorization:"Bearer "+a.value}}).then(function(t){e(t.data)}).catch(function(t){n(t)})})},A=function(t,e){return new s.a(function(n,a){var o=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.get("https://wukshas-monthly-spendings-back.herokuapp.com/api/view/transactions",{params:{Year:e,Month:t},headers:{Authorization:"Bearer "+o.value}}).then(function(t){var e=[],a=!0,o=!1,s=void 0;try{for(var r,i=N()(t.data);!(a=(r=i.next()).done);a=!0){var c=r.value;e.push(new x(c))}}catch(t){o=!0,s=t}finally{try{!a&&i.return&&i.return()}finally{if(o)throw s}}n(e)}).catch(function(t){a(t)})})},$=function(){return new s.a(function(t,e){var n=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.get("https://wukshas-monthly-spendings-back.herokuapp.com/api/transactions/getYears",{headers:{Authorization:"Bearer "+n.value}}).then(function(e){var n=[];n.push(e.data),t(n)}).catch(function(t){e(t)})})},D=function(t){return new s.a(function(e,n){var a=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.get("https://wukshas-monthly-spendings-back.herokuapp.com/api/transactions",{params:{Year:t},headers:{Authorization:"Bearer "+a.value}}).then(function(n){for(var a=[],o=0,s=1;s<13;s++){var r=!0,i=!1,c=void 0;try{for(var u,l=N()(n.data);!(r=(u=l.next()).done);r=!0){var d=u.value;s==E()(d.created_at).format("M")&&t==E()(d.created_at).format("YYYY")&&(o+=d.moneyspent)}}catch(t){i=!0,c=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw c}}a.push(o),o=0}e(a)}).catch(function(t){n(t)})})},P=function(t,e){return new s.a(function(n,a){var o=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.get("https://wukshas-monthly-spendings-back.herokuapp.com/api/transactions/money_per_month",{params:{Year:e,Month:t},headers:{Authorization:"Bearer "+o.value}}).then(function(t){n(t.data.value)}).catch(function(t){a(t)})})},I=function(t){return new s.a(function(e,n){var a=JSON.parse(localStorage.getItem("AuthenticationToken"));u.a.put("https://wukshas-monthly-spendings-back.herokuapp.com/api/transactions/money_per_month",{value:t},{headers:{Authorization:"Bearer "+a.value}}).then(function(t){e(t.data)}).catch(function(t){n(t)})})},V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"image",attrs:{src:"https://zippy.gfycat.com/SkinnySeveralAsianlion.gif"}})])}]};var q=n("VU/8")(null,V,!1,function(t){n("yqaL")},"data-v-51d97d66",null).exports,J={components:{spinner:q},computed:{isLoaded:{set:function(t){return!1},get:function(){return this.areTransactionsForYearLoaded&&this.areAllYearsLoaded}}},name:"TransactionView",props:["Year","Month"],data:function(){return{selectedYear:2018,allYears:[],singleYear:"",yearToSend:"",monthToSend:"",month_names:["January","February","March","April","May","June","July","August","September","October","November","December"],month_names_reversed:["December","November","October","September","August","July","June","May","April","March","February","January"],transaction:new x,transactionList:[],areTransactionsForYearLoaded:!1,areAllYearsLoaded:!1}},mounted:function(){this.selectedYear=E()(Date.now()).format("YYYY"),this.getTransactionsForYear(this.selectedYear),this.getAllYears()},methods:{createTransaction:function(){var t=this;F(this.transaction).then(function(e){t.transaction.description="",t.transaction.moneyspent="",t.transactionList.push(e),t.$router.push({name:"TransactionView",params:{Month:E()(Date.now()).format("M"),Year:t.selectedYear}})}).catch(function(t){alert(t)})},isCurrentYear:function(t){return this.selectedYear==E()(Date.now()).format("YYYY")&&0!=t},isCurrentMonth:function(t){return t==E()(Date.now()).format("MMMM")},isNotCurrentYear:function(t){return this.selectedYear!=E()(Date.now()).format("YYYY")&&0!=t},getTransactionsForYear:function(t){var e=this;D(t).then(function(t){e.transactionList=t,e.areTransactionsForYearLoaded=!0}).catch(function(t){alert(t)})},getTransactionsForMonth:function(t,e){this.$router.push({name:"TransactionView",params:{Month:t,Year:e}})},getAllYears:function(){var t=this;$().then(function(e){1==e.length&&e[0]<2e3&&t.$router.push({name:"TransactionView",params:{Month:E()(Date.now()).format("M"),Year:E()(Date.now()).format("YYYY")}}),t.allYears=e[0],t.areAllYearsLoaded=!0}).catch(function(e){alert(e),t.$router.push({name:"TransactionView",params:{Month:E()(Date.now()).format("M"),Year:E()(Date.now()).format("YYYY")}})})}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoaded?n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedYear,expression:"selectedYear"}],staticClass:"move-lo-left",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedYear=e.target.multiple?n:n[0]},function(e){t.getTransactionsForYear(t.selectedYear)}]}},t._l(t.allYears,function(e){return n("option",{key:e},[t._v(" "+t._s(e)+" ")])}))]),t._v(" "),n("table",{attrs:{id:"transactions"}},[t._m(0),t._v(" "),t._l(t.month_names_reversed,function(e,a){return t.isCurrentYear(t.transactionList[11-a])||t.isCurrentMonth(e)?n("tr",{key:e,on:{click:function(e){t.getTransactionsForMonth(12-a,t.selectedYear)}}},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.transactionList[11-a]))])]):t._e()}),t._v(" "),t._l(t.month_names,function(e,a){return t.isNotCurrentYear(t.transactionList[a])?n("tr",{key:e,on:{click:function(e){t.getTransactionsForMonth(a+1,t.selectedYear)}}},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.transactionList[a]))])]):t._e()})],2)])]):n("spinner")},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Month")]),this._v(" "),e("th",{staticClass:"money-spent"},[this._v("Total Money spent")])])}]};var B=n("VU/8")(J,R,!1,function(t){n("MtCW")},"data-v-6a5fa3ce",null).exports,H=function(){var t=JSON.parse(localStorage.getItem("AuthenticationToken"));return new s.a(function(e,n){u.a.get("https://wukshas-monthly-spendings-back.herokuapp.com/api/transaction_categories",{headers:{Authorization:"Bearer "+t.value}}).then(function(t){e(t.data)}).catch(function(t){n(t)})})},U=function(t){var e=JSON.parse(localStorage.getItem("AuthenticationToken"));return new s.a(function(n,a){u.a.post("https://wukshas-monthly-spendings-back.herokuapp.com/api/transaction_categories",{name:t},{headers:{Authorization:"Bearer "+e.value}}).then(function(t){n(t.data)}).catch(function(t){a(t)})})},W={components:{spinner:q},name:"category-form-modal",data:function(){return{categoryName:"",isLoading:!1}},methods:{addCategory:function(){var t=this;this.isLoading=!0,U(this.categoryName).then(function(e){t.isLoading=!1,t.$emit("created",e)}).catch(function(e){t.isLoading=!1,alert(e)})}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[t.isLoading?n("spinner"):n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n              New category\n          ")])],2),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],attrs:{type:"text",placeholder:"Name of category"},domProps:{value:t.categoryName},on:{input:function(e){e.target.composing||(t.categoryName=e.target.value)}}})])],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("input",{staticClass:"modal-default-button",attrs:{type:"button",value:"Create"},on:{click:function(e){t.addCategory()}}}),t._v(" "),n("button",{staticClass:"modal-default-button",on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")])])],2)])],1)])])},staticRenderFns:[]};var K={components:{"category-form-modal":n("VU/8")(W,X,!1,function(t){n("bWrs")},"data-v-33235b07",null).exports,spinner:q},name:"TransactionView",data:function(){return{yearToSend:0,monthToSend:0,isCurrentMonth:!1,transaction:new x,transactionList:[],categories:[],showNewCategoryModal:!1,areTransactionsLoaded:!1,areCategoriesLoaded:!1,isMoneyToSpendLoaded:!1,moneyToSpend:0,editingMoneyToSpend:!1,savedMoneyToSpend:0}},computed:{sortedTransList:function(){return this.transactionList.sort(function(t,e){return t.id>e.id?-1:t.id<e.id?1:0})},totalMoneySpent:function(){return this.transactionList.map(function(t){return t.moneyspent}).reduce(function(t,e){return t+e},0)},categorySpendings:function(){var t=[];return this.transactionList.reduce(function(e,n){var a=void 0;return e[a=n.category?n.category.name:"No category"]||(e[a]={total:0,name:a},t.push(e[a])),e[a].total+=n.moneyspent,e},{}),console.log("result",t),t},isLoaded:{set:function(t){return!1},get:function(){return this.areTransactionsLoaded&&this.areCategoriesLoaded&&this.isMoneyToSpendLoaded}}},filters:{toLocalDate:function(t){return t?new Date(t).toLocaleDateString("en-GB"):""}},mounted:function(){this.getTransactionsForMonth(),this.getCategories(),this.getMoneyToSpend(),console.log("sortedTransList:",this.sortedTransList),console.log("transList:",this.transactionList)},methods:{createTransaction:function(){var t=this;this.areTransactionsLoaded=!1,F(this.transaction).then(function(e){t.transaction.description="",t.transaction.moneyspent="",t.transactionList.push(e),t.$router.push({name:"TransactionView",params:{Month:t.monthToSend,Year:t.yearToSend}}),t.areTransactionsLoaded=!0}).catch(function(e){alert(e),t.areTransactionsLoaded=!0})},deleteTransaction:function(t){var e=this;confirm("Are you sure you want to delete this transaction?")&&(this.areTransactionsLoaded=!1,O(t).then(function(n){e.transactionList=e.transactionList.filter(function(e){return e.id!=t}),e.areTransactionsLoaded=!0}).catch(function(t){alert(t),e.areTransactionsLoaded=!0}))},getTransactionsForMonth:function(){var t=this,e=E()(Date.now()).format("M"),n=E()(Date.now()).format("YYYY");this.$route.params.Year&&this.$route.params.Month?(this.yearToSend=this.$route.params.Year,this.monthToSend=this.$route.params.Month,localStorage.setItem("yearToSend",this.yearToSend),localStorage.setItem("monthToSend",this.monthToSend)):(this.yearToSend=localStorage.getItem("yearToSend"),this.monthToSend=localStorage.getItem("monthToSend")),console.log("yearToSend: ",this.yearToSend,"   monthToSend: ",this.monthToSend),this.isCurrentMonth=e==this.monthToSend&&n==this.yearToSend,A(this.monthToSend,this.yearToSend).then(function(e){t.transactionList=e,t.areTransactionsLoaded=!0}).catch(function(t){alert(t)})},getCategories:function(){var t=this;H().then(function(e){t.categories=e,t.areCategoriesLoaded=!0}).catch(function(e){alert(e),t.areCategoriesLoaded=!0})},addCategoryFromModal:function(t){this.categories.push(t),this.showNewCategoryModal=!1},getMoneyToSpend:function(){var t=this;P(this.monthToSend,this.yearToSend).then(function(e){t.moneyToSpend=e,t.savedMoneyToSpend=e,t.isMoneyToSpendLoaded=!0}).catch(function(e){alert(e),t.isMoneyToSpendLoaded=!0})},editMoneyToSpend:function(){var t=this;this.isMoneyToSpendLoaded=!1,I(this.moneyToSpend).then(function(e){t.editingMoneyToSpend=!1,t.isMoneyToSpendLoaded=!0}).catch(function(e){alert(e),t.isMoneyToSpendLoaded=!0})},returnOldMoneyToSpend:function(){this.moneyToSpend=this.savedMoneyToSpend,this.editingMoneyToSpend=!1}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoaded?n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"centerOnMiddle"},[n("div",[n("table",{staticClass:"transactions"},[t._m(0),t._v(" "),t.isCurrentMonth?n("tr",{attrs:{id:"new-transaction"}},[n("td",[t._v("New transaction")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.description,expression:"transaction.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description of new transaction"},domProps:{value:t.transaction.description},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.createTransaction(e):null},input:function(e){e.target.composing||t.$set(t.transaction,"description",e.target.value)}}})]),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.transaction.category.id,expression:"transaction.category.id"}],staticClass:"form-control smallFormControl",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.transaction.category,"id",e.target.multiple?n:n[0])}}},[n("option",{attrs:{selected:""},domProps:{value:-1}},[t._v("No category")]),t._v(" "),t._l(t.categories,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),n("button",{attrs:{id:"show-modal"},on:{click:function(e){t.showNewCategoryModal=!0}}},[t._v("+")])]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.moneyspent,expression:"transaction.moneyspent"}],staticClass:"form-control",attrs:{type:"text",placeholder:"$$"},domProps:{value:t.transaction.moneyspent},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.createTransaction(e):null},input:function(e){e.target.composing||t.$set(t.transaction,"moneyspent",e.target.value)}}})])]):t._e(),t._v(" "),t._l(t.sortedTransList,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t._f("toLocalDate")(e.date)))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),e.category?n("td",[t._v(t._s(e.category.name))]):n("td",[t._v("No category")]),t._v(" "),n("td",[t._v(t._s(e.moneyspent))]),t._v(" "),n("td",[n("input",{attrs:{type:"button",value:"x"},on:{click:function(n){t.deleteTransaction(e.id)}}})])])})],2),t._v(" "),t.showNewCategoryModal?n("category-form-modal",{on:{created:t.addCategoryFromModal,close:function(e){t.showNewCategoryModal=!1}}}):t._e(),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"transactions centerOnMiddle"},[t._m(1),t._v(" "),t._l(t.categorySpendings,function(e){return n("tr",{key:e.name},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.total))])])})],2),t._v(" "),n("br"),t._v(" "),n("table",{staticClass:"transactions centerOnMiddle"},[t._m(2),t._v(" "),n("tr",[t.editingMoneyToSpend?n("td",{on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.returnOldMoneyToSpend(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.editMoneyToSpend(e):null}]}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.moneyToSpend,expression:"moneyToSpend"}],staticClass:"form-control smallFormControl",attrs:{type:"text",placeholder:"Enter value..."},domProps:{value:t.moneyToSpend},on:{input:function(e){e.target.composing||(t.moneyToSpend=e.target.value)}}})]):n("td",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.editingMoneyToSpend=!0}}},[n("a",[t._v(t._s(t.moneyToSpend))])]),t._v(" "),n("td",[t._v(t._s(t.totalMoneySpent))]),t._v(" "),n("td",[t._v(t._s(t.moneyToSpend-t.totalMoneySpent))])])])],1)])]):n("spinner")},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"tableHeader"},[e("th",{staticClass:"transaction-date"},[this._v("Date")]),this._v(" "),e("th",{staticClass:"description"},[this._v("Description")]),this._v(" "),e("th",{staticClass:"description"},[this._v("Category")]),this._v(" "),e("th",{staticClass:"money-spent"},[this._v("Money spent")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"tableHeader"},[e("th",[this._v("Category")]),this._v(" "),e("th",[this._v("Money spent")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"tableHeader"},[e("th",[this._v("Money to spend")]),this._v(" "),e("th",[this._v("Money spent")]),this._v(" "),e("th",[this._v("Money left")])])}]};var Q=n("VU/8")(K,G,!1,function(t){n("K6v+")},"data-v-128322f8",null).exports,Z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("Community :')")])])}]};var tt=n("VU/8")({name:"CommunityMain",data:function(){return{}}},Z,!1,function(t){n("X74l")},"data-v-ab45a172",null).exports;a.a.use(p.a);var et=new p.a({routes:[{path:"/",name:"HelloWorld",component:_},{path:"/login",name:"Login",component:C},{path:"/register",name:"Register",component:L},{path:"/transactions",name:"Transactions",props:!0,component:B},{path:"/view/transactions",name:"TransactionView",props:!0,component:Q},{path:"/community/main",name:"CommunityMain",component:tt}],mode:"history"});et.beforeEach(function(t,e,n){m.isLoggedIn()?d.filter(function(e){return e==t.path}).length<1?n():n("/transactions"):l.filter(function(e){return e==t.path}).length<1?n():n("/")});var nt=et;a.a.config.productionTip=!1,new a.a({el:"#app",router:nt,components:{App:g},template:"<App/>"})},VW9d:function(t,e){},X74l:function(t,e){},Ywqh:function(t,e){},bWrs:function(t,e){},bngJ:function(t,e){},lLy2:function(t,e){},uslO:function(t,e,n){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(t){return n(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="uslO"},yqaL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.56671a3bc187b4e79077.js.map