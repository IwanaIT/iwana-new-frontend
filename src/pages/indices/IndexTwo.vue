<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <key-features />
            <about />
            <features />
            <video-promo  />
            <pricing />
            <testimonial />
            <screenshots :is-gray="true" />
            <license />
            <latestNews :is-gray="true" />
            <team :is-rounded="false" />
            <contact :is-gray="true" />
            <clients />
            <subscribe />
            <siteFooter />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-two/Banner";
import KeyFeatures from "../../views/index-two/KeyFeatures";
import About from "../../views/index-two/About";
import Features from "../../views/index-two/Features";
import VideoPromo from "../../views/index-two/VideoPromo";
import Pricing from "../../views/index-two/Pricing";
import Testimonial from "../../views/commons/Testimonial";
import Screenshots from "../../views/commons/Screenshots";
import License from "../../views/index-two/License";
import LatestNews from "../../views/commons/LatestNews";
import Team from "../../views/commons/Team";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "IndexTwo",
    components: {
        NavBar,
        Banner,
        KeyFeatures,
        About,
        Features,
        VideoPromo,
        Pricing,
        Testimonial,
        Screenshots,
        License,
        LatestNews,
        Team,
        Contact,
        Subscribe,
        SiteFooter,
        Clients,
    },
};
</script>