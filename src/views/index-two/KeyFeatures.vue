<template>
    <section class="promo-section mt-5 ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10">
                    <div class="section-heading mb-5">
                        <span
                            class="badge badge-pill"
                            v-bind:class="
                                isGreen ? 'badge-success' : 'badge-primary'
                            "
                            >Key features</span
                        >
                        <h5 class="h5 mt-3 mb-6">
                            We will helps you to build beautiful websites that
                            stand out and automatically adapt to your style.
                        </h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 mb-lg-0">
                    <div class="card single-promo-card single-promo-hover">
                        <div class="card-body">
                            <div class="pb-2">
                                <span
                                    class="ti-credit-card icon-md color-secondary"
                                ></span>
                            </div>
                            <div class="pt-2 pb-3">
                                <h5>Modular</h5>
                                <p class="text-muted mb-0">
                                    All components are built to be used in any
                                    combination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div
                        class="card single-promo-card single-promo-hover mb-lg-0"
                    >
                        <div class="card-body">
                            <div class="pb-2">
                                <span
                                    class="ti-control-record icon-md color-secondary"
                                ></span>
                            </div>
                            <div class="pt-2 pb-3">
                                <h5>Responsive</h5>
                                <p class="text-muted mb-0">
                                    Quick is optimized to work for most devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div
                        class="card single-promo-card single-promo-hover mb-lg-0"
                    >
                        <div class="card-body">
                            <div class="pb-2">
                                <span
                                    class="ti-vector icon-md color-secondary"
                                ></span>
                            </div>
                            <div class="pt-2 pb-3">
                                <h5>Scalable</h5>
                                <p class="text-muted mb-0">
                                    Remain consistent while developing new
                                    features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div
                        class="card single-promo-card single-promo-hover mb-lg-0"
                    >
                        <div class="card-body">
                            <div class="pb-2">
                                <span
                                    class="ti-receipt icon-md color-secondary"
                                ></span>
                            </div>
                            <div class="pt-2 pb-3">
                                <h5>Customizable</h5>
                                <p class="text-muted mb-0">
                                    Change a few variables and the whole theme
                                    adapts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "KeyFeatures",
    props: {
        isGreen: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style>
</style>