<template>
  <section class="promo-section ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center mb-5 ">
            <h2 class="color-iwana-primary">Tiendas destacadas con devolución</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(tiendaDestacada, i) in tiendasDestacadas" class="col-sm-6 col-md-2" v-bind:key="i">
          <div class="card border-0 shadow-sm mb-4">
            <div>
            <span class="position-absolute badge iwana-badge-color">
              {{ tiendaDestacada.maxCashback }}% Cashback
            </span>
            </div>
            <div class="meta-date card-body">
              <v-lazy-image
                  :src="tiendaDestacada.imagen"
                  src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
                  :alt="tiendaDestacada.nombre"
                  class="card-img-top position-relative p-3 img-fluid"
              />
              <div class="icon-block">
                <a type="button" class="mt-auto btn btn-lg btn-block btn-outline-info btn-outline-iwana small" href="">Ver Tienda</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import VLazyImage from "v-lazy-image";

export default {
  name: "TiendasDestacadas",
  components: {
    VLazyImage
  },
  data() {
    return {
      tiendasDestacadas: [],
    };
  },
  mounted() {
    this.getTiendasDestacadas();
  },
  methods: {
    getTiendasDestacadas() {
      axios
          .get('/api/frontend/public/tiendas/CL/tiendas-destacadas')
          .then(response => {
            let tiendas = []
            response.data.data.map(function (tienda) {
              tiendas.push({
                'id': tienda.id,
                'imagen': tienda.imagen,
                'nombre': tienda.nombre,
                'maxCashback': tienda.maxCashback
              })
            });
            this.tiendasDestacadas = tiendas;
          })
    }
  }
}
</script>

<style>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

.iwana-badge-color {
  background: #d9f8fd;
  color: #133f60
}
</style>