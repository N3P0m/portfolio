(function(e){function t(t){for(var c,s,o=t[0],i=t[1],l=t[2],b=0,d=[];b<o.length;b++)s=o[b],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},n={app:0},r=[];function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b15":function(e,t,a){e.exports=a.p+"img/git-hub-link.972fff2a.svg"},"10d9":function(e,t,a){e.exports=a.p+"img/photoshop.82142841.svg"},"1a0e":function(e,t,a){"use strict";a("e103")},2065:function(e,t,a){e.exports=a.p+"img/github.7459feed.svg"},"2aab":function(e,t,a){e.exports=a.p+"img/illustrator.a60a8282.svg"},"305c":function(e,t,a){e.exports=a.p+"img/gulp.fcda5c4a.svg"},"41fb":function(e,t,a){e.exports=a.p+"img/portfolio-thumb.d38215a2.webp"},"4ac7":function(e,t,a){e.exports=a.p+"img/js.ece8391d.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("159b"),a("b0c0");var c=a("7a23");function n(e,t,a,n,r,s){var o=Object(c["G"])("router-view");return Object(c["z"])(),Object(c["f"])(o)}var r={};r.render=n;var s=r,o=a("6c02"),i=Object(c["i"])("div",{class:"section",id:"portfolio"},null,-1),l=Object(c["i"])("div",{class:"section",id:"portfolio"},null,-1);function u(e,t,a,n,r,s){var o=Object(c["G"])("Header"),u=Object(c["G"])("home-section"),b=Object(c["G"])("about"),d=Object(c["G"])("Skills"),p=Object(c["G"])("portfolio"),f=Object(c["G"])("Footer");return Object(c["z"])(),Object(c["h"])("div",null,[Object(c["k"])(c["b"],{onBeforeEnter:s.beforeEnterHeader,onEnter:s.enterHeader},{default:Object(c["N"])((function(){return[Object(c["O"])(Object(c["k"])(o,{onScroll:s.scroll,linkActiveClass:r.linkActiveClass},null,8,["onScroll","linkActiveClass"]),[[c["L"],r.show]])]})),_:1},8,["onBeforeEnter","onEnter"]),Object(c["k"])(u,{class:"section",id:"home",show:r.show},null,8,["show"]),Object(c["k"])(b,{class:"section",id:"about"}),Object(c["k"])(d,{class:"section",id:"skills"}),i,Object(c["k"])(p),l,Object(c["k"])(f,{class:"section",id:"contacts"})])}var b={class:"wrapper-outer wrapper-nav"},d={class:"wrapper-inner nav"},p={class:"nav-main"},f={class:"nav-main-list"},h=["href","onClick"];function j(e,t,a,n,r,s){var o=Object(c["G"])("burger-menu");return Object(c["z"])(),Object(c["h"])("header",b,[Object(c["k"])(c["b"],{name:"shadow"},{default:Object(c["N"])((function(){return[r.show.shadow?(Object(c["z"])(),Object(c["h"])("div",{key:0,class:"wrapper-nav__shadow",onClick:t[0]||(t[0]=function(){return s.burger&&s.burger.apply(s,arguments)})})):Object(c["g"])("",!0)]})),_:1}),Object(c["i"])("div",d,[Object(c["k"])(o,{onChange:s.burger,checked:r.show.shadow},null,8,["onChange","checked"]),Object(c["k"])(c["b"],{name:"nav",onEnter:s.enterNav,onAfterLeave:s.afterLeaveNav},{default:Object(c["N"])((function(){return[Object(c["O"])(Object(c["i"])("div",{class:Object(c["q"])(["nav-container",r.navСontainer])},[Object(c["i"])("nav",p,[Object(c["i"])("ul",f,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.navLinks,(function(t,n){return Object(c["z"])(),Object(c["h"])("li",{key:n,class:"nav-main-list__item"},[Object(c["i"])("a",{class:Object(c["q"])(["nav-main-list__link",{"nav-main-list__link--active":t.name==a.linkActiveClass}]),href:"#"+t.name,onClick:Object(c["P"])((function(a){return e.$emit("scroll",t.name)}),["prevent"])},Object(c["I"])(t.text),11,h)])})),128))])])],2),[[c["L"],r.show.nav]])]})),_:1},8,["onEnter","onAfterLeave"])])])}var O={for:"check",class:"btn-burger","aria-label":"Burger menu"},m=["checked"],k=Object(c["i"])("span",{class:"btn-burger__line"},null,-1),v=Object(c["i"])("span",{class:"btn-burger__line"},null,-1),g=Object(c["i"])("span",{class:"btn-burger__line"},null,-1);function _(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("label",O,[Object(c["i"])("input",{class:"btn-burger__checkbox",type:"checkbox",id:"check",checked:a.checked},null,8,m),k,v,g])}var y={name:"BurgerMenu",props:{checked:{type:Boolean}}};y.render=_;var w=y,x={components:{BurgerMenu:w},props:{linkActiveClass:{type:String,required:!0}},data:function(){return{show:{shadow:!1,nav:!1},"navСontainer":{"nav-container--active":!1},navLinks:[{name:"home",text:"Главная"},{name:"about",text:"Обо мне"},{name:"skills",text:"Навыки"},{name:"portfolio",text:"Портфолио"},{name:"contacts",text:"Контакты"}]}},methods:{burger:function(){this.show.shadow=!this.show.shadow,this.show.nav=!this.show.nav},resize:function(){document.documentElement.clientWidth<=768?(this.show.nav=!1,this.show.shadow=!1):this.show.nav=!0},enterNav:function(e){this.navСontainer["nav-container--active"]=!0},afterLeaveNav:function(e){this.navСontainer["nav-container--active"]=!1}},mounted:function(){window.addEventListener("resize",this.resize),this.resize()},unmounted:function(){window.removeEventListener("resize",this.resize)}};x.render=j;var C=x,V={class:"wrapper-outer wrapper-home"},S={class:"wrapper-inner home"},E={class:"home-content"},z=Object(c["i"])("span",{class:"home-content__name"},[Object(c["j"])(" Томин"),Object(c["i"])("br"),Object(c["j"])("Дмитрий ")],-1),F=Object(c["i"])("span",{class:"home-content__des"},[Object(c["j"])("Фронтенд разработчик"),Object(c["i"])("br"),Object(c["j"])("23 года")],-1),L=[z,F];function T(e,t,a,n,r,s){var o=Object(c["G"])("Circle");return Object(c["z"])(),Object(c["h"])("section",V,[Object(c["k"])(c["b"],{onBeforeEnter:s.beforeEnterDa,onEnter:s.enterDa},{default:Object(c["N"])((function(){return[Object(c["O"])(Object(c["i"])("div",null,[Object(c["k"])(o)],512),[[c["L"],a.show]])]})),_:1},8,["onBeforeEnter","onEnter"]),Object(c["i"])("div",S,[Object(c["k"])(c["b"],{onBeforeEnter:s.beforeEnterDa,onEnter:s.enterDa},{default:Object(c["N"])((function(){return[Object(c["O"])(Object(c["i"])("div",E,L,512),[[c["L"],a.show]])]})),_:1},8,["onBeforeEnter","onEnter"])])])}var D=a("cffa"),I={class:"circles"},A=["data-index"];function P(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("div",I,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.circles,(function(e){return Object(c["z"])(),Object(c["h"])("div",{class:Object(c["q"])(["circles__img object",e.className]),key:e.id,"data-index":e.id,ref:s.getArray},null,10,A)})),128))])}a("d81d");var B={data:function(){return{circles:[{className:"circles__img-1",id:"-6"},{className:"circles__img-2",id:"2"},{className:"circles__img-3",id:"-2"},{className:"circles__img-4",id:"3"},{className:"circles__img-5",id:"7"},{className:"circles__img-6",id:"4"}],circlesRef:[]}},methods:{getArray:function(e){this.circlesRef.push(e)},parallax:function(e){this.circlesRef.map((function(t){var a=t.getAttribute("data-index"),c=e.clientX*a/200,n=e.clientY*a/200;t.style.transform="translateX("+c+"px) translateY("+n+"px)"}))}},mounted:function(){window.addEventListener("mousemove",this.parallax)},unmounted:function(){window.removeEventListener("mousemove",this.parallax)}};B.render=P;var N=B,G={components:{Circle:N},props:{show:{type:Boolean}},data:function(){return{}},methods:{beforeEnterDa:function(e){e.style.transform="translateY(200%) scale(2)",e.style.opacity=0},enterDa:function(e,t){D["a"].to(e,{y:0,scale:1,opacity:1,duration:1,ease:"back.out(1.7)",onComplete:t})}}};G.render=T;var M=G,H=a("fe04"),q=a.n(H),R={class:"wrapper-outer wrapper-about"},K=Object(c["i"])("div",{class:"wrapper-inner about"},[Object(c["i"])("img",{class:"about__avatar",src:q.a,alt:""}),Object(c["i"])("div",{class:"about-content"},[Object(c["i"])("h2",{class:"ta-c"},"Обо мне"),Object(c["i"])("p",{class:"about__text ta-c"},[Object(c["j"])(" Привет, меня зовут Дмитрий и я начинающий фронетенд разработчик. "),Object(c["i"])("br"),Object(c["i"])("br"),Object(c["j"])(" Мне интересно создовать красивые и функиональные интерфейсы. "),Object(c["i"])("br"),Object(c["i"])("br"),Object(c["j"])(" Готов реализовывать интересные проекты в команде с профессионалами и учиться новому. ")])])],-1),$=[K];function Y(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("section",R,$)}var J={name:"About"};J.render=Y;var U=J,X={class:"wrapper-outer wrapper-skills"},W={class:"wrapper-inner skills"};function Q(e,t,a,n,r,s){var o=Object(c["G"])("Program"),i=Object(c["G"])("Stack");return Object(c["z"])(),Object(c["h"])("section",X,[Object(c["i"])("div",W,[Object(c["k"])(o),Object(c["k"])(i)])])}a("9911");var Z={class:"skills-soft"},ee=Object(c["i"])("h2",{class:"ta-c"},"Навыки",-1),te=Object(c["i"])("p",{class:"skills__text ta-c"},"Я умею работать в таких программах, как:",-1),ae={class:"skills-soft-list"},ce=["src"],ne=["innerHTML"],re={class:"stars"},se=["src"];function oe(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("div",Z,[ee,te,Object(c["i"])("ul",ae,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.programs,(function(e){return Object(c["z"])(),Object(c["h"])("li",{class:"skills-soft-list__item",key:e.id},[Object(c["i"])("img",{src:e.path,alt:"Figma",class:"skills-soft-list__item-img"},null,8,ce),Object(c["i"])("p",{class:"skills-soft-list__item-name ta-c",innerHTML:e.name},null,8,ne),Object(c["i"])("div",re,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.stars.max,(function(t){return Object(c["z"])(),Object(c["h"])("div",{key:t.id,class:Object(c["q"])([{"stars__item--active":t<=e.starsActive},"stars__item"])},[Object(c["i"])("img",{src:r.stars.link,alt:"Звезда рейтинга",class:"stars__item-img"},null,8,se)],2)})),128))])])})),128))])])}var ie={name:"Program",data:function(){return{programs:[{name:"Adobe </br> Photoshop",path:a("10d9"),starsActive:4},{name:"Adobe </br> Illustrator",path:a("2aab"),starsActive:3},{name:"GitHub",path:a("2065"),starsActive:3},{name:"Figma",path:a("6832"),starsActive:4}],stars:{max:5,link:a("ae25")}}}};ie.render=oe;var le=ie,ue={ref:"stack"},be=Object(c["i"])("p",{class:"skills__text ta-c"},"В работе использую следующий стек:",-1),de={class:"skills-stack"},pe=["onClick"],fe=Object(c["i"])("circle",{class:"progress-ring__circle progress-ring__circle-inner"},null,-1),he=["src","alt"],je={class:"progress__name"};function Oe(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("div",ue,[be,Object(c["i"])("div",de,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.circles,(function(e){return Object(c["z"])(),Object(c["h"])("div",{key:e.id,class:Object(c["q"])(["progress","progress-"+e.number]),ref:"krug",onClick:function(t){return s.circleBar(t,e)}},[(Object(c["z"])(),Object(c["h"])("svg",{class:Object(c["q"])(["progress-ring",{"progress-ring--big":e.number<=3,"progress-ring--sm":e.number>3}])},[fe,Object(c["i"])("circle",{class:"progress-ring__circle progress-ring__circle-outer",style:Object(c["r"])(e.circleStyleOuter)},null,4)],2)),Object(c["i"])("img",{src:e.path,alt:e.name,class:Object(c["q"])({"progress-ring__img--big":e.number<=3,"progress-ring__img--sm":e.number>3})},null,10,he),Object(c["i"])("span",je,Object(c["I"])(e.name),1)],10,pe)})),128))])],512)}var me=a("1dac");D["b"].registerPlugin(me["a"]);var ke={data:function(){return{circles:[{name:"HTML5",path:a("ed7c"),number:"1",percent:280,circumference:Math.floor(2*Math.PI*92),circleStyleOuter:{strokeDasharray:"".concat(578," ",578),strokeDashoffset:-578}},{name:"CSS",path:a("7305"),number:"2",percent:280,circumference:Math.floor(2*Math.PI*92),circleStyleOuter:{strokeDasharray:"".concat(578," ",578),strokeDashoffset:-578}},{name:"JavaScript",path:a("4ac7"),number:"3",percent:260,circumference:Math.floor(2*Math.PI*92),circleStyleOuter:{strokeDasharray:"".concat(578," ",578),strokeDashoffset:-578}},{name:"Gulp",path:a("305c"),number:"4",percent:260,circumference:Math.floor(2*Math.PI*72),circleStyleOuter:{strokeDasharray:"".concat(452," ",452),strokeDashoffset:-452}},{name:"SASS/SCSS",path:a("7801"),number:"5",percent:270,circumference:Math.floor(2*Math.PI*72),circleStyleOuter:{strokeDasharray:"".concat(452," ",452),strokeDashoffset:-452}},{name:"Vue.js",path:a("bdfa"),number:"6",percent:250,circumference:Math.floor(2*Math.PI*72),circleStyleOuter:{strokeDasharray:"".concat(452," ",452),strokeDashoffset:-452}}]}},methods:{circleBar:function(){this.circles.forEach((function(e){e.circleStyleOuter.strokeDashoffset=-1*(e.circumference-e.percent/100*e.circumference)}))},scrollTrigger:function(){var e=this;me["a"].create({trigger:this.$refs.stack,onEnter:function(){return e.circleBar()},start:"top 20%",end:"bottom 80%"})}},mounted:function(){window.addEventListener("scroll",this.scrollTrigger())},unmounted:function(){window.remooveEventListener("scroll",this.scrollTrigger())}};ke.render=Oe;var ve=ke,ge={components:{Program:le,Stack:ve}};ge.render=Q;var _e=ge,ye=(a("d3b7"),a("ddb0"),{ref:"portfolio",class:"wrapper-outer wrapper-portfolio section"}),we={class:"wrapper-inner"},xe=Object(c["i"])("h2",{class:"portfolio-heading ta-c"},"Портфолио",-1),Ce={class:"calculator"},Ve={class:"calculator__description"},Se=Object(c["i"])("h3",{class:"calculator__description-heading ta-c"},"Калькулятор",-1),Ee=Object(c["i"])("p",{class:"calculator__description-text"}," Обыкновенный калькулятор. Логика работы осуществлена на фреймворке Vue.js. Реализован ввод с клавиатуры: ",-1),ze={class:"calculator__keys-list"},Fe=["innerHTML"],Le={class:"to-do-list"};function Te(e,t,a,n,r,s){var o=Object(c["G"])("Scroll-progress"),i=Object(c["G"])("Calculator"),l=Object(c["G"])("Project-link"),u=Object(c["G"])("Todolist"),b=Object(c["G"])("Sites-swiper");return Object(c["z"])(),Object(c["h"])("section",ye,[Object(c["k"])(o),Object(c["i"])("div",we,[xe,Object(c["i"])("div",Ce,[Object(c["k"])(i,{class:"calculator__body"}),Object(c["i"])("div",Ve,[Se,Ee,Object(c["i"])("ul",ze,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.keys,(function(e){return Object(c["z"])(),Object(c["h"])("li",{class:"calculator__keys-item",key:e.id,innerHTML:e.text},null,8,Fe)})),128))]),Object(c["k"])(l,{link:"https://github.com/N3P0m/"},null,8,["link"])])]),Object(c["i"])("div",Le,[Object(c["k"])(u),Object(c["k"])(l,{link:"https://github.com/N3P0m/"},null,8,["link"])]),Object(c["k"])(b)])],512)}a("caad");var De={class:"calculator-body"},Ie={class:"calculator-body__dplay"},Ae={class:"post"},Pe={class:"calculator-body__keys"},Be=["onClick"],Ne={class:"numbers"},Ge=["onClick"];function Me(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("div",De,[Object(c["i"])("div",Ie,[Object(c["i"])("p",Ae,Object(c["I"])(r.calculatorValue.calcValueSecond),1),Object(c["i"])("div",null,Object(c["I"])(r.calculatorValue.calcValueFirst||0),1)]),Object(c["i"])("div",Pe,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.operands,(function(e){return Object(c["z"])(),Object(c["h"])("button",{class:Object(c["q"])(["calculator-body__keys-item",{"calculator-body__keys-item-equal":["="].includes(e),"calculator-body__keys-item-minus":["-"].includes(e),"calculator-body__keys-item-plus":["+"].includes(e)}]),key:e,onClick:function(t){return s.operations(e)}},Object(c["I"])(e),11,Be)})),128)),Object(c["i"])("div",Ne,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.numbers,(function(e){return Object(c["z"])(),Object(c["h"])("button",{class:Object(c["q"])(["calculator-body__keys-item",{"calculator-body__keys-item-zero":[0].includes(e)}]),key:e,onClick:function(t){return s.addition(e)}},Object(c["I"])(e),11,Ge)})),128))])])])}a("2532"),a("ac1f"),a("466d"),a("99af"),a("fb6a");var He={name:"Calculator",data:function(){return{calculatorValue:{calcValueFirst:0,calcValueSecond:""},numbers:[7,8,9,4,5,6,1,2,3,0,"."],operands:["C","<","÷","×","-","+","="],oper:0}},methods:{keyboardKeys:function(e){e.preventDefault();var t=/[-+*/=]/gi;switch(e.code.includes("Digit")&&this.addition(e.key),e.key.match(t)&&this.operations(e.key),e.code){case"Enter":this.operations("=");break;case"Backspace":this.operations("<");break;case"KeyC":this.operations("C");break}},addition:function(e){"."===e&&this.calculatorValue.calcValueFirst.includes(".")||(0==this.calculatorValue.calcValueFirst&&(this.calculatorValue.calcValueFirst=""),this.calculatorValue.calcValueFirst+=e)},operations:function(e){var t=this.calculatorValue.calcValueFirst,a=this.calculatorValue.calcValueSecond;if("="!==e&&"<"!==e&&(this.oper=e,0==a&&(this.calculatorValue.calcValueSecond="".concat(t," ").concat(this.oper),this.calculatorValue.calcValueFirst="0"),a.includes(this.oper)&&t))switch(this.oper){case"+":var c=parseFloat(a)+parseFloat(t);this.calculatorValue.calcValueSecond="".concat(c," ").concat(this.oper),this.calculatorValue.calcValueFirst="0";break;case"-":var n=parseFloat(a)-parseFloat(t);this.calculatorValue.calcValueSecond="".concat(n," ").concat(this.oper),this.calculatorValue.calcValueFirst="0";break;case"÷":var r=parseFloat(a)/parseFloat(t);this.calculatorValue.calcValueSecond="".concat(r," ").concat(this.oper),this.calculatorValue.calcValueFirst="0";break;case"×":var s=parseFloat(a)*parseFloat(t);this.calculatorValue.calcValueSecond="".concat(s," ").concat(this.oper),this.calculatorValue.calcValueFirst="0";break}if("C"===e&&(this.calculatorValue.calcValueFirst="0",this.calculatorValue.calcValueSecond=""),"<"===e&&(this.calculatorValue.calcValueFirst=t?t.slice(0,t.length-1):0,t||(this.calculatorValue.calcValueSecond=a.slice(0,a.length-1))),"="===e){switch(this.oper){case"+":var o=parseFloat(t)+parseFloat(a);this.calculatorValue.calcValueFirst="".concat(o),this.calculatorValue.calcValueSecond="";break;case"-":var i=parseFloat(a)-parseFloat(t);this.calculatorValue.calcValueFirst="".concat(i),this.calculatorValue.calcValueSecond="";break;case"÷":var l=parseFloat(a)/parseFloat(t);this.calculatorValue.calcValueFirst="".concat(l),this.calculatorValue.calcValueSecond="";break;case"×":var u=parseFloat(t)*parseFloat(a);this.calculatorValue.calcValueFirst="".concat(u),this.calculatorValue.calcValueSecond="";break}this.oper=!1}}},mounted:function(){window.addEventListener("keyup",this.keyboardKeys)},unmounted:function(){window.remooveEventListener("keyup",this.keyboardKeys)}};He.render=Me;var qe=He,Re={class:"scroll-progress"},Ke={class:"scroll-progress__outer"};function $e(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("div",Re,[Object(c["i"])("div",{class:Object(c["q"])(["scroll-progress__text",{"scroll-progress__text--hide":"100%"==r.text.top}]),style:Object(c["r"])(r.text)}," Demo zone ",6),Object(c["i"])("div",Ke,[Object(c["i"])("div",{class:"scroll-progress__inner",style:Object(c["r"])(r.progressSize)},null,4)])])}D["b"].registerPlugin(me["a"]);var Ye={data:function(){return{progressSize:{height:"0"},text:{top:"0"},scrollik:"10%",showing:!1}},methods:{progressBar:function(){var e=this,t=D["b"].timeline({scrollTrigger:{trigger:".wrapper-portfolio",onEnter:function(){return e.showing=!0},start:"top 20%",end:"bottom 80%",toggleActions:"play none none reverse",onUpdate:function(t){e.text.top="".concat(100*t.progress,"%"),e.progressSize.height="".concat(100*t.progress,"%")}}});t.set(".scroll-progress__outer",{x:"300%"}).set(".scroll-progress__text",{transformOrigin:"top left",rotate:45,opacity:0}).to(".scroll-progress__outer",{opacity:1}).to(".scroll-progress__outer",{x:0,duration:.5,ease:"bounce.out"}).to(".scroll-progress__text",{transformOrigin:"top left",rotate:0,duration:1.6,ease:"elastic.out(1, 0.3)",opacity:1}).set(".scroll-progress__text",{transition:.6})}},mounted:function(){window.addEventListener("scroll",this.progressBar())},unmounted:function(){window.remooveEventListener("scroll",this.progressBar())}};Ye.render=$e;var Je=Ye,Ue=a("eb98"),Xe=a.n(Ue),We=a("db5f"),Qe=a.n(We);Object(c["C"])("data-v-499d1839");var Ze={class:"sites"},et=["src"],tt=["href"],at=Object(c["i"])("button",{class:"sites__btn sites__btn-next"},[Object(c["i"])("img",{class:"sites__btn-img",src:Xe.a,alt:"Сдедующий слайд"})],-1),ct=Object(c["i"])("button",{class:"sites__btn sites__btn-prev"},[Object(c["i"])("img",{class:"sites__btn-img",src:Qe.a,alt:"Предыдущий слайд"})],-1);function nt(e,t,a,n,r,s){var o=Object(c["G"])("swiper-slide"),i=Object(c["G"])("swiper"),l=Object(c["G"])("Project-link");return Object(c["z"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("div",Ze,[Object(c["k"])(i,{class:"sites-container swiper-container",grabCursor:!0,navigation:{nextEl:".sites__btn-next",prevEl:".sites__btn-prev"},controller:{control:r.controlledSwiper}},{default:Object(c["N"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.slides,(function(e){return Object(c["z"])(),Object(c["f"])(o,{class:"sites__item swiper-slide",key:e.id},{default:Object(c["N"])((function(){return[Object(c["i"])("img",{class:"sites__item-img",src:e.img,alt:""},null,8,et),Object(c["i"])("a",{class:"sites__link",target:"_blank",rel:"noopener",href:e.link},"Открыть",8,tt)]})),_:2},1024)})),128))]})),_:1},8,["navigation","controller"]),at,ct]),Object(c["k"])(i,{onSwiper:s.setControlledSwiper,"allow-touch-move":!1},{default:Object(c["N"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.slides,(function(e){return Object(c["z"])(),Object(c["f"])(o,{class:"links-slide",key:e.id},{default:Object(c["N"])((function(){return[Object(c["k"])(l,{link:e.projecLinks.git},null,8,["link"]),Object(c["k"])(l,{link:e.projecLinks.figma},null,8,["link"])]})),_:2},1024)})),128))]})),_:1},8,["onSwiper"])],64)}Object(c["A"])();var rt=a("6d3b"),st=a("8343"),ot=a("734a"),it=a("90ea"),lt=a("a16a");a("5f67");rt["a"].use([st["a"],ot["a"]]);var ut={components:{Swiper:it["a"],SwiperSlide:lt["a"]},data:function(){return{slides:[{img:a("7194"),link:"https://n3p0m.github.io/productivity_for_portfolio/",projecLinks:{git:"https://n3p0m.github.io/",figma:"https://www.figma.com/file/cy10u3edK8RvVOqRLb3tVi/clean_and_simple_website_freebie_work_file-(Copy)?node-id=0%3A1&viewport=241%2C48%2C1"}},{img:a("41fb"),link:"https://n3p0m.github.io/productivity_for_portfolio/",projecLinks:{git:"https://n3p0m.github.io/",figma:"https://www.figma.com/file/cy10u3edK8RvVOqRLb3tVi/clean_and_simple_website_freebie_work_file-(Copy)?node-id=0%3A1&viewport=241%2C48%2C1"}}],controlledSwiper:null}},methods:{setControlledSwiper:function(e){this.controlledSwiper=e}}};a("1a0e");ut.render=nt,ut.__scopeId="data-v-499d1839";var bt=ut,dt={class:"to-do-list-body"},pt=Object(c["i"])("h3",{class:"ta-c"},"Список задач",-1),ft={class:"card-list"},ht=Object(c["i"])("span",{class:"card-list__divider"},"Активные",-1),jt={key:0,class:"task-status ta-c"},Ot={class:"task-list"},mt=Object(c["i"])("span",{class:"card-list__divider"},"Выполнено",-1),kt={key:0,class:"task-status ta-c"},vt={class:"task-list"};function gt(e,t,a,n,r,s){var o=Object(c["G"])("input-form"),i=Object(c["G"])("task-card");return Object(c["z"])(),Object(c["h"])("div",dt,[pt,Object(c["k"])(o,{onCreateTask:s.createTask},null,8,["onCreateTask"]),Object(c["i"])("div",ft,[ht,Object(c["k"])(c["b"],{onBeforeEnter:s.beforeEnterStatus,onEnter:s.enterStatus,onLeave:s.leaveStatus},{default:Object(c["N"])((function(){return[0==r.taskCards.length?(Object(c["z"])(),Object(c["h"])("span",jt," Активных задач нет ")):Object(c["g"])("",!0)]})),_:1},8,["onBeforeEnter","onEnter","onLeave"]),Object(c["i"])("ul",Ot,[Object(c["k"])(c["c"],{onBeforeEnter:s.beforeEnterTask,onEnter:s.enterTask,onLeave:s.leaveTask},{default:Object(c["N"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.taskCards,(function(e){return Object(c["z"])(),Object(c["h"])("li",{key:e.id},[Object(c["k"])(i,{taskCard:e,onAddDone:s.addDone,onRemove:s.removeTask},null,8,["taskCard","onAddDone","onRemove"])])})),128))]})),_:1},8,["onBeforeEnter","onEnter","onLeave"])]),mt,Object(c["k"])(c["b"],{onBeforeEnter:s.beforeEnterStatus,onEnter:s.enterStatus,onLeave:s.leaveStatus},{default:Object(c["N"])((function(){return[0==r.taskCardsDone.length?(Object(c["z"])(),Object(c["h"])("span",kt,"Выполненых задач нет")):Object(c["g"])("",!0)]})),_:1},8,["onBeforeEnter","onEnter","onLeave"]),Object(c["i"])("ul",vt,[Object(c["k"])(c["c"],{onBeforeEnter:s.beforeEnterTask,onEnter:s.enterTask,onLeave:s.leaveTask},{default:Object(c["N"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.taskCardsDone,(function(e){return Object(c["z"])(),Object(c["h"])("li",{key:e.id},[Object(c["k"])(i,{taskCard:e,onAddDone:s.addDone,onRemove:s.removeTask,class:Object(c["q"])({"task-card--done":!e.status})},null,8,["taskCard","onAddDone","onRemove","class"])])})),128))]})),_:1},8,["onBeforeEnter","onEnter","onLeave"])])])])}a("4de4");var _t=["taskInput"],yt={class:"container-name"},wt=["placeholder"],xt={class:"form__container"},Ct={class:"container-text"},Vt=["placeholder"];function St(e,t,a,n,r,s){var o=Object(c["G"])("add-task-btn");return Object(c["z"])(),Object(c["h"])("form",{class:"container",action:"",onSubmit:t[2]||(t[2]=Object(c["P"])((function(){}),["prevent"])),taskInput:r.taskInput},[Object(c["i"])("div",yt,[Object(c["O"])(Object(c["i"])("input",{class:Object(c["q"])(["form__name",{textDanger:r.isActive}]),type:"text",placeholder:r.nameHolder,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.taskInput.name=e})},null,10,wt),[[c["K"],r.taskInput.name]])]),Object(c["i"])("div",xt,[Object(c["i"])("div",Ct,[Object(c["O"])(Object(c["i"])("input",{class:Object(c["q"])(["form__task",{textDanger:r.isActive}]),type:"text",placeholder:r.textHolder,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.taskInput.text=e})},null,10,Vt),[[c["K"],r.taskInput.text]])]),Object(c["k"])(o,{onValidate:s.validate},null,8,["onValidate"])])],40,_t)}var Et=a("f58d"),zt=a.n(Et),Ft=Object(c["i"])("img",{class:"form__btn-img",src:zt.a,alt:"Кнопка добавить задачу"},null,-1),Lt=[Ft];function Tt(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("button",{class:"form__btn",onClick:t[0]||(t[0]=function(t){return e.$emit("validate")})},Lt)}var Dt={name:"addTaskBtn"};Dt.render=Tt;var It=Dt,At={name:"InputForm",components:{addTaskBtn:It},data:function(){return{taskInput:{name:"",text:""},nameHolder:"Название...",textHolder:"Задача...",isActive:!1}},methods:{validate:function(){if(""==this.taskInput.name||""==this.taskInput.text)this.nameHolder="Введите название!",this.textHolder="Введите задачу!",this.isActive=!0,""==this.taskInput.name&&D["b"].fromTo(".container-name",.1,{x:-3},{x:3,clearProps:"x",repeat:3}),""==this.taskInput.text&&D["b"].fromTo(".container-text",.1,{x:-3},{x:3,clearProps:"x",repeat:3});else{var e={id:Date.now(),name:this.taskInput.name,text:this.taskInput.text,status:!0};this.$emit("createTask",e),this.taskInput.name="",this.taskInput.text="",this.nameHolder="Название...",this.textHolder="Задача...",this.isActive=!1}}}};At.render=St;var Pt=At,Bt={class:"task-card"},Nt={class:"task-card__name"},Gt={class:"task-card__container"},Mt={class:"task-card__text"},Ht={class:"task-card__checkbox"},qt={class:"label"},Rt=["checked"],Kt=Object(c["i"])("span",{class:"checkbox__custom"},null,-1);function $t(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("div",Bt,[Object(c["i"])("span",Nt,Object(c["I"])(a.taskCard.name),1),Object(c["i"])("button",{class:"task-card__btn-cls",onClick:t[1]||(t[1]=function(t){return e.removeTask(a.taskCard)})},[Object(c["i"])("img",{class:"task-card__btn-cls-img",src:zt.a,alt:"Кнопка удалить задачу",onClick:t[0]||(t[0]=function(t){return e.$emit("remove",a.taskCard)})})]),Object(c["i"])("div",Gt,[Object(c["i"])("p",Mt,Object(c["I"])(a.taskCard.text),1),Object(c["i"])("div",Ht,[Object(c["i"])("label",qt,[Object(c["i"])("input",{class:"checkbox visually-hidden",type:"checkbox",onChange:t[2]||(t[2]=function(t){return e.$emit("addDone",a.taskCard)}),checked:!a.taskCard.status,alt:"Задача выполнена","aria-label":"Задача выполнена"},null,40,Rt),Kt])])])])}var Yt={name:"TaskCard",props:{taskCard:{type:Object}},data:function(){return{}}};Yt.render=$t;var Jt=Yt,Ut={name:"Todolist",components:{InputForm:Pt,TaskCard:Jt},data:function(){return{taskCards:[{id:Date.now(),name:"Мурзик",text:"Накормить кота",status:!0}],taskCardsDone:[]}},methods:{createTask:function(e){this.taskCards.push(e)},removeTask:function(e){this.taskCards=this.taskCards.filter((function(t){return t.id!==e.id})),this.taskCardsDone=this.taskCardsDone.filter((function(t){return t.id!==e.id}))},addDone:function(e){1==e.status?(e.status=!1,this.taskCardsDone.push(e),this.taskCards=this.taskCards.filter((function(t){return t.id!==e.id}))):(e.status=!0,this.taskCards.push(e),this.taskCardsDone=this.taskCardsDone.filter((function(t){return t.id!==e.id})))},beforeEnterTask:function(e){e.style.opacity=0,e.style.height=0,e.style.transform="translateX(100%) scale(0.9)"},enterTask:function(e,t){var a=D["a"].timeline();a.to(e,{height:"auto",duration:.2,ease:"none"}).to(e,{opacity:1,x:0,duration:.2,ease:"circ"}).to(e,{scale:1,duration:.2,ease:"bounce"}).to(e,{onComplete:t})},leaveTask:function(e,t){var a=D["a"].timeline();a.to(e,{scale:.9,duration:.2,ease:"bounce.out"}).to(e,{opacity:0,x:"-100%",duration:.2,ease:"circ"}).to(e,{border:0,height:0,duration:.2,ease:"circ"}).to(e,{onComplete:t})},beforeEnterStatus:function(e){e.style.opacity=0,e.style.height=0,e.style.marginTop=0},enterStatus:function(e,t){var a=D["a"].timeline();a.to(e,{opacity:1,height:"1em",marginTop:40,duration:.2,ease:"circ"}).to(e,{onComplete:t})},leaveStatus:function(e,t){var a=D["a"].timeline();a.to(e,{opacity:0,duration:.2,marginTop:0,height:0,ease:"circ"}).to(e,{onComplete:t})}}};Ut.render=gt;var Xt=Ut,Wt={components:{Calculator:qe,Todolist:Xt,SitesSwiper:bt,ScrollProgress:Je},data:function(){return{keys:[{text:'<kbd class="key">Backspace ⟵</kbd> - удалить'},{text:'<kbd class="key">Enter ↵</kbd> - равно'},{text:'<kbd class="key">С</kbd> - очистить'}]}}};Wt.render=Te;var Qt=Wt,Zt={class:"wrapper-outer wrapper-contacts"},ea={class:"wrapper-inner"},ta=Object(c["i"])("h2",{class:"ta-c"},"Контакты",-1),aa=Object(c["i"])("p",{class:"contact-text ta-c"},[Object(c["j"])(" Хотите связаться со мной ? "),Object(c["i"])("br"),Object(c["j"])(" Ищите меня здесь ")],-1),ca={class:"socials"},na=["href"],ra=["src","alt"],sa=Object(c["i"])("a",{class:"mail",href:"mailto:neeepom@gmail.com"},"neeepom@gmail.com",-1);function oa(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("footer",Zt,[Object(c["i"])("div",ea,[ta,aa,Object(c["i"])("div",ca,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.socials,(function(e){return Object(c["z"])(),Object(c["h"])("a",{class:"socials__item",key:e.id,href:e.link,target:"_blank",rel:"noopener"},[Object(c["i"])("img",{src:e.icon,alt:e.alt,class:"socials__item-img"},null,8,ra)],8,na)})),128))]),sa])])}var ia={name:"Footer",data:function(){return{socials:[{link:"https://t.me/N3P0m",icon:a("58b9"),alt:"Telegram"},{link:"https://www.instagram.com/neeepom/",icon:a("c659"),alt:"Instagram"},{link:"https://vk.com/dima_tomin",icon:a("6264"),alt:"VK"}]}}};ia.render=oa;var la=ia,ua={name:"Home",components:{Header:C,HomeSection:M,About:U,Skills:_e,Portfolio:Qt,Footer:la},data:function(){return{show:!1,linkActiveClass:"home",keyValue:""}},methods:{showing:function(){this.show=!0},scroll:function(e){window.scrollTo({top:document.getElementById(e).offsetTop-80,behavior:"smooth"})},beforeEnterHeader:function(e){e.style.transform="translateY(-100%)"},enterHeader:function(e,t){D["a"].to(e,{y:0,duration:1,delay:.6,ease:"bounce.out",onComplete:t})}},mounted:function(){var e=this;window.addEventListener("load",this.showing);var t=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e.linkActiveClass=t.target.id)}))}),{rootMargin:"0px 0px -19% 0px",threshold:.5});document.querySelectorAll(".section").forEach((function(e){t.observe(e)}))},unmounted:function(){window.removeEventListener("load",this.showing)}};ua.render=u;var ba=ua,da=[{path:"/",name:"Home",component:ba}],pa=Object(o["a"])({history:Object(o["b"])("/portfolio/"),routes:da}),fa=pa,ha=a("5502"),ja=Object(ha["a"])({state:{},mutations:{},actions:{},modules:{}}),Oa=(a("8594"),["href"]),ma=["src"];function ka(e,t,a,n,r,s){return Object(c["z"])(),Object(c["h"])("a",{class:"project-link",href:a.link,target:"_blank"},[Object(c["i"])("img",{src:s.choiseImgLink,alt:"Ссылка на проект"},null,8,ma)],8,Oa)}var va={name:"ProjectLink",props:{link:{type:String,required:!0}},computed:{choiseImgLink:function(){var e="";return this.link.includes("git")&&(e=a("0b15")),this.link.includes("figma")&&(e=a("d7b1")),e}}};va.render=ka;var ga=va,_a=[ga],ya=Object(c["e"])(s);_a.forEach((function(e){ya.component(e.name,e)})),ya.use(ja).use(fa).mount("#app")},"58b9":function(e,t,a){e.exports=a.p+"img/telegram.a879e582.svg"},6264:function(e,t,a){e.exports=a.p+"img/vk.a7597edc.svg"},6832:function(e,t,a){e.exports=a.p+"img/figma.487d345a.svg"},7194:function(e,t,a){e.exports=a.p+"img/image-1.dd29b6f4.webp"},7305:function(e,t,a){e.exports=a.p+"img/css.6c6fdbe9.svg"},7801:function(e,t,a){e.exports=a.p+"img/sass.93cf92a3.svg"},8594:function(e,t,a){},ae25:function(e,t,a){e.exports=a.p+"img/star.373a30e6.svg"},bdfa:function(e,t,a){e.exports=a.p+"img/vue.c1733376.svg"},c659:function(e,t,a){e.exports=a.p+"img/instagram.f6bfe8eb.svg"},d7b1:function(e,t,a){e.exports=a.p+"img/figma-link.d8b23082.svg"},db5f:function(e,t,a){e.exports=a.p+"img/btn-prev.41a2f14f.svg"},e103:function(e,t,a){},eb98:function(e,t,a){e.exports=a.p+"img/btn-next.623d431f.svg"},ed7c:function(e,t,a){e.exports=a.p+"img/html5.c27de52a.svg"},f58d:function(e,t,a){e.exports=a.p+"img/close-card.e8ab2ff8.svg"},fe04:function(e,t,a){e.exports=a.p+"img/port_avatar.124cb91d.webp"}});
//# sourceMappingURL=app.be50e512.js.map