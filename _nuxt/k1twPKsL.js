import {
    e as P,
    f as b,
    g as q,
    u as p,
    r as R,
    c as w,
    h,
    i as B,
    j as O,
    k as V,
    o as m
} from "./CH68K-0X.js";
import {
    u as $
} from "./DWXvySR8.js";
const j = {
        role: "main"
    },
    N = {
        __name: "[...slug]",
        async setup(x) {
            let o, l;
            const e = P(),
                a = b(),
                s = a.fullPath,
                c = a.query,
                y = V().public.SB_VERSION,
                f = () => s.includes("view-opportunity.html"),
                k = () => s.includes("search-grants.html"),
                g = () => s.includes("search-opportunity-package.html"),
                _ = () => s.includes("track-my-application.html"),
                d = u => {
                    const i = new URLSearchParams(u),
                        r = {};
                    for (const [v, C] of i) r[v] = C;
                    return r
                };
            (() => {
                f() ? e.push({
                    path: `/search-results-detail/${c.oppId}`
                }) : k() ? e.push({
                    path: "/search-grants/",
                    query: c
                }) : g() ? e.push({
                    path: "/applicants/search-for-opportunity-package/",
                    query: d(a.hash.replace("#", "?"))
                }) : _() && e.push({
                    path: "/applicants/grant-applications/track-my-application/",
                    query: c
                })
            })();
            let {
                slug: S
            } = a.params, t = S.toString().split(",").join("/");
            t = t === "/" || t === "" ? "home" : t;
            const n = ([o, l] = q(() => $(t, {
                version: `${y}`
            })), o = await o, l(), o);
            return n.value === void 0 ? e.push({
                path: "/page-not-found"
            }) : t.includes("help") ? p({
                title: `Online Help ${n.value.name} | Grants.gov`
            }) : p({
                title: `${n.value.name} | Grants.gov`
            }), (u, i) => {
                const r = R("StoryblokComponent");
                return m(), w("main", j, [h(n) ? (m(), B(r, {
                    key: 0,
                    blok: h(n).content
                }, null, 8, ["blok"])) : O("", !0)])
            }
        }
    };
export {
    N as
    default
};