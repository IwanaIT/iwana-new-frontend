<template>
  <b-modal
      centered
      id="entrar"
      title="Iniciar Sesión"
      title-class="text-center color-iwana-primary"
      :hide-footer="true"
  >
    <form v-on:submit="submit" method="post" id="loginForm" class="login-signup-form">
      <div class="form-group">
        <label class="pb-1">Correo Electrónico</label>
        <div class="input-group input-group-merge">
          <div class="input-iwana-icon">
            <span class="ti-email color-iwana-primary"></span>
          </div>
          <input v-model="email" required="required" type="email" name="email" class="form-control" placeholder="Correo Electrónico"/>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col">
            <label class="pb-1">Contraseña</label>
          </div>
          <div class="col-auto">
            <a href="password-reset.html" class="form-text small text-muted">
              ¿Olvidó su contraseña?
            </a>
          </div>
        </div>
        <div class="input-group input-group-merge">
          <div class="input-iwana-icon">
            <span class="ti-lock color-iwana-primary"></span>
          </div>
          <input v-model="password" type="password" name="password" class="form-control" placeholder="Ingrese una Contraseña"/>
        </div>
      </div>

      <!-- Submit -->
      <div class="mb-4">
        <button type="submit" class="btn btn-lg btn-block solid-iwana-btn border-radius mt-4 mb-3">
          Ingresar
        </button>
      </div>
      <p class="text-center">También puedes ingresar utilizando redes sociales</p>
      <div class="row justify-content-center">
        <div class="mr-1">
          <button class="btn facebook-btn">
            <b-icon icon="facebook" font-scale="2"/>
            Facebook
          </button>
        </div>
        <div>
          <button class="btn google-btn">
            <b-icon icon="google" font-scale="2"></b-icon>
            Google
          </button>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { LOGIN, LOGOUT } from "@/services/auth.service";

export default {
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit: function (e) {
      e.preventDefault();

      this.$store.dispatch(LOGOUT);

      let data = {
        "username": this.email,
        "password": this.password
      };

      this.$store.dispatch(LOGIN, data);
    }
  }
}
</script>

<style scoped>

</style>