(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"4b2d":function(t,e,n){},6093:function(t,e,n){"use strict";var r=n("b01d"),a=n.n(r);a.a},"6edc":function(t,e,n){"use strict";var r=n("d47d"),a=n.n(r);a.a},"71ed":function(t,e,n){"use strict";var r=n("4b2d"),a=n.n(r);a.a},"754e":function(t,e,n){},"8ff8":function(t,e,n){"use strict";var r=n("c89b"),a=n.n(r);a.a},a525:function(t,e,n){},ae2b:function(t,e,n){"use strict";var r=n("754e"),a=n.n(r);a.a},b01d:function(t,e,n){},b1d9:function(t,e,n){"use strict";var r=n("a525"),a=n.n(r);a.a},b363:function(t,e,n){},c89b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader",{staticClass:"header"}),n("main",[n("router-view",{staticClass:"page"})],1),n("AppFooter",{staticClass:"footer",on:{about:t.showAbout}}),n("AboutDialog",{directives:[{name:"show",rawName:"v-show",value:t.viewState.isAboutShown,expression:"viewState.isAboutShown"}],on:{close:t.hideAbout}})],1)},i=[],s=n("750b"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"app-header-root"},[n("div",{staticClass:"subtitle"},[t._v(" みんなで きがるに おはなししよう ")]),n("div",{staticClass:"title"},[t._v(" cha-chat! "),n("div",{staticClass:"ruby"},[t._v("チャチャット！")])])])}],u=Object(s["c"])({props:{},setup:function(){return{}}}),l=u,p=(n("71ed"),n("2877")),d=Object(p["a"])(l,c,o,!1,null,"9d769604",null),f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"app-footer-root"},[n("button",{staticClass:"about",attrs:{title:"how to play"},on:{click:function(e){return t.$emit("about")}}},[t._v("?")])])},b=[],m=Object(s["c"])({props:{},setup:function(){return{}}}),h=m,C=(n("b1d9"),Object(p["a"])(h,v,b,!1,null,"b683e3b8",null)),O=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"about-dialog-root"},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"main"},[n("h1",[t._v("あそびかた")]),n("div",{staticClass:"subtitle"},[t._v("みんなであつまって、おはなししよう！")]),n("h2",[t._v("どんなゲーム？")]),n("p",[t._v(" CHA-CHAT（ちゃちゃっと）はともだちと、かぞくと、なかまといっしょにあいてをしる、じぶんをしってもらうゲームです。 ")]),n("h2",[t._v("どうやってあそぶ？")]),n("p",[t._v(" ルールはかんたん、じゅんばんに じこしょうかいを するだけ。 ")]),n("ol",[n("li",[t._v("カードをシャッフルして「なんのことを」「どのように」はなすかきめる")]),n("li",[t._v("はなせるひとから じゅんばんに じぶんのことを ひとり２０びょうではなす")]),n("li",[t._v("ぜんいんがはなしたら、カードをシャッフルしてちがうテーマではなす"),n("br"),t._v(" おもいつかなかったら「パス」をしてもだいじょうぶです。 ")])]),n("h2",[t._v("どんなときにつかうとよい？")]),n("p",[t._v(" はじめてのあいてや これからなかよくなりたい あいてももちろん、ふだんいっしょに いるひととやっても しらなかったことが おたがいしりあえる かもしれませんよ。 ")]),n("h2",[t._v("大人の方へ：ライセンス")]),n("p",[t._v(" このプロジェクトは"),n("a",{attrs:{href:"https://github.com/yuneco/cha-chat",target:"_blank"}},[t._v("GitHubのリポジトリ")]),t._v("でOSS（オープンソースソフトウエア）として公開されており、誰でも自由に利用・改変することが許諾されています。 このプロジェクトの背景や活用に関しては上記のリポジトリの説明をご参照ください。 ")])]),n("div",{staticClass:"btns"},[n("button",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}},[t._v("とじる")])])])])])},g=[],_=Object(s["c"])({props:{},setup:function(){return{}}}),w=_,y=(n("ae2b"),Object(p["a"])(w,x,g,!1,null,"480150c8",null)),S=y.exports,k=Object(s["c"])({components:{AppHeader:f,AppFooter:O,AboutDialog:S},props:{},setup:function(){var t=Object(s["e"])({isAboutShown:!1}),e=function(){t.isAboutShown=!0},n=function(){t.isAboutShown=!1};return{viewState:t,showAbout:e,hideAbout:n}}}),j=k,A=(n("6edc"),Object(p["a"])(j,a,i,!1,null,"ca8729de",null)),$=A.exports,F=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("router-link",{staticClass:"start",attrs:{to:"talk"}},[t._v("はじめる")])],1)},P=[],E={name:"Home",components:{}},R=E,D=(n("6093"),Object(p["a"])(R,T,P,!1,null,"10c820d6",null)),H=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk-page-root"},[n("CardStage")],1)},M=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-stage-root"},[n("div",{staticClass:"card-box theme-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.themeCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.themeCard.isFlipping},style:{backgroundColor:t.cardState.themeCard.color}},[t._v("あそび・たのしいこと")]),n("TalkCard",{attrs:{text:t.cardState.themeCard.text,bgcolor:t.cardState.themeCard.color,isOpen:t.cardState.themeCard.isOpen},on:{click:t.clickThemeCard}})],1),n("div",{staticClass:"card-box style-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.styleCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.styleCard.isFlipping},style:{backgroundColor:t.cardState.styleCard.color}},[t._v("それを・・・こうしたら？")]),n("TalkCard",{attrs:{text:t.cardState.styleCard.text,bgcolor:t.cardState.styleCard.color,isOpen:t.cardState.styleCard.isOpen},on:{click:t.clickStyleCard}})],1),n("div",{staticClass:"control"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.isCardOpen,expression:"isCardOpen"}],staticClass:"cancel-button",attrs:{title:"change cards"},on:{click:t.closeCard}}),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isAllCardOpen&&!t.timerState.isActive,expression:"isAllCardOpen && !timerState.isActive"}],staticClass:"ok-button",attrs:{title:"start talk"},on:{click:t.startCount}}),n("CountDown",{directives:[{name:"show",rawName:"v-show",value:t.timerState.isActive,expression:"timerState.isActive"}],staticClass:"timer",class:{popping:t.timerState.isPopping},attrs:{time:t.timerState.time},on:{sec:function(e){t.timerState.time-=1},retry:t.startCount}})],1)])},q=[],B=(n("96cf"),n("1da1")),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk-card-root",class:{open:t.isOpen},style:{backgroundColor:t.bgcolor},on:{click:function(e){return t.$emit("click")}}},[t._m(0),n("div",{staticClass:"text-box"},[n("span",{staticClass:"text"},[t._v(t._s(t.displayText))])])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-box"},[n("span",{staticClass:"text"},[t._v("タップして"),n("br"),t._v("カードをひらく")])])}],I=(n("ac1f"),n("5319"),Object(s["c"])({props:{text:{type:String,default:"???"},bgcolor:{type:String,default:"#eb73a3"},isOpen:{type:Boolean,default:!1}},setup:function(t){var e=Object(s["a"])((function(){return t.text.replace(/\/\//g,"\n")}));return{displayText:e}}})),K=I,L=(n("d2d3"),Object(p["a"])(K,G,z,!1,null,"54e069a2",null)),Q=L.exports,U="#eb73a3",V="#61c8d4",W="#82144977",X="#24688a77",Y=n("d454"),Z=(n("d3b7"),function(t){return t[Math.floor(Math.random()*t.length)]}),tt=function(t){return new Promise((function(e){return setTimeout(e,t)}))},et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"count-down-root"},[t.time>0?[n("div",{staticClass:"title"},[t._v("のこりじかん")]),n("div",{staticClass:"time"},[n("span",{staticClass:"sec"},[t._v(t._s(t.time))]),n("span",{staticClass:"suffix"},[t._v("びょう")])])]:t._e(),t.time<=0?[n("div",{staticClass:"retry",on:{click:function(e){return t.$emit("retry")}}},[t._v(" もういちど！ ")])]:t._e()],2)},nt=[],rt=(n("a9e3"),Object(s["c"])({props:{time:{type:Number,default:0}},setup:function(t,e){var n=Date.now(),r=!1,a=function t(){if(r){var a=Date.now();a-n>1e3&&(n+=1e3,e.emit("sec")),requestAnimationFrame(t)}};return Object(s["f"])((function(){return t.time}),(function(){var e=t.time>0;r!==e&&(r=e,r&&(n=Date.now(),a()))})),Object(s["d"])((function(){r=!1})),{}}})),at=rt,it=(n("e7e7"),Object(p["a"])(at,et,nt,!1,null,"5f639ec3",null)),st=it.exports,ct=Object(s["c"])({components:{TalkCard:Q,CountDown:st},props:{},setup:function(){var t=Object(s["e"])({themeCard:{text:"100にん//あつまったら//できそうなこと",color:U,shadow:W,isOpen:!1,isFlipping:!1},styleCard:{text:"ゆ〜っくり//しゃべってみよう",color:V,shadow:X,isOpen:!1,isFlipping:!1}}),e=Object(s["e"])({time:0,isActive:!1,isPopping:!1}),n=Object(s["a"])((function(){return t.themeCard.isOpen||t.styleCard.isOpen})),r=Object(s["a"])((function(){return t.themeCard.isOpen&&t.styleCard.isOpen})),a=Object(s["a"])((function(){return e.isActive&&0===e.time})),i=function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!(a.length>0&&void 0!==a[0])||a[0],r=!(a.length>1&&void 0!==a[1])||a[1],!n){e.next=11;break}return t.themeCard.text=Z(Y.themes),t.themeCard.isOpen=!0,t.themeCard.isFlipping=!0,e.next=8,tt(300);case 8:return t.themeCard.isFlipping=!1,e.next=11,tt(250);case 11:if(!r){e.next=20;break}return t.styleCard.text=Z(Y.styles),t.styleCard.isOpen=!0,t.styleCard.isFlipping=!0,e.next=17,tt(300);case 17:return t.styleCard.isFlipping=!1,e.next=20,tt(250);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var n=Object(B["a"])(regeneratorRuntime.mark((function n(){var a,i,s=arguments;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=!(s.length>0&&void 0!==s[0])||s[0],i=!(s.length>1&&void 0!==s[1])||s[1],!a||!t.themeCard.isOpen){n.next=8;break}return t.themeCard.isOpen=!1,t.themeCard.isFlipping=!0,n.next=7,tt(300);case 7:t.themeCard.isFlipping=!1;case 8:if(!i||!t.styleCard.isOpen){n.next=14;break}return t.styleCard.isOpen=!1,t.styleCard.isFlipping=!0,n.next=13,tt(300);case 13:t.styleCard.isFlipping=!1;case 14:r.value||(e.time=0,e.isActive=!1);case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.value){t.next=5;break}return t.next=3,c();case 3:return t.next=5,tt(500);case 5:return t.next=7,i();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){t.themeCard.isOpen||i(!0,!1)},l=function(){t.styleCard.isOpen||i(!1,!0)},p=function(){var t=Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.time=20,e.isActive=!0,t.next=4,tt(0);case 4:return e.isPopping=!0,t.next=7,tt(250);case 7:e.isPopping=!1;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{cardState:t,isCardOpen:n,isAllCardOpen:r,isTimeup:a,setNewCard:o,openCard:i,closeCard:c,clickThemeCard:u,clickStyleCard:l,timerState:e,startCount:p}}}),ot=ct,ut=(n("8ff8"),Object(p["a"])(ot,J,q,!1,null,"0e0740f3",null)),lt=ut.exports,pt=Object(s["c"])({components:{CardStage:lt},props:{},setup:function(){return{}}}),dt=pt,ft=Object(p["a"])(dt,N,M,!1,null,"aece9f1e",null),vt=ft.exports;r["a"].use(F["a"]);var bt=[{path:"/",name:"Home",component:H},{path:"/talk",name:"Talk",component:vt}],mt=new F["a"]({mode:"hash",base:"",routes:bt}),ht=mt;r["a"].config.productionTip=!1,r["a"].use(s["b"]),new r["a"]({router:ht,render:function(t){return t($)}}).$mount("#app")},d2d3:function(t,e,n){"use strict";var r=n("e762"),a=n.n(r);a.a},d454:function(t){t.exports=JSON.parse('{"themes":["〇〇ごっこ","ほんよみ","おにごっこ・かくれんぼ","のりもの","おえかき・ぬりえ","うた・ダンス","ボールあそび","りょうり・おかしづくり","なわとび・フラフープ","つり・むしとり","キャンプ","えいがかん","どうぶつえん","ゆうえんち","きせかえ","べんきょう","おてつだい","すごろく","じゃんけん","あやとり・おりがみ","てあそび","けんだま・ヨーヨー・おてだま","じっけん","こうえんあそび","パズル","ねんど","なぞなぞ・クイズ","ぬいぐるみ・にんぎょうげき","ブロックあそび","アスレチック"],"styles":["おうちのなかでやったら？","おふろでやったら？","ふたりでやったら？","ひとりでやったら？","おおぜいでやったら？","ふとんのうえでやったら？","すっごくはやくやったら？","すっごくおそくやったら？","ヒソヒソやったら？"]}')},d47d:function(t,e,n){},e762:function(t,e,n){},e7e7:function(t,e,n){"use strict";var r=n("b363"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6a629547.js.map