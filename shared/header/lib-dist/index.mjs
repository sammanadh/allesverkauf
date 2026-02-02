import { jsx, jsxs } from "react/jsx-runtime";
import { createElement, forwardRef } from "react";
function ShoppingBagIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    }));
}
const ForwardRef = /*#__PURE__*/ forwardRef(ShoppingBagIcon);
const esm_ShoppingBagIcon = ForwardRef;
function Header({ onCartClick }) {
    return /*#__PURE__*/ jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ jsx("header", {
            className: "relative bg-white",
            children: /*#__PURE__*/ jsx("nav", {
                "aria-label": "Top",
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ jsx("div", {
                    className: "border-b border-gray-200",
                    children: /*#__PURE__*/ jsxs("div", {
                        className: "flex h-16 items-center",
                        children: [
                            /*#__PURE__*/ jsx("div", {
                                className: "ml-4 flex lg:ml-0",
                                children: /*#__PURE__*/ jsxs("a", {
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ jsx("span", {
                                            className: "sr-only",
                                            children: "alleskaufen"
                                        }),
                                        /*#__PURE__*/ jsx("img", {
                                            alt: "",
                                            src: "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
                                            className: "h-8 w-auto"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx("div", {
                                className: "ml-auto flow-root",
                                children: /*#__PURE__*/ jsxs("button", {
                                    className: "group -m-2 flex items-center p-2",
                                    onClick: onCartClick,
                                    children: [
                                        /*#__PURE__*/ jsx(esm_ShoppingBagIcon, {
                                            "aria-hidden": "true",
                                            className: "size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        }),
                                        /*#__PURE__*/ jsx("span", {
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
export { Header };
