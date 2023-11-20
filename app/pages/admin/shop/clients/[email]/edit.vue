<script setup lang="ts">
const route = useRoute()

const client = await getClient(route.params.email)
</script>

 <template>
   <div class="pt-24" v-if="client">
     <h3 class="font-bold text-lg pb-4">Kunden bearbeiten</h3>

     <ShopAdminClientsEditor :client="client"/>
   </div>
 </template>
