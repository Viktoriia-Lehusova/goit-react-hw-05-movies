"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{546:function(e,n,r){r.d(n,{Hx:function(){return d},Y5:function(){return p},_k:function(){return o},mv:function(){return l},uV:function(){return v}});var t=r(861),a=r(757),c=r.n(a),s=r(243),u="https://api.themoviedb.org/3",i="0295bc0f580a974d57e0203ed698c033",o=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},724:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),i=r(87),o=r(689),l=r(546),p=r(154),v=r(184),d=function(e){var n=e.movie,r=e.genres;return(0,v.jsxs)("div",{id:n.id,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+n.poster_path,alt:n.name})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:n.title}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*n.vote_average),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:n.overview}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("ul",{children:r&&r.map((function(e){var n=e.id,r=e.name;return(0,v.jsx)("li",{children:r},n)}))})]}),(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("div",{children:(0,p.a)()}),children:(0,v.jsx)(o.j3,{})})]})},h=function(){var e,n,r=(0,o.TH)(),c=(0,u.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),h=(0,o.UO)().movieId,f=(0,u.useState)([]),x=(0,a.Z)(f,2),g=x[0],m=x[1],j=(0,u.useState)(!1),w=(0,a.Z)(j,2),k=w[0],y=w[1],Z=(0,u.useState)(!1),b=(0,a.Z)(Z,2),_=b[0],S=b[1],U=(0,u.useState)(null),C=(0,a.Z)(U,2),T=C[0],q=C[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,l.Y5)(h);case 4:0===(n=e.sent).length&&S(!0),m(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),q(e.t0.message);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,v.jsxs)("div",{children:[k&&(0,v.jsxs)("div",{children:[" ",(0,p.a)()," "]}),(0,v.jsx)(i.rU,{to:c.current,children:"Go back"}),(0,v.jsx)(d,{movie:g,genres:g.genres}),";",T&&(0,v.jsx)("h2",{children:"Something went wrong. Try again."}),_&&(0,v.jsx)("h1",{children:" Sorry. There are no movies by your query"})]})}}}]);
//# sourceMappingURL=724.9450c23b.chunk.js.map