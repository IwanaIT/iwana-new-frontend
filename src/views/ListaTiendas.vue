<template>
  <div>
    <nav-bar/>
    <div class="main">
      <section class="hero-section pt-100 banner-section gray-light-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <caja-categoria/>
            </div>
            <div class="col-sm-12 col-md-8">
              <caja-lista-tienda />
            </div>
          </div>
        </div>
      </section>
      <footer-landing/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar";
import FooterLanding from "../components/layout/Footer";
import CajaCategoria from "../components/lista-tienda/CajaCategoria";
import CajaListaTienda from "../components/lista-tienda/CajaListaTienda";

export default {
  name: "ListaTiendas",
  components: {
    CajaListaTienda,
    NavBar,
    FooterLanding,
    CajaCategoria
  },
  data() {
    return {
    };
  },
}
</script>

