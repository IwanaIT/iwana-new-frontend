<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Banner from "@/components/layout/Banner";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
  },
}
</script>

<style scoped>

</style>