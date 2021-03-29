<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
      <tiendas-destacadas/>

      <que-buscas-hoy/>
      <como-comprar/>
      <destacado-en/>
      <ofertas-diarias/>

      <testimonios/>
      <partners/>
      <footer-landing/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar";
import Banner from "../components/layout/Banner";
import ComoComprar from "../components/layout/ComoComprar";
import DestacadoEn from "../components/layout/DestacadoEn";
import Testimonios from "../components/layout/Testimonios";
import Partners from "../components/layout/Partners";
import FooterLanding from "../components/layout/Footer";
import QueBuscasHoy from "../components/layout/QueBuscasHoy";
import TiendasDestacadas from "../components/layout/TiendasDestacadas";
import OfertasDiarias from "../components/layout/OfertasDiarias";

export default {
  name: "Home",
  components: {
    NavBar,
    QueBuscasHoy,
    Banner,
    ComoComprar,
    DestacadoEn,
    Testimonios,
    Partners,
    FooterLanding,
    TiendasDestacadas,
    OfertasDiarias
  },
}
</script>