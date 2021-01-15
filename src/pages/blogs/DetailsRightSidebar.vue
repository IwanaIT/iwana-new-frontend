<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner-right-sidebar />
            <blog-right />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import BannerRightSidebar from "../../views/blog-section/BannerRightSidebar";
import BlogRight from "../../views/blog-section/BlogRight";
import SiteFooter from "../../views/index-five/SiteFooter";

export default {
    name: "DetailsRightSidebar",
    components: {
        NavBar,
        BannerRightSidebar,
        BlogRight,
        SiteFooter,
    },
};
</script>

