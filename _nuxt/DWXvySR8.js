import {
    N as i,
    m as c,
    q as y,
    R as l,
    S as d
} from "./CH68K-0X.js";
const f = async (s, e = {}, u = {}) => {
    var o;
    const r = i(),
        n = `${JSON.stringify(e)}${s}`,
        t = c(`${n}-state`);
    if (y(() => {
            t.value && t.value.id && l(t.value.id, a => t.value = a, u)
        }), !t.value) {
        const {
            data: a
        } = await d(n, () => r.get(`cdn/stories/${s}`, e), "$k7eHiIhaiP");
        a && (t.value = (o = a.value) == null ? void 0 : o.data.story)
    }
    return t
};
export {
    f as u
};