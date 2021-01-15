<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <video-promo />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/download-page/Banner";
import VideoPromo from "../../views/download-page/VideoPromo";
import SiteFooter from "../../views/index-five/SiteFooter";
export default {
    name: "DownloadPage",
    components: {
        NavBar,
        Banner,
        VideoPromo,
        SiteFooter,
    },
};
</script>

