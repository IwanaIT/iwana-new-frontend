<template>
  <div class="single-blog-card card border-0 shadow-sm">
    <div class="card-header" style="background: #FFFFFF">
      <h5>Cashbacks</h5>
    </div>
    <div class="meta-date card-body">
      <div class="card" v-for="(cashback, i) in cashbacks" :key="i">
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <p class="card-title ">{{ cashback.titulo }}</p>
              <h5 class="card-text color-iwana-primary">{{ cashback.porcentaje }}% de Casback</h5>
            </div>
            <div class="col-md-4">
              <a class="btn btn-outline-info btn-outline-iwana" :href="cashback.link" >Comprar Ahora</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Cashbacks",
  props: [
    'cashbacks'
  ],
}
</script>