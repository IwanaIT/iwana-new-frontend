<template>
  <div class="single-blog-card card border-0 shadow-sm text-center">
    <div class="meta-date card-body">
      <img
          :src="'test/que-buscas-hoy.png'"
          class="card-img-top position-relative p-3 img-fluid"
          alt="blog"
          style="max-width:70%;"
      />
      <h5 class="card-title">{{ nombreTienda }}</h5>
      <h4 class="color-iwana-primary">Hasta {{ porcentajeCashback }} de Cashback</h4>
      <br>
      <b-button variant="outline-info">Comprar Ahora</b-button>
    </div>
  </div>
</template>

<script>


export default {
  name: "PerfilTienda",
  props: [
    'nombreTienda',
    'porcentajeCashback'
  ],
}
</script>