<script setup lang="ts">
const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

// const image = useAssets(`/uploads/shop/categorys/category-placeholder.png`)
</script>
<template>
  <div>
    <div class="bg-base-100 rounded-lg border border-base-200 shadow-md m-2">
      <nuxt-link :to="`/shop/${category.slug}`">
        <div>
          <img class="rounded-t-lg h-80 w-full object-cover"
          :src="(category.image) ? `/uploads/${category.image}` : '/uploads/shop/product-placeholder.png'"
          >
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ category.name }}
            </h5>
          </div>
          <!-- <p class="mb-3 font-medium">
            <span>Produkte:</span> {{ category.subcategories.length }}
          </p> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
