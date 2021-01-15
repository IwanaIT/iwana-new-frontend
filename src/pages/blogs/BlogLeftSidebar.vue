<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner-left-sidebar />
            <blog-left />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import BannerLeftSidebar from "../../views/blog-section/BannerLeftSidebar";
import BlogLeft from "../../views/blog-section/BlogLeft";
import SiteFooter from "../../views/index-five/SiteFooter";

export default {
    name: "BlogLeftSidebar",
    components: {
        NavBar,
        BannerLeftSidebar,
        BlogLeft,
        SiteFooter,
    },
};
</script>

