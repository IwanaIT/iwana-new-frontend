<template>
  <div>
    <nav-bar/>
    <div class="main">
      <section class="hero-section pt-100 banner-section gray-light-bg">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <div class="list-group" id='listGroup'>
                <a href="#" class="list-group-item" v-bind:class="{ 'active' : isSelected(0) }" v-on:click="selected = 0">Cras justo odio</a>
                <a href="#" class="list-group-item" v-bind:class="{ 'active' : isSelected(1) }" v-on:click="selected = 1">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item" v-bind:class="{ 'active' : isSelected(2) }" v-on:click="selected = 2">Morbi leo risus</a>
                <a href="#" class="list-group-item" v-bind:class="{ 'active' : isSelected(3) }" v-on:click="selected = 3">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item" v-bind:class="{ 'active' : isSelected(4) }" v-on:click="selected = 4">Vestibulum at eros</a>
              </div>
            </div>
            <div class="col-md-10">
              <div class="single-blog-card card border-0 shadow-sm">
                <div class="meta-date card-body">
                  hola
                </div>
              </div>
              <div class="single-blog-card card border-0 shadow-sm">
                <div class="meta-date card-body">
                  chao
                </div>
              </div>
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

export default {
  name: "MiCuenta",
  components: {
    NavBar,
    FooterLanding
  },
  data() {
    return {
      selected: 0
    };
  },
  methods: {
    isSelected: function (i) {
      return i === this.selected
    }
  }
}
</script>