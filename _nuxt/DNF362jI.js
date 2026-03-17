import {
    r as s,
    o as e,
    c as r,
    F as a,
    D as c,
    I as t,
    b as i
} from "./CH68K-0X.js";
const u = {
    __name: "Grid",
    props: {
        blok: Object
    },
    setup(l) {
        return (d, m) => {
            const n = s("StoryblokComponent");
            return e(), r("div", {
                class: t(`grid-row ${l.blok.grid_gap}`)
            }, [(e(!0), r(a, null, c(l.blok.columns, o => (e(), r("div", {
                key: o._uid,
                class: t(`desktop:grid-col-${o.col_span?o.col_span:4} 
        tablet:grid-col-6 mobile-lg:grid-col-12 grid-col-12`)
            }, [i(n, {
                blok: o
            }, null, 8, ["blok"])], 2))), 128))], 2)
        }
    }
};
export {
    u as
    default
};