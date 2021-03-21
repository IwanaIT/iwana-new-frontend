<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner2/>
      <que-buscas-hoy/>
      <como-comprar/>
      <destacado-en/>
      <ofertas-diarias/>
      <tiendas-destacadas/>
      <testimonios/>
      <partners/>
      <footer-landing/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar";
import Banner2 from "../components/layout/Banner2";
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
    Banner2,
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