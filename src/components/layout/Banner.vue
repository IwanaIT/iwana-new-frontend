<template>
  <section class="hero-section pt-100 banner-section">
    <div class="container-fluid banner-container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-12" v-if="banners.length > 0">
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
              class="screen-carousel owl-carousel owl-theme dot-indicator owl-loaded owl-drag color-iwana-primary"
          >
            <img v-for="(banner, i) in banners" v-bind:key="i" :src="banner.imagen" class="img-fluid" alt="iwanacash">
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from "axios";

export default {
  name: "Banner",
  components: {
    carousel,
  },
  data: function () {
    return {
      banners: [],
    };
  },
  mounted() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      axios
          .get('/api/frontend/public/banners/CL/banner/privado')
          .then(response => {
            let bannersResponse = []
            response.data.data.map(function (banner) {
              bannersResponse.push({
                'id': banner.id,
                'imagen': banner.imagen,
              })
            });
            this.banners = bannersResponse;
          })
    }
  },
};
</script>

<style>
.banner-section {
  margin-top: 15px;
}

.banner-container {
  width: 60%;
}

.active span {
  background: #17a2b8 !important;
}
</style>