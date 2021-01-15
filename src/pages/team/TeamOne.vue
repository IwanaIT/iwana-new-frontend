<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <team-single />
            <video-promo />
            <clients />
            <subscribe />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/teams/Banner";
import TeamSingle from "../../views/teams/TeamSingle";
import VideoPromo from "../../views/index-three/VideoPromo";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "TeamOne",
    components: {
        NavBar,
        Banner,
        TeamSingle,
        VideoPromo,
        Clients,
        Subscribe,
        SiteFooter,
    },
};
</script>

