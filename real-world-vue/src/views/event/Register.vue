<script setup lang="ts">
import { useRouter } from 'vue-router'
import { inject } from 'vue'

interface Event {
  id: number
  title: string
}
interface GStoreType {
  flashMessage: string
}

//Aqui llamamos al padre(layout.vue)
const { event } = defineProps<{ event: Event }>()
const GStore = inject<GStoreType>('GStore')
//Para el router.push
const router = useRouter()

const registrarte = () => {
  if (GStore) {
    GStore.flashMessage = 'Te has registrado correctamente en el evento ' + event.title

    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)
    //Si la llamada a la API con la registracion es correcta
    //Que nos lleve de vuelta al event details
  }
  router.push({
    name: 'EventDetails',
    //Como tenemos en el index,js el :id en el path no hace falta pasarle el id aqui
    //id: props.event.id
    params: {
      id: event.id,
    },
  })
}
</script>

<template>
  <p>Register of the event</p>
  <button @click="registrarte">Registrate ahora</button>
</template>
