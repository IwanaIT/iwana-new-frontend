<template>
    <section class="download-section pt-100 background-img license-2-bg">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-6">
                    <div
                        id="accordion-1"
                        class="accordion accordion-faq pb-100"
                    >
                    <accordian :contents="contents" />
                       
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="download-img d-flex align-items-end">
                        <img
                            src="img/image-13.png"
                            alt="download"
                            class="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Accordian from "../../components/Accordian";
export default {
    name: "License",
    components: {
        Accordian,
    },
    data: function() {
          return {
              contents: [{
                title: 'Which license do I need?',
                description: "Uniquely leverage other's distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user.",
                active: false,
                icon: "ti-receipt",
              },{
                title: 'How do I get access to a theme?',
                description: 'Rapidiously incentivize virtual e-commerce and exceptional e-tailers.Progressively network focused catalysts for change without orthogonal benefits.Dramatically empower.',
                active: false,
                icon: "ti-gallery",
              },{
                title: 'How do I see previous orders?',
                description: ' Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.',
                active: false,
                icon: "ti-wallet",
              }, ]
          };
      }

  
};
</script>

<style>
.license-2-bg {
    background: url("../../assets/img/app-hero-bg.jpg") no-repeat center center /
        cover !important;
}
</style>