<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'home'}">Portada</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'aboutme'}">Sobre mí</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'contact'}">Contacto</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/post/ultimo-post">Ultimo post</router-link></li>
                </ul>
        </div>
        </div>
    </nav>
    <transition name="v8vue">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v8vue-enter-active,
.v8vue-leave-active {
  transition: opacity 0.8s ;
}
.v8vue-enter,
.v8vue-leave-to {
  opacity: 0;
}
</style>
