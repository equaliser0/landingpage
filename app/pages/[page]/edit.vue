<script setup lang="ts">
const router = useRouter()
const route = useRoute()

onBeforeMount(() => {
  console.log(route.params.page);
})
</script>

<template>
  <div>
    <section>
    </section>
  </div>
</template>
