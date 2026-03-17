import {
    o as t,
    c as a,
    a as o
} from "./CH68K-0X.js";
const l = {
        class: "grid-row margin-top-4"
    },
    s = {
        class: "grid-col"
    },
    d = ["videoid", "playlabel"],
    c = {
        __name: "YoutubeCard",
        props: {
            blok: Object,
            controls: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            return (i, r) => (t(), a("div", l, [o("div", s, [o("lite-youtube", {
                style: {
                    "max-width": "100%"
                },
                "rounded-lg": "",
                videoid: e.blok.video_id,
                playlabel: e.blok.title,
                params: "controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
            }, null, 8, d)])]))
        }
    };
export {
    c as
    default
};