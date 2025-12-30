"use strict";
var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    Header: ()=>Header
});
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
const external_react_namespaceObject = require("react");
function ShoppingBagIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ external_react_namespaceObject.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ external_react_namespaceObject.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    }));
}
const ForwardRef = /*#__PURE__*/ external_react_namespaceObject.forwardRef(ShoppingBagIcon);
const esm_ShoppingBagIcon = ForwardRef;
function Header({ onCartClick }) {
    return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("header", {
            className: "relative bg-white",
            children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("nav", {
                "aria-label": "Top",
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                    className: "border-b border-gray-200",
                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "flex h-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                className: "ml-4 flex lg:ml-0",
                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("a", {
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                            className: "sr-only",
                                            children: "alleskaufen"
                                        }),
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("img", {
                                            alt: "",
                                            src: "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
                                            className: "h-8 w-auto"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                className: "ml-auto flow-root",
                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("button", {
                                    className: "group -m-2 flex items-center p-2",
                                    onClick: onCartClick,
                                    children: [
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)(esm_ShoppingBagIcon, {
                                            "aria-hidden": "true",
                                            className: "size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        }),
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                            className: "ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",
                                            children: "0"
                                        }),
                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("span", {
                                            className: "sr-only",
                                            children: "items in cart, view bag"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
exports.Header = __webpack_exports__.Header;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "Header"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
