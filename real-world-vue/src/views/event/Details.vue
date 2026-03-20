<script setup lang="ts">
//Lo mismo clase
interface Event {
  id: number
  title: string
  time: string
  date: string
  location: string
  description: string
}

defineProps<{
  event: Event
}>()
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
