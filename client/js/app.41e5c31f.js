(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e0b":function(t,e,a){"use strict";var s=a("2dac"),r=a.n(s);r.a},"2dac":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("AppName")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l),u=a("335d"),p={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},d=p,m=a("2877"),h=Object(m["a"])(d,n,i,!1,null,null,null),f=h.exports,v={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:f}},b=v,g=Object(m["a"])(b,r,o,!1,null,null,null),_=g.exports,C=a("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("h1",[t._v("Welcome to Insta-Ham")]),t.$auth.isAuthenticated?s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.newPost(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.imgUrl,expression:"post.imgUrl"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ImgUrl"},domProps:{value:t.post.imgUrl},on:{input:function(e){e.target.composing||t.$set(t.post,"imgUrl",e.target.value)}}})]),s("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Submit")])])])]):t._e(),s("div",{staticClass:"row"},t._l(t.posts,(function(t){return s("post",{key:t.id,attrs:{post:t}})})),1)])},P=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post col-3"},[a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.post.imgUrl,alt:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.post.title))]),a("p",{staticClass:"card-text"},[a("img",{attrs:{src:t.post.creator.picture,alt:""}}),t._v(" "+t._s(t.post.creator.name)+" ")]),t.isCreator?a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"}},[t._v("Delete")]):t._e()])])])},$=[],x={name:"Post",props:["post"],computed:{isCreator(){return this.$store.state.profile.email==this.post.creatorEmail}}},O=x,j=Object(m["a"])(O,y,$,!1,null,null,null),k=j.exports,T={name:"home",mounted(){this.$store.dispatch("getAllPosts")},data(){return{post:{title:"",imgUrl:""}}},computed:{posts(){return this.$store.state.posts}},methods:{newPost(){this.$store.dispatch("newPost",this.post)}},components:{Post:k}},A=T,U=Object(m["a"])(A,w,P,!1,null,null,null),E=U.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},H=[],B={name:"Profile",computed:{profile(){return this.$store.state.profile}}},N=B,D=(a("1e0b"),Object(m["a"])(N,S,H,!1,null,"02ab0928",null)),M=D.exports;s["a"].use(C["a"]);const z=[{path:"/",name:"Home",component:E},{path:"/profile",name:"Profile",component:M,beforeEnter:u["b"]}],I=new C["a"]({routes:z});var W=I,J=a("2f62");s["a"].use(J["a"]);let K=location.host.includes("localhost")?"http://localhost:3000/":"/",L=c.a.create({baseURL:K+"api",timeout:3e3,withCredentials:!0});var R=new J["a"].Store({state:{profile:{},posts:[]},mutations:{setProfile(t,e){t.profile=e},setPosts(t,e){t.posts=e},addPost(t,e){t.posts.push(e)}},actions:{setBearer({},t){L.defaults.headers.authorization=t},resetBearer(){L.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await L.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getAllPosts({commit:t,dispatch:e}){try{let e=await L.get("posts");t("setPosts",e.data)}catch(a){console.error(a)}},async newPost({commit:t,dispatch:e},a){await L.post("posts",a);e("getAllPosts")}}});const F="bcw-classroom.auth0.com",V="https://bcw-classroom-api.com",q="fTvTnlTzK1DtHtmnp7FPSeCEsKDrvblT";s["a"].use(u["a"],{domain:F,clientId:q,audience:V,onRedirectCallback:t=>{W.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:W,store:R,render:function(t){return t(_)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});