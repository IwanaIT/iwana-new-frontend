<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner2/>
      <como-comprar/>
      <destacado-en/>
      <testimonios/>
      <partners/>
      <footer-landing />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Banner2 from "@/components/layout/Banner2";
import ComoComprar from "@/components/layout/ComoComprar";
import DestacadoEn from "@/components/layout/DestacadoEn";
import Testimonios from "@/components/layout/Testimonios";
import Partners from "@/components/layout/Partners";
import FooterLanding from "@/components/layout/Footer";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner2,
    ComoComprar,
    DestacadoEn,
    Testimonios,
    Partners,
    FooterLanding
  },
}
</script>

<style scoped>

</style>