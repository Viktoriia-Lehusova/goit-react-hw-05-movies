"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{4146:function(n,e,t){t.d(e,{Z:function(){return m}});var r,a,c,i,u,o=t(7689),s=t(168),p=t(6444),l=t(1087),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 25px;\n  max-width: calc(100vw - 30px);\n\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=p.ZP.li(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),d=p.ZP.img(c||(c=(0,s.Z)(["\n  width: 300px;\n  height: 400px;\n\n  border-radius: 10px;\n"]))),g=(0,p.ZP)(l.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: #fdf0d5;\n\n  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:hover {\n    border-radius: 10px;\n    transform: scale(1.04);\n    box-shadow: 1px 4px 34px -4px rgba(187, 208, 255, 1);\n  }\n"]))),x=p.ZP.p(u||(u=(0,s.Z)(["\n  width: 300px;\n  height: 30px;\n\n  font-size: 16px;\n  line-height: 1.71;\n  letter-spacing: 0.03em;\n"]))),v=t(184),m=function(n){var e=n.movies,t=(0,o.TH)();return(0,v.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,a=n.name,c=n.poster_path;return(0,v.jsx)(h,{children:(0,v.jsxs)(g,{id:"".concat(e),state:{from:t},to:"/movies/".concat(e),children:[(0,v.jsx)(d,{src:"https://image.tmdb.org/t/p/w500"+c,alt:""}),(0,v.jsxs)(x,{children:[" ",null!==r&&void 0!==r?r:a]})]})},e)}))})}},9546:function(n,e,t){t.d(e,{Hx:function(){return h},Y5:function(){return l},_k:function(){return s},mv:function(){return p},uV:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243),u="https://api.themoviedb.org/3",o="0295bc0f580a974d57e0203ed698c033",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},9278:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),c=t(7757),i=t.n(c),u=t(2791),o=t(1087),s=t(9546),p=t(4146),l=t(3521),f=t(5880),h=t(1686),d=t.n(h),g=t(155),x=t(7398),v=t(184);e.default=function(){var n=(0,u.useState)(""),e=(0,a.Z)(n,2),t=e[0],c=e[1],h=(0,u.useState)([]),m=(0,a.Z)(h,2),y=m[0],w=m[1],Z=(0,o.lr)(),b=(0,a.Z)(Z,2),k=b[0],j=b[1],S=(0,u.useState)(!1),_=(0,a.Z)(S,2),P=_[0],z=_[1],U=(0,u.useState)(!1),q=(0,a.Z)(U,2),C=q[0],Q=q[1],F=(0,u.useState)(null),T=(0,a.Z)(F,2),X=T[0],G=T[1];(0,u.useEffect)((function(){if(null!==k.get("searchQuery")){var n=k.get("searchQuery");z(!0),function(){e.apply(this,arguments)}()}function e(){return(e=(0,r.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.mv)(n);case 3:t=e.sent,0===(r=t.results).length&&Q(!0),w(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(e.t0.message);case 12:return e.prev=12,z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}}),[k]);return(0,v.jsxs)("div",{children:[(0,v.jsxs)(g.Gq,{onSubmit:function(n){if(n.preventDefault(),""===t)return d().Notify.failure("Something went wrong."),void j({});j({searchQuery:t}),""!==t.trim()?c(""):d().Notify.failure("Something went wrong.")},children:[(0,v.jsx)(g.Fy,{type:"text",name:"searchQuery",value:t,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(n){c(n.target.value)}}),(0,v.jsx)(g.r,{type:"submit",children:(0,v.jsx)(f.lnn,{})})]}),y&&(0,v.jsx)(p.Z,{movies:y}),P&&(0,v.jsxs)(x.x,{children:[" ",(0,l.a)()," "]}),X&&(0,v.jsx)(g.X0,{children:"Something went wrong. Try again."}),C&&(0,v.jsx)(g.X0,{children:" Sorry. There are no movies by your query"})]})}},155:function(n,e,t){t.d(e,{Fy:function(){return l},Gq:function(){return p},X0:function(){return s},r:function(){return f}});var r,a,c,i,u=t(168),o=t(6444),s=o.ZP.h2(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 1.16;\n  letter-spacing: 0.03em;\n\n  color: #c1121f;\n"]))),p=o.ZP.form(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),l=o.ZP.input(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 400px;\n  height: 30px;\n\n  font-size: 26px;\n  line-height: 1.16;\n  letter-spacing: 0.03em;\n"]))),f=o.ZP.button(i||(i=(0,u.Z)(["\n  width: 40px;\n  height: 36px;\n\n  svg {\n    width: 22px;\n    height: 22px;\n  }\n"])))}}]);
//# sourceMappingURL=278.981e6465.chunk.js.map