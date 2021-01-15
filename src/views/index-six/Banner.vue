<template>
    <section
        class="hero-section background-img pt-100"
        style="
            background: url('img/hero-bg-4.jpg') no-repeat center center / cover;
        "
    >
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6 col-lg-6">
                    <div
                        class="hero-content-left position-relative mt-lg-0 mt-md-0 mt-5 text-white"
                    >
                        <h1 class="text-white">
                            <span>Build anything That you want</span>
                        </h1>
                        <p class="lead">
                            Progressively monetize cost effective innovation
                            vis-a-vis cross-unit infrastructures. Uniquely
                            e-enable front-end core competencies vis-a-vis
                            premier.
                        </p>

                        <div
                            class="video-promo-content mt-4 d-flex align-items-center"
                        >
                            <a
                                href="#"
                                @click="showYouTubeModal"
                                class="popup-youtube video-play-icon"
                                ><span class="ti-control-play"></span>
                            </a>
                            <span class="ml-4">Watch video overview</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <submit-quote />
                </div>
            </div>
        </div>
        <div class="section-shape position-absolute">
            <img src="img/wave-shap.svg" alt="shape" />
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
import SubmitQuote from "../../views/index-six/SubmitQuote";

import YTModal from "../../components/YTModal";
export default {
    name: "VideoPromo",
    components: { SubmitQuote, YTModal },
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