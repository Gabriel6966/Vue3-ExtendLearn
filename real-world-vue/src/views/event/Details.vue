<script setup lang="ts">
import type { Event } from '@/types/Event'

defineProps<{
  event: Event
}>()
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
