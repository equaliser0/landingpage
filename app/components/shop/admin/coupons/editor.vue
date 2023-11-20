<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useNotificationStore } from '../../../../stores/notifications';

const router = useRouter()

const props = defineProps({
  coupon: {
    type: Object,
    required: true
  }
})

const notificationStore = useNotificationStore()

const coupons = computed(() => {
  return couponsStore.coupons.map((coupon) => coupon.slug);
})

const date = new Date().toISOString().split('T')[0]

const edit = ref(props.coupon || {
  code: '',
  discount: '',
})

const selectedFiles = ref([])
const uploadProgressInfos = ref([])
const newFilesInfos = ref([])

const emit = defineEmits(['updated'])

const addNewCoupon = async () => {
  try {
    if (edit.value.code && edit.value.discount) {
      if (!edit.value.id) {
        await addCoupon(edit)
      } else {
        await updateCoupon(edit)
      }
      notificationStore.addNotification({
        type: 'success',
        msg: 'Saved!'
      })
      emit('updated')
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'Bitte alle Felder ausfülen!'
      })
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const removeCoupon = async () => {
  try {
    await deleteProduct(edit.value.slug)
    await couponsStore.fetchProducts()
    router.push(`/admin/shop/coupons`)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Successfully removed!'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">

      <!-- Product infos -->
      <div class="w-full p-4">
        <h2 class="font-bold">Coupon Daten</h2>
        <!-- Coupon Code -->
        <div class="w-full">
          <div class="form-control w-full">
            <label class="label">
              <p class="label-text">
                Code*
              </p>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full"  v-model="edit.code"/>
          </div>
        </div>

        <!-- Coupon Discount -->
        <div class="">
          <div class="form-control w-full">
            <label class="label">
              <p class="label-text">Discount (in %)</p>
            </label>
            <input type="number" placeholder="20" min="1" max="100" class="input input-bordered w-full"  v-model="edit.discount"/>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-4 rounded-t rounded-xl">
      <button class="btn btn-success mr-2" @click="addNewCoupon()">Speichern</button>
      <button class="btn btn-error mr-2" onclick="remove_coupon.showModal()" v-if="coupon">Deaktivieren</button>
      <dialog id="remove_coupon" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Achtung!</h3>
          <p class="py-4">Bist du sicher, dass du den Coupon deaktivieren willst?</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn btn-error" @click="disableCoupon()">Deaktivieren</button>
              <button class="btn">Abrechen</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>

  </div>
</template>
