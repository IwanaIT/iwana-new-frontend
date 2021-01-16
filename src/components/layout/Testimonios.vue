<template>
  <section class="testimonial-section ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-6">
          <div class="hero-content-left position-relative mt-lg-0 mt-md-0 mt-5">
            <h1>
              <span>¿Qué es el Cashback?</span>
            </h1>
            <div class="video-promo-content mt-4 d-flex align-items-center">
              <a
                  href="#"
                  @click="showYouTubeModal"
                  class="popup-youtube video-play-icon"
              ><span class="ti-control-play"></span>
              </a>
              <span class="ml-4">Acá te explicamos</span>
            </div>
          </div>

        </div>
        <div class="col-md-5 owl-custom-nav-parent" v-if="opinionesClientes.length >0">
          <carousel
              ref="oc"
              :autoplay="true"
              :dots="false"
              class="owl-carousel owl-theme client-testimonial arrow-indicator owl-loaded owl-drag"
              :loop="true"
              :margin="30"
              :nav="true"
              :responsiveClass="true"
              :autoplayHoverPause="true"
              :lazyLoad="true"
              :items="1"
              :nav-text="navText"
          >
            <div class="item" :key="index" v-for="(opinion, index) in opinionesClientes">
              <div class="testimonial-quote-wrap">
                <div class="media author-info mb-3">
                  <div class="author-img mr-3">
                    <img
                        :src="opinion.imageUrl"
                        alt="client"
                        class="img-fluid rounded-circle"
                    />
                  </div>
                  <div class="media-body">
                    <h5 class="mb-0">{{opinion.name}}</h5>
                  </div>
                </div>
                <div class="client-say">
                  <p>
                    <img src="img/quote.png" alt="quote" class="img-fluid"/>
                    {{opinion.review}}
                  </p>
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>

    <YTModal
        url="https://www.youtube.com/watch?v=5c1GX8mZXIw&ab_channel=IwanaCash"
        v-if="showModal"
        @close="showModal = false"
    >
      This is my first modal
    </YTModal>

  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import YTModal from "@/components/YTModal";

export default {
  name: "Testimonios",
  components: {carousel, YTModal},
  props: {
    isGray: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navText: ["‹", "›"],
      showModal: false,
      opinionesClientes: [],
    };
  },
  mounted() {
    this.getOpinionesClientes();
  },
  methods: {
    showYouTubeModal: function (e) {
      e.preventDefault();
      this.showModal = true;
    },
    getOpinionesClientes() {
      let opiniones = [
        {
          imageUrl: "images/clientes/cristian-comment.jpg",
          review: "Me gusta, es súper cómoda. La experiencia es buena, porque es plata que no tenía considerada, así que “bkn” y puedo sacarlas como un regalo de mi yo del pasado por haber comprado cosas.",
          name: "Cristian Gallegos Soto",

        },
        {
          imageUrl: "images/clientes/ignacia-comment.jpg",
          review: "Me gusta que es súper fácil de usar, lo único que tienes que hacer es meterte a la página y entrar por ahí a la tienda en la que se quiere comprar. No se tiene que enviar documentos o algo, como en otras páginas de cashback donde debes enviar la boleta, que es una “lata”, porque si no lo envías no se suma el cashback, entonces hay que acordarse de eso.",
          name: "Ignacia Nuñez"
        },
        {
          imageUrl: "images/clientes/franco-comment.jpg",
          review: "La página es rápida, funciona bien, es intuitiva, hasta ahora nunca jamás se me ha caído y nunca ha andado lenta, ni siquiera para el CyberDay, que andaba perfecto. Antes había usado otro servicio de cashback, que funciona acá en Chile, y ni parecido.",
          name: "Franco Fernández",
        },
        {
          imageUrl: "images/clientes/marcelo-comment.jpg",
          review: "Que me devuelvan un % de mi compra, lo encuentro sumamente espectacular y ya he retirado dinero en dos oportunidades.",
          name: "Marcelo Lorca Márquez",
        },

        {
          imageUrl: "images/clientes/judith-comment.jpg",
          review:
              "La plataforma es clara, explícita y una coloca una cuenta y no tiene que andar preguntando ni llamando, para saber el cashback, porque está todo clarito en la página. Es fácil de utilizar.",
          name: "Judith San Martín Parra",
        },
      ];
      this.opinionesClientes = opiniones;
    }
  },
};
</script>

<style>
.owl-custom-nav-parent .owl-carousel .owl-nav .owl-next:hover {
  color: #ffffff !important;
}

.owl-custom-nav-parent .owl-carousel .owl-nav .owl-prev:hover {
  color: #ffffff !important;
}


</style>