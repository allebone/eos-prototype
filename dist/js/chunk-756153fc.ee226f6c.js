(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-756153fc"],{"0e20":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return l}));a("4160"),a("a15b9"),a("d81d"),a("fb6a"),a("0d03"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("159b");var r=a("ca6e"),s=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var a=t.toString(),r=a.split(e),s=[];return r.forEach((function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);s.push(e)})),s.join(" ")},o=function(t){if(!t)return"";var e=t.split(" ");return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",e).format(new Date(t)):t},c=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=new Date(t),s={month:"short",day:"numeric"};return e&&Object(r["c"])(a)&&(s={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",s).format(new Date(t))},l=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}},1148:function(t,e,a){"use strict";var r=a("a691"),s=a("1d80");t.exports="".repeat||function(t){var e=String(s(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"30b1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{lg:"6"}},[a("card-analytic-support-tracker")],1),a("b-col",{attrs:{lg:"6"}},[a("card-analytic-avg-sessions")],1),a("b-col",{attrs:{lg:"8"}},[a("card-analytic-revenue-report")],1),a("b-col",{attrs:{lg:"4"}},[a("card-analytic-goal-overview")],1),a("b-col",{attrs:{lg:"8"}},[a("card-analytic-revenue")],1),a("b-col",{attrs:{lg:"4"}},[a("card-analytic-sales-radar-chart")],1)],1),a("b-row",[a("b-col",{attrs:{lg:"8"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{cols:"12"}},[a("card-analytic-sale-line-chart")],1),a("b-col",{attrs:{md:"6"}},[a("card-analytic-sessions-by-device")],1),a("b-col",{attrs:{md:"6"}},[a("card-analytic-customers")],1)],1)],1),a("b-col",{attrs:{lg:"4"}},[a("card-analytic-product-orders"),a("card-analytic-earnings-chart")],1)],1)],1)},s=[],n=a("a15b"),o=a("b28b"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Sessions By Device")]),a("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0 mb-25",size:"sm"}},t._l(t.chartData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("vue-apex-charts",{staticClass:"my-1",attrs:{type:"donut",height:"300",options:t.sessionsByDeviceDonut.chartOptions,series:t.sessionsByDeviceDonut.series}}),t._l(t.chartData.chartInfo,(function(e,r){return a("div",{key:e.name,staticClass:"d-flex justify-content-between",class:r===t.chartData.chartInfo.length-1?"mb-0":"mb-1"},[a("div",{staticClass:"series-info d-flex align-items-center"},[a("feather-icon",{class:e.iconColor,attrs:{icon:e.icon,size:"16"}}),a("span",{staticClass:"font-weight-bolder ml-75 mr-25"},[t._v(t._s(e.name))]),a("span",[t._v("- "+t._s(e.usage)+"%")])],1),a("div",[a("span",[t._v(t._s(e.upDown)+"%")]),a("feather-icon",{staticClass:"mb-25 ml-25",class:e.upDown>0?"text-success":"text-danger",attrs:{icon:e.upDown>0?"ArrowUpIcon":"ArrowDownIcon"}})],1)])}))],2)],1)},c=[],l=a("205f"),d=a("b885"),u=a("4968"),b=a("dd9a"),p=a("9eaa"),h=a("6197"),f=a("1321"),m=a.n(f),v=a("1dff"),g={components:{BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:b["a"],BDropdownItem:p["a"],BCardBody:h["a"],VueApexCharts:m.a},data:function(){return{chartData:{},sessionsByDeviceDonut:{series:[58.6,34.9,6.5],chartOptions:{chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[v["b"].primary,v["b"].warning,v["b"].danger]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/sessions-device").then((function(e){t.chartData=e.data}))}},y=g,C=a("2877"),w=Object(C["a"])(y,i,c,!1,null,null,null),x=w.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Product Orders")]),a("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0",size:"sm"}},t._l(t.chartInfo.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"radialBar",height:"325",options:t.productOrdersRadialBar.chartOptions,series:t.productOrdersRadialBar.series}}),t._l(t.chartInfo.chartInfo,(function(e,r,s){return a("div",{key:r,staticClass:"d-flex justify-content-between",class:s===Object.keys(t.chartInfo.chartInfo).length-1?"":"mb-1"},[a("div",{staticClass:"series-info d-flex align-items-center"},[a("feather-icon",{class:"finished"===r?"text-primary":"pending"===r?"text-warning":"text-danger",attrs:{icon:"CircleIcon",size:"16"}}),a("span",{staticClass:"font-weight-bold text-capitalize ml-75"},[t._v(t._s(r))])],1),a("span",[t._v(t._s(e))])])}))],2)],1)},_=[],j={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:b["a"],BDropdownItem:p["a"],BCardBody:h["a"]},data:function(){return{chartInfo:{},productOrdersRadialBar:{series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter:function(){return 42459}}}}},colors:[v["b"].primary,v["b"].warning,v["b"].danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/product-orders").then((function(e){t.chartInfo=e.data}))}},B=j,k=Object(C["a"])(B,O,_,!1,null,null,null),D=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Customers")]),a("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0 mb-25",size:"sm"}},t._l(t.chartData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("vue-apex-charts",{staticClass:"mt-2 mb-1",attrs:{type:"pie",height:"325",options:t.customersPie.chartOptions,series:t.customersPie.series}}),a("div",{staticClass:"pt-25"},t._l(t.chartData.listData,(function(e,r){return a("div",{key:r,staticClass:"d-flex justify-content-between",class:r===Object.keys(t.chartData.listData).length-1?"":"mb-1"},[a("div",{staticClass:"series-info"},[a("feather-icon",{staticClass:"mr-50",class:e.iconColor,attrs:{icon:e.icon,size:"16"}}),a("span",{staticClass:"font-weight-bolder"},[t._v(t._s(e.text))])],1),a("span",[t._v(t._s(e.result))])])})),0)],1)],1)},P=[],A={components:{BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:b["a"],BDropdownItem:p["a"],BCardBody:h["a"],VueApexCharts:m.a},data:function(){return{chartData:{},customersPie:{series:[690,258,149],chartOptions:{chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[v["b"].primary,v["b"].warning,v["b"].danger]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/customers").then((function(e){t.chartData=e.data}))}},T=A,z=Object(C["a"])(T,S,P,!1,null,null,null),I=z.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"align-items-baseline pb-1"},[a("div",[a("b-card-title",{staticClass:"mb-25"},[t._v(" Sales ")]),a("b-card-text",{staticClass:"mb-0"},[t._v(" Last 6 months ")])],1),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})],1),a("b-card-body",[a("div",{staticClass:"d-inline-flex align-items-center mr-2"},[a("feather-icon",{staticClass:"text-primary mr-50",attrs:{icon:"CircleIcon"}}),a("h6",{staticClass:"mb-0"},[t._v(" Sales ")])],1),a("div",{staticClass:"d-inline-flex align-items-center"},[a("feather-icon",{staticClass:"text-info mr-50",attrs:{icon:"CircleIcon"}}),a("h6",{staticClass:"mb-0"},[t._v(" Visits ")])],1),a("vue-apex-charts",{attrs:{type:"radar",height:"300",options:t.statisticsRadar.chartOptions,series:t.statisticsRadar.series}})],1)],1)},$=[],E=a("d6e4"),V={components:{VueApexCharts:m.a,BCardText:E["a"],BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BCardBody:h["a"]},data:function(){return{statisticsRadar:{series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}],chartOptions:{chart:{type:"radar",dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1},offsetY:5},stroke:{width:0},dataLabels:{background:{foreColor:["#ebe9f1"]}},legend:{show:!1},colors:[v["b"].primary,v["b"].info],plotOptions:{radar:{polygons:{strokeColors:["#ebe9f1","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[v["b"].primary,v["b"].info],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},yaxis:{show:!1},grid:{show:!1,padding:{bottom:-27}}}}}}},M=V,F=Object(C["a"])(M,R,$,!1,null,null,null),L=F.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"pb-0"},[a("b-card-title",[t._v(t._s(t.trackerData.title))]),a("b-dropdown",{staticClass:"chart-dropdown",attrs:{"no-caret":"",right:"",text:"Last 7 Days",variant:"transparent","toggle-class":"p-50",size:"sm"}},t._l(t.trackerData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("b-row",[a("b-col",{staticClass:"d-flex flex-column flex-wrap text-center",attrs:{sm:"2"}},[a("h1",{staticClass:"font-large-2 font-weight-bolder mt-2 mb-0"},[t._v(" "+t._s(t.trackerData.totalTicket)+" ")]),a("b-card-text",[t._v("Tickets")])],1),a("b-col",{staticClass:"d-flex justify-content-center",attrs:{sm:"10"}},[a("vue-apex-charts",{attrs:{type:"radialBar",height:"270",options:t.supportTrackerRadialBar.chartOptions,series:t.supportTrackerRadialBar.series}})],1)],1),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"text-center"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" New Tickets ")]),a("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.newTicket))])],1),a("div",{staticClass:"text-center"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Open Tickets ")]),a("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.openTicket))])],1),a("div",{staticClass:"text-center"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Response Time ")]),a("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.responseTime)+"d")])],1)])],1)],1)},N=[],Y={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:b["a"],BDropdownItem:p["a"],BCardText:E["a"],BCardBody:h["a"],BRow:n["a"],BCol:o["a"]},data:function(){return{trackerData:{},supportTrackerRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,color:"#5e5873",fontSize:"1rem"},value:{offsetY:15,color:"#5e5873",fontSize:"1.714rem"}}}},colors:[v["b"].danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[v["b"].primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Completed Tickets"]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/support-tracker").then((function(e){t.trackerData=e.data}))}},J=Y,U=Object(C["a"])(J,H,N,!1,null,null,null),W=U.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Revenue")]),a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"SettingsIcon",size:"18"}})],1),a("b-card-body",{staticClass:"pb-0"},[a("div",{staticClass:"d-flex justify-content-start mb-3"},[a("div",{staticClass:"mr-2"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" This Month ")]),a("h3",{staticClass:"font-weight-bolder"},[a("sup",{staticClass:"font-medium-1"},[t._v("$ ")]),a("span",{staticClass:"text-primary"},[t._v(t._s(t.revenue.thisMonth))])])],1),a("div",[a("b-card-text",{staticClass:"mb-50"},[t._v(" Last Month ")]),a("h3",{staticClass:"font-weight-bolder"},[a("sup",{staticClass:"font-medium-1"},[t._v("$ ")]),a("span",[t._v(t._s(t.revenue.lastMonth))])])],1)]),a("vue-apex-charts",{attrs:{type:"line",height:"240",options:t.revenueComparisonLine.chartOptions,series:t.revenueComparisonLine.series}})],1)],1)},X=[],K=(a("b680"),{components:{VueApexCharts:m.a,BCardText:E["a"],BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BCardBody:h["a"]},data:function(){return{revenue:{},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[v["b"].primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter:function(t){return t>999?"".concat((t/1e3).toFixed(0),"k"):t}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/revenue").then((function(e){t.revenue=e.data}))}}),q=K,Q=Object(C["a"])(q,G,X,!1,null,null,null),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("h4",{staticClass:"mb-0"},[t._v(" Goal Overview ")]),a("b-card-text",{staticClass:"font-medium-5 mb-0"},[a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"HelpCircleIcon",size:"21"}})],1)],1),a("vue-apex-charts",{attrs:{type:"radialBar",height:"245",options:t.goalOverviewRadialBar.chartOptions,series:t.goalOverviewRadialBar.series}}),a("b-row",{staticClass:"text-center mx-0"},[a("b-col",{staticClass:"border-top border-right d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" Completed ")]),a("h3",{staticClass:"font-weight-bolder mb-50"},[t._v(" "+t._s(t.goal_overview.completed)+" ")])],1),a("b-col",{staticClass:"border-top d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" In Progress ")]),a("h3",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(t.goal_overview.inProgress)+" ")])],1)],1)],1)},et=[],at={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BRow:n["a"],BCardText:E["a"],BCol:o["a"]},data:function(){return{goal_overview:{},goalOverviewRadialBar:{series:[83],chartOptions:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:["#51e5a8"],plotOptions:{radialBar:{offsetY:-10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#ebe9f1",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{color:"#5e5873",fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[v["b"].success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/goal-overview").then((function(e){t.goal_overview=e.data}))}},rt=at,st=Object(C["a"])(rt,tt,et,!1,null,null,null),nt=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",[a("b-row",{staticClass:"pb-50"},[a("b-col",{staticClass:"d-flex justify-content-between flex-column",attrs:{lg:"6","order-lg":"1",order:"2"}},[a("div",{staticClass:"mt-1 mt-lg-0"},[a("h2",{staticClass:"font-weight-bolder mb-25"},[t._v(" "+t._s(t.kFormatter(t.avgData.sessions))+" ")]),a("b-card-text",{staticClass:"font-weight-bold mb-2"},[t._v(" Avg Sessions ")]),a("div",{staticClass:"font-medium-2 mb-1 mb-lg-0"},[a("span",{staticClass:"text-success mr-50"},[t._v(t._s(t.avgData.growth))]),a("span",[t._v("vs last 7 days")])])],1),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"shadow",attrs:{variant:"primary"}},[t._v(" View Details ")])],1),a("b-col",{staticClass:"d-flex justify-content-between flex-column text-right",attrs:{lg:"6",cols:"12","order-lg":"2",order:"1"}},[a("div",[a("b-dropdown",{staticClass:"chart-dropdown",attrs:{text:"Last 7 Days",variant:"transparent",left:"","no-caret":"",size:"sm"}},t._l(t.avgData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.salesBar.chartOptions,series:t.salesBar.series}})],1)],1),a("hr"),a("b-row",{staticClass:"avg-sessions pt-50"},[a("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Goal: $"+t._s(t.avgData.goal)+" ")]),a("b-progress",{attrs:{value:"50",max:"100",height:"6px"}})],1),a("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Users: "+t._s(t.kFormatter(t.avgData.users))+" ")]),a("b-progress",{attrs:{value:"60",max:"100",height:"6px",variant:"warning"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Retention: "+t._s(t.avgData.retention)+"% ")]),a("b-progress",{staticClass:"mt-25",attrs:{value:"70",max:"100",height:"6px",variant:"danger"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Duration: "+t._s(t.avgData.duration)+"yr ")]),a("b-progress",{staticClass:"mt-25",attrs:{value:"90",max:"100",variant:"success",height:"6px"}})],1)],1)],1)},it=[],ct=a("1947"),lt=a("49f5"),dt=a("e009"),ut=a("0e20"),bt={components:{VueApexCharts:m.a,BCard:l["a"],BRow:n["a"],BCol:o["a"],BButton:ct["a"],BCardText:E["a"],BDropdown:b["a"],BDropdownItem:p["a"],BProgress:lt["a"]},directives:{Ripple:dt["a"]},data:function(){return{avgData:{},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{chart:{sparkline:{enabled:!0},toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0}},states:{hover:{filter:"none"}},colors:["#ebf0f7","#ebf0f7",v["b"].primary,"#ebf0f7","#ebf0f7","#ebf0f7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/avg-sessions").then((function(e){t.avgData=e.data}))},methods:{kFormatter:ut["e"]}},pt=bt,ht=Object(C["a"])(pt,ot,it,!1,null,null,null),ft=ht.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"align-items-baseline"},[a("div",[a("b-card-title",{staticClass:"mb-25"},[t._v(" Sales ")]),a("b-card-text",{staticClass:"mb-0"},[t._v(" 2020 Total Sales: 12.84k ")])],1),a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"SettingsIcon",size:"18"}})],1),a("b-card-body",{staticClass:"pb-0"},[a("vue-apex-charts",{attrs:{type:"line",height:"240",options:t.salesLine.chartOptions,series:t.salesLine.series}})],1)],1)},vt=[],gt={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BCardText:E["a"],BCardTitle:u["a"],BCardBody:h["a"]},data:function(){return{salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[v["b"].primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem"},formatter:function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t}}},tooltip:{x:{show:!1}}}}}}},yt=gt,Ct=Object(C["a"])(yt,mt,vt,!1,null,null,null),wt=Ct.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"card-revenue-budget",attrs:{"no-body":""}},[a("b-row",{staticClass:"mx-0"},[a("b-col",{staticClass:"revenue-report-wrapper",attrs:{md:"8"}},[a("div",{staticClass:"d-sm-flex justify-content-between align-items-center mb-3"},[a("h4",{staticClass:"card-title mb-50 mb-sm-0"},[t._v(" Revenue Report ")]),a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"d-flex align-items-center mr-2"},[a("span",{staticClass:"bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer"}),a("span",[t._v("Earning")])]),a("div",{staticClass:"d-flex align-items-center"},[a("span",{staticClass:"bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer"}),a("span",[t._v("Expense")])])])]),a("vue-apex-charts",{attrs:{id:"revenue-report-chart",type:"bar",height:"230",options:t.revenueReport.chartOptions,series:t.revenueReport.series}})],1),a("b-col",{staticClass:"budget-wrapper",attrs:{md:"4"}},[a("b-dropdown",{staticClass:"budget-dropdown",attrs:{text:"2020",size:"sm",variant:"outline-primary"}},t._l(t.revenue_report.years,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1),a("h2",{staticClass:"mb-25"},[t._v(" $"+t._s(t.revenue_report.price)+" ")]),a("div",{staticClass:"d-flex justify-content-center"},[a("span",{staticClass:"font-weight-bolder mr-25"},[t._v("Budget:")]),a("span",[t._v("56,800")])]),a("vue-apex-charts",{attrs:{id:"budget-chart",type:"line",height:"80",options:t.budgetChart.options,series:t.budgetChart.series}}),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v(" Increase Budget ")])],1)],1)],1)},Ot=[],_t={components:{VueApexCharts:m.a,BDropdown:b["a"],BDropdownItem:p["a"],BCard:l["a"],BButton:ct["a"],BRow:n["a"],BCol:o["a"]},directives:{Ripple:dt["a"]},data:function(){return{revenue_report:{},revenueReport:{series:[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}],chartOptions:{chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[v["b"].primary,v["b"].warning],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}}}}},budgetChart:{series:[{data:[61,48,69,52,60,40,79,60,59,43,62]},{data:[20,10,30,15,23,0,25,15,20,5,27]}],options:{chart:{height:80,toolbar:{show:!1},zoom:{enabled:!1},type:"line",sparkline:{enabled:!0}},stroke:{curve:"smooth",dashArray:[0,5],width:[2]},colors:[v["b"].primary,"#dcdae3"],tooltip:{enabled:!1}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/revenue-report").then((function(e){t.revenue_report=e.data}))}},jt=_t,Bt=Object(C["a"])(jt,xt,Ot,!1,null,null,null),kt=Bt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"earnings-card"},[a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("b-card-title",{staticClass:"mb-1"},[t._v(" Earnings ")]),a("div",{staticClass:"font-small-2"},[t._v(" This Month ")]),a("h5",{staticClass:"mb-1"},[t._v(" $4055.56 ")]),a("b-card-text",{staticClass:"text-muted font-small-2"},[a("span",{staticClass:"font-weight-bolder"},[t._v("68.2%")]),a("span",[t._v(" more earnings than last month.")])])],1),a("b-col",{attrs:{cols:"6"}},[a("vue-apex-charts",{attrs:{height:"120",options:t.earningsChart.chartOptions,series:t.earningsChart.series}})],1)],1)],1)},St=[],Pt=(a("e25e"),"#28c76f66"),At="#28c76f33",Tt={components:{BCard:l["a"],BRow:n["a"],BCol:o["a"],BCardTitle:u["a"],BCardText:E["a"],VueApexCharts:m.a},data:function(){return{earningsChart:{series:[53,16,31],chartOptions:{chart:{type:"donut",toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["App","Service","Product"],stroke:{width:0},colors:[Pt,At,v["b"].success],grid:{padding:{right:-20,bottom:-8,left:-20}},plotOptions:{pie:{startAngle:-10,donut:{labels:{show:!0,name:{offsetY:15},value:{offsetY:-15,formatter:function(t){return"".concat(parseInt(t),"%")}},total:{show:!0,offsetY:15,label:"App",formatter:function(){return"53%"}}}}}},responsive:[{breakpoint:1325,options:{chart:{height:100}}},{breakpoint:1200,options:{chart:{height:120}}},{breakpoint:1045,options:{chart:{height:100}}},{breakpoint:992,options:{chart:{height:120}}}]}}}}},zt=Tt,It=Object(C["a"])(zt,Dt,St,!1,null,null,null),Rt=It.exports,$t={components:{BRow:n["a"],BCol:o["a"],CardAnalyticSessionsByDevice:x,CardAnalyticProductOrders:D,CardAnalyticCustomers:I,CardAnalyticSalesRadarChart:L,CardAnalyticSupportTracker:W,CardAnalyticRevenue:Z,CardAnalyticGoalOverview:nt,CardAnalyticAvgSessions:ft,CardAnalyticSaleLineChart:wt,CardAnalyticRevenueReport:kt,CardAnalyticEarningsChart:Rt}},Et=$t,Vt=(a("d7ab"),Object(C["a"])(Et,r,s,!1,null,null,null));e["default"]=Vt.exports},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"49f5":function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var r=a("2b0e"),s=a("c637"),n=a("a723"),o=a("d82f"),i=a("cf75"),c=a("8c18"),l=a("cf07");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p=Object(o["j"])(l["b"],["label","labelHtml"]),h=Object(i["d"])(Object(o["m"])(u(u({},p),{},{animated:Object(i["c"])(n["g"],!1),height:Object(i["c"])(n["u"]),max:Object(i["c"])(n["p"],100),precision:Object(i["c"])(n["p"],0),showProgress:Object(i["c"])(n["g"],!1),showValue:Object(i["c"])(n["g"],!1),striped:Object(i["c"])(n["g"],!1)})),s["Mb"]),f=r["default"].extend({name:s["Mb"],mixins:[c["a"]],provide:function(){return{bvProgress:this}},props:h,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(l["a"],{props:Object(i["e"])(p,this.$props)})),t("div",{staticClass:"progress",style:this.progressHeight},[e])}})},5319:function(t,e,a){"use strict";var r=a("d784"),s=a("825a"),n=a("7b0b"),o=a("50c4"),i=a("a691"),c=a("1d80"),l=a("8aa5"),d=a("14c3"),u=Math.max,b=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,a,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(a,r){var s=c(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,s,r):e.call(String(s),a,r)},function(t,r){if(!v&&g||"string"===typeof r&&-1===r.indexOf(y)){var n=a(e,t,this,r);if(n.done)return n.value}var c=s(t),p=String(this),h="function"===typeof r;h||(r=String(r));var f=c.global;if(f){var w=c.unicode;c.lastIndex=0}var x=[];while(1){var O=d(c,p);if(null===O)break;if(x.push(O),!f)break;var _=String(O[0]);""===_&&(c.lastIndex=l(p,o(c.lastIndex),w))}for(var j="",B=0,k=0;k<x.length;k++){O=x[k];for(var D=String(O[0]),S=u(b(i(O.index),p.length),0),P=[],A=1;A<O.length;A++)P.push(m(O[A]));var T=O.groups;if(h){var z=[D].concat(P,S,p);void 0!==T&&z.push(T);var I=String(r.apply(void 0,z))}else I=C(D,p,S,P,T,r);S>=B&&(j+=p.slice(B,S)+I,B=S+D.length)}return j+p.slice(B)}];function C(t,a,r,s,o,i){var c=r+t.length,l=s.length,d=f;return void 0!==o&&(o=n(o),d=h),e.call(i,d,(function(e,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,r);case"'":return a.slice(c);case"<":i=o[n.slice(1,-1)];break;default:var d=+n;if(0===d)return e;if(d>l){var u=p(d/10);return 0===u?e:u<=l?void 0===s[u-1]?n.charAt(1):s[u-1]+n.charAt(1):e}i=s[d-1]}return void 0===i?"":i}))}}))},a15b9:function(t,e,a){"use strict";var r=a("23e7"),s=a("44ad"),n=a("fc6a"),o=a("a640"),i=[].join,c=s!=Object,l=o("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(t){return i.call(n(this),void 0===t?",":t)}})},b28b:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var r=a("b42e"),s=a("c637"),n=a("a723"),o=a("992e"),i=a("2326"),c=a("228e"),l=a("6c06"),d=a("7b1e"),u=a("b508"),b=a("d82f"),p=a("cf75"),h=a("fa73");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g=["auto","start","end","center","baseline","stretch"],y=function(t,e,a){var r=t;if(!Object(d["p"])(a)&&!1!==a)return e&&(r+="-".concat(e)),"col"!==t||""!==a&&!0!==a?(r+="-".concat(a),Object(h["c"])(r)):Object(h["c"])(r)},C=Object(u["a"])(y),w=Object(b["c"])(null),x=function(){var t=Object(c["b"])().filter(l["a"]),e=t.reduce((function(t,e){return t[e]=Object(p["c"])(n["i"]),t}),Object(b["c"])(null)),a=t.reduce((function(t,e){return t[Object(p["g"])(e,"offset")]=Object(p["c"])(n["p"]),t}),Object(b["c"])(null)),r=t.reduce((function(t,e){return t[Object(p["g"])(e,"order")]=Object(p["c"])(n["p"]),t}),Object(b["c"])(null));return w=Object(b["a"])(Object(b["c"])(null),{col:Object(b["h"])(e),offset:Object(b["h"])(a),order:Object(b["h"])(r)}),Object(p["d"])(Object(b["m"])(m(m(m(m({},e),a),r),{},{alignSelf:Object(p["c"])(n["u"],null,(function(t){return Object(i["a"])(g,t)})),col:Object(p["c"])(n["g"],!1),cols:Object(p["c"])(n["p"]),offset:Object(p["c"])(n["p"]),order:Object(p["c"])(n["p"]),tag:Object(p["c"])(n["u"],"div")})),s["y"])},O={name:s["y"],functional:!0,get props(){return delete this.props,this.props=x()},render:function(t,e){var a,s=e.props,n=e.data,i=e.children,c=s.cols,l=s.offset,d=s.order,u=s.alignSelf,b=[];for(var p in w)for(var h=w[p],f=0;f<h.length;f++){var m=C(p,h[f].replace(p,""),s[h[f]]);m&&b.push(m)}var g=b.some((function(t){return o["e"].test(t)}));return b.push((a={col:s.col||!g&&!c},v(a,"col-".concat(c),c),v(a,"offset-".concat(l),l),v(a,"order-".concat(d),d),v(a,"align-self-".concat(u),u),a)),t(s.tag,Object(r["a"])(n,{class:b}),i)}}},b680:function(t,e,a){"use strict";var r=a("23e7"),s=a("a691"),n=a("408a"),o=a("1148"),i=a("d039"),c=1..toFixed,l=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},u=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},b=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){c.call({})}));r({target:"Number",proto:!0,forced:b},{toFixed:function(t){var e,a,r,i,c=n(this),b=s(t),p=[0,0,0,0,0,0],h="",f="0",m=function(t,e){var a=-1,r=e;while(++a<6)r+=t*p[a],p[a]=r%1e7,r=l(r/1e7)},v=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=l(a/t),a=a%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(b<0||b>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=u(c*d(2,69,1))-69,a=e<0?c*d(2,-e,1):c/d(2,e,1),a*=4503599627370496,e=52-e,e>0){m(0,a),r=b;while(r>=7)m(1e7,0),r-=7;m(d(10,r,1),0),r=e-1;while(r>=23)v(1<<23),r-=23;v(1<<r),m(1,1),v(2),f=g()}else m(0,a),m(1<<-e,0),f=g()+o.call("0",b);return b>0?(i=f.length,f=h+(i<=b?"0."+o.call("0",b-i)+f:f.slice(0,i-b)+"."+f.slice(i-b))):f=h+f,f}})},c20d:function(t,e,a){var r=a("da84"),s=a("58a8").trim,n=a("5899"),o=r.parseInt,i=/^[+-]?0[Xx]/,c=8!==o(n+"08")||22!==o(n+"0x16");t.exports=c?function(t,e){var a=s(String(t));return o(a,e>>>0||(i.test(a)?16:10))}:o},ca6e:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return d}));a("0d03");var r=a("5530");a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var n=a("a18c"),o=a("a6f4"),i=function(t){return"object"===s(t)&&null!==t},c=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},l=function(t){var e=n["a"].resolve(t),a=e.route;return a.path===n["a"].currentRoute.path},d=function(){var t=Object(o["getCurrentInstance"])().proxy,e=Object(o["reactive"])({route:t.$route});return Object(o["watch"])((function(){return t.$route}),(function(t){e.route=t})),Object(r["a"])(Object(r["a"])({},Object(o["toRefs"])(e)),{},{router:t.$router})}},cf07:function(t,e,a){"use strict";a.d(e,"b",(function(){return p})),a.d(e,"a",(function(){return h}));var r=a("2b0e"),s=a("c637"),n=a("a723"),o=a("8690"),i=a("7b1e"),c=a("a8c8"),l=a("3a58"),d=a("cf75"),u=a("fa73"),b=a("8c18"),p=Object(d["d"])({animated:Object(d["c"])(n["g"],null),label:Object(d["c"])(n["u"]),labelHtml:Object(d["c"])(n["u"]),max:Object(d["c"])(n["p"],null),precision:Object(d["c"])(n["p"],null),showProgress:Object(d["c"])(n["g"],null),showValue:Object(d["c"])(n["g"],null),striped:Object(d["c"])(n["g"],null),value:Object(d["c"])(n["p"],0),variant:Object(d["c"])(n["u"])},s["Nb"]),h=r["default"].extend({name:s["Nb"],mixins:[b["a"]],inject:{bvProgress:{default:function(){return{}}}},props:p,computed:{progressBarClasses:function(){var t=this.computedAnimated,e=this.computedVariant;return[e?"bg-".concat(e):"",this.computedStriped||t?"progress-bar-striped":"",t?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(l["b"])(this.value,0)},computedMax:function(){var t=Object(l["b"])(this.max)||Object(l["b"])(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Object(c["d"])(Object(l["c"])(this.precision,Object(l["c"])(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Object(c["f"])(10,t);return Object(l["a"])(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(i["b"])(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(i["b"])(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(i["b"])(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(i["b"])(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,a=this.label,r=this.labelHtml,s=this.computedValue,n=this.computedPrecision,i={};return this.hasNormalizedSlot()?e=this.normalizeSlot():a||r?i=Object(o["a"])(r,a):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=Object(l["a"])(s,n)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(u["g"])(this.computedMax),"aria-valuenow":Object(l["a"])(s,n)},domProps:i},e)}})},d7ab:function(t,e,a){"use strict";a("fa61")},e25e:function(t,e,a){var r=a("23e7"),s=a("c20d");r({global:!0,forced:parseInt!=s},{parseInt:s})},fa61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-756153fc.ee226f6c.js.map