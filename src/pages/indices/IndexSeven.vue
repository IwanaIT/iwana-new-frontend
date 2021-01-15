<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about />
            <features />
            <pricing :is-gray="true"/>
            <testimonial />
            <screenshots :is-gray="true" />
            <download />
            <latest-news :is-gray="true" />
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
import Banner from "../../views/index-seven/Banner";
import Promo from "../../views/index-one/Promo";
import About from "../../views/index-seven/About";
import Features from "../../views/index-three/Features";
import Pricing from "../../views/index-five/Pricing";
import Testimonial from "../../views/commons/Testimonial";
import Screenshots from "../../views/commons/Screenshots";
import Download from "../../views/index-six/Download";
import LatestNews from "../../views/commons/LatestNews";
import Team from "../../views/commons/Team";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "IndexSeven",
    components: {
        NavBar,
        Banner,
        Promo,
        About,
        Features,
        Pricing,
        Testimonial,
        Screenshots,
        Download,
        LatestNews,
        Team,
        Contact,
        Clients,
        Subscribe,
        SiteFooter,
    },
};
</script>