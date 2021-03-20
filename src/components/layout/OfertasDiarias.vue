<template>
  <section class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center mb-5 ">
            <h2 class="color-iwana-primary">Papitas del Cashback</h2>
            <p class="lead">Aprovecha las ofertas de nuestros partners!</p>
          </div>
        </div>
      </div>

        <div v-if="!isLoading" class="text-center py-3">
          <div class="screen-slider-content mt-5">
            <carousel
                :autoplay="true"
                :dots="true"
                :responsive="{
                        0: { items: 1 },
                        768: { items: 1 },
                        991: { items: 3 },
                        1200: { items: 4 },
                        1920: { items: 4 },
                    }"
                :margin="0"
                :center="true"
                :nav="false"
                class="screen-carousel owl-carousel owl-theme dot-indicator owl-loaded owl-drag"
            >
              <div :key="i" v-for="(ofertaDiaria, i) in ofertasDiarias">
                <div class="card profile-card-2 mr-2">
                  <div class="card-img-block">
                    <img class="img-fluid" :src="ofertaDiaria.imagenProducto" alt="Card image cap"/>
                  </div>
                  <div class="card-body pt-5 ">
                    <img :src="ofertaDiaria.rutaImagenTienda" alt="profile-image" class="profile"/>
                    <h5 class="card-title">{{ofertaDiaria.nombre}}</h5>
                    <p class="card-text" v-html="ofertaDiaria.descripcion"></p>
                    <div class="icon-block">
                      <a type="button" class="mt-auto btn btn-lg btn-block btn-outline-primary" href="">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>

    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
// import axios from "axios";

export default {
  name: "OfertasDiarias",
  components: {
    carousel
  },
  data() {
    return {
      isLoading: false,
      ofertasDiarias: [
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
        {'imagenProducto': 'test/que-buscas-hoy.png', 'rutaImagenTienda': 'test/que-buscas-hoy.png', 'nombre': 'lorem', 'descripcion': 'lorem ipsum'},
      ],
    };
  },
  methods: {
    getOfertasDiarias() {
      // axios.get('/api/frontend/public/cashbacks/CL/ofertas-diarias').then(response => {
      //   this.ofertasDiarias = response.data.data;
      //   this.isLoading = false;
      // })
    }
  },
  mounted() {
    this.getOfertasDiarias();
  }
}
</script>

<style scoped>
.profile-card-2 .card-img-block {
  float: left;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.profile-card-2 .card-body {
  position: relative;
}

.profile-card-2 .profile {
  border-radius: 50%;
  position: absolute;
  top: -42px;
  left: 15%;
  max-width: 75px;
  border: 3px solid rgba(255, 255, 255, 1);
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

.profile-card-2 h5 {
  font-weight: 600;
  color: #007bff;
}

.profile-card-2 .card-text {
  font-weight: 300;
  font-size: 15px;
}

.profile-card-2 .icon-block {
  float: left;
  width: 100%;
}

.profile-card-2 .icon-block a {
  text-decoration: none;
}

.profile-card-2 i {
  display: inline-block;
  font-size: 16px;
  color: #007bff;
  text-align: center;
  border: 1px solid #007bff;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  margin: 0 5px;
}

.profile-card-2 i:hover {
  background-color: #007bff;
  color: #fff;
}
</style>