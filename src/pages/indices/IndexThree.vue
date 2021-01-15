<template>
    <div>
        <nav-bar :colored-logo="true" />
        <div class="main">
            <banner />
            <promo />
            <about />
            <features />
            <video-promo />
            <pricing />
            <screenshots :is-gray="true" />
            <latest-news :is-primary="true" />
            <team />
            <contact :is-gray="true" />
            <clients />
            <subscribe />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-three/Banner";
import Promo from "../../views/index-one/Promo";
import About from "../../views/index-three/About";
import Features from "../../views/index-three/Features";
import VideoPromo from "../../views/index-three/VideoPromo";
import Pricing from "../../views/index-three/Pricing";
import Screenshots from "../../views/commons/Screenshots";
import LatestNews from "../../views/commons/LatestNews";
import Team from "../../views/commons/Team";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "IndexThree",
    components: {
        NavBar,
        Banner,
        Promo,
        About,
        Features,
        VideoPromo,
        Pricing,
        Screenshots,
        LatestNews,
        Team,
        Contact,
        Clients,
        Subscribe,
        SiteFooter,
    },
};
</script>

