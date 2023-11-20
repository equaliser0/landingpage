<script setup lang="ts">
const route = useRoute()

const category = await getCategory(route.params.slug)
console.log(category);

</script>

 <template>
   <div class="pt-24" v-if="category">
     <ShopAdminCategoriesEditor :category="category"/>
   </div>
 </template>
