<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner2/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Banner2 from "@/components/layout/Banner2";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner2,
  },
}
</script>

<style scoped>

</style>