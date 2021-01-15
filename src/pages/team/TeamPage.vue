<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <team-member />
            <contact :is-gray="true" />
            <clients  />
            <subscribe />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/teams/Banner";
import TeamMember from "../../views/teams/TeamMember";
import Contact from "../../views/commons/Contact";
import Clients from "../../views/commons/Clients";
import Subscribe from "../../views/commons/Subscribe";
import SiteFooter from "../../views/commons/SiteFooter";

export default {
    name: "TeamPage",
    components: {
        NavBar,
        Banner,
        TeamMember,
        Contact,
        Clients,
        Subscribe,
        SiteFooter,
    },
};
</script>

