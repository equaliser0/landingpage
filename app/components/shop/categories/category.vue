<script setup lang="ts">
const { category } = defineProps({
  category: Object
})

const subcategories = []
if (category.subcategories) {
  for (const subcategory of category.subcategories) {
    subcategories.push(await getSubcategory(category, subcategory))
  }
}

const emit = defineEmits(['category-clicked'])

const expanded = ref(false);
const toggleDetails = () => {
  expanded.value = !expanded.value;
  emit('category-clicked', category, expanded.value);
};
</script>
<template>
  <button
    class="h-[400px] slider px-10 py-5 relative hover:border-white tracking-wider leading-none overflow-hidden bg-cover bg-center"
    :style="`background-image: url('${(category.image) ? `/uploads/${category.image}` : '/uploads/shop/product-placeholder.png'}')`"
    :key="category.id"
    @click="toggleDetails"
  >
    <div class="flex flex-col justify-start items-start absolute inset-0 bg-base-200/60 backdrop-blur-xl">
      <div class="w-full flex flex-col justify-start items-start text-left p-4">

        <div class="flex flex-col w-full justify-center items-center h-full pt-2">
          <div class="flex w-full justify-center m-2 tooltip" data-tip="Produkte">
            <div class="indicator">
              <span class="indicator-item badge badge-info">{{ category.products.length }}</span>
              <div class="btn rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-center m-2 tooltip" data-tip="Top Produkte">
            <div class="indicator">
              <span class="indicator-item badge badge-accent">{{ category.featured.length }}</span>
              <div class="btn rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-center m-2 tooltip" data-tip="Unterkategorien">
            <div class="indicator">
              <span class="indicator-item badge badge-secondary">{{ category.subcategories.length }}</span>
              <div class="btn rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"/><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <h1 class="text-2xl font-bold text-white text-center p-4 w-full">
          {{ category.name }}
        </h1>

        <div class="flex justify-center items-center w-full">
          <a href="" class="btn btn-primary mt-4">Explore</a>
        </div>

      </div>
    </div>
    <div class="block md:hidden absolute inset-0 flex justify-start items-end font-bold">
    </div>
  </button>
</template>
