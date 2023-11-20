<script setup lang="ts">
const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <NuxtLink
    class="bg-base-300 p-4 shadow-md rounded-lg slider relative tracking-wider leading-none overflow-hidden bg-cover bg-center h-[450px] w-64 m-2"
    :style="`background-image: url('${(product.images[0]) ? `/uploads/${product.images[0]}` : '/uploads/shop/product-placeholder.png'}`"
    :to="`/shop/product/${product.slug}`"
    v-if="product"
  >
    <div class="flex flex-col justify-between items-start absolute inset-0 bg-base-100/90 backdrop-blur-xl p-8 rounded">
      <div class="flex w-full justify-between">
        <div class="indicator tooltip" data-tip="Wunschlisten">
          <span class="indicator-item badge badge-accent">99+</span>
          <button class="btn rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>
        <div class="indicator tooltip" data-tip="Rezensionen">
          <span class="indicator-item badge badge-secondary">99+</span>
          <button class="btn rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
        <div class="indicator tooltip" data-tip="Gekauft">
          <span class="indicator-item badge badge-primary">99+</span>
          <button class="btn rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>
      <div class="rating gap-1">
        <input type="radio" name="rating-3" class="mask mask-star bg-info" />
        <input type="radio" name="rating-3" class="mask mask-star bg-info" />
        <input type="radio" name="rating-3" class="mask mask-star bg-info" />
        <input type="radio" name="rating-3" class="mask mask-star bg-info" checked />
        <input type="radio" name="rating-3" class="mask mask-star bg-info" />
      </div>
      <h1 class="text-2xl font-bold">{{ product.name }}</h1>
      <div class="flex flex-col justify-end">
        <span class="font-bold">{{ formatRealNumber(product.sellingPrice) }}€</span>
        <a href="#" class="btn btn-primary mt-4">Shop Now</a>
      </div>
    </div>
    <div class="absolute inset-0 flex justify-start items-start font-bold p-8">
    </div>
  </NuxtLink>
</template>
