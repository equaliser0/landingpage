<script setup lang="ts">
import { useCategoriesStore } from '../../../../stores/categories'

const router = useRouter()

const categoriesStore = useCategoriesStore()

const propertyToSortWith = ref('name')
const ascending = ref(true)

const filterKeyword = ref('')
const categories = computed(() => {
  return filterArrayByKeyword(sortArrayByProperty(categoriesStore.categories, propertyToSortWith.value, ascending.value), filterKeyword.value)
})

const sortWith = (prop) => {
  ascending.value = !ascending.value
  propertyToSortWith.value = prop
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">
    <div class="w-full flex justify-center">
      <NuxtLink class="btn" to="/admin/shop/categories/new">Hinzufügen</NuxtLink>
    </div>
    <div class="flex justify-center my-4">
      <input class="input input-bordered input-xs w-1/3 py-4 bg-base-200" placeholder="Filter nach Stichwort" v-model="filterKeyword">
    </div>

    <!-- Table Data -->
    <table class="table table-xs table-pin-rows table-pin-col">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th @click="sortWith('name')">Name</th>
          <th @click="sortWith('slug')">Slug</th>
          <th @click="sortWith('products')">Produkte</th>
          <th @click="sortWith('featured')">Featured</th>
          <th @click="sortWith('subcategories')">Subkategorien</th>
          <th @click="sortWith('created')">Erstellt</th>
          <th @click="sortWith('updated')">Aktualisiert</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in categories" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>{{ item.name }}</th>
          <th>{{ item.slug }}</th>
          <th>{{ item.products.length }}</th>
          <th>{{ item.featured.length }}</th>
          <th>{{ item.subcategories.length }}</th>
          <th>{{ item.created }}</th>
          <th>{{ item.updated }}</th>
          <th>
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/shop/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/admin/shop/categories/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="router.push(`/admin/shop/categories/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-pull-request"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/></svg>
            </button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Slug</th>
          <th>Produkte</th>
          <th>Featured</th>
          <th>Subkategorien</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
