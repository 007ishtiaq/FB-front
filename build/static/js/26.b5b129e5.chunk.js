(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{1111:function(e,t,a){e.exports={Slider:"Slider_Slider__1vHjv",item:"Slider_item__2M20w",anim:"Slider_anim__3ODkL",left:"Slider_left__3ZzGh",right:"Slider_right__3UKfh",rightIconContainer:"Slider_rightIconContainer__2DjB_",leftIconContainer:"Slider_leftIconContainer__3kgI6",dotes:"Slider_dotes__g48oJ",dot:"Slider_dot__3QOsl",active:"Slider_active__2zvHN"}},1112:function(e,t,a){},1113:function(e,t,a){e.exports={subCatrgoriesmain:"CategoriesPanal_subCatrgoriesmain__1lxV6",subcategory:"CategoriesPanal_subcategory__1WHYd",Categories:"CategoriesPanal_Categories__14Psr"}},1114:function(e,t,a){},1115:function(e,t,a){},1120:function(e,t,a){"use strict";a.r(t);var n,l=a(0),c=a.n(l);a(448);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){let{title:a,titleId:c,...s}=e;return l.createElement("svg",r({viewBox:"0 0 256 512",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),a?l.createElement("title",{id:c},a):null,n||(n=l.createElement("path",{d:"M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"})))}const i=l.forwardRef(s);a.p;var o=a(440),m=a(1111),u=a.n(m),d=a(261),E=a(9),h=a(55),p=(a(1112),a(191));function g(){return c.a.createElement("div",{className:"slider-container"},c.a.createElement("div",{className:"slider-skeleton"},c.a.createElement(h.b,{count:1,className:"slider-skeleton"}),c.a.createElement("div",{className:"logo-container"},c.a.createElement(p.a,null))))}const b=()=>{const[e,t]=Object(l.useState)(4),[a,n]=Object(l.useState)([]),[r,s]=Object(l.useState)(!0),[m,h]=Object(l.useState)(!1);Object(l.useEffect)((()=>{Object(d.d)("Slider").then((e=>{s(!1),n(e.data)}))}),[]);const p=n=>{t("left"===n?e<a.length-1?e+1:0:e>0?e-1:a.length-1)};Object(l.useEffect)((()=>{const e=setTimeout((()=>{p()}),5e3);return()=>clearTimeout(e)}),[e]);const b=Array.from({length:a.length}).map(((a,n)=>c.a.createElement("div",{key:n,className:e===n?u.a.active:u.a.dot,onClick:()=>(e=>{t(e)})(n)})));return c.a.createElement(c.a.Fragment,null,r?c.a.createElement(g,null):c.a.createElement("div",{className:u.a.Slider},c.a.createElement("div",{className:u.a.dotes},b),c.a.createElement("div",{className:u.a.right,onClick:()=>p("right")},c.a.createElement("div",{className:u.a.rightIconContainer},c.a.createElement(o.a,{style:{width:"10px",fill:"white"}}))),a.map(((t,n)=>c.a.createElement(E.b,{to:a[e].link,key:t._id},c.a.createElement("div",{key:t._id,className:n===e?[u.a.item,u.a.anim].join(" "):u.a.item},c.a.createElement("img",{src:t.image.url,alt:"slideItem",onLoad:()=>h(!0),style:{display:m?"block":"none"}}),!m&&c.a.createElement(g,{style:{display:m?"none":"inline-block"}}))))),c.a.createElement("div",{className:u.a.left,onClick:()=>p("left")},c.a.createElement("div",{className:u.a.leftIconContainer},c.a.createElement(i,{style:{width:"10px",fill:"white"}})))))};var f=c.a.memo(b),v=a(1113),y=a.n(v);a.p,a(1114);function _(){return c.a.createElement("div",null,c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})),c.a.createElement("li",{className:"clistskull"},c.a.createElement(h.b,{count:1})))}const w=e=>{const{loading:t,Categories:a}=e,[n,r]=Object(l.useState)([]),[s,i]=Object(l.useState)("none"),o=()=>{i("none")};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"categorynavcont homepagecatenav"},c.a.createElement("ul",{className:"categorylist_ul"},t?c.a.createElement(_,null):a&&a.map((e=>{return c.a.createElement("li",{onMouseEnter:()=>(e=>{r(e.children),i("flex")})(e),key:e._id,onMouseLeave:o},c.a.createElement(E.b,{to:"/categories/".concat(e._id),className:"categorylist"},c.a.createElement("div",{className:"catesvg"},e.svg?(t=e.svg,c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})):"-"),c.a.createElement("p",null," ",e.name," ")));var t}))),c.a.createElement("div",{onMouseEnter:()=>i("flex"),onMouseLeave:o,className:y.a.subCatrgoriesmain,style:{display:"".concat(s)}},n&&n.map((e=>c.a.createElement("div",{className:y.a.subcategory,key:e._id},c.a.createElement("span",null," ",c.a.createElement(E.b,{to:"/categories/".concat(e._id)},e.name)),e.children.length>0&&c.a.createElement("ul",{className:"sub_sub_ul"},e.children.map((e=>c.a.createElement("li",{key:e._id},c.a.createElement(E.b,{to:"/categories/".concat(e._id)}," ",e.name)))))))))))};var k=c.a.memo(w),N=a(163);a(1115);function O(){return c.a.createElement("div",{className:"slider-container"},c.a.createElement("div",{className:"slider-skeleton smallbanner"},c.a.createElement(h.b,{count:1,className:"slider-skeleton"}),c.a.createElement("div",{className:"logo-container"},c.a.createElement(p.a,null))))}function j(){const[e,t]=Object(l.useState)([]),[a,n]=Object(l.useState)(!0),[r,s]=Object(l.useState)(!1);return Object(l.useEffect)((()=>{Object(d.d)("HomePageSmallBanner").then((e=>{n(!1),t(e.data)}))}),[]),c.a.createElement("div",{class:"sliderrightdiv"},c.a.createElement("div",{class:"banner1"},a?c.a.createElement(O,null):c.a.createElement(E.b,{to:e&&e.length>0&&e[1].link},c.a.createElement("img",{src:e&&e.length>0&&e[1].image.url,alt:e&&e.length>0&&e[1].name,onLoad:()=>s(!0),style:{display:r?"block":"none"}}),!r&&c.a.createElement(O,{style:{display:r?"none":"inline-block"}}))),c.a.createElement("div",{class:"banner2"},a?c.a.createElement(O,null):c.a.createElement(E.b,{to:e&&e.length>0&&e[0].link},c.a.createElement("img",{src:e&&e.length>0&&e[0].image.url,alt:e&&e.length>0&&e[0].name,onLoad:()=>s(!0),style:{display:r?"block":"none"}}),!r&&c.a.createElement(O,{style:{display:r?"none":"inline-block"}}))))}t.default=function(){const[e,t]=Object(l.useState)([]),[a,n]=Object(l.useState)(!0),[r,s]=Object(l.useState)(!0);return Object(l.useEffect)((()=>{Object(N.c)().then((e=>{n(!1),t(e.data)}));const e=()=>{s(window.innerWidth<=700)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[window.innerWidth]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sliderdiv"},!r&&c.a.createElement(k,{loading:a,Categories:e}),c.a.createElement("div",{className:"slidercenterdiv"},c.a.createElement(f,null)),!r&&c.a.createElement(j,null)))}},163:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return m}));var n=a(5);const l=async e=>await n.a.get("".concat("http://localhost:8000/api","/category/").concat(e)),c=async(e,t)=>await n.a.delete("".concat("http://localhost:8000/api","/category/").concat(e),{headers:{authtoken:t}}),r=async(e,t,a)=>await n.a.put("".concat("http://localhost:8000/api","/category/").concat(e),t,{headers:{authtoken:a}}),s=async(e,t)=>await n.a.post("".concat("http://localhost:8000/api","/category"),e,{headers:{authtoken:t}}),i=async()=>await n.a.get("".concat("http://localhost:8000/api","/categories")),o=async e=>await n.a.get("".concat("http://localhost:8000/api","/category/subs/").concat(e)),m=async()=>await n.a.get("".concat("http://localhost:8000/api","/categoriesslider"))},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n,l,c=a(0);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){let{title:a,titleId:s,...i}=e;return c.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"900.000000pt",height:"183.000000pt",viewBox:"0 0 900.000000 183.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":s},i),a?c.createElement("title",{id:s},a):null,n||(n=c.createElement("metadata",null,"\nCreated by potrace 1.10, written by Peter Selinger 2001-2011\n")),l||(l=c.createElement("g",{transform:"translate(0.000000,183.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},c.createElement("path",{d:"M3420 1026 c0 -457 2 -515 16 -520 24 -9 172 -7 178 3 3 5 6 237 6 517 l1 509 -101 3 -100 3 0 -515z"}),c.createElement("path",{d:"M8062 1023 l3 -518 95 0 95 0 5 220 c4 160 9 227 19 247 21 41 80 75 142 82 73 8 116 -9 156 -62 l33 -44 0 -224 0 -224 89 0 c49 0 96 3 105 6 14 5 16 30 16 175 0 283 -25 375 -128 470 -70 65 -131 89 -226 89 -57 0 -78 -5 -126 -31 -32 -17 -63 -28 -69 -24 -7 4 -11 68 -11 181 l0 174 -100 0 -100 0 2 -517z"}),c.createElement("path",{d:"M210 953 l0 -453 95 0 c69 0 95 3 96 13 0 6 0 70 -1 140 -1 87 2 133 11 143 9 10 37 14 116 14 161 0 259 29 331 99 140 136 113 348 -58 456 -50 32 -92 36 -363 38 l-227 2 0 -452z m469 261 c49 -19 71 -51 71 -101 0 -48 -22 -81 -66 -99 -39 -16 -240 -19 -264 -4 -12 7 -15 31 -15 105 0 74 3 98 15 105 26 16 215 12 259 -6z"}),c.createElement("path",{d:"M4710 1396 c-6 -6 -10 -45 -10 -87 l0 -77 129 -4 c71 -2 133 -7 138 -11 4 -5 9 -165 10 -355 2 -191 3 -350 3 -354 0 -5 43 -8 95 -8 l95 0 0 349 c0 304 2 352 16 365 12 13 40 16 140 16 l124 0 0 79 c0 44 -5 83 -10 86 -17 11 -720 11 -730 1z"}),c.createElement("path",{d:"M1300 1222 c-79 -25 -112 -45 -163 -102 -76 -84 -91 -126 -91 -255 -1 -103 1 -114 29 -168 78 -156 222 -216 471 -196 60 4 112 8 116 8 4 1 14 8 22 17 16 15 23 114 11 146 -4 11 -36 13 -163 10 -148 -3 -159 -2 -202 20 -52 27 -91 84 -64 95 9 3 31 1 48 -5 18 -7 75 -12 127 -12 158 1 250 47 296 147 20 42 24 64 19 95 -15 95 -85 170 -187 201 -71 22 -196 21 -269 -1z m239 -196 c28 -26 26 -52 -5 -81 -24 -22 -36 -25 -111 -25 -88 0 -153 18 -153 43 0 16 34 49 75 71 43 23 165 18 194 -8z"}),c.createElement("path",{d:"M2125 1223 c-68 -21 -148 -76 -184 -126 -17 -23 -34 -46 -38 -52 -15 -19 -35 -100 -40 -159 -5 -60 11 -131 46 -205 24 -51 98 -118 166 -152 53 -26 73 -30 146 -30 92 -1 143 16 184 61 44 48 85 46 85 -6 0 -43 24 -54 120 -54 49 0 91 4 94 9 4 5 0 22 -8 38 -26 52 -39 127 -43 253 -6 200 -54 310 -168 386 -76 50 -255 69 -360 37z m253 -196 c99 -66 104 -244 9 -321 -33 -26 -48 -31 -107 -34 -85 -5 -142 19 -180 75 -22 31 -25 48 -25 117 0 61 5 88 18 111 23 37 61 66 101 76 52 14 146 1 184 -24z"}),c.createElement("path",{d:"M3110 1222 c-83 -25 -145 -67 -189 -125 -67 -90 -75 -132 -76 -377 l0 -215 98 -3 97 -3 0 205 c0 113 4 216 9 229 25 66 111 117 196 117 l56 0 -3 93 -3 92 -65 2 c-38 1 -88 -5 -120 -15z"}),c.createElement("path",{d:"M3803 1233 c-16 -6 -18 -351 -2 -439 13 -77 51 -152 103 -204 64 -66 107 -83 213 -88 88 -4 95 -3 152 27 71 37 87 28 79 -44 -7 -55 -43 -105 -95 -131 -50 -25 -218 -25 -277 0 -21 9 -40 16 -42 16 -2 0 -4 -42 -4 -94 0 -74 3 -96 16 -107 27 -22 277 -25 349 -4 91 26 160 78 198 150 54 103 52 80 52 515 l0 405 -75 3 c-131 5 -120 25 -120 -219 0 -190 -2 -214 -20 -249 -31 -60 -81 -93 -150 -98 -71 -5 -121 16 -156 67 -24 35 -24 39 -24 256 0 159 -3 224 -12 233 -12 12 -159 16 -185 5z"}),c.createElement("path",{d:"M5695 1221 c-71 -24 -105 -44 -146 -88 -56 -58 -84 -111 -103 -193 -18 -71 -18 -77 0 -150 30 -124 88 -200 198 -258 48 -25 59 -27 186 -27 124 0 139 2 190 26 73 35 137 100 171 177 26 56 29 75 29 163 0 55 -4 107 -10 117 -5 9 -16 34 -25 54 -20 44 -98 129 -140 151 -88 48 -253 61 -350 28z m258 -197 c101 -66 101 -244 1 -320 -34 -26 -45 -29 -119 -29 -74 0 -85 3 -118 28 -54 41 -67 73 -67 167 0 89 13 120 67 155 63 42 171 41 236 -1z"}),c.createElement("path",{d:"M6360 1029 c0 -182 3 -221 20 -278 37 -127 97 -190 216 -232 77 -27 245 -23 309 7 104 50 164 117 198 224 15 47 18 86 15 270 l-3 215 -89 3 c-65 2 -92 -1 -98 -10 -4 -7 -8 -93 -8 -190 0 -243 -20 -315 -98 -352 -42 -21 -125 -20 -168 0 -18 9 -47 37 -64 62 l-30 45 0 208 c0 114 -3 214 -6 223 -5 13 -24 16 -100 16 l-94 0 0 -211z"}),c.createElement("path",{d:"M7520 1223 c-71 -25 -102 -43 -148 -87 -72 -68 -104 -151 -105 -267 -1 -169 69 -285 208 -344 22 -9 76 -22 120 -30 78 -12 97 -11 240 13 l40 7 3 94 3 93 -28 -7 c-63 -16 -192 -27 -235 -21 -52 8 -138 74 -138 106 0 10 -4 22 -10 25 -14 9 -12 83 3 127 16 46 48 82 92 102 45 21 212 22 262 1 19 -8 40 -15 45 -15 5 0 7 43 6 97 l-3 97 -40 12 c-59 18 -260 16 -315 -3z"}))))}const i=c.forwardRef(s);a.p},261:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(5);const l=async(e,t)=>await n.a.post("".concat("http://localhost:8000/api","/banner"),e,{headers:{authtoken:t}}),c=async()=>await n.a.get("".concat("http://localhost:8000/api","/banners")),r=async(e,t)=>await n.a.delete("".concat("http://localhost:8000/api","/banner/").concat(e),{headers:{authtoken:t}}),s=async e=>await n.a.post("".concat("http://localhost:8000/api","/banners"),{identity:e}),i=async(e,t,a)=>await n.a.put("".concat("http://localhost:8000/api","/banner/").concat(e),t,{headers:{authtoken:a}}),o=async e=>await n.a.get("".concat("http://localhost:8000/api","/banner/").concat(e))},440:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n,l=a(0);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function r(e,t){let{title:a,titleId:r,...s}=e;return l.createElement("svg",c({viewBox:"0 0 256 512",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},s),a?l.createElement("title",{id:r},a):null,n||(n=l.createElement("path",{d:"M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"})))}const s=l.forwardRef(r);a.p},448:function(e,t,a){}}]);
//# sourceMappingURL=26.b5b129e5.chunk.js.map