<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'

interface GStoreType {
  flashMessage: string
}
const GStore = inject<GStoreType>('GStore')
</script>

<template>
  <div id="layout">
    <header>
      <!--Añadimos el ? para indicarle si existe hace el msg si no nada-->
      <div id="flashMessage" v-if="GStore?.flashMessage">
        {{ GStore.flashMessage }}
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

/* 1. La animación: hace que el color amarillo se desvanezca poco a poco */
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
</style>
