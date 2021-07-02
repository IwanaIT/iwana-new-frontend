<template>
  <div>
    <nav-bar/>
    <div class="main">
      <section class="hero-section pt-100 banner-section gray-light-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img :src="bannerTienda" class="img-fluid" :alt="nombreTienda">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12 col-md-4">
              <perfil-tienda
                  :logo="logo"
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
import axios from "axios";
//import VLazyImage from "v-lazy-image";

export default {
  name: "Tienda",
  components: {
    NavBar,
    PerfilTienda,
    DetallePerfilTienda,
    TerminosYCondiciones,
    Cashbacks,
    AhorroInteligente,
    //VLazyImage
  },
  data() {
    return {
      logo: '',
      bannerTienda: '',
      nombreTienda: '',
      descripcion: '',
      tiposCashback: '',
      terminosYCondiciones: '',
      porcentajeCashback: '',
      cashbacks: []
    };
  },
  mounted() {
    this.getDataTienda();
  },
  methods: {
    getDataTienda() {
      let codigoPais = this.$route.params.pais;
      let nombreTienda = this.$route.params.nombreTienda;
      let url = '/api/frontend/public/tiendas/' + codigoPais + '/tienda/' + nombreTienda;
      axios
          .get(url)
          .then(response => {
            this.bannerTienda = response.data.data.tienda_banner;
            this.descripcion = response.data.data.tienda_descripcion;
            this.nombreTienda = response.data.data.tienda_nombre;
            this.terminosYCondiciones = response.data.data.tienda_terminos_y_condiciones;
            this.tiposCashback = response.data.data.tipoCashback;
            this.logo = response.data.data.tienda_imagen;
            this.porcentajeCashback = response.data.data.tienda_maximo_descuento;

            let cashbacksData = []
            response.data.data.cashbacks.map(function (cashbacks) {
              cashbacksData.push({
                'id': cashbacks.cashback_id,
                'porcentaje': cashbacks.cashback_descuento,
                'link': cashbacks.cashback_link,
                'titulo': cashbacks.cashback_nombre
              })
            });

            this.cashbacks = cashbacksData;
          })
    }
  },
}

</script>