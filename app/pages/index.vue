<script setup lang="ts">
const router = useRouter()

console.log(window);


onBeforeMount(() => {
  // router.push('/shop')
})
definePageMeta({
  layout: 'none',
})
// Orbitron
// Gruppo
</script>
<template>
  <div :style="{ 'font-family': 'Blinker' }" class="w-full h-full text-primary-100">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Blinker">
    <!-- Hero -->
    <section class="text-white py-8 h-screen text-center shadow bg-[url(/uploads/nujin_hero.webp)] bg-no-repeat bg-cover bg-center">
      <div class="container mx-auto flex flex-wrap items-end justify-center h-full">
        <div class="w-full">
          <div class="w-full py-6">
            <!-- <img src="/nujin_logo.png" alt=""> -->
            <h1 class="text-6xl">nujin</h1>
            <p class="text-lg font-bold">Build with ease.</p>
          </div>
          <div class="w-full py-2">
            <a href="#" class="bg-white text-black px-6 py-3 mt-8 rounded-full">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="bg-base-200 py-20">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-1/3">
            <!-- <img src="" alt="About Image" class="w-full"> -->
          </div>
          <div class="w-2/3 pl-10">
            <h2 class="text-3xl font-bold">About</h2>
            <p class="text-lg mt-4">It's a CMS like out-of-the-box and ready-to-use fullstack data management system boilerplate built with</p>
            <div class="flex justify-around p-8">
              <img src="https://www.svgrepo.com/show/354131/nuxt-icon.svg" class="w-24 h-24">
              <img src="https://www.svgrepo.com/show/374118/tailwind.svg" class="w-24 h-24">
              <img src="https://www.svgrepo.com/show/353995/leveldb.svg" class="w-24 h-24">
              <img src="https://www.svgrepo.com/show/303600/typescript-logo.svg" class="w-24 h-24">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-base-100 text-neutral py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Features</h2>
        <div class="grid grid-cols-4 gap-8">
          <div class="text-center">
            <!-- <img src="/images/feature-1-icon.svg" alt="Feature 1 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">User Authentication</h3>
            <p class="mt-2">Securely manage user access to your CMS.</p>
          </div>
          <div class="text-center">
            <!-- <img src="/images/feature-2-icon.svg" alt="Feature 2 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">User Data Management</h3>
            <p class="mt-2">Easily create, read, update, and delete user data.</p>
          </div>
          <div class="text-center">
            <!-- <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">File Management</h3>
            <p class="mt-2">Efficiently organize and store your files.</p>
          </div>
          <div class="text-center">
            <!-- <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">Data Management</h3>
            <p class="mt-2">Efficiently organize and store your Data.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Extentions -->
    <section class="bg-gray-800 py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Extensions</h2>
        <div class="grid grid-cols-4 gap-8">
          <div class="text-center">
            <!-- <img src="/images/feature-1-icon.svg" alt="Feature 1 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">Shop</h3>
            <p class="mt-2">Let it become your fully customizable onlineshop</p>
          </div>
          <div class="text-center">
            <!-- <img src="/images/feature-2-icon.svg" alt="Feature 2 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">Blog</h3>
            <p class="mt-2">Manage your Blog with ease</p>
          </div>
          <div class="text-center">
            <!-- <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">Content</h3>
            <p class="mt-2">Simply edit your landingpage content</p>
          </div>
          <div class="text-center">
            <!-- <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto"> -->
            <h3 class="text-xl font-bold mt-4">Social-Media</h3>
            <p class="mt-2">Host your community</p>
          </div>
        </div>
      </div>
    </section>

    <div class="flex flex-wrap w-full">
      <!-- CTA -->
      <section class="w-full md:w-1/2 h-64">
        <div class="bg-gray-900">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                Supercharge Your Development Process
              </h2>
              <p class="mt-4 text-lg text-gray-300">
                Download and install our free boilerplate to save time and effort on your next project.
              </p>
              <a href="https://example.com/boilerplate-download" class="mt-8 inline-flex items-center px-6 py-3 border border-green-400 text-base font-medium rounded-full text-white bg-green-600 hover:bg-indigo-700">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA 2 -->
      <section class="w-full md:w-1/2 h-64">
        <div class="bg-indigo-800">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                Hire Our Developers
              </h2>
              <p class="mt-4 text-lg text-gray-300">
                We customize versions for your business needs within the same month and 10x less costs!
              </p>
              <a href="https://example.com/boilerplate-download" class="mt-8 inline-flex items-center px-6 py-3 border border-green-400 text-base font-medium rounded-full text-white bg-green-600 hover:bg-indigo-700">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Demo -->
    <section class="bg-base-200">
      <div class="flex flex-col">
        <div class="w-full text-center pt-16 pb-8">
          <h3 class="text-3xl font-bold text-center mb-2">Demo</h3>
          <p class="mt-2">Build your prototype here within your browser!</p>
        </div>
        <div class="w-full h-screen">
          <iframe src="https://codesandbox.io/p/github/ecosisTech/nuxt-pwa-cms-boilerplate/main?import=true&embed=1&file=%2Fapp%2Fpages%2Flogin.vue&theme=dark"
            style="width:100%; height:100%; overflow:hidden;"
            title="Nuxt Ultimate CMS Boilerplate"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>
