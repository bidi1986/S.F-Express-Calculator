webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("zL8q"),l=a.n(i),r=(a("tvR6"),{data:function(){return{options_org:[{value:997,index:1,label:"Jita IV - Moon 4 - Caldari Navy Assembly Plant"},{value:991,index:2,label:"RF-X7V - forum.winterco.org"},{value:983,index:3,label:"N5Y-4N - xingcheng"},{value:977,index:4,label:"0R-F2F - New Journey"},{value:971,index:5,label:"H-EY0P - Adults Education Hub"},{value:967,index:6,label:"Otsasai VIII - Moon 3 - Caldari Navy Assembly Plant"},{value:953,index:7,label:"BKG-Q2 - Trit Star"},{value:947,index:8,label:"Egbinger XI - Moon 3 - CBD Corporation Storage",disabled:!0},{value:941,index:9,label:"Podion VIII - Moon 15 - Nefantar Miner Association Mining Outpost",disabled:!0},{value:937,index:10,label:"Daras III - Ishukone Watch Assembly Plant"},{value:929,index:11,label:"OSY-UD IX - Moon 16 - Serpentis Corporation Chemical Storage"},{value:919,index:12,label:"FAT-6P - SirMolle Sends His Regards"},{value:911,index:13,label:"Hophib VI - Moon 3 - Ministry of War Archives"}],options_dst:[{value:997,index:1001,label:"Jita IV - Moon 4 - Caldari Navy Assembly Plant"},{value:991,index:1002,label:"RF-X7V - forum.winterco.org"},{value:983,index:1003,label:"N5Y-4N - xingcheng"},{value:977,index:1004,label:"0R-F2F - New Journey"},{value:971,index:1005,label:"H-EY0P - Adults Education Hub"},{value:967,index:1006,label:"Otsasai VIII - Moon 3 - Caldari Navy Assembly Plant"},{value:953,index:1007,label:"BKG-Q2 - Trit Star"},{value:947,index:1008,label:"Egbinger XI - Moon 3 - CBD Corporation Storage",disabled:!0},{value:941,index:1009,label:"Podion VIII - Moon 15 - Nefantar Miner Association Mining Outpost",disabled:!0},{value:937,index:1010,label:"Daras III - Ishukone Watch Assembly Plant"},{value:929,index:1011,label:"OSY-UD IX - Moon 16 - Serpentis Corporation Chemical Storage"},{value:919,index:1012,label:"FAT-6P - SirMolle Sends His Regards"},{value:911,index:1003,label:"Hophib VI - Moon 3 - Ministry of War Archives"}],contractTypes:[{value:"normal",label:"标准快递合同（不保证时间）"},{value:"accelerated",label:"加急快递合同（接单24小时内完成）"}],shipFrom:"",shipTo:"",collateral:"",m3:"",contractType:"",reward:"--",selected_org:"",selected_dst:"",completeDays:"",description:"",m3_error_flag:!1,collateral_info_flag:!1,no_routing_warning_flag:!1,fare_low_info_flag:!1,charges:"--",charges_uprice:"0",extend_fee:0,contract_type_cn:""}},methods:{formatM3:function(t){t=t.replace(/[^\d^\.]+/g,""),this.m3=(t+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,"),this.rewardCalculator()},formatCollateral:function(t){t=t.replace(/[^\d^\.]+/g,""),this.collateral=(t+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,"),this.rewardCalculator()},orgChanged:function(t){for(var e=0;e<this.options_dst.length;e++)this.options_dst[e].value==t?this.options_dst[e].disabled=!0:947==this.options_dst[e].value||941==this.options_dst[e].value?this.options_dst[e].disabled=!0:this.options_dst[e].disabled=!1;this.shipTo==t&&(this.shipTo="");for(e=0;e<this.options_org.length;e++)if(this.options_org[e].value==t){this.selected_org=this.options_org[e];break}this.rewardCalculator()},dstChanged:function(t){for(var e=0;e<this.options_org.length;e++)this.options_org[e].value==t?this.options_org[e].disabled=!0:947==this.options_org[e].value||941==this.options_org[e].value?this.options_org[e].disabled=!0:this.options_org[e].disabled=!1;this.shipFrom==t&&(this.shipFrom="");for(e=0;e<this.options_dst.length;e++)if(this.options_dst[e].value==t){this.selected_dst=this.options_dst[e];break}this.rewardCalculator()},rewardCalculator:function(){if(""!=this.shipFrom&&""!=this.shipTo&&""!=this.m3&&""!=this.collateral&&""!=this.contractType){var t=0,e=0,a=15e4,s=this.collateral.replace(/,/g,""),i=this.shipFrom*this.selected_org.index-(this.shipTo-this.selected_dst.index);if(console.log(i),(a=this.m3.replace(/,/g,""))>34e4)return this.reward="--",this.charges="--",void(this.m3_error_flag||(this.m3_error_flag=!0,this.$notify.error({title:"错误",message:"物品体积最大34万立方米",type:"warning",onClose:this.m3_notify_closed})));switch("accelerated"==this.contractType?(a=a<=15e4?15e4:a<=25e4?25e4:34e4,this.completeDays="1 Day",this.description="加急(accelerated)",this.contract_type_cn="加急",this.charges="合同（"+(a.toFixed()+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")+" m3档位），运费标准："):(this.completeDays="7 Days",this.description="选填",this.contract_type_cn="标准",this.charges="合同，运费标准："),this.extend_fee=0,s>5e9&&997==this.shipFrom&&(this.extend_fee=.02*(s-5e9),this.charges="合同（高保证金），运费标准：体积运费 + 保证金超过5B部分的2%；体积运费标准："),i){case 1008:t=1400*a,this.charges_uprice="1400 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 1986:t=800*a+.02*s,this.reward=t,this.charges_uprice="800 ISK/m³ + 保证金2%";break;case 7587:t=1200*a,this.charges_uprice="1200 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 8480:t=1400*a,this.charges_uprice="1400 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 9381:t=1900*a,this.charges_uprice="1900 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 9390:t=500*a,this.charges_uprice="500 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 9424:t=1e3*a,this.charges_uprice="1000 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 1024:t=700*a,this.charges_uprice="700 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 3912:t=500*a+.02*s,this.charges_uprice="500 ISK/m³ + 保证金2%",this.reward=t;break;case 1031:t=600*a,this.charges_uprice="600 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 4859:t=500*a+.02*s,this.charges_uprice="500 ISK/m³ + 保证金2%",this.reward=t;break;case 4882:case 3942:t=200*a,this.charges_uprice="200 ISK/m³",this.reward=t;break;case 1017:t=1e3*a,this.charges_uprice="1000 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 2953:t=600*a+.02*s,this.charges_uprice="600 ISK/m³ + 保证金2%",this.reward=t;break;case 1051:t=1400*a,this.charges_uprice="1400 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 6675:t=800*a+.02*s,this.charges_uprice="800 ISK/m³ + 保证金2%",this.reward=t;break;case 6691:case 3003:t=600*a,this.charges_uprice="600 ISK/m³",this.reward=t;break;case 1036:t=400*a,this.charges_uprice="400 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 5806:t=400*a+.02*s,this.charges_uprice="400 ISK/m³ + 保证金2%",this.reward=t;break;case 1079:t=1300*a,this.charges_uprice="1300 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 10223:t=800*a+.02*s,this.charges_uprice="800 ISK/m³ + 保证金2%",this.reward=t;break;case 1090:t=1200*a,this.charges_uprice="1200 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 11032:t=800*a+.02*s,this.charges_uprice="800 ISK/m³ + 保证金2%",this.reward=t;break;case 2075:case 11039:t=2100*a,this.charges_uprice="2100 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 1089:t=1100*a,this.charges_uprice="1100 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;case 11847:t=800*a+.02*s,this.charges_uprice="800 ISK/m³ + 保证金2%",this.reward=t;break;case 2074:case 11854:t=2e3*a,this.charges_uprice="2000 ISK/m³",e=.02*s,t<.01*s?(this.reward=e,this.showCollateredInfoNotify(e)):this.reward=t;break;default:return this.reward="--",this.charges="--",void(this.no_routing_warning_flag||(this.no_routing_warning_flag=!0,this.$notify({title:"此航线无报价",message:"当前航线无顺丰报价！",type:"warning",onClose:this.no_routing_warning_closed})))}"--"!=this.reward&&this.reward<5e6&&(this.reward=5e6,this.charges="合同，运费不足500万时按500万计费，运费标准：",this.fare_low_info_flag||(this.fare_low_info_flag=!0,this.$notify.info({title:"最低运费限制",message:"体积运费不足500万时按500万计费！",onClose:this.fare_low_info_closed}))),this.reward=this.reward+this.extend_fee,this.reward=(this.reward.toFixed()+"").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,"),this.charges=this.contract_type_cn+this.charges+this.charges_uprice}else this.reward="--",this.charges="--"},m3_notify_closed:function(){this.m3_error_flag=!1},collateral_info_closed:function(){this.collateral_info_flag=!1},no_routing_warning_closed:function(){this.no_routing_warning_flag=!1},fare_low_info_closed:function(){this.fare_low_info_flag=!1},showCollateredInfoNotify:function(t){!this.collateral_info_flag&&t>5e6&&(this.collateral_info_flag=!0,this.$notify.info({title:"高保证金低体积运费",message:"体积运费不足保证金1%，运费按保证金2%计费！",onClose:this.collateral_info_closed})),this.charges="合同（低体积高保证金——体积运费不足保证金1%），运费标准：",this.charges_uprice="保证金的2%",this.extend_fee=0}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-header",[t._v("顺丰快递费用计算器")]),t._v(" "),a("el-main",[a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("出发地(Ship from)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.orgChanged},model:{value:t.shipFrom,callback:function(e){t.shipFrom=e},expression:"shipFrom"}},t._l(t.options_org,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}),1)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("到达地(Ship to)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.dstChanged},model:{value:t.shipTo,callback:function(e){t.shipTo=e},expression:"shipTo"}},t._l(t.options_dst,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}),1)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("物品体积(Volume)：\n    ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{placeholder:"请输入物品体积",maxlength:"10","show-word-limit":""},on:{input:t.formatM3},model:{value:t.m3,callback:function(e){t.m3=e},expression:"m3"}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("保证金(Collateral)：\n    ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{placeholder:"请输入保证金",maxlength:"18","show-word-limit":""},on:{input:t.formatCollateral},model:{value:t.collateral,callback:function(e){t.collateral=e},expression:"collateral"}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("合同类型(Type)：\n    ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-select",{attrs:{placeholder:"请选择合同类型"},on:{change:t.rewardCalculator},model:{value:t.contractType,callback:function(e){t.contractType=e},expression:"contractType"}},t._l(t.contractTypes,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("支付运费(Reward)：\n    ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left","font-weight":"bold",color:"red"}},[t._v("\n      "+t._s(t.reward)+"\n    ")])]),t._v(" "),a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("收费标准(Charges)：\n    ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left","font-weight":"bold",color:"red"}},[t._v("\n      "+t._s(t.charges)+"\n    ")])]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"contract_font"},[t._v("合同样本\n        ")]),t._v(" "),a("div",{staticClass:"grid-content",staticStyle:{"font-weight":"bold"}},[t._v("（温馨提示：复制下面样本可无输入完成快递合同的创建）\n        ")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("合同类型(Contract Type)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{value:"Courier",readonly:!0}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("公司名称(Private name)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{value:"S.F Express",readonly:!0}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("到达地(Ship to)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{readonly:!0},model:{value:t.selected_dst.label,callback:function(e){t.$set(t.selected_dst,"label",e)},expression:"selected_dst.label"}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("奖励(Reward)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{readonly:!0},model:{value:t.reward,callback:function(e){t.reward=e},expression:"reward"}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("保证金(Collateral)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{readonly:!0},model:{value:t.collateral,callback:function(e){t.collateral=e},expression:"collateral"}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("期满(Expiration)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{value:"2 Weeks",readonly:!0}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("完成时限(Days of complete)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{readonly:!0},model:{value:t.completeDays,callback:function(e){t.completeDays=e},expression:"completeDays"}})],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"grid-content",staticStyle:{float:"right"}},[t._v("描述(Description)：\n        ")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content",staticStyle:{float:"left"}},[a("el-input",{attrs:{readonly:!0},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)])],1)],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(r,o,!1,function(t){a("dipL")},null,null).exports,c=a("Vi3T"),d=a.n(c);s.default.use(l.a,{locale:d.a}),s.default.config.productionTip=!1,new s.default({el:"#app",components:{App:n},template:"<App/>"})},dipL:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.532d4a1ffa77b8631d4c.js.map