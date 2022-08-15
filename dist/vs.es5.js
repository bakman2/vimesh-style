// Vimesh Style (ES5) v0.11.5
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _wrapRegExp(){_wrapRegExp=function(t,n){return new e(t,void 0,n)};var c=RegExp.prototype,a=new WeakMap;function e(t,n,o){n=new RegExp(t,n);return a.set(n,o||a.get(t)),_setPrototypeOf(n,e.prototype)}function r(o,t){var e=a.get(t);return Object.keys(e).reduce(function(t,n){return t[n]=o[e[n]],t},Object.create(null))}return _inherits(e,RegExp),e.prototype.exec=function(t){t=c.exec.call(this,t);return t&&(t.groups=r(t,this)),t},e.prototype[Symbol.replace]=function(t,n){var o,e;return"string"==typeof n?(o=a.get(this),c[Symbol.replace].call(this,t,n.replace(/\$<([^>]+)>/g,function(t,n){return"$"+o[n]}))):"function"==typeof n?(e=this,c[Symbol.replace].call(this,t,function(){var t=arguments;return"object"!=_typeof(t[t.length-1])&&(t=[].slice.call(t)).push(r(t,e)),n.apply(this,t)})):c[Symbol.replace].call(this,t,n)},_wrapRegExp.apply(this,arguments)}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_unsupportedIterableToArray(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}function _iterableToArrayLimit(t,n){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var e,c,a=[],r=!0,i=!1;try{for(o=o.call(t);!(r=(e=o.next()).done)&&(a.push(e.value),!n||a.length!==n);r=!0);}catch(t){i=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_unsupportedIterableToArray(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}function _iterableToArrayLimit(t,n){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var e,c,a=[],r=!0,i=!1;try{for(o=o.call(t);!(r=(e=o.next()).done)&&(a.push(e.value),!n||a.length!==n);r=!0);}catch(t){i=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(t){var r,c,i,l,n,a,o,e,s,u,f,d,p,b,g,m,h,y,x,v,w,k,_;function A(t){return null!=t&&"string"==typeof t.valueOf()}function S(t){return Array.isArray(t)}function T(t){return"function"==typeof t}function z(t,e){S(t)?t.forEach(function(t,n){e(t,n,n)}):Object.entries(t).forEach(function(t,n){var t=_slicedToArray(t,2),o=t[0],t=t[1];e(t,o,n)})}function j(t){var n=arguments.length<=1?0:arguments.length-1;if(n<1||null==t)return t;for(var o=0;o<n;o++){var e,c=o+1<1||arguments.length<=o+1?void 0:arguments[o+1];for(e in c)t[e]=c[e]}return t}function $(t){var n,o,e;if(A(t))return o=n=null,t=(e=t.split(":"))[e.length-1],3===e.length?(n=e[0],o=e[1]):2===e.length&&(r.breakpoints[e[0]]?n=e[0]:o=e[0]),{breakpoint:n,pseudo:o,name:t};console.error("Wrong parameter ".concat(t))}function I(t,n,o){n&&(S(t)||(t=[t]),T(n)?z(t,function(t){u.push({prefix:t,generator:n,init:o})}):z(t,function(t){i[t]=n,o&&(l[t]=o)}))}function C(t){if(!t)return null;var n=$(t),o=n.name,e=i[o];e&&l[o]&&l[o](n);for(var c=0;!e&&c<u.length;c++){var a=u[c];0==o.indexOf(a.prefix)&&(e=a.generator(n))&&a.init&&a.init(n)}return e}function O(){var t=o.concat(a);0<t.length&&((t=(r.preset?n:[]).concat(t).join("\n"))!==s&&(s=t,e&&(e.innerHTML=s)))}function E(t){var n,o=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];t&&(t=A(t)?t.split(" "):(n=[],z(t,function(t){n=n.concat(t&&t.split&&t.split(" ")||[])}),n),z(t,function(t){var n,o,e;t&&!c[t]&&(n=C(t))&&(e=(o=$(t)).name.replace(/:/g,"\\:").replace(/\//g,"\\/").replace(/\./g,"\\."),o.pseudo&&(e="".concat(o.pseudo,"\\:").concat(e,":").concat(o.pseudo)),o.breakpoint&&(e="".concat(o.breakpoint,"\\:").concat(e)),n.name&&(0==n.name.indexOf("$")?e+=n.name.substring(1):e=n.name,n=n.style),n="{".concat(n,"}"),n=o.breakpoint?"@media (min-width: ".concat(r.breakpoints[o.breakpoint],"px) {\n  .").concat(e," ").concat(n," \n}"):".".concat(e," ").concat(n," "),c[t]=!0,a.push(n))}),o&&O())}function M(t){var n,o=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];t&&t.querySelectorAll&&(t=[t].concat(_toConsumableArray(t.querySelectorAll("*[class]"))),n=[],z(t,function(t){t=t.className;t&&(n.push(t),t.baseVal&&n.push(t.baseVal),t.animVal&&n.push(t.animVal))}),E(n,o))}function L(t){t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function R(t){var n=t.r,o=t.g,t=t.b;return((1<<24)+(Math.round(n)<<16)+(Math.round(o)<<8)+Math.round(t)).toString(16).slice(1)}function H(t,n){if(6===n)return t;var o,e,c,a=n<=6,t=function(t){var n,o=t.r,e=t.g,c=t.b,t=(o/=255,e/=255,c/=255,Math.max(o,e,c)),a=Math.min(o,e,c),r=t,i=t-a,l=0==t?0:i/t;if(t==a)n=0;else{switch(t){case o:n=(e-c)/i+(e<c?6:0);break;case e:n=(c-o)/i+2;break;case c:n=(o-e)/i+4}n/=6}return{h:n,s:l,v:r}}(L(t)),n=a?h+1-n:n-h-1,t={h:360*t.h,s:t.s,v:t.v};return R(function(t){var n,o,e,c=t.h,a=t.s,r=t.v,t=Math.floor(6*c),i=r*(1-a),l=r*(1-(c=6*c-t)*a),s=r*(1-(1-c)*a);switch(t%6){case 0:n=r,o=s,e=i;break;case 1:n=l,o=r,e=i;break;case 2:n=i,o=r,e=s;break;case 3:n=i,o=l,e=r;break;case 4:n=s,o=i,e=r;break;case 5:n=r,o=i,e=l}return{r:255*n,g:255*o,b:255*e}}({h:(e=n,c=a,(c=60<=(o=t).h&&o.h<=240?c?o.h-d*e:o.h+d*e:c?o.h+d*e:o.h-d*e)<0?c+=360:360<=c&&(c-=360),Math.round(c)/360),s:(o=t,e=n,1<(o=a?o.s-p*e:e===y?o.s+p:o.s+b*e)&&(o=1),(o=a&&e===h&&.1<o?.1:o)<.06&&(o=.06),Number(o.toFixed(2))),v:(c=t,e=n,(o=1<(o=(o=a)?c.v+g*e:c.v-m*e)?1:o)<0&&(o=0),Number(o.toFixed(2)))}))}function N(t){if(!t)return null;var n=null;if(r.specialColors[t])"#"==(n=r.specialColors[t])[0]&&(n=L(n));else{var o=t.lastIndexOf("-"),e=null;if(-1!=o){var e=t.substring(o+1),c=(t=t.substring(0,o)).split("-");if(1<c.length){t=c[0];for(var a=1;a<c.length;a++)0<c[a].length&&(t+=c[a][0].toUpperCase()+c[a].substring(1))}}o=r.colors[t];if(!o)return null;e=e?+e:500,e=50==e?1:e/100+1;if(S(o))return o[e-1];n=L(H(o,e))}return n}t.$vs||(t.$vs={config:{auto:!0,prefix:"vs",preset:!0,breakpoints:{sm:640,md:768,lg:1024,xl:1280,"2xl":1536},fonts:{sans:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',serif:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},colors:{rose:"f43f5e",pink:"ec4899",fuchsia:"d946ef",purple:"a855f7",violet:"8b5cf6",indigo:"6366f1",blue:"3b82f6",sky:"0ea5e9",lightBlue:"0ea5e9",cyan:"06b6d4",teal:"14b8a6",emerald:"10b981",green:"22c55e",lime:"84cc16",yellow:"eab308",amber:"f59e0b",orange:"f97316",red:"ef4444",gray:["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"]},specialColors:{white:"#ffffff",black:"#000000",transparent:"transparent",current:"currentColor"},keyframes:{spin:"{to{transform:rotate(360deg)}}",ping:"{75%,100%{transform:scale(2);opacity:0}}",pulse:"{50%{opacity:.5}}",bounce:"{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}"},animation:{none:"",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"}}},v=t.$vs,r=v.config,v._={isString:A,isArray:S,isFunction:T,each:z,extend:j},c={},i=v.classMap={},l={},n=[],a=[],o=[],s=e=null,u=v.generators=[],f=_wrapRegExp(/class\s*=\s*['\"]([^'\"]*)['\"]/g,{class:1}),d=2,p=.16,g=b=.05,m=.15,h=5,y=4,j(v._,{hexToRgb:L,rgbToHex:R,register:I,resolveColor:N,generateColors:function(n,o,e){var c="--".concat(r.prefix,"-").concat(n,"-opacity");I("".concat(n,"-opacity-"),function(t){t=t.name.split("-"),t="".concat(c,": ").concat(+t[2]/100,";");return e?{name:"$".concat(e),style:t}:t}),I("".concat(n,"-"),function(t){t=N(t.name.substring(n.length+1));if(!t)return null;t=A(t)?"".concat(o,": ").concat(t,";"):"".concat(c,":1;").concat(o,": rgba(").concat(t.r,",").concat(t.g,",").concat(t.b,",var(").concat(c,"));");return e?{name:"$".concat(e),style:t}:t})},generateSizes:function(t){for(var n=0;n<=96;n++)13==n||15==n||16<=n&&(n-16)%4!=0||(t(n,"".concat(.25*n).concat(0==n?"px":"rem")),1==n&&t("px","1px"),n<=3&&t(n+.5,"".concat(.25*n+.125,"rem")))},resolveClass:C,addPresetStyle:function(t){-1==n.indexOf(t)&&n.push(t)},addInitStyle:function(t){-1==o.indexOf(t)&&o.push(t)},resetAutoStyles:function(){c={},a=[],s=null,e&&(e.innerHTML=null)},resolveAllKnownClasses:M}),j(v,{getStyles:function(){return s},extractClasses:function(t){for(var n,o=[];null!==(n=f.exec(t));)z(n.groups.class.split(" "),function(t){(t=t&&t.trim())&&-1===o.indexOf(t)&&o.push(t)});return o},addClasses:E}),(x=t.document)&&(v=function t(n,o){if(void 0===o&&(o=n,n=x.body),!n)return w(function(){return t(x.body,o)});new MutationObserver(o).observe(n,{attributes:!0,childList:!0,subtree:!0})},w=function(t){t&&(k?t():_.push(t))},x.dispatchEvent(new CustomEvent("vs:ready",{bubbles:!0,composed:!0,cancelable:!0})),k=!1,_=[],x&&x.addEventListener&&x.addEventListener("DOMContentLoaded",function(){for(k=!0;_[0];)_.shift()()},!1),w(function(){var t="vimesh-styles";(e=x.getElementById(t))||((e=x.createElement("style")).setAttribute("id",t),x.head.appendChild(e)),r.auto&&M(x.body),s&&s!==e.innerHTML&&(e.innerHTML=s)}),v(function(t){r.auto&&(z(t,function(t){var n;"childList"===t.type?t.addedNodes.forEach(function(t){return M(t,!1)}):"attributes"===t.type&&(n=t.target.className,"class"===t.attributeName&&n&&E([n,n.baseVal,n.animVal],!1))}),O())})))}("undefined"!=typeof window&&window||global),function(t){t.$vs?t.$vs._.addPresetStyle("html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}"):console.error("Vimesh style core is not loaded!")}("undefined"!=typeof window&&window||global),function(t){if(!t.$vs)return console.error("Vimesh style core is not loaded!");var a,i=t.$vs._.each,l=t.$vs._.register,n=t.$vs._.generateSizes,o=t.$vs.config,r=o.prefix,e=(l("container",function(t){return t.breakpoint?"max-width: ".concat(o.breakpoints[t.breakpoint],"px;"):"width: 100%;"}),i(["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-row","table-column-group","table-footer-group","table-header-group","table-row-group","flow-root","grid","inline-grid","contents","list-item","hidden"],function(t){return l(t,"display: ".concat("hidden"===t?"none":t,";"))}),l("flex-grow-0","flex-grow: 0;"),l("flex-grow","flex-grow: 1;"),l("flex-shrink-0","flex-shrink: 0;"),l("flex-shrink","flex-shrink: 1;"),i({1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},function(t,n){return l("flex-".concat(n),"flex: ".concat(t,";"))}),i(["row","row-reverse","col","col-reverse"],function(t){return l("flex-".concat(t),"flex-direction: ".concat(t.replace("col","column"),";"))}),i(["wrap","wrap-reverse","nowrap"],function(t){return l("flex-".concat(t),"flex-wrap: ".concat(t,";"))}),i(["left","right","both","none"],function(t){return l("clear-".concat(t),"clear: ".concat(t,";"))}),i(["static","fixed","absolute","relative","sticky"],function(t){return l(t,"position: ".concat(t,";"))}),i({auto:"auto",full:"100%",screen:"100vw",min:"min-content",max:"max-content"},function(t,n){return l("w-".concat(n),"width: ".concat(t,";"))}),i({auto:"auto",full:"100%",screen:"100vh"},function(t,n){return l("h-".concat(n),"height: ".concat(t,";"))}),i([2,3,4,5,6,12],function(t){for(a=1;a<t;a++)l("w-".concat(a,"/").concat(t),"width: ".concat(+(100*a/t).toFixed(6),"%;")),l("h-".concat(a,"/").concat(t),"height: ".concat(+(100*a/t).toFixed(6),"%;"))}),n(function(t,n){l("w-".concat(t),"width: ".concat(n,";")),l("h-".concat(t),"height: ".concat(n,";"))}),{0:"0px",full:"100%",min:"min-content",max:"max-content"});for(i(e,function(t,n){return l("min-w-".concat(n),"min-width: ".concat(t,";"))}),e.none="none",e.prose="65ch",i(["xs","sm","md","lg","xl"],function(t,n){return e[t]="".concat(20+4*n,"rem")}),i(["sm","md","lg","xl","2xl"],function(t){return e["screen-".concat(t)]="".concat(o.breakpoints[t],"px")}),a=2;a<=7;a++)e["".concat(a,"xl")]="".concat(30+6*a,"rem");function s(t,n,o){l("".concat(t,"m-").concat(n),"margin: ".concat(t).concat(o,";"));var e="margin-left: ".concat(t).concat(o,";"),c="margin-right: ".concat(t).concat(o,";"),a="margin-top: ".concat(t).concat(o,";"),o="margin-bottom: ".concat(t).concat(o,";");l("".concat(t,"mx-").concat(n),"".concat(e).concat(c)),l("".concat(t,"ml-").concat(n),"".concat(e)),l("".concat(t,"mr-").concat(n),"".concat(c)),l("".concat(t,"my-").concat(n),"".concat(a).concat(o)),l("".concat(t,"mt-").concat(n),"".concat(a)),l("".concat(t,"mb-").concat(n),"".concat(o))}i(e,function(t,n){return l("max-w-".concat(n),"max-width: ".concat(t,";"))}),i({0:"0px",full:"100%",screen:"100vh"},function(t,n){l("min-h-".concat(n),"min-height: ".concat(t,";")),l("max-h-".concat(n),"max-height: ".concat(t,";"))}),n(function(t,n){l("max-h-".concat(t),"max-height: ".concat(n,";"))}),s("","auto","auto"),n(function(n,o){l("p-".concat(n),"padding: ".concat(o,";"));var t="padding-left: ".concat(o,";"),e="padding-right: ".concat(o,";"),c="padding-top: ".concat(o,";"),a="padding-bottom: ".concat(o,";");l("px-".concat(n),"".concat(t).concat(e)),l("pl-".concat(n),"".concat(t)),l("pr-".concat(n),"".concat(e)),l("py-".concat(n),"".concat(c).concat(a)),l("pt-".concat(n),"".concat(c)),l("pb-".concat(n),"".concat(a)),i(["","-"],function(t){return s(t,n,o)})}),n(function(a,r){i(["","-"],function(t){var n="left: ".concat(t).concat(r,";"),o="right: ".concat(t).concat(r,";"),e="top: ".concat(t).concat(r,";"),c="bottom: ".concat(t).concat(r,";");l("".concat(t,"inset-").concat(a),"".concat(n).concat(o).concat(e).concat(c)),l("".concat(t,"inset-x-").concat(a),"".concat(n).concat(o)),l("".concat(t,"left-").concat(a),"".concat(n)),l("".concat(t,"right-").concat(a),"".concat(o)),l("".concat(t,"inset-y-").concat(a),"".concat(e).concat(c)),l("".concat(t,"top-").concat(a),"".concat(e)),l("".concat(t,"bottom-").concat(a),"".concat(c))})});var u=" > :not([hidden]) ~ :not([hidden])";for(l("space-x-reverse",{name:"$".concat(u),style:"--".concat(r,"-space-x-reverse: 1;")}),l("space-y-reverse",{name:"$".concat(u),style:"--".concat(r,"-space-y-reverse: 1;")}),n(function(e,c){i({x:["right","left"],y:["top","bottom"]},function(n,o){return i(["","-"],function(t){l("".concat(t,"space-").concat(o,"-").concat(e),{name:"$".concat(u),style:"--".concat(r,"-space-").concat(o,"-reverse: 0;margin-").concat(n[0],": calc(").concat(t).concat(c," * var(--").concat(r,"-space-").concat(o,"-reverse));margin-").concat(n[1],": calc(").concat(t).concat(c," * calc(1 - var(--").concat(r,"-space-").concat(o,"-reverse)));")})})})}),i({first:-9999,last:9999,none:0},function(t,n){return l("order-".concat(n),"order: ".concat(t,";"))}),a=1;a<=12;a++)l("order-".concat(a),"order: ".concat(a,";"));for(l("grid-cols-none","grid-template-columns: none;"),a=1;a<=12;a++)l("grid-cols-".concat(a),"grid-template-columns: repeat(".concat(a,", minmax(0, 1fr));"));for(i([["col","column"],["row","row"]],function(t,n){var t=_slicedToArray(t,2),o=t[0],e=t[1],c=(l("".concat(o,"-auto"),"grid-".concat(e,": auto;")),l("".concat(o,"-span-full"),"grid-".concat(e,": 1 / -1;")),l("".concat(o,"-start-auto"),"grid-".concat(e,"-start: auto;")),l("".concat(o,"-end-auto"),"grid-".concat(e,"-end: auto;")),n?7:13);for(a=1;a<=c;a++)l("".concat(o,"-span-").concat(a),"grid-".concat(e,": span ").concat(a," / span ").concat(a,";")),l("".concat(o,"-start-").concat(a),"grid-".concat(e,"-start: span ").concat(a," / span ").concat(a,";")),l("".concat(o,"-end-").concat(a),"grid-".concat(e,"-end: span ").concat(a," / span ").concat(a,";"))}),l("grid-rows-none","grid-template-rows: none;"),a=1;a<=6;a++)l("grid-rows-".concat(a),"grid-template-rows: repeat(".concat(a,", minmax(0, 1fr));"));i(["row","col","row-dense","col-dense"],function(t){return l("grid-flow-".concat(t),"grid-auto-flow: ".concat(t,";"))}),i({auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},function(t,n){l("auto-cols-".concat(n),"grid-auto-columns: ".concat(t,";")),l("auto-rows-".concat(n),"grid-auto-rows: ".concat(t,";"))}),n(function(t,n){l("gap-".concat(t),"gap: ".concat(n,";")),l("gap-x-".concat(t),"column-gap: ".concat(n,";")),l("gap-y-".concat(t),"row-gap: ".concat(n,";"))}),i({start:"flex-start",end:"flex-end",center:"center",between:"space-between",around:"space-around",evenly:"space-evenly"},function(t,n){l("justify-".concat(n),"justify-content: ".concat(t,";")),l("content-".concat(n),"align-content: ".concat(t,";"))}),i({start:"start",end:"end",center:"center",stretch:"stretch",between:"space-between",around:"space-around",evenly:"space-evenly"},function(t,n){l("place-content-".concat(n),"place-content: ".concat(t,";"))}),i(["start","end","center","stretch"],function(t){l("justify-items-".concat(t),"justify-items: ".concat(t,";")),l("place-items-".concat(t),"place-items: ".concat(t,";"))}),i(["auto","start","end","center","stretch"],function(t){l("justify-self-".concat(t),"justify-self: ".concat(t,";")),l("place-self-".concat(t),"place-self: ".concat(t,";"))}),i(["start","end","center","baseline","stretch"],function(t){return l("items-".concat(t),"align-items: ".concat(t,";"))}),i(["auto","start","end","center","baseline","stretch"],function(t){return l("self-".concat(t),"align-self: ".concat(t,";"))}),l("decoration-slice","box-decoration-break: slice;"),l("decoration-clone","box-decoration-break: clone;"),l("box-border","box-sizing: border-box;"),l("box-content","box-sizing: content-box;"),l("isolate","isolation: isolate;"),l("isolation-auto","isolation: auto;"),i(["left","right","none"],function(t){return l("float-".concat(t),"float: ".concat(t,";"))}),i(["contain","cover","fill","none","scale-down"],function(t){return l("object-".concat(t),"object-fit: ".concat(t,";"))}),i(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],function(t){return l("object-".concat(t),"object-position: ".concat(t.replace("-"," "),";"))}),i(["auto","hidden","visible","scroll"],function(t){l("overflow-".concat(t),"overflow: ".concat(t,";")),l("overflow-x-".concat(t),"overflow-x: ".concat(t,";")),l("overflow-y-".concat(t),"overflow-y: ".concat(t,";"))}),i(["auto","none","contain"],function(t){l("overscroll-".concat(t),"overscroll-behavior: ".concat(t,";")),l("overscroll-x-".concat(t),"overscroll-behavior-x: ".concat(t,";")),l("overscroll-y-".concat(t),"overscroll-behavior-y: ".concat(t,";"))}),l("visible","visibility: visible;"),l("invisible","visibility: hidden;"),i([0,10,20,30,40,50,"auto"],function(t){return l("z-".concat(t),"z-index: ".concat(t,";"))}),l("border-collapse","border-collapse: collapse;"),l("border-separate","border-collapse: separate;"),l("table-auto","table-layout: auto;"),l("table-fixed","table-layout: fixed;")}("undefined"!=typeof window&&window||global),function(t){if(!t.$vs)return console.error("Vimesh style core is not loaded!");var n,a=t.$vs._.each,r=t.$vs._.register,o=t.$vs._.generateSizes,e=t.$vs._.generateColors,c=t.$vs.config,i=c.prefix,t=$vs._,l=t.rgbToHex,s=t.resolveColor,u=t.addInitStyle,f=t.isString;for(r("font-",function(t){t=t.name.split("-"),t=c.fonts[t[1]];return t?"font-family: ".concat(t,";"):null}),a({xs:[.75,1],sm:[.875,1.25],base:[1,1.5],lg:[1.125,1.75],xl:[1.25,1.75],"2xl":[1.5,2],"3xl":[1.875,2.25],"4xl":[2.25,2.5],"5xl":[3],"6xl":[3.75],"7xl":[4.5],"8xl":[6],"9xl":[8]},function(t,n){return r("text-".concat(n),"font-size: ".concat(t[0],"rem;line-height: ").concat(1<t.length?"".concat(t[1],"rem"):1,";"))}),r("antialiased","-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"),r("subpixel-antialiased","-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"),r("italic","font-style: italic;"),r("not-italic","font-style: normal;"),a(["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],function(t,n){return r("font-".concat(t),"font-weight: ".concat(100*(n+1),";"))}),a({tighter:-.05,tight:-.025,normal:0,wide:.025,wider:.05,widest:.1},function(t,n){return r("tracking-".concat(n),"letter-spacing: ".concat(t,"em;"))}),n=3;n<=10;n++)r("leading-".concat(n),"line-height: ".concat(.25*n,"rem;"));a({none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},function(t,n){return r("leading-".concat(n),"line-height: ".concat(t,";"))}),a(["none","disc","decimal"],function(t){return r("list-".concat(t),"list-style-type: ".concat(t,";"))}),a(["inside","outside"],function(t){return r("list-".concat(t),"list-style-position: ".concat(t,";"))}),e("placeholder","color","::placeholder"),e("text","color"),a(["left","center","right","justify"],function(t){return r("text-".concat(t),"text-align: ".concat(t,";"))}),a(["underline","line-through","none"],function(t){return r("".concat("none"==t?"no-underline":t),"text-decoration: ".concat(t,";"))}),a(["uppercase","lowercase","capitalize","none"],function(t){return r("".concat("none"==t?"normal-case":t),"text-transform: ".concat(t,";"))}),a(["ellipsis","clip"],function(t){return r("overflow-".concat(t),"text-overflow: ".concat(t))}),r("truncate","overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"),a(["baseline","top","middle","bottom","text-top","text-bottom"],function(t){return r("align-".concat(t),"vertical-align: ".concat(t,";"))}),a(["normal","nowrap","pre","pre-line","pre-wrap"],function(t){return r("whitespace-".concat(t),"white-space: ".concat(t,";"))}),r("break-normal","overflow-wrap: normal; word-break: normal;"),r("break-words","overflow-wrap: break-word;"),r("break-all","word-break: break-all;"),a(["fixed","local","scroll"],function(t){return r("bg-".concat(t),"background-attachment: ".concat(t))}),a(["text","content","padding","border"],function(t){return r("bg-clip-".concat(t),"background-clip: ".concat(t).concat("text"==t?"":"-box",";"))}),e("bg","background-color"),a(["border","padding","content"],function(t){return r("bg-origin-".concat(t),"background-origin: ".concat(t,"-box;"))}),a(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],function(t){return r("bg-".concat(t),"background-position: ".concat(t.replace("-"," "),";"))}),a(["repeat","no-repeat","repeat-x","repeat-y","round","space"],function(t){return r("bg-".concat(-1!=t.indexOf("repeat")?t:"repeat-".concat(t)),"background-repeat: ".concat(t,";"))}),a(["auto","cover","contain"],function(t){return r("bg-".concat(t),"background-size: ".concat(t,";"))}),r("bg-none","background-image: none;");function d(){return u("*, ::before, ::after {--".concat(i,"-shadow: 0 0 #0000;}"))}function p(){d(),u("*, ::before, ::after {--".concat(i,"-ring-inset: var(--").concat(i,"-empty,/*!*/ /*!*/); --").concat(i,"-ring-offset-width: 0px; --").concat(i,"-ring-offset-color: #fff; --").concat(i,"-ring-color: rgba(59, 130, 246, 0.5); --").concat(i,"-ring-offset-shadow: 0 0 #0000; --").concat(i,"-ring-shadow: 0 0 #0000;}"))}var b={t:"top",r:"right",b:"bottom",l:"left"},g=["t","tr","r","br","b","bl","l","tl"],m=(a(g,function(t){return r("bg-gradient-to-".concat(t),"background-image: linear-gradient(to ".concat(1==t.length?b[t[0]]:"".concat(b[t[0]]," ").concat(b[t[1]]),", var(--").concat(i,"-gradient-stops));"))}),r("from-",function(t){t=s(t.name.substring("from-".length));return t?"--".concat(i,"-gradient-from: ").concat(f(t)?t:"#"+l(t),"; --").concat(i,"-gradient-stops: var(--").concat(i,"-gradient-from), var(--").concat(i,"-gradient-to, rgba(").concat(t.r,",").concat(t.g,",").concat(t.b,", 0));"):null}),r("to-",function(t){t=s(t.name.substring("to-".length));return t?"--".concat(i,"-gradient-to: ").concat(f(t)?t:"#"+l(t),";"):null}),r("via-",function(t){t=s(t.name.substring("via-".length));return t?"--".concat(i,"-gradient-stops: var(--").concat(i,"-gradient-from), ").concat(f(t)?t:"#"+l(t),", var(--").concat(i,"-gradient-to, rgba(").concat(t.r,",").concat(t.g,",").concat(t.b,", 0));"):null}),r("fill-current","fill: currentColor;"),r("stroke-current","stroke: currentColor;"),a([0,1,2],function(t){return r("stroke-".concat(t),"stroke-width: ".concat(t))}),r("rounded-none","border-radius: 0px;"),a({none:"0px",sm:.125,_:.25,md:.375,lg:.5,xl:.75,"2xl":1,"3xl":1.5,full:"9999px"},function(e,c){e=f(e)?e:e+"rem",r("rounded".concat("_"==c?"":"-".concat(c)),"border-radius: ".concat(e,";")),a(g,function(t){var n,o;1==t.length?(o=(n="t"==t||"b"==t)?["l","r"]:["t","b"],r("rounded-".concat(t).concat("_"==c?"":"-".concat(c)),"border-".concat(n?b[t]:b[o[0]],"-").concat(n?b[o[0]]:b[t],"-radius: ").concat(e,"; border-").concat(n?b[t]:b[o[1]],"-").concat(n?b[o[1]]:b[t],"-radius: ").concat(e,";"))):r("rounded-".concat(t).concat("_"==c?"":"-".concat(c)),"border-".concat(b[t[0]],"-").concat(b[t[1]],"-radius: ").concat(e,"; "))})}),a([0,1,2,4,8],function(n){r("border".concat(1==n?"":"-".concat(n)),"border-width: ".concat(n,"px;")),a(Object.keys(b),function(t){return r("border-".concat(t).concat(1==n?"":"-".concat(n)),"border-".concat(b[t],"-width: ").concat(n,"px;"))})}),e("border","border-color"),a(["solid","dashed","dotted","double","none"],function(t){return r("border-".concat(t),"border-style: ".concat(t,";"))})," > :not([hidden]) ~ :not([hidden])"),h=(a(["x","y"],function(n){var o="x"==n?["left","right"]:["top","bottom"];r("divide-".concat(n,"-reverse"),{name:"$".concat(m),style:"--".concat(i,"-divide-").concat(n,"-reverse: 1;")}),a([0,1,2,4,8],function(t){r("divide-".concat(n).concat(1==t?"":"-".concat(t)),{name:"$".concat(m),style:"--".concat(i,"-divide-").concat(n,"-reverse: 0; border-").concat(o[0],"-width: calc(").concat(t,"px * calc(1 - var(--").concat(i,"-divide-").concat(n,"-reverse))); border-").concat(o[1],"-width: calc(").concat(t,"px * var(--").concat(i,"-divide-").concat(n,"-reverse));")})})}),e("divide","border-color",m),a(["solid","dashed","dotted","double","none"],function(t){return r("divide-".concat(t),{name:"$".concat(m),style:"border-style: ".concat(t,";")})}),r("ring-inset","--".concat(i,"-ring-inset: inset;")),a([0,1,2,4,8,3],function(t){return r("ring".concat(3==t?"":"-".concat(t)),"--".concat(i,"-ring-offset-shadow: var(--").concat(i,"-ring-inset) 0 0 0 var(--").concat(i,"-ring-offset-width) var(--").concat(i,"-ring-offset-color); --").concat(i,"-ring-shadow: var(--").concat(i,"-ring-inset) 0 0 0 calc(").concat(t,"px + var(--").concat(i,"-ring-offset-width)) var(--").concat(i,"-ring-color); box-shadow: var(--").concat(i,"-ring-offset-shadow), var(--").concat(i,"-ring-shadow), var(--").concat(i,"-shadow, 0 0 #0000);"),p)}),e("ring","--".concat(i,"-ring-color")),a([0,1,2,4,8],function(t){return r("ring-offset-".concat(t),"--".concat(i,"-ring-offset-width: ").concat(t,"px;"))}),"ring-offset-"),y=(r(h,function(t){t=s(t.name.substring(h.length));return t?"--".concat(i,"-ring-offset-color: ").concat(f(t)?t:"#"+l(t),"; "):null}),"box-shadow: var(--".concat(i,"-ring-offset-shadow, 0 0 #0000), var(--").concat(i,"-ring-shadow, 0 0 #0000), var(--").concat(i,"-shadow);")),t=(a({sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",_:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"0 0 #0000"},function(t,n){return r("shadow".concat("_"==n?"":"-".concat(n)),"--".concat(i,"-shadow: ").concat(t,";").concat(y))},d),r("opacity-",function(t){t=t.name.split("-");return"opacity: ".concat(+t[1]/100,";")}),["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]),x=(a(t,function(t){return r("mix-blend-".concat(t),"mix-blend-mode: ".concat(t,";"))}),a(t,function(t){return r("bg-blend-".concat(t),"background-blend-mode: ".concat(t,";"))}),a({none:"none",all:"all",opacity:"opacity",shadow:"box-shadow",transform:"transform",_:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"background-color, border-color, color, fill, stroke"},function(t,n){return r("transition".concat("_"==n?"":"-".concat(n)),"transition-property: ".concat(t,"; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"))}),r("duration-",function(t){t=t.name.split("-");return"transition-duration: ".concat(t[1],"ms;")}),a({linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},function(t,n){return r("ease-".concat(n),"transition-timing-function: ".concat(t,";"))}),r("delay-",function(t){t=t.name.split("-");return"transition-delay: ".concat(t[1],"ms;")}),"animate-"),e=(r(x,function(t){t=t.name.substring(x.length),t=c.animation[t];return t?"animation: ".concat(t,";"):null},function(t){t=t.name.substring(x.length);c.keyframes[t]&&u("@keyframes ".concat(t).concat(c.keyframes[t]))}),"--".concat(i,"-translate-x: 0; --").concat(i,"-translate-y: 0; --").concat(i,"-rotate: 0; --").concat(i,"-skew-x: 0; --").concat(i,"-skew-y: 0; --").concat(i,"-scale-x: 1; --").concat(i,"-scale-y: 1;")),t="rotate(var(--".concat(i,"-rotate)) skewX(var(--").concat(i,"-skew-x)) skewY(var(--").concat(i,"-skew-y)) scaleX(var(--").concat(i,"-scale-x)) scaleY(var(--").concat(i,"-scale-y));");function v(o,e){a(["x","y"],function(n){return a(["","-"],function(t){r("".concat(t,"translate-").concat(n,"-").concat(o),"--".concat(i,"-translate-").concat(n,": ").concat(t).concat(e,";"))})})}r("transform","".concat(e,"transform: translateX(var(--").concat(i,"-translate-x)) translateY(var(--").concat(i,"-translate-y)) ").concat(t)),r("transform-gpu","".concat(e,"translate3d(var(--").concat(i,"-translate-x), var(--").concat(i,"-translate-y), 0) ").concat(t)),r("transform-none","transform: none;"),a(["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],function(t){return r("origin-".concat(t),"transform-origin: ".concat(t.replace("-"," "),";"))}),r("scale-",function(t){var t=t.name.split("-"),n=+t[t.length-1]/100;return(2==t.length?"--".concat(i,"-scale-x: ").concat(n,";--").concat(i,"-scale-y: "):"--".concat(i,"-scale-").concat(t[1],": ")).concat(n,";")}),r(["rotate-","-rotate-"],function(t){var t=t.name,n="",t=("-"==t[0]&&(t=t.substring(1),n="-"),t.split("-"));return"--".concat(i,"-rotate: ").concat(n).concat(t[1],"deg;")}),o(v),a([2,3,4],function(t){for(n=1;n<t;n++)v("".concat(n,"/").concat(t),"".concat(+(100*n/t).toFixed(6),"%;"))}),v("full","100%"),a([0,1,2,3,6,12],function(o){return a(["x","y"],function(n){return a(["","-"],function(t){r("".concat(t,"skew-").concat(n,"-").concat(o),"--".concat(i,"-skew-").concat(n,": ").concat(t).concat(o,"deg;"))})})}),r("appearance-none","appearance: none;"),a(["auto","default","pointer","wait","text","move","help","not-allowed"],function(t){return r("cursor-".concat(t),"cursor: ".concat(t,";"))}),a(["none","white","black"],function(t){return r("outline-".concat(t),"outline: 2px ".concat("none"==t?"solid transparent":"dotted ".concat(t),"; outline-offset: 2px;"))}),a(["none","auto"],function(t){return r("pointer-events-".concat(t),"pointer-events: ".concat(t,";"))}),a({none:"none",y:"vertical",x:"horizontal",_:"both"},function(t,n){return r("resize".concat("_"==n?"":"-".concat(n)),"resize: ".concat(t,";"))}),a(["none","text","all","auto"],function(t){return r("select-".concat(t),"user-select: ".concat(t,";"))}),r("sr-only","position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"),r("not-sr-only","position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;")}("undefined"!=typeof window&&window||global);