/*! For license information please see index.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{AKss:function(e,t,n){e.exports={item:"bookmark-link_item__1vs2d"}},CafY:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("UbMB"),i=n.n(o),u=n("Iavw"),c=n("xI/i"),s=n.n(c),l=a.a.createElement,f=function(){return l("div",{className:s.a.header},l("div",{className:i()("pure-menu","pure-menu-horizontal","pure-menu-fixed",s.a.header__content)},l(u.a,{href:"/"},l("a",{className:"pure-menu-heading"},"Home")),l("ul",{className:"pure-menu-list"},l("li",{className:"pure-menu-item"},l(u.a,{href:"/about"},l("a",{className:"pure-menu-link"},"About"))))))},p=n("Tred"),h=n.n(p),v=a.a.createElement;t.a=function(e){return v("div",null,v(f,null),v("div",{className:i()("pure-g",h.a.container)},e.children))}},Iavw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),u=a.a.createElement;t.a=function(e){var t="".concat("/curated-resource-list").concat(e.href),n=e.as?"".concat("/curated-resource-list").concat(e.as):t;return u(i.a,{href:t,as:n,passHref:e.passHref||!1,prefetch:e.prefetch||!1},e.children)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d}));var r=n("q1tI"),a=n.n(r),o=n("CafY"),i=n("zHVU"),u=n("wx14");var c=n("tG10"),s=a.a.createElement;function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=3;var h=function(e){var t=e.bookmarks,n=Object(r.useState)(""),a=n[0],o=n[1],f=Object(r.useState)([]),h=f[0],v=f[1],d=Object(r.useState)(!1),m=d[0],g=d[1],y=function(e,t){var n=Object(r.useState)(e),a=n[0],o=n[1];return Object(r.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e]),a}(a,500);return Object(r.useEffect)((function(){y?(g(!0),function(e,t){return new Promise((function(n,r){var a;if(e.length>=p){var o={},f=0,h=new RegExp(e,"gi");for(var v in t){o[v]=[];var d,m=l(t[v]);try{for(m.s();!(d=m.n()).done;)for(var g=d.value,y=0,b=["title","description"];y<b.length;y++){if(g[b[y]].match(h)){o[v].push(g),f++;break}}}catch(_){m.e(_)}finally{m.f()}}a=s("div",null,s("p",null,"Your search for ",e," produced ",f," results"),Object.keys(o).map((function(e,t){return s("div",null,s("h2",null,"In ",s(i.a,{name:e})," - ",o[e].length," results"),o[e].map((function(e,n){return s(c.a,Object(u.a)({key:"".concat(t).concat(n)},e))})))})))}else a=s("p",null,"Type at least ",p," letters to trigger a search");n(a)}))}(y,t).then((function(e){g(!1),v(e)}))):v([])}),[y]),s("div",null,s("form",{className:"pure-form"},s("input",{type:"text",placeholder:"Search",value:a,onChange:function(e){return o(e.target.value)}}),s("button",{className:"pure-button",onClick:function(e){return o("")},disabled:a.length<p},"Clear Search")),m&&s("div",null,"Searching ..."),h)},v=a.a.createElement,d=!0;t.default=function(e){var t=e.categories,n=e.bookmarks,r=e.tags;return v(o.a,null,v("div",{className:"pure-u-1"},v("h1",null,"Energy Piazza"),v("h2",null,"Curated Resources List"),v("p",null,"This is a list of categorised resources for the sustainable energy sector.")),v("div",{className:"pure-u-1 pure-u-lg-1-2"},v("p",null,"All links in this website falling in one of the following categories:"),v("ul",null,t.map((function(e,t){return v("li",{key:"cat_".concat(t)},v(i.a,{name:e}))})))),v("div",{className:"pure-u-1 pure-u-lg-1-2"},v("p",null,"Links have also been tagged as follows:"),Object.keys(r).map((function(e,t){return v("span",{key:"tag_".concat(t)},v(i.b,{name:e,count:r[e].length}))}))),v("div",{className:"pure-u-1"},v(h,{bookmarks:n})))}},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=s(n("nOHt")),m=n("elyg");function g(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,_={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){o(n,e);var t=c(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(g(e)),as:t?(0,m.addBasePath)(g(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,u=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),u=u?(0,h.resolve)(c,u):i,e.preventDefault();var s=a.props.scroll;null==s&&(s=u.indexOf("#")<0),d.default[a.props.replace?"replace":"push"](i,u,{shallow:a.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,h.resolve)(e,n);return[a,r?(0,h.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),_[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),_[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),n}(p.Component);t.default=k},cl5U:function(e,t,n){e.exports={link:"nav-link_link__1omMK",cat:"nav-link_cat__jv7ss",tag:"nav-link_tag__3Y-j5"}},"m0L+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},tG10:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("zHVU"),i=n("AKss"),u=n.n(i),c=a.a.createElement;t.a=function(e){var t=e.url,n=e.title,r=e.description,a=e.tags,i=r.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'),s=a?c("p",null,a.map((function(e,t){return c("span",{key:"tag_".concat(t)},c(o.b,{name:e}))}))):"";return c("div",{className:"pure-u-1"},c("div",{className:u.a.item},c("h3",null,c("a",{href:t},n)),c("p",{dangerouslySetInnerHTML:{__html:i}}),s))}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},"xI/i":function(e,t,n){e.exports={header:"header_header__3w6qi",header__content:"header_header__content__2j6Kb",right:"header_right__2qwzm"}},zHVU:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("Iavw"),i=n("UbMB"),u=n.n(i),c=n("cl5U"),s=n.n(c),l=a.a.createElement,f=function(e){var t=e.name;return l(o.a,{href:"/category/[name]",as:"/category/".concat(t)},l("a",{className:u()(s.a.link,s.a.cat)},t))},p=function(e){var t=e.name,n=e.count,r=void 0===n?0:n,a="".concat(t," ").concat(r>0?"(".concat(r,")"):"");return l(o.a,{href:"/tag/[name]",as:"/tag/".concat(t)},l("a",{className:u()(s.a.link,s.a.tag)},a))}}},[["m0L+",0,2,1]]]);