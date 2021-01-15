<template>
    <section
        id="download"
        class="video-promo ptb-100 background-img banner-1-bg"
    >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="video-promo-content mt-4 text-center">
                        <a
                            href="#"
                            @click="showYouTubeModal"
                            class="popup-youtube video-play-icon d-inline-block"
                            ><span class="ti-control-play"></span>
                        </a>
                        <h5 class="mt-4 text-white">Watch video overview</h5>

                        <div class="download-btn mt-5">
                            <a href="#" class="btn google-play-btn mr-3"
                                ><span class="ti-android"></span> Google Play</a
                            >
                            &nbsp;
                            <a href="#" class="btn app-store-btn"
                                ><span class="ti-apple"></span> App Store</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <YTModal
            url="https://www.youtube.com/watch?v=1APwq1df6Mw"
            v-if="showModal"
            @close="showModal = false"
        >
            This is my first modal
        </YTModal>
    </section>
</template>

<script>
import YTModal from "../../components/YTModal";
export default {
    name: "VideoPromo",
    components: { YTModal },
    data: function () {
        return {
            showModal: false,
        };
    },
    methods: {
        showYouTubeModal: function (e) {
            e.preventDefault();
            this.showModal = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.banner-1-bg {
    background: url("../../assets/img/video-bg.jpg") no-repeat center center /
        cover !important;
}
</style>