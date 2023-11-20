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

const themeStore = useThemeStore()
const userStore = useUserStore()
const clientsStore = useClientsStore()
const cartStore = useCartStore()
const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
const notificationStore = useNotificationStore()

// Cookies
const cookie = useCookie('cookie')
const acceptCookies = () => {
  cookie.value = true
}

// Menu Subbar
const activeSubmenu = ref(false)
const activateSubmenu = () => {
  activeSubmenu.value = !activeSubmenu.value
  // clickOutside(sidebar, () => { // TODO
  //   activeSidebar.value = false
  // })
}

// Menu search Bar
const searchbar = ref(false)
const activateSearchBar = () => {
  return searchbar.value = !searchbar.value
}

// Admin Sidebar
const sidebar = ref()
const activeSidebar = ref(false)
const toggleSidebar = () => {
  activeSidebar.value = !activeSidebar.value
  // clickOutside(sidebar, () => { // TODO
  //   activeSidebar.value = false
  // })
}

router.afterEach(() => {
  if (screen.width < 768) {
    activeSidebar.value = false
  }
})

// Password Protection
const pw = 'crowned'
const enterPW = ref('')

const lockedScreen = ref(true)
const unlockScreen = () => {
  if (pw === enterPW.value) {
    lockedScreen.value = false
  }
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

// Methods
const logout = async () => {
  await signOut()
  router.push('/shop')
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

const nuxtApp = useNuxtApp()

onBeforeMount(async () => {
  // window.addEventListener("scroll", onScroll)
  await categoriesStore.fetchCategories()
  await productsStore.fetchProducts()
  await clientsStore.fetchClients()
  //
  // if (route.path.startsWith('/admin') && !productsStore.initialized) {
  //   await productsStore.init()
  // }
  // await clientsStore.fetchClients()
  // await productsStore.fetchGroups()
})

onMounted(() => {
  nuxtApp.hook("page:finish", () => {
    console.log("page:finish");

    window.scrollTo(0, 0)
  })
});
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

    <div class="w-full" v-else>
      <!-- Navbar -->
      <div class="flex flex-col justify-center items-center w-full mb-4 fixed z-40 z-50 w-full" :class="{ 'bg-none': route.path === '/shop' }">
        <div class="navbar w-full">

          <!-- Navbar Start -->
          <div class="navbar-start">
            <!-- Menu -->
            <!-- Mobile visible Sidebar Button -->
            <button class="btn btn-circle btn-ghost" :class="(status === 'authenticated') ? 'block' : 'hidden'" @click="toggleSidebar()">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg v-if="!activeSidebar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="15" x2="15" y1="3" y2="21"/><path d="m8 9 3 3-3 3"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-close"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/></svg>
              </label>
            </button>

            <!-- Dropdown Mega Menu -->
            <div class="">
              <label tabindex="0" class="btn btn-ghost btn-circle" @click="activateSubmenu()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>

              <!-- <ul class="dropdown-content relative flex flex-wrap bg-base-100/70 backdrop-blur-xl menu xl:menu-horizontal w-[720px] rounded border border-base-100 mt-16">
                <li class="bg-base-100/50 backdrop-blur-xl m-1 rounded flex-1" v-for="category in categoriesStore.categories">
                  <NuxtLink :to="`/shop/${category.slug}`">
                    <img class="w-12 h-12 rounded" :src="'/uploads/' + category.image"/>
                    {{ category.name }}
                  </NuxtLink>
                  <ul v-for="subcategory in category.subcategories">
                    <li><NuxtLink :to="`/shop/${category.slug}/${subcategory}`">{{ subcategory }}</NuxtLink></li>
                  </ul>
                </li>
              </ul> -->
            </div>

            <!-- Search Button -->
            <button class="btn btn-ghost btn-circle w-12" @click="activateSearchBar()">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>

          <!-- Navbar Center -->
          <div class="navbar-center md:w-2/3 flex justify-center">
            <searchbar v-if="searchbar"/>
            <NuxtLink class=" btn btn-ghost normal-case text-xl font-thin flex justify-center" to="/shop" v-if="!searchbar">
              <img class="h-12" :src="`/${(themeStore.colorMode.preference === 'dark') ? 'logo.png' : 'logo_dark.png' }`" alt="The Crowned Lion">
            </NuxtLink>
          </div>

          <!-- Navbar End -->
          <div class="navbar-end">
            <div class="btn btn-circle btn-ghost">
              <label class="swap swap-rotate">

                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" @click="themeStore.toggleMode()" />

                <!-- system icon -->
                <!-- <svg :class="`swap-${(themeStore.preference === 'system') ? 'on' : 'off'}`" class="fill-current w-6 h-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg> -->
                <!-- sun icon -->
                <svg :class="`swap-${(themeStore.preference === 'light') ? 'off' : 'on'}`" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

                <!-- moon icon -->
                <svg :class="`swap-${(themeStore.preference === 'dark') ? 'on' : 'off'}`" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

              </label>
            </div>
            <div class="flex">
              <!-- Cart -->
              <div class="dropdown dropdown-end btn btn-ghost btn-circle">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                  <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span class="badge badge-primary badge-sm indicator-item">{{ cartStore.items.length }}</span>
                  </div>
                </label>
                <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100/80 backdrop-blur-xl shadow">
                  <div class="card-body">
                    <span class="font-bold text-lg">{{ cartStore.items.length }} Produkte</span>
                    <span class="text-accent">Total: {{ cartStore.calcTotal() }}€</span>
                    <div class="card-actions">
                      <button class="btn btn-primary btn-block" @click="router.push('/shop/cart')">Warenkorb</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Account -->
              <NuxtLink class="btn btn-ghost btn-circle" to="/login" v-if="status === 'unauthenticated'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
              </NuxtLink>
              <div class="dropdown dropdown-end btn btn-ghost btn-circle" v-else>
                <label tabindex="0" class="btn btn-ghost btn-circle avatar flex justify-center items-center">
                  <div class="w-10 rounded-full">
                    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" />
                  </div>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li v-if="userStore.isAdmin"><NuxtLink to="/admin">Admin</NuxtLink></li>
                  <!-- <li><NuxtLink to="/settings">Settings</NuxtLink></li> -->
                  <li><button @click="logout()">Logout</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Navbar Categories -->
        <div
          class="w-full flex flex-col justify-center items-center my-2 font-bold uppercase"
          v-show="activeSubmenu"
        >
          <div class="divider container mx-auto -my-1 w-64"></div>
          <div class="w-full pt-1 flex justify-center">
            <NuxtLink class="dropdown px-2 hover:text-accent hover:font-bold text-sm text-center" :to="`/shop/${category.slug}`" v-for="category in categoriesStore.categories">{{ category.name }}</NuxtLink>
          </div>
        </div>

      </div>
      <section class="flex bg-base-300 min-h-screen">
        <!-- Admin Menu -->
        <div
          class="bg-base-300 fixed md:static min-h-screen justify-center items-center z-50"
          :class="(activeSidebar) ? 'block' : 'hidden'"
          ref="sidebar"
          v-if="userStore.isAdmin && status === 'authenticated'"
        >
          <button class="w-full p-4 block" @click="toggleSidebar()">
            <div class="flex justify-end bg-base-200 w-full px-2 py-4 rounded rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-close"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/></svg>
            </div>
          </button>
          <ul class="menu w-auto w-max-1/4">
            <!-- <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Hub
              </a>
            </li> -->
            <li>
              <details open>
                <summary>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
                  Shop
                </summary>
                <ul>
                  <li>
                    <NuxtLink to="/admin/shop">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                      Übersicht
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/admin/shop/orders">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                      Bestellungen
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/admin/shop/products">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                      Produkte
                    </NuxtLink>
                  </li>
                  <li>
                    <details open>
                      <summary>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"/><path d="M2 8v11a2 2 0 0 0 2 2h14"/></svg>
                        Kategorien
                      </summary>
                      <ul>
                        <li>
                          <NuxtLink :to="`/admin/shop/categories/new`">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            Hinzufügen
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/admin/shop/categories">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                            Alle
                          </NuxtLink>
                        </li>
                        <li v-for="category in categoriesStore.categories">
                          <details class="bg-base-200 rounded rounded-xl m-1 max-w-sm">
                            <summary>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                              {{ category.name }}
                            </summary>
                            <ul>
                              <li>
                                <NuxtLink :to="`/admin/shop/categories/edit/${category.slug}`">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                                  Bearbeiten
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink :to="`/admin/shop/categories/${category.slug}/new`">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                  Hinzufügen
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink :to="`/admin/shop/categories/${category.slug}`">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                                  Alle
                                </NuxtLink>
                              </li>
                              <li v-for="subcategory in category.subcategories">
                                <NuxtLink :to="`/admin/shop/categories/${category.slug}/edit/${subcategory}`">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                  {{ subcategory }}
                                </NuxtLink>
                              </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <NuxtLink to="/admin/shop/clients">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><circle cx="12" cy="8" r="2"/><path d="M15 13a3 3 0 1 0-6 0"/></svg>
                      Kunden
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/admin/shop/coupons">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>
                      Coupons
                    </NuxtLink>
                  </li>
                  <!-- <li>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Coupons
                    </a>
                  </li> -->
                </ul>
              </details>
            </li>
            <li>
              <NuxtLink to="/admin/user">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                User
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/subscriber">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg>
                Subscriber
              </NuxtLink>
            </li>
            <div class="divider"></div>

            <!-- <li>
              <NuxtLink to="/admin/files">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/></svg>
                Files
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/settings">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                Settings
              </NuxtLink>
            </li> -->
            <li>
              <NuxtLink to="/admin/logs">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/></svg>
                Logs
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Content -->
        <div class="bg-base-200 h-screen flex w-full flex flex-col justify-between shadow shadow-l">
          <div class="overflow-scroll flex flex-col justify-between h-full" :class="(route.path.startsWith('/admin/') ? 'p-4' : 'p-0')">
            <slot/>
            <Footer/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
<style>
.slider div:first-child{
  transform: translateX(-100%);
  transition: transform .3s ease-in
}
.slider:hover div{
  transform: translateY(0)
}

</style>
