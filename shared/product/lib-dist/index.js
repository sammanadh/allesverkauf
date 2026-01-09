/*! For license information please see index.js.LICENSE.txt */
var __webpack_modules__ = {
    "./src/components/ProviderComponent.css": function() {},
    "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js": function(__unused_webpack_module, exports1, __webpack_require__) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== process.env.NODE_ENV && function() {
            function is(x, y) {
                return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
            }
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
            var React = __webpack_require__("react"), objectIs = "function" == typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
            exports1.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
                var instRef = useRef(null);
                if (null === instRef.current) {
                    var inst = {
                        hasValue: !1,
                        value: null
                    };
                    instRef.current = inst;
                } else inst = instRef.current;
                instRef = useMemo(function() {
                    function memoizedSelector(nextSnapshot) {
                        if (!hasMemo) {
                            hasMemo = !0;
                            memoizedSnapshot = nextSnapshot;
                            nextSnapshot = selector(nextSnapshot);
                            if (void 0 !== isEqual && inst.hasValue) {
                                var currentSelection = inst.value;
                                if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                            }
                            return memoizedSelection = nextSnapshot;
                        }
                        currentSelection = memoizedSelection;
                        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                        var nextSelection = selector(nextSnapshot);
                        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                        memoizedSnapshot = nextSnapshot;
                        return memoizedSelection = nextSelection;
                    }
                    var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
                    return [
                        function() {
                            return memoizedSelector(getSnapshot());
                        },
                        null === maybeGetServerSnapshot ? void 0 : function() {
                            return memoizedSelector(maybeGetServerSnapshot());
                        }
                    ];
                }, [
                    getSnapshot,
                    getServerSnapshot,
                    selector,
                    isEqual
                ]);
                var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
                useEffect(function() {
                    inst.hasValue = !0;
                    inst.value = value;
                }, [
                    value
                ]);
                useDebugValue(value);
                return value;
            };
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
        }();
    },
    "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js": function(__unused_webpack_module, exports1, __webpack_require__) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var React = __webpack_require__("react");
        function is(x, y) {
            return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = "function" == typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
        exports1.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
            var instRef = useRef(null);
            if (null === instRef.current) {
                var inst = {
                    hasValue: !1,
                    value: null
                };
                instRef.current = inst;
            } else inst = instRef.current;
            instRef = useMemo(function() {
                function memoizedSelector(nextSnapshot) {
                    if (!hasMemo) {
                        hasMemo = !0;
                        memoizedSnapshot = nextSnapshot;
                        nextSnapshot = selector(nextSnapshot);
                        if (void 0 !== isEqual && inst.hasValue) {
                            var currentSelection = inst.value;
                            if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                        }
                        return memoizedSelection = nextSnapshot;
                    }
                    currentSelection = memoizedSelection;
                    if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                    var nextSelection = selector(nextSnapshot);
                    if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                    memoizedSnapshot = nextSnapshot;
                    return memoizedSelection = nextSelection;
                }
                var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
                return [
                    function() {
                        return memoizedSelector(getSnapshot());
                    },
                    null === maybeGetServerSnapshot ? void 0 : function() {
                        return memoizedSelector(maybeGetServerSnapshot());
                    }
                ];
            }, [
                getSnapshot,
                getServerSnapshot,
                selector,
                isEqual
            ]);
            var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
            useEffect(function() {
                inst.hasValue = !0;
                inst.value = value;
            }, [
                value
            ]);
            useDebugValue(value);
            return value;
        };
    },
    "../../node_modules/use-sync-external-store/with-selector.js": function(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";
        if ('production' === process.env.NODE_ENV) module.exports = __webpack_require__("../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js");
        else module.exports = __webpack_require__("../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js");
    },
    react: function(module) {
        "use strict";
        module.exports = require("react");
    }
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}
(()=>{
    var getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
    var leafPrototypes;
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = this(value);
        if (8 & mode) return value;
        if ('object' == typeof value && value) {
            if (4 & mode && value.__esModule) return value;
            if (16 & mode && 'function' == typeof value.then) return value;
        }
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        var def = {};
        leafPrototypes = leafPrototypes || [
            null,
            getProto({}),
            getProto([]),
            getProto(getProto)
        ];
        for(var current = 2 & mode && value; ('object' == typeof current || 'function' == typeof current) && !~leafPrototypes.indexOf(current); current = getProto(current))Object.getOwnPropertyNames(current).forEach((key)=>{
            def[key] = ()=>value[key];
        });
        def['default'] = ()=>value;
        __webpack_require__.d(ns, def);
        return ns;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
(()=>{
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
        Product: ()=>components_ProductList
    });
    const jsx_runtime_namespaceObject = require("react/jsx-runtime");
    var external_react_ = __webpack_require__("react");
    var external_react_namespaceObject = /*#__PURE__*/ __webpack_require__.t(external_react_, 2);
    __webpack_require__("./src/components/ProviderComponent.css");
    var keyboard_o = ((r)=>(r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(keyboard_o || {});
    var env_i = Object.defineProperty;
    var env_d = (t, e, n)=>e in t ? env_i(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n;
    var env_r = (t, e, n)=>(env_d(t, "symbol" != typeof e ? e + "" : e, n), n);
    class env_o {
        constructor(){
            env_r(this, "current", this.detect());
            env_r(this, "handoffState", "pending");
            env_r(this, "currentId", 0);
        }
        set(e) {
            this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
        }
        reset() {
            this.set(this.detect());
        }
        nextId() {
            return ++this.currentId;
        }
        get isServer() {
            return "server" === this.current;
        }
        get isClient() {
            return "client" === this.current;
        }
        detect() {
            return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client";
        }
        handoff() {
            "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
            return "complete" === this.handoffState;
        }
    }
    let env_s = new env_o;
    let use_iso_morphic_effect_n = (e, t)=>{
        env_s.isServer ? (0, external_react_.useEffect)(e, t) : (0, external_react_.useLayoutEffect)(e, t);
    };
    function use_latest_value_s(e) {
        let r = (0, external_react_.useRef)(e);
        return use_iso_morphic_effect_n(()=>{
            r.current = e;
        }, [
            e
        ]), r;
    }
    function use_event_listener_E(n, e, a, t) {
        let i = use_latest_value_s(a);
        (0, external_react_.useEffect)(()=>{
            n = null != n ? n : window;
            function r(o) {
                i.current(o);
            }
            return n.addEventListener(e, r, t), ()=>n.removeEventListener(e, r, t);
        }, [
            n,
            e,
            t
        ]);
    }
    class default_map_a extends Map {
        constructor(t){
            super();
            this.factory = t;
        }
        get(t) {
            let e = super.get(t);
            return void 0 === e && (e = this.factory(t), this.set(t, e)), e;
        }
    }
    function micro_task_t(e) {
        "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((o)=>setTimeout(()=>{
                throw o;
            }));
    }
    function disposables_o() {
        let s = [], r = {
            addEventListener (e, t, n, i) {
                return e.addEventListener(t, n, i), r.add(()=>e.removeEventListener(t, n, i));
            },
            requestAnimationFrame (...e) {
                let t = requestAnimationFrame(...e);
                return r.add(()=>cancelAnimationFrame(t));
            },
            nextFrame (...e) {
                return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e));
            },
            setTimeout (...e) {
                let t = setTimeout(...e);
                return r.add(()=>clearTimeout(t));
            },
            microTask (...e) {
                let t = {
                    current: !0
                };
                return micro_task_t(()=>{
                    t.current && e[0]();
                }), r.add(()=>{
                    t.current = !1;
                });
            },
            style (e, t, n) {
                let i = e.style.getPropertyValue(t);
                return Object.assign(e.style, {
                    [t]: n
                }), this.add(()=>{
                    Object.assign(e.style, {
                        [t]: i
                    });
                });
            },
            group (e) {
                let t = disposables_o();
                return e(t), this.add(()=>t.dispose());
            },
            add (e) {
                return s.includes(e) || s.push(e), ()=>{
                    let t = s.indexOf(e);
                    if (t >= 0) for (let n of s.splice(t, 1))n();
                };
            },
            dispose () {
                for (let e of s.splice(0))e();
            }
        };
        return r;
    }
    var machine_h = Object.defineProperty;
    var machine_v = (t, e, r)=>e in t ? machine_h(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
    var machine_S = (t, e, r)=>(machine_v(t, "symbol" != typeof e ? e + "" : e, r), r), machine_b = (t, e, r)=>{
        if (!e.has(t)) throw TypeError("Cannot " + r);
    };
    var machine_i = (t, e, r)=>(machine_b(t, e, "read from private field"), r ? r.call(t) : e.get(t)), machine_c = (t, e, r)=>{
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
    }, machine_u = (t, e, r, s)=>(machine_b(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
    var machine_n, machine_a, machine_o;
    class machine_T {
        constructor(e){
            machine_c(this, machine_n, {});
            machine_c(this, machine_a, new default_map_a(()=>new Set));
            machine_c(this, machine_o, new Set);
            machine_S(this, "disposables", disposables_o());
            machine_u(this, machine_n, e), env_s.isServer && this.disposables.microTask(()=>{
                this.dispose();
            });
        }
        dispose() {
            this.disposables.dispose();
        }
        get state() {
            return machine_i(this, machine_n);
        }
        subscribe(e, r) {
            if (env_s.isServer) return ()=>{};
            let s = {
                selector: e,
                callback: r,
                current: e(machine_i(this, machine_n))
            };
            return machine_i(this, machine_o).add(s), this.disposables.add(()=>{
                machine_i(this, machine_o).delete(s);
            });
        }
        on(e, r) {
            return env_s.isServer ? ()=>{} : (machine_i(this, machine_a).get(e).add(r), this.disposables.add(()=>{
                machine_i(this, machine_a).get(e).delete(r);
            }));
        }
        send(e) {
            let r = this.reduce(machine_i(this, machine_n), e);
            if (r !== machine_i(this, machine_n)) {
                machine_u(this, machine_n, r);
                for (let s of machine_i(this, machine_o)){
                    let l = s.selector(machine_i(this, machine_n));
                    machine_j(s.current, l) || (s.current = l, s.callback(l));
                }
                for (let s of machine_i(this, machine_a).get(e.type))s(machine_i(this, machine_n), e);
            }
        }
    }
    machine_n = new WeakMap, machine_a = new WeakMap, machine_o = new WeakMap;
    function machine_j(t, e) {
        return Object.is(t, e) ? !0 : "object" != typeof t || null === t || "object" != typeof e || null === e ? !1 : Array.isArray(t) && Array.isArray(e) ? t.length !== e.length ? !1 : machine_f(t[Symbol.iterator](), e[Symbol.iterator]()) : t instanceof Map && e instanceof Map || t instanceof Set && e instanceof Set ? t.size !== e.size ? !1 : machine_f(t.entries(), e.entries()) : machine_p(t) && machine_p(e) ? machine_f(Object.entries(t)[Symbol.iterator](), Object.entries(e)[Symbol.iterator]()) : !1;
    }
    function machine_f(t, e) {
        do {
            let r = t.next(), s = e.next();
            if (r.done && s.done) return !0;
            if (r.done || s.done || !Object.is(r.value, s.value)) return !1;
        }while (!0);
    }
    function machine_p(t) {
        if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
        let e = Object.getPrototypeOf(t);
        return null === e || null === Object.getPrototypeOf(e);
    }
    function match_u(r, n, ...a) {
        if (r in n) {
            let e = n[r];
            return "function" == typeof e ? e(...a) : e;
        }
        let t = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e)=>`"${e}"`).join(", ")}.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, match_u), t;
    }
    var stack_machine_a = Object.defineProperty;
    var stack_machine_r = (e, c, t)=>c in e ? stack_machine_a(e, c, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : e[c] = t;
    var stack_machine_p = (e, c, t)=>(stack_machine_r(e, "symbol" != typeof c ? c + "" : c, t), t);
    var stack_machine_k = ((t)=>(t[t.Push = 0] = "Push", t[t.Pop = 1] = "Pop", t))(stack_machine_k || {});
    let stack_machine_y = {
        [0] (e, c) {
            let t = c.id, s = e.stack, i = e.stack.indexOf(t);
            if (-1 !== i) {
                let n = e.stack.slice();
                return n.splice(i, 1), n.push(t), s = n, {
                    ...e,
                    stack: s
                };
            }
            return {
                ...e,
                stack: [
                    ...e.stack,
                    t
                ]
            };
        },
        [1] (e, c) {
            let t = c.id, s = e.stack.indexOf(t);
            if (-1 === s) return e;
            let i = e.stack.slice();
            return i.splice(s, 1), {
                ...e,
                stack: i
            };
        }
    };
    class stack_machine_o extends machine_T {
        constructor(){
            super(...arguments);
            stack_machine_p(this, "actions", {
                push: (t)=>this.send({
                        type: 0,
                        id: t
                    }),
                pop: (t)=>this.send({
                        type: 1,
                        id: t
                    })
            });
            stack_machine_p(this, "selectors", {
                isTop: (t, s)=>t.stack[t.stack.length - 1] === s,
                inStack: (t, s)=>t.stack.includes(s)
            });
        }
        static new() {
            return new stack_machine_o({
                stack: []
            });
        }
        reduce(t, s) {
            return match_u(s.type, stack_machine_y, t, s);
        }
    }
    const x = new default_map_a(()=>stack_machine_o.new());
    var with_selector = __webpack_require__("../../node_modules/use-sync-external-store/with-selector.js");
    let use_event_o = function(t) {
        let e = use_latest_value_s(t);
        return external_react_.useCallback((...r)=>e.current(...r), [
            e
        ]);
    };
    function react_glue_S(e, n, r = machine_j) {
        return (0, with_selector.useSyncExternalStoreWithSelector)(use_event_o((i)=>e.subscribe(react_glue_s, i)), use_event_o(()=>e.state), use_event_o(()=>e.state), use_event_o(n), r);
    }
    function react_glue_s(e) {
        return e;
    }
    function use_is_top_layer_I(o, s) {
        let t = (0, external_react_.useId)(), r = x.get(s), [i, c] = react_glue_S(r, (0, external_react_.useCallback)((e)=>[
                r.selectors.isTop(e, t),
                r.selectors.inStack(e, t)
            ], [
            r,
            t
        ]));
        return use_iso_morphic_effect_n(()=>{
            if (o) return r.actions.push(t), ()=>r.actions.pop(t);
        }, [
            r,
            o,
            t
        ]), o ? c ? i : !0 : !1;
    }
    function use_escape_a(o, r = "undefined" != typeof document ? document.defaultView : null, t) {
        let n = use_is_top_layer_I(o, "escape");
        use_event_listener_E(r, "keydown", (e)=>{
            n && (e.defaultPrevented || e.key === keyboard_o.Escape && t(e));
        });
    }
    function owner_l(n) {
        var u;
        return env_s.isServer ? null : null == n ? document : null != (u = null == n ? void 0 : n.ownerDocument) ? u : document;
    }
    function owner_r(n) {
        var u, o;
        return env_s.isServer ? null : null == n ? document : null != (o = null == (u = null == n ? void 0 : n.getRootNode) ? void 0 : u.call(n)) ? o : document;
    }
    function owner_e(n) {
        var u, o;
        return null != (o = null == (u = owner_r(n)) ? void 0 : u.activeElement) ? o : null;
    }
    function owner_d(n) {
        return owner_e(n) === n;
    }
    let use_inert_others_f = new Map, use_inert_others_u = new Map;
    function use_inert_others_h(t) {
        var e;
        let r = null != (e = use_inert_others_u.get(t)) ? e : 0;
        return use_inert_others_u.set(t, r + 1), 0 !== r ? ()=>use_inert_others_m(t) : (use_inert_others_f.set(t, {
            "aria-hidden": t.getAttribute("aria-hidden"),
            inert: t.inert
        }), t.setAttribute("aria-hidden", "true"), t.inert = !0, ()=>use_inert_others_m(t));
    }
    function use_inert_others_m(t) {
        var i;
        let r = null != (i = use_inert_others_u.get(t)) ? i : 1;
        if (1 === r ? use_inert_others_u.delete(t) : use_inert_others_u.set(t, r - 1), 1 !== r) return;
        let e = use_inert_others_f.get(t);
        e && (null === e["aria-hidden"] ? t.removeAttribute("aria-hidden") : t.setAttribute("aria-hidden", e["aria-hidden"]), t.inert = e.inert, use_inert_others_f.delete(t));
    }
    function use_inert_others_y(t, { allowed: r, disallowed: e } = {}) {
        let i = use_is_top_layer_I(t, "inert-others");
        use_iso_morphic_effect_n(()=>{
            var d, c;
            if (!i) return;
            let a = disposables_o();
            for (let n of null != (d = null == e ? void 0 : e()) ? d : [])n && a.add(use_inert_others_h(n));
            let s = null != (c = null == r ? void 0 : r()) ? c : [];
            for (let n of s){
                if (!n) continue;
                let l = owner_l(n);
                if (!l) continue;
                let o = n.parentElement;
                for(; o && o !== l.body;){
                    for (let p of o.children)s.some((E)=>p.contains(E)) || a.add(use_inert_others_h(p));
                    o = o.parentElement;
                }
            }
            return a.dispose;
        }, [
            i,
            r,
            e
        ]);
    }
    function use_is_touch_device_f() {
        var t;
        let [e] = (0, external_react_.useState)(()=>"undefined" != typeof window && "function" == typeof window.matchMedia ? window.matchMedia("(pointer: coarse)") : null), [o, c] = (0, external_react_.useState)(null != (t = null == e ? void 0 : e.matches) ? t : !1);
        return use_iso_morphic_effect_n(()=>{
            if (!e) return;
            function n(r) {
                c(r.matches);
            }
            return e.addEventListener("change", n), ()=>e.removeEventListener("change", n);
        }, [
            e
        ]), o;
    }
    function dom_o(e) {
        return "object" != typeof e || null === e ? !1 : "nodeType" in e;
    }
    function dom_t(e) {
        return dom_o(e) && "tagName" in e;
    }
    function dom_n(e) {
        return dom_t(e) && "accessKey" in e;
    }
    function dom_i(e) {
        return dom_t(e) && "tabIndex" in e;
    }
    function dom_r(e) {
        return dom_t(e) && "style" in e;
    }
    function dom_u(e) {
        return dom_n(e) && "IFRAME" === e.nodeName;
    }
    function dom_l(e) {
        return dom_n(e) && "INPUT" === e.nodeName;
    }
    function use_on_disappear_p(s, n, o) {
        let i = use_latest_value_s((t)=>{
            let e = t.getBoundingClientRect();
            0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && o();
        });
        (0, external_react_.useEffect)(()=>{
            if (!s) return;
            let t = null === n ? null : dom_n(n) ? n : n.current;
            if (!t) return;
            let e = disposables_o();
            if ("undefined" != typeof ResizeObserver) {
                let r = new ResizeObserver(()=>i.current(t));
                r.observe(t), e.add(()=>r.disconnect());
            }
            if ("undefined" != typeof IntersectionObserver) {
                let r = new IntersectionObserver(()=>i.current(t));
                r.observe(t), e.add(()=>r.disconnect());
            }
            return ()=>e.dispose();
        }, [
            n,
            i,
            s
        ]);
    }
    let focus_management_E = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "details>summary",
        "textarea:not([disabled])"
    ].map((e)=>`${e}:not([tabindex='-1'])`).join(","), focus_management_S = [
        "[data-autofocus]"
    ].map((e)=>`${e}:not([tabindex='-1'])`).join(",");
    var focus_management_T = ((o)=>(o[o.First = 1] = "First", o[o.Previous = 2] = "Previous", o[o.Next = 4] = "Next", o[o.Last = 8] = "Last", o[o.WrapAround = 16] = "WrapAround", o[o.NoScroll = 32] = "NoScroll", o[o.AutoFocus = 64] = "AutoFocus", o))(focus_management_T || {}), focus_management_A = ((n)=>(n[n.Error = 0] = "Error", n[n.Overflow = 1] = "Overflow", n[n.Success = 2] = "Success", n[n.Underflow = 3] = "Underflow", n))(focus_management_A || {}), O = ((t)=>(t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(O || {});
    function focus_management_x(e = document.body) {
        return null == e ? [] : Array.from(e.querySelectorAll(focus_management_E)).sort((r, t)=>Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
    }
    function focus_management_h(e = document.body) {
        return null == e ? [] : Array.from(e.querySelectorAll(focus_management_S)).sort((r, t)=>Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
    }
    var focus_management_I = ((t)=>(t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(focus_management_I || {});
    function focus_management_H(e, r = 0) {
        var t;
        return e === (null == (t = owner_l(e)) ? void 0 : t.body) ? !1 : match_u(r, {
            [0] () {
                return e.matches(focus_management_E);
            },
            [1] () {
                let l = e;
                for(; null !== l;){
                    if (l.matches(focus_management_E)) return !0;
                    l = l.parentElement;
                }
                return !1;
            }
        });
    }
    var focus_management_g = ((t)=>(t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(focus_management_g || {});
    "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", (e)=>{
        e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
    }, !0), document.addEventListener("click", (e)=>{
        1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "");
    }, !0));
    function w(e) {
        null == e || e.focus({
            preventScroll: !0
        });
    }
    let focus_management_ = "textarea,input";
    function focus_management_P(e) {
        var r, t;
        return null != (t = null == (r = null == e ? void 0 : e.matches) ? void 0 : r.call(e, focus_management_)) ? t : !1;
    }
    function focus_management_G(e, r = (t)=>t) {
        return e.slice().sort((t, l)=>{
            let n = r(t), a = r(l);
            if (null === n || null === a) return 0;
            let u = n.compareDocumentPosition(a);
            return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
        });
    }
    function focus_management_v(e, r, { sorted: t = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
        let a = Array.isArray(e) ? e.length > 0 ? owner_r(e[0]) : document : owner_r(e), u = Array.isArray(e) ? t ? focus_management_G(e) : e : 64 & r ? focus_management_h(e) : focus_management_x(e);
        n.length > 0 && u.length > 1 && (u = u.filter((i)=>!n.some((d)=>null != d && "current" in d ? (null == d ? void 0 : d.current) === i : d === i))), l = null != l ? l : null == a ? void 0 : a.activeElement;
        let o = (()=>{
            if (5 & r) return 1;
            if (10 & r) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
        })(), M = (()=>{
            if (1 & r) return 0;
            if (2 & r) return Math.max(0, u.indexOf(l)) - 1;
            if (4 & r) return Math.max(0, u.indexOf(l)) + 1;
            if (8 & r) return u.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
        })(), N = 32 & r ? {
            preventScroll: !0
        } : {}, m = 0, c = u.length, s;
        do {
            if (m >= c || m + c <= 0) return 0;
            let i = M + m;
            if (16 & r) i = (i + c) % c;
            else {
                if (i < 0) return 3;
                if (i >= c) return 1;
            }
            s = u[i], null == s || s.focus(N), m += o;
        }while (s !== owner_e(s));
        return 6 & r && focus_management_P(s) && s.select(), 2;
    }
    function platform_t() {
        return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
    }
    function platform_i() {
        return /Android/gi.test(window.navigator.userAgent);
    }
    function platform_n() {
        return platform_t() || platform_i();
    }
    function use_document_event_i(t, e, o, n) {
        let u = use_latest_value_s(o);
        (0, external_react_.useEffect)(()=>{
            if (!t) return;
            function r(m) {
                u.current(m);
            }
            return document.addEventListener(e, r, n), ()=>document.removeEventListener(e, r, n);
        }, [
            t,
            e,
            n
        ]);
    }
    function use_window_event_s(t, e, o, n) {
        let i = use_latest_value_s(o);
        (0, external_react_.useEffect)(()=>{
            if (!t) return;
            function r(d) {
                i.current(d);
            }
            return window.addEventListener(e, r, n), ()=>window.removeEventListener(e, r, n);
        }, [
            t,
            e,
            n
        ]);
    }
    const use_outside_click_C = 30;
    function use_outside_click_k(o, f, h) {
        let m = use_latest_value_s(h), s = (0, external_react_.useCallback)(function(e, c) {
            if (e.defaultPrevented) return;
            let r = c(e);
            if (null === r || !r.getRootNode().contains(r) || !r.isConnected) return;
            let M = function u(n) {
                return "function" == typeof n ? u(n()) : Array.isArray(n) || n instanceof Set ? n : [
                    n
                ];
            }(f);
            for (let u of M)if (null !== u && (u.contains(r) || e.composed && e.composedPath().includes(u))) return;
            return focus_management_H(r, focus_management_I.Loose) || -1 === r.tabIndex || e.preventDefault(), m.current(e, r);
        }, [
            m,
            f
        ]), i = (0, external_react_.useRef)(null);
        use_document_event_i(o, "pointerdown", (t)=>{
            var e, c;
            platform_n() || (i.current = (null == (c = null == (e = t.composedPath) ? void 0 : e.call(t)) ? void 0 : c[0]) || t.target);
        }, !0), use_document_event_i(o, "pointerup", (t)=>{
            if (platform_n() || !i.current) return;
            let e = i.current;
            return i.current = null, s(t, ()=>e);
        }, !0);
        let l = (0, external_react_.useRef)({
            x: 0,
            y: 0
        });
        use_document_event_i(o, "touchstart", (t)=>{
            l.current.x = t.touches[0].clientX, l.current.y = t.touches[0].clientY;
        }, !0), use_document_event_i(o, "touchend", (t)=>{
            let e = {
                x: t.changedTouches[0].clientX,
                y: t.changedTouches[0].clientY
            };
            if (!(Math.abs(e.x - l.current.x) >= use_outside_click_C || Math.abs(e.y - l.current.y) >= use_outside_click_C)) return s(t, ()=>dom_i(t.target) ? t.target : null);
        }, !0), use_window_event_s(o, "blur", (t)=>s(t, ()=>dom_u(window.document.activeElement) ? window.document.activeElement : null), !0);
    }
    function use_owner_u(...e) {
        return (0, external_react_.useMemo)(()=>owner_l(...e), [
            ...e
        ]);
    }
    function class_names_t(...r) {
        return Array.from(new Set(r.flatMap((n)=>"string" == typeof n ? n.split(" ") : []))).filter(Boolean).join(" ");
    }
    var render_A = ((a)=>(a[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a))(render_A || {}), render_C = ((e)=>(e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(render_C || {});
    function render_K() {
        let n = render_$();
        return (0, external_react_.useCallback)((r)=>render_U({
                mergeRefs: n,
                ...r
            }), [
            n
        ]);
    }
    function render_U({ ourProps: n, theirProps: r, slot: e, defaultTag: a, features: s, visible: t = !0, name: l, mergeRefs: i }) {
        i = null != i ? i : render_I;
        let o = render_P(r, n);
        if (t) return render_F(o, e, a, l, i);
        let y = null != s ? s : 0;
        if (2 & y) {
            let { static: f = !1, ...u } = o;
            if (f) return render_F(u, e, a, l, i);
        }
        if (1 & y) {
            let { unmount: f = !0, ...u } = o;
            return match_u(f ? 0 : 1, {
                [0] () {
                    return null;
                },
                [1] () {
                    return render_F({
                        ...u,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, e, a, l, i);
                }
            });
        }
        return render_F(o, e, a, l, i);
    }
    function render_F(n, r = {}, e, a, s) {
        let { as: t = e, children: l, refName: i = "ref", ...o } = render_h(n, [
            "unmount",
            "static"
        ]), y = void 0 !== n.ref ? {
            [i]: n.ref
        } : {}, f = "function" == typeof l ? l(r) : l;
        "className" in o && o.className && "function" == typeof o.className && (o.className = o.className(r)), o["aria-labelledby"] && o["aria-labelledby"] === o.id && (o["aria-labelledby"] = void 0);
        let u = {};
        if (r) {
            let d = !1, p = [];
            for (let [c, T] of Object.entries(r))"boolean" == typeof T && (d = !0), !0 === T && p.push(c.replace(/([A-Z])/g, (g)=>`-${g.toLowerCase()}`));
            if (d) {
                u["data-headlessui-state"] = p.join(" ");
                for (let c of p)u[`data-${c}`] = "";
            }
        }
        if (render_b(t) && (Object.keys(render_m(o)).length > 0 || Object.keys(render_m(u)).length > 0)) if (!(0, external_react_.isValidElement)(f) || Array.isArray(f) && f.length > 1 || render_D(f)) {
            if (Object.keys(render_m(o)).length > 0) throw new Error([
                'Passing props on "Fragment"!',
                "",
                `The current component <${a} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(render_m(o)).concat(Object.keys(render_m(u))).map((d)=>`  - ${d}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element."
                ].map((d)=>`  - ${d}`).join(`
`)
            ].join(`
`));
        } else {
            let d = f.props, p = null == d ? void 0 : d.className, c = "function" == typeof p ? (...R)=>class_names_t(p(...R), o.className) : class_names_t(p, o.className), T = c ? {
                className: c
            } : {}, g = render_P(f.props, render_m(render_h(o, [
                "ref"
            ])));
            for(let R in u)R in g && delete u[R];
            return (0, external_react_.cloneElement)(f, Object.assign({}, g, u, y, {
                ref: s(render_H(f), y.ref)
            }, T));
        }
        return (0, external_react_.createElement)(t, Object.assign({}, render_h(o, [
            "ref"
        ]), !render_b(t) && y, !render_b(t) && u), f);
    }
    function render_$() {
        let n = (0, external_react_.useRef)([]), r = (0, external_react_.useCallback)((e)=>{
            for (let a of n.current)null != a && ("function" == typeof a ? a(e) : a.current = e);
        }, []);
        return (...e)=>{
            if (!e.every((a)=>null == a)) return n.current = e, r;
        };
    }
    function render_I(...n) {
        return n.every((r)=>null == r) ? void 0 : (r)=>{
            for (let e of n)null != e && ("function" == typeof e ? e(r) : e.current = r);
        };
    }
    function render_P(...n) {
        if (0 === n.length) return {};
        if (1 === n.length) return n[0];
        let r = {}, e = {};
        for (let s of n)for(let t in s)t.startsWith("on") && "function" == typeof s[t] ? (null != e[t] || (e[t] = []), e[t].push(s[t])) : r[t] = s[t];
        if (r.disabled || r["aria-disabled"]) for(let s in e)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s) && (e[s] = [
            (t)=>{
                var l;
                return null == (l = null == t ? void 0 : t.preventDefault) ? void 0 : l.call(t);
            }
        ]);
        for(let s in e)Object.assign(r, {
            [s] (t, ...l) {
                let i = e[s];
                for (let o of i){
                    if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                    o(t, ...l);
                }
            }
        });
        return r;
    }
    function render_Y(n) {
        var r;
        return Object.assign((0, external_react_.forwardRef)(n), {
            displayName: null != (r = n.displayName) ? r : n.name
        });
    }
    function render_m(n) {
        let r = Object.assign({}, n);
        for(let e in r)void 0 === r[e] && delete r[e];
        return r;
    }
    function render_h(n, r = []) {
        let e = Object.assign({}, n);
        for (let a of r)a in e && delete e[a];
        return e;
    }
    function render_H(n) {
        return external_react_.version.split(".")[0] >= "19" ? n.props.ref : n.ref;
    }
    function render_b(n) {
        return n === external_react_.Fragment || n === Symbol.for("react.fragment");
    }
    function render_D(n) {
        return render_b(n.type);
    }
    let hidden_a = "span";
    var hidden_s = ((e)=>(e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(hidden_s || {});
    function hidden_l(t, r) {
        var n;
        let { features: d = 1, ...e } = t, o = {
            ref: r,
            "aria-hidden": (2 & d) === 2 ? !0 : null != (n = e["aria-hidden"]) ? n : void 0,
            hidden: (4 & d) === 4 ? !0 : void 0,
            style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...(4 & d) === 4 && (2 & d) !== 2 && {
                    display: "none"
                }
            }
        };
        return render_K()({
            ourProps: o,
            theirProps: e,
            slot: {},
            defaultTag: hidden_a,
            name: "Hidden"
        });
    }
    let hidden_f = render_Y(hidden_l);
    function use_root_containers_S({ defaultContainers: l = [], portals: n, mainTreeNode: o } = {}) {
        let c = use_event_o(()=>{
            var r, u;
            let i = owner_l(o), t = [];
            for (let e of l)null !== e && (dom_t(e) ? t.push(e) : "current" in e && dom_t(e.current) && t.push(e.current));
            if (null != n && n.current) for (let e of n.current)t.push(e);
            for (let e of null != (r = null == i ? void 0 : i.querySelectorAll("html > *, body > *")) ? r : [])e !== document.body && e !== document.head && dom_t(e) && "headlessui-portal-root" !== e.id && (o && (e.contains(o) || e.contains(null == (u = null == o ? void 0 : o.getRootNode()) ? void 0 : u.host)) || t.some((E)=>e.contains(E)) || t.push(e));
            return t;
        });
        return {
            resolveContainers: c,
            contains: use_event_o((i)=>c().some((t)=>t.contains(i)))
        };
    }
    let use_root_containers_d = (0, external_react_.createContext)(null);
    function use_root_containers_j({ children: l, node: n }) {
        let [o, c] = (0, external_react_.useState)(null), i = use_root_containers_x(null != n ? n : o);
        return external_react_.createElement(use_root_containers_d.Provider, {
            value: i
        }, l, null === i && external_react_.createElement(hidden_f, {
            features: hidden_s.Hidden,
            ref: (t)=>{
                var r, u;
                if (t) {
                    for (let e of null != (u = null == (r = owner_l(t)) ? void 0 : r.querySelectorAll("html > *, body > *")) ? u : [])if (e !== document.body && e !== document.head && dom_t(e) && null != e && e.contains(t)) {
                        c(e);
                        break;
                    }
                }
            }
        }));
    }
    function use_root_containers_x(l = null) {
        var n;
        return null != (n = (0, external_react_.useContext)(use_root_containers_d)) ? n : l;
    }
    function use_store_o(t) {
        return (0, external_react_.useSyncExternalStore)(t.subscribe, t.getSnapshot, t.getSnapshot);
    }
    function store_a(o, r) {
        let t = o(), n = new Set;
        return {
            getSnapshot () {
                return t;
            },
            subscribe (e) {
                return n.add(e), ()=>n.delete(e);
            },
            dispatch (e, ...s) {
                let i = r[e].call(t, ...s);
                i && (t = i, n.forEach((c)=>c()));
            }
        };
    }
    function adjust_scrollbar_padding_d() {
        let r;
        return {
            before ({ doc: e }) {
                var l;
                let o = e.documentElement, t = null != (l = e.defaultView) ? l : window;
                r = Math.max(0, t.innerWidth - o.clientWidth);
            },
            after ({ doc: e, d: o }) {
                let t = e.documentElement, l = Math.max(0, t.clientWidth - t.offsetWidth), n = Math.max(0, r - l);
                o.style(t, "paddingRight", `${n}px`);
            }
        };
    }
    function handle_ios_locking_w() {
        return platform_t() ? {
            before ({ doc: o, d: r, meta: m }) {
                function a(s) {
                    for (let l of m().containers)for (let c of l())if (c.contains(s)) return !0;
                    return !1;
                }
                r.microTask(()=>{
                    var c;
                    if ("auto" !== window.getComputedStyle(o.documentElement).scrollBehavior) {
                        let t = disposables_o();
                        t.style(o.documentElement, "scrollBehavior", "auto"), r.add(()=>r.microTask(()=>t.dispose()));
                    }
                    let s = null != (c = window.scrollY) ? c : window.pageYOffset, l = null;
                    r.addEventListener(o, "click", (t)=>{
                        if (dom_i(t.target)) try {
                            let e = t.target.closest("a");
                            if (!e) return;
                            let { hash: n } = new URL(e.href), f = o.querySelector(n);
                            dom_i(f) && !a(f) && (l = f);
                        } catch  {}
                    }, !0), r.group((t)=>{
                        r.addEventListener(o, "touchstart", (e)=>{
                            if (t.dispose(), dom_i(e.target) && dom_r(e.target)) if (a(e.target)) {
                                let n = e.target;
                                for(; n.parentElement && a(n.parentElement);)n = n.parentElement;
                                t.style(n, "overscrollBehavior", "contain");
                            } else t.style(e.target, "touchAction", "none");
                        });
                    }), r.addEventListener(o, "touchmove", (t)=>{
                        if (dom_i(t.target)) {
                            if (dom_l(t.target)) return;
                            if (a(t.target)) {
                                let e = t.target;
                                for(; e.parentElement && "" !== e.dataset.headlessuiPortal && !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);)e = e.parentElement;
                                "" === e.dataset.headlessuiPortal && t.preventDefault();
                            } else t.preventDefault();
                        }
                    }, {
                        passive: !1
                    }), r.add(()=>{
                        var e;
                        let t = null != (e = window.scrollY) ? e : window.pageYOffset;
                        s !== t && window.scrollTo(0, s), l && l.isConnected && (l.scrollIntoView({
                            block: "nearest"
                        }), l = null);
                    });
                });
            }
        } : {};
    }
    function prevent_scroll_r() {
        return {
            before ({ doc: e, d: o }) {
                o.style(e.documentElement, "overflow", "hidden");
            }
        };
    }
    function overflow_store_r(e) {
        let o = {};
        for (let t of e)Object.assign(o, t(o));
        return o;
    }
    let overflow_store_c = store_a(()=>new Map, {
        PUSH (e, o) {
            var n;
            let t = null != (n = this.get(e)) ? n : {
                doc: e,
                count: 0,
                d: disposables_o(),
                meta: new Set,
                computedMeta: {}
            };
            return t.count++, t.meta.add(o), t.computedMeta = overflow_store_r(t.meta), this.set(e, t), this;
        },
        POP (e, o) {
            let t = this.get(e);
            return t && (t.count--, t.meta.delete(o), t.computedMeta = overflow_store_r(t.meta)), this;
        },
        SCROLL_PREVENT (e) {
            let o = {
                doc: e.doc,
                d: e.d,
                meta () {
                    return e.computedMeta;
                }
            }, t = [
                handle_ios_locking_w(),
                adjust_scrollbar_padding_d(),
                prevent_scroll_r()
            ];
            t.forEach(({ before: n })=>null == n ? void 0 : n(o)), t.forEach(({ after: n })=>null == n ? void 0 : n(o));
        },
        SCROLL_ALLOW ({ d: e }) {
            e.dispose();
        },
        TEARDOWN ({ doc: e }) {
            this.delete(e);
        }
    });
    overflow_store_c.subscribe(()=>{
        let e = overflow_store_c.getSnapshot(), o = new Map;
        for (let [t] of e)o.set(t, t.documentElement.style.overflow);
        for (let t of e.values()){
            let n = "hidden" === o.get(t.doc), a = 0 !== t.count;
            (a && !n || !a && n) && overflow_store_c.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), 0 === t.count && overflow_store_c.dispatch("TEARDOWN", t);
        }
    });
    function use_document_overflow_a(r, e, n = ()=>({
            containers: []
        })) {
        let f = use_store_o(overflow_store_c), o = e ? f.get(e) : void 0, i = o ? o.count > 0 : !1;
        return use_iso_morphic_effect_n(()=>{
            if (!(!e || !r)) return overflow_store_c.dispatch("PUSH", e, n), ()=>overflow_store_c.dispatch("POP", e, n);
        }, [
            r,
            e
        ]), i;
    }
    function use_scroll_lock_f(e, c, n = ()=>[
            document.body
        ]) {
        let r = use_is_top_layer_I(e, "scroll-lock");
        use_document_overflow_a(r, c, (t)=>{
            var o;
            return {
                containers: [
                    ...null != (o = t.containers) ? o : [],
                    n
                ]
            };
        });
    }
    function use_server_handoff_complete_s() {
        let r = "undefined" == typeof document;
        return "useSyncExternalStore" in external_react_namespaceObject ? ((o)=>o.useSyncExternalStore)(external_react_namespaceObject)(()=>()=>{}, ()=>!1, ()=>!r) : !1;
    }
    function use_server_handoff_complete_l() {
        let r = use_server_handoff_complete_s(), [e, n] = external_react_.useState(env_s.isHandoffComplete);
        return e && !1 === env_s.isHandoffComplete && n(!1), external_react_.useEffect(()=>{
            !0 !== e && n(!0);
        }, [
            e
        ]), external_react_.useEffect(()=>env_s.handoff(), []), r ? !1 : e;
    }
    function use_slot_n(e) {
        return (0, external_react_.useMemo)(()=>e, Object.values(e));
    }
    let use_sync_refs_u = Symbol();
    function use_sync_refs_T(t, n = !0) {
        return Object.assign(t, {
            [use_sync_refs_u]: n
        });
    }
    function use_sync_refs_y(...t) {
        let n = (0, external_react_.useRef)(t);
        (0, external_react_.useEffect)(()=>{
            n.current = t;
        }, [
            t
        ]);
        let c = use_event_o((e)=>{
            for (let o of n.current)null != o && ("function" == typeof o ? o(e) : o.current = e);
        });
        return t.every((e)=>null == e || (null == e ? void 0 : e[use_sync_refs_u])) ? void 0 : c;
    }
    let close_provider_e = (0, external_react_.createContext)(()=>{});
    function close_provider_C({ value: t, children: o }) {
        return external_react_.createElement(close_provider_e.Provider, {
            value: t
        }, o);
    }
    let open_closed_n = (0, external_react_.createContext)(null);
    open_closed_n.displayName = "OpenClosedContext";
    var open_closed_i = ((e)=>(e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(open_closed_i || {});
    function open_closed_u() {
        return (0, external_react_.useContext)(open_closed_n);
    }
    function open_closed_c({ value: o, children: t }) {
        return external_react_.createElement(open_closed_n.Provider, {
            value: o
        }, t);
    }
    function open_closed_s({ children: o }) {
        return external_react_.createElement(open_closed_n.Provider, {
            value: null
        }, o);
    }
    let portal_force_root_e = (0, external_react_.createContext)(!1);
    function portal_force_root_a() {
        return (0, external_react_.useContext)(portal_force_root_e);
    }
    function portal_force_root_l(o) {
        return external_react_.createElement(portal_force_root_e.Provider, {
            value: o.force
        }, o.children);
    }
    let disabled_e = (0, external_react_.createContext)(void 0);
    function disabled_a() {
        return (0, external_react_.useContext)(disabled_e);
    }
    let description_a = (0, external_react_.createContext)(null);
    description_a.displayName = "DescriptionContext";
    function description_f() {
        let r = (0, external_react_.useContext)(description_a);
        if (null === r) {
            let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
            throw Error.captureStackTrace && Error.captureStackTrace(e, description_f), e;
        }
        return r;
    }
    function description_H() {
        let [r, e] = (0, external_react_.useState)([]);
        return [
            r.length > 0 ? r.join(" ") : void 0,
            (0, external_react_.useMemo)(()=>function(t) {
                    let i = use_event_o((n)=>(e((o)=>[
                                ...o,
                                n
                            ]), ()=>e((o)=>{
                                let s = o.slice(), p = s.indexOf(n);
                                return -1 !== p && s.splice(p, 1), s;
                            }))), l = (0, external_react_.useMemo)(()=>({
                            register: i,
                            slot: t.slot,
                            name: t.name,
                            props: t.props,
                            value: t.value
                        }), [
                        i,
                        t.slot,
                        t.name,
                        t.props,
                        t.value
                    ]);
                    return external_react_.createElement(description_a.Provider, {
                        value: l
                    }, t.children);
                }, [
                e
            ])
        ];
    }
    let description_I = "p";
    function description_C(r, e) {
        let c = (0, external_react_.useId)(), t = disabled_a(), { id: i = `headlessui-description-${c}`, ...l } = r, n = description_f(), o = use_sync_refs_y(e);
        use_iso_morphic_effect_n(()=>n.register(i), [
            i,
            n.register
        ]);
        let s = use_slot_n({
            ...n.slot,
            disabled: t || !1
        }), p = {
            ref: o,
            ...n.props,
            id: i
        };
        return render_K()({
            ourProps: p,
            theirProps: l,
            slot: s,
            defaultTag: description_I,
            name: n.name || "Description"
        });
    }
    let description_ = render_Y(description_C), description_M = Object.assign(description_, {});
    function use_disposables_p() {
        let [e] = (0, external_react_.useState)(disposables_o);
        return (0, external_react_.useEffect)(()=>()=>e.dispose(), [
            e
        ]), e;
    }
    function use_is_mounted_f() {
        let e = (0, external_react_.useRef)(!1);
        return use_iso_morphic_effect_n(()=>(e.current = !0, ()=>{
                e.current = !1;
            }), []), e;
    }
    function use_on_unmount_c(t) {
        let r = use_event_o(t), e = (0, external_react_.useRef)(!1);
        (0, external_react_.useEffect)(()=>(e.current = !1, ()=>{
                e.current = !0, micro_task_t(()=>{
                    e.current && r();
                });
            }), [
            r
        ]);
    }
    var use_tab_direction_a = ((r)=>(r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(use_tab_direction_a || {});
    function use_tab_direction_u() {
        let e = (0, external_react_.useRef)(0);
        return use_window_event_s(!0, "keydown", (r)=>{
            "Tab" === r.key && (e.current = r.shiftKey ? 1 : 0);
        }, !0), e;
    }
    function use_watch_m(u, t) {
        let e = (0, external_react_.useRef)([]), r = use_event_o(u);
        (0, external_react_.useEffect)(()=>{
            let o = [
                ...e.current
            ];
            for (let [a, l] of t.entries())if (e.current[a] !== l) {
                let n = r(t, o);
                return e.current = t, n;
            }
        }, [
            r,
            ...t
        ]);
    }
    function document_ready_t(n) {
        function e() {
            "loading" !== document.readyState && (n(), document.removeEventListener("DOMContentLoaded", e));
        }
        "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", e), e());
    }
    let active_element_history_n = [];
    document_ready_t(()=>{
        function e(t) {
            if (!dom_i(t.target) || t.target === document.body || active_element_history_n[0] === t.target) return;
            let r = t.target;
            r = r.closest(focus_management_E), active_element_history_n.unshift(null != r ? r : t.target), active_element_history_n = active_element_history_n.filter((o)=>null != o && o.isConnected), active_element_history_n.splice(10);
        }
        window.addEventListener("click", e, {
            capture: !0
        }), window.addEventListener("mousedown", e, {
            capture: !0
        }), window.addEventListener("focus", e, {
            capture: !0
        }), document.body.addEventListener("click", e, {
            capture: !0
        }), document.body.addEventListener("mousedown", e, {
            capture: !0
        }), document.body.addEventListener("focus", e, {
            capture: !0
        });
    });
    function focus_trap_x(o) {
        if (!o) return new Set;
        if ("function" == typeof o) return new Set(o());
        let t = new Set;
        for (let e of o.current)dom_t(e.current) && t.add(e.current);
        return t;
    }
    let focus_trap_$ = "div";
    var focus_trap_G = ((n)=>(n[n.None = 0] = "None", n[n.InitialFocus = 1] = "InitialFocus", n[n.TabLock = 2] = "TabLock", n[n.FocusLock = 4] = "FocusLock", n[n.RestoreFocus = 8] = "RestoreFocus", n[n.AutoFocus = 16] = "AutoFocus", n))(focus_trap_G || {});
    function focus_trap_w(o, t) {
        let e = (0, external_react_.useRef)(null), r = use_sync_refs_y(e, t), { initialFocus: u, initialFocusFallback: a, containers: n, features: s = 15, ...f } = o;
        use_server_handoff_complete_l() || (s = 0);
        let l = use_owner_u(e.current);
        focus_trap_re(s, {
            ownerDocument: l
        });
        let T = focus_trap_ne(s, {
            ownerDocument: l,
            container: e,
            initialFocus: u,
            initialFocusFallback: a
        });
        focus_trap_oe(s, {
            ownerDocument: l,
            container: e,
            containers: n,
            previousActiveElement: T
        });
        let g = use_tab_direction_u(), A = use_event_o((c)=>{
            if (!dom_n(e.current)) return;
            let E = e.current;
            ((V)=>V())(()=>{
                match_u(g.current, {
                    [use_tab_direction_a.Forwards]: ()=>{
                        focus_management_v(E, focus_management_T.First, {
                            skipElements: [
                                c.relatedTarget,
                                a
                            ]
                        });
                    },
                    [use_tab_direction_a.Backwards]: ()=>{
                        focus_management_v(E, focus_management_T.Last, {
                            skipElements: [
                                c.relatedTarget,
                                a
                            ]
                        });
                    }
                });
            });
        }), v = use_is_top_layer_I(!!(2 & s), "focus-trap#tab-lock"), N = use_disposables_p(), b = (0, external_react_.useRef)(!1), k = {
            ref: r,
            onKeyDown (c) {
                "Tab" == c.key && (b.current = !0, N.requestAnimationFrame(()=>{
                    b.current = !1;
                }));
            },
            onBlur (c) {
                if (!(4 & s)) return;
                let E = focus_trap_x(n);
                dom_n(e.current) && E.add(e.current);
                let L = c.relatedTarget;
                dom_i(L) && "true" !== L.dataset.headlessuiFocusGuard && (focus_trap_I(E, L) || (b.current ? focus_management_v(e.current, match_u(g.current, {
                    [use_tab_direction_a.Forwards]: ()=>focus_management_T.Next,
                    [use_tab_direction_a.Backwards]: ()=>focus_management_T.Previous
                }) | focus_management_T.WrapAround, {
                    relativeTo: c.target
                }) : dom_i(c.target) && w(c.target)));
            }
        }, B = render_K();
        return external_react_.createElement(external_react_.Fragment, null, v && external_react_.createElement(hidden_f, {
            as: "button",
            type: "button",
            "data-headlessui-focus-guard": !0,
            onFocus: A,
            features: hidden_s.Focusable
        }), B({
            ourProps: k,
            theirProps: f,
            defaultTag: focus_trap_$,
            name: "FocusTrap"
        }), v && external_react_.createElement(hidden_f, {
            as: "button",
            type: "button",
            "data-headlessui-focus-guard": !0,
            onFocus: A,
            features: hidden_s.Focusable
        }));
    }
    let focus_trap_ee = render_Y(focus_trap_w), ge = Object.assign(focus_trap_ee, {
        features: focus_trap_G
    });
    function focus_trap_te(o = !0) {
        let t = (0, external_react_.useRef)(active_element_history_n.slice());
        return use_watch_m(([e], [r])=>{
            !0 === r && !1 === e && micro_task_t(()=>{
                t.current.splice(0);
            }), !1 === r && !0 === e && (t.current = active_element_history_n.slice());
        }, [
            o,
            active_element_history_n,
            t
        ]), use_event_o(()=>{
            var e;
            return null != (e = t.current.find((r)=>null != r && r.isConnected)) ? e : null;
        });
    }
    function focus_trap_re(o, { ownerDocument: t }) {
        let e = !!(8 & o), r = focus_trap_te(e);
        use_watch_m(()=>{
            e || owner_d(null == t ? void 0 : t.body) && w(r());
        }, [
            e
        ]), use_on_unmount_c(()=>{
            e && w(r());
        });
    }
    function focus_trap_ne(o, { ownerDocument: t, container: e, initialFocus: r, initialFocusFallback: u }) {
        let a = (0, external_react_.useRef)(null), n = use_is_top_layer_I(!!(1 & o), "focus-trap#initial-focus"), s = use_is_mounted_f();
        return use_watch_m(()=>{
            if (0 === o) return;
            if (!n) {
                null != u && u.current && w(u.current);
                return;
            }
            let f = e.current;
            f && micro_task_t(()=>{
                if (!s.current) return;
                let l = null == t ? void 0 : t.activeElement;
                if (null != r && r.current) {
                    if ((null == r ? void 0 : r.current) === l) {
                        a.current = l;
                        return;
                    }
                } else if (f.contains(l)) {
                    a.current = l;
                    return;
                }
                if (null != r && r.current) w(r.current);
                else {
                    if (16 & o) {
                        if (focus_management_v(f, focus_management_T.First | focus_management_T.AutoFocus) !== focus_management_A.Error) return;
                    } else if (focus_management_v(f, focus_management_T.First) !== focus_management_A.Error) return;
                    if (null != u && u.current && (w(u.current), (null == t ? void 0 : t.activeElement) === u.current)) return;
                    console.warn("There are no focusable elements inside the <FocusTrap />");
                }
                a.current = null == t ? void 0 : t.activeElement;
            });
        }, [
            u,
            n,
            o
        ]), a;
    }
    function focus_trap_oe(o, { ownerDocument: t, container: e, containers: r, previousActiveElement: u }) {
        let a = use_is_mounted_f(), n = !!(4 & o);
        use_event_listener_E(null == t ? void 0 : t.defaultView, "focus", (s)=>{
            if (!n || !a.current) return;
            let f = focus_trap_x(r);
            dom_n(e.current) && f.add(e.current);
            let l = u.current;
            if (!l) return;
            let T = s.target;
            dom_n(T) ? focus_trap_I(f, T) ? (u.current = T, w(T)) : (s.preventDefault(), s.stopPropagation(), w(l)) : w(u.current);
        }, !0);
    }
    function focus_trap_I(o, t) {
        for (let e of o)if (e.contains(t)) return !0;
        return !1;
    }
    const external_react_dom_namespaceObject = require("react-dom");
    function portal_W(e) {
        let o = portal_force_root_a(), l = (0, external_react_.useContext)(portal_c), [r, p] = (0, external_react_.useState)(()=>{
            var s;
            if (!o && null !== l) return null != (s = l.current) ? s : null;
            if (env_s.isServer) return null;
            let t = null == e ? void 0 : e.getElementById("headlessui-portal-root");
            if (t) return t;
            if (null === e) return null;
            let n = e.createElement("div");
            return n.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(n);
        });
        return (0, external_react_.useEffect)(()=>{
            null !== r && (null != e && e.body.contains(r) || null == e || e.body.appendChild(r));
        }, [
            r,
            e
        ]), (0, external_react_.useEffect)(()=>{
            o || null !== l && p(l.current);
        }, [
            l,
            p,
            o
        ]), r;
    }
    let portal_ = external_react_.Fragment, portal_j = render_Y(function(o, l) {
        let { ownerDocument: r = null, ...p } = o, t = (0, external_react_.useRef)(null), n = use_sync_refs_y(use_sync_refs_T((a)=>{
            t.current = a;
        }), l), s = use_owner_u(t.current), C = null != r ? r : s, u = portal_W(C), y = (0, external_react_.useContext)(portal_m), g = use_disposables_p(), v = render_K();
        return use_on_unmount_c(()=>{
            var a;
            u && u.childNodes.length <= 0 && (null == (a = u.parentElement) || a.removeChild(u));
        }), u ? (0, external_react_dom_namespaceObject.createPortal)(external_react_.createElement("div", {
            "data-headlessui-portal": "",
            ref: (a)=>{
                g.dispose(), y && a && g.add(y.register(a));
            }
        }, v({
            ourProps: {
                ref: n
            },
            theirProps: p,
            slot: {},
            defaultTag: portal_,
            name: "Portal"
        })), u) : null;
    });
    function portal_S(e, o) {
        let l = use_sync_refs_y(o), { enabled: r = !0, ownerDocument: p, ...t } = e, n = render_K();
        return r ? external_react_.createElement(portal_j, {
            ...t,
            ownerDocument: p,
            ref: l
        }) : n({
            ourProps: {
                ref: l
            },
            theirProps: t,
            slot: {},
            defaultTag: portal_,
            name: "Portal"
        });
    }
    let portal_I = external_react_.Fragment, portal_c = (0, external_react_.createContext)(null);
    function portal_D(e, o) {
        let { target: l, ...r } = e, t = {
            ref: use_sync_refs_y(o)
        }, n = render_K();
        return external_react_.createElement(portal_c.Provider, {
            value: l
        }, n({
            ourProps: t,
            theirProps: r,
            defaultTag: portal_I,
            name: "Popover.Group"
        }));
    }
    let portal_m = (0, external_react_.createContext)(null);
    function portal_ee() {
        let e = (0, external_react_.useContext)(portal_m), o = (0, external_react_.useRef)([]), l = use_event_o((t)=>(o.current.push(t), e && e.register(t), ()=>r(t))), r = use_event_o((t)=>{
            let n = o.current.indexOf(t);
            -1 !== n && o.current.splice(n, 1), e && e.unregister(t);
        }), p = (0, external_react_.useMemo)(()=>({
                register: l,
                unregister: r,
                portals: o
            }), [
            l,
            r,
            o
        ]);
        return [
            o,
            (0, external_react_.useMemo)(()=>function({ children: n }) {
                    return external_react_.createElement(portal_m.Provider, {
                        value: p
                    }, n);
                }, [
                p
            ])
        ];
    }
    let J = render_Y(portal_S), X = render_Y(portal_D), portal_te = Object.assign(J, {
        Group: X
    });
    function use_flags_c(u = 0) {
        let [r, a] = (0, external_react_.useState)(u), g = (0, external_react_.useCallback)((e)=>a(e), []), s = (0, external_react_.useCallback)((e)=>a((l)=>l | e), []), m = (0, external_react_.useCallback)((e)=>(r & e) === e, [
            r
        ]), n = (0, external_react_.useCallback)((e)=>a((l)=>l & ~e), []), F = (0, external_react_.useCallback)((e)=>a((l)=>l ^ e), []);
        return {
            flags: r,
            setFlag: g,
            addFlag: s,
            hasFlag: m,
            removeFlag: n,
            toggleFlag: F
        };
    }
    var use_transition_T, use_transition_S;
    "undefined" != typeof process && "undefined" != typeof globalThis && "undefined" != typeof Element && (null == (use_transition_T = null == process ? void 0 : process.env) ? void 0 : use_transition_T["NODE_ENV"]) === "test" && void 0 === (null == (use_transition_S = null == Element ? void 0 : Element.prototype) ? void 0 : use_transition_S.getAnimations) && (Element.prototype.getAnimations = function() {
        return console.warn([
            "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
            "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
            "",
            "Example usage:",
            "```js",
            "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
            "mockAnimationsApi()",
            "```"
        ].join(`
`)), [];
    });
    var use_transition_A = ((i)=>(i[i.None = 0] = "None", i[i.Closed = 1] = "Closed", i[i.Enter = 2] = "Enter", i[i.Leave = 4] = "Leave", i))(use_transition_A || {});
    function use_transition_x(e) {
        let r = {};
        for(let t in e)!0 === e[t] && (r[`data-${t}`] = "");
        return r;
    }
    function use_transition_N(e, r, t, n) {
        let [i, a] = (0, external_react_.useState)(t), { hasFlag: s, addFlag: o, removeFlag: l } = use_flags_c(e && i ? 3 : 0), u = (0, external_react_.useRef)(!1), f = (0, external_react_.useRef)(!1), E = use_disposables_p();
        return use_iso_morphic_effect_n(()=>{
            var d;
            if (e) {
                if (t && a(!0), !r) {
                    t && o(3);
                    return;
                }
                return null == (d = null == n ? void 0 : n.start) || d.call(n, t), use_transition_C(r, {
                    inFlight: u,
                    prepare () {
                        f.current ? f.current = !1 : f.current = u.current, u.current = !0, f.current || (t ? (o(3), l(4)) : (o(4), l(2)));
                    },
                    run () {
                        f.current ? t ? (l(3), o(4)) : (l(4), o(3)) : t ? l(1) : o(1);
                    },
                    done () {
                        var p;
                        f.current && use_transition_D(r) || (u.current = !1, l(7), t || a(!1), null == (p = null == n ? void 0 : n.end) || p.call(n, t));
                    }
                });
            }
        }, [
            e,
            t,
            r,
            E
        ]), e ? [
            i,
            {
                closed: s(1),
                enter: s(2),
                leave: s(4),
                transition: s(2) || s(4)
            }
        ] : [
            t,
            {
                closed: void 0,
                enter: void 0,
                leave: void 0,
                transition: void 0
            }
        ];
    }
    function use_transition_C(e, { prepare: r, run: t, done: n, inFlight: i }) {
        let a = disposables_o();
        return use_transition_j(e, {
            prepare: r,
            inFlight: i
        }), a.nextFrame(()=>{
            t(), a.requestAnimationFrame(()=>{
                a.add(use_transition_M(e, n));
            });
        }), a.dispose;
    }
    function use_transition_M(e, r) {
        var a, s;
        let t = disposables_o();
        if (!e) return t.dispose;
        let n = !1;
        t.add(()=>{
            n = !0;
        });
        let i = null != (s = null == (a = e.getAnimations) ? void 0 : a.call(e).filter((o)=>o instanceof CSSTransition)) ? s : [];
        return 0 === i.length ? (r(), t.dispose) : (Promise.allSettled(i.map((o)=>o.finished)).then(()=>{
            n || r();
        }), t.dispose);
    }
    function use_transition_j(e, { inFlight: r, prepare: t }) {
        if (null != r && r.current) return void t();
        let n = e.style.transition;
        e.style.transition = "none", t(), e.offsetHeight, e.style.transition = n;
    }
    function use_transition_D(e) {
        var t, n;
        return (null != (n = null == (t = e.getAnimations) ? void 0 : t.call(e)) ? n : []).some((i)=>i instanceof CSSTransition && "finished" !== i.playState);
    }
    function ue(e) {
        var t;
        return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !render_b(null != (t = e.as) ? t : de) || 1 === external_react_.Children.count(e.children);
    }
    let transition_V = (0, external_react_.createContext)(null);
    transition_V.displayName = "TransitionContext";
    var De = ((n)=>(n.Visible = "visible", n.Hidden = "hidden", n))(De || {});
    function He() {
        let e = (0, external_react_.useContext)(transition_V);
        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
        return e;
    }
    function Ae() {
        let e = (0, external_react_.useContext)(transition_w);
        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
        return e;
    }
    let transition_w = (0, external_react_.createContext)(null);
    transition_w.displayName = "NestingContext";
    function transition_M(e) {
        return "children" in e ? transition_M(e.children) : e.current.filter(({ el: t })=>null !== t.current).filter(({ state: t })=>"visible" === t).length > 0;
    }
    function Te(e, t) {
        let n = use_latest_value_s(e), l = (0, external_react_.useRef)([]), S = use_is_mounted_f(), R = use_disposables_p(), d = use_event_o((o, i = render_C.Hidden)=>{
            let a = l.current.findIndex(({ el: s })=>s === o);
            -1 !== a && (match_u(i, {
                [render_C.Unmount] () {
                    l.current.splice(a, 1);
                },
                [render_C.Hidden] () {
                    l.current[a].state = "hidden";
                }
            }), R.microTask(()=>{
                var s;
                !transition_M(l) && S.current && (null == (s = n.current) || s.call(n));
            }));
        }), y = use_event_o((o)=>{
            let i = l.current.find(({ el: a })=>a === o);
            return i ? "visible" !== i.state && (i.state = "visible") : l.current.push({
                el: o,
                state: "visible"
            }), ()=>d(o, render_C.Unmount);
        }), C = (0, external_react_.useRef)([]), p = (0, external_react_.useRef)(Promise.resolve()), h = (0, external_react_.useRef)({
            enter: [],
            leave: []
        }), g = use_event_o((o, i, a)=>{
            C.current.splice(0), t && (t.chains.current[i] = t.chains.current[i].filter(([s])=>s !== o)), null == t || t.chains.current[i].push([
                o,
                new Promise((s)=>{
                    C.current.push(s);
                })
            ]), null == t || t.chains.current[i].push([
                o,
                new Promise((s)=>{
                    Promise.all(h.current[i].map(([r, f])=>f)).then(()=>s());
                })
            ]), "enter" === i ? p.current = p.current.then(()=>null == t ? void 0 : t.wait.current).then(()=>a(i)) : a(i);
        }), v = use_event_o((o, i, a)=>{
            Promise.all(h.current[i].splice(0).map(([s, r])=>r)).then(()=>{
                var s;
                null == (s = C.current.shift()) || s();
            }).then(()=>a(i));
        });
        return (0, external_react_.useMemo)(()=>({
                children: l,
                register: y,
                unregister: d,
                onStart: g,
                onStop: v,
                wait: p,
                chains: h
            }), [
            y,
            d,
            l,
            g,
            v,
            h,
            p
        ]);
    }
    let de = external_react_.Fragment, fe = render_A.RenderStrategy;
    function Fe(e, t) {
        var ee, te;
        let { transition: n = !0, beforeEnter: l, afterEnter: S, beforeLeave: R, afterLeave: d, enter: y, enterFrom: C, enterTo: p, entered: h, leave: g, leaveFrom: v, leaveTo: o, ...i } = e, [a, s] = (0, external_react_.useState)(null), r = (0, external_react_.useRef)(null), f = ue(e), U = use_sync_refs_y(...f ? [
            r,
            t,
            s
        ] : null === t ? [] : [
            t
        ]), H = null == (ee = i.unmount) || ee ? render_C.Unmount : render_C.Hidden, { show: u, appear: z, initial: K } = He(), [m, j] = (0, external_react_.useState)(u ? "visible" : "hidden"), Q = Ae(), { register: A, unregister: F } = Q;
        use_iso_morphic_effect_n(()=>A(r), [
            A,
            r
        ]), use_iso_morphic_effect_n(()=>{
            if (H === render_C.Hidden && r.current) {
                if (u && "visible" !== m) return void j("visible");
                return match_u(m, {
                    ["hidden"]: ()=>F(r),
                    ["visible"]: ()=>A(r)
                });
            }
        }, [
            m,
            r,
            A,
            F,
            u,
            H
        ]);
        let G = use_server_handoff_complete_l();
        use_iso_morphic_effect_n(()=>{
            if (f && G && "visible" === m && null === r.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
        }, [
            r,
            m,
            G,
            f
        ]);
        let ce = K && !z, Y = z && u && K, B = (0, external_react_.useRef)(!1), I = Te(()=>{
            B.current || (j("hidden"), F(r));
        }, Q), Z = use_event_o((W)=>{
            B.current = !0;
            let L = W ? "enter" : "leave";
            I.onStart(r, L, (_)=>{
                "enter" === _ ? null == l || l() : "leave" === _ && (null == R || R());
            });
        }), $ = use_event_o((W)=>{
            let L = W ? "enter" : "leave";
            B.current = !1, I.onStop(r, L, (_)=>{
                "enter" === _ ? null == S || S() : "leave" === _ && (null == d || d());
            }), "leave" !== L || transition_M(I) || (j("hidden"), F(r));
        });
        (0, external_react_.useEffect)(()=>{
            f && n || (Z(u), $(u));
        }, [
            u,
            f,
            n
        ]);
        let pe = (()=>!(!n || !f || !G || ce))(), [, T] = use_transition_N(pe, a, u, {
            start: Z,
            end: $
        }), Ce = render_m({
            ref: U,
            className: (null == (te = class_names_t(i.className, Y && y, Y && C, T.enter && y, T.enter && T.closed && C, T.enter && !T.closed && p, T.leave && g, T.leave && !T.closed && v, T.leave && T.closed && o, !T.transition && u && h)) ? void 0 : te.trim()) || void 0,
            ...use_transition_x(T)
        }), N = 0;
        "visible" === m && (N |= open_closed_i.Open), "hidden" === m && (N |= open_closed_i.Closed), u && "hidden" === m && (N |= open_closed_i.Opening), u || "visible" !== m || (N |= open_closed_i.Closing);
        let he = render_K();
        return external_react_.createElement(transition_w.Provider, {
            value: I
        }, external_react_.createElement(open_closed_c, {
            value: N
        }, he({
            ourProps: Ce,
            theirProps: i,
            defaultTag: de,
            features: fe,
            visible: "visible" === m,
            name: "Transition.Child"
        })));
    }
    function Ie(e, t) {
        let { show: n, appear: l = !1, unmount: S = !0, ...R } = e, d = (0, external_react_.useRef)(null), y = ue(e), C = use_sync_refs_y(...y ? [
            d,
            t
        ] : null === t ? [] : [
            t
        ]);
        use_server_handoff_complete_l();
        let p = open_closed_u();
        if (void 0 === n && null !== p && (n = (p & open_closed_i.Open) === open_closed_i.Open), void 0 === n) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
        let [h, g] = (0, external_react_.useState)(n ? "visible" : "hidden"), v = Te(()=>{
            n || g("hidden");
        }), [o, i] = (0, external_react_.useState)(!0), a = (0, external_react_.useRef)([
            n
        ]);
        use_iso_morphic_effect_n(()=>{
            !1 !== o && a.current[a.current.length - 1] !== n && (a.current.push(n), i(!1));
        }, [
            a,
            n
        ]);
        let s = (0, external_react_.useMemo)(()=>({
                show: n,
                appear: l,
                initial: o
            }), [
            n,
            l,
            o
        ]);
        use_iso_morphic_effect_n(()=>{
            n ? g("visible") : transition_M(v) || null === d.current || g("hidden");
        }, [
            n,
            v
        ]);
        let r = {
            unmount: S
        }, f = use_event_o(()=>{
            var u;
            o && i(!1), null == (u = e.beforeEnter) || u.call(e);
        }), U = use_event_o(()=>{
            var u;
            o && i(!1), null == (u = e.beforeLeave) || u.call(e);
        }), H = render_K();
        return external_react_.createElement(transition_w.Provider, {
            value: v
        }, external_react_.createElement(transition_V.Provider, {
            value: s
        }, H({
            ourProps: {
                ...r,
                as: external_react_.Fragment,
                children: external_react_.createElement(me, {
                    ref: C,
                    ...r,
                    ...R,
                    beforeEnter: f,
                    beforeLeave: U
                })
            },
            theirProps: {},
            defaultTag: external_react_.Fragment,
            features: fe,
            visible: "visible" === h,
            name: "Transition"
        })));
    }
    function Le(e, t) {
        let n = null !== (0, external_react_.useContext)(transition_V), l = null !== open_closed_u();
        return external_react_.createElement(external_react_.Fragment, null, !n && l ? external_react_.createElement(transition_X, {
            ref: t,
            ...e
        }) : external_react_.createElement(me, {
            ref: t,
            ...e
        }));
    }
    let transition_X = render_Y(Ie), me = render_Y(Fe), Oe = render_Y(Le), Ke = Object.assign(transition_X, {
        Child: Oe,
        Root: transition_X
    });
    var we = ((o)=>(o[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o))(we || {}), Be = ((t)=>(t[t.SetTitleId = 0] = "SetTitleId", t))(Be || {});
    let Ue = {
        [0] (e, t) {
            return e.titleId === t.id ? e : {
                ...e,
                titleId: t.id
            };
        }
    }, dialog_w = (0, external_react_.createContext)(null);
    dialog_w.displayName = "DialogContext";
    function dialog_O(e) {
        let t = (0, external_react_.useContext)(dialog_w);
        if (null === t) {
            let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(o, dialog_O), o;
        }
        return t;
    }
    function dialog_He(e, t) {
        return match_u(t.type, Ue, e, t);
    }
    let dialog_z = render_Y(function(t, o) {
        let a = (0, external_react_.useId)(), { id: n = `headlessui-dialog-${a}`, open: i, onClose: p, initialFocus: d, role: s = "dialog", autoFocus: f = !0, __demoMode: u = !1, unmount: y = !1, ...S } = t, R = (0, external_react_.useRef)(!1);
        s = function() {
            return "dialog" === s || "alertdialog" === s ? s : (R.current || (R.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
        }();
        let g = open_closed_u();
        void 0 === i && null !== g && (i = (g & open_closed_i.Open) === open_closed_i.Open);
        let T = (0, external_react_.useRef)(null), I = use_sync_refs_y(T, o), F = use_owner_u(T.current), c = i ? 0 : 1, [b, Q] = (0, external_react_.useReducer)(dialog_He, {
            titleId: null,
            descriptionId: null,
            panelRef: (0, external_react_.createRef)()
        }), m = use_event_o(()=>p(!1)), B = use_event_o((r)=>Q({
                type: 0,
                id: r
            })), D = use_server_handoff_complete_l() ? 0 === c : !1, [Z, ee] = portal_ee(), te = {
            get current () {
                var r;
                return null != (r = b.panelRef.current) ? r : T.current;
            }
        }, v = use_root_containers_x(), { resolveContainers: M } = use_root_containers_S({
            mainTreeNode: v,
            portals: Z,
            defaultContainers: [
                te
            ]
        }), U = null !== g ? (g & open_closed_i.Closing) === open_closed_i.Closing : !1;
        use_inert_others_y(u || U ? !1 : D, {
            allowed: use_event_o(()=>{
                var r, W;
                return [
                    null != (W = null == (r = T.current) ? void 0 : r.closest("[data-headlessui-portal]")) ? W : null
                ];
            }),
            disallowed: use_event_o(()=>{
                var r;
                return [
                    null != (r = null == v ? void 0 : v.closest("body > *:not(#headlessui-portal-root)")) ? r : null
                ];
            })
        });
        let P = x.get(null);
        use_iso_morphic_effect_n(()=>{
            if (D) return P.actions.push(n), ()=>P.actions.pop(n);
        }, [
            P,
            n,
            D
        ]);
        let H = react_glue_S(P, (0, external_react_.useCallback)((r)=>P.selectors.isTop(r, n), [
            P,
            n
        ]));
        use_outside_click_k(H, M, (r)=>{
            r.preventDefault(), m();
        }), use_escape_a(H, null == F ? void 0 : F.defaultView, (r)=>{
            r.preventDefault(), r.stopPropagation(), document.activeElement && "blur" in document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur(), m();
        }), use_scroll_lock_f(u || U ? !1 : D, F, M), use_on_disappear_p(D, T, m);
        let [oe, ne] = description_H(), re = (0, external_react_.useMemo)(()=>[
                {
                    dialogState: c,
                    close: m,
                    setTitleId: B,
                    unmount: y
                },
                b
            ], [
            c,
            m,
            B,
            y,
            b
        ]), N = use_slot_n({
            open: 0 === c
        }), le = {
            ref: I,
            id: n,
            role: s,
            tabIndex: -1,
            "aria-modal": u ? void 0 : 0 === c ? !0 : void 0,
            "aria-labelledby": b.titleId,
            "aria-describedby": oe,
            unmount: y
        }, ae = !use_is_touch_device_f(), E = focus_trap_G.None;
        D && !u && (E |= focus_trap_G.RestoreFocus, E |= focus_trap_G.TabLock, f && (E |= focus_trap_G.AutoFocus), ae && (E |= focus_trap_G.InitialFocus));
        let ie = render_K();
        return external_react_.createElement(open_closed_s, null, external_react_.createElement(portal_force_root_l, {
            force: !0
        }, external_react_.createElement(portal_te, null, external_react_.createElement(dialog_w.Provider, {
            value: re
        }, external_react_.createElement(X, {
            target: T
        }, external_react_.createElement(portal_force_root_l, {
            force: !1
        }, external_react_.createElement(ne, {
            slot: N
        }, external_react_.createElement(ee, null, external_react_.createElement(ge, {
            initialFocus: d,
            initialFocusFallback: T,
            containers: M,
            features: E
        }, external_react_.createElement(close_provider_C, {
            value: m
        }, ie({
            ourProps: le,
            theirProps: S,
            slot: N,
            defaultTag: Ne,
            features: We,
            visible: 0 === c,
            name: "Dialog"
        })))))))))));
    }), Ne = "div", We = render_A.RenderStrategy | render_A.Static;
    function $e(e, t) {
        let { transition: o = !1, open: a, ...n } = e, i = open_closed_u(), p = e.hasOwnProperty("open") || null !== i, d = e.hasOwnProperty("onClose");
        if (!p && !d) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
        if (!p) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
        if (!d) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
        if (!i && "boolean" != typeof e.open) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
        if ("function" != typeof e.onClose) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
        return (void 0 !== a || o) && !n.static ? external_react_.createElement(use_root_containers_j, null, external_react_.createElement(Ke, {
            show: a,
            transition: o,
            unmount: n.unmount
        }, external_react_.createElement(dialog_z, {
            ref: t,
            ...n
        }))) : external_react_.createElement(use_root_containers_j, null, external_react_.createElement(dialog_z, {
            ref: t,
            open: a,
            ...n
        }));
    }
    let je = "div";
    function Ye(e, t) {
        let o = (0, external_react_.useId)(), { id: a = `headlessui-dialog-panel-${o}`, transition: n = !1, ...i } = e, [{ dialogState: p, unmount: d }, s] = dialog_O("Dialog.Panel"), f = use_sync_refs_y(t, s.panelRef), u = use_slot_n({
            open: 0 === p
        }), y = use_event_o((I)=>{
            I.stopPropagation();
        }), S = {
            ref: f,
            id: a,
            onClick: y
        }, R = n ? Oe : external_react_.Fragment, g = n ? {
            unmount: d
        } : {}, T = render_K();
        return external_react_.createElement(R, {
            ...g
        }, T({
            ourProps: S,
            theirProps: i,
            slot: u,
            defaultTag: je,
            name: "Dialog.Panel"
        }));
    }
    let Je = "div";
    function dialog_Ke(e, t) {
        let { transition: o = !1, ...a } = e, [{ dialogState: n, unmount: i }] = dialog_O("Dialog.Backdrop"), p = use_slot_n({
            open: 0 === n
        }), d = {
            ref: t,
            "aria-hidden": !0
        }, s = o ? Oe : external_react_.Fragment, f = o ? {
            unmount: i
        } : {}, u = render_K();
        return external_react_.createElement(s, {
            ...f
        }, u({
            ourProps: d,
            theirProps: a,
            slot: p,
            defaultTag: Je,
            name: "Dialog.Backdrop"
        }));
    }
    let Xe = "h2";
    function Ve(e, t) {
        let o = (0, external_react_.useId)(), { id: a = `headlessui-dialog-title-${o}`, ...n } = e, [{ dialogState: i, setTitleId: p }] = dialog_O("Dialog.Title"), d = use_sync_refs_y(t);
        (0, external_react_.useEffect)(()=>(p(a), ()=>p(null)), [
            a,
            p
        ]);
        let s = use_slot_n({
            open: 0 === i
        }), f = {
            ref: d,
            id: a
        };
        return render_K()({
            ourProps: f,
            theirProps: n,
            slot: s,
            defaultTag: Xe,
            name: "Dialog.Title"
        });
    }
    let qe = render_Y($e), ze = render_Y(Ye), Lt = render_Y(dialog_Ke), Qe = render_Y(Ve), ht = Object.assign(qe, {
        Panel: ze,
        Title: Qe,
        Description: description_M
    });
    function XMarkIcon({ title, titleId, ...props }, svgRef) {
        return /*#__PURE__*/ external_react_.createElement("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: svgRef,
            "aria-labelledby": titleId
        }, props), title ? /*#__PURE__*/ external_react_.createElement("title", {
            id: titleId
        }, title) : null, /*#__PURE__*/ external_react_.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12"
        }));
    }
    const ForwardRef = /*#__PURE__*/ external_react_.forwardRef(XMarkIcon);
    const esm_XMarkIcon = ForwardRef;
    function StarIcon({ title, titleId, ...props }, svgRef) {
        return /*#__PURE__*/ external_react_.createElement("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: svgRef,
            "aria-labelledby": titleId
        }, props), title ? /*#__PURE__*/ external_react_.createElement("title", {
            id: titleId
        }, title) : null, /*#__PURE__*/ external_react_.createElement("path", {
            fillRule: "evenodd",
            d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z",
            clipRule: "evenodd"
        }));
    }
    const StarIcon_ForwardRef = /*#__PURE__*/ external_react_.forwardRef(StarIcon);
    const esm_StarIcon = StarIcon_ForwardRef;
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    function ProdductQuickViews({ product, open, onClose, onAddToCart }) {
        return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
            children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)(ht, {
                open: open,
                onClose: onClose,
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(Lt, {
                        transition: true,
                        className: "fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                        className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                            className: "flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",
                            children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ze, {
                                transition: true,
                                className: "flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl",
                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                    className: "relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("button", {
                                            type: "button",
                                            onClick: ()=>onClose(),
                                            className: "absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",
                                            children: [
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(esm_XMarkIcon, {
                                                    "aria-hidden": "true",
                                                    className: "size-6"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                            className: "grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",
                                            children: [
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("img", {
                                                    src: product.img,
                                                    className: "aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                                                }),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                    className: "sm:col-span-8 lg:col-span-7 h-full flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h2", {
                                                            className: "text-2xl font-bold text-gray-900 sm:pr-12",
                                                            children: product.name
                                                        }),
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("section", {
                                                            "aria-labelledby": "information-heading",
                                                            className: "mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                                                    id: "information-heading",
                                                                    className: "sr-only",
                                                                    children: "Product information"
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                    className: "text-2xl text-gray-900",
                                                                    children: product.price
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "mt-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h4", {
                                                                            className: "sr-only",
                                                                            children: "Reviews"
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                            className: "flex items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                                    className: "flex items-center",
                                                                                    children: [
                                                                                        0,
                                                                                        1,
                                                                                        2,
                                                                                        3,
                                                                                        4
                                                                                    ].map((rating)=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(esm_StarIcon, {
                                                                                            "aria-hidden": "true",
                                                                                            className: classNames(product.rating > rating ? 'text-gray-900' : 'text-gray-200', 'size-5 shrink-0')
                                                                                        }, rating))
                                                                                }),
                                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("p", {
                                                                                    className: "sr-only",
                                                                                    children: [
                                                                                        product.rating,
                                                                                        " out of 5 stars"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("a", {
                                                                                    href: "#",
                                                                                    className: "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500",
                                                                                    children: [
                                                                                        product.reviewsCount,
                                                                                        " reviews"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("section", {
                                                            "aria-labelledby": "options-heading",
                                                            className: "mt-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                                                    id: "options-heading",
                                                                    className: "sr-only",
                                                                    children: "Product options"
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("fieldset", {
                                                                            "aria-label": "Choose a color",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("legend", {
                                                                                    className: "text-sm font-medium text-gray-900",
                                                                                    children: "Color"
                                                                                }),
                                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                                    className: "mt-4 flex items-center gap-x-3",
                                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                                        className: "flex rounded-full outline -outline-offset-1 outline-black/10",
                                                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                                            name: "color",
                                                                                            type: "radio",
                                                                                            className: classNames(product.color, 'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3')
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("button", {
                                                                            className: "mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",
                                                                            onClick: ()=>onAddToCart(product),
                                                                            children: "Add to bag"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
    function MagnifyingGlassIcon({ title, titleId, ...props }, svgRef) {
        return /*#__PURE__*/ external_react_.createElement("svg", Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: svgRef,
            "aria-labelledby": titleId
        }, props), title ? /*#__PURE__*/ external_react_.createElement("title", {
            id: titleId
        }, title) : null, /*#__PURE__*/ external_react_.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        }));
    }
    const MagnifyingGlassIcon_ForwardRef = /*#__PURE__*/ external_react_.forwardRef(MagnifyingGlassIcon);
    const esm_MagnifyingGlassIcon = MagnifyingGlassIcon_ForwardRef;
    function TopBar({ onSearchTermChange }) {
        return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
            className: "bg-white",
            children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                className: "ml-auto flex justify-center",
                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600",
                            children: [
                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                    className: "shrink-0 text-base text-gray-500 select-none sm:text-sm/6",
                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(esm_MagnifyingGlassIcon, {
                                        "aria-hidden": "true",
                                        className: "size-4 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    })
                                }),
                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                    id: "price",
                                    name: "price",
                                    type: "text",
                                    placeholder: "Search",
                                    className: "block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6",
                                    onChange: onSearchTermChange
                                })
                            ]
                        })
                    })
                })
            })
        });
    }
    function debounce(fn, delay) {
        let timeout;
        return (...args)=>{
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                fn(...args);
            }, delay);
        };
    }
    const utils_debounce = debounce;
    const ProductSkeleton = ()=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
            className: "group relative animate-pulse",
            children: [
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                    className: "aspect-square w-full rounded-md bg-gray-200 lg:h-80"
                }),
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                    className: "mt-4 flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                    className: "w-20 h-4 rounded bg-gray-200"
                                }),
                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                    className: "mt-1 w-15 h-2 rounded bg-gray-200"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                            className: "w-10 h-4 rounded bg-gray-200"
                        })
                    ]
                })
            ]
        });
    const ProductList = ({ onAddToCart })=>{
        const [openQuickView, setOpenQuickView] = (0, external_react_.useState)(false);
        const [trendingProducts, setTrendingProducts] = (0, external_react_.useState)([]);
        const [bestSellersProducts, setBestSellersProducts] = (0, external_react_.useState)([]);
        const [clickedProduct, setClickedProduct] = (0, external_react_.useState)();
        const [searchTerm, setSearchTerm] = (0, external_react_.useState)("");
        const [showSearchedResults, setShowSearchedResults] = (0, external_react_.useState)(false);
        const [searchResults, setSearchResults] = (0, external_react_.useState)([]);
        const [searchLoading, setSearchLoading] = (0, external_react_.useState)(false);
        const [trendingLoading, setTrendingLoading] = (0, external_react_.useState)(false);
        const [bestSellersLoading, setBestSellersLoading] = (0, external_react_.useState)(false);
        (0, external_react_.useEffect)(()=>{
            if ("" !== searchTerm) {
                debouncedSearch(searchTerm);
                setShowSearchedResults(true);
            } else {
                setShowSearchedResults(false);
                setSearchResults([]);
            }
        }, [
            searchTerm
        ]);
        const debouncedSearch = (0, external_react_.useMemo)(()=>{
            setSearchLoading(true);
            return utils_debounce((searchBy)=>{
                fetch(`/api/products?searchBy=${searchBy}`).then((res)=>res.json()).then((json)=>{
                    setSearchResults(json.products);
                }).catch((err)=>{
                    console.log("Something is wrong!!");
                    console.log(err);
                }).finally(()=>{
                    setSearchLoading(false);
                });
            }, 1000);
        }, []);
        const onProductClick = (id)=>{
            setOpenQuickView(true);
            setClickedProduct(()=>[
                    ...trendingProducts,
                    ...bestSellersProducts
                ].find((p)=>p.id === id));
        };
        (0, external_react_.useEffect)(()=>{
            setTrendingLoading(true);
            setBestSellersLoading(true);
            fetch("/api/products/trending").then((res)=>res.json()).then((json)=>{
                setTrendingProducts(json.products);
            }).catch((err)=>{
                console.log("Something is wrong!!");
                console.log(err);
            }).finally(()=>{
                setTrendingLoading(false);
            });
            fetch("/api/products/best_sellers").then((res)=>res.json()).then((json)=>{
                setBestSellersProducts(json.products);
            }).catch((err)=>{
                console.log("Something is wrong!!");
                console.log(err);
            }).finally(()=>{
                setBestSellersLoading(false);
            });
        }, []);
        const handleAddToCart = (p)=>{
            setOpenQuickView(false);
            onAddToCart(p);
        };
        return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
            className: "container m-auto",
            children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                className: "bg-white",
                children: [
                    void 0 !== clickedProduct && /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProdductQuickViews, {
                        onAddToCart: handleAddToCart,
                        product: clickedProduct,
                        open: openQuickView,
                        onClose: ()=>setOpenQuickView(false)
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(TopBar, {
                        onSearchTermChange: (e)=>setSearchTerm(e?.target.value)
                    }),
                    showSearchedResults ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                            className: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h2", {
                                    className: "text-2xl font-bold tracking-tight text-gray-900",
                                    children: "Search Results"
                                }),
                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                    className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                                    children: searchLoading ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {})
                                        ]
                                    }) : searchResults.map((product)=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                            className: "group relative cursor-pointer",
                                            onClick: ()=>onProductClick(product.id),
                                            children: [
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("img", {
                                                    src: product.img,
                                                    alt: "Front of men's Basic Tee in black.",
                                                    className: "aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                                }),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                    className: "mt-4 flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("h3", {
                                                                    className: "text-sm text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                                                            "aria-hidden": "true",
                                                                            className: "absolute inset-0"
                                                                        }),
                                                                        product.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                    className: "mt-1 text-sm text-gray-500",
                                                                    children: product.color
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: product.price
                                                        })
                                                    ]
                                                })
                                            ]
                                        }))
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
                                children: [
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h2", {
                                        className: "text-2xl font-bold tracking-tight text-gray-900",
                                        children: "Trending Products"
                                    }),
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                        className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                                        children: trendingLoading ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {})
                                            ]
                                        }) : trendingProducts.map((product)=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                className: "group relative cursor-pointer",
                                                onClick: ()=>onProductClick(product.id),
                                                children: [
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("img", {
                                                        src: product.img,
                                                        alt: "Front of men's Basic Tee in black.",
                                                        className: "aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        className: "mt-4 flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("h3", {
                                                                        className: "text-sm text-gray-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                                                                "aria-hidden": "true",
                                                                                className: "absolute inset-0"
                                                                            }),
                                                                            product.name
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                        className: "mt-1 text-sm text-gray-500",
                                                                        children: product.color
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                className: "text-sm font-medium text-gray-900",
                                                                children: product.price
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
                                children: [
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h2", {
                                        className: "text-2xl font-bold tracking-tight text-gray-900",
                                        children: "Best Sellers"
                                    }),
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                        className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",
                                        children: bestSellersLoading ? /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {}),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(ProductSkeleton, {})
                                            ]
                                        }) : bestSellersProducts.map((product)=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                className: "group relative cursor-pointer",
                                                onClick: ()=>onProductClick(product.id),
                                                children: [
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("img", {
                                                        src: product.img,
                                                        alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
                                                        className: "aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                                        className: "mt-4 text-sm text-gray-700",
                                                        children: product.name
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                        className: "mt-1 text-lg font-medium text-gray-900",
                                                        children: product.price
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
    const components_ProductList = ProductList;
})();
exports.Product = __webpack_exports__.Product;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "Product"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
