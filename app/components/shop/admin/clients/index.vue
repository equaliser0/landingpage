<script setup lang="ts">
import { useClientsStore } from '../../../../stores/clients'

const clientsStore = useClientsStore()

await clientsStore.fetchClients()

const router = useRouter()

const client = ref({})
const editClient = (clientToEdit) => {
  client.value = clientToEdit
}

const propertyToSortWith = ref('name')
const ascending = ref(true)

const clients = computed(() => {
  return sortArrayByProperty(clientsStore.clients, propertyToSortWith.value, ascending.value)
})

const sortWith = (prop) => {
  ascending.value = !ascending.value
  propertyToSortWith.value = prop
}
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded px-4 py-8">
    <div class="flex flex-col justify-center items-center">
      <div class="">
        <button class="btn" onclick="add_client.showModal()">+ Erstellen</button>
        <dialog id="add_client" class="modal">
            <div class="modal-box md:w-1/3 max-w-5xl">
              <ShopAdminClientsEditor :client="(client) ? client : undefined"/>
            </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
    <table class="table">
      <!-- head -->
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Profilbild</th>
            <th @click="sortWith('firstname')">Name</th>
            <th @click="sortWith('email')">E-Mail</th>
            <th @click="sortWith('street')">Straße</th>
            <th @click="sortWith('city')">Stadt</th>
            <th @click="sortWith('postcode')">PLZ/ZIP</th>
            <th @click="sortWith('country')">Land</th>
            <th>Bestellungen</th>
            <th @click="sortWith('isUser')">Registriert</th>
          </tr>
        </thead>
        <tbody>
        <!-- Clients List -->
        <tr v-for="client in clients" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="(client.image) ? client.image : 'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg'" />
                </div>
              </div>
            </div>
          </th>
          <th> {{ client.title }} {{ client.firstname }} {{ client.lastname }}</th>
          <th> {{ client.email }}</th>
          <th> {{ client.street }} {{ client.number }}</th>
          <th> {{ client.city }}</th>
          <th> {{ client.postcode }}</th>
          <th> {{ client.country }}</th>
          <th> {{ client.isUser }}</th>
          <!-- <th> {{ client.orders.length }}</th> -->
          <th class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
          </th>
          <th class="flex flex-wrap justify-center items-center">
            <button class="btn btn-circle ml-2" @click="router.push(`/admin/shop/clients/${client.email}/edit`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
          </th>
          <th>
            <!-- <button class="btn btn-ghost btn-xs" @click="">Edit</button> -->
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th>
          </th>
          <th>Profilbild</th>
          <th>Name</th>
          <th>E-Mail</th>
          <th>Straße</th>
          <th>Stadt</th>
          <th>PLZ/ZIP</th>
          <th>Land</th>
          <th>Bestellungen</th>
          <th>Registriert</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
