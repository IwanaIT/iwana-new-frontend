<template>
    <section class="promo-section ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-9">
                    <div class="section-heading mb-5">
                        <h2>Frequently Asked Questions</h2>
                        <p class="lead">
                            Quickly morph client-centric results through
                            performance based applications. Proactively
                            facilitate professional human capital for
                            cutting-edge.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <accordian id="accordion-1" :contents="contents" />
                </div>
                <div class="col-lg-6">
                    <accordian id="accordion-2" :contents="contents1" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Accordian from "../../components/Accordian";
export default {
    name: "FaqOne",
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