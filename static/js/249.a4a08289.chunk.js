"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[249],{1249:function(t,n,r){r.r(n),r.d(n,{default:function(){return Z}});var e,a,u=r(5861),c=r(9439),s=r(4687),o=r.n(s),i=r(2791),p=r(7689),f=r(4635),h=r(168),v=r(3237),l=v.Z.h2(e||(e=(0,h.Z)(["\n  margin-bottom: 5px;\n"]))),d=v.Z.p(a||(a=(0,h.Z)(["\n  margin-bottom: 10px;\n"]))),m=r(184),x=function(t){var n=t.author,r=t.content;return(0,m.jsxs)("li",{children:[(0,m.jsxs)(l,{children:["Author: ",n]}),(0,m.jsx)(d,{children:r})]})},w=function(t){var n=t.reviews;return 0===n.length?(0,m.jsx)("h2",{children:"No reviews for this movie."}):(0,m.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.author,e=t.content;return(0,m.jsx)(x,{author:r,content:e},n)}))})},Z=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),r=n[0],e=n[1],a=(0,p.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,u.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Hx)(a);case 3:n=t.sent,e(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[a]),(0,m.jsx)(w,{reviews:r})}},4635:function(t,n,r){r.d(n,{Gc:function(){return h},Hx:function(){return m},bI:function(){return p},uV:function(){return l},vw:function(){return o}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"193a1318aa83a5b49d1c16448163261b"});function o(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/trending/movie/day?".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/search/movie?".concat(s,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"?").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"/credits?").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"/reviews?").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=249.a4a08289.chunk.js.map