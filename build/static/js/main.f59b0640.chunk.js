(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(19),i=n.n(c),r=(n(27),n(3)),l=(n(28),n(4)),s=n.n(l),u=n(5),v=n(6),d=n.n(v),p=(n(46),"https://api.themoviedb.org/3"),m="https://image.tmdb.org/t/p/original",g="4a6cbaa3b5a8f0808bcdd4b9861b8b5b",h={fetchTopRatedTVShow:"".concat(p,"/tv/top_rated?api_key=").concat(g,"&language=en-US"),fetchPopularTVShow:"".concat(p,"/tv/popular?api_key=").concat(g,"&language=en-US"),fetchPopularMovies:"".concat(p,"/movie/popular?api_key=").concat(g,"&language=en-US"),fetchTopRatedMovies:"".concat(p,"/movie/top_rated?api_key=").concat(g,"&language=en-US"),fetchUpComingMovies:"".concat(p,"/movie/upcoming?api_key=").concat(g,"&language=en-US"),fetchNowPlayingMovies:"".concat(p,"/movie/now_playing?api_key=").concat(g,"&language=en-US"),fetchTrending:"".concat(p,"/trending/all/week?api_key=").concat(g,"&language=en-US"),fetchNetflixOriginals:"".concat(p,"/discover/tv?api_key=").concat(g,"&with_networks=213"),fetchTopRated:"".concat(p,"/movie/top_rated?api_key=").concat(g,"&language=en-US"),fetchActionMovies:"".concat(p,"/discover/movie?api_key=").concat(g,"&with_genres=28"),fetchComedyMovies:"".concat(p,"/discover/movie?api_key=").concat(g,"&with_genres=35"),fetchHorrorMovies:"".concat(p,"/discover/movie?api_key=").concat(g,"&with_genres=27"),fetchRomanceMovies:"".concat(p,"/discover/movie?api_key=").concat(g,"&with_genres=10749"),fetchDocumentaries:"".concat(p,"/discover/movie?api_key=").concat(g,"&with_genres=99")},f=n(7),b=n(8),y=n.n(b);function w(e){var t=e.id,n=e.title,c=e.fetchUrl,i=e.isLargeRow,l=e.play,v=e.playingBy,p=e.onChange,g=Object(a.useState)([]),h=Object(r.a)(g,2),b=h[0],w=h[1],_=Object(a.useState)(""),E=Object(r.a)(_,2),k=E[0],O=E[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(c);case 2:return t=e.sent,w(t.data.results),console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"row_title"},o.a.createElement("h2",null,n)),o.a.createElement("div",{className:"row_posters"},b.map((function(e){return o.a.createElement("img",{key:e.id,className:"row_poster ".concat(i&&"row_poster_large"),src:"".concat(m).concat(i?null===e||void 0===e?void 0:e.poster_path:null===e||void 0===e?void 0:e.backdrop_path),alt:e.name,onClick:function(){return function(e){v!==t&&p(0,t),y()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)||"").then((function(e){var n=new URLSearchParams(new URL(e).search);n.get("v")===k?(O(""),p(t,t)):t===v?O(n.get("v")):(O(n.get("v")),p(t,t))})).catch((function(e){return console.log(e)}))}(e)}})}))),o.a.createElement("div",null,l&&k&&o.a.createElement(f.a,{videoId:k,opts:{width:"100%",height:"360px",playerVars:{autoplay:1}}})))}n(62);function _(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),v=l[0],p=l[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(h.fetchNowPlayingMovies).then((function(e){c(e.data.results[Math.floor(Math.random()*e.data.results.length-1)])}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g,b;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url(".concat(m).concat((null===n||void 0===n?void 0:n.backdrop_path)||(null===n||void 0===n?void 0:n.poster_path),")")}},o.a.createElement("div",{className:"banner_contents"},o.a.createElement("h1",{className:"banner_title"},(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.origin_name)||""),o.a.createElement("div",null,o.a.createElement("button",{className:"banner_buttons",onClick:function(){y()((null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.original_title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);t.get("v")===v?p(""):p(t.get("v"))})).catch((function(e){return console.log(e)}))}},""===v?"PLAY":"STOP"),o.a.createElement("button",{className:"banner_buttons"}," LIKE")),o.a.createElement("div",{className:"banner_description"},(g=(null===n||void 0===n?void 0:n.overview)||"",b=150,(null===g||void 0===g?void 0:g.length)>b?g.substr(0,b-1)+"...":g))),o.a.createElement("div",{className:"banner-fadebottom"})),v&&o.a.createElement(f.a,{videoId:v,opts:{width:"100%",playerVars:{autoplay:!0}}}))}n(63);function E(){var e=Object(a.useState)(Boolean),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),o.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},o.a.createElement("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix"}),o.a.createElement("button",{className:"nav_reg"},"SignIn"))}function k(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({1:!1,2:!1,3:!1,4:!1,5:!1}),l=Object(r.a)(i,2),s=l[0],u=l[1];function v(){u((function(){return{1:!1,2:!1,3:!1,4:!1,5:!1}}))}function d(e,t){0===e?(v(),c(e)):(v(),c(e),function(e){var t={1:!1,2:!1,3:!1,4:!1,5:!1};t[e]=!0,u(t)}(t))}return o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement(_,null),o.a.createElement(w,{id:"1",title:"Netflix Originals",fetchUrl:h.fetchNetflixOriginals,playingBy:n,play:s[1],onChange:d,isLargeRow:!0}),o.a.createElement(w,{id:"2",title:"Popular Movies",fetchUrl:h.fetchPopularMovies,playingBy:n,play:s[2],onChange:d}),o.a.createElement(w,{id:"3",title:"Upcoming Movies",fetchUrl:h.fetchUpComingMovies,playingBy:n,play:s[3],onChange:d}),o.a.createElement(w,{id:"4",title:"Action Movies",fetchUrl:h.fetchActionMovies,playingBy:n,play:s[4],onChange:d}),o.a.createElement(w,{id:"5",title:"Comedy Movies",fetchUrl:h.fetchComedyMovies,playingBy:n,play:s[5],onChange:d}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f59b0640.chunk.js.map