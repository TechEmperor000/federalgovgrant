import {
    u as p
} from "./Codt86_G.js";
import {
    H as m,
    r as u,
    K as b,
    z as k,
    o as t,
    c as o,
    j as r,
    a as _,
    i as h,
    h as s
} from "./CH68K-0X.js";
import "./CbuU3NWl.js";
const v = ["innerHTML"],
    x = ["innerHTML"],
    g = {
        class: "gg-text margin-top-4"
    },
    C = {
        __name: "BodyContent",
        props: {
            blok: {
                type: Object,
                required: !0
            }
        },
        setup(n) {
            const e = n,
                {
                    replaceUrls: l,
                    resolvers: c
                } = p(),
                a = m(() => l(e.blok.text));
            return (y, T) => {
                const i = u("StoryblokRichText"),
                    d = b("editable");
                return k((t(), o("div", null, [e.blok.headline ? (t(), o("h2", {
                    key: 0,
                    class: "margin-0 padding-0 margin-top-4",
                    innerHTML: e.blok.headline
                }, null, 8, v)) : r("", !0), e.blok.lead ? (t(), o("p", {
                    key: 1,
                    innerHTML: e.blok.lead,
                    class: "text-semibold font-body-lg margin-top-1"
                }, null, 8, x)) : r("", !0), _("div", g, [e.blok.text ? (t(), h(i, {
                    key: 0,
                    doc: s(a),
                    resolvers: s(c)
                }, null, 8, ["doc", "resolvers"])) : r("", !0)])])), [
                    [d, e.blok]
                ])
            }
        }
    };
export {
    C as
    default
};