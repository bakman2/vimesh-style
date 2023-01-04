// Vimesh Style v1.0.5
function setupCore(b){if(!b.$vs){b.$vs={config:{debug:!1,auto:!0,prefix:"vs",attributify:"none",breakpoints:{sm:640,md:768,lg:1024,xl:1280,"2xl":1536},fonts:{sans:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',serif:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},colors:{slate:["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a"],gray:["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827"],zinc:["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"],neutral:["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#737373","#525252","#404040","#262626","#171717"],stone:["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#78716c","#57534e","#44403c","#292524","#1c1917"],red:["#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"],orange:["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12"],amber:["#fffbeb","#fef3c7","#fde68a","#fcd34d","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f"],yellow:["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12"],lime:["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f","#3f6212","#365314"],green:["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],emerald:["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b"],teal:["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"],cyan:["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#06b6d4","#0891b2","#0e7490","#155e75","#164e63"],sky:["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#0369a1","#075985","#0c4a6e"],blue:["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],indigo:["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"],violet:["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95"],purple:["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87"],fuchsia:["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f","#701a75"],pink:["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843"],rose:["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337"]},aliasColors:{lightBlue:"sky"},specialColors:{white:"#ffffff",black:"#000000",transparent:"transparent",current:"currentColor"},keyframes:{spin:"{to{transform:rotate(360deg)}}",ping:"{75%,100%{transform:scale(2);opacity:0}}",pulse:"{50%{opacity:.5}}",bounce:"{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}"},animation:{none:"",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},fontSizes:{},borderRadiusSizes:{}}};const S=b.$vs,A=S.config;S._={isString:g,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isArray:m,isFunction:$,isPlainObject:r,each:h,extend:e};let a={},i=S.classMap={},s={},l={},n=[],o=[],d=null,f=null,c=S.generators=[],u={},p={},t=[];h("font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr".split(","),e=>p[e]=!0);const I=/class\s*=\s*['\"](?<class>[^'\"]*)['\"]/g;if(e(S._,{hexToRgb:O,rgbToHex:function(e){var{r:e,g:t,b:r}=e;return((1<<24)+(Math.round(e)<<16)+(Math.round(t)<<8)+Math.round(r)).toString(16).slice(1)},resolveColor:j,generateColors:function(t,r,n){const o=`--${A.prefix}-${t}-opacity`;v(t+"-opacity-",e=>{e=e.name.split("-"),e=o+`: ${+e[2]/100};`;return n?{name:"$"+n,style:e}:e}),v(t+"-",e=>{e=j(e.name.substring(t.length+1));if(!e)return null;e=g(e)?r+`: ${e};`:(void 0===e.a?o+":1;":"")+r+`: rgba(${e.r},${e.g},${e.b},${void 0===e.a?`var(${o})`:e.a});`;return n?{name:"$"+n,style:e}:e})},generateSizes:function(o){for(let e=0;e<=96;e++)13==e||15==e||16<=e&&(e-16)%4!=0||(o(e,""+.25*e+(0==e?"px":"rem")),1==e&&o("px","1px"),e<=3&&o(e+.5,.25*e+.125+"rem"));h([2,3,4,5,6,12],t=>{for(let e=1;e<t;e++){var r=e+"/"+t,n=+(100*e/t).toFixed(6)+"%";o(r,n)}})},resolveClass:y,addInitStyle:function(e){-1==n.indexOf(e)&&n.push(e)},autoGenerateOnReset:function(e){t.push(e),e()},extractArbitraryValue:C}),e(S,{get styles(){return f},reset:function(){h(t,e=>e()),a={},l={},f=null,u={},d&&(d.innerHTML=null,A.auto&&b.document&&_(b.document.body))},extract:function(e){let t,r=[];for(;null!==(t=I.exec(e));)h(t.groups.class.split(" "),e=>{(e=e&&e.trim())&&-1===r.indexOf(e)&&r.push(e)});return r},add:k,addMacroCss:function(e){r(e)?o.push(e):m(e)&&o.push(...e)},resolveAll:_,register:v}),b.document){const M=b.document;e(S,{ready(e){"complete"===M.readyState?e():M.addEventListener("DOMContentLoaded",e)}}),S.ready(()=>{var e="vimesh-styles";(d=M.getElementById(e))||((d=M.createElement("style")).setAttribute("id",e),M.head.appendChild(d)),A.auto&&_(M.body);const t=new MutationObserver(e=>{A.auto&&(t.disconnect(),h(e,e=>{"childList"===e.type?e.addedNodes.forEach(e=>_(e,!1)):"attributes"===e.type&&k(z(e.target),!1)}),w(),t.observe(M,{attributes:!0,childList:!0,subtree:!0}))});t.observe(M,{attributes:!0,childList:!0,subtree:!0})})}else e(S,{ready(e){e()}});function g(e){return null!=e&&"string"==typeof e.valueOf()}function m(e){return Array.isArray(e)}function $(e){return"function"==typeof e}function r(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function h(e,n){e&&(m(e)?e.forEach((e,t)=>{n(e,t,t)}):Object.entries(e).forEach(([e,t],r)=>{n(t,e,r)}))}function e(r,...t){var n=t.length;if(n<1||null==r)return r;for(let e=0;e<n;e++){const o=t[e];o&&Object.keys(o).forEach(e=>{var t=Object.getOwnPropertyDescriptor(o,e);t.get||t.set?Object.defineProperty(r,e,t):r[e]=o[e]})}return r}function x(r){if(g(r)){let e=null,t=null;var n=r.split(":");return r=n[n.length-1],3===n.length?(e=n[0],t=n[1]):2===n.length&&(A.breakpoints[n[0]]?e=n[0]:t=n[0]),{breakpoint:e,pseudo:t,name:r}}console.error("Wrong parameter "+r)}function v(e,t,r){t&&(m(e)||(e=[e]),$(t)?h(e,e=>c.unshift({prefix:e,generator:t,init:r})):h(e,e=>{i[e]=t,r&&(s[e]=r)}))}function y(e){if(!e)return null;var r=x(e);let n=r.name,o=i[n];o&&s[n]&&s[n](r);for(let t=0;!o&&t<c.length;t++){let e=c[t];0==n.indexOf(e.prefix)&&(o=e.generator(r))&&e.init&&e.init(r)}return!o&&A.debug&&console.log("Unknown class: "+e),o}function w(){var e=Object.keys(l).sort((e,t)=>(A.breakpoints[e]||0)-(A.breakpoints[t]||0));let t=n,r=(h(e,e=>t=t.concat(l[e])),[]);h(o,e=>{h(e,(e,t)=>{e=e.split(" ").map(e=>y(e)).join("");r.push(t+` {${e}}`)})}),0<(t=t.concat(r)).length&&((e=(A.preset?[A.preset]:[]).concat(t).join("\n"))!==f&&(b.document?d?d.innerHTML=f=e:setTimeout(w):f=e))}function k(e,t=!0){if(e){if(g(e))e=e.split(" ");else{let t=[];h(e,e=>t=t.concat(e&&e.split&&e.split(" ")||[])),e=t}h(e,n=>{if((n=n.trim())&&!a[n]){let r=y(n);if(r){var o=x(n);let e=function(e){var t,r=String(e),n=r.length,o=-1,a="",i=r.charCodeAt(0);if(1==n&&45==i)return"\\"+r;for(;++o<n;)0==(t=r.charCodeAt(o))?a+="�":a+=1<=t&&t<=31||127==t||0==o&&48<=t&&t<=57||1==o&&48<=t&&t<=57&&45==i?"\\"+t.toString(16)+" ":128<=t||45==t||95==t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?r.charAt(o):"\\"+r.charAt(o);return a}(o.name),t=(o.pseudo&&(e=`${o.pseudo}\\:${e}:`+o.pseudo),o.breakpoint&&(e=o.breakpoint+"\\:"+e),r.name&&(0==r.name.indexOf("$")?e+=r.name.substring(1):e=r.name,r=r.style),r=`{${r}}`,r=o.breakpoint?`@media (min-width: ${A.breakpoints[o.breakpoint]}px) {
  .${e} ${r} 
}`:`.${e} ${r} `,a[n]=!0,l[o.breakpoint||""]);(t=t||(l[o.breakpoint||""]=[])).push(r)}}}),t&&w()}}function z(t){const r=A.prefix+":";let e=[],a=[];var n=t.className;if(n&&(e.push(n),n.baseVal&&e.push(n.baseVal),n.animVal&&e.push(n.animVal)),h(t.attributes,t=>{let e=t.name,o=null;if("none"!==A.attributify&&e.startsWith(r)?o=e.substring(r.length):"all"===A.attributify&&p[e]&&(o=e),o){let e=t.value,n=u[o];n=n||(u[o]={}),h(e.split(/ |,/).filter(Boolean),t=>{var r=t.indexOf("~");if(-1!==r&&(t=t.replace("~",o)),n[t])"-"!==n[t]&&a.push(n[t]);else if(y(t))a.push(t),n[t]=t;else{r=t.lastIndexOf(":");let e=o+"-"+t;y(e=-1!==r?t.substring(0,r+1)+o+"-"+t.substring(r+1):e)?(n[t]=e,a.push(e)):(e=o+t,y(e=-1!==r?t.substring(0,r+1)+o+t.substring(r+1):e)?(n[t]=e,a.push(e)):n[t]="-")}})}}),t._vs_undo_add_classes_from_attrs&&t._vs_undo_add_classes_from_attrs(),0<a.length){let e=a.join(" ").split(" ").filter(e=>!t.classList.contains(e)).filter(Boolean);t.classList.add(...e),t._vs_undo_add_classes_from_attrs=()=>{t.classList.remove(...e)}}return[...e,...a]}function _(e,r=!0){if(e&&e.querySelectorAll){e=[e,...e.querySelectorAll("none"===A.attributify?"*[class]":"*")];let t=[];h(e,e=>t.push(...z(e))),k(t,r)}}function O(e){e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function j(r){if(!r)return null;let e=null,n=(r=r.trim()).lastIndexOf("/");-1!==n&&(a=r.substring(n+1).trim(),r=r.substring(0,n),o=C(a),e=o?+o:+a/100);let t=C(r);if(!t)if(A.aliasColors[r]&&(r=A.aliasColors[r]),A.specialColors[r])t=A.specialColors[r];else{let e=null;if(-1!=(n=r.lastIndexOf("-"))){e=r.substring(n+1);let t=(r=r.substring(0,n)).split("-");if(1<t.length){r=t[0];for(let e=1;e<t.length;e++)0<t[e].length&&(r+=t[e][0].toUpperCase()+t[e].substring(1))}}A.aliasColors[r]&&(r=A.aliasColors[r]);var o=A.colors[r];if(!o)return null;var a=e?+e:500;t=o[(50==a?1:a/100+1)-1]}return t&&"#"===t[0]&&(t=O(t),null!==e&&(t.a=e)),t}function C(e){if(!e)return null;var t=e.indexOf("["),r=e.indexOf("]");return 0<=t&&t<r?e.substring(t+1,r):null}}}function setupPreset(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");e.$vs.config.preset="html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}"}function setupLayout(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");const s=e.$vs._.each,l=e.$vs.register,t=e.$vs._.generateSizes,d=e.$vs._.extractArbitraryValue,r=e.$vs.config,a=r.prefix;let n;l("container",e=>e.breakpoint?`max-width: ${r.breakpoints[e.breakpoint]}px;`:"width: 100%;"),s(["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-row","table-column-group","table-footer-group","table-header-group","table-row-group","flow-root","grid","inline-grid","contents","list-item","hidden"],e=>l(e,`display: ${"hidden"===e?"none":e};`)),s(["","flex-"],e=>{l(e+"grow-0","flex-grow: 0;"),l(e+"grow","flex-grow: 1;"),l(e+"shrink-0","flex-shrink: 0;"),l(e+"shrink","flex-shrink: 1;")}),s({1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},(e,t)=>l("flex-"+t,`flex: ${e};`)),s(["row","row-reverse","col","col-reverse"],e=>l("flex-"+e,`flex-direction: ${e.replace("col","column")};`)),s(["wrap","wrap-reverse","nowrap"],e=>l("flex-"+e,`flex-wrap: ${e};`)),s({auto:"auto",full:"100%"},(e,t)=>l("basis-"+t,`flex-basis: ${e};`)),t((e,t)=>{l("basis-"+e,`flex-basis: ${t};`)}),l("basis-[",e=>`flex-basis: ${d(e.name)};`),s(["left","right","both","none"],e=>l("clear-"+e,`clear: ${e};`)),s(["static","fixed","absolute","relative","sticky"],e=>l(e,`position: ${e};`)),s({auto:"auto",full:"100%",screen:"100vw",min:"min-content",max:"max-content",fit:"fit-content"},(e,t)=>l("w-"+t,`width: ${e};`)),s({auto:"auto",full:"100%",screen:"100vh",min:"min-content",max:"max-content",fit:"fit-content"},(e,t)=>l("h-"+t,`height: ${e};`)),t((e,t)=>{l("w-"+e,`width: ${t};`),l("h-"+e,`height: ${t};`)}),l("w-[",e=>`width: ${d(e.name)};`),l("h-[",e=>`height: ${d(e.name)};`);const o={0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"};for(s(o,(e,t)=>l("min-w-"+t,`min-width: ${e};`)),o.none="none",o.prose="65ch",s(["xs","sm","md","lg","xl"],(e,t)=>o[e]=20+4*t+"rem"),s(["sm","md","lg","xl","2xl"],e=>o["screen-"+e]=r.breakpoints[e]+"px"),n=2;n<=7;n++)o[n+"xl"]=30+6*n+"rem";function i(e,t,r){l(e+"m-"+t,`margin: ${e}${r};`);var n=`margin-left: ${e}${r};`,o=`margin-right: ${e}${r};`,a=`margin-top: ${e}${r};`,r=`margin-bottom: ${e}${r};`;l(e+"mx-"+t,n+o),l(e+"ml-"+t,n),l(e+"mr-"+t,o),l(e+"my-"+t,a+r),l(e+"mt-"+t,a),l(e+"mb-"+t,r)}s(o,(e,t)=>l("max-w-"+t,`max-width: ${e};`)),l("min-w-[",e=>`min-width: ${d(e.name)};`),l("max-w-[",e=>`max-width: ${d(e.name)};`),s({0:"0px",full:"100%",screen:"100vh",min:"min-content",max:"max-content",fit:"fit-content"},(e,t)=>{l("min-h-"+t,`min-height: ${e};`),l("max-h-"+t,`max-height: ${e};`)}),t((e,t)=>{l("max-h-"+e,`max-height: ${t};`)}),l("min-h-[",e=>`min-height: ${d(e.name)};`),l("max-h-[",e=>`max-height: ${d(e.name)};`),i("","auto","auto"),t((t,r)=>{l("p-"+t,`padding: ${r};`);var e=`padding-left: ${r};`,n=`padding-right: ${r};`,o=`padding-top: ${r};`,a=`padding-bottom: ${r};`;l("px-"+t,e+n),l("pl-"+t,e),l("pr-"+t,n),l("py-"+t,o+a),l("pt-"+t,o),l("pb-"+t,a),s(["","-"],e=>i(e,t,r))}),l(["p-[","px-[","pl-[","pr-[","py-[","pt-[","pb-["],t=>{var e=d(t.name),r=e=>-1!==t.name.indexOf(e),n=`padding-left: ${e};`,o=`padding-right: ${e};`,a=`padding-top: ${e};`,i=`padding-bottom: ${e};`;return r("px-")?n+o:r("pl-")?n:r("pr-")?o:r("py-")?a+i:r("pt-")?a:r("pb-")?i:`padding: ${e};`}),s(["","-"],s=>{l([s+"m-[",s+"mx-[",s+"ml-[",s+"mr-[",s+"my-[",s+"mt-[",s+"mb-["],t=>{var e=d(t.name),r=e=>-1!==t.name.indexOf(e),n=`margin-left: ${s}${e};`,o=`margin-right: ${s}${e};`,a=`margin-top: ${s}${e};`,i=`margin-bottom: ${s}${e};`;return r("mx-")?n+o:r("ml-")?n:r("mr-")?o:r("my-")?a+i:r("mt-")?a:r("mb-")?i:`margin: ${s}${e};`})}),t((a,i)=>{s(["","-"],e=>{var t=`left: ${e}${i};`,r=`right: ${e}${i};`,n=`top: ${e}${i};`,o=`bottom: ${e}${i};`;l(e+"inset-"+a,t+r+n+o),l(e+"inset-x-"+a,t+r),l(e+"left-"+a,t),l(e+"right-"+a,r),l(e+"inset-y-"+a,n+o),l(e+"top-"+a,n),l(e+"bottom-"+a,o)})}),s(["","-"],i=>{l([i+"inset-[",i+"inset-x-[",i+"left-[",i+"right-[",i+"inset-y-[",i+"top-[",i+"bottom-["],t=>{var e=d(t.name),r=`left: ${i}${e};`,n=`right: ${i}${e};`,o=`top: ${i}${e};`,e=`bottom: ${i}${e};`,a=e=>-1!==t.name.indexOf(e);return a("inset-x")?r+n:a("inset-y")?o+e:a("inset")?r+n+o+e:a("left")?r:a("right")?n:a("top")?o:a("bottom")?e:null})});const f=" > :not([hidden]) ~ :not([hidden])";for(l("space-x-reverse",{name:"$"+f,style:`--${a}-space-x-reverse: 1;`}),l("space-y-reverse",{name:"$"+f,style:`--${a}-space-y-reverse: 1;`}),t((n,o)=>{s({x:["right","left"],y:["bottom","top"]},(t,r)=>s(["","-"],e=>{l(e+`space-${r}-`+n,{name:"$"+f,style:`--${a}-space-${r}-reverse: 0;margin-${t[0]}: calc(${e}${o} * var(--${a}-space-${r}-reverse));margin-${t[1]}: calc(${e}${o} * calc(1 - var(--${a}-space-${r}-reverse)));`})}))}),s({x:["right","left"],y:["bottom","top"]},(r,n)=>s(["","-"],t=>{l(t+`space-${n}-[`,e=>{e=d(e.name);return{name:"$"+f,style:`--${a}-space-${n}-reverse: 0;margin-${r[0]}: calc(${t}${e} * var(--${a}-space-${n}-reverse));margin-${r[1]}: calc(${t}${e} * calc(1 - var(--${a}-space-${n}-reverse)));`}})})),s({first:-9999,last:9999,none:0},(e,t)=>l("order-"+t,`order: ${e};`)),n=1;n<=12;n++)l("order-"+n,`order: ${n};`);for(l("grid-cols-none","grid-template-columns: none;"),n=1;n<=12;n++)l("grid-cols-"+n,`grid-template-columns: repeat(${n}, minmax(0, 1fr));`);l("grid-cols-[",e=>{return`grid-template-columns: ${d(e.name).replace(/,(?![^\(]*\))/g," ")};`});const c=e=>e.substring(e.lastIndexOf("-")+1);for(s([["col","column"],["row","row"]],([e,t],r)=>{l(e+"-auto",`grid-${t}: auto;`),l(e+"-span-full",`grid-${t}: 1 / -1;`),l(e+"-start-auto",`grid-${t}-start: auto;`),l(e+"-end-auto",`grid-${t}-end: auto;`),l(e+"-span-",e=>{e=c(e.name);return`grid-${t}: span ${e} / span ${e};`}),l(e+"-start-",e=>`grid-${t}-start: ${c(e.name)};`),l(e+"-end-",e=>`grid-${t}-end: ${c(e.name)};`)}),l("grid-rows-none","grid-template-rows: none;"),n=1;n<=6;n++)l("grid-rows-"+n,`grid-template-rows: repeat(${n}, minmax(0, 1fr));`);l("grid-rows-[",e=>{return`grid-template-rows: ${d(e.name).replace(/,(?![^\(]*\))/g," ")};`}),s(["row","col","dense","row-dense","col-dense"],e=>l("grid-flow-"+e,`grid-auto-flow: ${e.replace("col","column")};`)),s({auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},(e,t)=>{l("auto-cols-"+t,`grid-auto-columns: ${e};`),l("auto-rows-"+t,`grid-auto-rows: ${e};`)}),t((e,t)=>{l("gap-"+e,`gap: ${t};`),l("gap-x-"+e,`column-gap: ${t};`),l("gap-y-"+e,`row-gap: ${t};`)}),l("gap-[",e=>`gap: ${d(e.name)};`),l("gap-x-[",e=>`column-gap: ${d(e.name)};`),l("gap-y-[",e=>`row-gap: ${d(e.name)};`),s({start:"flex-start",end:"flex-end",center:"center",between:"space-between",around:"space-around",evenly:"space-evenly"},(e,t)=>{l("justify-"+t,`justify-content: ${e};`),l("content-"+t,`align-content: ${e};`)}),s({start:"start",end:"end",center:"center",stretch:"stretch",between:"space-between",around:"space-around",evenly:"space-evenly"},(e,t)=>{l("place-content-"+t,`place-content: ${e};`)}),s(["start","end","center","stretch"],e=>{l("justify-items-"+e,`justify-items: ${e};`),l("place-items-"+e,`place-items: ${e};`)}),s(["auto","start","end","center","stretch"],e=>{l("justify-self-"+e,`justify-self: ${e};`),l("place-self-"+e,`place-self: ${e};`)}),s(["start","end","center","baseline","stretch"],e=>l("items-"+e,`align-items: ${e};`)),s(["auto","start","end","center","baseline","stretch"],e=>l("self-"+e,`align-self: ${e};`)),l("decoration-slice","box-decoration-break: slice;"),l("decoration-clone","box-decoration-break: clone;"),l("box-border","box-sizing: border-box;"),l("box-content","box-sizing: content-box;"),l("isolate","isolation: isolate;"),l("isolation-auto","isolation: auto;"),s(["left","right","none"],e=>l("float-"+e,`float: ${e};`)),s(["contain","cover","fill","none","scale-down"],e=>l("object-"+e,`object-fit: ${e};`)),s(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],e=>l("object-"+e,`object-position: ${e.replace("-"," ")};`)),s(["auto","hidden","visible","scroll"],e=>{l("overflow-"+e,`overflow: ${e};`),l("overflow-x-"+e,`overflow-x: ${e};`),l("overflow-y-"+e,`overflow-y: ${e};`)}),s(["auto","none","contain"],e=>{l("overscroll-"+e,`overscroll-behavior: ${e};`),l("overscroll-x-"+e,`overscroll-behavior-x: ${e};`),l("overscroll-y-"+e,`overscroll-behavior-y: ${e};`)}),l("visible","visibility: visible;"),l("invisible","visibility: hidden;"),s([0,10,20,30,40,50,"auto"],e=>l("z-"+e,`z-index: ${e};`)),l("border-collapse","border-collapse: collapse;"),l("border-separate","border-collapse: separate;"),l("table-auto","table-layout: auto;"),l("table-fixed","table-layout: fixed;")}function setupPaint(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");const r=e.$vs._,a=r.each,i=e.$vs.register,t=r.generateSizes,n=r.generateColors,s=r.extractArbitraryValue,o=e.$vs.config,l=o.prefix,{rgbToHex:d,resolveColor:f,addInitStyle:c,isString:u}=e.$vs._;let p;function b(e,t="rem"){return r.isNumeric(e)?""+e+t:e}for(i("font-",e=>{e=e.name.split("-"),e=o.fonts[e[1]];return e?`font-family: ${e};`:null}),r.autoGenerateOnReset(()=>{var e=r.extend({xs:[.75,1],sm:[.875,1.25],base:[1,1.5],lg:[1.125,1.75],xl:[1.25,1.75],"2xl":[1.5,2],"3xl":[1.875,2.25],"4xl":[2.25,2.5],"5xl":[3],"6xl":[3.75],"7xl":[4.5],"8xl":[6],"9xl":[8]},o.fontSizes);a(e,(e,t)=>i("text-"+t,`font-size: ${b(e[0])};line-height: ${1<e.length?""+b(e[1]):1};`))}),i("antialiased","-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"),i("subpixel-antialiased","-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"),i("italic","font-style: italic;"),i("not-italic","font-style: normal;"),a(["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],(e,t)=>i("font-"+e,`font-weight: ${100*(t+1)};`)),a({tighter:-.05,tight:-.025,normal:0,wide:.025,wider:.05,widest:.1},(e,t)=>i("tracking-"+t,`letter-spacing: ${e}em;`)),p=3;p<=10;p++)i("leading-"+p,`line-height: ${.25*p}rem;`);a({none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},(e,t)=>i("leading-"+t,`line-height: ${e};`)),a(["none","disc","decimal"],e=>i("list-"+e,`list-style-type: ${e};`)),a(["inside","outside"],e=>i("list-"+e,`list-style-position: ${e};`)),n("placeholder","color","::placeholder"),n("text","color"),a(["left","center","right","justify"],e=>i("text-"+e,`text-align: ${e};`)),a(["underline","line-through","none"],e=>i(""+("none"==e?"no-underline":e),`text-decoration: ${e};`)),a(["uppercase","lowercase","capitalize","none"],e=>i(""+("none"==e?"normal-case":e),`text-transform: ${e};`)),a(["ellipsis","clip"],e=>i("overflow-"+e,"text-overflow: "+e)),i("truncate","overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"),a(["baseline","top","middle","bottom","text-top","text-bottom"],e=>i("align-"+e,`vertical-align: ${e};`)),a(["normal","nowrap","pre","pre-line","pre-wrap"],e=>i("whitespace-"+e,`white-space: ${e};`)),i("break-normal","overflow-wrap: normal; word-break: normal;"),i("break-words","overflow-wrap: break-word;"),i("break-all","word-break: break-all;"),a(["fixed","local","scroll"],e=>i("bg-"+e,"background-attachment: "+e)),a(["text","content","padding","border"],e=>i("bg-clip-"+e,`background-clip: ${e}${"text"==e?"":"-box"};`)),n("bg","background-color"),a(["border","padding","content"],e=>i("bg-origin-"+e,`background-origin: ${e}-box;`)),a(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],e=>i("bg-"+e,`background-position: ${e.replace("-"," ")};`)),a(["repeat","no-repeat","repeat-x","repeat-y","round","space"],e=>i("bg-"+(-1!=e.indexOf("repeat")?e:"repeat-"+e),`background-repeat: ${e};`)),a(["auto","cover","contain"],e=>i("bg-"+e,`background-size: ${e};`)),i("bg-none","background-image: none;");const g={t:"top",r:"right",b:"bottom",l:"left"},m=["t","tr","r","br","b","bl","l","tl"],$=(a(m,e=>i("bg-gradient-to-"+e,`background-image: linear-gradient(to ${1==e.length?g[e[0]]:g[e[0]]+" "+g[e[1]]}, var(--${l}-gradient-stops));`)),i("from-",e=>{e=f(e.name.substring("from-".length));return e?`--${l}-gradient-from: ${u(e)?e:"#"+d(e)}; --${l}-gradient-stops: var(--${l}-gradient-from), var(--${l}-gradient-to, rgba(${e.r},${e.g},${e.b}, 0));`:null}),i("to-",e=>{e=f(e.name.substring("to-".length));return e?`--${l}-gradient-to: ${u(e)?e:"#"+d(e)};`:null}),i("via-",e=>{e=f(e.name.substring("via-".length));return e?`--${l}-gradient-stops: var(--${l}-gradient-from), ${u(e)?e:"#"+d(e)}, var(--${l}-gradient-to, rgba(${e.r},${e.g},${e.b}, 0));`:null}),n("fill","fill"),n("stroke","stroke"),a([0,1,2],e=>i("stroke-"+e,"stroke-width: "+e)),r.autoGenerateOnReset(()=>{var e=r.extend({none:"0px",sm:.125,_:.25,md:.375,lg:.5,xl:.75,"2xl":1,"3xl":1.5,full:"9999px"},o.borderRadiusSizes);a(e,(n,o)=>{n=b(n),i("rounded"+("_"==o?"":"-"+o),`border-radius: ${n};`),a(m,e=>{var t,r;1==e.length?(r=(t="t"==e||"b"==e)?["l","r"]:["t","b"],i("rounded-"+e+("_"==o?"":"-"+o),`border-${t?g[e]:g[r[0]]}-${t?g[r[0]]:g[e]}-radius: ${n}; border-${t?g[e]:g[r[1]]}-${t?g[r[1]]:g[e]}-radius: ${n};`)):i("rounded-"+e+("_"==o?"":"-"+o),`border-${g[e[0]]}-${g[e[1]]}-radius: ${n}; `)})})}),i("rounded-[",e=>`border-radius: ${s(e.name)};`),a(m,n=>{if(1==n.length){let t="t"==n||"b"==n,r=t?["l","r"]:["t","b"];i(`rounded-${n}-[`,e=>`border-${t?g[n]:g[r[0]]}-${t?g[r[0]]:g[n]}-radius: ${s(e.name)}; border-${t?g[n]:g[r[1]]}-${t?g[r[1]]:g[n]}-radius: ${s(e.name)};`)}else i(`rounded-${n}-[`,e=>`border-${g[n[0]]}-${g[n[1]]}-radius: ${s(e.name)}; `)}),a([0,1,2,4,8],t=>{i("border"+(1==t?"":"-"+t),`border-width: ${t}px;`),a(Object.keys(g),e=>i("border-"+e+(1==t?"":"-"+t),`border-${g[e]}-width: ${t}px;`))}),n("border","border-color"),a(["solid","dashed","dotted","double","none"],e=>i("border-"+e,`border-style: ${e};`))," > :not([hidden]) ~ :not([hidden])"),h=(a(["x","y"],t=>{let r="x"==t?["left","right"]:["top","bottom"];i(`divide-${t}-reverse`,{name:"$"+$,style:`--${l}-divide-${t}-reverse: 1;`}),a([0,1,2,4,8],e=>{i("divide-"+t+(1==e?"":"-"+e),{name:"$"+$,style:`--${l}-divide-${t}-reverse: 0; border-${r[0]}-width: calc(${e}px * calc(1 - var(--${l}-divide-${t}-reverse))); border-${r[1]}-width: calc(${e}px * var(--${l}-divide-${t}-reverse));`})})}),n("divide","border-color",$),a(["solid","dashed","dotted","double","none"],e=>i("divide-"+e,{name:"$"+$,style:`border-style: ${e};`})),()=>{c(`*, ::before, ::after {--${l}-shadow: 0 0 #0000;}`),c(`*, ::before, ::after {--${l}-ring-inset: var(--${l}-empty,/*!*/ /*!*/); --${l}-ring-offset-width: 0px; --${l}-ring-offset-color: #fff; --${l}-ring-color: rgba(59, 130, 246, 0.5); --${l}-ring-offset-shadow: 0 0 #0000; --${l}-ring-shadow: 0 0 #0000;}`)}),x=(i("ring-inset",`--${l}-ring-inset: inset;`),a([0,1,2,4,8,3],e=>i("ring"+(3==e?"":"-"+e),`--${l}-ring-offset-shadow: var(--${l}-ring-inset) 0 0 0 var(--${l}-ring-offset-width) var(--${l}-ring-offset-color); --${l}-ring-shadow: var(--${l}-ring-inset) 0 0 0 calc(${e}px + var(--${l}-ring-offset-width)) var(--${l}-ring-color); box-shadow: var(--${l}-ring-offset-shadow), var(--${l}-ring-shadow), var(--${l}-shadow, 0 0 #0000);`,h)),n("ring",`--${l}-ring-color`),a([0,1,2,4,8],e=>i("ring-offset-"+e,`--${l}-ring-offset-width: ${e}px;`)),"ring-offset-"),v=(i(x,e=>{e=f(e.name.substring(x.length));return e?`--${l}-ring-offset-color: ${u(e)?e:"#"+d(e)}; `:null}),`box-shadow: var(--${l}-ring-offset-shadow, 0 0 #0000), var(--${l}-ring-shadow, 0 0 #0000), var(--${l}-shadow);`);a({sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",_:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"0 0 #0000"},(e,t)=>i("shadow"+("_"==t?"":"-"+t),`--${l}-shadow: ${e};`+v,h)),i("opacity-",e=>{return`opacity: ${+e.name.split("-")[1]/100};`});e=["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"];a(e,e=>i("mix-blend-"+e,`mix-blend-mode: ${e};`)),a(e,e=>i("bg-blend-"+e,`background-blend-mode: ${e};`)),a({none:"none",all:"all",opacity:"opacity",shadow:"box-shadow",transform:"transform",_:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"background-color, border-color, color, fill, stroke"},(e,t)=>i("transition"+("_"==t?"":"-"+t),`transition-property: ${e}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`)),i("duration-",e=>{return`transition-duration: ${e.name.split("-")[1]}ms;`}),a({linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},(e,t)=>i("ease-"+t,`transition-timing-function: ${e};`)),i("delay-",e=>{return`transition-delay: ${e.name.split("-")[1]}ms;`});const y="animate-",w=(i(y,e=>{e=e.name.substring(y.length),e=o.animation[e];return e?`animation: ${e};`:null},e=>{e=e.name.substring(y.length);o.keyframes[e]&&c("@keyframes "+e+o.keyframes[e])}),()=>c(`*, ::before, ::after {--${l}-translate-x: 0; --${l}-translate-y: 0; --${l}-rotate: 0; --${l}-skew-x: 0; --${l}-skew-y: 0; --${l}-scale-x: 1; --${l}-scale-y: 1;}`)),k=`transform: translateX(var(--${l}-translate-x)) translateY(var(--${l}-translate-y)) rotate(var(--${l}-rotate)) skewX(var(--${l}-skew-x)) skewY(var(--${l}-skew-y)) scaleX(var(--${l}-scale-x)) scaleY(var(--${l}-scale-y))`;function z(r,n){a(["x","y"],t=>a(["","-"],e=>{i(e+`translate-${t}-`+r,k+`; --${l}-translate-${t}: ${e}${n};`,w)}))}i("transform",k+";",w),i("transform-none","transform: none;"),a(["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],e=>i("origin-"+e,`transform-origin: ${e.replace("-"," ")};`)),i(["scale-","-scale-"],e=>{let t=e.name,r="";"-"==t[0]&&(t=t.substring(1),r="-");var e=t.lastIndexOf("-"),n=t.substring(0,e);let o=t.substring(e+1);return o=s(o)||+o/100,"scale"===n?k+`; --${l}-scale-x: ${r}${o};--${l}-scale-y: ${r}${o};`:k+`; --${l}-${n}: ${r}${o};`},w),i(["rotate-","-rotate-"],e=>{let t=e.name,r="",n=("-"==t[0]&&(t=t.substring(1),r="-"),t.substring(t.lastIndexOf("-")+1));return n=s(n)||n+"deg",k+`; --${l}-rotate: ${r}${n};`},w),t(z),z("full","100%"),a(["x","y"],n=>a(["","-"],t=>{const r=t+`translate-${n}-[`;i(r,e=>{e=e.name.substring(r.length,e.name.length-1);return k+`; --${l}-translate-${n}: ${t}${e};`},w)})),a(["x","y"],n=>a(["","-"],t=>{const r=t+`skew-${n}-[`;a([0,1,2,3,6,12],e=>i(t+`skew-${n}-`+e,k+`; --${l}-skew-${n}: ${t}${e}deg;`,w)),i(r,e=>{e=e.name.substring(r.length,e.name.length-1);return k+`; --${l}-skew-${n}: ${t}${e};`},w)})),i("outline-none","outline: 2px solid transparent; outline-offset: 2px;"),i("outline","outline-style: solid;"),a(["dashed","dotted","double","hidden"],e=>i("outline-"+e,`outline-style: ${e};`)),a([0,1,2,4,8],e=>{i("outline-"+e,`outline-width: ${e}px;`),i("outline-offset-"+e,`outline-offset: ${e}px;`)}),n("outline","outline-color"),i("appearance-none","appearance: none;"),a(["auto","default","pointer","wait","text","move","help","not-allowed"],e=>i("cursor-"+e,`cursor: ${e};`)),a(["none","auto"],e=>i("pointer-events-"+e,`pointer-events: ${e};`)),a({none:"none",y:"vertical",x:"horizontal",_:"both"},(e,t)=>i("resize"+("_"==t?"":"-"+t),`resize: ${e};`)),a(["none","text","all","auto"],e=>i("select-"+e,`user-select: ${e};`)),i("sr-only","position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"),i("not-sr-only","position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;")}function setupVimeshStyle(e={}){return setupCore(e),setupPreset(e),setupLayout(e),setupPaint(e),e.$vs}module.exports=setupVimeshStyle;