<template>
    <div class="overflow-hidden">
        <section
            id="pricing"
            class="package-section background-shape-right ptb-100"
        >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="section-heading text-center mb-5">
                            <h2>
                                Afforadble Pricing and Packages <br />
                                choose your best one
                            </h2>
                            <p class="lead">
                                Monotonectally grow strategic process
                                improvements vis-a-vis integrated resources.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md">
                        <div class="card text-center single-pricing-pack">
                            <div class="pt-4"><h5>Basic</h5></div>
                            <div class="pricing-img mt-4">
                                <img
                                    src="img/basic.svg"
                                    alt="pricing img"
                                    class="img-fluid"
                                />
                            </div>
                            <div
                                class="card-header py-4 border-0 pricing-header"
                            >
                                <div class="h1 text-center mb-0">
                                    $<span class="price font-weight-bolder"
                                        >29</span
                                    >
                                </div>
                            </div>
                            <div class="card-body">
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Push Notifications</li>
                                    <li>Data Transfer</li>
                                    <li>SQL Database</li>
                                    <li>Search &amp; SEO Analytics</li>
                                    <li>24/7 Phone Support</li>
                                    <li>2 months technical support</li>
                                    <li>2+ profitable keyword</li>
                                </ul>
                                <a
                                    href="#"
                                    class="btn outline-btn mb-3"
                                    target="_blank"
                                    >Purchase now</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md">
                        <div
                            class="card popular-price text-center single-pricing-pack"
                        >
                            <div class="pt-4"><h5>Standard</h5></div>
                            <div class="pricing-img mt-4">
                                <img
                                    src="img/standard.svg"
                                    alt="pricing img"
                                    class="img-fluid"
                                />
                            </div>
                            <div
                                class="card-header py-4 border-0 pricing-header"
                            >
                                <div class="h1 text-center mb-0">
                                    $<span class="price font-weight-bolder"
                                        >149</span
                                    >
                                </div>
                            </div>
                            <div class="card-body">
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Push Notifications</li>
                                    <li>Data Transfer</li>
                                    <li>SQL Database</li>
                                    <li>Search &amp; SEO Analytics</li>
                                    <li>24/7 Phone Support</li>
                                    <li>1 Year technical support</li>
                                    <li>50+ profitable keyword</li>
                                </ul>
                                <a
                                    href="#"
                                    class="btn solid-btn mb-3"
                                    target="_blank"
                                    >Purchase now</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md">
                        <div class="card text-center single-pricing-pack">
                            <div class="pt-4"><h5>Unlimited</h5></div>
                            <div class="pricing-img mt-4">
                                <img
                                    src="img/unlimited.svg"
                                    alt="pricing img"
                                    class="img-fluid"
                                />
                            </div>
                            <div
                                class="card-header py-4 border-0 pricing-header"
                            >
                                <div class="h1 text-center mb-0">
                                    $<span class="price font-weight-bolder"
                                        >39</span
                                    >
                                </div>
                            </div>
                            <div class="card-body">
                                <ul
                                    class="list-unstyled text-sm mb-4 pricing-feature-list"
                                >
                                    <li>Push Notifications</li>
                                    <li>Data Transfer</li>
                                    <li>SQL Database</li>
                                    <li>Search &amp; SEO Analytics</li>
                                    <li>24/7 Phone Support</li>
                                    <li>6 months technical support</li>
                                    <li>10+ profitable keyword</li>
                                </ul>
                                <a
                                    href="#"
                                    class="btn outline-btn mb-3"
                                    target="_blank"
                                    >Purchase now</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <p class="mb-2">
                        If you need custom services or Need more?
                        <a href="#" class="color-secondary"> Contact us </a>
                    </p>
                </div>
                <!--pricing faq start-->
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <accordian id="accordion-1" :contents="contents" />
                    </div>
                    <div class="col-lg-6">
                        <accordian id="accordion-2" :contents="contents1" />
                    </div>
                </div>
                <!--pricing faq end-->
            </div>
        </section>
    </div>
</template>

<script>
import Accordian from "../../components/Accordian";
export default {
    name: "Pricing",
    isGray: {
        type: Boolean,
        default: false,
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },
    components: {
        Accordian,
    },
    data: function () {
        return {
            contents: [
                {
                    title: "Which license do I need?",
                    description:
                        "Uniquely leverage other's distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user.",
                    active: false,
                    icon: "ti-receipt",
                },

                {
                    title: "How do I get access to a theme?",
                    description:
                        "Rapidiously incentivize virtual e-commerce and exceptional e-tailers.Progressively network focused catalysts for change without orthogonal benefits.Dramatically empower.",
                    active: false,
                    icon: "ti-gallery",
                },
                {
                    title: "How do I see previous orders?",
                    description:
                        " Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.",
                    active: false,
                    icon: "ti-wallet",
                },
            ],
            contents1: [
                {
                    title: "Which license do I need?",
                    description:
                        "Distinctively recaptiualize customer directed channels before installed base communities. Continually disintermediate distinctive web services vis-a-vis team building e-commerce.",
                    active: false,
                    icon: "ti-receipt",
                },
                {
                    title: "How do I get access to a theme?",
                    description:
                        "Quickly recaptiualize revolutionary meta-services and multimedia based channels. Seamlessly impact diverse deliverables rather than cooperative strategic theme areas.",
                    active: false,
                    icon: "ti-lock",
                },
                {
                    title: "How do I see previous orders?",
                    description:
                        "Efficiently supply B2B networks vis-a-vis best-of-breed schemas. Dramatically parallel task reliable technology with cross functional core competencies. Phosfluorescently.",
                    active: false,
                    icon: "ti-widget",
                },
            ],
        };
    },
};
</script>

<style>
</style>