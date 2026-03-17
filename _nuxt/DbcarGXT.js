import {
    H as x,
    K as v,
    z as y,
    o as l,
    c as o,
    a as e,
    I as m,
    t as d,
    j as a,
    F as C,
    D as w,
    J as z,
    h as H
} from "./CH68K-0X.js";

function D(t, i = 1920, n = 0) {
    if (!t.filename) return;
    let c = t.filename + `/m/${i}x${n}`;
    return t.focus && (c += `/filters:focal(${t.focus})`), c
}
const $ = ["alt", "title"],
    B = {
        key: 0,
        class: "grid-col-12 padding-top-4 desktop:padding-10 tablet:padding-10 mobile-lg:padding-top-4"
    },
    I = {
        class: "grid-container maxw-full"
    },
    S = {
        class: "grid-col"
    },
    j = {
        class: "usa-card-group"
    },
    p = {
        class: "usa-card desktop:grid-col-6 tablet:grid-col-12 mobile-lg:grid-col-12 grid-col-12"
    },
    F = {
        class: "usa-card__container"
    },
    N = {
        class: "usa-card__header"
    },
    O = ["textContent"],
    V = {
        class: "usa-card__body"
    },
    E = ["textContent"],
    J = {
        key: 0,
        class: "usa-card__footer"
    },
    K = {
        class: "usa-button-group"
    },
    L = ["href", "textContent"],
    q = ["href"],
    A = ["src", "alt", "title"],
    P = {
        __name: "Hero",
        props: {
            blok: Object
        },
        setup(t) {
            const i = t,
                n = x(() => D(i.blok.image)),
                c = () => i.blok.height === void 0 ? "gg-hero-height-lg" : i.blok.height;
            return (b, G) => {
                var r, u, _, h, g, k;
                const f = v("editable");
                return y((l(), o("div", {
                    class: m(["grid-row gg-hero", c()]),
                    alt: (r = t.blok) == null ? void 0 : r.alt_text_508,
                    title: (u = t.blok) == null ? void 0 : u.title_text_508,
                    style: z(`background-image: url('${H(n)}');`)
                }, [(_ = t.blok) != null && _.show_call_to_action ? (l(), o("div", B, [e("div", I, [e("div", {
                    class: m(["grid-row", c()])
                }, [e("div", S, [e("ul", j, [e("li", p, [e("div", F, [e("div", N, [(h = t.blok) != null && h.title ? (l(), o("h2", {
                    key: 0,
                    tabindex: "0",
                    class: "usa-card__heading",
                    textContent: d(t.blok.title)
                }, null, 8, O)) : a("", !0)]), e("div", V, [(g = t.blok) != null && g.text ? (l(), o("p", {
                    key: 0,
                    tabindex: "0",
                    textContent: d(t.blok.text)
                }, null, 8, E)) : a("", !0)]), (k = t.blok) != null && k.call_to_action_buttons.length ? (l(), o("div", J, [e("ul", K, [(l(!0), o(C, null, w(t.blok.call_to_action_buttons, s => (l(), o("li", {
                    key: t.blok._uid,
                    class: "usa-button-group__item"
                }, [s.image.filename ? a("", !0) : (l(), o("a", {
                    key: 0,
                    href: s.link.cached_url,
                    class: "usa-button",
                    textContent: d(s.text)
                }, null, 8, L)), s.image.filename ? (l(), o("a", {
                    key: 1,
                    href: s.link.cached_url
                }, [e("img", {
                    src: s.image.filename,
                    alt: s.text,
                    title: s.text
                }, null, 8, A)], 8, q)) : a("", !0)]))), 128))])])) : a("", !0)])])])])], 2)])])) : a("", !0)], 14, $)), [
                    [f, t.blok]
                ])
            }
        }
    };
export {
    P as
    default
};