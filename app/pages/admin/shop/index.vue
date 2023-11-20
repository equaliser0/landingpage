<script setup lang="ts">
import { useOrdersStore } from '../../../stores/orders'
import { useProductsStore } from '../../../stores/products'

const orderStore = useOrdersStore()
const productsStore = useProductsStore()
await productsStore.fetchProducts()
await orderStore.fetchOrders()

const router = useRouter()

const shopOverviewData = calculatePerformanceData(orderStore.orders, productsStore.products)

const margin = computed(() => {
  return (shopOverviewData.monthlyProfit / shopOverviewData.monthlyRevenue) * 100
})

const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
];

const currentDate = new Date();

const selectedTab = ref('orders')

const selectTab = (tab) => {
  return selectedTab.value = tab
}
</script>

<template>
  <div class="container mx-auto pt-24">
    <div class="w-full text-center mt-4">
      <h1 class="text-xl pb-4 font-bold">Dashboard</h1>
    </div>
    <div class="flex flex-col items-center px-2">
      <div class="flex flex-wrap w-full justify-center">

        <section class="flex w-full md:w-1/3">
          <div class="flex flex-wrap justify-center items-center w-full my-4 px-2">

            <div class="flex flex-wrap justify-center items-center w-full">
              <!-- Revenue -->
              <div class="w-1/2">
                <div class="rounded-lg border border-error card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Umsatz <b>{{ shopOverviewData.currentMonth.toString() }}</b></p>
                    <span class="shrink-0">
                      <Icon name="heroicons:banknotes" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ formatRealNumber(shopOverviewData.monthlyRevenue) }}€</p>
                  <p class="text-xs text-muted-foreground"><span class="text-error font-bold">{{ formatRealNumber(shopOverviewData.monthlyPerformance) }}% </span></p>
                </div>
              </div>

              <!-- Sales -->
              <div class="w-1/2">
                <div class="rounded-lg border border-success card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Profit <b>{{ shopOverviewData.currentMonth }}</b></p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ formatRealNumber(shopOverviewData.yearlyProfit) }}€</p>
                  <p class="text-xs text-muted-foreground"><span class="text-success font-bold">{{ formatRealNumber(margin) }}%</span></p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap justify-center items-center w-full">
              <!-- Product -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Kunden</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.totalAmountClients }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">{{ shopOverviewData.totalAmountRegisteredUser }}</span> Registriert</p>
                </div>
              </div>

              <!-- Orders -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Bestellungen</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.ammountOrders }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">{{ shopOverviewData.shippedOrders }}</span> Verschickt</p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap justify-center items-center w-full">
              <!-- Product -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Produkte</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.totalAmountProducts }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">{{ shopOverviewData.ammountOrders }}</span> Verkauft</p>
                </div>
              </div>

              <!-- Clients -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Kategorien</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.totalAmountProducts }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">14</span> Registriert</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Sales List -->
        <section class="border border-base-300 bg-base-100 rounded rounded-xl my-4 w-full md:w-2/3 p-8">
          <div class="">
            <h1 class="text-xl font-medium">Sales</h1>
            <p>Umsatz {{ shopOverviewData.currentYear }}: <b>{{ formatRealNumber(Number(shopOverviewData.revenueYear)) }}€</b></p>
          </div>
          <div class="">
            <ShopAdminSales/>
          </div>
        </section>
      </div>

      <section class="container mx-auto">
        <ShopAdminOrdersNew class="w-full"/>
      </section>
    </div>
  </div>
</template>
