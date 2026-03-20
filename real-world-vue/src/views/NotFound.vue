<script setup lang="ts">
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page',
  },
})
</script>

<template>
  <h1>Vaya</h1>
  <h3>Actualmente no disponemos de la pagina {{ resource }} que ha intentado entrar,no existe</h3>
  <RouterLink :to="{ name: 'event-list' }">Volver al inicio</RouterLink>
</template>
