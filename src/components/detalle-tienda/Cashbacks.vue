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
              <h5 class="card-title">{{ cashback.titulo }}</h5>
              <p class="card-text">{{ cashback.porcentaje }} % de Casback</p>
            </div>
            <div class="col-md-4">
              <a class="btn btn-outline-info" :href="cashback.link" >Comprar Ahora</a>
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