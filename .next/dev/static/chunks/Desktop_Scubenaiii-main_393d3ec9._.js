(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Scubenaiii-main/components/section-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/framer-motion@12.23.26_@emo_3a096f0cab07ef7d5c9aa69280700989/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function SectionHeader({ badge, badgeIcon, title, subtitle, centered = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.6
        },
        className: `mb-12 lg:mb-16 ${centered ? "text-center" : ""}`,
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    delay: 0.1
                },
                className: `inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6`,
                children: [
                    badgeIcon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-primary text-sm font-medium",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Scubenaiii-main/components/section-header.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/section-header.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/Scubenaiii-main/components/section-header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/section-header.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    delay: 0.2
                },
                className: "text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/section-header.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Scubenaiii-main/components/section-header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Scubenaiii-main/components/feature-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureCard",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/framer-motion@12.23.26_@emo_3a096f0cab07ef7d5c9aa69280700989/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function FeatureCard({ icon, title, description, accentColor = "primary", index = 0 }) {
    const colors = {
        primary: {
            iconBg: "bg-[var(--color-accent)]/10",
            iconColor: "text-[var(--color-accent)]",
            border: "border-[var(--color-accent)]/20",
            hoverBorder: "hover:border-[var(--color-accent)]/50",
            glow: "group-hover:shadow-[var(--color-accent)]/20"
        },
        accent: {
            iconBg: "bg-[var(--color-highlight)]/10",
            iconColor: "text-[var(--color-highlight)]",
            border: "border-[var(--color-highlight)]/20",
            hoverBorder: "hover:border-[var(--color-highlight)]/50",
            glow: "group-hover:shadow-[var(--color-highlight)]/20"
        },
        teal: {
            iconBg: "bg-[var(--color-accent)]/10",
            iconColor: "text-[var(--color-accent)]",
            border: "border-[var(--color-accent)]/20",
            hoverBorder: "hover:border-[var(--color-accent)]/50",
            glow: "group-hover:shadow-[var(--color-accent)]/20"
        },
        gold: {
            iconBg: "bg-[var(--color-highlight)]/10",
            iconColor: "text-[var(--color-highlight)]",
            border: "border-[var(--color-highlight)]/20",
            hoverBorder: "hover:border-[var(--color-highlight)]/50",
            glow: "group-hover:shadow-[var(--color-highlight)]/20"
        }
    };
    const c = colors[accentColor] || colors.primary;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        whileHover: {
            y: -8
        },
        className: `group relative p-6 lg:p-8 rounded-2xl bg-[var(--color-card)] border ${c.border} ${c.hoverBorder} transition-all duration-300 hover:shadow-xl ${c.glow} overflow-hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-highlight)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            }, void 0, false, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emo_3a096f0cab07ef7d5c9aa69280700989$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            rotate: 360,
                            scale: 1.1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: `w-14 h-14 rounded-xl ${c.iconBg} flex items-center justify-center mb-5`,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
                            className: `w-7 h-7 ${c.iconColor} ${icon.props?.className ? icon.props.className : ""}`
                        }) : icon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold mb-3 text-white group-hover:text-[var(--color-accent)] transition-colors",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--color-text-muted)] leading-relaxed",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${c.iconBg} blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`
            }, void 0, false, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Scubenaiii-main/components/feature-card.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Scubenaiii-main/components/lottie-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LottieAnimation",
    ()=>LottieAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$lottie$2d$web$40$5$2e$13$2e$0$2f$node_modules$2f$lottie$2d$web$2f$build$2f$player$2f$lottie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/lottie-web@5.13.0/node_modules/lottie-web/build/player/lottie.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LottieAnimation({ animationData, className = "", loop = true, autoplay = true }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LottieAnimation.useEffect": ()=>{
            if (!containerRef.current) return;
            animationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$lottie$2d$web$40$5$2e$13$2e$0$2f$node_modules$2f$lottie$2d$web$2f$build$2f$player$2f$lottie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadAnimation({
                container: containerRef.current,
                renderer: "svg",
                loop,
                autoplay,
                animationData
            });
            return ({
                "LottieAnimation.useEffect": ()=>{
                    animationRef.current?.destroy();
                }
            })["LottieAnimation.useEffect"];
        }
    }["LottieAnimation.useEffect"], [
        animationData,
        loop,
        autoplay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className
    }, void 0, false, {
        fileName: "[project]/Desktop/Scubenaiii-main/components/lottie-animation.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(LottieAnimation, "pgVpqp9NeTTnpbYP5l/+k1xFdss=");
_c = LottieAnimation;
var _c;
__turbopack_context__.k.register(_c, "LottieAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Scubenaiii-main/lib/animations/ai-brain.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"v":"5.7.4","fr":30,"ip":0,"op":90,"w":400,"h":400,"nm":"AI Brain","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Neural Core","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"t":0,"s":[0],"e":[360]},{"t":90,"s":[360]}]},"p":{"a":0,"k":[200,200]},"s":{"a":1,"k":[{"t":0,"s":[100,100],"e":[110,110]},{"t":45,"s":[110,110],"e":[100,100]},{"t":90,"s":[100,100]}]}},"shapes":[{"ty":"gr","it":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[120,120]}},{"ty":"st","c":{"a":0,"k":[0.106,0.773,0.741,1]},"w":{"a":0,"k":4}},{"ty":"tr","p":{"a":0,"k":[0,0]}}]}]},{"ddd":0,"ind":2,"ty":4,"nm":"Outer Ring","sr":1,"ks":{"o":{"a":0,"k":80},"r":{"a":1,"k":[{"t":0,"s":[0],"e":[-360]},{"t":90,"s":[-360]}]},"p":{"a":0,"k":[200,200]},"s":{"a":0,"k":[100,100]}},"shapes":[{"ty":"gr","it":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[180,180]}},{"ty":"st","c":{"a":0,"k":[1,0.714,0.118,1]},"w":{"a":0,"k":2},"d":[{"n":"d","v":{"a":0,"k":10}},{"n":"g","v":{"a":0,"k":5}}]},{"ty":"tr","p":{"a":0,"k":[0,0]}}]}]},{"ddd":0,"ind":3,"ty":4,"nm":"Pulse","sr":1,"ks":{"o":{"a":1,"k":[{"t":0,"s":[100],"e":[0]},{"t":45,"s":[0],"e":[100]},{"t":90,"s":[100]}]},"p":{"a":0,"k":[200,200]},"s":{"a":1,"k":[{"t":0,"s":[80,80],"e":[150,150]},{"t":45,"s":[150,150],"e":[80,80]},{"t":90,"s":[80,80]}]}},"shapes":[{"ty":"gr","it":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]}},{"ty":"fl","c":{"a":0,"k":[0.106,0.773,0.741,0.3]}},{"ty":"tr","p":{"a":0,"k":[0,0]}}]}]}]});}),
"[project]/Desktop/Scubenaiii-main/components/control-theory-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlTheoryAnimation",
    ()=>ControlTheoryAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$components$2f$lottie$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/components/lottie-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$lib$2f$animations$2f$ai$2d$brain$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/Scubenaiii-main/lib/animations/ai-brain.json (json)");
"use client";
;
;
;
function ControlTheoryAnimation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-white/10 blur-3xl rounded-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/control-theory-animation.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 float-animation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$components$2f$lottie$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LottieAnimation"], {
                    animationData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Scubenaiii$2d$main$2f$lib$2f$animations$2f$ai$2d$brain$2e$json__$28$json$29$__["default"],
                    className: "w-full max-w-md mx-auto"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Scubenaiii-main/components/control-theory-animation.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Scubenaiii-main/components/control-theory-animation.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Scubenaiii-main/components/control-theory-animation.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ControlTheoryAnimation;
var _c;
__turbopack_context__.k.register(_c, "ControlTheoryAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Scubenaiii-main_393d3ec9._.js.map