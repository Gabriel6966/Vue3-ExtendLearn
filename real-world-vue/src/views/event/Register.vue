<script setup>
import router from '@/router';
import { useRouter } from 'vue-router';
//Aqui llamamos al padre(layout.vue)
const props =defineProps(["event"])
const registrarte =() =>{
    //Si la llamada a la API con la registracion es correcta
    //Que nos lleve de vuelta al event details
    router.push({
        name: 'EventDetails',
        //Como tenemos en el index,js el :id en el path no hace falta pasarle el id aqui
        //id: props.event.id
    })
    
}

</script>

<template>
    <p>Register of the event</p>
    <button @click="registrarte">Registrate ahora</button>
</template>