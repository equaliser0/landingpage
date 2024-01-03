<script setup lang="ts">
import { useNotificationStore } from '../stores/notifications';

const notificationStore = useNotificationStore()

const contactData = ref({
  name: '',
  email: '',
  message: ''
})

const email = ref('')

const submitData = async (data) => {
  try {
    if (!data.email) {
      return notificationStore.addNotification({
        type: 'error',
        msg: 'Please provide any email address'
      })
    }
    if (!validEmail(data.email)) {
      return notificationStore.addNotification({
        type: 'error',
        msg: 'Not a valid e-mail-address!'
      })
    }
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

const submitSubscription = async (data) => {
  try {
    if (!data) {
      return notificationStore.addNotification({
        type: 'error',
        msg: 'Please provide any email address'
      })
    }
    if (!validEmail(data)) {
      return notificationStore.addNotification({
        type: 'error',
        msg: 'Not a valid e-mail-address!'
      })
    }
    await subscribe(data)
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
  <div class="flex flex-wrap min-h-screen text-white bg-black">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Blinker">

    <!-- Hero -->
    <section class="w-full min-h-screen md:w-1/2 pt-8 pb-12 text-white object-top bg-[url(https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]" data-aos="fade-up" data-aos-delay="100">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center" data-aos="fade-down" data-aos-delay="100">
          <h1 class="text-5xl font-bold leading-tight lg:text-6xl">Chris</h1>
          <h2 class="text-3xl lg:text-4xl mt-4 leading-relaxed md:text-xl">From Zero to Hero</h2>
          <h3 class="text-xl lg:text-2xl mt-4 leading-relaxed md:text-xl">Solopreneurship on Autopilot</h3>
        </div>
        <div class="mt-10 sm:mt-16 z-40" data-aos="fade-up" data-aos-delay="100">
          <img class="w-64 mx-auto rounded-full shadow-xl outline" src="/uploads/chris_profil.jpg" alt="" />
        </div>
        <div class="bg-black/50 shadow mt-8 backdrop-blur-xl flex items-center justify-around md:justify-center max-w-lg rounded-xl px-10 py-6 mx-auto" data-aos="fade-up" data-aos-delay="100">
          <a href="https://www.linkedin.com/in/christonomous/" target="_blank" class="flex items-center lg:flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg>
          </a>

          <a href="https://x.com/christonomous" target="_blank" class="flex items-center lg:flex-1">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/></svg>
          </a>

          <a href="https://soundcloud.com/equaliser" target="_blank" class="flex items-center lg:flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 145"><defs><linearGradient id="logosSoundcloud0" x1="49.719%" x2="49.719%" y1="-27.701%" y2="100.084%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud1" x1="50.208%" x2="50.208%" y1="-25%" y2="100.195%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud2" x1="50.031%" x2="50.031%" y1="-26.166%" y2="100.311%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud3" x1="49.936%" x2="49.936%" y1="-23.196%" y2="100.193%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud4" x1="49.525%" x2="49.525%" y1="-89.845%" y2="101.504%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud5" x1="50.151%" x2="50.151%" y1="-13.846%" y2="100.179%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud6" x1="49.659%" x2="49.659%" y1="-95.238%" y2="100.836%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud7" x1="49.596%" x2="49.596%" y1="-51.09%" y2="100.373%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud8" x1="50.414%" x2="50.414%" y1="-33.211%" y2="100.08%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloud9" x1="50.034%" x2="50.034%" y1="-7.143%" y2="100.168%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundclouda" x1="50.325%" x2="50.325%" y1="-220.199%" y2="147.927%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloudb" x1="49.159%" x2="49.159%" y1="-121.474%" y2="112.576%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloudc" x1="50.422%" x2="50.422%" y1="-94.484%" y2="103.334%"><stop offset="0%" stop-color="currentColor"/><stop offset="23.93%" stop-color="currentColor"/><stop offset="62.62%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient><linearGradient id="logosSoundcloudd" x1="49.931%" x2="49.931%" y1="0%" y2="100.017%"><stop offset="0%" stop-color="currentColor"/><stop offset="0%" stop-color="currentColor"/><stop offset="0%" stop-color="currentColor"/><stop offset="24.02%" stop-color="currentColor"/><stop offset="63.06%" stop-color="currentColor"/><stop offset="100%" stop-color="currentColor"/></linearGradient></defs><path fill="url(#logosSoundcloud0)" d="m109.97 81.482l-1.494-54.487c0-1.694-1.394-2.989-2.988-2.989c-1.693 0-2.988 1.295-2.988 2.989l-1.395 54.487l1.395 26.197c0 1.694 1.394 2.989 2.988 2.989c1.693 0 2.988-1.295 2.988-2.989z"/><path fill="url(#logosSoundcloud1)" d="m99.212 81.482l-1.693-56.58a2.784 2.784 0 0 0-2.789-2.788a2.784 2.784 0 0 0-2.79 2.789l-1.493 56.48l1.494 26.396a2.784 2.784 0 0 0 2.789 2.79a2.784 2.784 0 0 0 2.79-2.79z"/><path fill="url(#logosSoundcloud2)" d="M76.003 25.301c-.1-1.295-1.096-2.39-2.39-2.39c-1.295 0-2.292.996-2.391 2.39l-1.694 56.081l1.694 26.795c0 1.295 1.096 2.291 2.39 2.291c1.295 0 2.292-.996 2.391-2.39l1.992-26.796z"/><path fill="url(#logosSoundcloud3)" d="M86.761 23.409c0-1.395-1.195-2.59-2.59-2.59a2.572 2.572 0 0 0-2.59 2.59l-1.593 57.973l1.593 26.596c0 1.395 1.196 2.59 2.59 2.59c1.395 0 2.49-1.096 2.59-2.59l1.793-26.596z"/><path fill="url(#logosSoundcloud4)" d="M32.473 109.87c.797 0 1.395-.597 1.494-1.493l2.59-26.995l-2.59-27.89c-.1-.798-.697-1.495-1.494-1.495s-1.394.598-1.494 1.494l-2.291 27.891l2.291 26.995c0 .896.697 1.494 1.494 1.494"/><path fill="url(#logosSoundcloud5)" d="m120.828 81.482l-1.395-64.747c0-1.096-.597-2.092-1.494-2.69c-.498-.299-1.095-.598-1.793-.598c-.597 0-1.195.2-1.793.499c-.896.597-1.494 1.593-1.494 2.689v.598l-1.195 64.15l1.195 25.998v.1c0 .696.299 1.394.797 1.892c.598.697 1.494 1.195 2.49 1.195c.897 0 1.694-.398 2.291-.896c.598-.598.996-1.395.996-2.291l.1-2.59z"/><path fill="url(#logosSoundcloud6)" d="M44.327 55.483c-.1-.996-.797-1.693-1.694-1.693c-.896 0-1.693.697-1.693 1.693l-2.092 25.9l2.092 27.193c.1.996.797 1.693 1.693 1.693c.897 0 1.694-.697 1.694-1.693l2.39-27.194z"/><path fill="url(#logosSoundcloud7)" d="M52.893 37.354c-.996 0-1.892.797-1.892 1.893l-1.992 42.135L51 108.576c.1 1.096.896 1.892 1.892 1.892c.996 0 1.893-.796 1.893-1.892l2.291-27.194l-2.291-42.135c0-.996-.897-1.893-1.893-1.893"/><path fill="url(#logosSoundcloud8)" d="m65.245 108.576l2.092-27.094l-2.092-51.798c-.1-1.195-.996-2.092-2.191-2.092c-1.196 0-2.092.897-2.192 2.092L58.97 81.482l1.892 27.094c0 1.195.996 2.092 2.192 2.092c1.195.1 2.092-.897 2.191-2.092"/><path fill="url(#logosSoundcloud9)" d="M128.697 7.87a3.44 3.44 0 0 0-1.793-.499a3.48 3.48 0 0 0-2.191.797c-.797.598-1.295 1.594-1.295 2.69v.398l-1.395 70.325l.698 12.95l.697 12.65c0 1.893 1.594 3.387 3.486 3.387c1.893 0 3.387-1.594 3.487-3.486l1.494-25.6l-1.494-70.624c-.1-1.295-.698-2.391-1.694-2.989"/><path fill="url(#logosSoundclouda)" d="M2.889 96.324c.498 0 .896-.399.996-.996l2.191-13.946l-2.191-14.145c-.1-.597-.498-.996-.996-.996a.998.998 0 0 0-.996.996L0 81.382l1.893 13.946c0 .597.498.996.996.996"/><path fill="url(#logosSoundcloudb)" d="M12.352 104.79c.498 0 .996-.398 1.095-.995l2.89-22.413l-2.89-22.91c-.1-.598-.498-.997-1.095-.997c-.498 0-.996.399-1.096.997l-2.49 22.91l2.49 22.413c.1.597.498.996 1.096.996"/><path fill="url(#logosSoundcloudc)" d="M22.313 108.875c.697 0 1.195-.498 1.295-1.295l2.69-26.198l-2.69-27.194c-.1-.697-.598-1.295-1.295-1.295s-1.195.498-1.295 1.295l-2.39 27.194l2.39 26.198c.1.697.598 1.295 1.295 1.295"/><path fill="url(#logosSoundcloudd)" d="M223.626 48.012c-4.283 0-8.367.897-12.152 2.391C208.984 22.213 185.276 0 156.389 0a55.07 55.07 0 0 0-20.022 3.785c-2.39.897-2.988 1.893-2.988 3.686v99.511c0 1.893 1.494 3.387 3.387 3.586h86.96c17.332 0 31.378-13.846 31.378-31.178c-.1-17.332-14.145-31.378-31.478-31.378"/><path fill="currentColor" d="M25.002 129.494c-3.685-.896-4.681-1.295-4.681-2.789c0-.996.797-2.092 3.287-2.092c2.092 0 3.785.897 5.28 2.39l3.386-3.286c-2.192-2.291-4.881-3.686-8.467-3.686c-4.582 0-8.268 2.59-8.268 6.774c0 4.582 2.989 5.976 7.272 6.873c4.383.996 5.18 1.693 5.18 3.187c0 1.793-1.295 2.49-4.084 2.49c-2.192 0-4.284-.796-5.977-2.689l-3.387 2.988c1.793 2.59 5.18 4.184 8.965 4.184c6.375 0 9.065-2.988 9.065-7.371c.199-4.881-3.885-6.176-7.57-6.973m21.417-9.363c-6.375 0-10.061 4.88-10.061 11.953c0 7.072 3.785 11.953 10.06 11.953c6.276 0 10.061-4.88 10.061-11.953c0-7.072-3.785-11.953-10.06-11.953m0 19.225c-3.786 0-5.28-3.188-5.28-7.372c0-4.183 1.594-7.37 5.28-7.37c3.785 0 5.28 3.187 5.28 7.37c0 4.184-1.595 7.372-5.28 7.372m28.787-5.877c0 3.685-1.793 5.976-4.781 5.976c-2.988 0-4.781-2.39-4.781-6.076v-12.95h-4.682v13.05c0 6.773 3.785 10.558 9.363 10.558c5.877 0 9.364-3.884 9.364-10.558v-12.95h-4.682v12.95zm24.604-3.188c0 1.295.1 4.184.1 5.08c-.3-.597-1.096-1.793-1.594-2.59l-8.268-12.252h-4.482v23.21h4.582v-10.26c0-1.295-.1-4.184-.1-5.08c.3.597 1.096 1.792 1.594 2.59l8.467 12.65h4.184v-23.21H99.71v9.862zm17.83-9.861h-7.271v23.209h6.873c5.977 0 11.854-3.486 11.854-11.555c0-8.566-4.881-11.654-11.456-11.654m-.398 18.726h-2.291v-14.144h2.49c4.881 0 6.973 2.39 6.973 7.072c0 4.184-2.291 7.072-7.172 7.072m26.198-14.443c2.092 0 3.386.896 4.283 2.49l4.283-1.992c-1.494-2.988-4.084-5.18-8.467-5.18c-6.076 0-10.26 4.881-10.26 11.953c0 7.272 4.084 11.954 10.16 11.954c4.184 0 6.973-1.992 8.567-5.28l-3.885-2.29c-1.195 2.091-2.49 2.988-4.582 2.988c-3.486 0-5.478-3.188-5.478-7.372c0-4.283 1.992-7.271 5.379-7.271m17.232-4.283h-4.681v23.209h13.945v-4.582h-9.264zm21.516-.3c-6.375 0-10.06 4.882-10.06 11.954c0 7.072 3.785 11.953 10.06 11.953c6.375 0 10.061-4.88 10.061-11.953c0-7.072-3.686-11.953-10.06-11.953m0 19.226c-3.785 0-5.28-3.188-5.28-7.372c0-4.183 1.595-7.37 5.28-7.37c3.786 0 5.28 3.187 5.28 7.37c0 4.184-1.494 7.372-5.28 7.372m28.788-5.877c0 3.685-1.793 5.976-4.781 5.976c-2.989 0-4.782-2.39-4.782-6.076v-12.95h-4.681v13.05c0 6.773 3.785 10.558 9.363 10.558c5.877 0 9.363-3.884 9.363-10.558v-12.95h-4.681v12.95zm17.73-13.05h-7.271v23.21h6.873c5.977 0 11.854-3.486 11.854-11.555c0-8.566-4.881-11.654-11.455-11.654m-.398 18.727h-2.191v-14.144h2.49c4.88 0 6.873 2.39 6.873 7.072c0 4.184-2.29 7.072-7.172 7.072"/></svg>
          </a>

          <a href="https://www.instagram.com/christonomous" target="_blank" class="flex items-center lg:flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575c4.48 4.479 7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723c0 34.178-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718c-4.479 4.479-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746c-34.18 0-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723c0-34.177.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672c7.116 7.116 14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763c7.116-7.116 11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73c0 36.302 29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36c-8.483 0-15.36-6.876-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36c8.484 0 15.36 6.877 15.36 15.36"/></svg>
          </a>

          <a href="https://www.youtube.com/@christonomous" target="_blank" class="flex items-center lg:flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 180"><path fill="currentColor" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#000" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
          </a>

          <a href="https://github.com/equaliser0" target="_blank" class="flex items-center lg:flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 250"><path fill="currentColor" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"/></svg>
          </a>
        </div>

        <div class="mt-8 lg:mt-12 shadow" data-aos="zoom-out" data-aos-delay="100">
          <div class="flex flex-col md:flex-row items-center justify-center">
            <div class="px-4 sm:px-0">
              <div class="text-gray-400 focus-within:text-gray-600">
                <label for="email" class="sr-only"></label>
                <div class="inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <!-- <svg class="relative w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg> -->
                </div>
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  @keyup.enter="submitSubscription(email)"
                  placeholder="Enter email address"
                  class="block py-4 px-4 text-base text-white placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
            </div>

            <button @click="submitSubscription(email)" class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-accent border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-info focus:bg-info">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full min-h-screen md:w-1/2 pt-8 pb-12 text-white text-lg bg-gray-900 backdrop-blur-xl" data-aos="fade-down" data-aos-delay="100">
      <div class="p-4">
        <h3 class="text-3xl lg:text-6xl mt-4">For you</h3>
        <p class="mb-2 md:w-1/2">Seeking autonomy and financial freedom? Yearning for more time and resources for what truly matters to you?</p>
        <p class="mb-2 w-full md:w-1/2">
          Discover insights on crafting a powerful online presence, growth hacks, and automation. Let AI do the heavy lifting for you.
        </p>
        <p class="mb-2 w-full md:w-1/2">
          Follow me on social media for daily updates. Subscribers enjoy exclusive insights, including actionable steps, guides, and reports.
        </p>
      </div>

      <div class="p-4">
        <h3 class="text-3xl lg:text-6xl mt-4">About Me</h3>
        <p class="mb-2 md:w-1/2">I'm revolutionizing brand-building through automation. </p>
        <p class="mb-2 w-full md:w-1/2">
          With recent advancements in tools for personal and enterprise branding, growth hacking, automation, and AI, I see a future where automated brands enhance productivity, freeing up time and resources for personal growth and community impact.
        </p>
        <p class="mb-2 w-full md:w-1/2">
          Starting as a system administrator, I evolved into a software developer, gaining a deep understanding of modern technologies in the digital economy. I've applied this knowledge to realize my dream of becoming a founder and creating automation that fulfills my aspirations. Now, I'm excited to share these techniques and strategies with you to help you achieve your dreams.
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="css">

</style>
