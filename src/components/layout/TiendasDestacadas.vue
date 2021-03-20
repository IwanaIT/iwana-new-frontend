<template>
  <section class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center mb-5 ">
            <h2 class="color-iwana-primary">Tiendas destacadas con devolución</h2>
          </div>
        </div>
      </div>
      <div class="row equal">
        <div v-for="(tiendaDestacada, i) in tiendasDestacadas" class="col-md-3" v-bind:key="i">
          <div class="single-blog-card card border-0 shadow-sm">
            <span class="category position-absolute badge badge-pill badge-primary">
              5% Cashback
            </span>
            <img
                :src="'test/que-buscas-hoy.png'"
                class="card-img-top position-relative p-3"
                alt="blog"
            />
            <div class="meta-date card-body">
              hola
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TiendasDestacadas",
  data() {
    return {
      tiendasDestacadas: [
        {'innerId': 1, 'id': '', 'imagen': ''},
        {'innerId': 2, 'id': '', 'imagen': ''},
        {'innerId': 3, 'id': '', 'imagen': ''},
        {'innerId': 4, 'id': '', 'imagen': ''},
        {'innerId': 5, 'id': '', 'imagen': ''},
        {'innerId': 6, 'id': '', 'imagen': ''},
        {'innerId': 7, 'id': '', 'imagen': ''},
        {'innerId': 8, 'id': '', 'imagen': ''},
      ],
    };
  },
  mounted() {
    this.getTiendasDestacadas();
  },
  methods: {
    getTiendasDestacadas() {
      // axios
      //     .get('/api/frontend/public/tiendas/CL/tiendas-destacadas')
      //     .then(response => {
      //       for (let i = 0; i < 8; i++) {
      //         let tienda = response.data.data[i];
      //         this.tiendasDestacadas[i].id = tienda.id
      //         this.tiendasDestacadas[i].imagen = tienda.imagen
      //       }
      //     })
    }
  }
}
</script>