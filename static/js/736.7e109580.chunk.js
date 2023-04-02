"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,u,i,o=e(5861),s=e(9439),p=e(7757),l=e.n(p),h=e(9546),f=e(2791),g=e(7689),v=e(3521),d=e(7398),x=e(168),m=e(6444),w=m.ZP.ul(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  max-width: calc(100vw - 30px);\n\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=m.ZP.li(a||(a=(0,x.Z)(["\n  width: 180px;\n  height: 180px;\n\n  margin-right: 10px;\n  margin-bottom: 20px;\n"]))),k=m.ZP.img(c||(c=(0,x.Z)(["\n  width: 120px;\n  height: 150px;\n\n  border-radius: 10px;\n"]))),y=m.ZP.h2(u||(u=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.16;\n  letter-spacing: 0.03em;\n\n  width: 100px;\n\n  margin-bottom: 5px;\n\n  color: #bbd0ff;\n"]))),b=m.ZP.p(i||(i=(0,x.Z)(["\n  width: 200px;\n\n  font-size: 12px;\n  line-height: 1.71;\n  letter-spacing: 0.03em;\n\n  color: #1e6091;\n"]))),_=e(184),j=function(){var n=(0,g.UO)().movieId,t=(0,f.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(!1),u=(0,s.Z)(c,2),i=u[0],p=u[1],x=(0,f.useState)(!1),m=(0,s.Z)(x,2),j=m[0],S=m[1],P=(0,f.useState)(null),U=(0,s.Z)(P,2),z=U[0],C=U[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,o.Z)(l().mark((function t(){var e,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.next=4,(0,h.uV)(n);case 4:e=t.sent,0===(r=e.cast).length&&S(!0),a(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),C(t.t0.message);case 13:return t.prev=13,p(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,_.jsxs)("div",{children:[i&&(0,_.jsxs)(d.x,{children:[" ",(0,v.a)()," "]}),(0,_.jsx)(w,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,_.jsxs)(Z,{children:[(0,_.jsx)(k,{src:"https://image.tmdb.org/t/p/w500"+e,alt:""}),(0,_.jsx)(y,{children:r}),(0,_.jsx)(b,{children:a})]},t)}))}),z&&(0,_.jsx)("h2",{children:"Something went wrong. Try again."}),j&&(0,_.jsx)("h1",{children:" Sorry, we dont have this information."})]})}},9546:function(n,t,e){e.d(t,{Hx:function(){return f},Y5:function(){return l},_k:function(){return s},mv:function(){return p},uV:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3",o="0295bc0f580a974d57e0203ed698c033",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.7e109580.chunk.js.map