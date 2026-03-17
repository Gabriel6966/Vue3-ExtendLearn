<script setup>
import {ref, onMounted} from 'vue'
import EventService from '@/services/EventService.js'

const event =ref(null)
const id = ref(123)


onMounted(()=>{
    //Fetch a un event por su id
    EventService.getEvents(id.value)
  .then((response)=>{
    event.value = response.data
  })
  .catch((error)=>{
    console.log(error)
  })
})
</script>

<template>
    <div v-if="event">
        <h1>{{event.title}}</h1>
        <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
        <p>{{event.description}}</p>
    </div>
    <div v-else>
        <p>Cargando evento...</p>
    </div>
</template>