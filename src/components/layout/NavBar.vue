<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top"
         v-bind:class="{
                affix: hasAffix,
                'custom-nav': coloredLogo,
                'bg-transparent': coloredLogo,
                'white-bg': coloredLogo,
            }"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img :src="'images/iwanacash-logo.svg'" width="220" alt="logo" class="img-fluid"/>
        </a>
        <button
            class="navbar-toggler color-iwana-primary"
            type="button"
            @click="mobileNavClicked"
            v-bind:class="{ collapsed: collapsed }"
        >
          <span class="ti-menu"></span>
        </button>
        <div
            class="collapse navbar-collapse main-menu h-auto"
            v-bind:class="{ show: !collapsed }"
            id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                  class="nav-link page-scroll dropdown-toggle"
                  href="#"
                  id="navbarDropdownCategoria"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
              >
                Categorías
              </a>
              <div class="dropdown-menu submenu" aria-labelledby="navbarDropdownCategoria" style="width: 800px">
                <div>
                  <b-card>
                    adf
                    adf
                  </b-card>
                </div>
                <div>
                  <b-card>
                    adf
                    adf
                  </b-card>
                </div>
                <router-link to="/">
                  Infantil
                </router-link>
                <router-link to="/">
                  <country-flag country='mx'/>
                  México
                </router-link>
              </div>
            </li>

            <li class="nav-item nav-link page-scroll">
              <router-link to="/tiendas">Tiendas</router-link>
            </li>
            <li class="nav-item nav-link page-scroll">
              <router-link to="#about" v-scroll-to="'#about'">Mi Cuenta</router-link>
            </li>
            <li class="nav-item nav-link page-scroll">
              <router-link to="#about" v-scroll-to="'#about'">Ofertas</router-link>
            </li>
            <li class="nav-item nav-link page-scroll">
              <router-link to="#about" v-scroll-to="'#about'">Tiendas</router-link>
            </li>
            <li class="nav-item nav-link page-scroll">
              <router-link to="#about" v-scroll-to="'#about'">Favoritos</router-link>
            </li>
          </ul>
        </div>


        <div class="collapse navbar-collapse main-menu h-auto" v-bind:class="{ show: !collapsed }" id="navbarUser">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                  class="nav-link page-scroll dropdown-toggle"
                  href="#"
                  id="navbarDropdownHome"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
              >

              </a>
              <div class="dropdown-menu submenu" aria-labelledby="navbarDropdownHome">
                <router-link to="/">
                  <country-flag country='cl'/>
                  Chile
                </router-link>
                <router-link to="/">
                  <country-flag country='mx'/>
                  México
                </router-link>
              </div>
            </li>

            <li class="nav-item nav-link page-scroll">

              <b-button variant="outline-info" v-b-modal.entrar>Entrar</b-button>
              <login-modal/>

            </li>
            <li class="nav-item nav-link page-scroll">
              <b-button variant="outline-info" v-b-modal.modal-1>Registrarse</b-button>
            </li>
          </ul>
        </div>
      </div>


    </nav>
  </header>
</template>

<script>
import LoginModal from "@/components/LoginModal";
import CountryFlag from 'vue-country-flag'

export default {
  props: {
    coloredLogo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LoginModal,
    CountryFlag
  },
  data: function () {
    return {
      windowTop: 0,
      collapsed: true,
      paises: [
        {'nombre': 'Chile', 'codigo': 'cl'},
        {'nombre': 'México', 'codigo': 'mx'},
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll: function () {
      this.windowTop = window.top.scrollY;
    },
    mobileNavClicked: function () {
      this.collapsed = !this.collapsed;
    },
    getPaises() {
      this.paises
    }
  },
  computed: {
    hasAffix: function () {
      return this.windowTop > 0;
    },
  },
};
</script>

