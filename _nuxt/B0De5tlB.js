import {
    u as h
} from "./Codt86_G.js";
import {
    _ as b
} from "./DlAUqK2U.js";
import {
    H as g,
    r as f,
    o,
    c as a,
    a as t,
    j as r,
    b as v,
    h as l
} from "./CH68K-0X.js";
import "./CbuU3NWl.js";
const x = {
        class: "gg-usa-card usa-card-group margin-0 padding-0 display-block"
    },
    y = {
        class: "usa-card"
    },
    T = {
        class: "usa-card__container margin-0"
    },
    p = {
        class: "usa-card__media"
    },
    B = {
        key: 0,
        class: "usa-card__img"
    },
    C = ["src", "alt", "title"],
    N = {
        class: "usa-card__body"
    },
    R = {
        key: 0,
        class: "usa-card__footer"
    },
    S = ["target", "href"],
    V = {
        __name: "Tile",
        props: {
            blok: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const n = e,
                {
                    replaceUrls: i,
                    resolvers: d
                } = h(),
                u = g(() => i(n.blok.text)),
                m = s => (s.url ? s.url : s.cached_url).length;
            return (s, _) => {
                var c;
                const k = f("StoryblokRichText");
                return o(), a("ul", x, [t("li", y, [t("div", T, [t("div", p, [e.blok.image.filename ? (o(), a("div", B, [t("img", {
                    src: e.blok.image.filename,
                    alt: e.blok.alt,
                    title: e.blok.title
                }, null, 8, C)])) : r("", !0)]), t("div", N, [v(k, {
                    doc: l(u),
                    resolvers: l(d)
                }, null, 8, ["doc", "resolvers"])]), m(e.blok.link) ? (o(), a("div", R, [t("a", {
                    target: (c = e.blok.link) == null ? void 0 : c.target,
                    href: e.blok.link.url ? e.blok.link.url : e.blok.link.cached_url,
                    class: "usa-button"
                }, "Learn more", 8, S)])) : r("", !0)])])])
            }
        }
    },
    H = b(V, [
        ["__scopeId", "data-v-51a81947"]
    ]);
export {
    H as
    default
};