<template>
  <div class="single-blog-card card border-0 shadow-sm">
    <div class="card-header" style="background: #FFFFFF">
      <h5>Términos y Condiciones</h5>
    </div>
    <div class="meta-date card-body" v-html="TerminosYCondiciones">
    </div>
  </div>
</template>

<script>


export default {
  name: "TerminosYCondiciones",
  props: [
    'TerminosYCondiciones'
  ],
}
</script>