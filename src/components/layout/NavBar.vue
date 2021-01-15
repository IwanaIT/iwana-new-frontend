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
            class="navbar-toggler"
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
                Categorías
              </a>
              <div class="dropdown-menu submenu" aria-labelledby="navbarDropdownHome">
                <router-link to="/">Demo Template 1</router-link>
              </div>
            </li>
            <li class="nav-item nav-link page-scroll">
              <router-link to="#about" v-scroll-to="'#about'">About</router-link>
            </li>
          </ul>
        </div>


        <div class="collapse navbar-collapse main-menu h-auto" v-bind:class="{ show: !collapsed }" id="navbarUser">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-link page-scroll">
              <button type="button" class="btn btn-outline-info">Entrar</button>
            </li>
            <li class="nav-item nav-link page-scroll">
              <b-button v-b-modal.modal-1>Launch demo modal</b-button>
              <button type="button" class="btn btn-outline-info">Registrarse</button>
            </li>
          </ul>
        </div>
      </div>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    coloredLogo: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      windowTop: 0,
      collapsed: true,
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
  },
  computed: {
    hasAffix: function () {
      return this.windowTop > 0;
    },
  },
};
</script>

