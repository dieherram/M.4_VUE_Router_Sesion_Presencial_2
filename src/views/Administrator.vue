<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('/assets/img/chevrolet-blazer.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1>
                <strong>{{ title }}</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    admin: {
      type: String,
    },
  },
  computed: {
    title() {
      if (this.admin == `simple`) {
        return "Bienvenido a la página del Admnistrador";
      } else if (this.admin == `avanzado`) {
        return "Esta página de administracion está en construcción. Intente como administrador simple";
      } else {
        return ("")
      }
    },
  },
};
</script>
