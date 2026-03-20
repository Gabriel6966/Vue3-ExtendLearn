<script setup lang="ts">
import type { Event } from '@/types/Event'

defineProps<{
  event: Event
}>()

//const props = defineProps(['event'])
</script>

<template>
  <p>Edit here of the event</p>
</template>
