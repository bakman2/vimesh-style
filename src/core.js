
function setupCore(G) {
    if (G.$vs) return // Vimesh style core is already loaded    
    G.$vs = {
        config: {
            debug: false,
            auto: true,
            prefix: 'vs',
            attributify: 'all', // all, none, prefix
            breakpoints: {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                '2xl': 1536
            },
            fonts: {
                sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            },
            colors: {
                rose: 'f43f5e',
                pink: 'ec4899',
                fuchsia: 'd946ef',
                purple: 'a855f7',
                violet: '8b5cf6',
                indigo: '6366f1',
                blue: '3b82f6',
                sky: '0ea5e9',
                cyan: '06b6d4',
                teal: '14b8a6',
                emerald: '10b981',
                green: '22c55e',
                lime: '84cc16',
                yellow: 'eab308',
                amber: 'f59e0b',
                orange: 'f97316',
                red: 'ef4444',
                gray: ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b']
            },
            aliasColors: {
                lightBlue: 'sky'
            },
            specialColors: {
                white: '#ffffff',
                black: '#000000',
                transparent: 'transparent',
                current: 'currentColor'
            },
            keyframes: {
                spin: `{to{transform:rotate(360deg)}}`,
                ping: `{75%,100%{transform:scale(2);opacity:0}}`,
                pulse: `{50%{opacity:.5}}`,
                bounce: `{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}`
            },
            animation: {
                none: '',
                spin: `spin 1s linear infinite`,
                ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
                pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                bounce: `bounce 1s infinite`
            }
        }
    }

    const $vs = G.$vs
    const C = $vs.config

    function isString(str) {
        return (str != null && typeof str.valueOf() === "string")
    }
    function isArray(array) {
        return Array.isArray(array)
    }
    function isFunction(func) {
        return typeof func === "function";
    }
    function isPlainObject(item) {
        return item !== null && typeof item === 'object' && item.constructor === Object;
    }
    function each(objOrArray, callback) {
        if (!objOrArray) return
        if (isArray(objOrArray)) {
            objOrArray.forEach((val, index) => {
                callback(val, index, index)
            })
        } else {
            Object.entries(objOrArray).forEach(([key, val], index) => {
                callback(val, key, index)
            })
        }
    }
    function extend(target, ...sources) {
        const length = sources.length
        if (length < 1 || target == null) return target
        for (let i = 0; i < length; i++) {
            const source = sources[i]
            Object.keys(source).forEach((key) => {
                var desc = Object.getOwnPropertyDescriptor(source, key)
                if (desc.get || desc.set) {
                    Object.defineProperty(target, key, desc);
                } else {
                    target[key] = source[key]
                }
            })
        }
        return target
    }
    $vs._ = { isString, isArray, isFunction, isPlainObject, each, extend }

    const KNOWN_ATTR_NAMES = 'font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr'
    let addedClasses = {}
    let classMap = $vs.classMap = {}
    let initMap = {}
    let autoStyles = {}
    let initStyles = []
    let styleElement = null
    let stylesOutput = null
    let generators = $vs.generators = []
    let cache = {}
    let knownAttributes = {}
    each(KNOWN_ATTR_NAMES.split(','), a => knownAttributes[a] = true)

    function decomposeClassName(className) {
        if (isString(className)) {
            let breakpoint = null
            let pseudo = null
            let segs = className.split(':')
            className = segs[segs.length - 1]
            if (segs.length === 3) {
                breakpoint = segs[0]
                pseudo = segs[1]
            } else if (segs.length === 2) {
                if (C.breakpoints[segs[0]])
                    breakpoint = segs[0]
                else
                    pseudo = segs[0]
            }
            return { breakpoint, pseudo, name: className }
        } else {
            console.error(`Wrong parameter ${className}`)
        }
    }
    function normalizeCssName(name) {
        return name.replace(/:/g, '\\:').replace(/\//g, '\\/').replace(/\./g, '\\.')
    }
    function register(keys, generatorOrStyle, initFunc) {
        if (!generatorOrStyle) return
        if (!isArray(keys)) keys = [keys]
        if (isFunction(generatorOrStyle))
            each(keys, key => generators.push({ prefix: key, generator: generatorOrStyle, init: initFunc }))
        else
            each(keys, key => {
                classMap[key] = generatorOrStyle;
                if (initFunc) initMap[key] = initFunc
            })
    }
    function resolveClass(className) {
        if (!className) return null
        let classDetails = decomposeClassName(className)
        let cdn = classDetails.name
        let style = classMap[cdn]
        if (style && initMap[cdn]) initMap[cdn](classDetails)
        for (let i = 0; !style && i < generators.length; i++) {
            let gi = generators[i]
            if (cdn.indexOf(gi.prefix) == 0) {
                style = gi.generator(classDetails)
                if (style && gi.init) gi.init(classDetails)
            }
        }
        if (!style && C.debug) console.log(`Unknown class: ${className}`)
        return style
    }
    function updateAutoStyles() {
        let keys = Object.keys(autoStyles).sort((a, b) => (C.breakpoints[a] || 0) - (C.breakpoints[b] || 0))
        let all = initStyles
        each(keys, k => all = all.concat(autoStyles[k]))
        if (all.length > 0) {
            let newStyles = (C.preset ? [C.preset] : []).concat(all).join('\n')
            if (newStyles !== stylesOutput) {
                if (G.document) {
                    if (styleElement)
                        styleElement.innerHTML = stylesOutput = newStyles
                    else
                        setTimeout(updateAutoStyles)
                } else {
                    stylesOutput = newStyles
                }
            }
        }
    }
    function addInitStyle(style) {
        if (initStyles.indexOf(style) == -1) {
            initStyles.push(style)
        }
    }
    function addClasses(classes, update = true) {
        if (classes) {
            if (isString(classes))
                classes = classes.split(' ')
            else {
                let all = []
                each(classes, cls => all = all.concat(cls && cls.split && cls.split(' ') || []))
                classes = all
            }
            each(classes, name => {
                if (!name || addedClasses[name]) return
                let style = resolveClass(name)
                if (style) {
                    let classDetails = decomposeClassName(name)
                    let fullname = normalizeCssName(classDetails.name)
                    if (classDetails.pseudo) fullname = `${classDetails.pseudo}\\:${fullname}:${classDetails.pseudo}`
                    if (classDetails.breakpoint) fullname = `${classDetails.breakpoint}\\:${fullname}`
                    if (style.name) {
                        if (style.name.indexOf('$') == 0) {
                            fullname += style.name.substring(1)
                        } else {
                            fullname = style.name
                        }
                        style = style.style
                    }
                    style = `{${style}}`
                    if (classDetails.breakpoint) {
                        style = `@media (min-width: ${C.breakpoints[classDetails.breakpoint]}px) {\n  .${fullname} ${style} \n}`
                    } else {
                        style = `.${fullname} ${style} `
                    }
                    addedClasses[name] = true
                    let bpStyles = autoStyles[classDetails.breakpoint || '']
                    if (!bpStyles) bpStyles = autoStyles[classDetails.breakpoint || ''] = []
                    bpStyles.push(style)
                }
            })
            if (update) updateAutoStyles()
        }
    }
    function recordKnownClasses(el, update = true) {
        const prefix = C.prefix + ':'
        let classes = []
        let classesFromAttrs = []
        let cn = el.className
        if (cn) {
            classes.push(cn)
            // SVGAnimatedString
            if (cn.baseVal) classes.push(cn.baseVal)
            if (cn.animVal) classes.push(cn.animVal)
        }
        each(el.attributes, a => {
            let prop = a.name
            let group = null
            if (C.attributify !== 'none' && prop.startsWith(prefix))
                group = prop.substring(prefix.length)
            else if (C.attributify === 'all' && knownAttributes[prop])
                group = prop
            if (group) {
                let val = a.value
                let groupCache = cache[group]
                if (!groupCache) groupCache = cache[group] = {}
                each(val.split(/ |,/).filter(Boolean), cls => {
                    let pos = cls.indexOf('~')
                    if (pos !== -1) cls = cls.replace('~', group)
                    if (groupCache[cls]) {
                        if ('-' !== groupCache[cls]) classesFromAttrs.push(groupCache[cls])
                        return
                    }
                    let r = resolveClass(cls)
                    if (r) {
                        classesFromAttrs.push(cls)
                        groupCache[cls] = cls
                    } else {
                        pos = cls.lastIndexOf(':')
                        let ncls = group + '-' + cls
                        if (pos !== -1) {
                            ncls = cls.substring(0, pos + 1) + group + '-' + cls.substring(pos + 1)
                        }
                        r = resolveClass(ncls)
                        if (r) {
                            groupCache[cls] = ncls
                            classesFromAttrs.push(ncls)
                        } else {
                            ncls = group + cls
                            if (pos !== -1) {
                                ncls = cls.substring(0, pos + 1) + group + cls.substring(pos + 1)
                            }
                            r = resolveClass(ncls)
                            if (r) {
                                groupCache[cls] = ncls
                                classesFromAttrs.push(ncls)
                            } else {
                                groupCache[cls] = '-'
                            }
                        }
                    }
                })
            }
        })
        if (el._vs_undo_add_classes_from_attrs)
            el._vs_undo_add_classes_from_attrs()
        if (classesFromAttrs.length > 0) {
            let classesToAdd = classesFromAttrs.join(' ').split(' ').filter(i => !el.classList.contains(i)).filter(Boolean)
            el.classList.add(...classesToAdd)
            el._vs_undo_add_classes_from_attrs = () => {
                el.classList.remove(...classesToAdd)
            }
        }
        return [...classes, ...classesFromAttrs]
    }
    function resolveAll(root, update = true) {
        if (!root || !root.querySelectorAll) return
        let all = [root, ...root.querySelectorAll(C.attributify === 'none' ? '*[class]' : '*')]
        let allClasses = []
        each(all, el => allClasses.push(...recordKnownClasses(el)))
        addClasses(allClasses, update)
    }
    function resetStyles() {
        addedClasses = {}
        autoStyles = {}
        stylesOutput = null
        cache = {}
        if (styleElement) {
            styleElement.innerHTML = null
            if (C.auto && G.document) resolveAll(G.document.body)
        }
    }
    const CLASS_NAMES = /class\s*=\s*['\"](?<class>[^'\"]*)['\"]/g
    function extractClasses(html) {
        let match
        let classes = []
        while ((match = CLASS_NAMES.exec(html)) !== null) {
            each(match.groups.class.split(' '), cls => {
                cls = cls && cls.trim()
                if (cls && classes.indexOf(cls) === -1) classes.push(cls)
            })
        }
        return classes
    }
    const hueStep = 2;
    const saturationStep = 0.16;
    const saturationStep2 = 0.05;
    const brightnessStep1 = 0.05;
    const brightnessStep2 = 0.15;
    const lightColorCount = 5;
    const darkColorCount = 4;

    function getHue(hsv, i, isLight) {
        let hue;
        if (hsv.h >= 60 && hsv.h <= 240) {
            hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
        } else {
            hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
        }
        if (hue < 0) {
            hue += 360;
        } else if (hue >= 360) {
            hue -= 360;
        }
        return Math.round(hue);
    }

    function getSaturation(hsv, i, isLight) {
        let saturation;
        if (isLight) {
            saturation = hsv.s - saturationStep * i;
        } else if (i === darkColorCount) {
            saturation = hsv.s + saturationStep;
        } else {
            saturation = hsv.s + saturationStep2 * i;
        }
        if (saturation > 1) {
            saturation = 1;
        }
        if (isLight && i === lightColorCount && saturation > 0.1) {
            saturation = 0.1;
        }
        if (saturation < 0.06) {
            saturation = 0.06;
        }
        return Number(saturation.toFixed(2));
    }

    function getValue(hsv, i, isLight) {
        let value;
        if (isLight) {
            value = hsv.v + brightnessStep1 * i;
        } else {
            value = hsv.v - brightnessStep2 * i
        }
        if (value > 1) {
            value = 1;
        }
        if (value < 0) {
            value = 0
        }
        return Number(value.toFixed(2))
    }
    function rgbToHsv(rgb) {
        let { r, g, b } = rgb
        r /= 255, g /= 255, b /= 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max == 0 ? 0 : d / max;

        if (max == min) {
            h = 0; // achromatic
        } else {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return { h, s, v };
    }
    function hsvToRgb(hsv) {
        let { h, s, v } = hsv
        var r, g, b;

        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return { r, g, b }
        }
        return null;
    }
    function rgbToHex(rgb) {
        let { r, g, b } = rgb
        return ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
    }
    function colorPalette(color, index) {
        if (index === 6) return color
        let isLight = index <= 6
        let rgb = hexToRgb(color)
        let hsv = rgbToHsv(rgb)
        var i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
        hsv = { h: hsv.h * 360, s: hsv.s, v: hsv.v }
        hsv = {
            h: getHue(hsv, i, isLight) / 360,
            s: getSaturation(hsv, i, isLight),
            v: getValue(hsv, i, isLight),
        }
        rgb = hsvToRgb(hsv)
        return rgbToHex(rgb)
    }

    function resolveColor(name) {
        if (!name) return null
        let cv = null
        if (C.aliasColors[name]) name = C.aliasColors[name]
        if (C.specialColors[name]) {
            cv = C.specialColors[name]
            if (cv[0] == '#') cv = hexToRgb(cv)
        } else {
            let pos = name.lastIndexOf('-')
            let depth = null
            if (pos != -1) {
                depth = name.substring(pos + 1)
                name = name.substring(0, pos)
                let parts = name.split('-')
                if (parts.length > 1) {
                    name = parts[0]
                    for (let i = 1; i < parts.length; i++) {
                        if (parts[i].length > 0)
                            name += parts[i][0].toUpperCase() + parts[i].substring(1)
                    }
                }
            }
            if (C.aliasColors[name]) name = C.aliasColors[name]
            let color = C.colors[name]
            if (!color) return null
            let w = depth ? +depth : 500
            let index = 50 === w ? 1 : (w / 100) + 1
            if (isArray(color)) return color[index - 1]
            let hex = colorPalette(color, index)
            cv = hexToRgb(hex)
        }
        return cv
    }
    function generateColors(classNamePrefix, styleName, nameAffix) {
        const vn = `--${C.prefix}-${classNamePrefix}-opacity`
        register(`${classNamePrefix}-opacity-`, classDetails => {
            let parts = classDetails.name.split('-')
            let style = `${vn}: ${+parts[2] / 100};`
            return nameAffix ? { name: `$${nameAffix}`, style } : style
        })
        register(`${classNamePrefix}-`, classDetails => {
            let cv = resolveColor(classDetails.name.substring(classNamePrefix.length + 1))
            if (!cv) return null
            let style = isString(cv) ? `${styleName}: ${cv};` : `${vn}:1;${styleName}: rgba(${cv.r},${cv.g},${cv.b},var(${vn}));`
            return nameAffix ? { name: `$${nameAffix}`, style } : style
        })
    }
    function generateSizes(handler) {
        for (let i = 0; i <= 96; i++) {
            if (i == 13 || i == 15 || (i >= 16 && (i - 16) % 4 != 0)) continue
            handler(i, `${i * 0.25}${0 == i ? 'px' : 'rem'}`)
            if (1 == i) handler('px', '1px')
            if (i <= 3) handler(i + 0.5, `${i * 0.25 + 0.125}rem`)
        }
    }
    extend($vs._, {
        hexToRgb,
        rgbToHex,
        register,
        resolveColor,
        generateColors,
        generateSizes,
        resolveClass,
        addInitStyle
    })
    extend($vs, {
        get styles() { return stylesOutput },
        reset: resetStyles,
        extract: extractClasses,
        add: addClasses,
        resolveAll
    })

    if (!G.document) {
        extend($vs, {
            ready(callback) { callback() }
        })
    } else {
        const D = G.document
        extend($vs, {
            ready(callback) {
                if (D.readyState === "complete") {
                    callback()
                } else {
                    D.addEventListener("DOMContentLoaded", callback)
                }
            }
        })
        $vs.ready(() => {
            const VSC = 'vimesh-styles'
            styleElement = D.getElementById(VSC)
            if (!styleElement) {
                styleElement = D.createElement('style')
                styleElement.setAttribute('id', VSC)
                D.head.appendChild(styleElement)
            }
            if (C.auto) resolveAll(D.body)
            const observer = new MutationObserver((mutations) => {
                if (C.auto) {
                    observer.disconnect()
                    each(mutations, m => {
                        if (m.type === 'childList') {
                            m.addedNodes.forEach(node => resolveAll(node, false))
                        } else if (m.type === 'attributes') {
                            addClasses(recordKnownClasses(m.target), false)
                        }
                    })
                    updateAutoStyles()
                    observer.observe(D, { attributes: true, childList: true, subtree: true })
                }
            })
            observer.observe(D, { attributes: true, childList: true, subtree: true })
        })
    }
}