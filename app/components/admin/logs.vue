<script setup lang="ts">
const logs = await getLogs()

const propertyToSortWith = ref('timestamp')
const ascending = ref(false)

const filterKeyword = ref('')
const filteredLogs = computed(() => {
  return filterArrayByKeyword(sortArrayByProperty(logs, propertyToSortWith.value, ascending.value), filterKeyword.value)
})

const sortWith = (prop) => {
  ascending.value = !ascending.value
  propertyToSortWith.value = prop
}

const currentPage = ref(1)
const nextPage = () => {
  // if (currentPage.value <= ) {
  //
  // }
}
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded px-4 py-8">
    <div class="flex justify-center mb-4">
      <input class="input input-bordered input-xs w-1/3 py-4 bg-base-200" placeholder="Filter nach Stichwort" v-model="filterKeyword">
    </div>
    <table class="table table-xs">
      <!-- head -->
      <thead>
        <tr>
          <th>
          </th>
          <th @click="sortWith('timestamp')">Timestamp</th>
          <th @click="sortWith('type')">Type</th>
          <th @click="sortWith('code')">Code</th>
          <th @click="sortWith('context')">Context</th>
          <th @click="sortWith('user')">User</th>
          <th @click="sortWith('path')">Path</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in paginate(filteredLogs, currentPage, 25)" class="hover:bg-base-200">
          <th>
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th class=""> {{ formatReadableDate(log.timestamp) }}</th>
          <th class="badge gap-2 my-1" :class="`badge-${log.type}`"> {{ log.type }}</th>
          <th> {{ log.code }}</th>
          <th> {{ log.context }}</th>
          <th> {{ log.user }}</th>
          <th> {{ log.path }}</th>
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
          <th>Timestamp</th>
          <th>Type</th>
          <th>Code</th>
          <th>Context</th>
          <th>User</th>
          <th>Path</th>
          <th>
          </th>
        </tr>
      </tfoot>

    </table>
    <div class="join flex justify-center pt-4">
      <button class="join-item btn" @click="currentPage = currentPage - 1">«</button>
      <button class="join-item btn" disabled>{{ currentPage }}</button>
      <button class="join-item btn" @click="currentPage = currentPage + 1">»</button>
    </div>
  </div>
</template>
