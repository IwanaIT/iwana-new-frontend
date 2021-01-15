<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <review />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/review-page/Banner";
import Review from "../../views/review-page/Review";
import SiteFooter from "../../views/index-five/SiteFooter";
export default {
    name: "DownloadPage",
    components: {
        NavBar,
        Banner,
        Review,
        SiteFooter,
    },
};
</script>
