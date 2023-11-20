<script setup lang="ts">
import { useUserStore } from '../stores/user';
import { useThemeStore } from '../stores/theme';
import { useNotificationStore } from '../stores/notifications';

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const themeStore = useThemeStore()
const notificationStore = useNotificationStore()

const { signIn } = useAuth()

const email = ref('')
const password = ref('')
const password2 = ref('')
const registration = ref(false)

const login = async () => {
  try {
    if (validEmail(email.value)) {
      const { error } = await signIn('credentials', { username: email.value, password: password.value })
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

const register = async () => {
  try {
    if (password.value === password2.value) {
      if (validEmail(email.value)) {
        const { error } = await addUser({
          id: '',
          email: email.value,
          password: password.value,
          username: email.value,
          roles: ['user']
        })
        registration.value = false
        notificationStore.addNotification({
          type: 'success',
          msg: 'You are registered!'
        })
      } else {
        notificationStore.addNotification({
          type: 'error',
          msg: 'Not a valid E-Mail address!'
        })
      }
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'Passwords dont match!'
      })
    }
  } catch (error) {
    console.log(error);

    notificationStore.addNotification({
      type: 'error',
      msg: error.message
    })
  }
}

// const resetPassword = async () => {
//   try {
//     if (validEmail(email.value)) {
//       await userStore.register(email.value, password.value)
//       router.push('/')
//     } else {
//       notificationStore.addNotification({
//         type: 'error',
//         msg: 'Not a valid e-mail-address!'
//       })
//     }
//   } catch (error) {
//     notificationStore.addNotification({
//       type: 'error',
//       msg: error
//     })
//   }
// }

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/admin/shop',
  },
})

onMounted(() => {
  if (route.query.error === 'CredentialsSignin') {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Credentials wrong!'
    })
  }
})
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div class="w-full flex justify-center">
          <img class="h-32" :src="`/${(themeStore.colorMode.preference === 'dark') ? 'logo.png' : 'logo_dark.png' }`" alt="The Crowned Lion">
        </div>
        <!-- <h1 class="text-5xl font-bold">Nuxt PWA CMS</h1> -->
        <p class="py-6">Willkommen</p>
        <div class="divider"></div>
        <div class="">

          <!-- Login -->
          <div class="" v-if="!registration">
            <!-- <button class="w-full rounded pb-4" @click="registration = true">
              <h1>Login</h1>
              <p class="underline">Register</p>
            </button> -->
            <input type="email" placeholder="E-Mail" class="input input-bordered w-full my-4"
              v-model="email"
            />
            <input type="password" placeholder="Password" class="input input-bordered w-full my-4"
              v-model="password"
              @keydown.enter="login()"
            />
            <button class="btn btn-primary" @click="login()">Login</button>
          </div>

          <!-- Logout -->
          <div class="" v-else>
            <button class="w-full rounded pb-4" @click="registration = false">
              <h1>Register</h1>
              <p class="underline">Login</p>
            </button>
            <input type="email" placeholder="E-Mail" class="input input-bordered w-full my-4"
              v-model="email"
            />
            <input type="password" placeholder="Password" class="input input-bordered w-full my-4"
              v-model="password"
              @keydown.enter="register()"
            />
            <input type="email" placeholder="Repeat password" class="input input-bordered w-full my-4"
              v-model="password2"
              @keydown.enter="register()"
            />
            <button class="btn btn-primary" @click="register()">Signup</button>
          </div>
        </div>

        <!-- Policy -->
        <div class="flex flex-col">
          <div
            class="mt-10 text-center intro-x xl:mt-24 xl:text-left"
            >
            By signin up, you agree to our
            <NuxtLink class="underline" to="/terms-of-use" target="_blank">
              Terms and Conditions
            </NuxtLink>
          </div>
          <!-- Password Reset TODO-->
          <!-- <div class="text-center xl:text-left mt-2">
            Passwort vegessen?
            <NuxtLink class="underline" to="/terms-of-use" target="_blank">
              Setze es zurück!
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
