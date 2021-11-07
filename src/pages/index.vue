<template>
  <div class="flex flex-col items-center">
    <img alt="Vue logo" src="@/assets/logo.png" class="vue-logo w-32" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <router-link class="font-bold" to="/about">
      Go to the about page
    </router-link>
    <input v-model="name" class="text-center w-70" type="text" placeholder="Enter text here to go to a dynamic page" @keydown.enter="go">
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const name = ref('')

const go = () => {
  if (name.value)
    router.push(`/users/${encodeURIComponent(name.value)}`)
}
</script>
