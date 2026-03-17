import {
    k as E,
    M as x
} from "./CH68K-0X.js";
import {
    _ as $
} from "./CbuU3NWl.js";

function O() {
    const v = E(),
        {
            GRANTS_ENV: b,
            APPLY_ENV: y
        } = v.public,
        m = (() => {
            const r = ["", "www."],
                g = ["dev", "test", "staging", "training"],
                p = {
                    grants: b,
                    apply: y
                },
                t = b.match(/https:\/\/(?:.*?\.)?([^\.]+)\.grants\.gov/),
                l = t ? t[1] : "dev",
                a = l === "www" || b === "https://grants.gov",
                e = Object.entries(p).reduce((s, [i, o]) => (r.forEach(c => {
                    s[`https://${c}${i}.grants.gov`] = o
                }), g.forEach(c => {
                    i === "grants" ? r.forEach(u => {
                        s[`https://${u}${c}.grants.gov`] = o
                    }) : (s[`https://${i}.${c}.grants.gov`] = o, s[`https://${c}${i}.grants.gov`] = o)
                }), s), {});
            return r.forEach(s => {
                a ? e[`https://${s}api.grants.gov`] = "https://api.grants.gov" : e[`https://${s}api.grants.gov`] = `https://api.${l}.grants.gov`
            }), g.forEach(s => {
                a ? e[`https://api.${s}.grants.gov`] = "https://api.grants.gov" : e[`https://api.${s}.grants.gov`] = `https://api.${l}.grants.gov`
            }), e
        })();
    return {
        replaceUrls: r => {
            if (!r) return r;
            const g = t => {
                    var l;
                    if (t.marks && t.marks.forEach(a => {
                            var e, s, i, o, c;
                            if (a.type === "link" && ((e = a.attrs) != null && e.href)) {
                                const u = (i = (s = a.attrs) == null ? void 0 : s.custom) == null ? void 0 : i["data-scrubber"],
                                    f = (c = (o = a.attrs) == null ? void 0 : o.custom) == null ? void 0 : c.rel;
                                if (u !== "ignore-link" && f !== "ignore-link")
                                    for (const [n, h] of Object.entries(m)) a.attrs.href.includes(n) && (a.attrs.href = a.attrs.href.replace(n, h), t.text && t.text.includes(n) && (t.text = t.text.replace(n, h)))
                            }
                        }), t.type === "text" && t.text && !((l = t.marks) == null ? void 0 : l.some(e => {
                            var s, i, o, c;
                            return e.type === "link" && (((i = (s = e.attrs) == null ? void 0 : s.custom) == null ? void 0 : i["data-scrubber"]) === "ignore-link" || ((c = (o = e.attrs) == null ? void 0 : o.custom) == null ? void 0 : c.rel) === "ignore-link")
                        })))
                        for (const [e, s] of Object.entries(m)) t.text.includes(e) && (t.text = t.text.replace(e, s));
                    t.content && t.content.forEach(a => g(a))
                },
                p = JSON.parse(JSON.stringify(r));
            return p.content && p.content.forEach(t => g(t)), p
        },
        urlReplacements: m,
        resolvers: {
            link: r => {
                var t, l, a, e, s;
                let g = ((t = r.attrs) == null ? void 0 : t.class) || "",
                    p = g ? `${g} usa-link` : "usa-link";
                return x($, {
                    to: (l = r.attrs) == null ? void 0 : l.href,
                    target: (a = r.attrs) == null ? void 0 : a.target,
                    class: p,
                    "data-scrubber": (s = (e = r.attrs) == null ? void 0 : e.custom) == null ? void 0 : s["data-scrubber"]
                }, () => r.text)
            },
            image: r => {
                var p, t, l, a, e, s, i, o, c, u, f;
                const g = x("img", {
                    src: (p = r.attrs) == null ? void 0 : p.src,
                    alt: (t = r.attrs) == null ? void 0 : t.alt,
                    title: (l = r.attrs) == null ? void 0 : l.title,
                    tabindex: "0",
                    id: (a = r.attrs) == null ? void 0 : a.id,
                    source: (e = r.attrs) == null ? void 0 : e.source,
                    copyright: (s = r.attrs) == null ? void 0 : s.copyright
                });
                if ((i = r.marks) != null && i.length && r.marks.find(n => n.type === "link")) {
                    const n = r.marks.find(h => h.type === "link");
                    return x($, {
                        to: (o = n == null ? void 0 : n.attrs) == null ? void 0 : o.href,
                        target: (c = n == null ? void 0 : n.attrs) == null ? void 0 : c.target,
                        class: "usa-link",
                        "data-scrubber": (f = (u = n == null ? void 0 : n.attrs) == null ? void 0 : u.custom) == null ? void 0 : f["data-scrubber"]
                    }, () => g)
                }
                return g
            }
        }
    }
}
export {
    O as u
};