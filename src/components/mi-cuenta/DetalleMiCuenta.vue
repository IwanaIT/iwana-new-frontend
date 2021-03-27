<template>
  <fade-transition>
    <div v-show="show" :key="'larai'">Your content asdasd</div>
  </fade-transition>
<!--  <div class="single-blog-card card border-0 shadow-sm">-->
<!--    <div class="meta-date card-body">-->
<!--      <h5 class="card-title">Mi cuenta</h5>-->
<!--      <p class="card-text">Bienvenid@ Hernán Bozán a tu cuenta de devolución de efectivo. Manténte al día con toda la información de tu cuenta de Cash Back, Favoritos y notificaciones sobre la actividad de CashBack, ofertas de bonos especiales y más.</p>-->
<!--      <p class="card-text">Aprende como ganar CashBack en Iwana </p>-->

<!--      <div class="row">-->
<!--        <div class="col-md-4">-->
<!--          <div class="card">-->
<!--            <div class="card-body">-->
<!--              <h5 class="card-title">Saldo Cashback en efectivo</h5>-->
<!--              <p class="card-text">$ 11.796</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <div class="card">-->
<!--            <div class="card-body">-->
<!--              <h5 class="card-title">Cashback disponible</h5>-->
<!--              <p class="card-text">$ 7.449</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <div class="card">-->
<!--            <div class="card-body">-->
<!--              <h5 class="card-title">Cashback pendiente</h5>-->
<!--              <p class="card-text">$ 4.347</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
</template>

<script>

export default {
  props:[
    'show'
  ],
  name: "DetalleMiCuenta",

  data() {
    return {
      showThis: this.show
    }
  },
}
</script>