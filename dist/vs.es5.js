// Vimesh Style (ES5) v0.10.2
"use strict";function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_unsupportedIterableToArray(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,c=new Array(n);o<n;o++)c[o]=t[o];return c}function _iterableToArrayLimit(t,n){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var c,e,a=[],r=!0,i=!1;try{for(o=o.call(t);!(r=(c=o.next()).done)&&(a.push(c.value),!n||a.length!==n);r=!0);}catch(t){i=!0,e=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw e}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_unsupportedIterableToArray(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,c=new Array(n);o<n;o++)c[o]=t[o];return c}function _iterableToArrayLimit(t,n){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var c,e,a=[],r=!0,i=!1;try{for(o=o.call(t);!(r=(c=o.next()).done)&&(a.push(c.value),!n||a.length!==n);r=!0);}catch(t){i=!0,e=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw e}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(t){var n,r,e,o,c,a,i,l,s,u,f,d,p,b,g,m,h,x,v,y,w;function k(t){return null!=t&&"string"==typeof t.valueOf()}function A(t){return Array.isArray(t)}function _(t){return"function"==typeof t}function z(t,c){A(t)?t.forEach(function(t,n){c(t,n,n)}):Object.entries(t).forEach(function(t,n){var t=_slicedToArray(t,2),o=t[0],t=t[1];c(t,o,n)})}function S(t){var n=arguments.length<=1?0:arguments.length-1;if(n<1||null==t)return t;for(var o=0;o<n;o++){var c,e=o+1<1||arguments.length<=o+1?void 0:arguments[o+1];for(c in e)t[c]=e[c]}return t}function T(t,n){if(void 0===n&&(n=t,t=e.body),!t)return $(function(){return T(e.body,n)});new MutationObserver(n).observe(t,{attributes:!0,childList:!0,subtree:!0})}function $(t){t&&(o?t():c.push(t))}function C(){for(var t=e.querySelectorAll("*[class]"),n=t.length,o=0;o<n;o++){var c=t[o].className;c&&(O(c),c.baseVal&&O(c.baseVal),c.animVal&&O(c.animVal))}}function j(t){var n,o,c;if(k(t))return o=n=null,t=(c=t.split(":"))[c.length-1],3===c.length?(n=c[0],o=c[1]):2===c.length&&(r.breakpoints[c[0]]?n=c[0]:o=c[0]),{breakpoint:n,pseudo:o,name:t};console.error("Wrong parameter ".concat(t))}function I(t,n,o){n&&(A(t)||(t=[t]),_(n)?z(t,function(t){b.push({prefix:t,generator:n,init:o})}):z(t,function(t){i[t]=n,o&&(l[t]=o)}))}function M(t){if(!t)return null;var n=j(t),o=n.name,c=i[o];c&&l[o]&&l[o](n);for(var e=0;!c&&e<b.length;e++){var a=b[e];0==o.indexOf(a.prefix)&&(c=a.generator(n))&&a.init&&a.init(n)}return c}function L(){var t=f.concat(u,d);p&&0<t.length&&(p.innerHTML!==(t=(r.preset?s:[]).concat(t).join("\n"))&&(p.innerHTML=t))}function O(t){t&&(z(t=k(t)?t.split(" "):t,function(t){var n,o,c;t&&!a[t]&&(n=M(t))&&(c=(o=j(t)).name.replace(/:/g,"\\:").replace(/\//g,"\\/").replace(/\./g,"\\."),o.pseudo&&(c="".concat(o.pseudo,"\\:").concat(c,":").concat(o.pseudo)),o.breakpoint&&(c="".concat(o.breakpoint,"\\:").concat(c)),n.name&&(0==n.name.indexOf("$")?c+=n.name.substring(1):c=n.name,n=n.style),n="{".concat(n,"}"),n=o.breakpoint?"@media (min-width: ".concat(r.breakpoints[o.breakpoint],"px) {\n  .").concat(c," ").concat(n," \n}"):".".concat(c," ").concat(n," "),a[t]=!0,u.push(n))}),L())}function E(t){t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function H(t){var n=t.r,o=t.g,t=t.b;return((1<<24)+(Math.round(n)<<16)+(Math.round(o)<<8)+Math.round(t)).toString(16).slice(1)}function R(t,n){if(6===n)return t;var o,c,e,a=n<=6,t=function(t){var n,o=t.r,c=t.g,e=t.b,t=(o/=255,c/=255,e/=255,Math.max(o,c,e)),a=Math.min(o,c,e),r=t,i=t-a,l=0==t?0:i/t;if(t==a)n=0;else{switch(t){case o:n=(c-e)/i+(c<e?6:0);break;case c:n=(e-o)/i+2;break;case e:n=(o-c)/i+4}n/=6}return{h:n,s:l,v:r}}(E(t)),n=a?y+1-n:n-y-1,t={h:360*t.h,s:t.s,v:t.v};return H(function(t){var n,o,c,e=t.h,a=t.s,r=t.v,t=Math.floor(6*e),i=r*(1-a),l=r*(1-(e=6*e-t)*a),s=r*(1-(1-e)*a);switch(t%6){case 0:n=r,o=s,c=i;break;case 1:n=l,o=r,c=i;break;case 2:n=i,o=r,c=s;break;case 3:n=i,o=l,c=r;break;case 4:n=s,o=i,c=r;break;case 5:n=r,o=i,c=l}return{r:255*n,g:255*o,b:255*c}}({h:(c=n,e=a,(e=60<=(o=t).h&&o.h<=240?e?o.h-g*c:o.h+g*c:e?o.h+g*c:o.h-g*c)<0?e+=360:360<=e&&(e-=360),Math.round(e)/360),s:(o=t,c=n,1<(o=a?o.s-m*c:c===w?o.s+m:o.s+h*c)&&(o=1),(o=a&&c===y&&.1<o?.1:o)<.06&&(o=.06),Number(o.toFixed(2))),v:(e=t,c=n,(o=1<(o=(o=a)?e.v+x*c:e.v-v*c)?1:o)<0&&(o=0),Number(o.toFixed(2)))}))}function F(t){if(!t)return null;var n=null;if(r.specialColors[t])"#"==(n=r.specialColors[t])[0]&&(n=E(n));else{var o=t.lastIndexOf("-"),c=null;if(-1!=o){var c=t.substring(o+1),e=(t=t.substring(0,o)).split("-");if(1<e.length){t=e[0];for(var a=1;a<e.length;a++)0<e[a].length&&(t+=e[a][0].toUpperCase()+e[a].substring(1))}}o=r.colors[t];if(!o)return null;c=c?+c:500,c=50==c?1:c/100+1;if(A(o))return o[c-1];n=E(R(o,c))}return n}t.$vs||(t.$vs={config:{auto:!0,prefix:"vs",preset:!0,breakpoints:{sm:640,md:768,lg:1024,xl:1280,"2xl":1536},fonts:{sans:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',serif:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},colors:{rose:"f43f5e",pink:"ec4899",fuchsia:"d946ef",purple:"a855f7",violet:"8b5cf6",indigo:"6366f1",blue:"3b82f6",sky:"0ea5e9",lightBlue:"0ea5e9",cyan:"06b6d4",teal:"14b8a6",emerald:"10b981",green:"22c55e",lime:"84cc16",yellow:"eab308",amber:"f59e0b",orange:"f97316",red:"ef4444",gray:["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"]},specialColors:{white:"#ffffff",black:"#000000",transparent:"transparent",current:"currentColor"},keyframes:{spin:"{to{transform:rotate(360deg)}}",ping:"{75%,100%{transform:scale(2);opacity:0}}",pulse:"{50%{opacity:.5}}",bounce:"{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}"},animation:{none:"",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"}}},n=t.$vs,r=n.config,e=document,o=!(n._={isString:k,isArray:A,isFunction:_,each:z,extend:S}),c=[],e.addEventListener&&e.addEventListener("DOMContentLoaded",function(){for(o=!0;c[0];)c.shift()()},!1),$(function(){p=e.createElement("style"),e.head.appendChild(p),L(),r.auto&&C()}),T(function(){r.auto&&C()}),a={},i=n.classMap={},l={},s=[],u=[],f=[],d=[],p=null,b=n.generators=[],g=2,m=.16,x=h=.05,v=.15,y=5,w=4,S(n,{domReady:$,domChange:T,hexToRgb:E,rgbToHex:H,register:I,resolveColor:F,generateColors:function(n,o,c){var e="--".concat(r.prefix,"-").concat(n,"-opacity");I("".concat(n,"-opacity-"),function(t){t=t.name.split("-"),t="".concat(e,": ").concat(+t[2]/100,";");return c?{name:"$".concat(c),style:t}:t}),I("".concat(n,"-"),function(t){t=F(t.name.substring(n.length+1));if(!t)return null;t=k(t)?"".concat(o,": ").concat(t,";"):"".concat(e,":1;").concat(o,": rgba(").concat(t.r,",").concat(t.g,",").concat(t.b,",var(").concat(e,"));");return c?{name:"$".concat(c),style:t}:t})},generateSizes:function(t){for(var n=0;n<=96;n++)13==n||15==n||16<=n&&(n-16)%4!=0||(t(n,"".concat(.25*n).concat(0==n?"px":"rem")),1==n&&t("px","1px"),n<=3&&t(n+.5,"".concat(.25*n+.125,"rem")))},resolveClass:M,addPresetStyle:function(t){-1==s.indexOf(t)&&(s.push(t),L())},addInitStyle:function(t){-1==f.indexOf(t)&&(f.push(t),L())},addCustomStyle:function(t){-1==d.indexOf(t)&&(d.push(t),L())},updateAutoStyles:L,resetAutoStyles:function(){a={},u=[],p&&(p.innerHTML=null)},resolveAllKnownClasses:C,addClassesToAutoStyles:O}),t.vsSetup&&t.vsSetup(n))}(window),function(t){t.$vs?t.$vs.addPresetStyle("html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}"):console.error("Vimesh style core is not loaded!")}(window),function(t){if(!t.$vs)return console.error("Vimesh style core is not loaded!");var a,i=t.$vs._.each,l=t.$vs.register,n=t.$vs.generateSizes,o=t.$vs.config,r=o.prefix,c=(l("container",function(t){return t.breakpoint?"max-width: ".concat(o.breakpoints[t.breakpoint],"px;"):"width: 100%;"}),i(["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-row","table-column-group","table-footer-group","table-header-group","table-row-group","flow-root","grid","inline-grid","contents","list-item","hidden"],function(t){return l(t,"display: ".concat("hidden"===t?"none":t,";"))}),l("flex-grow-0","flex-grow: 0;"),l("flex-grow","flex-grow: 1;"),l("flex-shrink-0","flex-shrink: 0;"),l("flex-shrink","flex-shrink: 1;"),i({1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},function(t,n){return l("flex-".concat(n),"flex: ".concat(t,";"))}),i(["row","row-reverse","col","col-reverse"],function(t){return l("flex-".concat(t),"flex-direction: ".concat(t,";"))}),i(["wrap","wrap-reverse","nowrap"],function(t){return l("flex-".concat(t),"flex-wrap: ".concat(t,";"))}),i(["left","right","both","none"],function(t){return l("clear-".concat(t),"clear: ".concat(t,";"))}),i(["static","fixed","absolute","relative","sticky"],function(t){return l(t,"position: ".concat(t,";"))}),i({auto:"auto",full:"100%",screen:"100vw",min:"min-content",max:"max-content"},function(t,n){return l("w-".concat(n),"width: ".concat(t,";"))}),i({auto:"auto",full:"100%",screen:"100vh"},function(t,n){return l("h-".concat(n),"height: ".concat(t,";"))}),i([2,3,4,5,6,12],function(t){for(a=1;a<t;a++)l("w-".concat(a,"/").concat(t),"width: ".concat(+(100*a/t).toFixed(6),"%;")),l("h-".concat(a,"/").concat(t),"height: ".concat(+(100*a/t).toFixed(6),"%;"))}),n(function(t,n){l("w-".concat(t),"width: ".concat(n,";")),l("h-".concat(t),"height: ".concat(n,";"))}),{0:"0px",full:"100%",min:"min-content",max:"max-content"});for(i(c,function(t,n){return l("min-w-".concat(n),"min-width: ".concat(t,";"))}),c.none="none",c.prose="65ch",i(["xs","sm","md","lg","xl"],function(t,n){return c[t]="".concat(20+4*n,"rem")}),i(["sm","md","lg","xl","2xl"],function(t){return c["screen-".concat(t)]="".concat(o.breakpoints[t],"px")}),a=2;a<=7;a++)c["".concat(a,"xl")]="".concat(30+6*a,"rem");i(c,function(t,n){return l("max-w-".concat(n),"max-width: ".concat(t,";"))}),i({0:"0px",full:"100%",screen:"100vh"},function(t,n){l("min-h-".concat(n),"min-height: ".concat(t,";")),l("max-h-".concat(n),"max-height: ".concat(t,";"))}),n(function(t,n){l("max-h-".concat(t),"max-height: ".concat(n,";"))}),n(function(a,r){l("p-".concat(a),"padding: ".concat(r,";"));var t="padding-left: ".concat(r,";"),n="padding-right: ".concat(r,";"),o="padding-top: ".concat(r,";"),c="padding-bottom: ".concat(r,";");l("px-".concat(a),"".concat(t).concat(n)),l("pl-".concat(a),"".concat(t)),l("pr-".concat(a),"".concat(n)),l("py-".concat(a),"".concat(o).concat(c)),l("pt-".concat(a),"".concat(o)),l("pb-".concat(a),"".concat(c)),i(["","-"],function(t){l("".concat(t,"m-").concat(a),"margin: ".concat(t).concat(r,";"));var n="margin-left: ".concat(t).concat(r,";"),o="margin-right: ".concat(t).concat(r,";"),c="margin-top: ".concat(t).concat(r,";"),e="margin-bottom: ".concat(t).concat(r,";");l("".concat(t,"mx-").concat(a),"".concat(n).concat(o)),l("".concat(t,"ml-").concat(a),"".concat(n)),l("".concat(t,"mr-").concat(a),"".concat(o)),l("".concat(t,"my-").concat(a),"".concat(c).concat(e)),l("".concat(t,"mt-").concat(a),"".concat(c)),l("".concat(t,"mb-").concat(a),"".concat(e))})}),n(function(a,r){i(["","-"],function(t){var n="left: ".concat(t).concat(r,";"),o="right: ".concat(t).concat(r,";"),c="top: ".concat(t).concat(r,";"),e="bottom: ".concat(t).concat(r,";");l("".concat(t,"inset-").concat(a),"".concat(n).concat(o).concat(c).concat(e)),l("".concat(t,"inset-x-").concat(a),"".concat(n).concat(o)),l("".concat(t,"left-").concat(a),"".concat(n)),l("".concat(t,"right-").concat(a),"".concat(o)),l("".concat(t,"inset-y-").concat(a),"".concat(c).concat(e)),l("".concat(t,"top-").concat(a),"".concat(c)),l("".concat(t,"bottom-").concat(a),"".concat(e))})});var s=" > :not([hidden]) ~ :not([hidden])";for(l("space-x-reverse",{name:"$".concat(s),style:"--".concat(r,"-space-x-reverse: 1;")}),l("space-y-reverse",{name:"$".concat(s),style:"--".concat(r,"-space-y-reverse: 1;")}),n(function(c,e){i({x:["right","left"],y:["top","bottom"]},function(n,o){return i(["","-"],function(t){l("".concat(t,"space-").concat(o,"-").concat(c),{name:"$".concat(s),style:"--".concat(r,"-space-").concat(o,"-reverse: 0;margin-").concat(n[0],": calc(").concat(t).concat(e," * var(--").concat(r,"-space-").concat(o,"-reverse));margin-").concat(n[1],": calc(").concat(t).concat(e," * calc(1 - var(--").concat(r,"-space-").concat(o,"-reverse)));")})})})}),i({first:-9999,last:9999,none:0},function(t,n){return l("order-".concat(n),"order: ".concat(t,";"))}),a=1;a<=12;a++)l("order-".concat(a),"order: ".concat(a,";"));for(l("grid-cols-none","grid-template-columns: none;"),a=1;a<=12;a++)l("grid-cols-".concat(a),"grid-template-columns: repeat(".concat(a,", minmax(0, 1fr));"));for(i([["col","column"],["row","row"]],function(t,n){var t=_slicedToArray(t,2),o=t[0],c=t[1],e=(l("".concat(o,"-auto"),"grid-".concat(c,": auto;")),l("".concat(o,"-span-full"),"grid-".concat(c,": 1 / -1;")),l("".concat(o,"-start-auto"),"grid-".concat(c,"-start: auto;")),l("".concat(o,"-end-auto"),"grid-".concat(c,"-end: auto;")),n?7:13);for(a=1;a<=e;a++)l("".concat(o,"-span-").concat(a),"grid-".concat(c,": span ").concat(a," / span ").concat(a,";")),l("".concat(o,"-start-").concat(a),"grid-".concat(c,"-start: span ").concat(a," / span ").concat(a,";")),l("".concat(o,"-end-").concat(a),"grid-".concat(c,"-end: span ").concat(a," / span ").concat(a,";"))}),l("grid-rows-none","grid-template-rows: none;"),a=1;a<=6;a++)l("grid-rows-".concat(a),"grid-template-rows: repeat(".concat(a,", minmax(0, 1fr));"));i(["row","col","row-dense","col-dense"],function(t){return l("grid-flow-".concat(t),"grid-auto-flow: ".concat(t,";"))}),i({auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},function(t,n){l("auto-cols-".concat(n),"grid-auto-columns: ".concat(t,";")),l("auto-rows-".concat(n),"grid-auto-rows: ".concat(t,";"))}),n(function(t,n){l("gap-".concat(t),"gap: ".concat(n,";")),l("gap-x-".concat(t),"column-gap: ".concat(n,";")),l("gap-y-".concat(t),"row-gap: ".concat(n,";"))}),i({start:"flex-start",end:"flex-end",center:"center",between:"space-between",around:"space-around",evenly:"space-evenly"},function(t,n){l("justify-".concat(n),"justify-content: ".concat(t,";")),l("content-".concat(n),"align-content: ".concat(t,";"))}),i({start:"start",end:"end",center:"center",stretch:"stretch",between:"space-between",around:"space-around",evenly:"space-evenly"},function(t,n){l("place-content-".concat(n),"place-content: ".concat(t,";"))}),i(["start","end","center","stretch"],function(t){l("justify-items-".concat(t),"justify-items: ".concat(t,";")),l("place-items-".concat(t),"place-items: ".concat(t,";"))}),i(["auto","start","end","center","stretch"],function(t){l("justify-self-".concat(t),"justify-self: ".concat(t,";")),l("place-self-".concat(t),"place-self: ".concat(t,";"))}),i(["start","end","center","baseline","stretch"],function(t){return l("items-".concat(t),"align-items: ".concat(t,";"))}),i(["auto","start","end","center","baseline","stretch"],function(t){return l("self-".concat(t),"align-self: ".concat(t,";"))}),l("decoration-slice","box-decoration-break: slice;"),l("decoration-clone","box-decoration-break: clone;"),l("box-border","box-sizing: border-box;"),l("box-content","box-sizing: content-box;"),l("isolate","isolation: isolate;"),l("isolation-auto","isolation: auto;"),i(["left","right","none"],function(t){return l("float-".concat(t),"float: ".concat(t,";"))}),i(["contain","cover","fill","none","scale-down"],function(t){return l("object-".concat(t),"object-fit: ".concat(t,";"))}),i(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],function(t){return l("object-".concat(t),"object-position: ".concat(t.replace("-"," "),";"))}),i(["auto","hidden","visible","scroll"],function(t){l("overflow-".concat(t),"overflow: ".concat(t,";")),l("overflow-x-".concat(t),"overflow-x: ".concat(t,";")),l("overflow-y-".concat(t),"overflow-y: ".concat(t,";"))}),i(["auto","none","contain"],function(t){l("overscroll-".concat(t),"overscroll-behavior: ".concat(t,";")),l("overscroll-x-".concat(t),"overscroll-behavior-x: ".concat(t,";")),l("overscroll-y-".concat(t),"overscroll-behavior-y: ".concat(t,";"))}),l("visible","visibility: visible;"),l("invisible","visibility: hidden;"),i([0,10,20,30,40,50,"auto"],function(t){return l("z-".concat(t),"z-index: ".concat(t,";"))}),l("border-collapse","border-collapse: collapse;"),l("border-separate","border-collapse: separate;"),l("table-auto","table-layout: auto;"),l("table-fixed","table-layout: fixed;")}(window),function(t){if(!t.$vs)return console.error("Vimesh style core is not loaded!");var n,a=t.$vs._.each,r=t.$vs.register,o=t.$vs.generateSizes,c=t.$vs.generateColors,e=t.$vs.config,i=e.prefix,t=$vs,l=t.rgbToHex,s=t.resolveColor,u=t.addInitStyle,f=t._.isString;for(r("font-",function(t){t=t.name.split("-"),t=e.fonts[t[1]];return t?"font-family: ".concat(t,";"):null}),a({xs:[.75,1],sm:[.875,1.25],base:[1,1.5],lg:[1.125,1.75],xl:[1.25,1.75],"2xl":[1.5,2],"3xl":[1.875,2.25],"4xl":[2.25,2.5],"5xl":[3],"6xl":[3.75],"7xl":[4.5],"8xl":[6],"9xl":[8]},function(t,n){return r("text-".concat(n),"font-size: ".concat(t[0],"rem;line-height: ").concat(1<t.length?"".concat(t[1],"rem"):1,";"))}),r("antialiased","-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"),r("subpixel-antialiased","-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"),r("italic","font-style: italic;"),r("not-italic","font-style: normal;"),a(["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],function(t,n){return r("font-".concat(t),"font-weight: ".concat(100*(n+1),";"))}),a({tighter:-.05,tight:-.025,normal:0,wide:.025,wider:.05,widest:.1},function(t,n){return r("tracking-".concat(n),"letter-spacing: ".concat(t,"em;"))}),n=3;n<=10;n++)r("leading-".concat(n),"line-height: ".concat(.25*n,"rem;"));a({none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},function(t,n){return r("leading-".concat(n),"line-height: ".concat(t,";"))}),a(["none","disc","decimal"],function(t){return r("list-".concat(t),"list-style-type: ".concat(t,";"))}),a(["inside","outside"],function(t){return r("list-".concat(t),"list-style-position: ".concat(t,";"))}),c("placeholder","color","::placeholder"),c("text","color"),a(["left","center","right","justify"],function(t){return r("text-".concat(t),"text-align: ".concat(t,";"))}),a(["underline","line-through","none"],function(t){return r("".concat("none"==t?"no-underline":t),"text-decoration: ".concat(t,";"))}),a(["uppercase","lowercase","capitalize","none"],function(t){return r("".concat("none"==t?"normal-case":t),"text-transform: ".concat(t,";"))}),a(["ellipsis","clip"],function(t){return r("overflow-".concat(t),"text-overflow: ".concat(t))}),r("truncate","overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"),a(["baseline","top","middle","bottom","text-top","text-bottom"],function(t){return r("align-".concat(t),"vertical-align: ".concat(t,";"))}),a(["normal","nowrap","pre","pre-line","pre-wrap"],function(t){return r("whitespace-".concat(t),"white-space: ".concat(t,";"))}),r("break-normal","overflow-wrap: normal; word-break: normal;"),r("break-words","overflow-wrap: break-word;"),r("break-all","word-break: break-all;"),a(["fixed","local","scroll"],function(t){return r("bg-".concat(t),"background-attachment: ".concat(t))}),a(["text","content","padding","border"],function(t){return r("bg-clip-".concat(t),"background-clip: ".concat(t).concat("text"==t?"":"-box",";"))}),c("bg","background-color"),a(["border","padding","content"],function(t){return r("bg-origin-".concat(t),"background-origin: ".concat(t,"-box;"))}),a(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],function(t){return r("bg-".concat(t),"background-position: ".concat(t.replace("-"," "),";"))}),a(["repeat","no-repeat","repeat-x","repeat-y","round","space"],function(t){return r("bg-".concat(-1!=t.indexOf("repeat")?t:"repeat-".concat(t)),"background-repeat: ".concat(t,";"))}),a(["auto","cover","contain"],function(t){return r("bg-".concat(t),"background-size: ".concat(t,";"))}),r("bg-none","background-image: none;");function d(){return u("*, ::before, ::after {--".concat(i,"-shadow: 0 0 #0000;}"))}function p(){d(),u("*, ::before, ::after {--".concat(i,"-ring-inset: var(--").concat(i,"-empty,/*!*/ /*!*/); --").concat(i,"-ring-offset-width: 0px; --").concat(i,"-ring-offset-color: #fff; --").concat(i,"-ring-color: rgba(59, 130, 246, 0.5); --").concat(i,"-ring-offset-shadow: 0 0 #0000; --").concat(i,"-ring-shadow: 0 0 #0000;}"))}var b={t:"top",r:"right",b:"bottom",l:"left"},g=["t","tr","r","br","b","bl","l","tl"],m=(a(g,function(t){return r("bg-gradient-to-".concat(t),"background-image: linear-gradient(to ".concat(1==t.length?b[t[0]]:"".concat(b[t[0]]," ").concat(b[t[1]]),", var(--").concat(i,"-gradient-stops));"))}),r("from-",function(t){t=s(t.name.substring("from-".length));return t?"--".concat(i,"-gradient-from: ").concat(f(t)?t:"#"+l(t),"; --").concat(i,"-gradient-stops: var(--").concat(i,"-gradient-from), var(--").concat(i,"-gradient-to, rgba(").concat(t.r,",").concat(t.g,",").concat(t.b,", 0));"):null}),r("to-",function(t){t=s(t.name.substring("to-".length));return t?"--".concat(i,"-gradient-to: ").concat(f(t)?t:"#"+l(t),";"):null}),r("via-",function(t){t=s(t.name.substring("via-".length));return t?"--".concat(i,"-gradient-stops: var(--").concat(i,"-gradient-from), ").concat(f(t)?t:"#"+l(t),", var(--").concat(i,"-gradient-to, rgba(").concat(t.r,",").concat(t.g,",").concat(t.b,", 0));"):null}),r("fill-current","fill: currentColor;"),r("stroke-current","stroke: currentColor;"),a([0,1,2],function(t){return r("stroke-".concat(t),"stroke-width: ".concat(t))}),r("rounded-none","border-radius: 0px;"),a({none:"0px",sm:.125,_:.25,md:.375,lg:.5,xl:.75,"2xl":1,"3xl":1.5,full:"9999px"},function(c,e){c=f(c)?c:c+"rem",r("rounded".concat("_"==e?"":"-".concat(e)),"border-radius: ".concat(c,";")),a(g,function(t){var n,o;1==t.length?(o=(n="t"==t||"b"==t)?["l","r"]:["t","b"],r("rounded-".concat(t).concat("_"==e?"":"-".concat(e)),"border-".concat(n?b[t]:b[o[0]],"-").concat(n?b[o[0]]:b[t],"-radius: ").concat(c,"; border-").concat(n?b[t]:b[o[1]],"-").concat(n?b[o[1]]:b[t],"-radius: ").concat(c,";"))):r("rounded-".concat(t).concat("_"==e?"":"-".concat(e)),"border-".concat(b[t[0]],"-").concat(b[t[1]],"-radius: ").concat(c,"; "))})}),a([0,1,2,4,8],function(n){r("border".concat(1==n?"":"-".concat(n)),"border-width: ".concat(n,"px;")),a(Object.keys(b),function(t){return r("border-".concat(t).concat(1==n?"":"-".concat(n)),"border-".concat(b[t],"-width: ").concat(n,"px;"))})}),c("border","border-color"),a(["solid","dashed","dotted","double","none"],function(t){return r("border-".concat(t),"border-style: ".concat(t,";"))})," > :not([hidden]) ~ :not([hidden])"),h=(a(["x","y"],function(n){var o="x"==n?["left","right"]:["top","bottom"];r("divide-".concat(n,"-reverse"),{name:"$".concat(m),style:"--".concat(i,"-divide-").concat(n,"-reverse: 1;")}),a([0,1,2,4,8],function(t){r("divide-".concat(n).concat(1==t?"":"-".concat(t)),{name:"$".concat(m),style:"--".concat(i,"-divide-").concat(n,"-reverse: 0; border-").concat(o[0],"-width: calc(").concat(t,"px * calc(1 - var(--").concat(i,"-divide-").concat(n,"-reverse))); border-").concat(o[1],"-width: calc(").concat(t,"px * var(--").concat(i,"-divide-").concat(n,"-reverse));")})})}),c("divide","border-color",m),a(["solid","dashed","dotted","double","none"],function(t){return r("divide-".concat(t),{name:"$".concat(m),style:"border-style: ".concat(t,";")})}),r("ring-inset","--".concat(i,"-ring-inset: inset;")),a([0,1,2,4,8,3],function(t){return r("ring".concat(3==t?"":"-".concat(t)),"--".concat(i,"-ring-offset-shadow: var(--").concat(i,"-ring-inset) 0 0 0 var(--").concat(i,"-ring-offset-width) var(--").concat(i,"-ring-offset-color); --").concat(i,"-ring-shadow: var(--").concat(i,"-ring-inset) 0 0 0 calc(").concat(t,"px + var(--").concat(i,"-ring-offset-width)) var(--").concat(i,"-ring-color); box-shadow: var(--").concat(i,"-ring-offset-shadow), var(--").concat(i,"-ring-shadow), var(--").concat(i,"-shadow, 0 0 #0000);"),p)}),c("ring","--".concat(i,"-ring-color")),a([0,1,2,4,8],function(t){return r("ring-offset-".concat(t),"--".concat(i,"-ring-offset-width: ").concat(t,"px;"))}),"ring-offset-"),x=(r(h,function(t){t=s(t.name.substring(h.length));return t?"--".concat(i,"-ring-offset-color: ").concat(f(t)?t:"#"+l(t),"; "):null}),"box-shadow: var(--".concat(i,"-ring-offset-shadow, 0 0 #0000), var(--").concat(i,"-ring-shadow, 0 0 #0000), var(--").concat(i,"-shadow);")),t=(a({sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",_:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"0 0 #0000"},function(t,n){return r("shadow".concat("_"==n?"":"-".concat(n)),"--".concat(i,"-shadow: ").concat(t,";").concat(x))},d),r("opacity-",function(t){t=t.name.split("-");return"opacity: ".concat(+t[1]/100,";")}),["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]),v=(a(t,function(t){return r("mix-blend-".concat(t),"mix-blend-mode: ".concat(t,";"))}),a(t,function(t){return r("bg-blend-".concat(t),"background-blend-mode: ".concat(t,";"))}),a({none:"none",all:"all",opacity:"opacity",shadow:"box-shadow",transform:"transform",_:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"background-color, border-color, color, fill, stroke"},function(t,n){return r("transition".concat("_"==n?"":"-".concat(n)),"transition-property: ".concat(t,"; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"))}),r("duration-",function(t){t=t.name.split("-");return"transition-duration: ".concat(t[1],"ms;")}),a({linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},function(t,n){return r("ease-".concat(n),"transition-timing-function: ".concat(t,";"))}),r("delay-",function(t){t=t.name.split("-");return"transition-delay: ".concat(t[1],"ms;")}),"animate-"),c=(r(v,function(t){t=t.name.substring(v.length),t=e.animation[t];return t?"animation: ".concat(t,";"):null},function(t){t=t.name.substring(v.length);e.keyframes[t]&&u("@keyframes ".concat(t).concat(e.keyframes[t]))}),"--".concat(i,"-translate-x: 0; --").concat(i,"-translate-y: 0; --").concat(i,"-rotate: 0; --").concat(i,"-skew-x: 0; --").concat(i,"-skew-y: 0; --").concat(i,"-scale-x: 1; --").concat(i,"-scale-y: 1;")),t="rotate(var(--".concat(i,"-rotate)) skewX(var(--").concat(i,"-skew-x)) skewY(var(--").concat(i,"-skew-y)) scaleX(var(--").concat(i,"-scale-x)) scaleY(var(--").concat(i,"-scale-y));");function y(o,c){a(["x","y"],function(n){return a(["","-"],function(t){r("".concat(t,"translate-").concat(n,"-").concat(o),"--".concat(i,"-translate-").concat(n,": ").concat(t).concat(c,";"))})})}r("transform","".concat(c,"transform: translateX(var(--").concat(i,"-translate-x)) translateY(var(--").concat(i,"-translate-y)) ").concat(t)),r("transform-gpu","".concat(c,"translate3d(var(--").concat(i,"-translate-x), var(--").concat(i,"-translate-y), 0) ").concat(t)),r("transform-none","transform: none;"),a(["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],function(t){return r("origin-".concat(t),"transform-origin: ".concat(t.replace("-"," "),";"))}),r("scale-",function(t){var t=t.name.split("-"),n=+t[t.length-1]/100;return(2==t.length?"--".concat(i,"-scale-x: ").concat(n,";--").concat(i,"-scale-y: "):"--".concat(i,"-scale-").concat(t[1],": ")).concat(n,";")}),r(["rotate-","-rotate-"],function(t){var t=t.name,n="",t=("-"==t[0]&&(t=t.substring(1),n="-"),t.split("-"));return"--".concat(i,"-rotate: ").concat(n).concat(t[1],"deg;")}),o(y),a([2,3,4],function(t){for(n=1;n<t;n++)y("".concat(n,"/").concat(t),"".concat(+(100*n/t).toFixed(6),"%;"))}),y("full","100%"),a([0,1,2,3,6,12],function(o){return a(["x","y"],function(n){return a(["","-"],function(t){r("".concat(t,"skew-").concat(n,"-").concat(o),"--".concat(i,"-skew-").concat(n,": ").concat(t).concat(o,"deg;"))})})}),r("appearance-none","appearance: none;"),a(["auto","default","pointer","wait","text","move","help","not-allowed"],function(t){return r("cursor-".concat(t),"cursor: ".concat(t,";"))}),a(["none","white","black"],function(t){return r("outline-".concat(t),"outline: 2px ".concat("none"==t?"solid transparent":"dotted ".concat(t),"; outline-offset: 2px;"))}),a(["none","auto"],function(t){return r("pointer-events-".concat(t),"pointer-events: ".concat(t,";"))}),a({none:"none",y:"vertical",x:"horizontal",_:"both"},function(t,n){return r("resize".concat("_"==n?"":"-".concat(n)),"resize: ".concat(t,";"))}),a(["none","text","all","auto"],function(t){return r("select-".concat(t),"user-select: ".concat(t,";"))}),r("sr-only","position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"),r("not-sr-only","position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;")}(window);