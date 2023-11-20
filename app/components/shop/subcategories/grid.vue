<script setup lang="ts">
import Subcategory from './subcategory'

// Array of widths corresponding to each item
let widths = ['w-full md:w-1/3', 'w-full md:w-1/3', 'w-full md:w-1/3', 'w-full md:w-1/2', 'w-full md:w-1/2', 'w-full md:w-1/4', 'w-full md:w-1/4', 'w-full md:w-1/4', 'w-full md:w-1/4', 'w-full md:w-full'];
const { category } = defineProps({
  category: Object,
  required: true
})
const subcategories = ref([])
onBeforeMount(async () => {
  for (const subcategory of category.subcategories) {
    const res = await getSubcategory(category.slug, subcategory)
    subcategories.value.push(res)
  }
  subcategories.value.forEach((subcat, index) => {
    subcat.width = widths[index]
  });
})
</script>
<template>
  <div class="flex flex-wrap justify-center w-full">
    <Subcategory class="w-1/2 md:flex-1 hover:w-[300px] hover:flex-none" v-for="subcategory in subcategories" :subcategory="subcategory"/>
  </div>
</template>
