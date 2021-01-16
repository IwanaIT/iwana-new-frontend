<template>
  <form class="login-signup-form">
    <div class="form-group">
      <label class="pb-1">Correo Electrónico</label>
      <div class="input-group input-group-merge">
        <div class="input-iwana-icon">
          <span class="ti-email color-iwana-primary"></span>
        </div>
        <input type="email" class="form-control" placeholder="Correo Electrónico"/>
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
        <input type="password" class="form-control" placeholder="Ingrese una Contraseña"/>
      </div>
    </div>

    <!-- Submit -->
    <div class="mb-4">
      <button class="btn btn-lg btn-block solid-iwana-btn border-radius mt-4 mb-3">
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
</template>

<script>
export default {
  name: "LoginBox"
}
</script>

<style scoped>

</style>