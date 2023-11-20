<script setup lang="ts">
const route = useRoute()

const category = await getCategory(route.params.slug)
const subcategory = await getSubcategory(route.params.slug, route.params.subslug)
</script>

 <template>
   <div class="pt-24" v-if="category">
     <ShopAdminSubcategoriesEditor :subcategory="subcategory"/>
   </div>
 </template>
