<template>
  <div>
    <nav-bar/>
    <div class="main">
      <section class="hero-section pt-100 banner-section gray-light-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="test/banner-whole.jpg" class="img-fluid">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12 col-md-4">
              <perfil-tienda
                  :nombre-tienda="nombreTienda"
                  :porcentaje-cashback="porcentajeCashback"
              />
              <detalle-perfil-tienda
                  :nombre-tienda="nombreTienda"
                  :descripcion="descripcion"
                  :tipos-cashback="tiposCashback"
              />
            </div>
            <div class="col-sm-12 col-md-8">
              <terminos-y-condiciones
                  :terminos-y-condiciones="terminosYCondiciones"
              />
              <cashbacks
                  :cashbacks="cashbacks"
              />
              <ahorro-inteligente/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar";
import PerfilTienda from "../components/detalle-tienda/PerfilTienda";
import DetallePerfilTienda from "../components/detalle-tienda/DetallePerfilTienda";
import TerminosYCondiciones from "../components/detalle-tienda/TerminosYCondiciones";
import Cashbacks from "../components/detalle-tienda/Cashbacks";
import AhorroInteligente from "../components/detalle-tienda/AhorroInteligente";

export default {
  name: "Tienda",
  components: {
    NavBar,
    PerfilTienda,
    DetallePerfilTienda,
    TerminosYCondiciones,
    Cashbacks,
    AhorroInteligente
  },
  data() {
    return {
      nombreTienda: '',
      descripcion: '',
      tiposCashback: '',
      terminosYCondiciones: '',
      porcentajeCashback: '',
      cashbacks: [
        {'titulo': 'Todas las categorias', 'porcentaje': '6', 'link': '#'},
        {'titulo': 'Todas las categorias', 'porcentaje': '6', 'link': '#'},
        {'titulo': 'Todas las categorias', 'porcentaje': '6', 'link': '#'},
      ]
    };
  },
  methods: {
    getDataTienda() {
      this.nombreTienda = 'Abcdin';
      this.porcentajeCashback = '6%';
      this.descripcion = '¡En Abcdin.cl sabemos de Tecnología! Y te la ofrecemos al mejor precio. Encuentra lo mejor en Smartphones, Notebooks, LED y Audio, Linea Blanca y mucho más. Despachamos tus compras a todo Chile o si prefieres, ¡retira tus compras gratis en tu tienda Abcdin más cercana!';
      this.tiposCashback = '<h5>¿En Abcdin puedes obtener Cashback?</h5><p>¡Sí! En toda la tienda</p>';
      this.terminosYCondiciones = 'Categorías: Todas.Tiempo promedio espera Cashback: 2 meses.'
    },
  },
  mounted() {
    this.getDataTienda();
  }
}
</script>