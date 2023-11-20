<script setup lang="ts">
import { useNotificationStore } from '../../../stores/notifications'
import { useUserStore } from '../../../stores/user'
import { useProductsStore } from '../../../stores/products'
import { useCartStore } from '../../../stores/cart'

// const { $mdit } = useNuxtApp()
const { status } = useAuth()
const notificationStore = useNotificationStore()

const productsStore = useProductsStore()
const userStore = useUserStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()

const product = await getProduct(route.params.slug)

const quantity = ref(1)
const addToCart = async (product) => {
  if (product.quantity >= quantity.value) {
    cartStore.addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.sellingPrice,
      quantity: quantity.value
    })
    notificationStore.addNotification({
      type: 'success',
      msg: 'Produkt in den Warenkorb hinzugefügt'
    })
  } else {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Produkt seit wenigen Minuten nicht mehr verfügbar'
    })
  }
}

const selectedImage = ref({})
const selectImage = (image) => {
  selectedImage.value = image
}

// TODO replace with Markdown
const formatText = (text) => {
  return text.replace(/\n/g, "<br />")
}

const buyInstantly = async (product) => {
  try {
    if (product.quantity >= quantity.value) {
      cartStore.addToCart({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.sellingPrice,
        quantity: quantity.value
      })
      notificationStore.addNotification({
        type: 'success',
        msg: 'Produkt in den Warenkorb hinzugefügt'
      })
      router.push('/shop/checkout')
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Produkt seit wenigen Minuten nicht mehr verfügbar'
    })
  }
}

const tab = ref('description')

const similarProducts = ref([])

onMounted(async () => {
  if (product) {
    selectedImage.value = product.images[0]

    const filteredProducts = []
    if (product.similarProducts) {
      for (let slug of product.similarProducts) {
        const res = await getProduct(slug)
        filteredProducts.push(res)
      }
      similarProducts.value = filteredProducts
    }
  }
})

