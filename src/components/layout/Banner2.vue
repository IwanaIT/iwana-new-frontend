<template>
  <section class="hero-section pt-100 banner-section">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-12">
          <carousel
              :autoplay="true"
              :dots="true"
              :responsive="{
                        0: { items: 1 },
                        768: { items: 1 },
                        991: { items: 1 },
                        1200: { items: 1 },
                        1920: { items: 1 },
                    }"
              :margin="0"
              :center="true"
              :nav="false"
              class="screen-carousel owl-carousel owl-theme dot-indicator owl-loaded owl-drag"
          >
            <img src="test/banner-whole.jpg" class="img-fluid">
            <img src="test/banner-whole.jpg" class="img-fluid">
            <img src="test/banner-whole.jpg" class="img-fluid">
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import SubmitQuote from "../../views/index-six/SubmitQuote";
import carousel from 'vue-owl-carousel'

export default {
  name: "VideoPromo",
  components: {
    // SubmitQuote,
    carousel,

  },
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
.banner-section {
  margin-top: 15px;
}
</style>