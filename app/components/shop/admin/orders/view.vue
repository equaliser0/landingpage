<script setup lang="ts">
defineProps({
  order: {
    type: Object,
    required: true
  }
})

const selected = ref([])

</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded px-4 pb-8" v-if="order">
    <!-- Table Data -->
    <table class="table table-xs table-pin-rows table-pin-col">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>ID</th>
          <th>Brand</th>
          <th>Property Name</th>
          <th>Property Value</th>
          <th>Color</th>
          <th>More Properties</th>
          <th>Selling Price</th>
          <th>Buying Price</th>
          <th>EAN</th>
          <th>Quantity</th>
          <th>Group Name</th>
          <th>Group ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in productsStore.products" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>{{ item['name'] }}</th>
          <th>{{ item['product-id'] }}</th>
          <th>{{ item['brand'] }}</th>
          <th>{{ item['property-name'] }}</th>
          <th>{{ item['property-value'] }}</th>
          <th>{{ item['color'] }}</th>
          <th>{{ item['properties'] }}</th>
          <th>{{ item['selling-price'] }}</th>
          <th>{{ item['buying-price'] }}</th>
          <th>{{ item['EAN'] }}</th>
          <th>{{ item['quantity'] }}</th>
          <th>{{ item['group-name'] }}</th>
          <th>{{ item['group-id'] }}</th>
          <th>
            <button class="btn btn-ghost btn-xs" @click="router.push(`/admin/shop/edit/${item['product-id']}`)">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
          <th>Brand</th>
          <th>Property Name</th>
          <th>Property Value</th>
          <th>Color</th>
          <th>More Properties</th>
          <th>Selling Price</th>
          <th>Buying Price</th>
          <th>EAN</th>
          <th>Quantity</th>
          <th>Group Name</th>
          <th>Group ID</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
