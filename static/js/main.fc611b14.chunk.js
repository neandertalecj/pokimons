(this["webpackJsonptest-pokemon"]=this["webpackJsonptest-pokemon"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),s=c(8),n=c.n(s),o=(c(13),c(6)),l=c(2),i=c(7),d=function(e,t){var c=Object(a.useState)({loading:!1,data:void 0,error:void 0}),r=Object(l.a)(c,2),s=r[0],n=r[1];function o(e,t){n({loading:!0}),fetch(e,t).then((function(e){return e.json()})).then((function(e){n({loading:!1,data:e})})).catch((function(e){n({loading:!1,error:e})}))}return Object(a.useEffect)((function(){e&&o(e,t)}),[]),Object(i.a)(Object(i.a)({},s),{},{fetchNow:o})},b=c(0),j=function(e){var t=e.color,c=e.className;return Object(b.jsx)("svg",{fill:t,viewBox:"0 0 1792 1792",className:"".concat(c," flex-no-shrink animate-spin"),xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z"})})},m=function(e){var t=e.color,c=e.className,a=e.screenHeight;return Object(b.jsx)("div",{className:"".concat(a," flex justify-center items-center space-x-3 md:space-x-6 flex-wrap"),children:Object(b.jsx)(j,{color:t,className:c})})},u=function(e){var t=e.name,c=e.className;return Object(b.jsx)("div",{className:"border-2 bg-gradient-to-t ".concat({grass:"from-green-300 to-green-100 border-green-500",poison:"from-purple-400 to-purple-100 border-purple-500",fire:"from-red-400 to-red-100 border-red-500",flying:"from-blue-400 to-blue-100 border-blue-500",water:"from-blue-500 to-blue-300 border-blue-700",bug:"from-gray-400 to-gray-100 border-gray-500",electric:"from-yellow-400 to-yellow-100 border-yellow-500",ground:"from-yellow-600 to-yellow-300 border-yellow-700",fairy:"from-red-200 to-red-50 border-red-400"}[t]," rounded ").concat(c," text-center"),children:t})},x=function(e){var t=e.name,c=e.id,r=e.onImageClick,s=Object(a.useState)("loading"),n=Object(l.a)(s,2),o=n[0],i=n[1],j=d("https://pokeapi.co/api/v2/pokemon/".concat(c)).data,x=Object(a.useState)({}),p=Object(l.a)(x,2),f=p[0],h=p[1],g=Object(a.useContext)(N).colletctTypes;Object(a.useEffect)((function(){j&&h({url:"https://pokeres.bastionbot.org/images/pokemon/".concat(c,".png"),name:t,id:c,type:j.types,tab:{attack:j.stats[1].base_stat,defense:j.stats[2].base_stat,hp:j.stats[0].base_stat,spAttack:j.stats[3].base_stat,spDefense:j.stats[4].base_stat,speed:j.stats[5].base_stat,weight:j.weight,totalMoves:j.moves.length}}),j&&g(j.types)}),[j]);return Object(b.jsx)("li",{className:"sm:w-1/2 md:w-1/3 mb-8",children:Object(b.jsxs)("div",{className:"border border-black px-5 pb-16 mx-4",children:[Object(b.jsx)("img",{className:"my-4 cursor-pointer",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(c,".png"),alt:c,onLoad:function(){i("loaded")},onError:function(){i("failed to load")},onClick:function(){return r(f)}}),"failed to load"===o&&o,"loading"===o&&Object(b.jsx)(m,{color:"#1d4ed8",className:"h-10",screenHeight:""}),Object(b.jsx)("div",{className:"capitalize font-medium text-center",children:t}),Object(b.jsx)("div",{className:"flex space-x-2",children:j&&j.types.map((function(e){var t=e.type.name;return Object(b.jsx)(u,{name:t,className:"w-1/2"},t)}))})]})})},p={attack:"Attack",defense:"Defense",hp:"HP",spAttack:"SP Attack",spDefense:"SP Defense",speed:"Speed",weight:"Weight",totalMoves:"Tottal moves"},f=function(e){var t,c=e.info,a=e.onClose,r=c.url,s=c.name,n=c.id,o=c.type,l=c.tab;return Object(b.jsx)("div",{className:"h-screen bg-gray-400 lg:bg-transparent",children:Object(b.jsxs)("div",{className:"text-center border border-black p-5 lg:max-w-xs relative bg-white",children:[Object(b.jsx)("div",{className:"visible lg:invisible absolute right-5 bg-gray-300 py-1 px-3 rounded-full hover:bg-gray-400",onClick:a,children:"x"}),Object(b.jsx)("div",{className:"max-w-xs mx-auto",children:Object(b.jsx)("img",{className:"inline-block ",src:r,alt:s})}),Object(b.jsxs)("div",{className:"text-center font-medium text-1xl capitalize py-2",children:[s," #",function e(t,c){return(t=t.toString()).length<c?e("0"+t,c):t}(n,3)]}),Object(b.jsx)("div",{className:"max-w-xs m-auto",children:Object(b.jsx)("table",{className:"table-fixed border-collapse border border-black w-full",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"w-3/4 border border-black",children:"Type"}),Object(b.jsx)("td",{className:"w-1/4 border border-black",children:o&&(t=o,t.reduce((function(e,t){return"".concat(e,", ").concat(t.type.name).replace(/^, /,"")}),""))})]}),l&&Object.entries(l).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"border border-black",children:p[e[0]]}),Object(b.jsx)("td",{className:"border border-black",children:e[1]})]},e[0])}))]})})})]})})},h=function(e){var t=Object(a.useContext)(N).pageTypes;return Object(b.jsxs)("div",{className:"pb-52",children:[Object(b.jsx)("h2",{className:"font-medium text-2xl",children:"Avaible types on this page"}),Object(b.jsx)("div",{className:"flex flex-wrap space-x-2",children:t&&t.map((function(e){return Object(b.jsx)(u,{className:"w-32 my-2",name:e},e)}))})]})},g={url:"",name:"",id:"",type:[],tab:{attack:"",defense:"",hp:"",spAttack:"",spDefense:"",speed:"",weight:"",totalMoves:""}},O=function(){var e=d("https://pokeapi.co/api/v2/pokemon?limit=12"),t=e.data,c=e.loading,r=e.error,s=e.fetchNow,n=Object(a.useState)(g),o=Object(l.a)(n,2),i=o[0],j=o[1],u=function(e){return j(e)};return c?Object(b.jsx)(m,{color:"#1d4ed8",className:"h-20",screenHeight:"h-screen"}):r?(console.log("error",r),null):Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container mx-auto flex relative",children:[Object(b.jsxs)("div",{className:"w-full lg:w-3/5",children:[Object(b.jsx)("ul",{className:"flex flex-col sm:flex-row flex-wrap",children:t&&t.results.map((function(e){var t=e.name,c=e.url;return Object(b.jsx)(x,{name:t,id:c.match(/\d+/g).slice(-1),onImageClick:u},c)}))}),Object(b.jsx)("button",{className:"w-full py-2 rounded bg-blue-400 text-white font-medium",onClick:function(){return s(t.next)},children:"Load More"})]}),Object(b.jsx)("div",{className:"lg:w-2/5",children:Object(b.jsx)("div",{className:"fixed left-0 lg:left-2/3 right-0 top-0 lg:top-32 bg-white",children:i.url&&Object(b.jsx)(f,{info:i,onClose:function(){return j(g)}})})})]}),Object(b.jsx)("div",{className:"container mx-auto pt-20",children:Object(b.jsx)("div",{children:Object(b.jsx)(h,{})})})]})},v=Object(a.memo)(O),N=Object(a.createContext)([]);var w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(b.jsx)(N.Provider,{value:{pageTypes:c,colletctTypes:function(e){var t=e.map((function(e){return e.type.name})),a=[].concat(Object(o.a)(c),Object(o.a)(t)).filter((function(e,t,c){return c.indexOf(e)===t}));r(a)}},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"text-center py-5",children:Object(b.jsx)("div",{className:"capitalize text-center border border-black inline-block py-2 px-36 text-3xl font-medium",children:"pokedex"})}),Object(b.jsx)(v,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),s(e),n(e)}))};n.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.fc611b14.chunk.js.map