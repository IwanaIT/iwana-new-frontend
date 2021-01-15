<template>
    <div class="main">
        <section
            class="hero-section ptb-100 background-img full-screen banner-1-bg"
        >
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-9 col-lg-7">
                        <div class="hero-content-left text-white text-center">
                            <h1 class="text-white">We're Coming Soon</h1>
                            <p class="lead">
                                Our website is under construction. We'll be here
                                soon with our new awesome site, subscribe to be
                                notified.
                            </p>
                            <div id="clock" class="countdown-wrap my-5">
                                  <vue-countdown :time="2 * 365 * 24 * 60 * 60 * 1000" >
                                        <template slot-scope="props">
                                            <div class="row">
                                                <div class="col">
                                                    <h2 class="mb-0">{{ props.days }}</h2>
                                                    <h5 class="mb-0">Days</h5>
                                                </div>
                                                <div class="col">
                                                    <h2 class="mb-0">{{ props.hours }}</h2>
                                                    <h5 class="mb-0">Hours</h5>
                                                </div>
                                                <div class="col">
                                                    <h2 class="mb-0">{{ props.minutes }}</h2>
                                                    <h5 class="mb-0">Minutes</h5>
                                                </div>
                                                <div class="col">
                                                    <h2 class="mb-0">{{ props.seconds }}</h2>
                                                    <h5 class="mb-0">Seconds</h5>
                                                </div>
                                            </div>

                                        </template>
                                    </vue-countdown>
                            </div>
                           

                            <form
                                action="#"
                                method="post"
                                class="subscribe-form text-center m-auto"
                            >
                                <div class="d-flex align-items-center">
                                    <input
                                        type="text"
                                        class="form-control input"
                                        id="email"
                                        name="email"
                                        placeholder="info@yourdomain.com"
                                    />
                                    <input
                                        type="submit"
                                        class="button btn solid-btn"
                                        id="submit"
                                        value="Subscribe"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
    name: "Comingsoon",
    components: { VueCountdown }
};
</script>
<style lang="scss" scoped>
.banner-1-bg {
    background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>