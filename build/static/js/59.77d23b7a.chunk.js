(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[59],{1110:function(t,e,a){},1176:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(0),r=a.n(n),o=(a(1110),{});!function t(e,a,n,r){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),i="function"===typeof Path2D&&"function"===typeof DOMMatrix,l=function(){if(!e.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),a=t.getContext("2d");a.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{a.createPattern(n,"no-repeat")}catch(r){return!1}return!0}();function c(){}function s(t){var n=a.exports.Promise,r=void 0!==n?n:e.Promise;return"function"===typeof r?new r(t):(t(c,c),null)}var h,f,u,d=(h=l,f=new Map,{transform:function(t){if(h)return t;if(f.has(t))return f.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),f.set(t,e),e},clear:function(){f.clear()}}),m=function(){var t,e,a=Math.floor(1e3/60),n={},r=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(t=function(t){var e=Math.random();return n[e]=requestAnimationFrame((function o(i){r===i||r+a-1<i?(r=i,delete n[e],t()):n[e]=requestAnimationFrame(o)})),e},e=function(t){n[t]&&cancelAnimationFrame(n[t])}):(t=function(t){return setTimeout(t,a)},e=function(t){return clearTimeout(t)}),{frame:t,cancel:e}}(),p=function(){var e,a,r={};return function(){if(e)return e;if(!n&&o){var i=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([i])))}catch(l){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",l),null}!function(t){function e(e,a){t.postMessage({options:e||{},callback:a})}t.init=function(e){var a=e.transferControlToOffscreen();t.postMessage({canvas:a},[a])},t.fire=function(n,o,i){if(a)return e(n,null),a;var l=Math.random().toString(36).slice(2);return a=s((function(o){function c(e){e.data.callback===l&&(delete r[l],t.removeEventListener("message",c),a=null,d.clear(),i(),o())}t.addEventListener("message",c),e(n,l),r[l]=c.bind(null,{data:{callback:l}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),r)r[e](),delete r[e]}}(e)}return e}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(t,e,a){return function(t,e){return e?e(t):t}(t&&(null!==(n=t[e])&&void 0!==n)?t[e]:g[e],a);var n}function b(t){return t<0?0:Math.floor(t)}function M(t){return parseInt(t,16)}function y(t){return t.map(w)}function w(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:M(e.substring(0,2)),g:M(e.substring(2,4)),b:M(e.substring(4,6))}}function x(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function E(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function C(t){var e=t.angle*(Math.PI/180),a=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function T(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",t.beginPath(),i&&"path"===e.shape.type&&"string"===typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,a,n,r,o,i){var l=new Path2D(t),c=new Path2D;c.addPath(l,new DOMMatrix(e));var s=new Path2D;return s.addPath(c,new DOMMatrix([Math.cos(i)*r,Math.sin(i)*r,-Math.sin(i)*o,Math.cos(i)*o,a,n])),s}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(o-n),.1*Math.abs(l-r),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var c=Math.PI/10*e.wobble,s=.1*Math.abs(o-n),h=.1*Math.abs(l-r),f=e.shape.bitmap.width*e.scalar,u=e.shape.bitmap.height*e.scalar,m=new DOMMatrix([Math.cos(c)*s,Math.sin(c)*s,-Math.sin(c)*h,Math.cos(c)*h,e.x,e.y]);m.multiplySelf(new DOMMatrix(e.shape.matrix));var p=t.createPattern(d.transform(e.shape.bitmap),"no-repeat");p.setTransform(m),t.globalAlpha=1-a,t.fillStyle=p,t.fillRect(e.x-f/2,e.y-u/2,f,u),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-n)*e.ovalScalar,Math.abs(l-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,a,n,r,o,i,l,c){t.save(),t.translate(e,a),t.rotate(o),t.scale(n,r),t.arc(0,0,1,i,l,c),t.restore()}(t,e.x,e.y,Math.abs(o-n)*e.ovalScalar,Math.abs(l-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var g=Math.PI/2*3,v=4*e.scalar,b=8*e.scalar,M=e.x,y=e.y,w=5,x=Math.PI/w;w--;)M=e.x+Math.cos(g)*b,y=e.y+Math.sin(g)*b,t.lineTo(M,y),g+=x,M=e.x+Math.cos(g)*v,y=e.y+Math.sin(g)*v,t.lineTo(M,y),g+=x;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(o),Math.floor(l)),t.lineTo(Math.floor(n),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function I(t,a){var i,l=!t,c=!!v(a||{},"resize"),h=!1,f=v(a,"disableForReducedMotion",Boolean),u=o&&!!v(a||{},"useWorker")?p():null,g=l?x:E,M=!(!t||!u)&&!!t.__confetti_initialized,w="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function I(e,a,o){for(var l,c,h=v(e,"particleCount",b),f=v(e,"angle",Number),u=v(e,"spread",Number),p=v(e,"startVelocity",Number),M=v(e,"decay",Number),w=v(e,"gravity",Number),x=v(e,"drift",Number),E=v(e,"colors",y),I=v(e,"ticks",Number),k=v(e,"shapes"),P=v(e,"scalar"),S=!!v(e,"flat"),O=function(t){var e=v(t,"origin",Object);return e.x=v(e,"x",Number),e.y=v(e,"y",Number),e}(e),B=h,A=[],F=t.width*O.x,z=t.height*O.y;B--;)A.push(C({x:F,y:z,angle:f,spread:u,startVelocity:p,color:E[B%E.length],shape:k[(l=0,c=k.length,Math.floor(Math.random()*(c-l))+l)],ticks:I,decay:M,gravity:w,drift:x,scalar:P,flat:S}));return i?i.addFettis(A):(i=function(t,e,a,o,i){var l,c,h=e.slice(),f=t.getContext("2d"),u=s((function(e){function s(){l=c=null,f.clearRect(0,0,o.width,o.height),d.clear(),i(),e()}l=m.frame((function e(){!n||o.width===r.width&&o.height===r.height||(o.width=t.width=r.width,o.height=t.height=r.height),o.width||o.height||(a(t),o.width=t.width,o.height=t.height),f.clearRect(0,0,o.width,o.height),(h=h.filter((function(t){return T(f,t)}))).length?l=m.frame(e):s()})),c=s}));return{addFettis:function(t){return h=h.concat(t),u},canvas:t,promise:u,reset:function(){l&&m.cancel(l),c&&c()}}}(t,A,g,a,o),i.promise)}function k(a){var n=f||v(a,"disableForReducedMotion",Boolean),r=v(a,"zIndex",Number);if(n&&w)return s((function(t){t()}));l&&i?t=i.canvas:l&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(r),document.body.appendChild(t)),c&&!M&&g(t);var o={width:t.width,height:t.height};function d(){if(u){var e={getBoundingClientRect:function(){if(!l)return t.getBoundingClientRect()}};return g(e),void u.postMessage({resize:{width:e.width,height:e.height}})}o.width=o.height=null}function m(){i=null,c&&(h=!1,e.removeEventListener("resize",d)),l&&t&&(document.body.removeChild(t),t=null,M=!1)}return u&&!M&&u.init(t),M=!0,u&&(t.__confetti_initialized=!0),c&&!h&&(h=!0,e.addEventListener("resize",d,!1)),u?u.fire(a,o,m):I(a,o,m)}return k.reset=function(){u&&u.reset(),i&&i.reset()},k}function k(){return u||(u=I(null,{useWorker:!0,resize:!0})),u}a.exports=function(){return k().apply(this,arguments)},a.exports.reset=function(){k().reset()},a.exports.create=I,a.exports.shapeFromPath=function(t){if(!i)throw new Error("path confetti are not supported in this browser");var e,a;"string"===typeof t?e=t:(e=t.path,a=t.matrix);var n=new Path2D(e),r=document.createElement("canvas").getContext("2d");if(!a){for(var o,l,c=1e3,s=c,h=c,f=0,u=0,d=0;d<c;d+=2)for(var m=0;m<c;m+=2)r.isPointInPath(n,d,m,"nonzero")&&(s=Math.min(s,d),h=Math.min(h,m),f=Math.max(f,d),u=Math.max(u,m));o=f-s,l=u-h;var p=Math.min(10/o,10/l);a=[p,0,0,p,-Math.round(o/2+s)*p,-Math.round(l/2+h)*p]}return{type:"path",path:e,matrix:a}},a.exports.shapeFromText=function(t){var e,a=1,n="#000000",r='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"===typeof t?e=t:(e=t.text,a="scalar"in t?t.scalar:a,r="fontFamily"in t?t.fontFamily:r,n="color"in t?t.color:n);var o=10*a,i=o+"px "+r,l=new OffscreenCanvas(o,o),c=l.getContext("2d");c.font=i;var s=c.measureText(e),h=Math.ceil(s.actualBoundingBoxRight+s.actualBoundingBoxLeft),f=Math.ceil(s.actualBoundingBoxAscent+s.actualBoundingBoxDescent),u=s.actualBoundingBoxLeft+2,d=s.actualBoundingBoxAscent+2;h+=4,f+=4,(c=(l=new OffscreenCanvas(h,f)).getContext("2d")).font=i,c.fillStyle=n,c.fillText(e,u,d);var m=1/a;return{type:"bitmap",bitmap:l.transferToImageBitmap(),matrix:[m,0,0,m,-h*m/2,-f*m/2]}}}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),o,!1);var i=o.exports;o.exports.create;const l=()=>{var t={origin:{y:.7}};function e(e,a){i({...t,...a,particleCount:Math.floor(200*e)})}e(.25,{spread:26,startVelocity:55}),e(.2,{spread:60}),e(.35,{spread:100,decay:.91,scalar:.8}),e(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),e(.1,{spread:120,startVelocity:45});var a=Date.now()+5e3,n=["#bb0000","#ffffff"];!function t(){i({particleCount:2,angle:60,spread:100,origin:{x:0},colors:n}),i({particleCount:2,angle:120,spread:55,origin:{x:1},colors:n}),Date.now()<a&&requestAnimationFrame(t)}()};function c(t){let{match:e,history:a}=t;const{orderId:o}=e.params;return Object(n.useEffect)((()=>{l()}),[]),r.a.createElement("div",{class:"contactmaincont"},r.a.createElement("div",{class:"contacttopcont"},r.a.createElement("div",{class:"thankcont"},r.a.createElement("p",{class:"thankmain"},"Thank You!"),r.a.createElement("p",{class:"thanksub"},"Thank You for visiting ",r.a.createElement("span",null,"PearlyTouch")," website. You will"," ",r.a.createElement("br",null)," received an email message shortly."," "),r.a.createElement("div",{class:"thanksvg"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 512 467.36"},r.a.createElement("g",{"fill-rule":"nonzero"},r.a.createElement("path",{fill:"#333",d:"M58.327 0h254.296c-11.984 13.787-22.844 27.299-32.641 40.444H58.327c-4.929 0-9.415 2.01-12.656 5.227a17.95 17.95 0 00-5.227 12.657v350.705c0 4.868 2.04 9.331 5.288 12.579 3.264 3.263 7.75 5.304 12.595 5.304h395.345c4.815 0 9.286-2.056 12.557-5.327 3.271-3.271 5.326-7.742 5.326-12.556V211.536A1199.255 1199.255 0 00512 194.294v214.739c0 15.995-6.611 30.592-17.173 41.154-10.562 10.562-25.159 17.173-41.155 17.173H58.327c-15.996 0-30.623-6.58-41.193-17.15C6.595 439.671 0 425.082 0 409.033V58.328C0 26.298 26.298 0 58.327 0z"}),r.a.createElement("path",{fill:"#01A601",d:"M137.419 167.477l62.691-.825a10.042 10.042 0 015.427 1.513c12.678 7.329 24.639 15.69 35.789 25.121a243.712 243.712 0 0122.484 21.681c21.972-34.811 48.576-70.325 76.509-103.639 34.552-41.2 71.358-79.245 104.09-108.6a10.045 10.045 0 016.718-2.567l48.071-.039c5.579 0 10.111 4.532 10.111 10.111 0 2.752-1.108 5.259-2.896 7.077-44.311 49.249-89.776 105.68-130.969 163.496-38.09 53.466-72.596 108.194-99.23 159.612-2.553 4.945-8.644 6.894-13.588 4.341a10.07 10.07 0 01-4.693-5.105c-14.582-31.196-32.052-59.924-52.916-85.679-20.887-25.778-45.244-48.645-73.567-68.087-4.593-3.134-5.777-9.423-2.644-14.016 2.002-2.935 5.296-4.479 8.613-4.395z"})))),r.a.createElement("p",{class:"thankend"},"Check your Email"),r.a.createElement("p",{class:"idinfo"},"Order ID: ",r.a.createElement("span",null,o)),r.a.createElement("p",{class:"thankendsub"},"If you didn't receive any email contact"," ",r.a.createElement("span",null,"info@PearlyTouch.com")," "))))}}}]);
//# sourceMappingURL=59.77d23b7a.chunk.js.map