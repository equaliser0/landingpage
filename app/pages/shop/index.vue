<script setup lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { useProductsStore } from '../../stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const featuredProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p.featured === true) {
      return p
    }
  })
})

const categories = ref([])
const expandedCategories = ref([]);

const handleCategoryClick = (clickedCategory, isExpanded) => {
  if (isExpanded) {
    // Replace the existing expanded category with the new one
    expandedCategories.value = [clickedCategory];
  } else {
    // If not expanded, remove the clicked category from the list
    expandedCategories.value = expandedCategories.value.filter(category => category !== clickedCategory);
  }
};

watchEffect(() => {
  categories.value = categoriesStore.categories.map(category => ({
    ...category,
    isExpanded: expandedCategories.value.includes(category),
  }));
});

const el = ref<HTMLElement | null>(null)
const scroll = useScroll(el)
const { top, y } = toRefs(scroll)
const displayY = computed({
  get() {
    return y.value.toFixed(1)
  },
  set(val) {
    y.value = Number.parseFloat(val)
  },
})

const isVisible = ref(true)
</script>
<template>
  <!-- <div :style="{ 'font-family': 'Inter Tight' }" class="bg-cover bg-fixed"> -->
  <div :style="{ 'font-family': 'Inter Tight' }" style="background: radial-gradient(circle, #080706, #000000)" class="bg-cover bg-fixed">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter Tight">

    <!-- Hero Section -->
    <section class="overflow-hidden text-white flex flex-col md:flex-wrap justify-center items-center md:flex-row-reverse bg-no-repeat bg-center bg-cover h-screen" style="background-image: url('/uploads/hero.svg')">
      <!-- Hero Background -->
      <div class="w-full md:w-1/2 flex justify-center items-center">
        <img src="/uploads/hero.png" class="scale-25">
      </div>

      <div class="w-full md:w-1/2 z-10 flex justify-center items-center">
        <!-- Hero Content -->
        <div class="text-neutral text-center md:text-left">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Discover <br> Your Way
          </h1>
          <p class="text-xl md:text-2xl lg:text-3xl mb-6">
            Die besten Produkte rund um <br> CDB, Raucherartikel und mehr.
          </p>
          <NuxtLink
            :to="{ path: '/shop', hash: '#search' }"
            class="btn btn-accent text-lg md:text-xl lg:text-xl px-6 md:px-8 lg:px-10">
            Los geht's
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="slide-in bg-base-100 pt-12 pb-8 border-t border-b border-base-100 h-auto" id="categories">
      <div class="container mx-auto my-8">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Willkommen</h2>
          <p class="mt-4 text-base text-neutral">
            Entdecke den exklusiven Onlineshop für deine Raucherartikel. Wir heißen dich herzlich willkommen!
          </p>
          <div class="flex flex-wrap justify-center items-start pt-8 my-4">
            <div class="w-64 flex flex-col justify-center items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 stroke-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 class="text-2xl font-bold pt-2">Sicher</h3>
              <p class="text-neutral mt-2">Genieße sicheres Einkaufen mit verschlüsselter Datenübertragung.</p>
            </div>
            <div class="w-64 flex flex-col justify-center items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 stroke-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
              <h3 class="text-2xl font-bold pt-2">Unkompliziert</h3>
              <p class="text-neutral mt-2">Einfach und unkompliziert - finde, bestelle und erhalte deine Artikel schnell.</p>
            </div>
            <div class="w-64 flex flex-col justify-center items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 stroke-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <h3 class="text-2xl font-bold pt-2">Community basiert</h3>
              <p class="text-neutral mt-2">Trete unserer blühenden Community bei und teile deine Leidenschaft.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="divider container mx-auto py-8" id="search">
        <h3 class="text-2xl font-bold">Suche</h3>
      </div>

      <div class="slide-in container mx-auto">
        <ShopSearch/>
      </div>

      <div class="slide-in flex justify-center py-8">
        <NuxtLink
          to="/shop/products"
          class="btn slider btn-primary btn-ghost bg-base-200 text-lg md:text-xl lg:text-xl px-6 md:px-8 lg:px-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
          Alle Produkte ansehen
        </NuxtLink>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="slide-in bg-base-200 -mt-4 w-full" id="categories">
      <div class="flex flex-wrap w-full">
        <div class="text-center md:text-right w-full md:w-1/4 mt-12 pr-8">
          <h2 class="text-6xl font-semibold">Kategorien</h2>
          <p class="mt-4 text-base text-neutral">
            Tauche ein in die Welt der besten Produkte <br>für Headshops und Raucherbedarf!
          </p>
        </div>
        <div class="w-full md:w-3/4">
          <div class="w-full">
            <ShopCategoriesGrid @clicked-category="handleCategoryClick"/>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="" v-show="expandedCategories[0]">
          <div
            class="w-full bg-base-300"
            v-for="expandedCategory in expandedCategories"
            :key="expandedCategory.id"
          >
            <!-- <div class="w-full" v-if="expandedCategory.image">
              <img src="w-full" :src="`/uploads/${expandedCategory.image}`">
            </div> -->
            <div class="w-full pt-16">
              <div class="flex flex-col justify-center text-center">
                <h3 class="text-2xl font-bold text-center pb-4">{{ expandedCategory.name }}</h3>
                <p>{{ expandedCategory.description }}</p>

                <div class="mb-4">
                  <NuxtLink
                    :to="'/shop/products?category=' + expandedCategory.slug"
                    class="btn slider btn-primary btn-ghost bg-base-200 hover:bg-base-100 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
                    Zu den Produkten
                  </NuxtLink>
                  <NuxtLink
                    :to="'/shop/' + expandedCategory.slug"
                    class="btn slider btn-primary btn-ghost bg-base-200 hover:bg-base-100 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/></svg>
                    Zur Kategorie
                  </NuxtLink>
                </div>
              </div>
            </div>
            <ShopSubcategoriesGrid :category="expandedCategory"/>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="w-full flex flex-wrap bg-base-200">
      <div class="hidden md:block w-full md:flex-1 h-[500px] bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/7667911/pexels-photo-7667911.jpeg?auto=compress&cs=tinysrgb&w=500)">
        <!-- <img src="https://images.pexels.com/photos/7667725/pexels-photo-7667725.jpeg" alt=""> -->
      </div>
      <div class="w-full bg-cover bg-center md:flex-1 h-[500px] flex flex-col justify-center items-center">
        <div class="text-center">
          <h1 class="text-2xl font-bold pb-4">Verpasse nichts!</h1>
          <p>Bleib aktuell und bekomme die neuesten Produkte <br>direkt in dein Postfach!</p>
        </div>
        <div class="flex items-center mb-2 mt-8">
          <div class="flex items-center bg-base-100 rounded">
            <input class="input md:w-[400px] mr-1" placeholder="E-Mail" v-model="email" @keydown.enter.prevent="subscribing()">
            <button class="btn btn-ghost" @click="subscribing()">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block w-full md:flex-1 h-[500px] bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/14521084/pexels-photo-14521084.jpeg?auto=compress&cs=tinysrgb&w=500)">
        <!-- <img src="https://images.pexels.com/photos/7667725/pexels-photo-7667725.jpeg" alt=""> -->
      </div>
    </section>

    <!-- Featured Products Section with Card Slider/Carousel -->
    <section class="p-12 bg-base-300" v-if="featuredProducts">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Top Produkte</h2>
          <p>Die zurzeit beliebtesten Produkte!</p>
        </div>
        <div class="relative mt-8">
          <div class="flex flex-wrap w-full gap-6 justify-center items-center overflow-hidden">
            <!-- Featured Product Card 1 -->
            <ShopProductsPreview :product="product" v-for="product in featuredProducts"/>
          </div>
          <!-- Slider Controls -->
          <!-- <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button class="text-3xl text-accent focus:outline-none">&larr;</button>
            <button class="text-3xl text-accent focus:outline-none">&rarr;</button>
          </div> -->
        </div>
      </div>
    </section>

    <ShopProductsHero :products="featuredProducts" v-if="featuredProducts" class="w-full h-64"/>
  </div>
</template>
<style>
.slide-in {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
}
@keyframes slide-in {
    100% { transform: translateX(0%); }
}

@-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
}
.slider div:first-child{
  transform: translateX(-100%);
  transition: transform .3s ease-in
}
.slider:hover div{
  transform: translateY(0)
}
</style>
