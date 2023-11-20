<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useUserStore } from '../../../stores/user'
import { useNotificationStore } from '../../../stores/notifications'

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
    if (newUserData.value.id) {
      await updateUser(newUserData.value)
      notificationStore.addNotification({
        type: 'success',
        msg: 'User updated!'
      })
      return await userStore.fetchUser()
    }

    if (newUserData.value.password === passwordRepeat.value) {
      await addUser(newUserData.value)
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
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="">
    <!-- E_Mail Address -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">E-Mail*</span>
      </label>
      <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" v-model="newUserData.email"/>
    </div>

    <!-- Password -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Passwort*</span>
      </label>
      <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" v-model="newUserData.password"/>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Passwort Wiederholung*</span>
      </label>
      <input type="text" placeholder="Passwort Wiederholung" class="input input-bordered w-full max-w-xs" v-model="passwordRepeat"/>
    </div>

    <!-- Username -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input type="text" placeholder="Username" class="input input-bordered w-full max-w-xs" v-model="newUserData.username"/>
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
  </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
