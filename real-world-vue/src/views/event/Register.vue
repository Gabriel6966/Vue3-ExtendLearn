<script setup>
import { useRouter } from 'vue-router'
import { defineProps, inject } from 'vue'
//Aqui llamamos al padre(layout.vue)
const { event } = defineProps(['event'])
const GStore = inject('GStore')
//Para el router.push
const router = useRouter()

const registrarte = () => {
  GStore.flashMessage = 'Te has registrado correctamente en el evento ' + event.title

  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  //Si la llamada a la API con la registracion es correcta
  //Que nos lleve de vuelta al event details
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
