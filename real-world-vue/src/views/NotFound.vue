<script setup lang="ts">
//En caso de que querramos un valor por defecto le añadimos el withDefaults
withDefaults(
  defineProps<{
    resource?: string
  }>(),
  {
    resource: 'page',
  },
)
</script>

<template>
  <h1>Vaya</h1>
  <h3>Actualmente no disponemos de la pagina {{ resource }} que ha intentado entrar,no existe</h3>
  <RouterLink :to="{ name: 'event-list' }">Volver al inicio</RouterLink>
</template>
