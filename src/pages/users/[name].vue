<template>
  <div>
    <h1>Welcome to your dynamic page {{ props.name }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>
