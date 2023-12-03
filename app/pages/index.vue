<template>
  <div class="">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Blinker">

    <!-- Header -->
    <header class="fixed bg-neutral/70 backdrop-blur-xl inset-x-0 top-0 z-10 w-full">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0">
            <NuxtLink href="/" title="" class="flex mr-8">
              <img class="w-8" src="/logo.png" alt="nujin" />
              <!-- <span class="inline">nujin</span> -->
            </NuxtLink>
          </div>

          <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink href="#features" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Features </NuxtLink>

            <NuxtLink href="#solutions" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Solutions </NuxtLink>

            <NuxtLink href="#guide" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Guide </NuxtLink>

            <NuxtLink href="#integration" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Integrations </NuxtLink>

            <NuxtLink href="#pricing" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Pricing </NuxtLink>

            <!-- <NuxtLink href="#demo" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Demo </NuxtLink> -->
          </div>

          <div class="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink href="#contact" title="" class="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"> Contact Us </NuxtLink>

            <NuxtLink href="#guide" title="" class="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg" role="button"> Get Started </NuxtLink>
          </div>

          <button type="button" class="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800" data-aos="fade-up" data-aos-delay="100">
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="anient h-screen pt-24 overflow-hidden lg:pt-32 text-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center" data-aos="fade-down" data-aos-delay="100">
          <h2 class="text-5xl font-bold leading-tight lg:text-6xl">nujin</h2>
          <p class="mt-4 leading-relaxed md:text-xl">Build with ease.</p>
        </div>

        <div class="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
          <div class="flex items-center lg:flex-1" data-aos="fade-right" data-aos-delay="100">
            <svg class="flex-shrink-0 w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <p class="ml-4 text-lg font-semibold leading-snug">Create powerful webapps fast</p>
          </div>

          <div class="flex items-center lg:flex-1" data-aos="fade-left" data-aos-delay="100">
            <svg class="flex-shrink-0 w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p class="ml-4 text-lg font-semibold leading-snug">Easy to customize, ready to launch</p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
            <a href="#" title="" class="text-sm inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 bg-white/30 rounded-md hover:bg-black/30 hover:text-white focus:bg-black focus:text-white" role="button" data-aos="fade-left" data-aos-delay="100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 -ml-1 stroke-current" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                git clone https://github.com/enjineDev/nujins
            </a>

            <a href="#features" title="" class="inline-flex items-center justify-center px-4 py-4 text-black bg-white transition-all duration-200 rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button" data-aos="fade-right" data-aos-delay="100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                Learn more
            </a>
        </div>
        <div class="mt-10 sm:mt-16" data-aos="fade-up" data-aos-delay="100">
          <img class="w-full max-w-3xl mx-auto -mb-16 rounded-lg shadow-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/5/dashboard-screenshot.png" alt="" />
        </div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24" id="features">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center">
                <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase" data-aos="fade-down" data-aos-delay="100">130+ Handcoded Blocks</p>

                <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="100">Build sophisticated <br> web apps rapidly</h2>
            </div>

            <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
                <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                    <div class="flex items-start" data-aos="fade-right" data-aos-delay="100">
                        <svg class="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">Progressive Webapp</h3>
                            <p class="mt-3 text-base text-gray-600">Light-weight, powerful and cross-platform. Seamless app installation within seconds from the browser</p>
                        </div>
                    </div>

                    <div class="flex items-start" data-aos="fade-right" data-aos-delay="100">
                        <svg class="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">Easy to Customize</h3>
                            <p class="mt-3 text-base text-gray-600">Modular System enables extendablility to your needs.</p>
                        </div>
                    </div>

                    <div class="flex items-start" data-aos="fade-right" data-aos-delay="100">
                        <svg class="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">Database</h3>
                            <p class="mt-3 text-base text-gray-600">CMS like Data Management System to build platforms you want.</p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3" data-aos="fade-left" data-aos-delay="100">
                    <img class="w-full rounded-lg shadow-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png" alt="" />
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases -->
    <section class="py-10 bg-gray-50 text-gray-600 sm:py-16 lg:py-24" id="solutions">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl" data-aos="fade-down" data-aos-delay="100">Ready to use System</h2>
                <p data-aos="fade-up" data-aos-delay="100">Just focus on your business</p>
            </div>

            <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-4 gap-x-6">
                <div class="md:px-4 lg:px-10" data-aos="fade-left" data-aos-delay="100">
                    <img class="-rotate-1" src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div class="" data-aos="fade-down" data-aos-delay="100">
                      <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Data Management</h3>
                      <p class="mt-4 text-base text-gray-600">Build internal solutions for your teams.</p>
                    </div>
                </div>

                <div class="md:px-4 lg:px-10" data-aos="fade-left" data-aos-delay="100">
                    <img class="rotate-1" src="https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div class="" data-aos="fade-down" data-aos-delay="100">
                      <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Content Management</h3>
                      <p class="mt-4 text-base text-gray-600">Maintain stunning websites and blogs for your community.</p>
                    </div>
                </div>

                <div class="md:px-4 lg:px-10" data-aos="fade-right" data-aos-delay="100">
                    <img class="-rotate-1" src="https://images.pexels.com/photos/18417334/pexels-photo-18417334/free-photo-of-blue-baseball-cap-and-stickers-from-the-truepa-brothers-online-shop.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div class="" data-aos="fade-down" data-aos-delay="100">
                      <h3 class="mt-8 text-xl font-semibold leading-tight text-black">E-Commerce</h3>
                      <p class="mt-4 text-base text-gray-600">Own your very independend online shop.</p>
                    </div>
                </div>

                <div class="md:px-4 lg:px-10" data-aos="fade-right" data-aos-delay="100">
                    <img class="rotate-1" src="https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div class="" data-aos="fade-down" data-aos-delay="100">
                      <h3 class="mt-8 text-xl font-semibold leading-tight text-black">SaaS</h3>
                      <p class="mt-4 text-base text-gray-600">Offer automated services with your very own system.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Integration -->
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24" id="integration">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-down" data-aos-delay="100">Powerful Techstack</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="100">Built with sophisticated web technologies in a smart way!</p>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div class="overflow-hidden bg-white rounded shadow" data-aos="zoom-in" data-aos-delay="100">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://seeklogo.com/images/N/nuxt-logo-64E0472AA8-seeklogo.com.png" alt="" />
                            <div class="ml-5 mr-auto">
                              <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"></rect><path fill="#00DC82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.374 12.374 0 0 0 4.554-4.515a12.236 12.236 0 0 0-.006-12.332l-46.185-79.286a12.388 12.388 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.388 12.388 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.386 12.386 0 0 0-4.555-4.513a12.536 12.536 0 0 0-12.444 0a12.391 12.391 0 0 0-4.555 4.513L36.67 170.834a12.245 12.245 0 0 0-1.67 6.165c0 2.165.573 4.292 1.665 6.167a12.374 12.374 0 0 0 4.554 4.515a12.513 12.513 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16l-11.293 19.356Zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86Z" style="--darkreader-inline-fill: #00b068;" data-darkreader-inline-fill=""></path></g>
                                <p class="text-xl font-semibold text-black">Nuxt 3</p>
                                <p class="mt-px text-sm text-gray-600">Fullstack Framework</p>
                            </div>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Sophisticated backbone of your app for maximum performance and flexibility.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow" data-aos="zoom-in" data-aos-delay="100">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Supabase</p>
                                <p class="mt-px text-sm text-gray-600">Database instance</p>
                            </div>
                            <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"></rect><g clip-path="url(#iconifyVue2)"><path fill="url(#iconifyVue0)" d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097l-76.374 96.189Z"></path><path fill="url(#iconifyVue1)" fill-opacity=".2" d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097l-76.374 96.189Z"></path><path fill="#3ECF8E" d="M112.207 31.666c5.061-6.375 15.323-2.882 15.445 5.256l.782 119.029H49.4c-14.497 0-22.582-16.744-13.567-28.097l76.374-96.188Z" style="--darkreader-inline-fill: #4fd398;" data-darkreader-inline-fill=""></path></g><defs><linearGradient id="iconifyVue0" x1="127.529" x2="198.661" y1="125.299" y2="155.132" gradientUnits="userSpaceOnUse"><stop stop-color="#249361" style="--darkreader-inline-stopcolor: #1d764e;" data-darkreader-inline-stopcolor=""></stop><stop offset="1" stop-color="#3ECF8E" style="--darkreader-inline-stopcolor: #279d75;" data-darkreader-inline-stopcolor=""></stop></linearGradient><linearGradient id="iconifyVue1" x1="95.993" x2="128.433" y1="82.12" y2="143.187" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><clipPath id="iconifyVue2"><path fill="#fff" d="M32 28h192.92v200H32z" style="--darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""></path></clipPath></defs></g>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Opensource, secure and a standard database system for all of your data and your files including authentication and role management. </p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow" data-aos="zoom-in" data-aos-delay="100">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">TailwindCSS</p>
                                <p class="mt-px text-sm text-gray-600">A utility-first CSS framework</p>
                            </div>
                            <g fill="none"><rect width="256" height="256" fill="#242938" rx="60"></rect><path fill="url(#iconifyVue3)" fill-rule="evenodd" d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z" clip-rule="evenodd"></path><defs><linearGradient id="iconifyVue3" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#32B1C1" style="--darkreader-inline-stopcolor: #288e9a;" data-darkreader-inline-stopcolor=""></stop><stop offset="1" stop-color="#14C6B7" style="--darkreader-inline-stopcolor: #109e92;" data-darkreader-inline-stopcolor=""></stop></linearGradient></defs></g>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Seamless adaptable UI design and a slim ans sexy look.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow" data-aos="zoom-in" data-aos-delay="100">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://seeklogo.com/images/S/stripe-logo-C409DC9652-seeklogo.com.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Stripe</p>
                                <p class="mt-px text-sm text-gray-600">Payments integration</p>
                            </div>
                            <path fill="#635BFF" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658Zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756h-36.694Zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716Zm-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28ZM241.493 36.551l35.698-7.68V0l-35.698 7.538V36.55Zm0 10.809h35.698v124.444h-35.698V47.36Zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524Zm-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862ZM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774Z" style="--darkreader-inline-fill: #070095;" data-darkreader-inline-fill=""></path>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Get paid from your users for your offered products and services.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow" data-aos="zoom-in" data-aos-delay="100">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://seeklogo.com/images/C/chatgpt-logo-6E960AECFF-seeklogo.com.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">OpenAI</p>
                                <p class="mt-px text-sm text-gray-600">Chat Completions</p>
                            </div>
                            <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695l-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218l-.052-32.434Z"></path>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Build AI apps in any kind by an already integrated OpenAI API.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow" data-aos="zoom-in" data-aos-delay="100">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">TRCP</p>
                                <p class="mt-px text-sm text-gray-600">Server/Client communication with Strong types </p>
                            </div>
                            <path fill="currentColor" d="M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12S5.38 0 12 0s12 5.38 12 12ZM1.21 12A10.78 10.78 0 0 0 12 22.79A10.78 10.78 0 0 0 22.79 12A10.78 10.78 0 0 0 12 1.21A10.78 10.78 0 0 0 1.21 12Zm10.915-6.086l2.162 1.248a.25.25 0 0 1 .125.217v1.103l2.473 1.428a.25.25 0 0 1 .125.217v2.355l.955.551a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-.956-.552l-2.472 1.427a.25.25 0 0 1-.25 0l-2.472-1.427l-.956.552a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l.955-.551v-2.355a.25.25 0 0 1 .125-.217l2.473-1.428V7.38a.25.25 0 0 1 .125-.217l2.162-1.248a.25.25 0 0 1 .25 0Zm1.268 10.049a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l2.16-1.248a.25.25 0 0 1 .25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 0 1 .25 0l2.16 1.248a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-.705.408L12 17.582l2.098-1.211ZM10.088 9.73l1.662.96V8.766l-1.662-.955Zm3.824 0V7.811l-1.662.955v1.924ZM12 6.418l-1.66.96l1.66.954l1.66-.954Zm-5.59 9.184l1.66.958v-1.921l-1.66-.956Zm3.822 0v-1.92l-1.662.957v1.923Zm-1.91-3.311l-1.662.96l1.661.955l1.66-.956Zm5.446 3.31l1.66.96v-1.922l-1.66-.956Zm3.822 0v-1.918l-1.662.956v1.922Zm-1.912-3.31l-1.66.96l1.66.955l1.66-.956Z" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill=""></path>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Most secured and performant backend inbuilt.</p>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-12 text-center">
                <a href="#" title="" class="inline-flex underline p-3 font-medium text-secondary transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Check applications built with nujin </a>
            </div> -->
        </div>
    </section>

    <!-- Get Started -->
    <section class="py-10 bg-white sm:py-16 lg:pt-24" id="guide">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-down" data-aos-delay="100">Get Started</h2>
                <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="100">Simply download the boilerplate, install the packages with nodejs and run the app.</p>
            </div>

            <div class="relative mt-12 lg:mt-20">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                </div>

                <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12" data-aos="fade-up" data-aos-delay="100">
                    <div data-aos="fade-left" data-aos-delay="100">
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> 1 </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Git</h3>
                        <p class="mt-4 text-base text-gray-600">Git clone https://github.com/enjineDev/nujin</p>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="500">
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> 2 </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Install packages</h3>
                        <p class="mt-4 text-base text-gray-600">npm i or yarn</p>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="700">
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> 3 </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Start customizing</h3>
                        <p class="mt-4 text-base text-gray-600">yarn dev</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Contact -->
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="text-center">
                <svg class="mx-auto w-14 h-14 mb-4 -mt-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-aos="fade-up" data-aos-delay="100">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="100">Get a hyper customized version</h2>
                <p class="mt-4 text-2xl font-medium" data-aos="fade-down" data-aos-delay="100">Hire our developers to build a version fitting to your needs!</p>

                <div class="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                    <NuxtLink href="#start" title="" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-info border border-transparent rounded-md sm:w-auto hover:bg-black focus:bg-black" role="button" data-aos="fade-up" data-aos-delay="100"> Try For Free </NuxtLink>

                    <NuxtLink href="#contact" title="" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button" data-aos="fade-up" data-aos-delay="100">
                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Sales
                    </NuxtLink>
                </div>

                <!-- <p class="mt-6 text-base text-black">Already have an account? <a href="#" title="" class="text-info transition-all duration-200 hover:text-accent focus:text-accent hover:underline">Log in</a></p> -->
            </div>
        </div>
    </section>

    <!-- CTA Subscription -->
    <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32" data-aos="fade-up" data-aos-delay="100">
      <div class="absolute inset-0">
        <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://images.pexels.com/photos/7873571/pexels-photo-7873571.jpeg?auto=compress" alt="" />
      </div>

      <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" data-aos="fade-down" data-aos-delay="100">Stay up-to-date</h2>
          <p class="mt-4 text-base text-gray-200" data-aos="fade-up" data-aos-delay="100">And receive the newest insights and opportunities like bonuses and more.</p>

          <form action="#" method="POST" class="mt-8 lg:mt-12" data-aos="zoom-out" data-aos-delay="100">
            <div class="flex flex-col items-center sm:flex-row sm:justify-center">
              <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                <div class="relative text-gray-400 focus-within:text-gray-600">
                  <label for="email" class="sr-only"></label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                  />
                </div>
              </div>

              <button type="submit" class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-accent border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-info focus:bg-info">
                Get instant access
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Meet the Founder -->
    <section class="anient py-10 text-white sm:py-16 lg:py-24 shadow-xl shadow-inner">
        <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:justify-center md:space-x-14">
                <div class="relative flex-shrink-0 w-48 h-48" data-aos="fade-left" data-aos-delay="100">
                    <div class="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                    <img class="relative object-cover w-48 h-48 rounded-full" src="https://media.licdn.com/dms/image/D5603AQFjDCUDnFeLUw/profile-displayphoto-shrink_800_800/0/1690816380812?e=1706745600&v=beta&t=L7FzrDkwSwKmfJ4AEgEmcGTAFhxVCx1_aaLP5j_Lul0" alt="" />
                </div>

                <div class="mt-10 md:mt-0" data-aos="fade-right" data-aos-delay="100">
                    <blockquote>
                        <p class="text-xl">“Building webapps, AI and Crypto.”</p>
                    </blockquote>
                    <p class="text-lg font-semibold mt-7">Christopher Müller</p>
                    <p class="mt-1 text-base text-gray-600">Developer, Founder, Musician</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Prices -->
    <section class="py-10 bg-white sm:py-16 lg:py-24 text-black" id="pricing">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center">
                <h2 class="text-4xl font-bold text-black lg:text-5xl sm:text-5xl" data-aos="fade-down" data-aos-delay="100">Pricing &amp; Plans</h2>
                <p class="mt-4 text-lg leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="100">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <!-- lg+ -->
            <div class="hidden mt-16 lg:block">
                <table class="w-full">
                    <thead data-aos="fade-up" data-aos-delay="100">
                        <tr>
                            <th class="py-8 pr-4"></th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-accent"> Core </span>
                                <p class="mt-6 text-6xl font-bold">FREE</p>
                                <p class="mt-2 text-base font-normal text-gray-500">for ever</p>
                            </th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-accent"> Custom Component </span>
                                <p class="mt-6 text-6xl font-bold">350€</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center bg-info rounded-t-xl">
                                <span class="px-4 py-2 text-base font-medium text-white bg-accent rounded-full"> Setup </span>
                                <p class="mt-6 text-6xl font-bold text-white">500€</p>
                                <p class="mt-2 text-base font-normal text-gray-200">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-accent"> Enterprise </span>
                                <p class="mt-6 text-6xl font-bold">500€</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-accent"> Consult </span>
                                <p class="mt-6 text-6xl font-bold">200€</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>
                        </tr>
                    </thead>

                    <tbody data-aos="fade-up" data-aos-delay="100">
                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Website number</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">01</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">10</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">50</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Server storage</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">100 GB</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">500 GB</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">1 TB</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Database</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">15</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">Unlimited</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Unmetered Bandwidth</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">SSD Disk</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">VCPUS Fontworld</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">WordPress install</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Server speed</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center text-white bg-info border-b border-white/20">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">
                                <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td class="py-6 pr-4"></td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-accent hover:text-info">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-accent hover:text-info">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center text-white bg-warning rounded-b-xl">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-white">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-accent hover:text-info">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-accent hover:text-info">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- xs to lg -->
        <div class="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-accent"> Free </span>
                    <p class="mt-2 text-xl font-bold">0€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>

                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-accent"> Team </span>
                    <p class="mt-2 text-xl font-bold">99€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>

                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-accent"> Popular </span>
                    <p class="mt-2 text-xl font-bold">150€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>

                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-accent"> Enterprise </span>
                    <p class="mt-2 text-xl font-bold">490€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">Website number</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">01</div>

                <div class="px-2 py-2">10</div>

                <div class="px-2 py-2">100</div>

                <div class="px-2 py-2">Unlimited</div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">Server storage</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">100 GB</div>

                <div class="px-2 py-2">500 GB</div>

                <div class="px-2 py-2">1 TB</div>

                <div class="px-2 py-2">Unlimited</div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">Database</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">-</div>

                <div class="px-2 py-2">15</div>

                <div class="px-2 py-2">Unlimited</div>

                <div class="px-2 py-2">Unlimited</div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">Unmetered bandwidth</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">-</div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">SSD Disk</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">-</div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">VCPUS Fontworld</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">-</div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

            <div class="px-2 py-4 sm:px-4">
                <p class="font-semibold">WordPress install</p>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-2 py-2">-</div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="px-2 py-2">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

            <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div class="px-1 py-2 sm:px-4">
                    <span class="text-sm font-medium text-accent"> Free </span>
                    <p class="mt-2 text-xl font-bold">0€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-accent border border-transparent rounded-md hover:bg-accent" role="button"> Get Started </a>
                </div>

                <div class="px-1 py-2 sm:px-4">
                    <span class="text-sm font-medium text-accent"> Team </span>
                    <p class="mt-2 text-xl font-bold">99€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-accent border border-transparent rounded-md hover:bg-accent" role="button"> Get Started </a>
                </div>

                <div class="px-1 py-2 sm:px-4">
                    <span class="text-sm font-medium text-accent"> Popular </span>
                    <p class="mt-2 text-xl font-bold">150€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-accent border border-transparent rounded-md hover:bg-accent" role="button"> Get Started </a>
                </div>

                <div class="px-1 pt-2 pb-4 sm:px-4">
                    <span class="text-sm font-medium text-accent"> Enterprise </span>
                    <p class="mt-2 text-xl font-bold">490€</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-accent border border-transparent rounded-md hover:bg-accent" role="button"> Get Started </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us -->
    <section class="anient py-10 sm:py-16 lg:py-24" id="contact">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" data-aos="fade-down" data-aos-delay="100">Contact us</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white" data-aos="fade-up" data-aos-delay="100">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div class="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20" data-aos="fade-up" data-aos-delay="100">
                <div class="grid items-stretch grid-cols-1 lg:grid-cols-5">
                    <div class="lg:col-span-3" data-aos="fade-left" data-aos-delay="100">
                        <div class="p-6 sm:p-10">
                            <h3 class="text-2xl font-semibold text-black">Send us a message</h3>

                            <form action="#" method="POST" class="mt-8">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Your email </label>
                                        <div class="mt-2.5 relative">
                                            <input type="email" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>

                                    <!-- <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                        <div class="mt-2.5 relative">
                                            <input type="tel" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div> -->

                                    <!-- <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Company name </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div> -->

                                    <div class="sm:col-span-2">
                                        <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                        <div class="mt-2.5 relative">
                                            <textarea
                                                name=""
                                                id=""
                                                placeholder=""
                                                class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                rows="12"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-secondary border border-transparent rounded-md focus:outline-none hover:bg-info focus:bg-info">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="bg-gray-100 lg:col-span-2" data-aos="fade-right" data-aos-delay="100">
                        <div class="h-full p-6 sm:p-10">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <h4 class="text-2xl font-semibold text-black">Contact info</h4>

                                    <div class="mt-8 space-y-7">
                                        <div class="flex items-start">
                                            <svg class="flex-shrink-0 text-primary w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span class="block ml-3 text-base text-gray-900"> 8502 Preston Rd. Inglewood, Maine 98380, USA </span>
                                        </div>

                                        <div class="flex items-start">
                                            <svg class="flex-shrink-0 text-primary w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span class="block ml-3 text-base text-gray-900"> kenzi.lawson@example.com </span>
                                        </div>

                                        <div class="flex items-start">
                                            <svg class="flex-shrink-0 text-primary w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.5"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <div class="ml-3">
                                                <span class="block text-base text-gray-900"> (316) 555-0116 </span>
                                                <span class="block mt-1 text-base text-gray-900"> (316) 555-0116 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-8 lg:mt-auto">
                                    <hr class="border-gray-200" />
                                    <div class="flex items-center justify-between mt-7">
                                        <p class="text-lg font-semibold text-black">Follow us on</p>

                                        <ul class="flex items-center justify-end space-x-3">
                                            <li>
                                                <a
                                                    href="#"
                                                    title=""
                                                    class="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-gray-800
                                                        transition-all
                                                        duration-200
                                                        bg-transparent
                                                        border border-gray-300
                                                        rounded-full
                                                        w-7
                                                        h-7
                                                        focus:bg-blue-600
                                                        hover:text-white
                                                        focus:text-white
                                                        hover:bg-info
                                                        focus:border-blue-600
                                                    "
                                                >
                                                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/></svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#"
                                                    title=""
                                                    class="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-gray-800
                                                        transition-all
                                                        duration-200
                                                        bg-transparent
                                                        border border-gray-300
                                                        rounded-full
                                                        w-7
                                                        h-7
                                                        focus:bg-blue-600
                                                        hover:text-white
                                                        focus:text-white
                                                        hover:bg-info
                                                        focus:border-blue-600
                                                    "
                                                >
                                                    <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="https://github.com/enjineDev/"
                                                    title=""
                                                    class="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-gray-800
                                                        transition-all
                                                        duration-200
                                                        bg-transparent
                                                        border border-gray-300
                                                        rounded-full
                                                        w-7
                                                        h-7
                                                        focus:bg-blue-600
                                                        hover:text-white
                                                        focus:text-white
                                                        hover:bg-info
                                                        focus:border-blue-600
                                                    "
                                                >
                                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Demo -->
    <!-- <section class="bg-base-200" data-aos="fade-up" data-aos-delay="300" id="demo">
      <div class="flex flex-col">
        <div class="w-full text-center pt-16 pb-8">
          <h3 class="text-3xl font-bold text-center mb-2">Demo</h3>
          <p class="mt-2">Build your prototype here within your browser!</p>
        </div>
        <div class="w-full h-screen">
        <iframe src="https://codesandbox.io/p/github/equaliser0/pre/main?import=true&embed=1&file=%2Fapp.vue"
          style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
          title="equaliser0/pre/main"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'none'
})
</script>

<style lang="css">
.anient {
	background: linear-gradient(-45deg, #F6AA1C, #FB2B68, #224758, #C6ECAE);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    /* position: absolute; */
    width: 200%;
    height: 12em;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: 10;
}

.wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
}

.wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}

@keyframes wave {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}
</style>
