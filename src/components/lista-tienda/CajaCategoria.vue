<template>
  <div class="single-blog-card card border-0 shadow-sm">
    <div class="meta-date card-body">
      <h5 class="card-title">Categorías</h5>
      <div class="overflow-auto categoria-box">
        <div v-for="(categoria, index) in categorias" :key="index">
          <p>{{ categoria.nombre }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CajaCategoria",
  data() {
    return {
      categorias: [],
    };
  },
  mounted() {
    this.getCategorias();
  },
  methods: {
    getCategorias() {
      let url = 'api/frontend/public/categorias/CL/categorias';
      let category = [];
      axios.get(url).then((response) => {
        response.data.data.map(function (value) {
          category.push({
            'id': value.id,
            'nombre': value.nombre
          })
        });
        this.categorias = category;
      });
    },
  }
}
</script>

<style scoped>
.categoria-box {
  max-width: 100%;
  max-height: 500px;
}
</style>