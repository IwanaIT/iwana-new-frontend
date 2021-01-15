<template>
    <section
        class="hero-section pt-100 background-img"
        style="
            background: url('img/hero-bg-1.jpg') no-repeat center center / cover;
        "
    >
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6 col-lg-6">
                    <div class="hero-content-left text-white mt-5">
                        <h1 class="text-white">
                            <span>We Deliver your Product More Firster</span>
                        </h1>
                        <p class="lead">
                            Quickly morph client-centric results through
                            performance based applications. Proactively
                            facilitate professional human capital for
                            cutting-edge.
                        </p>

                        <a href="#download" class="btn app-store-btn"
                            >Download Now</a
                        >
                    </div>
                </div>
                <div class="col-md-6 col-lg-5">
                    <div class="hero-animation-img">
                        <img
                            src="img/image-14.png"
                            alt="img"
                            class="img-fluid"
                        />
                    </div>
                </div>
            </div>
            <!--counter start-->
            <div class="row">
                <ul class="list-inline counter-wrap">
                    <li class="list-inline-item">
                        <div class="single-counter text-center">
                            <animated-number
                                :value="happyClient"
                                :formatValue="format"
                                :duration="1000"
                            />
                            <h6>Happy Client</h6>
                        </div>
                    </li>
                    <li class="list-inline-item">
                        <div class="single-counter text-center">
                            <animated-number
                                :value="appDownload"
                                :formatValue="format"
                                :duration="1000"
                            />
                            <h6>App Download</h6>
                        </div>
                    </li>
                    <li class="list-inline-item">
                        <div class="single-counter text-center">
                            <animated-number
                                :value="totalRates"
                                :formatValue="format"
                                :duration="1000"
                            />
                            <h6>Total Rates</h6>
                        </div>
                    </li>
                    <li class="list-inline-item">
                        <div class="single-counter text-center">
                            <animated-number
                                :value="awardsWin"
                                :formatValue="format"
                                :duration="1000"
                            />
                            <h6>Awards win</h6>
                        </div>
                    </li>
                </ul>
            </div>
            <!--counter end-->
        </div>
    </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
    name: "Banner",
    components: { AnimatedNumber },
    data() {
        return {
            totalRates: 2350,
            appDownload: 2150,
            awardsWin: 2250,
            happyClient: 2350,
        };
    },
    methods: {
        format(value) {
            return `${value.toFixed(0)}`;
        },
    },
};
</script>

<style>
</style>