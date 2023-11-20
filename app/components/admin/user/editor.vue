<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useUserStore } from '../../../stores/user'
import { useNotificationStore } from '../../../stores/notifications'

const router = useRouter()
const userStore = useUserStore()
const notificationStore = useNotificationStore()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const roles = [
  'client',
  'user',
  'admin',
]

const newUserData = ref(props.user || {
  email: '',
  password: '',
  username: '',
  roles: []
})

const passwordRepeat = ref('')

const edit = async () => {
  try {
    if (validEmail(newUserData.value.email)) {
      if (newUserData.value.id) {
        await updateUser(newUserData.value)
        notificationStore.addNotification({
          type: 'success',
          msg: 'User updated!'
        })
        await userStore.fetchUser()
        router.push('/admin/user')
      }

      if (newUserData.value.password === passwordRepeat.value) {
        await addUser(newUserData.value)
        newUserData.value = {
          email: '',
          password: '',
          username: '',
          roles: []
        }
        passwordRepeat.value = ''
        notificationStore.addNotification({
          type: 'success',
          msg: 'User registered!'
        })
        return await userStore.fetchUser()
      } else {
        notificationStore.addNotification({
          type: 'error',
          msg: 'Passwords dont match!'
        })
      }
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'No valid E-Mail'
      })
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error.message
    })
  }
}

const removeUser = async () => {
  try {
    await deleteUser(newUserData.value.id)
    await userStore.fetchUser()
    router.push(`/admin/user`)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Successfully removed!'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error.message
    })
  }
}
</script>
<template>
  <div class="bg-base-100 rounded px-4 py-8">
    <!-- E_Mail Address -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">E-Mail*</span>
      </label>
      <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs bg-base-200" v-model="newUserData.email"/>
    </div>

    <!-- Password -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Passwort*</span>
      </label>
      <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs bg-base-200" v-model="newUserData.password"/>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Passwort Wiederholung*</span>
      </label>
      <input type="password" placeholder="Passwort Wiederholung" class="input input-bordered w-full max-w-xs bg-base-200" v-model="passwordRepeat"/>
    </div>

    <!-- Username -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input type="text" placeholder="Username" class="input input-bordered w-full max-w-xs bg-base-200" v-model="newUserData.username"/>
    </div>

    <!-- Roles -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Roles</span>
      </label>
      <Multiselect
        v-model="newUserData.roles"
        :options="roles"
        :classes="useMultiselectClasses()"
        mode="tags"
      />
    </div>
    <button class="btn btn-success mt-2" @click="edit()">Speichern</button>
    <button class="btn btn-error mt-2 ml-2" @click="removeUser()" v-if="newUserData.id">Löschen</button>
  </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
