<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import { useUserStore } from '../stores/user'
import { useClientsStore } from '../stores/clients'
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'
import { useCategoriesStore } from '../stores/categories'
import { useNotificationStore } from '../stores/notifications'

const route = useRoute()
const router = useRouter()

const { status, signOut } = useAuth()

const el = ref<HTMLElement | null>(null)
const scroll = useScroll(el)
const { top, y } = toRefs(scroll)
const displayY = computed({
  get() {
    return y.value.toFixed(1)
  },
  set(val) {
    y.value = Number.parseFloat(val)
  },
})

// Cookies
const cookie = useCookie('cookie')
const acceptCookies = () => {
  cookie.value = true
}

const email = ref('')
const subscribing = async () => {
  try {
    if (validEmail(email.value)) {
      await subscribe(email.value)
      notificationStore.addNotification({
        type: 'success',
        msg: 'Danke fürs Abonnieren!'
      })
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'Not a valid e-mail-address!'
      })
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

// Assets
const getLogo = () => {
  if (themeStore.colorMode.preference === 'dark') {
    return 'logo.png'
  }

  if (themeStore.colorMode.preference === 'light') {
    return 'logo_dark.png'
  }
}

// Global Notifications
const getNotifcationType = (notificationType) => {
  if (notificationType === 'standard') {
    return 'bg-base-100';
  };
  if (notificationType === 'success') {
    return 'alert-success';
  };
  if (notificationType === 'warning') {
    return 'alert-warning';
  };
  if (notificationType === 'error') {
    return 'alert-error';
  };
}
</script>

<template>
  <div ref="el">

    <!-- Cookies -->
    <div class="bottom-10 z-50 fixed w-full flex justify-center" v-if="!cookie">
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Cookies!</h2>
          <p>Für die Benutzerfreundlichkeit nutzen wir Cookies</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="acceptCookies()">Ok</button>
            <!-- <button class="btn btn-ghost">Deny</button> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Notification Toasts -->
    <div class="toast toast-end z-30">
      <div class="alert shadow" v-for="notification in notificationStore.notifications" :class="getNotifcationType(notification.type)" @click="notificationStore.closeNotification(notification)">
        <svg v-if="notification.type === 'info'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <svg v-if="notification.type === 'success'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <svg v-if="notification.type === 'warning'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <svg v-if="notification.type === 'error'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{{ notification.msg }}</span>
      </div>
    </div>

    <div class="w-screen h-screen flex justify-center items-center bg-[url(/uploads/shop/banner.webp)] bg-cover bg-fixed bg-center bg-no-repeat text-center" v-if="!route.path.startsWith('/login') && lockedScreen && status === 'unauthenticated'">
      <div class="flex flex-col items-center w-full bg-base-200/70 backdrop-blur-md py-8">
        <img class="h-32" :src="`/${(themeStore.colorMode.preference === 'dark') ? 'logo.png' : 'logo_dark.png' }`" alt="The Crowned Lion">
        <h1 class="text-2xl font-bold pb-4">Willkommen</h1>
        <p>Was schönen wird hier gebastelt. <br> <b>Gib deine E-Mail Adresse ein und <br> werde benachrichtig, wenn der Shop online geht!</b></p>
        <div class="flex items-center mb-2 mt-8">
          <input class="input input-bordered w-[400px] mr-1" placeholder="E-Mail" v-model="email" @keydown.enter.prevent="subscribing()">
          <button class="btn btn-primary" @click="subscribing()">Enter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
