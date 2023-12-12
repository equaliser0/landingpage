<script setup lang="ts">
const notificationStore = useNotificationStore()

const contactData = ref({
  name: '',
  email: '',
  message: ''
})

const submitData = async (data) => {
  try {
    await submitContact(data)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Thanks! We will reply usally within the next 24h'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const submitSubscription = async (email) => {
  try {
    await subscribe(email)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Thanks for subscribing'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

definePageMeta({
  layout: 'none'
})
</script>

<template>
  <div class="">
    <!-- Funnel your audience to increase your conversion rate -->
    <!-- Why Funnels -->
    <!-- Funnel Statistsics -->
    <!-- What can the customer expect -->
    <!-- How to make Funnels/Where to get funnels -->
    <!-- CTA Subscription -->
    <!-- Examples: Landingpages for Startups, Crypto, Events, Courses, Affiliates, Campaigns/Stories & Drop-Shipping -->
    <!-- CTA to get Funnel/contact -->
    <!-- Offer -->
    <!-- Contact -->
  </div>
</template>

<style lang="css">

</style>
