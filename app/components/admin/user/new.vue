<script setup lang="ts">
const { data } = await useAsyncData(
  "new-customers",
  () => $fetch("https://randomuser.me/api/?results=20"),
  {
    default: () => [],
    transform: (data: any) => data.results,
  }
)
// 
// const slider = ref(null)
//
// onMounted(() => {
//   console.log(slider);
//
//   let isDown = false
//   let startX
//   let scrollLeft
//
//   slider.value.addEventListener('mousedown', (e) => {
//     isDown = true
//     slider.value.classList.add('active')
//     startX = e.pageX - slider.value.offsetLeft
//     scrollLeft = slider.value.scrollLeft
//   })
//   slider.value.addEventListener('mouseleave', () => {
//     isDown = false
//     slider.value.classList.remove('active')
//   })
//   slider.value.addEventListener('mouseup', () => {
//     isDown = false
//     slider.value.classList.remove('active')
//   })
//   slider.value.addEventListener('mousemove', (e) => {
//     if(!isDown) return
//     e.preventDefault()
//     const x = e.pageX - slider.offsetLeft
//     const walk = (x - startX) * 3 //scroll-fast
//     slider.scrollLeft = scrollLeft - walk
//     console.log(walk)
//   })
// })
</script>

<template>
  <section class="mt-5">
    <p class="font-bold text-center">Neue Kunden</p>
    <div
      class="mt-5 flex w-full items-start gap-6 overflow-x-auto rounded-lg border bg-base-100 px-5 py-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md mb-8"
    >
      <div class="flex shrink-0 flex-col items-center justify-center gap-2">
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-muted bg-base-200 rounded rounded-full">
          <!-- <Icon name="heroicons:plus" class="h-5 w-5" /> -->
          <p class="text-3xl">+</p>
        </button>
        <div>
          <p class="text-sm font-semibold">Neu</p>
        </div>
      </div>
      <template v-for="n in data">
        <div class="flex shrink-0 flex-col items-center gap-2">
          <img
            class="h-10 w-10 rounded-full object-cover"
            :src="n.picture.thumbnail"
            :alt="n.name.first"
          />
          <div class="text-center">
            <p class="text-sm font-semibold">{{ n.name.first }} {{ n.name.last }}</p>
            <p class="text-xs text-muted-foreground">seit ca. 10min</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
