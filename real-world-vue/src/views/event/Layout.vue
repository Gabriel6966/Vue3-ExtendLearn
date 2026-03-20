<!--Padre de details,edit,register,asi no hacemos la llamada a la API 3 veces-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'
import router from '@/router'

const event = ref(null)
const props = defineProps({
  id: {
    required: true,
  },
})

onMounted(() => {
  //Fetch a un event por su id
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' },
        })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <!--Cuando hacemos un router-link por detras es como un router.push ({name:EventDetails})-->
      <router-link :to="{ name: 'EventDetails' }"> Detalles </router-link>
      <router-link :to="{ name: 'EventRegister' }"> Registrar </router-link>
      <router-link :to="{ name: 'EventEdit' }"> Editar </router-link>
    </div>
    <!--Funcion para que comparta el padre a los hijos el componente-->
    <router-view :event="event" />
  </div>
</template>
