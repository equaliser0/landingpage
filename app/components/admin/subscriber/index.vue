<script setup lang="ts">
const router = useRouter()

const subscribers = await getAllSubscribers()
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded px-4 py-8">
    <!-- <div class="flex flex-col justify-center items-center">
      <div class="">
        <button class="btn" onclick="add_user.showModal()">+ Hinzufügen</button>
        <dialog id="add_user" class="modal">
          <div class="modal-box">
            <AdminSubscriberEditor :user="undefined"/>
          </div>

          <div class="flex flex-col pr-4">
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div> -->
    <table class="table table-xs">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>E-Mail</th>
          <th>Aktiv</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- Group Adding Editor -->
        <!-- <tr class="hover:bg-base-200">
          <th>
          </th>
          <th>
            <input type="text" class="input input-bordered input-sm w-full max-w-xs" placeholder="Name" />
          </th>
          <th>
            <p class="input input-sm w-full max-w-xs -ml-3">{{ getLatestID() }}</p>
          </th>
          <th>
            <input type="text" class="input input-bordered input-sm w-full max-w-xs" placeholder="Slogan" />
          </th>
          <th>
            <input type="text" class="input input-bordered input-sm w-full max-w-xs" placeholder="Slug" />
          </th>
          <th>
            <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs"  v-model="newUserData.email"/>
          </th>
          <th>
            <select class="select select-bordered select-sm w-full max-w-xs" multiple>
              <option disabled selected>Product</option>
              <option v-for="product in productsStore.products">{{ product.name }}</option>
            </select>
          </th>
          <th>
            <select class="select select-bordered select-sm w-full max-w-xs" multiple>
              <option disabled selected>Product</option>
              <option v-for="product in productsStore.products">{{ product.name }}</option>
            </select>
          </th>
          <th>
            <button class="btn btn-ghost btn-xs" @click="">Save</button>
          </th>
        </tr> -->

        <!-- Group List -->
        <tr v-for="subscriber in subscribers" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th> {{ subscriber.email }}</th>
          <th class="">
            <svg v-if="subscriber.active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </th>
          <th> {{ formatReadableDate(subscriber.created) }}</th>
          <th> {{ formatReadableDate(subscriber.updated) }}</th>
          <!-- <th class="flex flex-wrap justify-center items-center">
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/admin/user/${user.email}/edit`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="resetPassword(user.email)" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-restart"><path d="M21 6H3"/><path d="M7 12H3"/><path d="M7 18H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/></svg>
            </button>
          </th> -->
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th>
          </th>
          <th>E-Mail</th>
          <th>Aktiv</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th>
          </th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
