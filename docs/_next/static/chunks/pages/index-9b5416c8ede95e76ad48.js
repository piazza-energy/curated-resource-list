_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{AKss:function(e,t,n){e.exports={item:"bookmark-link_item__1vs2d"}},CafY:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("UbMB"),u=n.n(o),c=n("Iavw"),i=n("xI/i"),s=n.n(i),l=a.a.createElement,f=function(){return l("div",{className:s.a.header},l("div",{className:u()("pure-menu","pure-menu-horizontal","pure-menu-fixed",s.a.header__content)},l("div",{className:s.a.wrapper},l(c.a,{href:"/"},l("a",{className:"pure-menu-heading"},"Home")),l("ul",{className:"pure-menu-list"},l("li",{className:"pure-menu-item"},l(c.a,{href:"/about"},l("a",{className:"pure-menu-link"},"About")))))))},p=n("Tred"),h=n.n(p),d=a.a.createElement;t.a=function(e){return d("div",{className:h.a.background},d(f,null),d("div",{className:u()("pure-g",h.a.container)},e.children))}},Iavw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),u=n.n(o),c=a.a.createElement;t.a=function(e){var t="".concat("/curated-resource-list").concat(e.href),n=e.as?"".concat("/curated-resource-list").concat(e.as):t;return c(u.a,{href:t,as:n,passHref:e.passHref||!1,prefetch:e.prefetch||!1},e.children)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return _}));var r=n("q1tI"),a=n.n(r),o=n("CafY"),u=n("zHVU"),c=n("wx14");var i=n("tG10"),s=n("UbMB"),l=n.n(s),f=n("ezla"),p=n.n(f),h=a.a.createElement;function d(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){var t=e.bookmarks,n=Object(r.useState)(""),a=n[0],o=n[1],s=Object(r.useState)([]),f=s[0],v=s[1],m=Object(r.useState)(!1),g=m[0],_=m[1],y=function(e,t){var n=Object(r.useState)(e),a=n[0],o=n[1];return Object(r.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e]),a}(a,500);return Object(r.useEffect)((function(){y?(_(!0),function(e,t){return new Promise((function(n,r){var a;if(e.length>=3){var o={},s=0,l=new RegExp(e,"gi");for(var f in t){o[f]=[];var p,v=d(t[f]);try{for(v.s();!(p=v.n()).done;)for(var m=p.value,g=0,_=["title","description"];g<_.length;g++){if(m[_[g]].match(l)){o[f].push(m),s++;break}}}catch(y){v.e(y)}finally{v.f()}}a=h("div",null,h("p",null,"Your search for ",e," produced ",s," results"),Object.keys(o).map((function(e,t){return h("div",null,h("h2",null,"In ",h(u.a,{name:e})," - ",o[e].length," results"),o[e].map((function(e,n){return h(i.a,Object(c.a)({key:"".concat(t).concat(n)},e))})))})))}else a=h("p",null,"Type at least ",3," letters to trigger a search");n(a)}))}(y,t).then((function(e){_(!1),v(e)}))):v([])}),[y]),h("div",null,h("form",{className:l()(p.a.wrapper,"pure-form")},h("div",{className:"pure-u-1 pure-u-md-4-5"},h("input",{type:"text",placeholder:"Search",className:"pure-input-1",value:a,onChange:function(e){return o(e.target.value)}})),h("div",{className:"pure-u-1 pure-u-md-1-5"},h("button",{className:l()("pure-input-1","pure-button"),onClick:function(e){return o("")},disabled:a.length<3},"Clear Search"))),g&&h("div",null,"Searching ..."),f)},g=a.a.createElement,_=!0;t.default=function(e){var t=e.categories,n=e.bookmarks,r=e.tags;return g(o.a,null,g("div",{className:"pure-u-1"},g("h1",null,"Energy Piazza - Curated Resources List"),g("p",null,"This is a list of categorised resources for the sustainable energy sector.")),g("div",{className:"pure-u-1 pure-u-lg-1-2"},g("h2",null,"Categories"),g("ul",null,t.map((function(e,t){return g("li",{key:"cat_".concat(t)},g(u.a,{name:e}))})))),g("div",{className:"pure-u-1 pure-u-lg-1-2"},g("h2",null,"Tags"),Object.keys(r).sort().map((function(e,t){return g("span",{key:"tag_".concat(t)},g(u.b,{name:e,count:r[e].length}))}))),g("div",{className:"pure-u-1"},g(m,{bookmarks:n})))}},Tred:function(e,t,n){e.exports={background:"layout_background__1AVEa",container:"layout_container__2t4v2"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(this&&this[u]||u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,u=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function h(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=u.default.useState(),a=r(n,2),o=a[0],s=a[1],d=(0,i.useRouter)(),v=d&&d.pathname||"/",m=u.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),g=m.href,_=m.as;u.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!f[g+"%"+_])return p(o,(function(){h(d,g,_)}))}),[t,o,g,_,d]);var y=e.children,b=e.replace,w=e.shallow,k=e.scroll;"string"===typeof y&&(y=u.default.createElement("a",null,y));var N=u.Children.only(y),E={ref:function(e){e&&s(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,g,_,b,w,k)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),h(d,g,_,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(E.href=(0,c.addBasePath)(_)),u.default.cloneElement(N,E)};t.default=d},cl5U:function(e,t,n){e.exports={link:"nav-link_link__1omMK",cat:"nav-link_cat__jv7ss",tag:"nav-link_tag__3Y-j5"}},ezla:function(e,t,n){e.exports={wrapper:"search-engine_wrapper__1U5vs"}},tG10:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("zHVU"),u=n("AKss"),c=n.n(u),i=a.a.createElement;t.a=function(e){var t=e.url,n=e.title,r=e.description,a=e.tags,u=r.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'),s=a?i("p",null,a.map((function(e,t){return i("span",{key:"tag_".concat(t)},i(o.b,{name:e}))}))):"";return i("div",{className:"pure-u-1"},i("div",{className:c.a.item},i("h3",null,i("a",{href:t},n)),i("p",{dangerouslySetInnerHTML:{__html:u}}),s))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},"xI/i":function(e,t,n){e.exports={header:"header_header__3w6qi",wrapper:"header_wrapper__1H8Zk",header__content:"header_header__content__2j6Kb",right:"header_right__2qwzm"}},zHVU:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("Iavw"),u=n("UbMB"),c=n.n(u),i=n("cl5U"),s=n.n(i),l=a.a.createElement,f=function(e){var t=e.name;return l(o.a,{href:"/category/[name]",as:"/category/".concat(t)},l("a",{className:c()(s.a.link,s.a.cat)},t))},p=function(e){var t=e.name,n=e.count,r=void 0===n?0:n,a="".concat(t," ").concat(r>0?"(".concat(r,")"):"");return l(o.a,{href:"/tag/[name]",as:"/tag/".concat(t)},l("a",{className:c()(s.a.link,s.a.tag)},a))}}},[["vlRD",0,2,1]]]);