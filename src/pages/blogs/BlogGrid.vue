<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <latest-news />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/blog-section/BlogBanner";
import LatestNews from "../../views/blog-section/LatestNews";
import SiteFooter from "../../views/index-five/SiteFooter";

export default {
    name: "BlogGrid",
    components: {
        NavBar,
        Banner,
        LatestNews,
        SiteFooter,
    },
};
</script>

