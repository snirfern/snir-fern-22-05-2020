(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),c=a(17),i=a(16),l=a(13),s={autocomplete_options:[],selectedCityWeather:void 0,forecast:[],favorites:[],loading:!1,errors:[],currentError:void 0,tempMethod:!0},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"SET_ERROR":var a=t.payload;return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errors:[].concat(Object(i.a)(e.errors),[a])});case"REMOVE_FROM_FAVORITES":var r=t.payload;return Object(l.a)(Object(l.a)({},e),{},{loading:!1,favorites:Object(i.a)(e.favorites).filter((function(e){return e.Key!==r}))});case"SET_FAVORITES":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,favorites:[].concat(Object(i.a)(e.favorites),Object(i.a)(t.payload))});case"SET_AUTOCOMPLETE_OPTIONS":var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{loading:!1,autocomplete_options:Object(i.a)(n)});case"SET_CURRENT_CITY_WEATHER_REPORT":var o=t.payload;return Object(l.a)(Object(l.a)({},e),{},{loading:!1,selectedCityWeather:Object(l.a)({},o)});case"SET_NEXT_DAYS_FORECAST":var c=t.payload;return Object(l.a)(Object(l.a)({},e),{},{loading:!1,forecast:c});case"SET_TEMP_METHOD":var u=t.payload;return Object(l.a)(Object(l.a)({},e),{},{tempMethod:Boolean(u)});default:return e}},d=a(38),p=a(74),f=(a(99),a(9)),m=a(165),h=a(166),y=a(167),g=a(14),v=a(41),b=a.n(v),E=a(53),O=a(32),w=a.n(O),T="weather_fav",j=function(){try{var e=localStorage.getItem(T),t=JSON.parse(e);return void 0===t||null===t||0===t.length?0:t.length}catch(a){console.log("Error occured during ls pulling")}},x=function(e){return parseInt(1.8*e+32)},S={autocomplete:"http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xQ33SUJebTpy4Ocj4oTsMwTQcfY4jdGF&q=",currentconditions:"http://dataservice.accuweather.com/currentconditions/v1/213181?apikey=xQ33SUJebTpy4Ocj4oTsMwTQcfY4jdGF",fivedays:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/",cityByLocation:"http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=xQ33SUJebTpy4Ocj4oTsMwTQcfY4jdGF&q="},C=function(){var e=Object(E.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,r=t.coords.longitude;e({lat:a,lng:r})}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){return function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SET_LOADING",payload:"set loading..."}),e.next=3,C();case 3:void 0!==(a=e.sent)&&a.lng&&a.lat?t(N(a)):t(k({Key:"215793",City:"Tel Aviv"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(t){var a=e.lng,r=e.lat;w()({url:S.cityByLocation+r+","+a,method:"GET"}).then((function(e){e.data&&e.data.Key&&e.data.EnglishName?t(k({Key:e.data.Key,City:e.data.EnglishName})):t(k({Key:"215793",City:"Tel Aviv"}))})).catch((function(e){e.toString().indexOf("Network Error")>-1&&t({type:"SET_ERROR",payload:"Network error occured.Probably API limit. Please come back in 24 hours."})}))}},k=function(e){return function(t){t({type:"SET_LOADING",payload:"none"}),w()({url:S.currentconditions,method:"GET"}).then((function(a){a.data[0].Key=e.Key,a.data[0].City=e.City,t({type:"SET_CURRENT_CITY_WEATHER_REPORT",payload:a.data[0]}),t(I(t,e.Key))})).catch((function(e){e.toString().indexOf("Network Error")>-1&&t({type:"SET_ERROR",payload:"Network error occured.Probably API limit. Please come back in 24 hours."})}))}},F=function(e,t){return function(e){e({type:"SET_LOADING",payload:"none"});var t=function(){try{var e=localStorage.getItem(T);return JSON.parse(e)}catch(t){return console.log(t),[]}}();if(void 0!==t&&0!==t.length){var a=[];t.forEach((function(e){return a.push(w.a.get("http://dataservice.accuweather.com/currentconditions/v1/"+e.Key+"?apikey=xQ33SUJebTpy4Ocj4oTsMwTQcfY4jdGF"))})),w.a.all(a).then((function(a){for(var r=Object(i.a)(a.map((function(e){return e.data}))),n=[],o=0;o<r.length;o++)n=[].concat(Object(i.a)(n),Object(i.a)(r[o]));for(var c=0;c<n.length;c++)n[c].Key=t[c].Key,n[c].City=t[c].City;e({type:"SET_FAVORITES",payload:n})})).catch((function(t){return e({type:"ERROR",payload:"Error encountered in Favorites API. Please refresh"})}))}else e({type:"SET_FAVORITES",payload:[]})}},I=function(e,t){e({type:"SET_LOADING",payload:"none"}),w()({url:S.fivedays+t+"?apikey=xQ33SUJebTpy4Ocj4oTsMwTQcfY4jdGF",method:"GET"}).then((function(t){e({type:"SET_NEXT_DAYS_FORECAST",payload:t.data&&t.data.DailyForecasts?t.data.DailyForecasts:[]})})).catch((function(t){t.toString().indexOf("Network Error")>-1&&e({type:"SET_ERROR",payload:"Network error occured.Probably API limit. Please come back in 24 hours."})}))},D=a(171),R=a(172),W=a(158),A=Object(W.a)((function(e){return{root:{width:400,display:"flex",alignItems:"center",borderRadius:"10px!important"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{},divider:{height:22,margin:4}}})),P=a(78),M=a.n(P),K=a(164),L=void 0;var G=Object(c.b)((function(e){return{options:e.autocomplete_options,errors:e.errors,loading:e.loading}}),(function(e){return{searchCity:function(t){return e((a=t,function(e){e({type:"SET_LOADING",payload:"none"}),w()({url:S.autocomplete+a,method:"GET"}).then((function(t){e({type:"SET_AUTOCOMPLETE_OPTIONS",payload:t.data})})).catch((function(t){t.toString().indexOf("Network Error")>-1&&e({type:"SET_ERROR",payload:"Network error occured. Probably API limit.  Please come back in 24 hours."})}))}));var a},getWeatherForCity:function(t){return e(k(t))}}}))((function(e){var t=A(),a=Object(r.useState)(!1),o=Object(f.a)(a,2),c=o[0],i=o[1],l=Object(r.useState)(""),s=Object(f.a)(l,2),u=s[0],d=s[1];return n.a.useEffect((function(){e.options.length>0&&i(!1),setTimeout((function(){0===e.options.length&&i(!1)}),5e3)}),[e.options]),n.a.createElement("div",{style:{paddingTop:5,paddingBottom:5}},n.a.createElement("div",{className:t.root},n.a.createElement(R.a,{disabled:e.errors.length>=2,id:"cities_autocomplete",style:{width:400,backgroundcolor:"white"},options:e.options.map((function(e){return e.LocalizedName})),value:u,onChange:function(t,a){""!==a&&null!==a&&void 0!==a&&function(t){var a=e.options.filter((function(e){return e.LocalizedName.toString().toLowerCase()===t.toString().toLowerCase()})),r=void 0!==a&&a.length>0?a[0].Key:"";""!==r&&e.getWeatherForCity({Key:r,City:a[0].LocalizedName})}(a)},onInputChange:function(t,a){null!==a&&void 0!==a&&""!==a&&(clearTimeout(L),i(!0),L=setTimeout((function(){e.searchCity(a)}),2e3)),d(a)},popupIcon:c?n.a.createElement(K.a,{style:{display:"inline-block",verticalAlign:"middle",height:20,width:20}}):n.a.createElement(M.a,null),renderInput:function(e){return n.a.createElement(D.a,Object.assign({placeholder:"Search for city"},e,{style:{direction:"ltr",backgroundColor:"white",borderRadius:5},variant:"outlined"}))}})))})),J=a(79),B=a.n(J),V=n.a.createContext({theme:{type:"light",primary:"#00bfa5",text:"#black"},setTheme:function(){}}),z=function(e){var t={light:{type:"light",primary:"#0277bd",text:"black"},dark:{type:"dark",primary:"#004080",text:"white"}},a={theme:t.light,setTheme:function(e){s(Object(l.a)(Object(l.a)({},i),{},{theme:"dark"===e?t.light:t.dark}))}},o=Object(r.useState)(a),c=Object(f.a)(o,2),i=c[0],s=c[1];return n.a.createElement(V.Provider,{value:i},e.children)},Q=a(168),U=a(8),Y=Object(W.a)((function(e){return{buttons:{display:"flex",justifyContent:"space-between",width:350},theme:{verticalAlign:"middle",padding:5,display:"inline-block"},typography:Object(U.a)({fontFamily:"Shadows Into Light"},e.breakpoints.down("sm"),{padding:10}),root:{display:"flex",justifyContent:"space-evenly",padding:0},toolbar:Object(U.a)({display:"flex",padding:10,justifyContent:"space-between",direction:"rtl"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",justifyContent:"space-evenly"}),menuButton:{marginRight:e.spacing(2)},title:Object(U.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}})),H=a(173);var q=Object(c.b)(null,(function(e){return{setTempMethod:function(t){return e(function(e){return function(t){return t({type:"SET_TEMP_METHOD",payload:e?1:0})}}(t))}}}))(Object(g.e)((function(e){var t=Object(r.useContext)(V),a=Y();function o(t){e.history.push(t)}var c=Object(r.useState)(!0),i=Object(f.a)(c,2),l=i[0],s=i[1],u=Object(r.useState)(!0),d=Object(f.a)(u,2),p=d[0],g=d[1];return n.a.createElement("div",{className:a.root},n.a.createElement(m.a,{className:a.toolbar,position:"static"},n.a.createElement(h.a,{variant:"dense",className:a.toolbar},n.a.createElement("div",{variant:"h6",className:a.buttons},n.a.createElement(y.a,{variant:"contained",color:"secondary",onClick:function(){return o("/")}},"Home"),"\xa0\xa0",n.a.createElement(y.a,{variant:"contained",color:"secondary",onClick:function(){return o("favorites")}},"Favorites"),"\xa0\xa0 \xa0\xa0",n.a.createElement("div",{className:a.theme},n.a.createElement(B.a,{fontSize:"large",onClick:function(){s(!l),t.setTheme(t.theme.type)},style:{color:l?"white":"black"}})),n.a.createElement("div",null,n.a.createElement(Q.a,{style:{width:"100px"},control:n.a.createElement(H.a,{checked:p,onChange:function(){e.setTempMethod(!p),g(!p)}}),label:n.a.createElement("span",{style:{fontSize:16}},p?" \u2109 ":" \u2103 ")}))),n.a.createElement("div",{className:a.typography},n.a.createElement(G,null)),n.a.createElement("div",{variant:"h4",style:{fontSize:30},className:a.typography},"Herolo weather task"))))}))),X=["https://developer.accuweather.com/sites/default/files/01-s.png","https://developer.accuweather.com/sites/default/files/02-s.png","https://developer.accuweather.com/sites/default/files/03-s.png","https://developer.accuweather.com/sites/default/files/04-s.png","https://developer.accuweather.com/sites/default/files/05-s.png","https://developer.accuweather.com/sites/default/files/06-s.png","https://developer.accuweather.com/sites/default/files/07-s.png","https://developer.accuweather.com/sites/default/files/08-s.png","https://developer.accuweather.com/sites/default/files/11-s.png","https://developer.accuweather.com/sites/default/files/12-s.png","https://developer.accuweather.com/sites/default/files/13-s.png","https://developer.accuweather.com/sites/default/files/14-s.png","https://developer.accuweather.com/sites/default/files/15-s.png","https://developer.accuweather.com/sites/default/files/16-s.png","https://developer.accuweather.com/sites/default/files/17-s.png","https://developer.accuweather.com/sites/default/files/18-s.png","https://developer.accuweather.com/sites/default/files/19-s.png","https://developer.accuweather.com/sites/default/files/20-s.png","https://developer.accuweather.com/sites/default/files/21-s.png","https://developer.accuweather.com/sites/default/files/22-s.png","https://developer.accuweather.com/sites/default/files/23-s.png","https://developer.accuweather.com/sites/default/files/24-s.png","https://developer.accuweather.com/sites/default/files/25-s.png","https://developer.accuweather.com/sites/default/files/26-s.png","https://developer.accuweather.com/sites/default/files/29-s.png","https://developer.accuweather.com/sites/default/files/30-s.png","https://developer.accuweather.com/sites/default/files/31-s.png","https://developer.accuweather.com/sites/default/files/32-s.png","https://developer.accuweather.com/sites/default/files/33-s.png","https://developer.accuweather.com/sites/default/files/34-s.png","https://developer.accuweather.com/sites/default/files/35-s.png","https://developer.accuweather.com/sites/default/files/36-s.png","https://developer.accuweather.com/sites/default/files/37-s.png","https://developer.accuweather.com/sites/default/files/38-s.png","https://developer.accuweather.com/sites/default/files/39-s.png","https://developer.accuweather.com/sites/default/files/40-s.png","https://developer.accuweather.com/sites/default/files/41-s.png","https://developer.accuweather.com/sites/default/files/42-s.png","https://developer.accuweather.com/sites/default/files/43-s.png","https://developer.accuweather.com/sites/default/files/44-s.png"],Z=a(169),$=a(42),ee=a(174),te=a(170),ae=["radial-gradient(#FFE79B,#FFECB3,#FFECB3)","radial-gradient(#B1E9FF,#CFF2FF,#B2E9FF)","radial-gradient(#D6E3E9,#DFEBEF,#D6E3E9)"],re=Object(W.a)((function(e){return{root:{boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}},media:{height:140},avatar:{width:100,height:50,borderRadius:0,backgroundColor:"transparent"},card_content:{display:"flex",flexDirection:"row",justifyContent:"space-between"},card_header:{}}}));function ne(e){var t=re(),a=e.icon,r=e.DateTime,o=e.Day,c=e.IconPhrase,i=e.Name,l=e.Temperature,s=e.singleDayForecast,u=e.flexD,d=e.method,p=ae[2];return a<=4?p=ae[0]:a<29&&a>12&&(p=ae[1]),n.a.createElement(Z.a,{className:t.root,style:{backgroundImage:p}},s&&n.a.createElement(te.a,{style:{boxShadow:"0",display:"flex",flexDirection:u,backgroundImage:p},title:i,subheader:n.a.createElement(n.a.Fragment,null,n.a.createElement($.a,{gutterBottom:!0,style:{minWidth:150,fontSize:22}},n.a.createElement("span",null,d?l:x(l)),d?n.a.createElement("span",null," \u2103"):n.a.createElement("span",null," \u2109")),n.a.createElement($.a,null,c)),avatar:n.a.createElement(ee.a,{"aria-label":"recipe",className:t.avatar},n.a.createElement("img",{alt:"day type",src:o}))}),!s&&n.a.createElement(n.a.Fragment,null,n.a.createElement(te.a,{className:t.card_header,style:{display:"flex",flexDirection:"column"},title:r,subheader:n.a.createElement(n.a.Fragment,null,n.a.createElement($.a,{gutterBottom:!0,style:{minWidth:150,fontSize:22}},n.a.createElement("span",null,d?l:x(l)),d&&n.a.createElement("span",null," \u2103"),!d&&n.a.createElement("span",null," \u2109")),n.a.createElement($.a,null,c)),avatar:n.a.createElement(ee.a,{"aria-label":"recipe",className:t.avatar},n.a.createElement("img",{alt:"day type",src:o}))})))}var oe=Object(W.a)((function(e){return{root:{position:"absolute",top:"50%",right:"50%",with:"50%",height:"50%",transform:"translate(50%,-50%)"},error:{padding:20,marginTop:50,border:"1px solid #c51162",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}}}}));function ce(e){var t=oe(),a=e.errors;return n.a.createElement("div",{className:t.root},a.map((function(e,a){return n.a.createElement("div",{key:"Error_"+a,className:t.error},e)})))}var ie=Object(W.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",flexGrow:1},favorites_container:(t={padding:50,flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"flex-start"},Object(U.a)(t,e.breakpoints.down("sm"),{marginTop:0,alignItems:"stretch",flexFlow:"column wrap",padding:0}),Object(U.a)(t,e.breakpoints.down("md"),{flexDirection:"row",alignItems:"flex-start",justifyContent:"space-evenly",flexFlow:"column wrap",padding:0}),t),card:Object(U.a)({marginTop:50},e.breakpoints.down("sm"),{marginTop:10,padding:5,width:"100%"})}}));var le=Object(c.b)((function(e){return{temp:e.tempMethod,loading:e.loading,forecast:e.forecast,favorites:e.favorites,errors:e.errors,selectedCity:e.selectedCityWeather}}),(function(e){return{Favorites:function(){return e(F())},getWeatherForCity:function(t){return e(k(t))}}}))((function(e){var t=Object(r.useContext)(V),a=e.history,o=ie(),c=Object(r.useState)([]),i=Object(f.a)(c,2),s=i[0],u=i[1],d=e.favorites;if(n.a.useEffect((function(){e.errors.length>=2&&u(e.errors),u(e.errors);var t=j();e.selectedCity&&e.selectedCity.Key&&0===d.length&&t>0&&!e.loading&&e.Favorites()}),[]),s.length>=2)return n.a.createElement(ce,{errors:e.errors});var p={backgroundColor:t.theme.primary};return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:[o.favorites_container],style:Object(l.a)({},p)},e.favorites&&e.favorites.length>0&&e.favorites.map((function(t,r){var c=t.Temperature.Metric.Value,i=t.City,l=t.WeatherIcon;return n.a.createElement("div",{key:"favorites_"+r,className:o.card,onClick:function(){e.selectedCity.Key&&e.selectedCity.Key!==t.Key&&e.getWeatherForCity(t),a.push("/")}},n.a.createElement(ne,{method:e.temp,icon:l,flexD:"row",Day:X[l],singleDayForecast:!0,Name:i,Temperature:c}))}))))})),se=a(56),ue=a.n(se);var de=Object(W.a)((function(e){return{content_header:Object(U.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",paddingLeft:90,paddingRight:90,justifyContent:"space-between"},e.breakpoints.down("sm"),{padding:0,display:"flex",flexDirection:"column",marginTop:20,justifyContent:"space-between",alignItems:"center"}),left_head:Object(U.a)({display:"flex",flexDirection:"row",minHeight:100},e.breakpoints.down("sm"),{display:"flex",alignItems:"stretch"}),right_head:{},button:{textTransform:"none"},icon:{height:100}}})),pe=Object(c.b)((function(e){return{temp:e.tempMethod,currentWeather:e.selectedCityWeather,favorites:e.favorites}}),(function(e){return{removeFromFavorites:function(t){return e(function(e){return function(t){return t({type:"REMOVE_FROM_FAVORITES",payload:e})}}(t))}}}))((function(e){var t=de(),a=Object(r.useState)(!1),o=Object(f.a)(a,2),c=o[0],i=o[1],l=e.currentWeather&&e.currentWeather.Key;n.a.useEffect((function(){var e=j(),t=function(e){try{var t=localStorage.getItem(T),a=JSON.parse(t);return void 0!==a&&null!==a||(a=[]),a.filter((function(t){return t.Key===e}))}catch(r){return[]}}(l);void 0!==e&&null!==e&&e>0&&t.length>0&&i(!0)}),[l,e.currentWeather]);var s=e.currentWeather&&e.currentWeather.Temperature?e.currentWeather.Temperature.Metric.Value:null,u=e.currentWeather&&e.currentWeather.City?e.currentWeather.City:null,d=e.currentWeather&&e.currentWeather.WeatherIcon;return n.a.createElement("div",{className:t.content_header},n.a.createElement("div",{className:t.left_head},n.a.createElement(ne,{method:e.temp,flexD:"row",Day:X[d],singleDayForecast:!0,Name:u,Temperature:s,icon:d})),n.a.createElement("div",{className:t.right_head},!c&&n.a.createElement(y.a,{variant:"contained",color:"secondary",className:t.button,startIcon:n.a.createElement(ue.a,{style:{color:c>0?"yellow":"white"}}),onClick:function(){null!==l&&function(e,t){if(null!==e&&null!==t&&null!==t&&void 0!==t)try{var a=localStorage.getItem(T),r=JSON.parse(a);if(null===r||void 0===r)return void localStorage.setItem(T,JSON.stringify([{Key:e,City:t}]));if(0!==r.filter((function(t){return t.Key===e})).length)return;r.push({Key:e,City:t}),localStorage.setItem(T,JSON.stringify(r))}catch(n){console.log(n)}}(l,e.currentWeather.City),i(!c)}},"Add to Favorites"),c&&n.a.createElement(y.a,{variant:"contained",color:"secondary",className:t.button,startIcon:n.a.createElement(ue.a,{style:{color:c>0?"yellow":"white"}}),onClick:function(){!function(e,t){var a=localStorage.getItem(T);if(void 0!==a&&null!==a){var r=JSON.parse(a);r=r.filter((function(e){return null!==e&&void 0!==e}));var n=[];r.forEach((function(a){a.Key!==e&&n.push({Key:a.Key,City:t})})),localStorage.setItem(T,JSON.stringify(n))}else localStorage.setItem(T,JSON.stringify([]))}(l),e.removeFromFavorites(l),i(!c)}},"Remove from Favorites")))}));var fe=Object(W.a)((function(e){return{content_container:Object(U.a)({paddingTop:100,display:"flex",flexDirection:"column"},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",alignItems:"stretch",padding:0}),sub_container:Object(U.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"stretch"})}})),me=Object(c.b)((function(e){return{temp:e.tempMethod,forecast:e.forecast,selectedCityForecast:e.selectedCityWeather}}))((function(e){var t=fe(),a=n.a.useState(e.temp),r=Object(f.a)(a,2),o=r[0],c=r[1];return n.a.useEffect((function(){e.temp!==o&&c(e.temp)}),[e,o]),n.a.createElement("div",{className:t.content_container},n.a.createElement("div",null,n.a.createElement(pe,null)),n.a.createElement("div",{style:{textAlign:"center",padding:70,fontSize:20}},e.selectedCityForecast?e.selectedCityForecast.WeatherText:null),n.a.createElement("div",{className:t.sub_container},void 0!==e.forecast&&e.forecast.length>0&&e.forecast.map((function(e,t){return n.a.createElement("div",{style:{marginTop:20},key:"content_child_"+t},n.a.createElement(ne,{method:o,Temperature:e.Temperature.Minimum.Value,maxTemp:e.Temperature.Maximum.Value,minTemp:e.Temperature.Minimum.Value,Day:X[e.Day.Icon],icon:e.Day.Icon,IconPhrase:e.Day.IconPhrase,DateTime:new Date(e.Date.toString()).toLocaleString("en-us",{weekday:"long"})}))}))))}));a(120);function he(){var e=Object(r.useContext)(V);return n.a.createElement("div",{className:"dark"===e.theme.type?"loader2":"loader"},"Loading...")}var ye=Object(c.b)((function(e){return{selectedCity:e.selectedCityWeather,errors:e.errors,loading:e.loading,forecast:e.forecast}}),(function(e){return{init:function(){return e(_())}}}))((function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),o=a[0],c=a[1],i=Object(r.useContext)(V),l={backgroundColor:i.theme.primary,paddingTop:5,flexGrow:1,paddingLeft:100,paddingRight:100,textAlign:"center"};return n.a.useEffect((function(){e.errors.length>=2&&c(e.errors)}),[e]),e.loading?n.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:i.theme.primary}},n.a.createElement(he,null)):o.length>=2?n.a.createElement(ce,{errors:e.errors}):n.a.createElement("div",{style:l},n.a.createElement("div",{style:{padding:"50 150"}},n.a.createElement(me,null)))})),ge=a(51);var ve=Object(c.b)((function(e){return{selectedCity:e.selectedCityWeather,errors:e.errors,loading:e.loading,forecast:e.forecast}}),(function(e){return{init:function(){return e(_())}}}))((function(e){return n.a.useEffect((function(){void 0===e.selectedCity&&e.errors.length<2&&e.init()}),[e]),n.a.createElement("div",{className:"App"},n.a.createElement(ge.a,null,n.a.createElement(q,null),n.a.createElement(g.a,{exact:!0,path:"/",component:function(e){return n.a.createElement(ye,e)}}),n.a.createElement(g.a,{path:"/favorites",component:function(e){return n.a.createElement(le,e)}})))})),be=Object(d.c)(u,Object(d.a)(p.a));Object(o.render)(n.a.createElement(c.a,{store:be},n.a.createElement(z,null,n.a.createElement(ve,null))),document.getElementById("root"))},90:function(e,t,a){e.exports=a(121)},99:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.cd753c6e.chunk.js.map