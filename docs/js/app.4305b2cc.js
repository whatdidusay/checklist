(function(t){function e(e){for(var n,o,l=e[0],a=e[1],s=e[2],p=0,b=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(b.length)b.shift()();return i.push.apply(i,s||[]),c()}function c(){for(var t,e=0;e<i.length;e++){for(var c=i[e],n=!0,l=1;l<c.length;l++){var a=c[l];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/checklist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=a;i.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"286d":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),r=c("5c40"),i={id:"app"};function o(t,e){var c=Object(r["t"])("router-view");return Object(r["q"])(),Object(r["e"])("div",i,[Object(r["h"])(c)])}c("9cdc");const l={};l.render=o;var a=l,s=c("8c4f"),u=(c("a4d3"),c("e01a"),c("9ff4")),p=c("a7e3"),b=c.n(p),d={class:"home"},h=Object(r["h"])("h1",null,"새차삿당! 신차검수하자 :D",-1),f={class:"list-wrap"},m=Object(r["h"])("span",{class:"check-btn"},null,-1),O={class:"item-wrap"},j={class:"title"},g={class:"part"},v={class:"des"},y={class:"status"},k=Object(r["h"])("img",{src:b.a,alt:"폭죽 배경",class:"modal-bg"},null,-1),w=Object(r["h"])("div",{class:"modal"},[Object(r["h"])("p",null,"조심조심 살살타여!")],-1);function x(t,e){return Object(r["q"])(),Object(r["e"])("div",d,[h,Object(r["h"])("ul",f,[(Object(r["q"])(!0),Object(r["e"])(r["b"],null,Object(r["s"])(t.list,(function(c,i){return Object(r["q"])(),Object(r["e"])("li",{key:i,onChange:e[2]||(e[2]=function(e){return t.open()})},[Object(r["h"])("label",null,[Object(r["A"])(Object(r["h"])("input",{type:"checkbox",value:i,ref:"check","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.checkNumb=e})},null,8,["value"]),[[n["b"],t.checkNumb]]),m,Object(r["h"])("div",O,[Object(r["h"])("p",j,Object(u["F"])(i+1)+". "+Object(u["F"])(c.title),1),Object(r["h"])("img",{src:c.img+".png",alt:"위치별 이미지"},null,8,["src"]),Object(r["h"])("p",g,Object(u["F"])(c.part),1),Object(r["h"])("p",v,Object(u["F"])(c.description),1)])])],32)})),128))]),Object(r["h"])("div",y,[Object(r["h"])("b",null,Object(u["F"])(t.checkNumb.length)+" ",1),Object(r["h"])("span",null,"/ "+Object(u["F"])(t.list.length),1)]),Object(r["A"])(Object(r["h"])("div",{class:"dim",onClick:e[3]||(e[3]=function(e){return t.close()})},[k,w],512),[[n["c"],t.modal]])])}var P={name:"Home",data:function(){return{checkNumb:[],modal:!1,list:[{title:"외관 품질",img:"exterior",part:"조립상태, 단차, 스크래치, 도색불량",description:"도장면, 창문 유리면에 스크래치가 있는지 탁송중 돌맹이에 맞지 않았는지 확인!!"},{title:"타이어",img:"wheel",part:"제조일, 휠 밸런스 확인 스티커, 휠 스크래치",description:"제조기간이 6개월 이내인지 확인하고 주황색 스티커 유무 꼭 확인! 차량 출고시 신차에는 무조건 스티커가 붙어있음 휠의 크기가 동일한지 확인!"},{title:"내부 품질",img:"sheet",part:"시트마감, 고무패킹, 도어 개폐 상태",description:"개폐시 이상 소음은 없는지 손잡이와 잠금장치는 멀쩡한지 선루프가 있다면 선루프 작동확인, 창문 열고 닫고 해보기, 고무패킹과 잘 안맞으면 비가 새니까 꼭 확인!"},{title:"센터페시아, 콘솔 품질",img:"interior",part:"조립상태, 편의장치",description:"운전석에 앉아서 콘솔, 센터페시아등 버튼들을 눌러보아요 버튼 상태는 괜찮은지 에어컨, 히터 제대로 작동 확인 공조기 바람방향, 냄새, 오디오 음질 확인! 주행거리 6~8km내외인데 이보다 많으면 인수거부차량이거나 출고과정중 사고차량은 아닌지 의심해보자!"},{title:"스티어링 휠",img:"steering-wheel",part:"스티어링 휠 방향",description:"타이어를 정방향을 맞추고 스티어링휠이 중앙에 맞는지 확인! 임시운행이 가능하다면 스티어링 휠이 중앙에 맞춰 직진하는지 확인!"},{title:"엔진룸 상태",img:"engine",part:"엔진오일, 미션오일, 브레이크오일, 냉각수, 클램프 호스",description:"엔진룸이 청결한지 클램프가 연결이 제대로 되어있는지 냉각수 누수는 없는지 확인!"},{title:"엔진 상태",img:"cluster",part:"엔진, 시동",description:"3~5회 시동을 껏다 켰다 체크, 모든 기기를 끄고 시동을 켠후 예열되는 시간동안 떨림이나 소음은 없는지 확인!"},{title:"조명장치 내부 품질",img:"roomlamp",part:"내부 조명 확인",description:"각종 버튼의 조명, 브레이크등, 상하향등, 좌우 비상등 확인!"},{title:"조명장치 외부 품질",img:"led",part:"외부 조명 확인",description:"조사각은 맞는지 방향지시등, 안개등, 테일램프등 확인!"},{title:"차량 지급품",img:"gift",part:"스페어타이어 ,타이어 수리키트, 소화기, 삼각대 등",description:"트렁크를 열어서 차량 기본 지급품목, 공구들 확인!"},{title:"인수 서류 확인",img:"paper",part:"임시운행허가증, 세금계산서, 차량인수증, 차량등록증, 차대번호",description:"차량등록증의 차대번호와 실제 차량의 차대번호가 일치하는지 반드시 확인!"},{title:"피자 주문 확인",img:"pizza",part:"페퍼로니, 치즈피자, 코카콜라",description:"피자가 조수석에 있는지 반드시 확인!"}]}},methods:{open:function(){this.checkNumb.length==this.list.length&&(this.modal=!0,document.querySelector("body").classList.add("noscroll"))},close:function(){this.modal=!1,this.checkNumb=[],window.scrollTo({behavior:"smooth",top:0,left:0}),document.querySelector("body").classList.remove("noscroll")}}};c("e69a");P.render=x;var S=P,q=[{path:"/",name:"Home",component:S}],F=Object(s["a"])({history:Object(s["b"])("/checklist/"),routes:q}),N=F,_=c("5502"),M=Object(_["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["a"])(a).use(M).use(N).mount("#app")},"9cdc":function(t,e,c){"use strict";c("c701")},a7e3:function(t,e,c){t.exports=c.p+"img/party.21c33e98.png"},c701:function(t,e,c){},e69a:function(t,e,c){"use strict";c("286d")}});
//# sourceMappingURL=app.4305b2cc.js.map