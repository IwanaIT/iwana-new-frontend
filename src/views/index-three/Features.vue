<template>
    <section id="features" class="feature-section ptb-100">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-4">
                    <div class="download-img">
                        <img
                            src="img/image-10.png"
                            alt="download"
                            class="img-fluid"
                        />
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="feature-contents section-heading">
                        <h2>
                            Quick &amp; Easy Process with <br />
                            best features
                        </h2>
                        <p>
                            Objectively deliver professional value with diverse
                            web-readiness. Collaboratively transition wireless
                            customer service without goal-oriented catalysts for
                            change. Collaboratively.
                        </p>

                        <div class="feature-content-wrap">
                            <ul
                                class="nav nav-tabs feature-tab"
                                data-tabs="tabs"
                            >
                                <li class="nav-item">
                                    <a
                                        class="nav-link h6"
                                        href="#"
                                        @click.prevent="toggleVisiblity(0)"
                                        data-toggle="tab"
                                        v-bind:class="{ active: tabVisible[0] }"
                                    >
                                        <span class="ti-palette"></span>
                                        Design
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="nav-link h6"
                                        href="#"
                                        @click.prevent="toggleVisiblity(1)"
                                        v-bind:class="{ active: tabVisible[1] }"
                                    >
                                        <span class="ti-vector"></span>
                                        Development
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="nav-link h6"
                                        href="#"
                                        @click.prevent="toggleVisiblity(2)"
                                        v-bind:class="{ active: tabVisible[2] }"
                                    >
                                        <span class="ti-bar-chart"></span>
                                        Marketing
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="nav-link h6"
                                        href="#"
                                        @click.prevent="toggleVisiblity(3)"
                                        v-bind:class="{ active: tabVisible[3] }"
                                    >
                                        <span class="ti-announcement"></span>
                                        Branding
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content feature-tab-content">
                                <div
                                    v-show="tabVisible[0]"
                                    class="tab-pane active"
                                >
                                    <ul class="list-unstyled">
                                        <li class="py-2">
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <div>
                                                    <div
                                                        class="badge badge-circle badge-primary mr-3"
                                                    >
                                                        <span
                                                            class="ti-check"
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="mb-0">
                                                        Tones of SASS variables
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <div>
                                                    <div
                                                        class="badge badge-circle badge-primary mr-3"
                                                    >
                                                        <span
                                                            class="ti-check"
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="mb-0">
                                                        Create your own skin to
                                                        match your brand
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <div>
                                                    <div
                                                        class="badge badge-circle badge-primary mr-3"
                                                    >
                                                        <span
                                                            class="ti-check"
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="mb-0">
                                                        Globally orchestrate
                                                        tactical channels
                                                        whereas bricks
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <div>
                                                    <div
                                                        class="badge badge-circle badge-primary mr-3"
                                                    >
                                                        <span
                                                            class="ti-check"
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="mb-0">
                                                        Use Gulp to prepare all
                                                        assets for production
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <div>
                                                    <div
                                                        class="badge badge-circle badge-primary mr-3"
                                                    >
                                                        <span
                                                            class="ti-check"
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="mb-0">
                                                        Collaboratively
                                                        predominate vertical
                                                        manufactured
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    v-show="tabVisible[1]"
                                    class="tab-pane active"
                                >
                                    <div class="single-feature">
                                        <div
                                            class="d-flex align-items-center mb-2"
                                        >
                                            <span
                                                class="ti-layers rounded mr-3 icon icon-color-1"
                                            ></span>
                                            <h5 class="mb-0">Easy to use</h5>
                                        </div>
                                        <p>
                                            Synergistically deliver
                                            next-generation relationships
                                            whereas bleeding-edge resources.
                                            Continually pontificate stand-alone
                                            benefits whereas.
                                        </p>
                                    </div>
                                    <div class="single-feature mb-4">
                                        <div
                                            class="d-flex align-items-center mb-2"
                                        >
                                            <span
                                                class="ti-alarm-clock rounded mr-3 icon icon-color-2"
                                            ></span>
                                            <h5 class="mb-0">
                                                Increase conversion
                                            </h5>
                                        </div>
                                        <p>
                                            Phosfluorescently empower compelling
                                            intellectual capital and
                                            revolutionary web services.
                                            Compellingly develop cross-media.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    v-show="tabVisible[2]"
                                    class="tab-pane active"
                                >
                                    <div class="row">
                                        <div class="col single-feature mb-4">
                                            <div
                                                class="d-flex align-items-center mb-2"
                                            >
                                                <span
                                                    class="ti-bar-chart rounded mr-3 icon icon-color-2"
                                                ></span>
                                                <h5 class="mb-0">
                                                    Increase conversion
                                                </h5>
                                            </div>
                                            <p>
                                                Display recent conversions,
                                                build credibility and trust.
                                            </p>
                                        </div>
                                        <div class="col single-feature mb-4">
                                            <div
                                                class="d-flex align-items-center mb-2"
                                            >
                                                <span
                                                    class="ti-stats-up rounded mr-3 icon icon-color-3"
                                                ></span>
                                                <h5 class="mb-0">
                                                    Product analytics
                                                </h5>
                                            </div>
                                            <p>
                                                A top promo bar that counts down
                                                until a few discounts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-show="tabVisible[3]"
                                    class="tab-pane active"
                                >
                                    <p>
                                        I have, to push possibilities, to show
                                        people, this is the level that things
                                        could be at. So when you get something
                                        that has the name Kanye West on it, it’s
                                        supposed to be pushing the furthest
                                        possibilities. I will be the leader of a
                                        company that ends up being worth
                                        billions of dollars, because I got the
                                        answers. I understand culture. I am the
                                        nucleus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from "vue";

export default {
    name: "Features",
    data() {
        return {
            tabVisible: [true, false, false, false],
        };
    },
    methods: {
        toggleVisiblity(index) {
            console.log("here");
            for (let i = 0; i < this.tabVisible.length; i++) {
                console.log("start " + i);
                if (i === index) Vue.set(this.tabVisible, i, true);
                else Vue.set(this.tabVisible, i, false);
                console.log("end " + i);
            }
        },
    },
};
</script>

<style>
</style>