<script setup lang="ts">
const route = useRoute()

const user = await getUser(route.params.email)
</script>

 <template>
   <div class="pt-24" v-if="user">
     <h3 class="font-bold text-lg pb-4">User bearbeiten</h3>

     <AdminUserEditor :user="user"/>
   </div>
 </template>
