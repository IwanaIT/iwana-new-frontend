<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner2/>
      <como-comprar/>
      <destacado-en/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Banner2 from "@/components/layout/Banner2";
import ComoComprar from "@/components/layout/ComoComprar";
import DestacadoEn from "@/components/layout/DestacadoEn";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner2,
    ComoComprar,
    DestacadoEn,
  },
}
</script>

<style scoped>

</style>