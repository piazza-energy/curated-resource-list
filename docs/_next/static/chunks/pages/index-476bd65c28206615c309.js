_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{AKss:function(e,t,n){e.exports={item:"bookmark-link_item__1vs2d"}},CafY:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("UbMB"),u=n.n(o),c=n("Iavw"),i=n("xI/i"),s=n.n(i),l=a.a.createElement,f=function(){return l("div",{className:s.a.header},l("div",{className:u()("pure-menu","pure-menu-horizontal","pure-menu-fixed",s.a.header__content)},l("div",{className:s.a.wrapper},l(c.a,{href:"/"},l("a",{className:"pure-menu-heading"},"Home")),l("ul",{className:"pure-menu-list"},l("li",{className:"pure-menu-item"},l(c.a,{href:"/about"},l("a",{className:"pure-menu-link"},"About")))))))},p=n("Tred"),h=n.n(p),d=a.a.createElement;t.a=function(e){return d("div",{className:h.a.background},d(f,null),d("div",{className:u()("pure-g",h.a.container)},e.children))}},Iavw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),u=n.n(o),c=a.a.createElement;t.a=function(e){var t="".concat("/curated-resource-list").concat(e.href),n=e.as?"".concat("/curated-resource-list").concat(e.as):t;return c(u.a,{href:t,as:n,passHref:e.passHref||!1,prefetch:e.prefetch||!1},e.children)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return g}));var r=n("q1tI"),a=n.n(r),o=n("CafY"),u=n("zHVU");var c=n("tG10"),i=n("UbMB"),s=n.n(i),l=n("ezla"),f=n.n(l),p=a.a.createElement;function h(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(e){var t=e.bookmarks,n=Object(r.useState)(""),a=n[0],o=n[1],i=Object(r.useState)([]),l=i[0],d=i[1],v=Object(r.useState)(!1),m=v[0],g=v[1],_=function(e,t){var n=Object(r.useState)(e),a=n[0],o=n[1];return Object(r.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e]),a}(a,500);return Object(r.useEffect)((function(){_?(g(!0),function(e,t){var n=function(e,t){var n,r=e.length,a=0,o=h(t);try{for(o.s();!(n=o.n()).done;){a+=r/n.value.length}}catch(u){o.e(u)}finally{o.f()}return a};return new Promise((function(r,a){var o;if(e.length>=3){var i=[],s=new RegExp("\\b"+e+".*?\\b","gi");for(var l in t){var d,v=h(t[l]);try{for(v.s();!(d=v.n()).done;){var m=d.value,g=m.title.match(s),_=m.description.match(s),y=0,b=!1;g&&(y+=10*n(e,g),b=!0),_&&(y+=n(e,_),b=!0),b&&i.push(Object.assign({cat:l,weight:y},m))}}catch(w){v.e(w)}finally{v.f()}}i.sort((function(e,t){return e.weight>=t.weight?-1:1})),o=p("div",null,p("p",null,"Your search for ",e," produced ",i.length," results"),i.map((function(e,t){return p("div",{className:f.a.wrapper,key:t},"In category ",p(u.a,{name:e.cat}),p(c.a,e))})))}else o=p("p",null,"Type at least ",3," letters to trigger a search");r(o)}))}(_,t).then((function(e){g(!1),d(e)}))):d([])}),[_]),p("div",null,p("form",{className:s()(f.a.wrapper,"pure-form")},p("div",{className:"pure-u-1 pure-u-md-4-5"},p("input",{type:"text",placeholder:"Search",className:"pure-input-1",value:a,onChange:function(e){return o(e.target.value)}})),p("div",{className:"pure-u-1 pure-u-md-1-5"},p("button",{className:s()("pure-input-1","pure-button"),onClick:function(e){return o("")},disabled:a.length<3},"Clear Search"))),m&&p("div",null,"Searching ..."),l)},m=a.a.createElement,g=!0;t.default=function(e){var t=e.categories,n=e.bookmarks,r=e.tags;return m(o.a,null,m("div",{className:"pure-u-1"},m("h1",null,"Energy Piazza - Curated Resources List"),m("p",null,"This is a list of categorised resources for the sustainable energy sector.")),m("div",{className:"pure-u-1 pure-u-lg-1-2"},m("h2",null,"Categories"),m("ul",null,t.map((function(e,t){return m("li",{key:"cat_".concat(t)},m(u.a,{name:e}))})))),m("div",{className:"pure-u-1 pure-u-lg-1-2"},m("h2",null,"Tags"),Object.keys(r).sort().map((function(e,t){return m("span",{key:"tag_".concat(t)},m(u.b,{name:e,count:r[e].length}))}))),m("div",{className:"pure-u-1"},m(v,{bookmarks:n})))}},Tred:function(e,t,n){e.exports={background:"layout_background__1AVEa",container:"layout_container__2t4v2"}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(this&&this[u]||u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,u=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function h(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=u.default.useState(),a=r(n,2),o=a[0],s=a[1],d=(0,i.useRouter)(),v=d&&d.pathname||"/",m=u.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),g=m.href,_=m.as;u.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!f[g+"%"+_])return p(o,(function(){h(d,g,_)}))}),[t,o,g,_,d]);var y=e.children,b=e.replace,w=e.shallow,N=e.scroll;"string"===typeof y&&(y=u.default.createElement("a",null,y));var k=u.Children.only(y),E={ref:function(e){e&&s(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,g,_,b,w,N)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),h(d,g,_,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(_,d&&d.locale,d&&d.defaultLocale))),u.default.cloneElement(k,E)};t.default=d},cl5U:function(e,t,n){e.exports={link:"nav-link_link__1omMK",cat:"nav-link_cat__jv7ss",tag:"nav-link_tag__3Y-j5"}},ezla:function(e,t,n){e.exports={wrapper:"search-engine_wrapper__1U5vs"}},tG10:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("zHVU"),u=n("AKss"),c=n.n(u),i=a.a.createElement;t.a=function(e){var t=e.url,n=e.title,r=e.description,a=e.tags,u=r.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'),s=a?i("p",null,a.map((function(e,t){return i("span",{key:"tag_".concat(t)},i(o.b,{name:e}))}))):"";return i("div",{className:"pure-u-1"},i("div",{className:c.a.item},i("h3",null,i("a",{href:t},n)),i("p",{dangerouslySetInnerHTML:{__html:u}}),s))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"xI/i":function(e,t,n){e.exports={header:"header_header__3w6qi",wrapper:"header_wrapper__1H8Zk",header__content:"header_header__content__2j6Kb",right:"header_right__2qwzm"}},zHVU:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("Iavw"),u=n("UbMB"),c=n.n(u),i=n("cl5U"),s=n.n(i),l=a.a.createElement,f=function(e){var t=e.name;return l(o.a,{href:"/category/[name]",as:"/category/".concat(t)},l("a",{className:c()(s.a.link,s.a.cat)},t))},p=function(e){var t=e.name,n=e.count,r=void 0===n?0:n,a="".concat(t," ").concat(r>0?"(".concat(r,")"):"");return l(o.a,{href:"/tag/[name]",as:"/tag/".concat(t)},l("a",{className:c()(s.a.link,s.a.tag)},a))}}},[["vlRD",0,2,1]]]);