var __webpack_modules__ = {
    "./src/components/ProviderComponent.css": function() {}
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
        Checkout: ()=>components_Checkout
    });
    const jsx_runtime_namespaceObject = require("react/jsx-runtime");
    const external_react_namespaceObject = require("react");
    __webpack_require__("./src/components/ProviderComponent.css");
    const Checkout = ({ onPlaceOrder, products })=>{
        const [selectedPaymentType, setSelectedPaymentType] = (0, external_react_namespaceObject.useState)(0);
        const [selectedDeliveryMethod, setSelectedDeliveryMethod] = (0, external_react_namespaceObject.useState)(0);
        const subTotal = (0, external_react_namespaceObject.useMemo)(()=>products.reduce((acc, next)=>acc + next.price, 0), [
            products
        ]);
        const deliveryCharge = (0, external_react_namespaceObject.useMemo)(()=>4.99, []);
        const total = (0, external_react_namespaceObject.useMemo)(()=>subTotal + deliveryCharge, [
            subTotal,
            deliveryCharge
        ]);
        return /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("section", {
                className: "bg-white py-8 antialiased dark:bg-gray-900 md:py-16",
                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("form", {
                    action: "#",
                    className: "mx-auto max-w-screen-xl px-4 2xl:px-0",
                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                        className: "mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16",
                        children: [
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "min-w-0 flex-1 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h2", {
                                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                children: "Delivery Details"
                                            }),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                htmlFor: "your_name",
                                                                className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
                                                                children: [
                                                                    " ",
                                                                    "Your name",
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                type: "text",
                                                                id: "your_name",
                                                                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                                                                placeholder: "Bonnie Green",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                htmlFor: "your_email",
                                                                className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
                                                                children: [
                                                                    " ",
                                                                    "Your email*",
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                type: "email",
                                                                id: "your_email",
                                                                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                                                                placeholder: "name@flowbite.com",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                htmlFor: "phone-input-3",
                                                                className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
                                                                children: [
                                                                    " ",
                                                                    "Phone Number*",
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("button", {
                                                                        id: "dropdown-phone-button-3",
                                                                        "data-dropdown-toggle": "dropdown-phone-3",
                                                                        className: "z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700",
                                                                        type: "button",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("svg", {
                                                                                className: "me-2 h-4 w-4",
                                                                                fill: "none",
                                                                                viewBox: "0 0 20 15",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("rect", {
                                                                                        width: "19.6",
                                                                                        height: "14",
                                                                                        y: ".5",
                                                                                        fill: "#fff",
                                                                                        rx: "2"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("mask", {
                                                                                        id: "a",
                                                                                        style: {
                                                                                            maskType: "luminance"
                                                                                        },
                                                                                        width: "20",
                                                                                        height: "15",
                                                                                        x: "0",
                                                                                        y: "0",
                                                                                        maskUnits: "userSpaceOnUse",
                                                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("rect", {
                                                                                            width: "19.6",
                                                                                            height: "14",
                                                                                            y: ".5",
                                                                                            fill: "#fff",
                                                                                            rx: "2"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("g", {
                                                                                        mask: "url(#a)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("path", {
                                                                                                fill: "#262626",
                                                                                                "fill-rule": "evenodd",
                                                                                                d: "M0 5.167h19.6V.5H0v4.667z",
                                                                                                "clip-rule": "evenodd"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("g", {
                                                                                                filter: "url(#filter0_d_374_135180)",
                                                                                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("path", {
                                                                                                    fill: "#F01515",
                                                                                                    "fill-rule": "evenodd",
                                                                                                    d: "M0 9.833h19.6V5.167H0v4.666z",
                                                                                                    "clip-rule": "evenodd"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("g", {
                                                                                                filter: "url(#filter1_d_374_135180)",
                                                                                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("path", {
                                                                                                    fill: "#FFD521",
                                                                                                    "fill-rule": "evenodd",
                                                                                                    d: "M0 14.5h19.6V9.833H0V14.5z",
                                                                                                    "clip-rule": "evenodd"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("defs", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("filter", {
                                                                                                id: "filter0_d_374_135180",
                                                                                                width: "19.6",
                                                                                                height: "4.667",
                                                                                                x: "0",
                                                                                                y: "5.167",
                                                                                                "color-interpolation-filters": "sRGB",
                                                                                                filterUnits: "userSpaceOnUse",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feFlood", {
                                                                                                        "flood-opacity": "0",
                                                                                                        result: "BackgroundImageFix"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feColorMatrix", {
                                                                                                        in: "SourceAlpha",
                                                                                                        result: "hardAlpha",
                                                                                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feOffset", {}),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feColorMatrix", {
                                                                                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feBlend", {
                                                                                                        in2: "BackgroundImageFix",
                                                                                                        result: "effect1_dropShadow_374_135180"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feBlend", {
                                                                                                        in: "SourceGraphic",
                                                                                                        in2: "effect1_dropShadow_374_135180",
                                                                                                        result: "shape"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("filter", {
                                                                                                id: "filter1_d_374_135180",
                                                                                                width: "19.6",
                                                                                                height: "4.667",
                                                                                                x: "0",
                                                                                                y: "9.833",
                                                                                                "color-interpolation-filters": "sRGB",
                                                                                                filterUnits: "userSpaceOnUse",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feFlood", {
                                                                                                        "flood-opacity": "0",
                                                                                                        result: "BackgroundImageFix"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feColorMatrix", {
                                                                                                        in: "SourceAlpha",
                                                                                                        result: "hardAlpha",
                                                                                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feOffset", {}),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feColorMatrix", {
                                                                                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feBlend", {
                                                                                                        in2: "BackgroundImageFix",
                                                                                                        result: "effect1_dropShadow_374_135180"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("feBlend", {
                                                                                                        in: "SourceGraphic",
                                                                                                        in2: "effect1_dropShadow_374_135180",
                                                                                                        result: "shape"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "+49"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                        className: "relative w-full",
                                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                            type: "text",
                                                                            id: "phone-input",
                                                                            className: "z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500",
                                                                            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                                                                            placeholder: "123-456-7890",
                                                                            required: true
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                className: "mb-2 flex items-center gap-2",
                                                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                    htmlFor: "address-input-3",
                                                                    className: "block text-sm font-medium text-gray-900 dark:text-white",
                                                                    children: [
                                                                        " ",
                                                                        "Address*",
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                type: "text",
                                                                id: "address-input-3",
                                                                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                                                                placeholder: "",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                className: "mb-2 flex items-center gap-2",
                                                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                    htmlFor: "plz-input-3",
                                                                    className: "block text-sm font-medium text-gray-900 dark:text-white",
                                                                    children: [
                                                                        " ",
                                                                        "PLZ*",
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                type: "text",
                                                                id: "plz-input-3",
                                                                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                                                                placeholder: "",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                className: "mb-2 flex items-center gap-2",
                                                                children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                    htmlFor: "city-input-3",
                                                                    className: "block text-sm font-medium text-gray-900 dark:text-white",
                                                                    children: [
                                                                        " ",
                                                                        "City*",
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                type: "text",
                                                                id: "city-input-3",
                                                                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                                                                placeholder: "",
                                                                required: true
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                children: "Payment"
                                            }),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800",
                                                        onClick: ()=>setSelectedPaymentType(0),
                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                    className: "flex h-5 items-center",
                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                        id: "credit-card",
                                                                        "aria-describedby": "credit-card-text",
                                                                        type: "radio",
                                                                        name: "payment-method",
                                                                        value: 0,
                                                                        className: "h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
                                                                        checked: 0 === selectedPaymentType
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "ms-4 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                            htmlFor: "credit-card",
                                                                            className: "font-medium leading-none text-gray-900 dark:text-white",
                                                                            children: [
                                                                                " ",
                                                                                "Credit Card",
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                            id: "credit-card-text",
                                                                            className: "mt-1 text-xs font-normal text-gray-500 dark:text-gray-400",
                                                                            children: "Pay with your credit card"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800",
                                                        onClick: ()=>setSelectedPaymentType(1),
                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                    className: "flex h-5 items-center",
                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                        id: "pay-on-delivery",
                                                                        "aria-describedby": "pay-on-delivery-text",
                                                                        type: "radio",
                                                                        name: "payment-method",
                                                                        value: 1,
                                                                        className: "h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
                                                                        checked: 1 === selectedPaymentType
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "ms-4 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                            htmlFor: "pay-on-delivery",
                                                                            className: "font-medium leading-none text-gray-900 dark:text-white",
                                                                            children: [
                                                                                " ",
                                                                                "Payment on delivery",
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                            id: "pay-on-delivery-text",
                                                                            className: "mt-1 text-xs font-normal text-gray-500 dark:text-gray-400",
                                                                            children: "+€15 payment processing fee"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800",
                                                        onClick: ()=>setSelectedPaymentType(2),
                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                    className: "flex h-5 items-center",
                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                        id: "paypal-2",
                                                                        "aria-describedby": "paypal-text",
                                                                        type: "radio",
                                                                        name: "payment-method",
                                                                        value: 2,
                                                                        className: "h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
                                                                        checked: 2 === selectedPaymentType
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "ms-4 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                            htmlFor: "paypal-2",
                                                                            className: "font-medium leading-none text-gray-900 dark:text-white",
                                                                            children: [
                                                                                " ",
                                                                                "Paypal account",
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                            id: "paypal-text",
                                                                            className: "mt-1 text-xs font-normal text-gray-500 dark:text-gray-400",
                                                                            children: "Connect to your account"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h3", {
                                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                children: "Delivery Methods"
                                            }),
                                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800",
                                                        onClick: ()=>setSelectedDeliveryMethod(0),
                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                    className: "flex h-5 items-center",
                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                        id: "dhl",
                                                                        "aria-describedby": "dhl-text",
                                                                        type: "radio",
                                                                        name: "delivery-method",
                                                                        value: 0,
                                                                        className: "h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
                                                                        checked: 0 === selectedDeliveryMethod
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "ms-4 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                            htmlFor: "dhl",
                                                                            className: "font-medium leading-none text-gray-900 dark:text-white",
                                                                            children: [
                                                                                " ",
                                                                                "€15 - DHL Fast Delivery",
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                            id: "dhl-text",
                                                                            className: "mt-1 text-xs font-normal text-gray-500 dark:text-gray-400",
                                                                            children: "Get it by Tommorow"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800",
                                                        onClick: ()=>setSelectedDeliveryMethod(1),
                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                    className: "flex h-5 items-center",
                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                        id: "fedex",
                                                                        "aria-describedby": "fedex-text",
                                                                        type: "radio",
                                                                        name: "delivery-method",
                                                                        value: 1,
                                                                        className: "h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
                                                                        checked: 1 === selectedDeliveryMethod
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "ms-4 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                            htmlFor: "fedex",
                                                                            className: "font-medium leading-none text-gray-900 dark:text-white",
                                                                            children: [
                                                                                " ",
                                                                                "Free Delivery - FedEx",
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                            id: "fedex-text",
                                                                            className: "mt-1 text-xs font-normal text-gray-500 dark:text-gray-400",
                                                                            children: "Get it by Friday, 13 Dec 2023"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800",
                                                        onClick: ()=>{
                                                            setSelectedDeliveryMethod(2);
                                                        },
                                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                                                    className: "flex h-5 items-center",
                                                                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("input", {
                                                                        id: "express",
                                                                        "aria-describedby": "express-text",
                                                                        type: "radio",
                                                                        name: "delivery-method",
                                                                        value: 2,
                                                                        className: "h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
                                                                        checked: 2 == selectedDeliveryMethod
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                                                    className: "ms-4 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("label", {
                                                                            htmlFor: "express",
                                                                            className: "font-medium leading-none text-gray-900 dark:text-white",
                                                                            children: [
                                                                                " ",
                                                                                "€49 - Express Delivery",
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("p", {
                                                                            id: "express-text",
                                                                            className: "mt-1 text-xs font-normal text-gray-500 dark:text-gray-400",
                                                                            children: "Get it today"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                className: "mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                        className: "flow-root",
                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
                                            className: "-my-3 divide-y divide-gray-200 dark:divide-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("dl", {
                                                    className: "flex items-center justify-between gap-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("dt", {
                                                            className: "text-base font-normal text-gray-500 dark:text-gray-400",
                                                            children: "Subtotal"
                                                        }),
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("dd", {
                                                            className: "text-base font-medium text-gray-900 dark:text-white",
                                                            children: [
                                                                "€",
                                                                subTotal
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("dl", {
                                                    className: "flex items-center justify-between gap-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("dt", {
                                                            className: "text-base font-normal text-gray-500 dark:text-gray-400",
                                                            children: "Delivery"
                                                        }),
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("dd", {
                                                            className: "text-base font-medium text-gray-900 dark:text-white",
                                                            children: [
                                                                "€",
                                                                deliveryCharge
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("dl", {
                                                    className: "flex items-center justify-between gap-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("dt", {
                                                            className: "text-base font-bold text-gray-900 dark:text-white",
                                                            children: "Total"
                                                        }),
                                                        /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("dd", {
                                                            className: "text-base font-bold text-gray-900 dark:text-white",
                                                            children: [
                                                                "€",
                                                                total
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                                        className: "space-y-3",
                                        children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("button", {
                                            className: "mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",
                                            onClick: onPlaceOrder,
                                            children: "Place Order"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
    const components_Checkout = Checkout;
})();
exports.Checkout = __webpack_exports__.Checkout;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "Checkout"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
