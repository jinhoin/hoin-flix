(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/404.fbe3c4c0.jpg"},44:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),o=n.n(i),l=n(10),u=n(11),c=n(13),s=n(12),p=n(14),d=n(18),m=n(17),f=n(2),g=n(1);function v(){var e=Object(f.a)(["\n    height: 50px;\n    display: flex;\n    align-items : center;\n"]);return v=function(){return e},e}function h(){var e=Object(f.a)(["\n    width : 80px;\n    height: 50px;\n    text-align : center;\n    display : flex;\n    justify-content : center;\n    align-items : center;\n    \n    border-bottom : 5px solid \n    ",";\n\n    transition: border-bottom  0.5s ease-in-out;\n    /* &:not(last-child){\n    margin-right: 10px;\n    } */\n"]);return h=function(){return e},e}function b(){var e=Object(f.a)(["\n    display:flex;\n "]);return b=function(){return e},e}function x(){var e=Object(f.a)(["\n    color: white;\n    position : fixed;\n    top : 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display:flex;\n    align-items: center;\n    padding : 0px 10px;\n    z-index : 10;\n    box-shadow : 0px 1px 5px 2px rgba(0,0,0,0.8);\n      background-color: rgba(20, 20, 20, 0.8);\n\n"]);return x=function(){return e},e}var E=g.default.header(x()),y=g.default.ul(b()),j=g.default.li(h(),function(e){return e.current?"#3498db":"transparent"}),w=Object(g.default)(d.b)(v()),O=Object(m.f)(function(e){var t=e.location.pathname;return r.a.createElement(E,null,r.a.createElement(y,null,r.a.createElement(j,{current:"/"===t},r.a.createElement(w,{to:"/"},"Home")),r.a.createElement(j,{current:"/TV"===t},r.a.createElement(w,{to:"/TV"},"TV")),r.a.createElement(j,{current:"/Search"===t},r.a.createElement(w,{to:"/Search"},"Search"))))}),_=n(6),k=n.n(_),T=n(16),R=n(3),S=n.n(R);function z(){var e=Object(f.a)(["\n    margin-top:20px;\n    display: grid;\n\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]);return z=function(){return e},e}function C(){var e=Object(f.a)(["\n    font-size: 14px;\n    font-weight: 600;\n"]);return C=function(){return e},e}function U(){var e=Object(f.a)(["\n  :not(:last-child) {\n     margin-bottom:20px;\n  }\n"]);return U=function(){return e},e}var M=g.default.section(U()),P=g.default.span(C()),D=g.default.div(z()),F=function(e){var t=e.title,n=e.children;return r.a.createElement(M,null,r.a.createElement(P,null,t,"  "),r.a.createElement(D,null,n," "))};function I(){var e=Object(f.a)(["\n    width : 100vw;\n    height: 100vh;\n    display : flex;\n    justify-content : center;\n    font-size: 32px;\n    margin-top:20px;\n"]);return I=function(){return e},e}var q=g.default.div(I()),V=function(){return r.a.createElement(q,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function H(){var e=Object(f.a)(["\n        color: ",";\n        font-weight : bold;\n"]);return H=function(){return e},e}function A(){var e=Object(f.a)(["\n    width: 100vw;\n    display:flex;\n    justify-content:center;\n    /* align-items: center; */\n"]);return A=function(){return e},e}var N=g.default.div(A()),B=g.default.span(H(),function(e){return e.color}),L=function(e){var t=e.text,n=e.color;return r.a.createElement(N,null,r.a.createElement(B,{color:n},t))};function J(){var e=Object(f.a)(["\n    font-size : 10px;\n    color : rgba(255, 255, 255, 0.5);\n"]);return J=function(){return e},e}function G(){var e=Object(f.a)(["\n    display : block;\n    font-size : 12px;\n    margin-bottom : 3px;\n\n"]);return G=function(){return e},e}function K(){var e=Object(f.a)(["\n    margin-bottom : 5px;\n    position : relative;\n    &:hover {\n        ","{\n         opacity : 0.3;\n        }\n        ","{\n            opacity : 1;\n        }\n    }\n"]);return K=function(){return e},e}function Q(){var e=Object(f.a)(["\n    position : absolute;\n    bottom : 10px;\n    right : 2px;\n    opacity : 0.3;\n    transition : opacity 0.3s linear;\n\n"]);return Q=function(){return e},e}function W(){var e=Object(f.a)(["\n    background-image: url(",");\n    /* width:100px; */\n    background-size: cover;\n    height: 180px;\n    background-position : center center;\n    border-radius : 4px;\n    transition : opacity 0.3s linear;\n"]);return W=function(){return e},e}function X(){var e=Object(f.a)(["\n    font-size:12px;\n"]);return X=function(){return e},e}var Y=g.default.div(X()),Z=g.default.div(W(),function(e){return e.bgUrl}),$=g.default.span(Q()),ee=g.default.div(K(),Z,$),te=g.default.div(G()),ne=g.default.span(J()),ae=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(d.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(Y,null,r.a.createElement(ee,null,r.a.createElement(Z,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(29)}),r.a.createElement($,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f"," ",o,"/10"))),r.a.createElement(te,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(ne,null,l)))},re=n(15),ie=n.n(re);function oe(){var e=Object(f.a)(["\n  padding : 20px;\n\n"]);return oe=function(){return e},e}var le=g.default.div(oe()),ue=function(e){var t=e.popular,n=e.nowPlaying,a=e.upComing,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement("title",null,"Movies | HoinFlix")),o?r.a.createElement(V,null):r.a.createElement(le,null,a&&a.length>0&&r.a.createElement(F,{title:"upComing Movie"},a.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(F,{title:"Now Playing"},n.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),t&&t.length>0&&r.a.createElement(F,{title:"popular Movie"},t.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),i&&r.a.createElement(L,{color:"#e74c3c",text:i})),";")};ue.propTpyes={popular:S.a.array,nowPlaying:S.a.array,upComing:S.a.array,loading:S.a.bool.isRequired,error:S.a.string};var ce=ue,se=n(41),pe=n.n(se).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"en-US"}}),de={nowPlaying:function(){return pe.get("movie/now_playing")},upcoming:function(){return pe.get("movie/upcoming")},popular:function(){return pe.get("movie/popular")},movieDetail:function(e){return pe.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return pe.get("search/movie",{params:{query:encodeURIComponent(e)}})}},me={topRated:function(){return pe.get("tv/top_rated")},popular:function(){return pe.get("tv/popular")},airingToday:function(){return pe.get("tv/airing_today")},showDetail:function(e){return pe.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return pe.get("search/tv",{params:{query:encodeURIComponent(e)}})}},fe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(T.a)(k.a.mark(function e(){var t,n,a,r,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,de.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,de.popular();case 11:i=e.sent,o=i.data.results,this.setState({popular:o,nowPlaying:n,upComing:r}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:" Cant't find movies infomation."}),console.log(e.t0);case 20:return e.prev=20,this.setState({loading:!1}),e.finish(20);case 23:case"end":return e.stop()}},e,this,[[0,16,20,23]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,a=e.popular,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(ce,{nowPlaying:t,upComing:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function ge(){var e=Object(f.a)(["\n  padding: 0px 20px;\n"]);return ge=function(){return e},e}var ve=g.default.div(ge()),he=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement("title",null,"TV | HoinFlix")),i?r.a.createElement(V,null):r.a.createElement(ve,null,t&&t.length>0&&r.a.createElement(F,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(F,{title:"Popular Shows"},n.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4),isShow:!0})})),a&&a.length>0&&r.a.createElement(F,{title:"Airing Today"},a.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(L,{color:"#e74c3c",text:o})),";")},be=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,showDetail:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(T.a)(k.a.mark(function e(){var t,n,a,r,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,me.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,me.airingToday();case 11:i=e.sent,o=i.data.results,console.log(n),console.log(r),this.setState({topRated:n,popular:r,airingToday:o}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),this.setState({error:"error mounted"});case 21:return e.prev=21,this.setState({loading:!1}),e.finish(21);case 24:case"end":return e.stop()}},e,this,[[0,18,21,24]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return console.log("[TVContainer ]",this.state),r.a.createElement(he,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),t}(r.a.Component);function xe(){var e=Object(f.a)(["\n   all : unset;\n   font-size: 23px;\n   width: 100%;\n "]);return xe=function(){return e},e}function Ee(){var e=Object(f.a)(["\n   margin-bottom: 50px;\n   width: 100%;\n "]);return Ee=function(){return e},e}function ye(){var e=Object(f.a)(["\n   padding: 20px  20px;\n "]);return ye=function(){return e},e}var je=g.default.div(ye()),we=g.default.form(Ee()),Oe=g.default.input(xe()),_e=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading,l=e.handleSubmit,u=e.updateTerm;return r.a.createElement(je,null,r.a.createElement(ie.a,null,r.a.createElement("title",null,"Search | Hoinflix ")),r.a.createElement(we,{onSubmit:l},r.a.createElement(Oe,{placeholder:"Search Movies or TV shows ...",value:a,onChange:u})),o?r.a.createElement(V,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(F,{title:"movie Result"},t.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.realese_data&&e.realese_data.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(F,{title:"tv Results "},n.map(function(e){return r.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4),isShow:!0})})),i&&r.a.createElement(L,{color:"#e74c3c",text:i}),t&&0===t.length&&n&&0===n.length&&r.a.createElement(L,{color:"#95a5a6",text:"Nothing found for : ".concat(a)})))};_e.propTpyes={movieResults:S.a.array,tvResults:S.a.array,upcoming:S.a.array,searchTerm:S.a.func.isRequired,updateTerm:S.a.func.isRequired,loading:S.a.bool.isRequired,error:S.a.string,handleSubmit:S.a.func.isRequired};var ke=_e,Te=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,error:null,searchTerm:"",loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(T.a)(k.a.mark(function e(){var t,a,r,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,e.prev=1,e.next=4,de.search(t);case 4:return a=e.sent,r=a.data.results,e.next=8,me.search(t);case 8:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.setState({error:"Cant't find results."});case 16:return e.prev=16,n.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}},e,null,[[1,13,16,19]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return r.a.createElement(ke,{movieResults:t,tvResults:n,searchTerm:a,error:o,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function Re(){var e=Object(f.a)(["\n    width: 90%;\n    height: 80%;\n    border: 1px solid red;\n"]);return Re=function(){return e},e}function Se(){var e=Object(f.a)(["\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    color: red;\n    opacity: 1;\n    font-weight: bold;\n    font-size: 15px;\n"]);return Se=function(){return e},e}function ze(){var e=Object(f.a)(["\n    width: 80%;\n    height: 20%;\n    /* border: 1px solid white; */\n    background-color: white;\n    opacity: 0.3;\n    position: relative;\n    border-radius: 12px;\n    margin-top: 10px;\n    \n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(f.a)(["\n    margin : 0;\n"]);return Ce=function(){return e},e}function Ue(){var e=Object(f.a)(["\n    font-size: 12px;\n    opacity : 0.7;\n    line-height: 1.5;\n    width : 50%;\n"]);return Ue=function(){return e},e}function Me(){var e=Object(f.a)(["\n    padding-right : 5px;\n"]);return Me=function(){return e},e}function Pe(){var e=Object(f.a)(["\nmargin-bottom: 20px;\n"]);return Pe=function(){return e},e}function De(){var e=Object(f.a)(["\n    font-size : 32px;\n    /* color : white; */\n    margin-bottom : 10px;\n"]);return De=function(){return e},e}function Fe(){var e=Object(f.a)(["\n    width : 70%;\n    margin-left : 10px;\n\n\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(f.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  z-index: 1;\n  border-radius: 5px;\n"]);return Ie=function(){return e},e}function qe(){var e=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return qe=function(){return e},e}function Ve(){var e=Object(f.a)(["\n    position : absolute;\n    top : 0;\n    left: 0;\n    width  : 100%;\n    height : 100%;\n    background-image : url(",");\n    background-position : center center;\n    background-size : cover;\n    filter : blur(2px);\n    opacity : 0.5;\n    z-index : 0;\n"]);return Ve=function(){return e},e}function He(){var e=Object(f.a)(["\n    height : calc(100vh - 50px);\n    width : 100%;\n   position : relative;\n    padding: 50px;\n\n"]);return He=function(){return e},e}var Ae=g.default.div(He()),Ne=g.default.div(Ve(),function(e){return e.bgImage}),Be=g.default.div(qe()),Le=g.default.div(Ie(),function(e){return e.bgImage}),Je=g.default.div(Fe()),Ge=g.default.div(De()),Ke=g.default.div(Pe()),Qe=g.default.span(Me()),We=g.default.p(Ue()),Xe=g.default.span(Ce()),Ye=g.default.div(ze()),Ze=g.default.span(Se()),$e=g.default.ul(Re()),et=function(e){var t=e.result,a=e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement("title",null,"Loading | HoinFlix")),r.a.createElement(V,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null,r.a.createElement(ie.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | hoinflix ")),r.a.createElement(Ne,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Be,null,r.a.createElement(Le,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),r.a.createElement(Je,null,r.a.createElement(Ge,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ke,null,r.a.createElement(Qe,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Xe,null," * "),r.a.createElement(Qe,null,t.runtime?t.runtime:t.episode_run_time[0]),r.a.createElement(Qe,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?"".concat(e.name):"".concat(e.name," /")}))),r.a.createElement(We,null,t.overview?t.overview:"".concat(t.overview,"\ub97c \ubabb\ucc3e\uc558\uc2b5\ub2c8\ub2e4")),r.a.createElement(Ye,null,r.a.createElement(Ze,null,"Production Compaines"),r.a.createElement($e,null))))),a&&r.a.createElement(L,{color:"#e74c3c",text:a}))},tt=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(T.a)(k.a.mark(function e(){var t,n,a,r,i,o,l,u;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,de.movieDetail(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,me.showDetail(i);case 16:u=e.sent,o=u.data;case 18:console.log(o),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),this.setState({error:"can' note find anything "});case 24:return e.prev=24,this.setState({loading:!1,result:o}),e.finish(24);case 27:case"end":return e.stop()}},e,this,[[6,21,24,27]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return console.log("result",t),r.a.createElement(et,{result:t,error:n,loading:a})}}]),t}(r.a.Component),nt=function(){return r.a.createElement(d.a,null,r.a.createElement(O,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:fe}),r.a.createElement(m.b,{path:"/tv",component:be})," ",r.a.createElement(m.b,{path:"/search",component:Te}),r.a.createElement(m.b,{path:"/movie/:id/",component:tt}),r.a.createElement(m.b,{path:"/show/:id/",component:tt}),r.a.createElement(m.a,{from:"*",to:"/"})))},at=n(42),rt=n.n(at);function it(){var e=Object(f.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color: white;\n    }\n\n    *{\n        box-sizing:border-box;\n\n    }\n    body{\n        /* font-family : */\n        font-size:14px;\n        background-color : black;\n        color: white;\n        opacity: 0.9;\n        padding-top:50px;\n\n    }\n\n  "]);return it=function(){return e},e}var ot=Object(g.createGlobalStyle)(it(),rt.a),lt=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(ot,null))}}]),t}(a.Component);o.a.render(r.a.createElement(lt,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9860470d.chunk.js.map