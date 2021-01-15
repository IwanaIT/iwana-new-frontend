<template>
    <section
        class="hero-section pt-100 background-img"
        style="
            background: url('img/hero-bg-1.jpg') no-repeat center center / cover;
        "
    >
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-9 col-lg-7">
                    <div
                        class="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
                    >
                        <h1 class="text-white mb-0">Download</h1>
                        <div class="custom-breadcrumb">
                            <ol
                                class="breadcrumb d-inline-block bg-transparent list-inline py-0"
                            >
                                <li class="list-inline-item breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>

                                <li class="list-inline-item breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>

                                <li
                                    class="list-inline-item breadcrumb-item active"
                                >
                                    Download
                                </li>
                            </ol>
                        </div>
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