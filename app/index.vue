<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

useHead({
  title: 'The Crowned Lion'
})

onCreated(() => {
  AOS.init()
})
</script>

<template>
  <div class="prose lg:prose-xl">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
</style>
