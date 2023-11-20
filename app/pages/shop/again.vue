<script setup lang="ts">
definePageMeta({
  layout: 'none'
})

const pages = ref([
  { id: 1, active: true, heading: "Skewed One Page Scroll", description: "Just scroll down", background: `background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg')` },
  { id: 2, active: false, heading: "Page 2", description: "Nothing to do here, continue scrolling.", background: 'lighten(#1C1C1C, 5%)' },
  { id: 3, active: false, heading: "Page 3", description: "The end is near, I promise!", background: `background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg')` },
  { id: 4, active: false, heading: "Page 4", description: "Ok, ok, just one more scroll!", background: `background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')` },
  {
    id: 5,
    active: false,
    heading: "Epic finale",
    description: "Feel free to check my other pens and follow me on Twitter",
    background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg")',
  },
]);

const curPage = ref(1);
const numOfPages = pages.value.length;
const animTime = 1000;
let scrolling = false;
const pgPrefix = ".skw-page-";

const generatePageStyles = (page) => {
  console.log(page);

  return {
    'background-image': page.background,
  };
};

const pagination = () => {
  scrolling = true;

  pages.value[curPage.value - 1].active = true;
  if (curPage.value > 1) pages.value[curPage.value - 2].active = false;
  if (curPage.value < numOfPages) pages.value[curPage.value].active = false;

  setTimeout(() => {
    scrolling = false;
  }, animTime);
};

const navigateUp = () => {
  if (curPage.value === 1) return;
  curPage.value--;
  pagination();
};

const navigateDown = () => {
  if (curPage.value === numOfPages) return;
  curPage.value++;
  pagination();
};

onMounted(() => {
  document.addEventListener('mousewheel', handleMouseWheel);
  document.addEventListener('DOMMouseScroll', handleMouseWheel);
  document.addEventListener('keydown', handleKeyDown);
});

const handleMouseWheel = (e) => {
  e.preventDefault(); // Prevent the default behavior of the wheel event
  if (scrolling) return;
  const delta = e.wheelDelta || -e.deltaY || -e.detail; // Adjust this line
  if (delta > 0) {
    navigateUp();
  } else {
    navigateDown();
  }
};

const handleKeyDown = (e) => {
  if (scrolling) return;
  if (e.key === 'ArrowUp') {
    navigateUp();
  } else if (e.key === 'ArrowDown') {
    navigateDown();
  }
};
</script>

<template>
  <div class="skw-pages">
    <div v-for="page in pages" :key="page.id" :class="['skw-page', `skw-page-${page.id}`, { active: page.active }]" style="background-image: url('/uploads/shop/banner2.jpg')">
      <div v-if="page.id % 2 === 1" class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
        </div>
      </div>
      <div v-else class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">{{ page.heading }}</h2>
            <p class="skw-page__description">{{ page.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
$openSans: 'Open Sans', Helvetica, Arial, sans-serif;
body {
  background: #15181A;
  font-family: $openSans;
}

.skw-pages {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

$skewDeg: 18deg;
$magicVH: 32.4vh; // this number is magic and depends on skew angle
$scrollTime: 1s;

.skw-page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  &__half {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100vh;
    transition: transform $scrollTime;

    &--left {
      left: 0;
      transform: translate3d(-$magicVH, 100%, 0);
        }

    &--right {
      left: 50%;
      transform: translate3d($magicVH, -100%, 0);
    }

    .skw-page.active & {
      transform: translate3d(0,0,0);
    }
  }

  &__skewed {
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 140%;
    height: 100%;
    transform: skewX($skewDeg * -1);
    background: #000;

    .skw-page__half--left & {
      left: -40%;
    }
    .skw-page__half--right & {
      right: -40%;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 30%;
    color: #fff;
    transform: skewX($skewDeg);
    transition: transform $scrollTime, opacity $scrollTime;
    background-size: cover;

    .skw-page__half--left & {
      padding-left: 30%;
      padding-right: 30%;
      transform-origin: 100% 0;
    }
    .skw-page__half--right & {
      padding-left: 30%;
      padding-right: 30%;
      transform-origin: 0 100%;
    }

    .skw-page.inactive & {
      opacity: 0.5;
      transform: skewX($skewDeg) scale(0.95);
    }
  }

  &__heading {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 25px;
    text-align: center;
  }

  &__description {
    font-size: 18px;
    text-align: center;
  }

  &__link {
    color: #FFA0A0;
  }
}

</style>
