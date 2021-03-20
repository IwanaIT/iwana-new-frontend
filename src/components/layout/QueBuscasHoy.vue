<template>
  <section class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center mb-5 ">
            <h2 class="color-iwana-primary">¿Qué buscas hoy?</h2>
          </div>
        </div>
      </div>
      <div class="row equal">
        <div class="col-md-12">
          <carousel
              :autoplayTimeout="5000"
              :autoplay="true"
              :dots="false"
              :responsive="{
                      0: { items: 3 },
                      768: { items: 3 },
                      991: { items: 3 },
                      1200: { items: 6 },
                      1920: { items: 6 },
                    }"
              :margin="0"
              :center="true"
              :nav="false"
          >
            <a
                :href="categoria.imagen"
                :key="i"
                v-for="(categoria, i) in categorias"
            >
              <div style="width: 50%;">
                <img class="align-center text-center" :alt="categoria.titulo" :src="categoria.imagen">
                <p class="align-center text-center"> {{categoria.titulo}} </p>
              </div>
            </a>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  },
  name: "QueBuscasHoy",
  data() {
    return {
      categorias_raw: [
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
      ],
      categorias: [
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
        {'titulo': 'Infantil', 'id': '', 'imagen': 'test/que-buscas-hoy.png'},
      ],
    };
  },
  mounted() {
    this.getCategorias();
  },
  methods: {
    getCategorias() {
      for (let i = 0; i < 6; i++) {
        this.categorias[i].titulo = this.categorias_raw[i].titulo;
        this.categorias[i].imagen = this.categorias_raw[i].imagen;
      }
    },
  }
}
</script>