<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />

            <key-features :is-green="true" />
            <about />
            <video-promo />
            <!-- <features :show-badge="false" :is-gray="true" /> -->
            <features />
            <pricing />
            <screenshots :is-gray="true" />
            <latest-news :is-primary="true" />
            <team />
            <testimonial :is-gray="true" />
            <contact :is-gray="false" />
            <clients :is-gray="true" />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-five/Banner";
import KeyFeatures from "../../views/index-five/KeyFeatures";
import About from "../../views/index-five/About";
import VideoPromo from "../../views/index-two/VideoPromo";
// import Features from "../../views/index-two/Features";
import Features from "../../views/index-five/Features";
import Pricing from "../../views/index-five/Pricing";
import Screenshots from "../../views/commons/Screenshots";
import LatestNews from "../../views/commons/LatestNews";
import Team from "../../views/commons/Team";
import Testimonial from "../../views/commons/Testimonial";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import SiteFooter from "../../views/index-five/SiteFooter";

export default {
    name: "IndexFive",
    components: {
        NavBar,
        Banner,
        KeyFeatures,
        About,
        VideoPromo,
        Features,
        Pricing,
        Screenshots,
        LatestNews,
        Team,
        Testimonial,
        Contact,
        Clients,
        SiteFooter,
    },
};
</script>