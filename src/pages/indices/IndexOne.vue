<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about />
            <features />
            <download />
            <pricing  />
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
import Banner from "../../views/index-one/Banner";
import Promo from "../../views/index-one/Promo";
import About from "../../views/index-one/About";
import Features from "../../views/index-one/Features";
import Download from "../../views/index-one/Download";
import Pricing from "../../views/index-one/Pricing";
import Testimonial from "../../views/commons/Testimonial";
import Screenshots from "../../views/commons/Screenshots";
import Team from "../../views/commons/Team";
import LatestNews from "../../views/commons/LatestNews";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "IndexOne",
    components: {
        NavBar,
        Banner,
        Promo,
        About,
        Features,
        Download,
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