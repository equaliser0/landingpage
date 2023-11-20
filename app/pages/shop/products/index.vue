<script setup lang="ts">
import { useCategoriesStore } from '../../../stores/categories'
import { useProductsStore } from '../../../stores/products'

const route = useRoute()
const router = useRouter()

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const brands = computed(() => {
  const allBrands = []
  for (const product of productsStore.products) {
    if (!allBrands.find(p => p === product.brand)) {
      allBrands.push(product.brand)
    }
  }
  return allBrands
})

const selectedCategory = ref('');
const selectedBrand = ref('');
const priceRange = ref(0);
const highestPrice = computed(() => {
  const max = Math.max(...productsStore.products.map((product) => product.sellingPrice))
  priceRange.value = max
  return max;
});
const showFeatured = ref(false);
const ascending = ref(true)

const filteredProducts = computed(() => {
  return productsStore.products.filter((product) => {
    const priceMatch = product.sellingPrice <= priceRange.value;
    const brandMatch = !selectedBrand.value || product.brand === selectedBrand.value;

    if (!selectedCategory.value) {
      // If no category is selected, return all products
      return priceMatch && brandMatch;
    } else {
      // If a category is selected, check if the product's slug is in the selected category's products
      const category = categoriesStore.categories.find((category) => category.slug === selectedCategory.value);
      return category && category.products.includes(product.slug) && priceMatch && brandMatch;
    }
  });
});

const searchQuery = ref('')
const searchResult = computed(() => {
  return filterArrayByKeyword(sortArrayByProperty(filteredProducts.value, 'sellingPrice', ascending.value), searchQuery.value)
})

onMounted(() => {
  if (route.query.category) {
    selectedCategory.value = route.query.category
  }
})
</script>

<template>
  <div class="flex flex-wrap mt-16 shadow-md h-full">
    <!-- Filters -->
    <section class="w-full md:w-1/4 bg-base-100 h-full">
      <div class="flex p-4">
        <div class="flex flex-col">
          <h2 class="text-xl font-semibold">Filters</h2>
          <!-- Add your filter options here -->
          <div class="form-control w-full max-w-xs mt-4">
            <label class="block font-medium">Stichwort</label>
            <input placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="searchQuery"/>
          </div>
          <div class="mt-4">
            <label class="block font-medium">Kategory</label>
            <select v-model="selectedCategory" class="select select-bordered w-full">
              <option value="">Alle Kategorien</option>
              <option v-for="category in categoriesStore.categories" :value="category.slug">{{ category.name }}</option>
            </select>
          </div>
          <div class="mt-4">
            <label class="block font-medium">Marke</label>
            <select v-model="selectedBrand" class="select select-bordered w-full">
              <option value="">Alle Marken</option>
              <option v-for="brand in brands" :value="brand">{{ brand }}</option>
            </select>
          </div>
          <div class="mt-4">
            <label class="block font-medium">Preis bis <span class="font-bold">{{ priceRange }}€</span></label>
            <input type="range" min="0" :max="highestPrice" v-model="priceRange" class="range" />
          </div>
          <div class="mt-4">
            <select v-model="ascending" class="select select-bordered w-full">
              <option :value="true">Auftseigend (von günstig zu teuer)</option>
              <option :value="false">Absteigend (von teuer zu günstig)</option>
            </select>
          </div>
          <!-- <div class="mt-4">
            <label class="block font-medium">Angepinnte Produkte</label>
            <input type="checkbox" v-model="showFeatured" class="toggle" />
          </div> -->
        </div>
      </div>
    </section>

    <!-- Product List in Table Format -->
    <section class="w-full md:w-3/4 bg-base-200 rounded-b-md md:rounded-r-md md:rounded-l-none">
      <div class="overflow-scroll">
        <div class="w-full h-full flex justify-center items-center p-8" v-if="!searchResult[0]">
          Keine Produkte gefunden
        </div>
        <table class="table table-pin-rows table-pin-cols" v-else>
          <!-- Table Head -->
          <thead>
            <tr>
              <th>
                <label>
                  <!-- <input type="checkbox" class="checkbox" /> -->
                </label>
              </th>
              <th>Name</th>
              <th>Marke</th>
              <th>Preis</th>
              <th></th>
            </tr>
          </thead>
          <!-- Table Body - Loop through products -->
          <tbody class="overflow-scroll h-full">
            <tr v-for="product in searchResult" :key="product.slug" class="bg-base-300 hover:bg-base-200" @click="router.push(`/shop/product/${product.slug}`)">
              <td>
                <label>
                  <!-- <input type="checkbox" class="checkbox" /> -->
                </label>
              </td>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask rounded-md w-32 h-32">
                      <img :src="(product.images[0]) ? `/uploads/${product.images[0]}` : '/uploads/shop/product-placeholder.png'" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-xl">{{ product.name }}</div>
                    <div class="prose text-sm opacity-80" v-html="$mdit.render(getShortDescription(product.description, 45))"></div>
                  </div>
                </div>
              </td>
              <td class="font-bold text-secondary">
                  {{ product.brand }}
              </td>
              <td class="w-24 font-bold">{{ formatRealNumber(product.sellingPrice) }} €</td>
              <td>
                <button class="btn btn-primary btn-md">Zum Produkt</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
