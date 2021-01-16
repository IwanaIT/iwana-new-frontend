<template>
  <footer class="footer-section">
    <div class="footer-top py-5  bg-footer-custom">
      <div class="container">
        <div class="row justify-content-between">


          <div class="col-lg-4 ml-auto mb-4 mb-lg-0">
            <div class="footer-nav-wrap ">
              <h5 class="mb-3">Nosotros</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#">Ayuda IwanaCash</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 ml-auto mb-4 mb-lg-0">
            <div class="footer-nav-wrap ">
              <h5 class="mb-3">Nuestras Reglas</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#">Políticas de Privacidad</a></li>
                <li class="mb-2"><a href="#">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 ml-auto mb-4 mb-lg-0">
            <div class="footer-nav-wrap ">
              <h5 class="mb-3">Nuestras Redes Sociales</h5>
              <div class="social-list-wrap">
                <ul class="social-list list-inline list-unstyled">
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Facebook">
                      <span class="ti-facebook"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Instagram">
                      <span class="ti-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/56920890615" target="_blank" class="whatsapp-button w-75 small-text">
                <button class="btn btn-white rounded-pill py-2 px-2 shadow small-text mt-3 w-100">
                  <img src="/img/whatsapp_new.svg" class="mr-1 whatsapp-new">Chat vía Whatsapp
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <p class="copyright-text pb-0 mb-0 mt-5">
            © 2021 Iwana. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.bg-footer-custom {
  background: transparent linear-gradient(180deg, #f7fdfd 0%, #d1fff0 100%) 0% 0% no-repeat padding-box;
}
</style>