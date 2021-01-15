<template>
    <section
        class="video-promo ptb-100 background-img"
        style="
            background: url('img/hero-bg-1.jpg') no-repeat center center / cover;
        "
    >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="video-promo-content mt-4 text-center">
                        <a
                            href="#"
                            @click="showYouTubeModal"
                            class="popup-youtube video-play-icon d-inline-block"
                            ><span class="ti-control-play"></span
                        ></a>
                        <h5 class="mt-4 text-white">Watch video overview</h5>
                    </div>
                </div>
            </div>
        </div>
        <YTModal
            url="https://www.youtube.com/watch?v=9No-FiEInLA"
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

<style>
</style>