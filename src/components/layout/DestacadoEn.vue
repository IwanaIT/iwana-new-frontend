<template>
  <section class="client-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center mb-5">
            <h2 class="color-iwana-primary">Destacados En</h2>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12" v-if="destacadosEn.length > 0">
          <carousel
              :items="1"
              :nav="false"
              :dots="true"
              :loop="true"
              :margin="10"
              slideTransition="linear"
              :autoplayTimeout="4000"
              :autoplaySpeed="false"
              :smartSpeed="6000"
              :responsive="{
                            0: { items: 2 },
                            500: { items: 3 },
                            600: { items: 4 },
                            800: { items: 5 },
                            1200: { items: 6 },
                        }"
              class="owl-theme clients-carousel dot-indicator owl-loaded owl-drag"
          >

            <div class="item single-client" :key="index" v-for="(destacado, index) in destacadosEn">
              <a target="_blank" :href="destacado.url">
                <img :src="destacado.logo" alt="client logo" class="client-img"/>
              </a>
            </div>
          </carousel>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "DestacadoEn",
  components: {carousel},
  data() {
    return {
      destacadosEn: []
    };
  },
  mounted() {
    this.getDestacados();
  },
  methods: {
    getDestacados() {
      let destacados = [
        {
          'url': 'https://www.biobiochile.cl/biobiotv/programas/igadget/2020/12/02/como-funciona-el-cash-back-digital-en-chile.shtml',
          'logo': 'images/destacado-en/biobio.png'
        },
        {
          'url': 'https://www.df.cl/noticias/df-lab/innovacion-y-startups/plataforma-chilena-de-cashback-alista-aterrizaje-en-mexico/2020-10-19/132412.html',
          'logo': 'images/destacado-en/diariofinanciero.png'
        },
        {
          'url': 'https://www.publimetro.cl/cl/noticias/2020/09/09/computadores-zapatillal-mas-100-marcas-ya-estan-la-plataforma-devuelve-dinero-comprar.html',
          'logo': 'images/destacado-en/publimetro.png'
        },
        {
          'url': 'https://www.rockandpop.cl/2020/10/iwanacash-cashback-aplicacion-chile/',
          'logo': 'images/destacado-en/rockandpop.png'
        },
        {
          'url': 'https://www.linkedin.com/feed/update/urn:li:activity:6706335538749718528/',
          'logo': 'images/destacado-en/24horas.png'
        },
      ];

      this.destacadosEn = destacados;
    }
  }
}
</script>