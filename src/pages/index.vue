<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')

function go() {
  if (name.value)
    router.push(`/users/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div
    class="flex-div text-white font-bold"
  >
    <img alt="Vue logo" src="@/assets/logo.png" class="vue-logo w-32">
    <HelloWorld />
    <router-link class="font-bold" to="/about">
      Go to the about page
    </router-link>
    <input
      v-model="name"
      class="w-72 text-center bg-gray-800"
      type="text"
      placeholder="Enter text here to go to a dynamic page"
      @keydown.enter="go"
    >
  </div>
</template>

<style lang="scss">
.flex-div {
  @apply flex flex-col items-center pt-16;
}
</style>
