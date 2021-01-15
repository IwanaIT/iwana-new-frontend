<template>
  <section class="hero-section pt-100 banner-section">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-12 col-lg-12">
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
            <img src="https://iwana.s3.us-east-2.amazonaws.com/images/originals/cYFCDZVHcYbFwKf1wR0XVy0Shhcykn8h8qsnmiE0.png" class="img-fluid">
            <img src="https://iwana.s3.us-east-2.amazonaws.com/images/originals/cYFCDZVHcYbFwKf1wR0XVy0Shhcykn8h8qsnmiE0.png" class="img-fluid">
            <img src="https://iwana.s3.us-east-2.amazonaws.com/images/originals/cYFCDZVHcYbFwKf1wR0XVy0Shhcykn8h8qsnmiE0.png" class="img-fluid">
          </carousel>
        </div>
<!--        <div class="col-md-4 col-lg-4">-->
<!--          <submit-quote/>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
// import SubmitQuote from "../../views/index-six/SubmitQuote";
import carousel from 'vue-owl-carousel'

//import YTModal from "../../components/YTModal";
export default {
  name: "VideoPromo",
  components: {
    // SubmitQuote,
    carousel
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
.banner-section{
  margin-top: 15px;
}
</style>