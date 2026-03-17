import {
    u as _
} from "./Codt86_G.js";
import {
    H as m,
    r as p,
    o,
    c as b,
    a as e,
    I as h,
    t as x,
    i as k,
    h as r,
    j as v
} from "./CH68K-0X.js";
import "./CbuU3NWl.js";
const f = {
        class: "grid-row"
    },
    g = {
        class: "grid-col flex-fill"
    },
    y = {
        class: "usa-alert__body"
    },
    C = ["textContent"],
    S = {
        tabindex: "0"
    },
    j = {
        __name: "Alert",
        props: {
            blok: {
                type: Object,
                required: !0
            }
        },
        setup(t) {
            const a = t,
                {
                    replaceUrls: c,
                    resolvers: n
                } = _(),
                l = m(() => c(a.blok.text)),
                i = s => `${{info:"Informative",warning:"Warning",success:"Success",error:"Error"}[s]} status`;
            return (s, d) => {
                const u = p("StoryblokRichText");
                return o(), b("div", f, [e("div", g, [e("div", {
                    class: h([`usa-alert usa-alert--${t.blok.type}`, "padding-2 border-0"])
                }, [e("div", y, [e("h4", {
                    tabindex: "0",
                    class: "usa-alert__heading",
                    textContent: x(i(t.blok.type))
                }, null, 8, C), e("div", S, [t.blok.text ? (o(), k(u, {
                    key: 0,
                    doc: r(l),
                    resolvers: r(n)
                }, null, 8, ["doc", "resolvers"])) : v("", !0)])])], 2)])])
            }
        }
    };
export {
    j as
    default
};