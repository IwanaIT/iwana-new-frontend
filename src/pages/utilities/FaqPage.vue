<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <faq-one />
            <faq-two />
            <site-footer />
        </div>
    </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/faqpage/Banner";
import FaqOne from "../../views/faqpage/FaqOne";
import FaqTwo from "../../views/faqpage/FaqTwo";
import SiteFooter from "../../views/index-five/SiteFooter";

export default {
    name: "DownloadPage",
    components: {
        NavBar,
        Banner,
        FaqOne,
        FaqTwo,
        SiteFooter,
    },
};
</script>

