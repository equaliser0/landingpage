<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'
import { useCategoriesStore } from '../../../stores/categories'

const route = useRoute()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

const subcategory = await getSubcategory(route.params.category, route.params.subcategory)

const allProducts = computed(() => {
  let items = []
  for (let product of subcategory.products) {
    const res = productsStore.products.find(p => p.slug === product)
    items.push(res)
  }
  return items
})

const featuredProducts = computed(() => {
  let items = []
  for (let product of subcategory.featured) {
    items.push(productsStore.products.find(p => p.slug === product))
  }
  return items
})

definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="bg-cover bg-fixed" v-if="subcategory" :style="`background-image: url('/uploads/${subcategory.image}')`">
    <!-- Header --><!-- Hero Section -->
    <section class="relative overflow-hidden text-white">
      <div class="container mx-auto relative z-10">
        <!-- Hero Content -->
        <div class="flex items-end justify-center md:justify-start h-[350px]">
          <!-- Left Panel: Text -->
          <div class="text-neutral text-center md:text-left pb-12">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              {{ subcategory.name }}
            </h1>
            <!-- <p class="text-xl md:text-2xl lg:text-3xl mb-6">
              Die besten Produkte rund um <br> CDB, Raucherartikel und mehr.
            </p> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section with Card Slider/Carousel -->
    <section class="p-12 bg-base-200" v-if="featuredProducts">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Top Produkte</h2>
        </div>
        <div class="relative mt-8">
          <div class="flex flex-wrap justify-center overflow-hidden">
            <!-- Featured Product Card 1 -->
            <ShopProductsPreview :product="product" v-for="product in allProducts"/>
          </div>
          <!-- Slider Controls -->
          <!-- <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button class="text-3xl text-accent focus:outline-none">&larr;</button>
            <button class="text-3xl text-accent focus:outline-none">&rarr;</button>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Featured Products Section with Card Slider/Carousel -->
    <section class="p-12 bg-base-300" v-if="allProducts">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Top Produkte</h2>
        </div>
        <div class="relative mt-8">
          <div class="flex flex-wrap justify-center overflow-hidden">
            <!-- Featured Product Card 1 -->
            <ShopProductsPreview :product="product" v-for="product in allProducts"/>
          </div>
          <!-- Slider Controls -->
          <!-- <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button class="text-3xl text-accent focus:outline-none">&larr;</button>
            <button class="text-3xl text-accent focus:outline-none">&rarr;</button>
          </div> -->
        </div>
      </div>
    </section>

    <ShopProductsHero :products="allProducts" v-if="allProducts" class="w-full h-64"/>

  </div>
</template>

<style scoped>
.custom-shape-divider-bottom-1697729642 {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1697729642 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 69px;
}
</style>
