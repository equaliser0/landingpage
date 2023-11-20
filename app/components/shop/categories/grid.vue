<script setup lang="ts">
import { useCategoriesStore } from '../../../stores/categories'
import Category from './category'
import Subcategory from '../subcategories/subcategory'

const categoriesStore = useCategoriesStore()

// Array of widths corresponding to each item
let widths = ['w-full', 'w-full md:w-1/3', 'w-full md:w-2/3', 'w-full md:w-1/2', 'w-full md:w-1/2', 'w-full md:w-2/3', 'w-full md:w-1/3', 'w-full md:w-1/2', 'w-full md:w-1/2'];
const categories = ref([])

const expandedCategories = ref([]);

const emit = defineEmits(['clicked-category'])

const handleCategoryClick = (clickedCategory, isExpanded) => {
  emit('clicked-category', clickedCategory, isExpanded);
};

watchEffect(() => {
  categories.value = categoriesStore.categories.map(category => ({
    ...category,
    isExpanded: expandedCategories.value.includes(category),
  }));
});
</script>
<template>
  <div class="flex flex-wrap justify-center md:justify-end w-full">
    <Category
      class="w-1/2 md:flex-1 hover:w-[300px] hover:flex-none"
      v-for="category in categories"
      :category="category"
      @category-clicked="handleCategoryClick"
    />
  </div>
</template>
