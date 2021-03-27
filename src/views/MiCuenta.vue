<template>
  <div>
    <nav-bar/>
    <div class="main">
      <section class="hero-section pt-100 banner-section gray-light-bg">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="single-blog-card card border-0 shadow-sm">
                <div class="meta-date card-body">
                  <div class="list-group" id='listGroup'>
                    <a class="nav-link" @click.prevent="setActive('mi-cuenta')" :class="{ active: isActive('home') }" href="#home">Mi Cuenta</a>
                    <a class="nav-link" @click.prevent="setActive('tienda-favorita')" :class="{ active: isActive('profile') }" href="#profile">Tiendas Favoritas</a>

                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-9">
                <detalle-mi-cuenta
                    :show="showMiCuenta"
                />
                <tiendas-favoritas
                    :show="showTiendaFavorita"
                />

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
import DetalleMiCuenta from "../components/mi-cuenta/DetalleMiCuenta";
import TiendasFavoritas from "../components/mi-cuenta/TiendasFavoritas";

export default {
  name: "MiCuenta",
  components: {
    NavBar,
    FooterLanding,
    DetalleMiCuenta,
    TiendasFavoritas
  },
  data() {
    return {
      selected: 0,
      showMiCuenta: true,
      showTiendaFavorita: false,
      activeItem: 'home',
      show: true
    };
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      if(this.showMiCuenta === true){
        this.showMiCuenta = false;
        this.showTiendaFavorita = true;

      } else {
        this.showMiCuenta = true;
        this.showTiendaFavorita = false;
      }
      // this.show = (this.show == true) ?false : true;
      this.activeItem = menuItem
    }
  }
}
</script>