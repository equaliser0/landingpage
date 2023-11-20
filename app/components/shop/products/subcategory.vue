<script setup lang="ts">
const route = useRoute()

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})
console.log(props.slug);

const subcategory = await getSubcategory(route.params.category, props.slug)
console.log(subcategory);

</script>
<template>
  <div>
    <div class="bg-base-100 rounded-lg border border-base-200 shadow-md m-2" v-if="subcategory">
      <nuxt-link :to="`/shop/${subcategory.parent}/${subcategory.slug}`">
      <!-- <nuxt-link :to="`/shop/${subcategory.parent}/${subcategory.slug}`"> -->
        <div>
          <img class="rounded-t-lg h-80 w-full object-cover"
          :src="(subcategory.image) ? `/uploads/${subcategory.image}` : '/uploads/shop/product-placeholder.png'"
          >
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ subcategory.name }}
            </h5>
          </div>
          <!-- <p class="mb-3 font-medium">
            <span>Produkte:</span> {{ subcategory.length }}
          </p> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
