<script setup lang="">
import { useCategoriesStore } from '../../../../../stores/categories'

const categoriesStore = useCategoriesStore()

const route = useRoute()
</script>

 <template>
   <div class="pt-24">
     <ShopAdminSubcategoriesEditor :category="undefined"/>
   </div>
 </template>
