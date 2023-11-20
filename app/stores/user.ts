// import { useNotificationStore } from './notifications';

// const notificationStore = useNotificationStore();

const { status, data, signOut, signIn } = useAuth()

export const useUserStore = definePiniaStore('user', () => {
  const initialized = ref(false)
  const isAuthenticated = ref(false)
  const isAdmin = ref(true)
  const user = ref([])

  // const userMail = localStorage.getItem('user_mail')
  //
  // if (userMail) {
  //   user.value = userMail
  //   isAuthenticated.value = true
  // }

  const fetchUser = async () => {
    try {
      const { data } = await useFetch('/api/user')
      initialized.value = true
      return user.value = data.value
    } catch (error) {
      throw new Error(error)
    }
  }

  async function updatePassword(newPassword: string, oldPassword: string) {
    try {
      await useFetch('/api/password', {
        method: 'POST',
        body: {
          email
        }
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error.message
        // })
      } else {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error
        // })
      }
    }
  }

  return { user, fetchUser, isAdmin }
})
