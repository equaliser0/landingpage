<script setup lang="">
import { useProductsStore } from '../../../../stores/products'

const productsStore = useProductsStore()

const route = useRoute()

</script>

 <template>
   <div class="pt-24">
     <ShopAdminProductsEditor :product="undefined"/>
   </div>
 </template>
