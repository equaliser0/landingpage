<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// const image = useAssets(`/uploads/shop/products/product-placeholder.png`)
</script>
<template>
  <div :id="product.slug">
    <NuxtLink class="card bg-base-100 h-64 w-64 shadow-xl image-full m-2" :to="`/shop/product/${product.slug}`">
      <figure class="">
        <img class="h-64 w-64 rounded-2xl" :src="(product.images) ? `/uploads/${product.images[0]}` : '/uploads/shop/product-placeholder.png'" />
      </figure>
      <div class="card-body flex-col justify-between">
        <h2 class="card-title">{{ product.name }}</h2>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">
            {{ product.sellingPrice.toFixed(2) }}€
          </button>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<!-- https://codepen.io/toddwebdev/pen/yExKoj -->
