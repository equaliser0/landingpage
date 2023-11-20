<script setup lang="ts">
const route = useRoute()

const product = await getProduct(route.params.slug)
</script>

 <template>
   <div class="pt-24" v-if="product">
     <ShopAdminProductsEditor :product="product"/>
   </div>
 </template>
