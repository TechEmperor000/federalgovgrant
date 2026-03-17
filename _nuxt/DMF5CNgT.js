import i from "./BHz6b7cU.js";
import {
    _ as n
} from "./DlAUqK2U.js";
import {
    o as e,
    c as t,
    a,
    F as _,
    D as l,
    j as o,
    t as r
} from "./CH68K-0X.js";
const d = {
        props: {
            blok: Object
        },
        data() {
            return {
                iconHover: !1
            }
        }
    },
    u = i + "#search",
    h = i + "#launch",
    y = i + "#list",
    b = i + "#account_balance",
    k = i + "#security",
    f = i + "#people",
    p = i + "#twitter",
    v = i + "#youtube",
    g = i + "#local_library",
    x = i + "#support_agent",
    m = {
        id: "gg_icon_bar",
        class: "bg-base-lighter"
    },
    B = {
        class: "grid-container maxw-full"
    },
    $ = {
        class: "grid-row flex-wrap"
    },
    j = {
        class: "desktop:grid-col tablet:grid-col-4 mobile-lg:grid-col-6"
    },
    D = ["href", "target"],
    F = {
        class: "usa-icon usa-icon--size-7",
        "aria-hidden": "true",
        focusable: "false",
        role: "img"
    },
    I = {
        key: 0,
        "xlink:href": u
    },
    N = {
        key: 1,
        "xlink:href": h
    },
    V = {
        key: 2,
        "xlink:href": y
    },
    z = {
        key: 3,
        "xlink:href": b
    },
    C = {
        key: 4,
        "xlink:href": k
    },
    E = {
        key: 5,
        "xlink:href": f
    },
    G = {
        key: 6,
        "xlink:href": p
    },
    H = {
        key: 7,
        "xlink:href": v
    },
    L = {
        key: 8,
        "xlink:href": g
    },
    O = {
        key: 9,
        "xlink:href": x
    };

function S(q, A, c, J, K, M) {
    return e(), t("div", m, [a("div", B, [a("div", $, [(e(!0), t(_, null, l(c.blok.icons.tbody, s => (e(), t("div", j, [a("a", {
        class: "display-block padding-2 text-center",
        href: s.body[1].value,
        target: s.body[2].value === "true" ? "_blank" : ""
    }, [(e(), t("svg", F, [s.body[3].value === "search" ? (e(), t("use", I)) : o("", !0), s.body[3].value === "launch" ? (e(), t("use", N)) : o("", !0), s.body[3].value === "list" ? (e(), t("use", V)) : o("", !0), s.body[3].value === "account_balance" ? (e(), t("use", z)) : o("", !0), s.body[3].value === "security" ? (e(), t("use", C)) : o("", !0), s.body[3].value === "people" ? (e(), t("use", E)) : o("", !0), s.body[3].value === "twitter" ? (e(), t("use", G)) : o("", !0), s.body[3].value === "youtube" ? (e(), t("use", H)) : o("", !0), s.body[3].value === "local_library" ? (e(), t("use", L)) : o("", !0), s.body[3].value === "support_agent" ? (e(), t("use", O)) : o("", !0)])), a("div", null, r(s.body[0].value), 1)], 8, D)]))), 256))])])])
}
const T = n(d, [
    ["render", S],
    ["__scopeId", "data-v-93457267"]
]);
export {
    T as
    default
};