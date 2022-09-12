// Vimesh Style v0.13.0
function setupCore(d){if(!d.$vs){d.$vs={config:{auto:!0,prefix:"vs",attributify:"all",preset:!0,breakpoints:{sm:640,md:768,lg:1024,xl:1280,"2xl":1536},fonts:{sans:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',serif:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},colors:{rose:"f43f5e",pink:"ec4899",fuchsia:"d946ef",purple:"a855f7",violet:"8b5cf6",indigo:"6366f1",blue:"3b82f6",sky:"0ea5e9",cyan:"06b6d4",teal:"14b8a6",emerald:"10b981",green:"22c55e",lime:"84cc16",yellow:"eab308",amber:"f59e0b",orange:"f97316",red:"ef4444",gray:["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"]},aliasColors:{lightBlue:"sky"},specialColors:{white:"#ffffff",black:"#000000",transparent:"transparent",current:"currentColor"},keyframes:{spin:"{to{transform:rotate(360deg)}}",ping:"{75%,100%{transform:scale(2);opacity:0}}",pulse:"{50%{opacity:.5}}",bounce:"{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}"},animation:{none:"",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"}}};const j=d.$vs,C=j.config;j._={isString:u,isArray:p,isFunction:f,isPlainObject:function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},each:b,extend:e};let n={},i=j.classMap={},a={},t=[],l=[],r=[],o=null,s=null,c=j.generators=[];const S={},O={},M=(b("font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr".split(","),e=>O[e]=!0),/class\s*=\s*['\"](?<class>[^'\"]*)['\"]/g),L=2,I=.16,E=.05,A=.05,N=.15,P=5,T=4;if(e(j._,{hexToRgb:y,rgbToHex:k,register:$,resolveColor:z,generateColors:function(t,r,o){const n=`--${C.prefix}-${t}-opacity`;$(t+"-opacity-",e=>{e=e.name.split("-"),e=n+`: ${+e[2]/100};`;return o?{name:"$"+o,style:e}:e}),$(t+"-",e=>{e=z(e.name.substring(t.length+1));if(!e)return null;e=u(e)?r+`: ${e};`:n+`:1;${r}: rgba(${e.r},${e.g},${e.b},var(${n}));`;return o?{name:"$"+o,style:e}:e})},generateSizes:function(t){for(let e=0;e<=96;e++)13==e||15==e||16<=e&&(e-16)%4!=0||(t(e,""+.25*e+(0==e?"px":"rem")),1==e&&t("px","1px"),e<=3&&t(e+.5,.25*e+.125+"rem"))},resolveClass:m,addPresetStyle:function(e){-1==t.indexOf(e)&&t.push(e)},addInitStyle:function(e){-1==r.indexOf(e)&&r.push(e)}}),e(j,{get styles(){return s},reset:function(){n={},l=[],s=null,o&&(o.innerHTML=null,C.auto&&d.document&&w(d.document.body))},extract:function(e){let t,r=[];for(;null!==(t=M.exec(e));)b(t.groups.class.split(" "),e=>{(e=e&&e.trim())&&-1===r.indexOf(e)&&r.push(e)});return r},add:x,resolveAll:w}),d.document){const V=d.document;e(j,{ready(e){"complete"===V.readyState?e():V.addEventListener("DOMContentLoaded",e)}}),j.ready(()=>{var e="vimesh-styles";(o=V.getElementById(e))||((o=V.createElement("style")).setAttribute("id",e),V.head.appendChild(o)),C.auto&&w(V.body);const t=new MutationObserver(e=>{C.auto&&(t.disconnect(),b(e,e=>{"childList"===e.type?e.addedNodes.forEach(e=>w(e,!1)):"attributes"===e.type&&x(v(e.target),!1)}),h(),t.observe(V,{attributes:!0,childList:!0,subtree:!0}))});t.observe(V,{attributes:!0,childList:!0,subtree:!0})})}else e(j,{ready(e){e()}});function u(e){return null!=e&&"string"==typeof e.valueOf()}function p(e){return Array.isArray(e)}function f(e){return"function"==typeof e}function b(e,o){p(e)?e.forEach((e,t)=>{o(e,t,t)}):Object.entries(e).forEach(([e,t],r)=>{o(t,e,r)})}function e(r,...t){var o=t.length;if(o<1||null==r)return r;for(let e=0;e<o;e++){const n=t[e];Object.keys(n).forEach(e=>{var t=Object.getOwnPropertyDescriptor(n,e);t.get||t.set?Object.defineProperty(r,e,t):r[e]=n[e]})}return r}function g(r){if(u(r)){let e=null,t=null;var o=r.split(":");return r=o[o.length-1],3===o.length?(e=o[0],t=o[1]):2===o.length&&(C.breakpoints[o[0]]?e=o[0]:t=o[0]),{breakpoint:e,pseudo:t,name:r}}console.error("Wrong parameter "+r)}function $(e,t,r){t&&(p(e)||(e=[e]),f(t)?b(e,e=>c.push({prefix:e,generator:t,init:r})):b(e,e=>{i[e]=t,r&&(a[e]=r)}))}function m(e){if(!e)return null;var r=g(e);let o=r.name,n=i[o];n&&a[o]&&a[o](r);for(let t=0;!n&&t<c.length;t++){let e=c[t];0==o.indexOf(e.prefix)&&(n=e.generator(r))&&e.init&&e.init(r)}return n}function h(){var e=r.concat(l);0<e.length&&((e=(C.preset?t:[]).concat(e).join("\n"))!==s&&(d.document?o?o.innerHTML=s=e:setTimeout(h):s=e))}function x(e,t=!0){if(e){if(u(e))e=e.split(" ");else{let t=[];b(e,e=>t=t.concat(e&&e.split&&e.split(" ")||[])),e=t}b(e,r=>{if(r&&!n[r]){let t=m(r);if(t){var o=g(r);let e=o.name.replace(/:/g,"\\:").replace(/\//g,"\\/").replace(/\./g,"\\.");o.pseudo&&(e=`${o.pseudo}\\:${e}:`+o.pseudo),o.breakpoint&&(e=o.breakpoint+"\\:"+e),t.name&&(0==t.name.indexOf("$")?e+=t.name.substring(1):e=t.name,t=t.style),t=`{${t}}`,t=o.breakpoint?`@media (min-width: ${C.breakpoints[o.breakpoint]}px) {
  .${e} ${t} 
}`:`.${e} ${t} `,n[r]=!0,l.push(t)}}}),t&&h()}}function v(t){const r=C.prefix+":";let e=[],i=[];var o=t.className;if(o&&(e.push(o),o.baseVal&&e.push(o.baseVal),o.animVal&&e.push(o.animVal)),b(t.attributes,t=>{let e=t.name,n=null;if("none"!==C.attributify&&e.startsWith(r)?n=e.substring(r.length):"all"===C.attributify&&O[e]&&(n=e),n){let e=t.value,o=S[n];o=o||(S[n]={}),b(e.split(/ |,/).filter(Boolean),t=>{var r;if(-1!==t.indexOf("~")&&(t=t.replace("~",n)),o[t])return i.push(o[t]);if(m(t))i.push(t),o[t]=t;else{r=t.lastIndexOf(":");let e=n+"-"+t;m(e=-1!==r?t.substring(0,r+1)+n+"-"+t.substring(r+1):e)?(o[t]=e,i.push(e)):(e=n+t,m(e=-1!==r?t.substring(0,r+1)+n+t.substring(r+1):e)&&(o[t]=e,i.push(e)))}})}}),t._vs_undo_add_classes_from_attrs&&t._vs_undo_add_classes_from_attrs(),0<i.length){let e=i.join(" ").split(" ").filter(e=>!t.classList.contains(e)).filter(Boolean);t.classList.add(...e),t._vs_undo_add_classes_from_attrs=()=>{t.classList.remove(...e)}}return[...e,...i]}function w(e,r=!0){if(e&&e.querySelectorAll){e=[e,...e.querySelectorAll("none"===C.attributify?"*[class]":"*")];let t=[];b(e,e=>t.push(...v(e))),x(t,r)}}function y(e){e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function k(e){var{r:e,g:t,b:r}=e;return((1<<24)+(Math.round(e)<<16)+(Math.round(t)<<8)+Math.round(r)).toString(16).slice(1)}function _(e,t){if(6===t)return e;var r=t<=6,e=function(e){var t,{r,g:o,b:n}=e,e=(r/=255,o/=255,n/=255,Math.max(r,o,n)),i=Math.min(r,o,n),a=e,l=e-i,s=0==e?0:l/e;if(e==i)t=0;else{switch(e){case r:t=(o-n)/l+(o<n?6:0);break;case o:t=(n-r)/l+2;break;case n:t=(r-o)/l+4}t/=6}return{h:t,s:s,v:a}}(y(e)),t=r?P+1-t:t-P-1;return k(function(e){var t,r,o,{h:e,s:n,v:i}=e,a=Math.floor(6*e),l=i*(1-n),s=i*(1-(e=6*e-a)*n),c=i*(1-(1-e)*n);switch(a%6){case 0:t=i,r=c,o=l;break;case 1:t=s,r=i,o=l;break;case 2:t=l,r=i,o=c;break;case 3:t=l,r=s,o=i;break;case 4:t=c,r=l,o=i;break;case 5:t=i,r=l,o=s}return{r:255*t,g:255*r,b:255*o}}({h:function(e,t,r){let o;return(o=60<=e.h&&e.h<=240?r?e.h-L*t:e.h+L*t:r?e.h+L*t:e.h-L*t)<0?o+=360:360<=o&&(o-=360),Math.round(o)}(e={h:360*e.h,s:e.s,v:e.v},t,r)/360,s:function(e,t,r){let o;return 1<(o=r?e.s-I*t:t===T?e.s+I:e.s+E*t)&&(o=1),(o=r&&t===P&&.1<o?.1:o)<.06&&(o=.06),Number(o.toFixed(2))}(e,t,r),v:function(e,t,r){let o;return(o=1<(o=r?e.v+A*t:e.v-N*t)?1:o)<0&&(o=0),Number(o.toFixed(2))}(e,t,r)}))}function z(r){if(!r)return null;let t=null;if(C.aliasColors[r]&&(r=C.aliasColors[r]),C.specialColors[r])"#"==(t=C.specialColors[r])[0]&&(t=y(t));else{var o=r.lastIndexOf("-");let e=null;if(-1!=o){e=r.substring(o+1);let t=(r=r.substring(0,o)).split("-");if(1<t.length){r=t[0];for(let e=1;e<t.length;e++)0<t[e].length&&(r+=t[e][0].toUpperCase()+t[e].substring(1))}}C.aliasColors[r]&&(r=C.aliasColors[r]);o=C.colors[r];if(!o)return null;var n=e?+e:500,n=50==n?1:n/100+1;if(p(o))return o[n-1];o=_(o,n);t=y(o)}return t}}}function setupPreset(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");e.$vs._.addPresetStyle("html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}")}function setupLayout(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");const l=e.$vs._.each,s=e.$vs._.register,t=e.$vs._.generateSizes,r=e.$vs.config,i=r.prefix;let n;s("container",e=>e.breakpoint?`max-width: ${r.breakpoints[e.breakpoint]}px;`:"width: 100%;"),l(["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-row","table-column-group","table-footer-group","table-header-group","table-row-group","flow-root","grid","inline-grid","contents","list-item","hidden"],e=>s(e,`display: ${"hidden"===e?"none":e};`)),s("flex-grow-0","flex-grow: 0;"),s("flex-grow","flex-grow: 1;"),s("flex-shrink-0","flex-shrink: 0;"),s("flex-shrink","flex-shrink: 1;"),l({1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},(e,t)=>s("flex-"+t,`flex: ${e};`)),l(["row","row-reverse","col","col-reverse"],e=>s("flex-"+e,`flex-direction: ${e.replace("col","column")};`)),l(["wrap","wrap-reverse","nowrap"],e=>s("flex-"+e,`flex-wrap: ${e};`)),l(["left","right","both","none"],e=>s("clear-"+e,`clear: ${e};`)),l(["static","fixed","absolute","relative","sticky"],e=>s(e,`position: ${e};`)),l({auto:"auto",full:"100%",screen:"100vw",min:"min-content",max:"max-content"},(e,t)=>s("w-"+t,`width: ${e};`)),l({auto:"auto",full:"100%",screen:"100vh"},(e,t)=>s("h-"+t,`height: ${e};`)),l([2,3,4,5,6,12],e=>{for(n=1;n<e;n++)s(`w-${n}/`+e,`width: ${+(100*n/e).toFixed(6)}%;`),s(`h-${n}/`+e,`height: ${+(100*n/e).toFixed(6)}%;`)}),t((e,t)=>{s("w-"+e,`width: ${t};`),s("h-"+e,`height: ${t};`)});const o={0:"0px",full:"100%",min:"min-content",max:"max-content"};for(l(o,(e,t)=>s("min-w-"+t,`min-width: ${e};`)),o.none="none",o.prose="65ch",l(["xs","sm","md","lg","xl"],(e,t)=>o[e]=20+4*t+"rem"),l(["sm","md","lg","xl","2xl"],e=>o["screen-"+e]=r.breakpoints[e]+"px"),n=2;n<=7;n++)o[n+"xl"]=30+6*n+"rem";function a(e,t,r){s(e+"m-"+t,`margin: ${e}${r};`);var o=`margin-left: ${e}${r};`,n=`margin-right: ${e}${r};`,i=`margin-top: ${e}${r};`,r=`margin-bottom: ${e}${r};`;s(e+"mx-"+t,o+n),s(e+"ml-"+t,o),s(e+"mr-"+t,n),s(e+"my-"+t,i+r),s(e+"mt-"+t,i),s(e+"mb-"+t,r)}l(o,(e,t)=>s("max-w-"+t,`max-width: ${e};`)),l({0:"0px",full:"100%",screen:"100vh"},(e,t)=>{s("min-h-"+t,`min-height: ${e};`),s("max-h-"+t,`max-height: ${e};`)}),t((e,t)=>{s("max-h-"+e,`max-height: ${t};`)}),a("","auto","auto"),t((t,r)=>{s("p-"+t,`padding: ${r};`);var e=`padding-left: ${r};`,o=`padding-right: ${r};`,n=`padding-top: ${r};`,i=`padding-bottom: ${r};`;s("px-"+t,e+o),s("pl-"+t,e),s("pr-"+t,o),s("py-"+t,n+i),s("pt-"+t,n),s("pb-"+t,i),l(["","-"],e=>a(e,t,r))}),t((i,a)=>{l(["","-"],e=>{var t=`left: ${e}${a};`,r=`right: ${e}${a};`,o=`top: ${e}${a};`,n=`bottom: ${e}${a};`;s(e+"inset-"+i,t+r+o+n),s(e+"inset-x-"+i,t+r),s(e+"left-"+i,t),s(e+"right-"+i,r),s(e+"inset-y-"+i,o+n),s(e+"top-"+i,o),s(e+"bottom-"+i,n)})});const c=" > :not([hidden]) ~ :not([hidden])";for(s("space-x-reverse",{name:"$"+c,style:`--${i}-space-x-reverse: 1;`}),s("space-y-reverse",{name:"$"+c,style:`--${i}-space-y-reverse: 1;`}),t((o,n)=>{l({x:["right","left"],y:["top","bottom"]},(t,r)=>l(["","-"],e=>{s(e+`space-${r}-`+o,{name:"$"+c,style:`--${i}-space-${r}-reverse: 0;margin-${t[0]}: calc(${e}${n} * var(--${i}-space-${r}-reverse));margin-${t[1]}: calc(${e}${n} * calc(1 - var(--${i}-space-${r}-reverse)));`})}))}),l({first:-9999,last:9999,none:0},(e,t)=>s("order-"+t,`order: ${e};`)),n=1;n<=12;n++)s("order-"+n,`order: ${n};`);for(s("grid-cols-none","grid-template-columns: none;"),n=1;n<=12;n++)s("grid-cols-"+n,`grid-template-columns: repeat(${n}, minmax(0, 1fr));`);for(l([["col","column"],["row","row"]],([e,t],r)=>{s(e+"-auto",`grid-${t}: auto;`),s(e+"-span-full",`grid-${t}: 1 / -1;`),s(e+"-start-auto",`grid-${t}-start: auto;`),s(e+"-end-auto",`grid-${t}-end: auto;`);var o=r?7:13;for(n=1;n<=o;n++)s(e+"-span-"+n,`grid-${t}: span ${n} / span ${n};`),s(e+"-start-"+n,`grid-${t}-start: span ${n} / span ${n};`),s(e+"-end-"+n,`grid-${t}-end: span ${n} / span ${n};`)}),s("grid-rows-none","grid-template-rows: none;"),n=1;n<=6;n++)s("grid-rows-"+n,`grid-template-rows: repeat(${n}, minmax(0, 1fr));`);l(["row","col","row-dense","col-dense"],e=>s("grid-flow-"+e,`grid-auto-flow: ${e};`)),l({auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},(e,t)=>{s("auto-cols-"+t,`grid-auto-columns: ${e};`),s("auto-rows-"+t,`grid-auto-rows: ${e};`)}),t((e,t)=>{s("gap-"+e,`gap: ${t};`),s("gap-x-"+e,`column-gap: ${t};`),s("gap-y-"+e,`row-gap: ${t};`)}),l({start:"flex-start",end:"flex-end",center:"center",between:"space-between",around:"space-around",evenly:"space-evenly"},(e,t)=>{s("justify-"+t,`justify-content: ${e};`),s("content-"+t,`align-content: ${e};`)}),l({start:"start",end:"end",center:"center",stretch:"stretch",between:"space-between",around:"space-around",evenly:"space-evenly"},(e,t)=>{s("place-content-"+t,`place-content: ${e};`)}),l(["start","end","center","stretch"],e=>{s("justify-items-"+e,`justify-items: ${e};`),s("place-items-"+e,`place-items: ${e};`)}),l(["auto","start","end","center","stretch"],e=>{s("justify-self-"+e,`justify-self: ${e};`),s("place-self-"+e,`place-self: ${e};`)}),l(["start","end","center","baseline","stretch"],e=>s("items-"+e,`align-items: ${e};`)),l(["auto","start","end","center","baseline","stretch"],e=>s("self-"+e,`align-self: ${e};`)),s("decoration-slice","box-decoration-break: slice;"),s("decoration-clone","box-decoration-break: clone;"),s("box-border","box-sizing: border-box;"),s("box-content","box-sizing: content-box;"),s("isolate","isolation: isolate;"),s("isolation-auto","isolation: auto;"),l(["left","right","none"],e=>s("float-"+e,`float: ${e};`)),l(["contain","cover","fill","none","scale-down"],e=>s("object-"+e,`object-fit: ${e};`)),l(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],e=>s("object-"+e,`object-position: ${e.replace("-"," ")};`)),l(["auto","hidden","visible","scroll"],e=>{s("overflow-"+e,`overflow: ${e};`),s("overflow-x-"+e,`overflow-x: ${e};`),s("overflow-y-"+e,`overflow-y: ${e};`)}),l(["auto","none","contain"],e=>{s("overscroll-"+e,`overscroll-behavior: ${e};`),s("overscroll-x-"+e,`overscroll-behavior-x: ${e};`),s("overscroll-y-"+e,`overscroll-behavior-y: ${e};`)}),s("visible","visibility: visible;"),s("invisible","visibility: hidden;"),l([0,10,20,30,40,50,"auto"],e=>s("z-"+e,`z-index: ${e};`)),s("border-collapse","border-collapse: collapse;"),s("border-separate","border-collapse: separate;"),s("table-auto","table-layout: auto;"),s("table-fixed","table-layout: fixed;")}function setupPaint(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");const i=e.$vs._.each,a=e.$vs._.register,t=e.$vs._.generateSizes,r=e.$vs._.generateColors,o=e.$vs.config,n=o.prefix,{rgbToHex:l,resolveColor:s,addInitStyle:c,isString:d}=e.$vs._;let u;for(a("font-",e=>{e=e.name.split("-"),e=o.fonts[e[1]];return e?`font-family: ${e};`:null}),i({xs:[.75,1],sm:[.875,1.25],base:[1,1.5],lg:[1.125,1.75],xl:[1.25,1.75],"2xl":[1.5,2],"3xl":[1.875,2.25],"4xl":[2.25,2.5],"5xl":[3],"6xl":[3.75],"7xl":[4.5],"8xl":[6],"9xl":[8]},(e,t)=>a("text-"+t,`font-size: ${e[0]}rem;line-height: ${1<e.length?e[1]+"rem":1};`)),a("antialiased","-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"),a("subpixel-antialiased","-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"),a("italic","font-style: italic;"),a("not-italic","font-style: normal;"),i(["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],(e,t)=>a("font-"+e,`font-weight: ${100*(t+1)};`)),i({tighter:-.05,tight:-.025,normal:0,wide:.025,wider:.05,widest:.1},(e,t)=>a("tracking-"+t,`letter-spacing: ${e}em;`)),u=3;u<=10;u++)a("leading-"+u,`line-height: ${.25*u}rem;`);i({none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},(e,t)=>a("leading-"+t,`line-height: ${e};`)),i(["none","disc","decimal"],e=>a("list-"+e,`list-style-type: ${e};`)),i(["inside","outside"],e=>a("list-"+e,`list-style-position: ${e};`)),r("placeholder","color","::placeholder"),r("text","color"),i(["left","center","right","justify"],e=>a("text-"+e,`text-align: ${e};`)),i(["underline","line-through","none"],e=>a(""+("none"==e?"no-underline":e),`text-decoration: ${e};`)),i(["uppercase","lowercase","capitalize","none"],e=>a(""+("none"==e?"normal-case":e),`text-transform: ${e};`)),i(["ellipsis","clip"],e=>a("overflow-"+e,"text-overflow: "+e)),a("truncate","overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"),i(["baseline","top","middle","bottom","text-top","text-bottom"],e=>a("align-"+e,`vertical-align: ${e};`)),i(["normal","nowrap","pre","pre-line","pre-wrap"],e=>a("whitespace-"+e,`white-space: ${e};`)),a("break-normal","overflow-wrap: normal; word-break: normal;"),a("break-words","overflow-wrap: break-word;"),a("break-all","word-break: break-all;"),i(["fixed","local","scroll"],e=>a("bg-"+e,"background-attachment: "+e)),i(["text","content","padding","border"],e=>a("bg-clip-"+e,`background-clip: ${e}${"text"==e?"":"-box"};`)),r("bg","background-color"),i(["border","padding","content"],e=>a("bg-origin-"+e,`background-origin: ${e}-box;`)),i(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],e=>a("bg-"+e,`background-position: ${e.replace("-"," ")};`)),i(["repeat","no-repeat","repeat-x","repeat-y","round","space"],e=>a("bg-"+(-1!=e.indexOf("repeat")?e:"repeat-"+e),`background-repeat: ${e};`)),i(["auto","cover","contain"],e=>a("bg-"+e,`background-size: ${e};`)),a("bg-none","background-image: none;");const p={t:"top",r:"right",b:"bottom",l:"left"},f=["t","tr","r","br","b","bl","l","tl"],b=(i(f,e=>a("bg-gradient-to-"+e,`background-image: linear-gradient(to ${1==e.length?p[e[0]]:p[e[0]]+" "+p[e[1]]}, var(--${n}-gradient-stops));`)),a("from-",e=>{e=s(e.name.substring("from-".length));return e?`--${n}-gradient-from: ${d(e)?e:"#"+l(e)}; --${n}-gradient-stops: var(--${n}-gradient-from), var(--${n}-gradient-to, rgba(${e.r},${e.g},${e.b}, 0));`:null}),a("to-",e=>{e=s(e.name.substring("to-".length));return e?`--${n}-gradient-to: ${d(e)?e:"#"+l(e)};`:null}),a("via-",e=>{e=s(e.name.substring("via-".length));return e?`--${n}-gradient-stops: var(--${n}-gradient-from), ${d(e)?e:"#"+l(e)}, var(--${n}-gradient-to, rgba(${e.r},${e.g},${e.b}, 0));`:null}),a("fill-current","fill: currentColor;"),a("stroke-current","stroke: currentColor;"),i([0,1,2],e=>a("stroke-"+e,"stroke-width: "+e)),a("rounded-none","border-radius: 0px;"),i({none:"0px",sm:.125,_:.25,md:.375,lg:.5,xl:.75,"2xl":1,"3xl":1.5,full:"9999px"},(o,n)=>{o=d(o)?o:o+"rem",a("rounded"+("_"==n?"":"-"+n),`border-radius: ${o};`),i(f,e=>{var t,r;1==e.length?(r=(t="t"==e||"b"==e)?["l","r"]:["t","b"],a("rounded-"+e+("_"==n?"":"-"+n),`border-${t?p[e]:p[r[0]]}-${t?p[r[0]]:p[e]}-radius: ${o}; border-${t?p[e]:p[r[1]]}-${t?p[r[1]]:p[e]}-radius: ${o};`)):a("rounded-"+e+("_"==n?"":"-"+n),`border-${p[e[0]]}-${p[e[1]]}-radius: ${o}; `)})}),i([0,1,2,4,8],t=>{a("border"+(1==t?"":"-"+t),`border-width: ${t}px;`),i(Object.keys(p),e=>a("border-"+e+(1==t?"":"-"+t),`border-${p[e]}-width: ${t}px;`))}),r("border","border-color"),i(["solid","dashed","dotted","double","none"],e=>a("border-"+e,`border-style: ${e};`))," > :not([hidden]) ~ :not([hidden])"),g=(i(["x","y"],t=>{let r="x"==t?["left","right"]:["top","bottom"];a(`divide-${t}-reverse`,{name:"$"+b,style:`--${n}-divide-${t}-reverse: 1;`}),i([0,1,2,4,8],e=>{a("divide-"+t+(1==e?"":"-"+e),{name:"$"+b,style:`--${n}-divide-${t}-reverse: 0; border-${r[0]}-width: calc(${e}px * calc(1 - var(--${n}-divide-${t}-reverse))); border-${r[1]}-width: calc(${e}px * var(--${n}-divide-${t}-reverse));`})})}),r("divide","border-color",b),i(["solid","dashed","dotted","double","none"],e=>a("divide-"+e,{name:"$"+b,style:`border-style: ${e};`})),()=>c(`*, ::before, ::after {--${n}-shadow: 0 0 #0000;}`)),$=()=>{g(),c(`*, ::before, ::after {--${n}-ring-inset: var(--${n}-empty,/*!*/ /*!*/); --${n}-ring-offset-width: 0px; --${n}-ring-offset-color: #fff; --${n}-ring-color: rgba(59, 130, 246, 0.5); --${n}-ring-offset-shadow: 0 0 #0000; --${n}-ring-shadow: 0 0 #0000;}`)},m=(a("ring-inset",`--${n}-ring-inset: inset;`),i([0,1,2,4,8,3],e=>a("ring"+(3==e?"":"-"+e),`--${n}-ring-offset-shadow: var(--${n}-ring-inset) 0 0 0 var(--${n}-ring-offset-width) var(--${n}-ring-offset-color); --${n}-ring-shadow: var(--${n}-ring-inset) 0 0 0 calc(${e}px + var(--${n}-ring-offset-width)) var(--${n}-ring-color); box-shadow: var(--${n}-ring-offset-shadow), var(--${n}-ring-shadow), var(--${n}-shadow, 0 0 #0000);`,$)),r("ring",`--${n}-ring-color`),i([0,1,2,4,8],e=>a("ring-offset-"+e,`--${n}-ring-offset-width: ${e}px;`)),"ring-offset-"),h=(a(m,e=>{e=s(e.name.substring(m.length));return e?`--${n}-ring-offset-color: ${d(e)?e:"#"+l(e)}; `:null}),`box-shadow: var(--${n}-ring-offset-shadow, 0 0 #0000), var(--${n}-ring-shadow, 0 0 #0000), var(--${n}-shadow);`);i({sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",_:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"0 0 #0000"},(e,t)=>a("shadow"+("_"==t?"":"-"+t),`--${n}-shadow: ${e};`+h),g),a("opacity-",e=>{return`opacity: ${+e.name.split("-")[1]/100};`});e=["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"];i(e,e=>a("mix-blend-"+e,`mix-blend-mode: ${e};`)),i(e,e=>a("bg-blend-"+e,`background-blend-mode: ${e};`)),i({none:"none",all:"all",opacity:"opacity",shadow:"box-shadow",transform:"transform",_:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"background-color, border-color, color, fill, stroke"},(e,t)=>a("transition"+("_"==t?"":"-"+t),`transition-property: ${e}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`)),a("duration-",e=>{return`transition-duration: ${e.name.split("-")[1]}ms;`}),i({linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},(e,t)=>a("ease-"+t,`transition-timing-function: ${e};`)),a("delay-",e=>{return`transition-delay: ${e.name.split("-")[1]}ms;`});const x="animate-";a(x,e=>{e=e.name.substring(x.length),e=o.animation[e];return e?`animation: ${e};`:null},e=>{e=e.name.substring(x.length);o.keyframes[e]&&c("@keyframes "+e+o.keyframes[e])});var e=`--${n}-translate-x: 0; --${n}-translate-y: 0; --${n}-rotate: 0; --${n}-skew-x: 0; --${n}-skew-y: 0; --${n}-scale-x: 1; --${n}-scale-y: 1;`,v=`rotate(var(--${n}-rotate)) skewX(var(--${n}-skew-x)) skewY(var(--${n}-skew-y)) scaleX(var(--${n}-scale-x)) scaleY(var(--${n}-scale-y));`;function w(r,o){i(["x","y"],t=>i(["","-"],e=>{a(e+`translate-${t}-`+r,`--${n}-translate-${t}: ${e}${o};`)}))}a("transform",e+`transform: translateX(var(--${n}-translate-x)) translateY(var(--${n}-translate-y)) `+v),a("transform-gpu",e+`translate3d(var(--${n}-translate-x), var(--${n}-translate-y), 0) `+v),a("transform-none","transform: none;"),i(["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],e=>a("origin-"+e,`transform-origin: ${e.replace("-"," ")};`)),a("scale-",e=>{var e=e.name.split("-"),t=+e[e.length-1]/100;return 2==e.length?`--${n}-scale-x: ${t};--${n}-scale-y: ${t};`:`--${n}-scale-${e[1]}: ${t};`}),a(["rotate-","-rotate-"],e=>{let t=e.name,r="";"-"==t[0]&&(t=t.substring(1),r="-");e=t.split("-");return`--${n}-rotate: ${r}${e[1]}deg;`}),t(w),i([2,3,4],e=>{for(u=1;u<e;u++)w(u+"/"+e,+(100*u/e).toFixed(6)+"%;")}),w("full","100%"),i([0,1,2,3,6,12],r=>i(["x","y"],t=>i(["","-"],e=>{a(e+`skew-${t}-`+r,`--${n}-skew-${t}: ${e}${r}deg;`)}))),a("appearance-none","appearance: none;"),i(["auto","default","pointer","wait","text","move","help","not-allowed"],e=>a("cursor-"+e,`cursor: ${e};`)),i(["none","white","black"],e=>a("outline-"+e,`outline: 2px ${"none"==e?"solid transparent":"dotted "+e}; outline-offset: 2px;`)),i(["none","auto"],e=>a("pointer-events-"+e,`pointer-events: ${e};`)),i({none:"none",y:"vertical",x:"horizontal",_:"both"},(e,t)=>a("resize"+("_"==t?"":"-"+t),`resize: ${e};`)),i(["none","text","all","auto"],e=>a("select-"+e,`user-select: ${e};`)),a("sr-only","position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"),a("not-sr-only","position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;")}function setupVimeshStyle(){var e={};return setupCore(e),setupPreset(e),setupLayout(e),setupPaint(e),e.$vs}export default setupVimeshStyle;