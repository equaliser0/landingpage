<script setup lang="ts">
import { useCartStore } from '../../stores/cart'
import { useNotificationStore } from '../../stores/notifications'

const cartStore = useCartStore()
const notificationStore = useNotificationStore()

const billlingIsDelivery = ref(false)
const createAccount = ref(false)

const deliveryAddress = ref({
  title: '',
  firstname: '',
  lastname: '',
  email: '',
  street: '',
  place: '',
  zipcode: '',
  state: ''
})

const billingAddress = ref({
  title: '',
  firstname: '',
  lastname: '',
  email: '',
  street: '',
  place: '',
  zipcode: '',
  state: ''
})

const coupon = ref('')

const pay = async () => {
  if (!cartStore.items[0]) {
    return notificationStore.addNotification({
      type: 'error',
      msg: 'Es sind leider keine Produkte im Warenkorb'
    })
  }
  if (
    deliveryAddress.value.firstname
    && deliveryAddress.value.lastname
    && deliveryAddress.value.email
    && deliveryAddress.value.street
    && deliveryAddress.value.place
    && deliveryAddress.value.zipcode
    && deliveryAddress.value.state
  ) {
    try {
      // window.location.href = await checkout({
      await checkout({
        delivery: deliveryAddress.value,
        billing: (!billlingIsDelivery.value) ? billingAddress.value : deliveryAddress.value,
        products: cartStore.items,
        coupon: coupon.value
      })
    } catch (error) {
      notificationStore.addNotification({
        type: 'error',
        msg: error
      })
    }
  } else {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Bitte gebe all deine Daten vollständig ein!'
    })
  }
}

definePageMeta({
  auth: false,
})
</script>

 <template>
   <div class="container mx-auto flex pt-24 justify-center items-center p-4">
     <div class="flex flex-col justify-center items-center mt-12">
       <h1 class="font-bold text-3xl text-center">Kunden Informationen</h1>
       <div class="">
         <p>Falls du schon ein Account hast, dann melde dich an! Ansonsten erstelle ein Account, um zukünftig alle Daten automatisch ausgefüllt zu haben.</p>
         <div class="w-full flex justify-center pt-8 pl-2">
           <button class="btn btn-secondary mx-2" target="_blank" disabled>Einloggen</button>
         </div>
       </div>
       <div class="pt-8 text-center">
         <div class="form-control w-full max-w-xs">
           <h2 class="pb-2">Hast du ein Coupon?</h2>
           <input type="text" placeholder="Coupon Code" class="input input-bordered w-full max-w-xs" v-model="coupon"/>
           <button class="btn btn-primary mt-2" v-if="coupon">Discount aktivieren</button>
         </div>
       </div>
       <div class="flex flex-wrap justify-center py-8">

         <!-- Container -->
         <div class="flex flex-wrap">
           <!-- Delivery Address -->
           <div class="flex flex-col bg-base-100 p-8 rounded-xl m-2">
             <div class="font-bold text-xl">
               <h2>Lieferadresse</h2>
             </div>
             <div class="flex flex-wrap">
               <div class="flex flex-col pr-4">
                 <!-- Title -->
                 <!-- <select class="select select-bordered w-full max-w-xs">
                   <option disabled selected>Who shot first?</option>
                   <option>Woman</option>
                   <option>Man</option>
                 </select> -->

                 <!-- First Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Vorname</span>
                   </label>
                   <input type="text" placeholder="Vorname" class="input input-bordered w-full max-w-xs" v-model="deliveryAddress.firstname" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Nachname</span>
                   </label>
                   <input type="text" placeholder="Nachname" class="input input-bordered w-full max-w-xs" v-model="deliveryAddress.lastname" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">E-Mail-Adresse</span>
                   </label>
                   <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" v-model="deliveryAddress.email" />
                 </div>
               </div>

               <div class="flex flex-col pr-4">
                 <!-- Street -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Straße</span>
                   </label>
                   <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" v-model="deliveryAddress.street" />
                 </div>

                 <!-- City Province -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Ort</span>
                   </label>
                   <input type="text" placeholder="Ort" class="input input-bordered w-full max-w-xs" v-model="deliveryAddress.place" />
                 </div>

                 <!-- Postal -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">PLZ oder ZIP Code</span>
                   </label>
                   <input type="text" placeholder="PLZ/ZIP" class="input input-bordered w-full max-w-xsfull" v-model="deliveryAddress.zipcode" />
                 </div>

                 <!-- State -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Land/Staat</span>
                   </label>
                   <input type="text" placeholder="Lad/Staat" class="input input-bordered w-full max-w-xs" v-model="deliveryAddress.state" />
                 </div>
                 <!-- Addresses equals -->
                 <div class="form-control w-36">
                   <label class="label cursor-pointer">
                     <input type="checkbox" class="checkbox" v-model="billlingIsDelivery"/>
                     <span class="label-text p-2">Lieferadresse ist Rechnungsadresse</span>
                   </label>
                 </div>
               </div>
             </div>
           </div>

           <!-- Billing Address -->
           <div class="flex flex-col bg-base-100 p-8 rounded-xl m-2" v-if="!billlingIsDelivery">
             <div class="font-bold text-xl">
               <h2>Rechnungsadresse</h2>
             </div>
             <div class="flex flex-wrap">
               <div class="flex flex-col pr-4">
                 <!-- First Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Vorname</span>
                   </label>
                   <input type="text" placeholder="Vorname" class="input input-bordered w-full max-w-xs" v-model="billingAddress.firstname" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Nachname</span>
                   </label>
                   <input type="text" placeholder="Nachname" class="input input-bordered w-full max-w-xs" v-model="billingAddress.lastname" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">E-Mail-Adresse</span>
                   </label>
                   <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" v-model="billingAddress.email" />
                 </div>
               </div>

               <div class="flex flex-col pr-4">
                 <!-- Street -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Straße</span>
                   </label>
                   <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" v-model="billingAddress.street" />
                 </div>

                 <!-- City Province -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Ort</span>
                   </label>
                   <input type="text" placeholder="Ort" class="input input-bordered w-full max-w-xs" v-model="billingAddress.place" />
                 </div>

                 <!-- Postal -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">PLZ oder ZIP Code</span>
                   </label>
                   <input type="number" placeholder="PLZ/ZIP" class="input input-bordered w-full max-w-xs" v-model="billingAddress.zipcode" />
                 </div>

                 <!-- State -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Land/Staat</span>
                   </label>
                   <input type="text" placeholder="Lad/Staat" class="input input-bordered w-full max-w-xs" v-model="billingAddress.state" />
                 </div>
               </div>
             </div>
           </div>
         </div>

         <!-- TODO -->
         <div class="w-full pt-8 pl-2">
           <div class="flex flex-col justify-center items-center">
             <div class="form-control">
               <label class="label cursor-pointer">
                 <input type="checkbox" class="checkbox" v-model="createAccount"/>
                 <span class="pl-2 label-text">Account erstellen</span>
               </label>
             </div>
             <div class="flex flex-col justify-center items-center">
               <button class="btn btn-primary" @click="pay()">{{ cartStore.calcTotal() }}€ bezahlen</button>
             </div>
             <div class="pt-8">
               <img class="rounded-md" src="https://images.prismic.io/vivawallet/9a46e674-573f-486d-95c6-8a9a2cd2f9ec_Homepage+Germany.png?auto=compress,format">
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>
