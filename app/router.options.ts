// plugins/router.ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          if (to.hash) {
            resolve({
              el: to.hash,
              top: 0
            })
          } else {
            resolve({ top: 0 })
          }
        }
      }, 100)
    })
  }
})
