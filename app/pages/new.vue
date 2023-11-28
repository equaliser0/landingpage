<template>
  <div class="">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Blinker">

    <!-- Header -->
    <header class="fixed bg-base-300 inset-x-0 top-0 z-10 w-full">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0">
            <a href="#" title="" class="flex">
              <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg" alt="nujin" />
            </a>
          </div>

          <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a href="#" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Features </a>

            <a href="#" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Solutions </a>

            <a href="#" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Resources </a>

            <a href="#" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Pricing </a>
          </div>

          <div class="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
            <a href="#" title="" class="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"> Demo </a>

            <a href="#" title="" class="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg" role="button"> Get Started </a>
          </div>

          <button type="button" class="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
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
    <section class="pt-24 overflow-hidden bg-gray-50 lg:pt-32">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Don't waste time by reinventing the wheel</h2>
          <p class="mt-4 text-base leading-relaxed text-gray-600">The CMS like Data Management System ready-to-use out-of-the-box</p>
        </div>

        <div class="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
          <div class="flex items-center lg:flex-1">
            <svg class="flex-shrink-0 text-gray-400 w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <p class="ml-4 text-lg font-semibold leading-snug text-black">Create powerful webapps fast</p>
          </div>

          <div class="flex items-center lg:flex-1">
            <svg class="flex-shrink-0 text-gray-400 w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p class="ml-4 text-lg font-semibold leading-snug text-black">Easy to customize, ready to launch</p>
          </div>
        </div>

        <div class="mt-10 sm:mt-16">
          <img class="w-full max-w-3xl mx-auto -mb-16 rounded-lg shadow-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/5/dashboard-screenshot.png" alt="" />
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center">
                <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">130+ Handcoded Blocks</p>

                <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Celebration helps you build beautiful website</h2>
            </div>

            <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
                <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">Simply Copy & Paste</h3>
                            <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">Easy to Customize</h3>
                            <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">Made with TailwindCSS</h3>
                            <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3">
                    <img class="w-full rounded-lg shadow-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png" alt="" />
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases -->
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Ready to use System</h2>
                <p>Just focus on your business</p>
            </div>

            <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
                <div class="md:px-4 lg:px-10">
                    <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg" alt="" />
                    <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Daten Management</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>

                <div class="md:px-4 lg:px-10">
                    <img class="rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg" alt="" />
                    <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Content Management</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>

                <div class="md:px-4 lg:px-10">
                    <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg" alt="" />
                    <h3 class="mt-8 text-xl font-semibold leading-tight text-black">E-Commerce</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Get Started -->
    <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <svg class="mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
                <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Download Celebration</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div class="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                    <svg class="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"
                        ></path>
                    </svg>
                    Download for Mac
                </a>

                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                    <svg class="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z"></path>
                    </svg>
                    Download for Windows
                </a>

                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                    <svg class="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.9768 18.685C20.9368 18.5593 20.8715 18.443 20.785 18.3434C20.6984 18.2437 20.5925 18.1627 20.4736 18.1054C19.931 17.7948 19.582 17.4476 19.5161 17.153C19.4922 17.0377 19.4752 16.9212 19.4653 16.8039C19.4703 16.6358 19.4383 16.4686 19.3717 16.3142C19.305 16.1597 19.2054 16.0218 19.0797 15.91C18.9906 15.8471 18.891 15.8006 18.7855 15.7728C18.9791 15.1324 19.0413 14.4596 18.9685 13.7946C18.8033 12.4003 18.2418 11.0825 17.3504 9.99761C16.527 9.08952 15.2538 7.78526 15.2538 6.79529V4.04632C15.2538 3.23839 14.9329 2.46354 14.3616 1.89225C13.7903 1.32095 13.0154 1 12.2075 1C11.3996 1 10.6247 1.32095 10.0534 1.89225C9.48212 2.46354 9.16117 3.23839 9.16117 4.04632V8.05014C9.02896 8.74367 8.68219 8.80955 8.13734 9.56896C7.60061 10.2837 7.17223 11.0737 6.86602 11.9135C6.60206 12.7063 6.02427 13.5481 5.79278 14.1922C5.63449 14.595 5.60179 15.0363 5.699 15.458C5.58725 15.5899 5.48455 15.7291 5.39158 15.8748C5.3184 15.9963 5.23219 16.1095 5.13448 16.2124C4.95932 16.2659 4.77687 16.2917 4.59374 16.2888C4.21471 16.2556 3.83645 16.3605 3.52874 16.5843C3.26066 16.8712 3.31007 17.4494 3.36222 18.0611C3.39114 18.3021 3.40093 18.545 3.3915 18.7875C3.36128 19.0323 3.28358 19.2688 3.16276 19.4838C3.08771 19.6141 3.03513 19.756 3.00722 19.9038C2.97874 20.1256 3.03513 20.35 3.16509 20.5321C3.29505 20.7141 3.489 20.8404 3.70807 20.8855C4.21404 21.0653 6.08099 21.5324 6.71734 21.6746C6.87712 21.7184 7.03403 21.772 7.18717 21.8352C7.6342 22.0328 8.11257 22.15 8.60031 22.1815C8.84271 22.1918 9.08326 22.1351 9.29562 22.0178C9.50799 21.9005 9.684 21.727 9.80438 21.5164C9.88962 21.3757 9.9581 21.2255 10.0084 21.0689C11.5307 20.7937 13.0934 20.8348 14.5992 21.1897C14.7344 21.531 14.9747 21.8204 15.2854 22.0159C15.5325 22.1844 15.8248 22.2743 16.1239 22.2739C16.7358 22.2334 17.3095 21.9625 17.7297 21.5159C18.1877 21.0454 18.7163 20.6494 19.2965 20.342C19.6524 20.1965 20.6291 19.7299 20.8702 19.3228C20.9301 19.2292 20.9704 19.1244 20.9887 19.0148C21.0071 18.9052 21.003 18.793 20.9768 18.685V18.685ZM9.80438 6.78339C9.96358 6.50891 10.8108 5.80806 11.3676 5.80806C11.7004 5.84136 12.0193 5.95863 12.2944 6.14888C12.4341 6.23748 12.5836 6.30949 12.74 6.36343C12.8004 6.38036 12.8653 6.39545 12.9317 6.40918C13.1856 6.46819 13.4482 6.52949 13.5433 6.70837C13.5622 6.74446 13.5733 6.78408 13.5761 6.82471C13.5789 6.86535 13.5731 6.90611 13.5593 6.94442C13.4732 7.1435 13.3138 7.30187 13.1142 7.3868C12.9437 7.47986 12.7806 7.58601 12.6265 7.70429C12.2519 8.03834 11.7797 8.24286 11.2797 8.28757C11.0619 8.27077 10.8515 8.20139 10.6664 8.08538C10.4813 7.96937 10.3271 7.81018 10.217 7.62149C10.1284 7.50064 10.0267 7.39002 9.91371 7.29165C9.67628 7.10408 9.67811 7.00481 9.80438 6.78339ZM12.7505 3.8949C13.2995 3.8949 13.7464 4.53536 13.7464 5.32039C13.7484 5.60326 13.6858 5.88285 13.5634 6.1379C13.3952 6.05993 13.2183 6.00204 13.0364 5.96543H13.0296C13.1597 5.82008 13.2328 5.63256 13.2354 5.4375C13.2492 5.05963 13.0442 4.74489 12.778 4.73528C12.5117 4.72567 12.2834 5.02395 12.2697 5.40228C12.2676 5.47567 12.2741 5.54905 12.2889 5.62095C12.1225 5.53135 11.9467 5.46047 11.7647 5.4096C11.7647 5.3794 11.7564 5.3515 11.7564 5.32085C11.7541 4.53308 12.2002 3.8949 12.7505 3.8949ZM10.0912 4.12364C10.5487 4.08521 10.9654 4.59072 11.0213 5.25268C11.0254 5.30438 11.0245 5.3547 11.0213 5.40502C10.8962 5.43999 10.7745 5.48591 10.6576 5.54226C10.6613 5.49073 10.6602 5.43897 10.6544 5.38764C10.6004 5.05002 10.3666 4.80665 10.1328 4.84416C9.89907 4.88167 9.75268 5.18543 9.80666 5.52305C9.82867 5.68159 9.90006 5.82917 10.0107 5.94484C9.90045 6.03085 9.79752 6.11731 9.70968 6.20149C9.55194 5.95703 9.46036 5.67581 9.44389 5.38535C9.39265 4.72201 9.63328 4.16023 10.0912 4.12181V4.12364ZM9.41324 21.2789C8.99053 21.9651 8.22929 21.7451 7.35094 21.4098C7.1774 21.3384 6.99937 21.2785 6.81798 21.2304C6.20726 21.0932 4.34396 20.6279 3.86133 20.4568C3.46973 20.3196 3.44182 20.1197 3.46149 19.9632C3.48569 19.867 3.5231 19.7747 3.57266 19.6887C3.71855 19.4237 3.81176 19.1329 3.84714 18.8324C3.85975 18.5621 3.85011 18.2913 3.81832 18.0226C3.78493 17.6297 3.73415 17.0354 3.86407 16.8968C3.97158 16.782 4.34671 16.7595 4.62028 16.7463C4.90188 16.7663 5.18311 16.7026 5.42863 16.5633C5.56209 16.4342 5.67778 16.2879 5.77265 16.1282C5.91722 15.9123 6.11485 15.6159 6.27588 15.5898C6.29239 15.5874 6.30905 15.5862 6.32574 15.5861C6.5618 15.5861 6.86922 15.8405 7.15972 16.2824C7.24023 16.4041 7.36741 16.6173 7.52249 16.8771C7.96665 17.6645 8.46593 18.4196 9.01661 19.1366C9.70328 19.9211 9.82862 20.6014 9.41324 21.2766V21.2789ZM9.91646 19.6906C9.77557 19.3797 9.58831 19.092 9.36109 18.8374C9.31808 18.7884 9.26959 18.7299 9.22384 18.6704C9.31495 18.6775 9.4065 18.6648 9.49225 18.6332C9.578 18.6016 9.65591 18.5519 9.72066 18.4874C9.96815 18.1242 9.65478 17.513 9.24168 17.1841C8.82858 16.8552 7.83266 16.2513 7.26036 15.3999C7.07737 13.5673 8.4498 11.3051 9.15934 10.0337C9.59435 9.37565 9.80975 8.59669 9.77464 7.80859C9.80255 7.84245 9.83 7.87538 9.85927 7.91198C10.011 8.15519 10.2191 8.35826 10.466 8.50399C10.7129 8.64971 10.9912 8.73381 11.2774 8.74916C11.8746 8.70846 12.4419 8.47302 12.8923 8.07896C13.0268 7.97559 13.1687 7.88231 13.3169 7.7999C13.4623 7.72725 13.5955 7.63232 13.7117 7.51855C14.4371 8.86857 15.0834 10.2597 15.6472 11.6848C15.986 12.9328 16.1077 14.2296 16.0073 15.5189C15.5804 15.4731 15.2126 15.4457 15.0109 15.625C14.7716 15.8377 14.8069 16.3085 14.8407 16.7637C14.8476 16.8634 14.8549 16.9563 14.8572 17.0354C14.864 17.2641 14.8279 17.9073 14.7817 18.4568C14.4299 18.937 13.9698 19.3275 13.4389 19.5967C12.908 19.8659 12.3211 20.0062 11.7258 20.0062C11.1087 20.0111 10.4958 19.9033 9.91737 19.6883L9.91646 19.6906ZM20.4722 19.0917C20.0812 19.4561 19.6209 19.7381 19.1186 19.9207C18.4834 20.2503 17.9049 20.6791 17.4049 21.1911C17.2328 21.3594 16.3344 22.1701 15.5347 21.6376C14.7483 21.1133 14.8901 20.2972 15.0855 19.5735C15.1134 19.4696 15.1362 19.3818 15.1486 19.315C15.2481 18.5545 15.3045 17.789 15.3174 17.0221C15.3147 16.937 15.3073 16.8364 15.2996 16.7303C15.262 16.4776 15.2669 16.2205 15.3142 15.9695C15.562 15.933 15.8142 15.938 16.0603 15.9841C16.2177 16.0015 16.3733 16.0184 16.5091 16.0248L16.7511 16.0326C17.1995 16.0473 18.5636 16.0903 18.8006 16.2742C18.9575 16.3954 18.9809 16.556 19.0115 16.8529C19.0231 16.9879 19.0426 17.1222 19.0701 17.255C19.1931 17.8012 19.7782 18.2358 20.2476 18.5048C20.3769 18.5654 20.4789 18.6721 20.5335 18.804C20.543 18.8532 20.5426 18.9038 20.5322 18.9528C20.5218 19.0019 20.5017 19.0483 20.4731 19.0895L20.4722 19.0917Z"
                        />
                    </svg>
                    Download for Linux
                </a>
            </div>

            <p class="mt-6 text-base text-center text-gray-600">It takes only 2 minutes to setup on any device</p>
        </div>
    </section>

    <!-- Integration -->
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Integrate with apps</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Gmail</p>
                                <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                            </div>
                            <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Slack</p>
                                <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                            </div>
                            <svg class="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Shopify</p>
                                <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                            </div>
                            <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Intercom</p>
                                <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                            </div>
                            <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Twitter</p>
                                <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                            </div>
                            <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png" alt="" />
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">Sketch</p>
                                <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                            </div>
                            <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="#" title="" class="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Check all 1,593 applications </a>
            </div>
        </div>
    </section>

    <!-- How it works -->
    <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div class="relative mt-12 lg:mt-20">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                </div>

                <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> 1 </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>

                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> 2 </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Build your website</h3>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>

                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> 3 </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Release & Launch</h3>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Get Started -->
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                <p class="mt-4 text-2xl font-medium">130+ Hand Crafted Coded Blocks</p>

                <div class="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700" role="button"> Try For Free </a>

                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Sales
                    </a>
                </div>

                <p class="mt-6 text-base text-black">Already have an account? <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Log in</a></p>
            </div>
        </div>
    </section>

    <!-- CTA Subscription -->
    <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
            <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
                <p class="mt-4 text-base text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>

                <form action="#" method="POST" class="mt-8 lg:mt-12">
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

                        <button type="submit" class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                            Get instant access
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Meet the Founder -->
    <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:justify-center md:space-x-14">
                <div class="relative flex-shrink-0 w-48 h-48">
                    <div class="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                    <img class="relative object-cover w-48 h-48 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/2/avatar.jpg" alt="" />
                </div>

                <div class="mt-10 md:mt-0">
                    <blockquote>
                        <p class="text-xl text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                    </blockquote>
                    <p class="text-lg font-semibold text-black mt-7">Jenny Wilson</p>
                    <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Prices -->
    <section class="py-10 bg-white sm:py-16 lg:py-24 text-black">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center">
                <h2 class="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing &amp; Plans</h2>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <!-- lg+ -->
            <div class="hidden mt-16 lg:block">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="py-8 pr-4"></th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-blue-600"> Core Code </span>
                                <p class="mt-6 text-6xl font-bold">$0</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-blue-600"> Hosting </span>
                                <p class="mt-6 text-6xl font-bold">$50</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                                <span class="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Setup </span>
                                <p class="mt-6 text-6xl font-bold text-white">$300</p>
                                <p class="mt-2 text-base font-normal text-gray-200">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-blue-600"> Feature </span>
                                <p class="mt-6 text-6xl font-bold">$500</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>

                            <th class="px-4 py-8 text-center">
                                <span class="text-base font-medium text-blue-600"> Consult </span>
                                <p class="mt-6 text-6xl font-bold">$200</p>
                                <p class="mt-2 text-base font-normal text-gray-500">Per month</p>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Website number</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">01</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">10</td>

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">50</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Server storage</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">100 GB</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">500 GB</td>

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">1 TB</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>

                        </tr>

                        <tr>
                            <td class="py-4 pr-4 font-medium border-b border-gray-200">Database</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">-</td>

                            <td class="px-4 py-4 text-center border-b border-gray-200">15</td>

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">Unlimited</td>

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

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
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

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
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

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
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

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
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

                            <td class="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
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
                                <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-white">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                    Get Started
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </td>

                            <td class="px-4 py-6 text-center">
                                <a href="#" title="" class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
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
                    <span class="text-sm font-medium text-blue-600"> Free </span>
                    <p class="mt-2 text-xl font-bold">$0</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>

                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-blue-600"> Team </span>
                    <p class="mt-2 text-xl font-bold">$99</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>

                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-blue-600"> Popular </span>
                    <p class="mt-2 text-xl font-bold">$150</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                </div>

                <div class="px-2 py-2">
                    <span class="text-sm font-medium text-blue-600"> Enterprise </span>
                    <p class="mt-2 text-xl font-bold">$490</p>
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
                    <span class="text-sm font-medium text-blue-600"> Free </span>
                    <p class="mt-2 text-xl font-bold">$0</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
                </div>

                <div class="px-1 py-2 sm:px-4">
                    <span class="text-sm font-medium text-blue-600"> Team </span>
                    <p class="mt-2 text-xl font-bold">$99</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
                </div>

                <div class="px-1 py-2 sm:px-4">
                    <span class="text-sm font-medium text-blue-600"> Popular </span>
                    <p class="mt-2 text-xl font-bold">$150</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
                </div>

                <div class="px-1 pt-2 pb-4 sm:px-4">
                    <span class="text-sm font-medium text-blue-600"> Enterprise </span>
                    <p class="mt-2 text-xl font-bold">$490</p>
                    <span class="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    <a href="#" title="" class="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us -->
    <section class="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Contact us</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div class="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
                <div class="grid items-stretch grid-cols-1 lg:grid-cols-5">
                    <div class="lg:col-span-3">
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

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                        <div class="mt-2.5 relative">
                                            <input type="tel" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Company name </label>
                                        <div class="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                        <div class="mt-2.5 relative">
                                            <textarea
                                                name=""
                                                id=""
                                                placeholder=""
                                                class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                rows="4"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="bg-gray-100 lg:col-span-2">
                        <div class="h-full p-6 sm:p-10">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <h4 class="text-2xl font-semibold text-black">Contact info</h4>

                                    <div class="mt-8 space-y-7">
                                        <div class="flex items-start">
                                            <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span class="block ml-3 text-base text-gray-900"> 8502 Preston Rd. Inglewood, Maine 98380, USA </span>
                                        </div>

                                        <div class="flex items-start">
                                            <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span class="block ml-3 text-base text-gray-900"> kenzi.lawson@example.com </span>
                                        </div>

                                        <div class="flex items-start">
                                            <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                                        hover:bg-blue-600 hover:border-blue-600
                                                        focus:border-blue-600
                                                    "
                                                >
                                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path
                                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                        ></path>
                                                    </svg>
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
                                                        hover:bg-blue-600 hover:border-blue-600
                                                        focus:border-blue-600
                                                    "
                                                >
                                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                                    </svg>
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
                                                        hover:bg-blue-600 hover:border-blue-600
                                                        focus:border-blue-600
                                                    "
                                                >
                                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                                        <path
                                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                                        ></path>
                                                    </svg>
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
                                                        hover:bg-blue-600 hover:border-blue-600
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
    <section class="bg-base-200">
      <div class="flex flex-col">
        <div class="w-full text-center pt-16 pb-8">
          <h3 class="text-3xl font-bold text-center mb-2">Demo</h3>
          <p class="mt-2">Build your prototype here within your browser!</p>
        </div>
        <div class="w-full h-screen">
          <iframe src="https://codesandbox.io/p/github/ecosisTech/nuxt-pwa-cms-boilerplate/main?import=true&embed=1&file=%2Fapp%2Fpages%2Flogin.vue&theme=dark"
            style="width:100%; height:100%; overflow:hidden;"
            title="Nuxt Ultimate CMS Boilerplate"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'none'
})
</script>

<style lang="css" scoped>
</style>
