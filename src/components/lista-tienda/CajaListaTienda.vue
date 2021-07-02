<template>
  <div class="single-blog-card card border-0 shadow-sm h-100">
    <div class="meta-date card-body">
      <h5 class="card-title">Tiendas Asociadas</h5>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="(tienda, $index) in tiendas" :key="$index" class="col mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <img
                  :src="'test/que-buscas-hoy.png'"
                  class="card-img-top position-relative p-3 img-fluid"
                  alt="blog"
              />
              <h5 class="card-title">{{ tienda.nombre }}</h5>
              <p class="card-text">Hasta 5% de Cashback</p>
            </div>
          </div>
        </div>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "CajaListaTienda",
  components: {
    InfiniteLoading
  },
  data() {
    return {
      tiendas: [],
    };
  },
  methods: {
    infiniteHandler($state) {
      let url = '/api/frontend/public/tiendas/CL/tiendas';
      axios.get(url, {
        params: {
          page: this.page,
        },
      }).then((response) => {
        if (response.data.data.length) {
          this.page += 1;
          this.tiendas.push(...response.data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
}
</script>