(function(t){function e(e){for(var a,r,l=e[0],c=e[1],o=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"29eb0922"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=r(t);var o=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}i[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0972":function(t,e,s){},1399:function(t,e,s){"use strict";var a=s("ef4a"),i=s.n(a);i.a},"21bb":function(t,e,s){"use strict";var a=s("2dad"),i=s.n(a);i.a},"2dad":function(t,e,s){},"49c5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),l={},c=Object(r["a"])(l,i,n,!1,null,null,null),o=c.exports,d=(s("78a7"),s("be35"),s("d3b7"),s("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{attrs:{options:t.swiperOptions},on:{"click-slide":t.handleClickSlide}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("db27"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("e388"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("e27e"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 pt-3 text-center text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap",class:t.canOpen?"can-open":"open"},t._l(t.iconList,(function(e,s){return a("div",{key:s,staticClass:"nav-item mb-3 pt-2"},[a("i",{class:"sprite sprite-"+e.icon}),a("div",{staticClass:"py-1"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"bg-light py-2 fs-sm",on:{click:function(e){t.canOpen=!t.canOpen}}},[a("i",{staticClass:"sprite sprite-arrow mr-1",class:{inverse:t.canOpen}}),a("span",[t._v(t._s(t.btnText))])])]),a("m-list-card",{attrs:{icon:"menu",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 my-1 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+t.newsId}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 pr-2 text-ellipse"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey fs-sm"},[t._v(t._s(t._f("dateFormat")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{icon:"card-hero",image:t.heroIcon,title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+t.heroId}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])}),a("m-list-card",{staticStyle:{"border-bottom":"1px solid #d4d9de"},attrs:{icon:"menu",title:"精彩视频",categories:t.videoCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.25rem"}},t._l(s.videoList,(function(e,s){return a("router-link",{key:s,staticClass:"p-1 mb-2 text-center",staticStyle:{width:"50%"},attrs:{tag:"div",to:"/videos/"+e._id}},[a("img",{staticClass:"w-100",staticStyle:{height:"95px",width:"168px"},attrs:{src:e.image,alt:""}}),a("div",{staticClass:"video-title my-2 text-grey-1",staticStyle:{width:"98%"}},[t._v(t._s(e.title))]),a("div",{staticClass:"v_info d-flex jc-between"},[a("span",{staticClass:"v_num fs-xs text-grey ml-2"},[a("i",{staticClass:"sprite sprite-play"}),t._v(" "+t._s(t._f("numFormat")(e.num))+" ")]),a("span",{staticClass:"v_time fs-xs text-grey"},[t._v("06-20")])])])})),1)]}}])}),a("router-link",{staticClass:"bg-white text-grey-1 text-center",staticStyle:{padding:"0.75rem 0"},attrs:{tag:"div",to:"/strategycenter"}},[a("span",{staticClass:"fs-sm"},[t._v("加载更多内容")])]),a("m-list-card",{staticStyle:{"border-bottom":"1px solid #d4d9de"},attrs:{icon:"menu",title:"图文攻略",categories:t.strategyCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[t._l(s.strategyList,(function(e,s){return a("div",{key:s,staticClass:"py-2 my-1 d-flex jc-start border-bottom"},[a("router-link",{staticClass:"pl-1 mr-3",attrs:{tag:"div",to:"/strategies/"+e._id}},[a("img",{staticStyle:{height:"70px",width:"116px"},attrs:{src:e.image}})]),a("div",{staticStyle:{width:"14rem",position:"relative"}},[a("router-link",{attrs:{tag:"div",to:"/strategies/"+e._id}},[a("span",{staticClass:"strategy-title w-100 mb-2 fs-xl"},[t._v(t._s(e.title))]),a("span",{staticClass:"strategy-desc w-100 text-grey-1"},[t._v(t._s(e.description))])]),a("div",{staticClass:"s_time fs-xs text-grey",staticStyle:{position:"absolute",bottom:"-3px",left:"0px"}},[t._v("06-20")])],1)],1)})),a("router-link",{staticClass:"load-more",attrs:{tag:"div",to:"/strategycenter"}},[a("div",{staticClass:"bg-white text-grey-1 text-center pt-2"},[a("span",{staticClass:"fs-sm"},[t._v("点击查看更多")])])])]}}])})],1)},p=[],m=(s("b680"),s("ac1f"),s("5319"),{data:function(){return{swiperOptions:{autoplay:!0,pagination:{el:".pagination-home",clickable:!0}},newsId:"5eec2c67d61d6860bc2556a2",heroId:"5eecaf2413339a361d0ea2a6",canOpen:!0,newsCats:[],heroCats:[],videoCats:[],strategyCats:[],iconList:[{icon:"blz",name:"爆料站"},{icon:"gsz",name:"故事站"},{icon:"zbsc",name:"周边商城"},{icon:"tyf",name:"体验服"},{icon:"xrzq",name:"新人专区"},{icon:"rycc",name:"荣耀传承"},{icon:"mnzzlk",name:"模拟战资料库"},{icon:"wzyd",name:"王者营地"},{icon:"gzh",name:"公众号"},{icon:"bbjs",name:"版本介绍"},{icon:"djhj",name:"对局环境"},{icon:"wxwzt",name:"无限王者团"},{icon:"cyhdy",name:"创意互动营"}],heroIcon:s("6b17")}},computed:{btnText:function(){return this.canOpen?"展开":"收起"}},filters:{dateFormat:function(t){return t.substring(5,10).replace("-","/")},numFormat:function(t){return t<1e4?t:parseFloat(t/1e4).toFixed(1)+"万"}},methods:{handleClickSlide:function(t,e){console.log("Click slide!",t,e)},fetchNewsCats:function(){var t=this;this.$http.get("/news/list").then((function(e){t.newsCats=e.data,console.log(t.newsCats)}))},fetchHeroCats:function(){var t=this;this.$http.get("/heroes/list").then((function(e){t.heroCats=e.data}))},fetchVideoCats:function(){var t=this;this.$http.get("/videos/list").then((function(e){t.videoCats=e.data}))},fetchStrategyCats:function(){var t=this;this.$http.get("/strategies/list").then((function(e){t.strategyCats=e.data,console.log(t.strategyCats)}))}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideoCats(),this.fetchStrategyCats()}}),v=m,f=(s("21bb"),Object(r["a"])(v,u,p,!1,null,null,null)),_=f.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("这是攻略中心页")])])}],C={},b=Object(r["a"])(C,g,h,!1,null,null,null),x=b.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("这是赛事中心页")])])}],w={},S=Object(r["a"])(w,y,k,!1,null,null,null),j=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[t.id?s("h1",[t._v("这是视频详情页,视频id为")]):t._e(),s("p",[t._v(t._s(t.id))])])},O=[],E={props:{id:{type:String,required:!0}}},I=E,q=Object(r["a"])(I,$,O,!1,null,null,null),P=q.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("这是图文攻略详情页，图文id为")]),s("p",[t._v(t._s(t.id))])])},T=[],z={props:{id:{type:String,required:!0}}},A=z,F=Object(r["a"])(A,L,T,!1,null,null,null),M=F.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),t._m(0),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"},on:{click:t.redict}},[t._v("立即下载")])]),a("div",{staticClass:"bg-primary pt-3 pb-2"},[a("div",{staticClass:"nav jc-around nav-inverse text-white"},[a("div",{staticClass:"nav-item",class:{active:"/"===t.$route.path}},[a("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),a("div",{staticClass:"nav-item",class:{active:"/strategycenter"===t.$route.path}},[a("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/strategycenter"}},[t._v("攻略中心")])],1),a("div",{staticClass:"nav-item",class:{active:"/matchindex"===t.$route.path}},[a("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/matchindex"}},[t._v("赛事中心")])],1)])]),a("router-view")],1)},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("div",{staticClass:"text-white"},[t._v("王者荣耀")]),s("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])])}],U={methods:{redict:function(){window.location.href="https://pvp.qq.com/zlkdatasys/mct/d/play.shtml"}}},V=U,B=(s("a006"),Object(r["a"])(V,N,H,!1,null,null,null)),R=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"iconfont icon-back text-blue",on:{click:function(e){return t.$router.push("/")}}}),s("strong",{staticClass:"flex-1 text-blue pl-2"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("2020-06-19")])]),s("div",{staticClass:"px-3 py-3 fs-xl body",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"mt-2 py-2 px-3 border-top"},[s("i",{staticClass:"iconfont icon-menu"}),s("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")]),s("div",{staticClass:"py-2"},t._l(t.model.related,(function(e,a){return s("router-link",{key:a,staticClass:"py-1 related text-ellipse",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(t._s(e.title))])})),1)])]):t._e()},D=[],G={props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:"fetchArticle"},methods:{fetchArticle:function(){var t=this;this.$http.get("/articles/".concat(this.id)).then((function(e){t.model=e.data}))}},created:function(){this.fetchArticle()}},K=G,Q=(s("1399"),Object(r["a"])(K,J,D,!1,null,null,null)),W=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),t._m(0),a("router-link",{staticClass:"text-white",attrs:{tag:"div",to:"/"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{backgroundImage:"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2 fs-sm"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey",attrs:{tag:"span",to:"/"}},[t._v("皮肤 "+t._s(t.model.skinCount)+" >")])],1)])]),t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu"}),t._v(" 一图识英雄 ")])],1),a("div",{staticClass:"skills bg-whiter mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:s,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex py-3 my-2"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 fs-sm ml-4"},[t._v(" (冷却值: "+t._s(t.currentSkill.delay)+" 消耗: "+t._s(t.currentSkill.cost)+") ")])]),a("p",{staticClass:"mt-1 mb-0"},[t._v(t._s(t.currentSkill.description))])]):t._e()])]),a("m-card",{staticClass:"skill-suggest",attrs:{icon:"menu",plain:"",title:"加点建议"}},[a("div",{staticClass:"d-flex jc-between px-3"},[a("div",{staticClass:"main-skill text-center"},[a("div",{staticClass:"pb-2 fs-xl"},[t._v("主升")]),a("img",{attrs:{src:t.model.skills[2].icon,alt:""}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(t.model.skills[2].name))])]),a("div",{staticClass:"second-skill ml-5 text-center"},[a("div",{staticClass:"pb-2 fs-xl"},[t._v("副升")]),a("img",{attrs:{src:t.model.skills[1].icon,alt:""}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(t.model.skills[1].name))])]),a("div",{staticClass:"main-skill flex-1 ml-5 text-center"},[a("div",{staticClass:"pb-2 fs-xl"},[t._v("召唤师技能")]),a("div",{staticClass:"d-flex jc-between"},t._l(t.model.summonerSkills,(function(e,s){return a("div",{key:s},[a("img",{attrs:{src:e.icon,alt:""}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)])]),a("m-card",{staticClass:"hero-items mt-4 pb-0",staticStyle:{margin:"0.5rem -1rem 0 -1rem","border-bottom":"none"},attrs:{plain:"",icon:"menu",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(e,s){return a("div",{key:s},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)])],1),a("m-card",{staticClass:"hero-mingwens",attrs:{plain:"",icon:"menu",title:"铭文推荐"}},[a("div",{staticClass:"d-flex jc-between"},t._l(t.model.mingwens,(function(e,s){return a("div",{key:s,staticClass:"d-flex jc-between"},[a("img",{attrs:{src:e.icon,alt:""}}),a("div",{staticClass:"ml-2"},[a("div",{staticClass:"fs-xl py-1"},[t._v(t._s(e.name))]),e.description1?a("p",{staticClass:"fs-xs my-0"},[t._v(t._s(e.description1))]):t._e(),e.description2?a("p",{staticClass:"fs-xs my-0"},[t._v(t._s(e.description2))]):t._e(),e.description3?a("p",{staticClass:"fs-xs my-0"},[t._v(t._s(e.description3))]):t._e()])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(t._s(e.description))])])})),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-2"},[t._v("被谁克制")]),t._l(t.model.restrained,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(t._s(e.description))])])})),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-2"},[t._v("克制谁")]),t._l(t.model.restrain,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(t._s(e.description))])])}))],2)],1)])],1)],1):t._e()},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1 text-white"},[s("span",[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略战")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white px-3"},[s("div",{staticClass:"nav d-flex pt-3 pb-2 jc-around border-bottom"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],Z={props:{id:{requried:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;this.$http.get("/heroes/".concat(this.id)).then((function(e){t.model=e.data,console.log(e.data)}))}},created:function(){this.fetch()}},tt=Z,et=(s("6e94"),Object(r["a"])(tt,X,Y,!1,null,null,null)),st=et.exports;a["default"].use(d["a"]);var at=[{path:"/",component:R,children:[{path:"/",name:"home",component:_},{path:"/articles/:id",name:"article",component:W,props:!0},{path:"/strategycenter",name:"strategycenter",component:x},{path:"/matchindex",name:"matchindex",component:j},{path:"/videos/:id",name:"video",component:P,props:!0},{path:"/strategies/:id",name:"strategy",component:M,props:!0}]},{path:"/heroes/:id",name:"hero",component:st,props:!0},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],it=new d["a"]({routes:at}),nt=it,rt=s("7212"),lt=s.n(rt),ct=(s("a7a3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-3 mt-3 bg-white"},[s("div",{staticClass:"card-header ",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[s("strong",[t._v(t._s(t.title))])]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu1"})]),t.image?s("div",{staticClass:"mt-3"},[s("img",{staticClass:"w-100",attrs:{src:t.image}})]):t._e()]),s("div",{staticClass:"cardbody pt-3"},[t._t("default")],2)])}),ot=[],dt={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean},image:{type:String}}},ut=dt,pt=(s("e60d"),Object(r["a"])(ut,ct,ot,!1,null,null,null)),mt=pt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,plain:t.plain,image:t.image,title:t.title}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.activeIndex==a},on:{click:function(e){return t.$refs.list.$swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.activeIndex=t.$refs.list.$swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},ft=[],_t={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0},plain:{type:Boolean},image:{type:String}},data:function(){return{activeIndex:0}},methods:{test:function(){console.log(this.$refs.list)}}},gt=_t,ht=Object(r["a"])(gt,vt,ft,!1,null,null,null),Ct=ht.exports,bt=s("bc3a"),xt=s.n(bt);a["default"].use(lt.a),a["default"].component("m-card",mt),a["default"].component("m-list-card",Ct),a["default"].config.productionTip=!1,a["default"].prototype.$http=xt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["default"]({router:nt,render:function(t){return t(o)}}).$mount("#app")},"6b17":function(t,e,s){t.exports=s.p+"img/898981360562721.4dbb3ddd.jpg"},"6e94":function(t,e,s){"use strict";var a=s("49c5"),i=s.n(a);i.a},"78a7":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("0972"),i=s.n(a);i.a},be35:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.b3b3bca8.png"},db27:function(t,e,s){t.exports=s.p+"img/998eb31ae1b7511672169603a0d72b43.998eb31a.jpeg"},e27e:function(t,e,s){t.exports=s.p+"img/418c9a1853e990aff1d4ac9863edaeea.418c9a18.jpeg"},e388:function(t,e,s){t.exports=s.p+"img/be696f15192d84f6c2e14386aa8f8392.be696f15.jpeg"},e60d:function(t,e,s){"use strict";var a=s("e9ec"),i=s.n(a);i.a},e9ec:function(t,e,s){},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.a15d26df.js.map