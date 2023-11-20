import Multiselect from '@vueform/multiselect'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Multiselect)
})
