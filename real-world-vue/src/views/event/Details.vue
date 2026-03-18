<script setup>
//Aqui llamamos al padre(layout.vue)
const props =defineProps(["event"])
</script>

<template>

        <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
        <p>{{event.description}}</p>

</template>