<script setup lang="ts">
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()

const total = ref(0)
total.value = cartStore.calcTotal()

watch(cartStore.items, () => {
  total.value = cartStore.calcTotal()
}, { deep: true })

const router = useRouter()
definePageMeta({
  auth: false,
})
</script>

 <template>
   <div class="container mx-auto pt-24">
     <div class="w-full flex flex-col justify-center items-center mt-12" v-if="!cartStore.items.length">
       <div class="w-full flex flex-col justify-center items-center ">
         Du hast noch keine Produkte in deinem Warenkorb!
         <NuxtLink class="btn btn-primary mt-4" to="/shop">Zu den Produkten</NuxtLink>
       </div>
     </div>
     <div class="mt-16" v-else>
       <div class="w-full text-center">
         <h1 class="text-xl pb-4">Warenkorb</h1>
       </div>
       <div class="overflow-x-auto bg-base-300 rounded">
         <table class="table">
           <!-- head -->
           <thead>
             <tr>
               <th></th>
               <th>Produkt</th>
               <th>Preis</th>
               <th>Anzahl</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             <!-- row 1 -->
             <tr class="hover:bg-base-200" v-for="item in cartStore.items" @click="router.push(`/shop/product/${item.slug}`)">
               <!-- <tr class="hover:bg-base-300" v-for="item in cartStore.items" @click="router.push(`shop/product/${item.slug}`)"> -->
                <th>
                   <!-- <label>
                     <input type="checkbox" class="checkbox" />
                   </label> -->
                 </th>
                 <td>
                   <div class="flex items-center space-x-3">
                     <div class="avatar">
                       <div class="mask mask-squircle w-12 h-12">
                         <img :src="(item.images) ? `/uploads/shop/products/${item.images[0]}` : '/uploads/shop/products/product-placeholder.png'"/>
                       </div>
                     </div>
                     <div class="flex items-center space-x-3">
                       <div>
                         <div class="font-bold">{{ item.name }}</div>
                       </div>
                     </div>
                   </div>
                 </td>
                 <td>
                   <div class="flex items-center space-x-3">
                     <div>
                       <div class="text-sm opacity-50">{{ formatRealNumber(item.price) }} €</div>
                     </div>
                   </div>
                 </td>
                 <td>
                   <div class="flex items-center space-x-3">
                     <div>
                       <input type="number" class="text-sm input input-bordered w-24" v-model="item.quantity" disabled/>
                     </div>
                   </div>
                 </td>
                 <th>
                   <button class="btn btn-ghost btn-xs" @click="cartStore.removeFromCart(item)">Entfernen</button>
                 </th>
               </tr>
             </tbody>
             <!-- foot -->
             <tfoot>
               <tr>
                 <th></th>
                 <th>Produkt</th>
                 <th>Preis</th>
                 <th>Anzahl</th>
                 <th></th>
               </tr>
             </tfoot>

           </table>
        </div>
      </div>
     <div class="w-full flex flex-wrap justify-center" v-if="cartStore.items.length">
       <NuxtLink class="btn btn-primary m-2" to="/shop/checkout">Bezahlen</NuxtLink>
       <div class="m-2">
         <h2>Total: <b>{{ formatRealNumber(Number(total)) }} €</b></h2>
       </div>
     </div>
   </div>
 </template>
