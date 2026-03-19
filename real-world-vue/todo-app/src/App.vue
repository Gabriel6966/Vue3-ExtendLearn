<script setup>
import TodoApp from './components/TodoApp.vue';
</script>

<template>
  <todo-app/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
  #app {
    background-color: #597d9a;
    display: flex;
    justify-content: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; /* Corregido de 'white' que tenías */
    text-align: center;
    color: #2c3e50; /* Esto pondrá las letras en blanco puro */
}
</style>
