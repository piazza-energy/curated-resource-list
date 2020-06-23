/*! For license information please see about.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CafY:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("UbMB"),i=r.n(a),s=r("Iavw"),c=r("xI/i"),u=r.n(c),l=o.a.createElement,f=function(){return l("div",{className:u.a.header},l("div",{className:i()("pure-menu","pure-menu-horizontal","pure-menu-fixed",u.a.header__content)},l("div",{className:u.a.wrapper},l(s.a,{href:"/"},l("a",{className:"pure-menu-heading"},"Home")),l("ul",{className:"pure-menu-list"},l("li",{className:"pure-menu-item"},l(s.a,{href:"/about"},l("a",{className:"pure-menu-link"},"About")))))))},p=r("Tred"),h=r.n(p),d=o.a.createElement;t.a=function(e){return d("div",{className:h.a.background},d(f,null),d("div",{className:i()("pure-g",h.a.container)},e.children))}},Iavw:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("YFqc"),i=r.n(a),s=o.a.createElement;t.a=function(e){var t="".concat("/curated-resource-list").concat(e.href),r=e.as?"".concat("/curated-resource-list").concat(e.as):t;return s(i.a,{href:t,as:r,passHref:e.passHref||!1,prefetch:e.prefetch||!1},e.children)}},Juyh:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("CafY"),i=o.a.createElement;t.default=function(){return i(a.a,null,i("div",{className:"pure-u-1"},i("h1",null,"Energy Piazza - Curated Resources List"),i("p",null,"Some notes:"),i("ul",null,i("li",null,"The list started for research while applying for grant in the UK so most resources make sense for this market."),i("li",null,"We are focusing on electricity data exchange, so most of the resources see the problem from this point of view."),i("li",null,"Categories have grown organically with content, they don't follow a specific taxonomy and are subject to change."),i("li",null,"This website has been developed using Next.js and it's entirely open source.")),i("p",null,"Contributions are welcome, ",i("a",{href:"https://github.com/piazza-energy/curated-resource-list"},"here"),".")))}},NW6U:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r("Juyh")}])},Tred:function(e,t,r){e.exports={background:"layout_background__1AVEa",container:"layout_container__2t4v2"}},UbMB:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(o.apply(this,n));else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),s=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var u=r("TqRt"),l=r("284h");t.__esModule=!0,t.default=void 0;var f,p=l(r("q1tI")),h=r("QmWs"),d=r("g/15"),v=u(r("nOHt")),m=r("elyg");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,w=window.IntersectionObserver,_={};function b(){return f||(w?f=new w((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(r,e);var t=c(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,s=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),s=s?(0,h.resolve)(c,s):i,e.preventDefault();var u=o.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,s,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,h.resolve)(e,r);return[o,n?(0,h.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),_[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=b();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),_[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),p.default.cloneElement(a,i)}}]),r}(p.Component);t.default=k},"xI/i":function(e,t,r){e.exports={header:"header_header__3w6qi",wrapper:"header_wrapper__1H8Zk",header__content:"header_header__content__2j6Kb",right:"header_right__2qwzm"}}},[["NW6U",0,2,1]]]);