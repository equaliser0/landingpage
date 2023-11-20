<script setup lang="ts">
import { useProductsStore } from '../../../../stores/products'
import { useCategoriesStore } from '../../../../stores/categories'
import { useNotificationStore } from '../../../../stores/notifications'

const router = useRouter()

const coupons = await getAllCoupons()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
const notificationStore = useNotificationStore()

const propertyToSortWith = ref('created')
const ascending = ref(true)

const filterKeyword = ref('')
const filteredCoupons = computed(() => {
  return filterArrayByKeyword(sortArrayByProperty(coupons, propertyToSortWith.value, ascending.value), filterKeyword.value)
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

const setCoupon = async (code) => {
  try {
    await updateCoupon(code)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Saved!'
    })
    coupons.value = await getAllCoupons()
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const fetchCoupons = async () => {
  try {
    coupons.value = await getAllCoupons()
  } catch (error) {
    console.log(error);

  }
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">

    <!-- Add Product Modal -->
    <div class="w-full flex justify-center mb-8">
      <div class="">
        <button class="btn" onclick="add_coupon.showModal()">+ Hinzufügen</button>
        <dialog id="add_coupon" class="modal">
          <div class="modal-box">
            <ShopAdminCouponsEditor :coupon="undefined" @updated="fetchCoupons"/>
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
          <th @click="sortWith('code')">Code</th>
          <th @click="sortWith('discount')">Rabatt</th>
          <th @click="sortWith('created')">Erstellt</th>
          <th @click="sortWith('updated')">Aktualisiert</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in filteredCoupons" class="hover:bg-base-200">
          <th>
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th>{{ coupon['code'] }}</th>
          <th>{{ coupon['discount'] }}%</th>
          <th>{{ formatReadableDate(coupon['created']) }}</th>
          <th>{{ formatReadableDate(coupon['updated']) }}</th>
          <th>
            <button class="btn btn-sm" :class="`${(coupon.active) ? 'btn-warning' : 'btn-primary'}`" @click="setCoupon(coupon.code)">
              {{ (coupon.active) ? 'Deaktivieren' : 'Aktivieren' }}
            </button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Code</th>
          <th>Rabatt</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
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
