<script setup lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { useProductsStore } from '../../stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const allProducts = computed(() => {
  return productsStore.products
})

const searchQuery = ref('')
const searchResult = computed(() => {
  return filterArrayByKeyword(allProducts.value, searchQuery.value)
})
</script>
<template>
  <section class="w-full">
    <div class="w-full flex flex-col items-center">
      <div class="flex items-center bg-base-200 rounded px-2 w-full md:w-[700px]">
        <input type="text" placeholder="Suche" class="w-full input bg-base-200" v-model="searchQuery"/>
        <svg xmlns="http://www.w3.org/2000/svg"  class="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
      <!-- <ShopSearch class="w-full"/> -->
      <ul class="menu xl:menu-horizontal w-screen bg-base-100 rounded-box mt-2 w-full md:w-[700px]" v-if="searchQuery">
        <li>
          <a>Produkte</a>
          <ul class="flex flex-wrap w-full md:w-[900px]">
            <li class="w-1/2" v-for="product in searchResult"><NuxtLink :to="`/shop/product/${product.slug}`">
              <img class="w-12 h-12 rounded-md" :src="`/uploads/${(product.images[0]) ? product.images[0] : 'shop/product-placeholder.png'}`"/>
              <h2><!-- <button
    class="px-6 py-4 btn-ghost border-success rounded-xl mt-2"
    @click="buyInstantly(product)"
  >
    Sofort Kaufen {{ formatRealNumber(currentProductsellingPrice * quantity) }}€
  </button> -->
                {{ product.name }}
              </h2>
            </NuxtLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
