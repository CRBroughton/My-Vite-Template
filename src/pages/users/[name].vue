<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div>
    <h1 text="white">
      Welcome to your dynamic page {{ props.name }}
    </h1>
  </div>
</template>
