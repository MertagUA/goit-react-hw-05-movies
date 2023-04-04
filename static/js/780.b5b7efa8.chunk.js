"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[780,280],{6280:function(t,n,r){r.r(n);var e=r(184);n.default=function(){return(0,e.jsx)("h2",{children:"Page not found!"})}},8909:function(t,n,r){r.d(n,{O:function(){return x}});var e,a,c,u=r(1087),o=r(168),i=r(3237),s=r(3622),p=i.Z.li(e||(e=(0,o.Z)(["\n  width: 300px;\n  text-align: center;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: ",";\n  transition: scale 200ms linear;\n  &:hover {\n    scale: 1.05;\n  }\n"])),s.r.boxShadow),f=i.Z.p(a||(a=(0,o.Z)(["\n  font-size: 20px;\n  padding: 10px 0;\n"]))),l=r(184),d=function(t){var n=t.title,r=t.id,e=t.poster,a=t.location;return(0,l.jsx)(p,{children:(0,l.jsxs)(u.rU,{to:"/movies/".concat(r),state:{from:a},children:[(0,l.jsx)("img",{src:e,alt:n}),(0,l.jsx)(f,{children:n})]})})},h=i.Z.ul(c||(c=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 25px;\n"]))),x=function(t){var n=t.movies,r=t.location;return(0,l.jsx)(h,{children:n.map((function(t){var n=t.id,e=t.title,a=t.poster_path,c=a?"https://image.tmdb.org/t/p/w300/".concat(a):"https://cdn.pixabay.com/photo/2016/01/20/18/35/x-1152114_960_720.png";return(0,l.jsx)(d,{title:e,id:n,poster:c,location:r},n)}))})}},8780:function(t,n,r){r.r(n),r.d(n,{default:function(){return I}});var e,a,c=r(5861),u=r(9439),o=r(4687),i=r.n(o),s=r(2791),p=r(8909),f=r(168),l=r(3237),d=r(3622),h=l.Z.input(e||(e=(0,f.Z)(["\n  width: 500px;\n  height: 40px;\n  border-radius: 10px;\n  font-size: 20px;\n"]))),x=l.Z.button(a||(a=(0,f.Z)(["\n  width: 100px;\n  height: 40px;\n  font-size: 20px;\n  border-radius: 10px;\n  margin-left: 10px;\n  background-color: ",";\n  box-shadow: ",";\n"])),d.r.color.teal,d.r.boxShadow),v=r(184),m=function(t){var n=t.onFormSubmit;return(0,v.jsxs)("form",{onSubmit:n,children:[(0,v.jsx)(h,{type:"text",name:"searchInput"}),(0,v.jsx)(x,{type:"submit",children:"Search"})]})},b=r(4635),w=r(1087),Z=r(7689),g=r(4138),y=r(6280),j="idle",k="pending",S="resolved",_="rejected",I=function(){var t,n=(0,s.useState)([]),r=(0,u.Z)(n,2),e=r[0],a=r[1],o=(0,w.lr)(),f=(0,u.Z)(o,2),l=f[0],d=f[1],h=(0,s.useState)(j),x=(0,u.Z)(h,2),I=x[0],q=x[1],z=(0,Z.TH)(),F=null!==(t=l.get("query"))&&void 0!==t?t:"";return(0,s.useEffect)((function(){if(F){var t=function(){var t=(0,c.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,q(k),t.next=4,(0,b.bI)(F);case 4:n=t.sent,a(n),q(S),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),q(_),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}}),[F]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{onFormSubmit:function(t){var n=t.target;t.preventDefault(),d({query:n.elements.searchInput.value}),n.reset()}}),(0,v.jsx)(p.O,{movies:e,location:z}),0===e.length&&I===S&&(0,v.jsx)(y.default,{}),I===k&&(0,v.jsx)(g.a,{})]})}},4635:function(t,n,r){r.d(n,{Gc:function(){return l},Hx:function(){return v},bI:function(){return p},uV:function(){return h},vw:function(){return i}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({api_key:"193a1318aa83a5b49d1c16448163261b"});function i(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("/trending/movie/day?".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("/search/movie?".concat(o,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("/movie/".concat(n,"?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("/movie/".concat(n,"/credits?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("/movie/".concat(n,"/reviews?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=780.b5b7efa8.chunk.js.map