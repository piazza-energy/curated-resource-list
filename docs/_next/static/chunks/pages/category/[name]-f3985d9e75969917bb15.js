_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{AKss:function(e,n,a){e.exports={item:"bookmark-link_item__1vs2d"}},CafY:function(e,n,a){"use strict";var t=a("q1tI"),r=a.n(t),o=a("UbMB"),u=a.n(o),c=a("Iavw"),i=a("xI/i"),s=a.n(i),l=r.a.createElement,f=function(){return l("div",{className:s.a.header},l("div",{className:u()("pure-menu","pure-menu-horizontal","pure-menu-fixed",s.a.header__content)},l("div",{className:s.a.wrapper},l(c.a,{href:"/"},l("a",{className:"pure-menu-heading"},"Home")),l("ul",{className:"pure-menu-list"},l("li",{className:"pure-menu-item"},l(c.a,{href:"/about"},l("a",{className:"pure-menu-link"},"About")))))))},p=a("Tred"),h=a.n(p),d=r.a.createElement;n.a=function(e){return d("div",{className:h.a.background},d(f,null),d("div",{className:u()("pure-g",h.a.container)},e.children))}},Iavw:function(e,n,a){"use strict";var t=a("q1tI"),r=a.n(t),o=a("YFqc"),u=a.n(o),c=r.a.createElement;n.a=function(e){var n="".concat("/curated-resource-list").concat(e.href),a=e.as?"".concat("/curated-resource-list").concat(e.as):n;return c(u.a,{href:n,as:a,passHref:e.passHref||!1,prefetch:e.prefetch||!1},e.children)}},R7re:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[name]",function(){return a("d3aD")}])},Tred:function(e,n,a){e.exports={background:"layout_background__1AVEa",container:"layout_container__2t4v2"}},UbMB:function(e,n,a){var t;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(this&&this[t]||t);else if(Array.isArray(t))e.push(r.apply(this,t));else if("object"===o)for(var u in t)a.call(t,u)&&t[u]&&e.push(this&&this[u]||u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},YFqc:function(e,n,a){e.exports=a("cTJO")},cTJO:function(e,n,a){"use strict";var t=a("J4zp"),r=a("284h");n.__esModule=!0,n.default=void 0;var o,u=r(a("q1tI")),c=a("elyg"),i=a("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var p=function(e,n){var a=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),s.set(e,n),function(){try{a.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function h(e,n,a,t){(0,c.isLocalURL)(n)&&(e.prefetch(n,a,t).catch((function(e){0})),f[n+"%"+a]=!0)}var d=function(e){var n=!1!==e.prefetch,a=u.default.useState(),r=t(a,2),o=r[0],s=r[1],d=(0,i.useRouter)(),v=d&&d.pathname||"/",m=u.default.useMemo((function(){var n=(0,c.resolveHref)(v,e.href);return{href:n,as:e.as?(0,c.resolveHref)(v,e.as):n}}),[v,e.href,e.as]),y=m.href,_=m.as;u.default.useEffect((function(){if(n&&l&&o&&o.tagName&&(0,c.isLocalURL)(y)&&!f[y+"%"+_])return p(o,(function(){h(d,y,_)}))}),[n,o,y,_,d]);var g=e.children,E=e.replace,w=e.shallow,O=e.scroll;"string"===typeof g&&(g=u.default.createElement("a",null,g));var k=u.Children.only(g),A={ref:function(e){e&&s(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,n,a,t,r,o,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(a))&&(e.preventDefault(),null==u&&(u=t.indexOf("#")<0),n[r?"replace":"push"](a,t,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,y,_,E,w,O)}};return n&&(A.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),h(d,y,_,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(A.href=(0,c.addBasePath)(_)),u.default.cloneElement(k,A)};n.default=d},cl5U:function(e,n,a){e.exports={link:"nav-link_link__1omMK",cat:"nav-link_cat__jv7ss",tag:"nav-link_tag__3Y-j5"}},d3aD:function(e,n,a){"use strict";a.r(n),a.d(n,"__N_SSG",(function(){return s}));var t=a("wx14"),r=a("q1tI"),o=a.n(r);JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial"}'),JSON.parse('{"vi":{"\u0110":"D","\u0111":"d"}}');var u=a("CafY"),c=a("tG10"),i=o.a.createElement,s=!0;n.default=function(e){var n,a=e.params,r=e.elements;return i(u.a,null,i("div",{className:"pure-u-1"},i("h1",null,"Energy Piazza - ","string"!==typeof(n=a.name)?"":n.charAt(0).toUpperCase()+n.slice(1))),r.map((function(e,n){return i(c.a,Object(t.a)({key:n},e))})))}},tG10:function(e,n,a){"use strict";var t=a("q1tI"),r=a.n(t),o=a("zHVU"),u=a("AKss"),c=a.n(u),i=r.a.createElement;n.a=function(e){var n=e.url,a=e.title,t=e.description,r=e.tags,u=t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'),s=r?i("p",null,r.map((function(e,n){return i("span",{key:"tag_".concat(n)},i(o.b,{name:e}))}))):"";return i("div",{className:"pure-u-1"},i("div",{className:c.a.item},i("h3",null,i("a",{href:n},a)),i("p",{dangerouslySetInnerHTML:{__html:u}}),s))}},wx14:function(e,n,a){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}a.d(n,"a",(function(){return t}))},"xI/i":function(e,n,a){e.exports={header:"header_header__3w6qi",wrapper:"header_wrapper__1H8Zk",header__content:"header_header__content__2j6Kb",right:"header_right__2qwzm"}},zHVU:function(e,n,a){"use strict";a.d(n,"a",(function(){return f})),a.d(n,"b",(function(){return p}));var t=a("q1tI"),r=a.n(t),o=a("Iavw"),u=a("UbMB"),c=a.n(u),i=a("cl5U"),s=a.n(i),l=r.a.createElement,f=function(e){var n=e.name;return l(o.a,{href:"/category/[name]",as:"/category/".concat(n)},l("a",{className:c()(s.a.link,s.a.cat)},n))},p=function(e){var n=e.name,a=e.count,t=void 0===a?0:a,r="".concat(n," ").concat(t>0?"(".concat(t,")"):"");return l(o.a,{href:"/tag/[name]",as:"/tag/".concat(n)},l("a",{className:c()(s.a.link,s.a.tag)},r))}}},[["R7re",0,2,1]]]);