definePageMeta({
  auth: false,
})
</script>
<template>
  <div class="bg-center bg-cover bg-fixed">
    <div class="flex flex-col justify-center items-start min-h-screen pt-4 bg-base-200">

      <!-- Product -->
      <div class="flex flex-wrap justify-center h-full pt-12">
        <!-- Edit -->
        <!-- Product Description -->
        <div class="w-full md:w-2/5 flex flex-col items-end justify-center pt-12">
          <div class="px-8 w-full">
            <h2 class="text-5xl text-right w-full">{{ product.name }}</h2>
            <div class="text-right w-full pt-2">
              <!-- <h3>Brand</h3> -->
              <h3 class="text-4xl font-bold text-secondary">{{ product.brand }}</h3>
            </div>
            <div class="flex flex-wrap justify-end p-2">
              <div class="flex flex-wrap justify-end">
                <div class="bg-base-300 rounded m-2 p-2">
                  Produktfarbe
                  <div class="badge badge-neutral">{{ product.variants[0] }}</div>
                </div>
                <!-- <div class="">
                  <select class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Wähle Farbe</option>
                    <option>Variante A</option>
                    <option>Variante B</option>
                  </select>
                </div> -->
              </div>
              <div class="flex flex-wrap justify-end bg-base-300 rounded m-2 p-2">
                {{ product.propertyName }}
                <div class="badge badge-neutral">{{ product.propertyValue }}</div>
              </div>
              <div class=" flex flex-wrap justify-end md:justify-start bg-base-300 rounded m-2 p-2 flex inline">
                Tags
                <button class="badge badge-neutral m-1 w-auto">200g</button>
                <button class="badge badge-neutral m-1 w-auto">Grün</button>
                <button class="badge badge-neutral m-1 w-auto">Honig</button>
                <button class="badge badge-neutral m-1 w-auto">Fadi Tobaggo</button>
                <button class="badge badge-neutral m-1 w-auto">Tabakk</button>
              </div>
            </div>
            <div class="w-full flex flex-wrap justify-end py-4">
              <div class="rating gap-1">
                <input type="radio" name="rating-3" class="mask mask-star bg-info" />
                <input type="radio" name="rating-3" class="mask mask-star bg-info" />
                <input type="radio" name="rating-3" class="mask mask-star bg-info" />
                <input type="radio" name="rating-3" class="mask mask-star bg-info" checked />
                <input type="radio" name="rating-3" class="mask mask-star bg-info" />
              </div>
            </div>
            <div class="flex justify-end">
              <p><span>{{ product.quantity || 0 }} zurzeit auf Lager</span></p>
            </div>
            <div class="flex flex-wrap justify-end h-auto" v-if="tags">
              Keywords:
              <div class="badge badge-neutral m-2" v-for="tag in tags">
                {{ tag }}
              </div>
            </div>
            <div class="flex justify-end">
              <button class="btn my-2 btn-accent" v-if="status === 'authenticated'" @click="router.push(`/admin/shop/products/edit/${route.params.slug}`)">Edit</button>
            </div>
          </div>

      </div>
        <div class="w-full md:w-auto max-h-[700px] max-w-[700px] flex flex-col justify-center items-center">
          <div class="">
            <div class="">
              <img
                class="object-contain max-h-[600px] w-full w-auto"
                :src="(selectedImage) ? `/uploads/${selectedImage}` : '/uploads/shop/product-placeholder.png'"
              >
            </div>
            <div class="flex flex-wrap justify-start p-2 bg-base-300" v-if="product.images.length > 1">
              <img
                class="rounded h-24 w-24 p-1 object-cover"
                v-for="image in product.images"
                :src="(product.images) ? `/uploads/${image}` : '/uploads/shop/products/product-placeholder.png'"
                @click="selectImage(image)"
              >
            </div>
          </div>
        </div>
      </div>

      <section class="flex flex-col justify-center bg-base-100 w-full">
        <!-- Buy Button -->
        <div class="w-full text-center mt-8">
          <span class="text-gray-500 italic">inkl. {{ product.tax * 100 }}% MwSt</span>
        </div>
        <div class="mb-8 flex flex-wrap items-center justify-center w-full h-full px-8">
          <div class="text-right flex items-center md:-mt-8">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Menge: </span>
              </label>
              <input type="number" min="1" :max="product.quantity" class="input input-bordered w-24 max-w-xs" v-model="quantity"/>
            </div>
          </div>
          <div class="flex p-2">
            <button
              class="px-6 py-4 btn-primary rounded-xl"
              @click="addToCart(product)"
            >
              In den Warenkorb {{ formatRealNumber(product.sellingPrice * quantity) }}€
            </button>
            <button
              class="px-6 py-4 btn-ghost border-primary rounded-xl ml-2"
              @click="buyInstantly(product)"
            >
              Sofort Kaufen {{ formatRealNumber(product.sellingPrice * quantity) }}€
            </button>
          </div>
        </div>
      </section>

      <!-- Description -->
      <section class="w-full flex flex-wrap justify-center w-full bg-base-200">
        <!-- <div class="tabs tabs-bordered tabs-lg">
          <button class="tab font-bold text-xl" :class="{ 'tab-active bg-base-100 rounded-t': tab === 'description' }" @click="tab = 'description'">Beschreibung</button>
          <button class="tab font-bold text-xl" :class="{ 'tab-active bg-base-100 rounded-t': tab === 'comment' }" @click="tab = 'comment'">Kommentar</button>
        </div> -->
        <div class="container mx-auto w-full flex flex-wrap justify-center">
          <div class="w-full md:flex-1 h-auto px-8 py-16" v-if="product.description">
            <div class="mb-2">
              <h3 class="text-3xl font-bold">Produkt Beschreibung</h3>
            </div>
            <div class="prose" v-html="$mdit.render(product.description)"></div>
          </div>
          <div class="w-full md:flex-1 h-auto px-8 py-16" v-if="product.facts">
            <div class="text-3xl font-bold">
              <h3>Weitere Fakten</h3>
            </div>
            <div class="prose" v-html="$mdit.render(product.facts)"></div>
          </div>
          <div class="w-full md:flex-1 bg-base-300 h-auto px-8 py-16" v-if="product.comments">
            <div class="text-3xl font-bold">
              <h3>Unser Kommentar</h3>
            </div>
            <div class="prose" v-html="$mdit.render(product.comments)"></div>
          </div>
        </div>
      </section>

      <section class="w-full flex flex-wrap bg-base-100 py-16">
        <div class="w-full bg-cover bg-center md:flex-1 flex flex-col justify-center items-center">
          <div class="text-center">
            <h1 class="text-2xl font-bold pb-4">Verpasse nichts!</h1>
            <p>Bleib aktuell und bekomme die neuesten Produkte dieser Art <br>direkt in dein Postfach!</p>
          </div>
          <div class="flex items-center mb-2 mt-8">
            <div class="flex items-center bg-base-200 rounded">
              <input class="input input-ghost md:w-[400px] mr-1" placeholder="E-Mail" v-model="email" @keydown.enter.prevent="subscribing()">
              <button class="btn btn-ghost" @click="subscribing()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured -->
      <section class="p-12 bg-base-300 w-full" v-if="similarProducts[0]">
        <div class="container mx-auto">
          <div class="text-center">
            <h2 class="text-3xl font-semibold">Ähnliche Produkte</h2>
          </div>
          <div class="relative mt-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-hidden">
              <!-- Featured Product Card 1 -->
              <ShopProductsPreview :product="product" v-for="product in similarProducts"/>
            </div>
            <!-- Slider Controls -->
            <!-- <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button class="text-3xl text-accent focus:outline-none">&larr;</button>
              <button class="text-3xl text-accent focus:outline-none">&rarr;</button>
            </div> -->
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<style scoped>
.custom-shape-divider-bottom-1697729642 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1697729642 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 69px;
}
</style>
