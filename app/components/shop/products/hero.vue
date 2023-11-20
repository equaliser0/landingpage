<script setup>
import { useProductsStore } from '../../../stores/products'

const productsStore = useProductsStore()

// const products = computed(() => {
//   return productsStore.products
// })

const props = defineProps({
  products: Array,
});

const currentIndex = ref(0);
let autoSlideInterval;

const currentProduct = computed(() => {
  return props.products[currentIndex.value]
});


const slide = (direction) => {
  currentIndex.value = (currentIndex.value + direction + props.products.length) % props.products.length;
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    slide(1);
  }, 5000); // Change slide every 5 seconds
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

onBeforeMount(() => {
})

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(async () => {//(product.images[0]) ? `/uploads/${product.images[0]}` : 'shop/product-placeholder.png'
  stopAutoSlide();
});
</script>
<template>
  <NuxtLink class="hero" :style="`background-image: url(${(currentProduct.images[0]) ? `/uploads/${currentProduct.images[0]}` : 'shop/product-placeholder.png'}`" :to="`/shop/product/${currentProduct.slug}`" v-if="currentProduct">
    <div class="hero-overlay"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-3xl font-bold">{{ currentProduct.name }}</h1>
        <p class="mb-5 text-primary font-bold">{{ currentProduct.brand || 'Unknown Brand' }}</p>
        <!-- <p class="mb-5">{{ currentProduct.description }}</p> -->
        <p class="mb-5 text-xl font-bold">{{ formatRealNumber(currentProduct.sellingPrice) }} €</p>
      </div>
    </div>
    <div class="arrow left" @click="slide(-1)">&lt;</div>
    <div class="arrow right" @click="slide(1)">&gt;</div>
    <!-- <div class="custom-shape-divider-bottom-1697729642" id="shop">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-300"></path>
      </svg>
    </div> -->
  </NuxtLink>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
}

.hero-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
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
