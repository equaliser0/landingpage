<script setup lang="ts">
import { useProductsStore } from '../../../../stores/products'
import { useCategoriesStore } from '../../../../stores/categories'
import { useNotificationStore } from '../../../../stores/notifications'

const router = useRouter()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
const notificationStore = useNotificationStore()

const propertyToSortWith = ref('name')
const ascending = ref(true)

const filterKeyword = ref('')
const products = computed(() => {
  return filterArrayByKeyword(sortArrayByProperty(productsStore.products, propertyToSortWith.value, ascending.value), filterKeyword.value)
})

const sortWith = (prop) => {
  ascending.value = !ascending.value
  propertyToSortWith.value = prop
}

const currentPage = ref(1)
const nextPage = () => {
  // if (currentPage.value <= ) {
  //
  // }
}

const JSON_Data = ref('')
const importNewProducts = async () => {
  try {
    await importProducts(JSON.parse(JSON_Data.value))
    await productsStore.fetchProducts()
    await categoriesStore.fetchCategories()
    notificationStore.addNotification({
      type: 'success',
      msg: 'Products imported'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error.message
    })
  }
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">

    <!-- Add Product Modal -->
    <div class="w-full flex justify-center mb-8">
      <NuxtLink class="btn" to="/admin/shop/products/new">Hinzufügen</NuxtLink>
      <div class="ml-2">
        <button class="btn" onclick="import_products.showModal()">Importieren</button>
        <dialog id="import_products" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg pb-4">Import Products</h3>
            <textarea class="textarea textarea-bordered w-full h-64" placeholder="JSON Format supported only" v-model="JSON_Data"></textarea>
            <button class="btn btn-success mt-2" @click="importNewProducts()">Import</button>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
    <div class="flex justify-center mb-4">
      <input class="input input-bordered input-xs w-1/3 py-4 bg-base-200" placeholder="Filter nach Stichwort" v-model="filterKeyword">
    </div>
    <!-- Table Data -->
    <table class="table table-xs table-pin-rows table-pin-col">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th @click="sortWith('name')">Name</th>
          <th @click="sortWith('brand')">Marke</th>
          <th @click="sortWith('propertyName')">Eigenschafts Name</th>
          <th @click="sortWith('propertyValue')">Eigenschafts Wert</th>
          <th @click="sortWith('variant')">Farbe</th>
          <th @click="sortWith('properties')">Weitere Eigenschaften</th>
          <th @click="sortWith('EAN')">EAN</th>
          <th @click="sortWith('boughtPrice')">Preis (gekauft)</th>
          <th @click="sortWith('sellingPrice')">Preis (Verkauf)</th>
          <th @click="sortWith('quantity')">Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginate(products, currentPage, 25)" class="hover:bg-base-200">
          <th>
            <img class="w-8 h-8 rounded" :src="`/uploads/${(item.images[0]) ? item.images[0] : 'shop/product-placeholder.png'}`">
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th>{{ item['name'] }}</th>
          <th>{{ item['brand'] }}</th>
          <th>{{ item['propertyName'] }}</th>
          <th>{{ item['propertyValue'] }}</th>
          <th>{{ item['variants'][0] }}</th>
          <th>{{ item['properties'] }}</th>
          <th>{{ item['EAN'] }}</th>
          <th>{{ item['sellingPrice'] }}</th>
          <th>{{ item['boughtPrice'] }}</th>
          <th>{{ item['quantity'] }}</th>
          <th>
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/admin/shop/products/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="router.push(`/shop/product/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Marke</th>
          <th>Eigenschafts Name</th>
          <th>Eigenschafts Wert</th>
          <th>Farbe</th>
          <th>Weitere Eigenschaften</th>
          <th>EAN</th>
          <th>Preis (Verkauf)</th>
          <th>Preis (gekauft)</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
    <div class="join flex justify-center pt-4">
      <button class="join-item btn" @click="currentPage = currentPage - 1">«</button>
      <button class="join-item btn" disabled>{{ currentPage }}</button>
      <button class="join-item btn" @click="currentPage = currentPage + 1">»</button>
    </div>
  </div>
</template>
