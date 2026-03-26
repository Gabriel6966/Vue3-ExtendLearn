<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import EventServices from '../services/EventService.js'
import EventCard from '../components/EventCard.vue'
import { useRouter } from 'vue-router'
import type { Event } from '@/types/Event'

//Le pasamos el tipado estricto de ts
const props = defineProps<{ page: number }>()
const events = ref<Event[] | null>(null)
const router = useRouter()

const totalEventos = ref(0)

const compSiguientePagina = computed(() => {
  const totalPagina = Math.ceil(totalEventos.value / 2)
  return props.page < totalPagina
})

//Dos formas de hacerlo
//1.
//const fetchEvents = () => {
//  EventServices.getEvents(2, props.page)
//    .then((response) => {

//      //Controlador para que el bucle busque dentro del data y controlamos en caso de que este fuera del data

//      events.value = response.data.data || response.data
//
//      let total = response.data.items || response.headers["x-total-count"]
//      totalEventos.value = parseInt(total) || 3
//    })
//    .catch((error) => {
//      console.log(error)
//    })
//}

//2.En caso de que la pagina tenga pausas a la hora de pasarnos de una a otra pag"async""
const fetchEvents = async () => {
  try {
    //Hacemos un await hasta que el eventservices nos de una respuesta
    const respuesta = await EventServices.getEvents(2, props.page)

    //operador de JS en donde devuelve la respuesta tanto derecha o izquierda,sin que seal null
    //el operador || si que nos podria dar problemas
    events.value = respuesta.data.data ?? respuesta.data
    totalEventos.value = respuesta.data.items ?? respuesta.headers['x-total-count'] ?? 3
  } catch (error) {
    router.push({ name: 'NetworkError' })
  }
}

// Ejecuta al cargar el componente
onMounted(() => {
  fetchEvents()
})

//Esto actualiza a la hora de moverte de una pag a otra
watch(
  () => props.page,
  () => {
    //Esto hace que a la hora de que pulsar la siguiente pag no se quede en la primera y no de la sensacion de que no pulsaste el "Next Page"
    ;((events.value = null), fetchEvents())
  },
)
</script>

<template>
  <h1>Events Title Here</h1>
  <!--A la hora de poner el .value(null) el v-if tiene que estar para que Vue no se ralle por el .id-->
  <div class="events" v-if="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="events" v-else aria-live="polite">Loading events...</div>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'event-list', query: { page: page - 1 } }"
      rel="prev"
      v-if="page > 1"
    >
      Return Page
    </router-link>

    <router-link
      id="page-next"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      v-if="compSiguientePagina"
      >Next Page</router-link
    >
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
  margin: 0 auto;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
