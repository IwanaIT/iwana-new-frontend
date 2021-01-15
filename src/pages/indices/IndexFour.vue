<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about />
            <features />
            <video-promo  />
            <pricing />
            <testimonial />
            <screenshots />
            <team :is-gray="true" />
            <latestNews />
            <contact :is-gray="true" />
            <clients />
            <subscribe />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-four/Banner";
import Promo from "../../views/index-one/Promo";
import About from "../../views/index-four/About";
import Features from "../../views/index-three/Features";
import VideoPromo from "../../views/index-four/VideoPromo";
import Pricing from "../../views/index-four/Pricing";
import Testimonial from "../../views/commons/Testimonial";
import Screenshots from "../../views/commons/Screenshots";
import Team from "../../views/commons/Team";
import LatestNews from "../../views/commons/LatestNews";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "IndexFour",
    components: {
        NavBar,
        Banner,
        Promo,
        About,
        Features,
        VideoPromo,
        Pricing,
        Testimonial,
        Screenshots,
        Team,
        LatestNews,
        Contact,
        Clients,
        Subscribe,
        SiteFooter,
    },
};
</script>

<style>
</style>