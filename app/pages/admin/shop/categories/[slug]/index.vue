<script setup lang="ts">
const route = useRoute()
console.log(route);

</script>

<template>
  <div class="container mx-auto mt-24">
    <div class="">
      <h1 class="font-bold text-2xl pb-4">Unterkategorien</h1>
    </div>
    <ShopAdminSubcategories/>
  </div>
</template>
