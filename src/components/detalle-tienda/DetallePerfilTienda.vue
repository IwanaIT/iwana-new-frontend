<template>
  <div class="single-blog-card card border-0 shadow-sm">
    <div class="meta-date card-body">
      <h5>Acerca de {{ nombreTienda }}</h5>
      <p v-html="descripcion"></p>
      <p v-html="tiposCashback"></p>
    </div>
  </div>
</template>

<script>


export default {
  name: "DetallePerfilTienda",
  props: [
    'nombreTienda',
    'descripcion',
    'tiposCashback'
  ],
  data() {
    return {};
  },
  methods: {},
  mounted() {

  }
}
</script>