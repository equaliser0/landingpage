<script setup lang="ts">
import { useOrdersStore } from '../../../../stores/orders'
import { useNotificationStore } from '../../../../stores/notifications'


const orderStore = useOrdersStore()
const notificationStore = useNotificationStore()

const router = useRouter()

const orders = orderStore.orders

const selected = ref([])

const orderDetails = ref(null)

const viewOrder = (order) => {
  orderDetails.value = order
}

const propertyToSortWith = ref('name')
const ascending = ref(true)

const filteredOrders = computed(() => {
  return sortArrayByProperty(orderStore.orders, propertyToSortWith.value, ascending.value)
})

const deliveredOrder = async (order) => {
  try {
    order.shipped = true
    await updateOrder(order)
    await orderStore.fetchOrders()
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const sortWith = (prop) => {
  ascending.value = !ascending.value
  propertyToSortWith.value = prop
}
</script>
<template>
  <div class="">
    <div class="">
      <h1 class="font-bold text-2xl pb-4">Bestellungen</h1>
    </div>
    <div class="overflow-x-auto bg-base-100 rounded rounded-md px-4 py-8">
      <!-- Table Data -->
      <table class="table table-xs table-pin-rows table-pin-col">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <!-- <input type="checkbox" class="checkbox" /> -->
              </label>
            </th>
            <th @click="sortWith('client')">Kunde</th>
            <th @click="sortWith('products')">Produkte</th>
            <th @click="sortWith('totalsum')">Coupon Code</th>
            <th @click="sortWith('totalsum')">Rabatt</th>
            <th @click="sortWith('total')">Summe (Ohne Rabatt)</th>
            <th @click="sortWith('total')">Summe (mit Rabatt)</th>
            <th @click="sortWith('created')">Erstellt</th>
            <th @click="sortWith('paid')">Bezahlt</th>
            <th @click="sortWith('shipped')">Versendet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="order in filteredOrders" class="hover:bg-base-200" v-if="filteredOrders">
            <th>
              <label>
                <!-- <input type="checkbox" class="checkbox" /> -->
              </label>
            </th>
            <th>
              {{ order.delivery.firstname }} {{ order.delivery.lastname }}
            </th>
            <th>{{ order.products.length }}</th>
            <th class="text-center">{{ (order.coupon && order.coupon.code) ? order.coupon.code : '--' }}</th>
            <th class="text-center">{{ (order.coupon && order.coupon.discount) ? order.coupon.discount + '%' : '--' }}</th>
            <th class="text-center">{{ formatRealNumber(Number(order.totalGross)) }}€</th>
            <th class="text-center">{{ formatRealNumber(Number(order.totalNet)) }}€</th>
            <th>{{ formatReadableDate(order.created) }}</th>
            <th>
              <svg v-if="order.paid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </th>
            <th>
              <svg v-if="order.shipped" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </th>
            <th class="flex flex-wrap justify-center items-center">
              <button class="btn btn-circle ml-2" :class="`${(!order.shipped) ? 'btn-success' : 'btn-ghost'}`" @click="deliveredOrder(order)" onclick="orderview.showModal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
              </button>
              <button class="btn btn-circle ml-2" @click="viewOrder(order)" onclick="orderview.showModal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th>Kunde</th>
            <th>Produkte</th>
            <th>Coupon Code</th>
            <th>Rabatt</th>
            <th>Summe (Ohne Rabatt)</th>
            <th>Summe (mit Rabatt)</th>
            <th>Erstellt</th>
            <th>Bezahlt</th>
            <th>Versendet</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <!-- You can open the modal using ID.showModal() method -->
      <dialog id="orderview" class="modal" v-if="orderDetails">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="flex flex-wrap justify-between">
            <div class="bg-base-200 rounded-md p-4 m-2 w-full">
              <h2 class="text-xl font-bold">Lieferadresse</h2>
              <div class="flex flex-wrap justify-around">
                <div class="p-2">
                  <h3 class="text-md font-bold">Vorname</h3>
                  <p>{{ orderDetails.delivery.firstname }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Nachname</h3>
                  <p>{{ orderDetails.delivery.lastname }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">E-Mail</h3>
                  <p>{{ orderDetails.delivery.email }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Straße</h3>
                  <p>{{ orderDetails.delivery.street }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Ort</h3>
                  <p>{{ orderDetails.delivery.place }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">ZIP/PLZ</h3>
                  <p>{{ orderDetails.delivery.zipcode }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Land</h3>
                  <p>{{ orderDetails.delivery.state }}</p>
                </div>
              </div>
            </div>
            <div class="bg-base-200 rounded-md p-4 m-2 w-full">
              <h2 class="text-xl font-bold">Rechnungsadresse</h2>
              <div class="flex flex-wrap justify-around">
                <div class="p-2">
                  <h3 class="text-md font-bold">Vorname</h3>
                  <p>{{ orderDetails.billing.firstname }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Nachname</h3>
                  <p>{{ orderDetails.billing.lastname }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">E-Mail</h3>
                  <p>{{ orderDetails.billing.email }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Straße</h3>
                  <p>{{ orderDetails.billing.street }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Ort</h3>
                  <p>{{ orderDetails.billing.place }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">ZIP/PLZ</h3>
                  <p>{{ orderDetails.billing.zipcode }}</p>
                </div>
                <div class="p-2">
                  <h3 class="text-md font-bold">Land</h3>
                  <p>{{ orderDetails.billing.state }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="">
            <h2 class="text-md font-bold">Produkte</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>Name</th>
                  <th>EAN</th>
                  <th>Menge</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr v-for="product in orderDetails.products" @click="router.push(`/shop/product/${product.slug}`)" class="hover">
                  <th>{{ product.name }}</th>
                  <th>{{ product.EAN }}</th>
                  <th>{{ product.quantity }}</th>
                  <th class="text-right">{{ formatRealNumber(product.quantity * product.price) }}€</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="" v-if="orderDetails.coupon">
            <div class="divider"></div>
            <div class="flex justify-between">
              <div class="flex">
                <h2 class="text-md font-bold">Coupon</h2>
                <p class="px-8 italic"><b>'{{ orderDetails.coupon.code }}'</b></p>
              </div>
              <div class="flex justify-around">
                <div class="flex justify-between w-64">
                  <p><b>{{ orderDetails.coupon.discount }}%</b> Discount</p>
                  <p><b>-{{ orderDetails.totalGross * (orderDetails.coupon.discount / 100) }}€</b></p>
                </div>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="flex justify-between">
            <h2 class="text-md font-bold">Total</h2>
            <p class="underline font-bold">{{ formatRealNumber(orderDetails.totalNet) }}€</p>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>
