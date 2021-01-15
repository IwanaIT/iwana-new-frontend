<template>
    <section
        class="hero-section background-img"
        style="
            background: url('img/hero-bg-2.jpg') no-repeat center center / cover;
        "
    >
        <div class="video-section-wrap">
            <div class="background-video-overly ptb-100">
                <div
                    id="heroPlayer"
                    class="player"
                    data-property="{videoURL:'https://www.youtube.com/watch?v=gOqlwlQjVis',containment:'.video-section-wrap', quality:'highres', autoPlay:true, showControls: false, startAt:0, mute:true, opacity: 1}"
                ></div>
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-8 col-lg-7">
                            <div
                                class="hero-content-left text-white text-center mt-5 ptb-100"
                            >
                                <h1 class="text-white">
                                    Build anything you want
                                </h1>
                                <p class="lead">
                                    We offer Digital Marketing / SEO in Kalawad
                                    Road Rajkot, Gujarat. Find here details
                                    about our company.
                                </p>

                                <a href="#" class="btn google-play-btn"
                                    >Contact with us</a
                                >
                            </div>
                        </div>
                    </div>
                    <!--clients logo start-->
                    <div class="row justify-content-between">
                        <div class="col-md-12">
                            <div
                                class="client-section-wrap d-flex flex-row align-items-center"
                            >
                                <p class="lead mr-5 mb-0 text-white">
                                    Trusted by companies like:
                                </p>
                                <ul class="list-inline justify-content-between">
                                    <li class="list-inline-item">
                                        <img
                                            src="img/client-1-gray.png"
                                            width="85"
                                            alt="client"
                                            class="img-fluid"
                                        />
                                    </li>
                                    &nbsp;
                                    <li class="list-inline-item">
                                        <img
                                            src="img/client-2-gray.png"
                                            width="85"
                                            alt="client"
                                            class="img-fluid"
                                        />
                                    </li>
                                    &nbsp;
                                    <li class="list-inline-item">
                                        <img
                                            src="img/client-3-gray.png"
                                            width="85"
                                            alt="client"
                                            class="img-fluid"
                                        />
                                    </li>
                                    &nbsp;
                                    <li class="list-inline-item">
                                        <img
                                            src="img/client-4-gray.png"
                                            width="85"
                                            alt="client"
                                            class="img-fluid"
                                        />
                                    </li>
                                    &nbsp;
                                    <li class="list-inline-item">
                                        <img
                                            src="img/client-5-gray.png"
                                            width="85"
                                            alt="client"
                                            class="img-fluid"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--clients logo end-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from "jquery";

export default {
    name: "Banner",
    mounted() {
        // $("#heroPlayer").YTPlayer();
        this.player = $("#heroPlayer").YTPlayer();
        setTimeout(() => {
            this.player.YTPlayer();
        }, 2000);
    },
};
</script>

<style>
</style>