<script setup lang="ts">
const router = useRouter()

onBeforeMount(() => {
  router.push('/shop')
})
</script>

<template>
  <section>
    <div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
      <ContentDoc path="/Terms-of-Use"/>
      <ContentDoc path="/Private-Policy"/>
    </div>
  </section>
</template>
