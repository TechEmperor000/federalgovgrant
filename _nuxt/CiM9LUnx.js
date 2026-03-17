import {
    r as B,
    o as e,
    c as r,
    a as b,
    F as s,
    D as n,
    i as g,
    j as u,
    h as i,
    I as k
} from "./CH68K-0X.js";
const w = {
        key: 0,
        class: "grid-row grid-gap"
    },
    x = {
        class: "desktop:grid-col-12 tablet:grid-col-12 mobile-lg:grid-col-12 grid-col-12"
    },
    j = {
        key: 1,
        class: "grid-container maxw-full"
    },
    F = {
        class: "grid-row grid-gap-6"
    },
    z = {
        __name: "Page",
        props: {
            blok: Object
        },
        setup(d) {
            var h, y;
            const m = d;
            let o = (h = m.blok.left_sidebar) == null ? void 0 : h.length,
                t = (y = m.blok.sidebar) == null ? void 0 : y.length,
                a = 12;
            return o && t ? (o = 3, t = 3) : o ? (o = 3, t = 0) : t && (o = 0, t = 3), a = a - (o + t), (N, S) => {
                var f, _, v, p, $, C;
                const c = B("StoryblokComponent");
                return e(), r(s, null, [(f = d.blok) != null && f.header ? (e(), r("div", w, [b("div", x, [(e(!0), r(s, null, n((_ = d.blok) == null ? void 0 : _.header, l => (e(), g(c, {
                    blok: l,
                    key: l._uid
                }, null, 8, ["blok"]))), 128))])])) : u("", !0), (v = d.blok) != null && v.body.length ? (e(), r("div", j, [b("div", F, [i(o) ? (e(), r("div", {
                    key: 0,
                    class: k(`desktop:grid-col-${i(o)} tablet:grid-col-${i(o)} mobile-lg:grid-col-12 grid-col-12`)
                }, [(e(!0), r(s, null, n((p = d.blok) == null ? void 0 : p.left_sidebar, l => (e(), g(c, {
                    blok: l,
                    key: l._uid
                }, null, 8, ["blok"]))), 128))], 2)) : u("", !0), b("div", {
                    class: k(`desktop:grid-col-${i(a)} tablet:grid-col-${i(a)} mobile-lg:grid-col-12 grid-col-12`)
                }, [(e(!0), r(s, null, n(($ = d.blok) == null ? void 0 : $.body, l => (e(), g(c, {
                    blok: l,
                    key: l._uid
                }, null, 8, ["blok"]))), 128))], 2), i(t) ? (e(), r("div", {
                    key: 1,
                    class: k(`desktop:grid-col-${i(t)} tablet:grid-col-${i(t)} mobile-lg:grid-col-12 grid-col-12`)
                }, [(e(!0), r(s, null, n((C = d.blok) == null ? void 0 : C.sidebar, l => (e(), g(c, {
                    blok: l,
                    key: l._uid
                }, null, 8, ["blok"]))), 128))], 2)) : u("", !0)])])) : u("", !0)], 64)
            }
        }
    };
export {
    z as
    default
};