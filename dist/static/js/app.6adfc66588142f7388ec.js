webpackJsonp([1],{"1Caj":function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("7+uW"),s=t("zL8q"),r=t.n(s),i=(t("tvR6"),{data:function(){return{options_org:[{value:997,index:1,label:"Jita IV - Moon 4 - Caldari Navy Assembly Plant"},{value:991,index:2,label:"RF-X7V - forum.winterco.org"},{value:983,index:3,label:"N5Y-4N - xingcheng"},{value:977,index:4,label:"0R-F2F - New Journey"},{value:971,index:5,label:"H-EY0P - ZOO"},{value:967,index:6,label:"Otsasai VIII - Moon 3 - Caldari Navy Assembly Plant"},{value:953,index:7,label:"BKG-Q2 - Trit Star"},{value:947,index:8,label:"Egbinger XI - Moon 3 - CBD Corporation Storage"},{value:941,index:9,label:"Podion VIII - Moon 15 - Nefantar Miner Association Mining Outpost"},{value:937,index:10,label:"Daras III - Ishukone Watch Assembly Plant"},{value:929,index:11,label:"OSY-UD IX - Moon 16 - Serpentis Corporation Chemical Storage"}],options_dst:[{value:997,index:1001,label:"Jita IV - Moon 4 - Caldari Navy Assembly Plant"},{value:991,index:1002,label:"RF-X7V - forum.winterco.org"},{value:983,index:1003,label:"N5Y-4N - xingcheng"},{value:977,index:1004,label:"0R-F2F - New Journey"},{value:971,index:1005,label:"H-EY0P - ZOO"},{value:967,index:1006,label:"Otsasai VIII - Moon 3 - Caldari Navy Assembly Plant"},{value:953,index:1007,label:"BKG-Q2 - Trit Star"},{value:947,index:1008,label:"Egbinger XI - Moon 3 - CBD Corporation Storage"},{value:941,index:1009,label:"Podion VIII - Moon 15 - Nefantar Miner Association Mining Outpost"},{value:937,index:1010,label:"Daras III - Ishukone Watch Assembly Plant"},{value:929,index:1011,label:"OSY-UD IX - Moon 16 - Serpentis Corporation Chemical Storage"}],contractTypes:[{value:"normal",label:"标准快递合同（不保证时间）"},{value:"accelerated",label:"加急快递合同（接单24小时内完成）"}],shipFrom:"",shipTo:"",collateral:"",m3:"",contractType:"",reward:"--",selected_org:"",selected_dst:""}},methods:{formatM3:function(e){e=e.replace(/[^\d^\.]+/g,""),this.m3=(e+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,"),this.rewardCalculator()},formatCollateral:function(e){e=e.replace(/[^\d^\.]+/g,""),this.collateral=(e+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,"),this.rewardCalculator()},orgChanged:function(e){for(var a=0;a<this.options_dst.length;a++)this.options_dst[a].value==e?this.options_dst[a].disabled=!0:this.options_dst[a].disabled=!1;this.shipTo==e&&(this.shipTo="");for(a=0;a<this.options_org.length;a++)if(this.options_org[a].value==e){this.selected_org=this.options_org[a];break}this.rewardCalculator()},dstChanged:function(e){for(var a=0;a<this.options_org.length;a++)this.options_org[a].value==e?this.options_org[a].disabled=!0:this.options_org[a].disabled=!1;this.shipFrom==e&&(this.shipFrom="");for(a=0;a<this.options_dst.length;a++)if(this.options_dst[a].value==e){this.selected_dst=this.options_dst[a];break}this.rewardCalculator()},rewardCalculator:function(){if(""!=this.shipFrom&&""!=this.shipTo&&""!=this.m3&&""!=this.collateral&&""!=this.contractType){var e=0,a=0,t=15e4,l=this.collateral.replace(/,/g,""),s=this.shipFrom*this.selected_org.index-(this.shipTo-this.selected_dst.index);if(console.log(s),(t=this.m3.replace(/,/g,""))>35e4)return void(this.reward="--");switch("accelerated"==this.contractType&&(t=t<=15e4?15e4:t<=25e4?25e4:35e4),s){case 1008:e=1400*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 1986:e=800*t+.02*l,this.reward=e;break;case 7587:e=1200*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 8480:e=1400*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 9381:e=1900*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 9390:e=500*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 9424:e=1e3*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 1024:e=700*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 3912:e=500*t+.02*l,this.reward=e;break;case 1031:e=600*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 4859:e=500*t+.02*l,this.reward=e;break;case 4882:case 3942:e=200*t,this.reward=e;break;case 1017:e=1e3*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 2953:e=600*t+.02*l,this.reward=e;break;case 1051:e=1400*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 6675:e=800*t+.02*l,this.reward=e;break;case 6691:case 3003:e=600*t,this.reward=e;break;case 1036:e=400*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 5806:e=400*t+.02*l,this.reward=e;break;case 1079:e=1300*t,a=.02*l,this.reward=e<.01*l?a:e;break;case 10223:e=800*t+.02*l,this.reward=e;break;default:this.reward="--"}"--"!=this.reward&&this.reward<5e6&&(this.reward=5e6),this.reward=(this.reward+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")}else this.reward="--"}}}),o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("el-header",[e._v("顺丰快递费用计算器")]),e._v(" "),t("el-main",[t("el-row",[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[e._v("出发地(Ship from)：\n        ")])]),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.orgChanged},model:{value:e.shipFrom,callback:function(a){e.shipFrom=a},expression:"shipFrom"}},e._l(e.options_org,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)],1)])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[e._v("到达地(Ship to)：\n        ")])]),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.dstChanged},model:{value:e.shipTo,callback:function(a){e.shipTo=a},expression:"shipTo"}},e._l(e.options_dst,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)],1)])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[e._v("物品体积(Volume)：\n    ")])]),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[t("el-input",{attrs:{placeholder:"请输入物品体积",maxlength:"10","show-word-limit":""},on:{input:e.formatM3},model:{value:e.m3,callback:function(a){e.m3=a},expression:"m3"}})],1)])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[e._v("保证金(Collateral)：\n    ")])]),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[t("el-input",{attrs:{placeholder:"请输入保证金",maxlength:"18","show-word-limit":""},on:{input:e.formatCollateral},model:{value:e.collateral,callback:function(a){e.collateral=a},expression:"collateral"}})],1)])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[e._v("合同类型(Type)：\n    ")])]),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[t("el-select",{attrs:{placeholder:"请选择合同类型"},on:{change:e.rewardCalculator},model:{value:e.contractType,callback:function(a){e.contractType=a},expression:"contractType"}},e._l(e.contractTypes,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[e._v("支付运费(Reward)：\n    ")])]),e._v(" "),t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{float:"left","font-weight":"bold",color:"red"}},[e._v("\n      "+e._s(e.reward)+"\n    ")])])],1)],1)],1)},staticRenderFns:[]};var n=t("VU/8")(i,o,!1,function(e){t("1Caj")},null,null).exports,c=t("Vi3T"),d=t.n(c);l.default.use(r.a,{locale:d.a}),l.default.config.productionTip=!1,new l.default({el:"#app",components:{App:n},template:"<App/>"})},tvR6:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.6adfc66588142f7388ec.js.map