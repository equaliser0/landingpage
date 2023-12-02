import { defineNuxtPlugin, useRuntimeConfig } from '#app';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig();
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      nuxtApp.AOS = AOS.init({});
    }, 1000);
  }
});
