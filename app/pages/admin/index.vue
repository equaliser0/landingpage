<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="container mx-auto pt-24">
    <div class="flex flex-col mt-8">
      <div class="text-center w-full">
        <h1 class="text-xl font-bold">Administration</h1>
      </div>
      <div class="flex flex-wrap justify-around items-center m-8">

        <div class="card w-96 bg-base-300 m-4">
          <div class="card-body">
            <h2 class="card-title">Landingpage</h2>
            <p>Verwalte den Content deiner <br><b>Landingpage</b>!</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn" disabled>Coming soon</NuxtLink>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-300 m-4">
          <div class="card-body">
            <h2 class="card-title">Blog</h2>
            <p>Verwalte den Content deines <br><b>Blogs</b>!</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn" disabled>Coming soon</NuxtLink>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-primary m-4 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Shop</h2>
            <p>Verwalte den Content deines <br><b>Online Shops</b>!</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn" to="/admin/shop">Enter</NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
