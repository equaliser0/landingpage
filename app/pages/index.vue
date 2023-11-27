<script setup lang="ts">
definePageMeta({
  layout: 'none'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="flex bg-primary text-neutral py-8 text-center bg-[url(/uploads/landing/banner.jpg)] bg-cover h-screen antialiased">
      <div class="block md:hidden w-full pt-8 flex flex-col justify-start">
        <h1 class="text-4xl font-bold text-4xl md:text-6xl md:text-left">enjine <br> Development</h1>
        <p class="mt-4 text-base md:text-5xl md:text-left">Cost saving Data Management and Automation</p>
        <div class="w-full flex justify-center md:justify-start pt-4">
          <NuxtLink to="/nujin" class="btn btn-white btn-outline">Learn More</NuxtLink>
        </div>
      </div>
      <div class="hidden md:block w-full md:w-1/2 p-24 flex flex-col justify-start">
        <h1 class="text-5xl font-bold text-4xl md:text-6xl md:text-left">enjine Development</h1>
        <p class="mt-4 text-base md:text-5xl md:text-left">We build. You enjoy.</p>
        <div class="w-full flex justify-center md:justify-start pt-4">
          <NuxtLink to="/nujin" class="btn btn-white btn-outline">Learn More</NuxtLink>
        </div>
      </div>
      <div class="hidden md:block w-full md:w-1/2 p-12 text-gray-900 h-full flex flex-col justify-end md:text-right">
        <p class="text-2xl">Dont get left behind with</p>
        <h1 class="text-4xl font-bold text-4xl font-light md:text-8xl">Don't get <br><b class="font-bold">left behind</b></h1>
        <!-- <p class="mt-4 text-base md:text-5xl md:text-right">At Its Best.</p> -->
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-12 bg-base-200">
      <div class="container mx-auto flex flex-col items-center justify-center text-center">
        <div class="w-full py-8">
          <h1 class="text-5xl">Get</h1>
          <h2 class="text-3xl">your very own App.</h2>
          <h1 class="text-5xl pt-8">Work</h1>
          <h2 class="text-3xl">with your very own Data.</h2>
          <h1 class="text-5xl pt-8">Get your very own smart CMS and AI</h1>
          <h2 class="text-3xl">to leverga your busines potential.</h2>
        </div>
      </div>
    </section>

    <section class="py-12 bg-base-300">
      <div class="container mx-auto">
        <!-- Left Column (Mobile-first) -->
        <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center">
          <!-- Left Column (Mobile-first) -->
          <div class="order-2 md:order-1 text-center md:text-left mb-8 md:mb-0">
            <h2 class="text-6xl font-bold mb-4">Why</h2>
          </div>

          <!-- Right Column (Mobile-first) -->
          <div class="order-1 md:order-2 mb-8 md:mb-0">
            <p>To gain more with less effort</p>
          </div>
        </div>
        <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center">
          <!-- Left Column (Mobile-first) -->
          <div class="order-2 md:order-1 text-center md:text-left mb-8 md:mb-0">
            <h2 class="text-6xl font-bold mb-4">When</h2>
          </div>

          <!-- Right Column (Mobile-first) -->
          <div class="order-1 md:order-2 mb-8 md:mb-0">
            <p>Don't get left behind and start early, to be a head and sell your solution.</p>
          </div>
        </div>
        <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center">
          <!-- Left Column (Mobile-first) -->
          <div class="order-2 md:order-1 text-center md:text-left mb-8 md:mb-0">
            <h2 class="text-6xl font-bold mb-4">How</h2>
          </div>

          <!-- Right Column (Mobile-first) -->
          <div class="order-1 md:order-2 mb-8 md:mb-0">
            <p>By bundling most sophisticated, modern but performant web techonologies customized to individual business solutions. </p>
          </div>
        </div>
        <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center">
          <!-- Left Column (Mobile-first) -->
          <div class="order-2 md:order-1 text-center md:text-left mb-8 md:mb-0">
            <h2 class="text-6xl font-bold mb-4">Advantages</h2>
          </div>

          <!-- Right Column (Mobile-first) -->
          <div class="order-1 md:order-2 mb-8 md:mb-0">
            <p>Be early with your solution and leverage profits by selling it to your competitors. </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 shadow-inner shadow-t shadow-b">
      <div class="container mx-auto text-center flex flex-wrap justify-center">

        <div class="w-full">
          <h2 class="text-3xl font-bold mb-4">The Service</h2>
        </div>

        <div class="w-full">
          <p>My Team of freelancers and I build powerful <br>fullstack data management web applications <br>and microservices and <br>setup custom Large Language Models to improve business operations.</p>
        </div>

        <div class="w-full pt-8">
          <h3 class="text-3xl font-bold mb-4">We Develop</h3>
        </div>
        <!-- Bullet Points Container -->
        <div class="flex flex-wrap justify-center">
          <!-- Bullet Point 1 -->
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="bg-base-200 h-36 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Web Applications</h3>
              <p class="text-base">Building anykind of web applications like DMS, CMS, community platform, messanger, online shops and more are not magic in our days anymore. </p>
            </div>
          </div>

          <!-- Bullet Point 2 -->
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="bg-base-200 h-36 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Process Automation</h3>
              <p class="text-base">APIs are available everywhere. So it is onnly about developing microservices processing the data you need in a way you need. </p>
            </div>
          </div>

          <!-- Bullet Point 3 -->
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="bg-base-200 h-36 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Articifial Inteligence</h3>
              <p class="text-base">OPenAI is no magic. I have access to all tools to build apps on top of LLMs or even setup, train and finetune your very own one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="pt-12 bg-gray-100 text-gray-900">
      <div class="container mx-auto text-center mb-8">
        <h2 class="text-3xl font-bold mb-4">Use Cases</h2>
        <p class="text-base mb-8">Businesses and Creators can take advantages by owning their very own and dedicated system lfited to your needs.</p>

        <!-- Use Case Cards Container -->
        <div class="flex flex-wrap justify-center">
          <!-- Use Case 1 -->
          <div class="card w-full md:w-1/2 p-2">
            <figure>
              <img src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=720dpr=1" class="w-full h-48 object-cover">
            </figure>
            <div class="card-body bg-base-200 text-white shadow-xl rounded-b-xl p-4">
              <h3 class="text-xl font-bold mb-2">Data Management System</h3>
              <p class="text-base">Process and manage data in any context in a smart way. Have a dedicated UI fitting to your data structure within your business and let them be accisble to your employees and partners in a scale, cost-effective and secure way.</p>
            </div>
          </div>

          <!-- Use Case 2 -->
          <div class="card w-full md:w-1/2 p-2">
            <figure>
              <img src="https://images.pexels.com/photos/7676482/pexels-photo-7676482.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1" class="w-full h-48 object-cover">
            </figure>
            <div class="card-body bg-base-200 text-white shadow-xl rounded-b-xl p-4">
              <h3 class="text-xl font-bold mb-2">Content Management System</h3>
              <p class="text-base">As a creator, community manager or artist, you have an cheap and extentable solution to showcase your work and do business within the creator economy.</p>
            </div>
          </div>

        </div>
      </div>

      <div class="bg-center bg-fixed bg-cover bg-[url(https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
        <div class="w-full h-auto text-black text-center pt-8">
          <h2 class="text-[100px] font-extrabold mb-4 mt-8">Let it become smart</h2>
        </div>
        <div class="bg-gray-300/40 backdrop-blur-xl text-center flex flex-wrap justify-center py-8">
          <p class="text-base text-xl mb-8 w-full">Leverage the outcome with AI <br> and use the advantage of our days accesible technologies, so <br> you can do data-driven business the smart way</p>
          <!-- Use Case 1 -->
          <div class="card w-full md:w-1/6 p-2">
            <figure>
              <img src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=720dpr=1" class="w-full h-48 object-cover">
            </figure>
            <div class="card-body bg-base-200 text-white shadow-xl rounded-b-xl p-4">
              <h3 class="text-xl font-bold mb-2">Report <br> Agent</h3>
              <p class="text-base">Process and manage data in any context in a smart way. Have a dedicated UI fitting to your data structure within your business and let them be accisble to your employees and partners in a scale, cost-effective and secure way.</p>
            </div>
          </div>

          <!-- Use Case 2 -->
          <div class="card w-full md:w-1/6 p-2">
            <figure>
              <img src="https://images.pexels.com/photos/7676482/pexels-photo-7676482.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1" class="w-full h-48 object-cover">
            </figure>
            <div class="card-body bg-base-200 text-white shadow-xl rounded-b-xl p-4">
              <h3 class="text-xl font-bold mb-2">Customer Support <br> Agent</h3>
              <p class="text-base">As a creator, community manager or artist, you have an cheap and extentable solution to showcase your work and do business within the creator economy.</p>
            </div>
          </div>

          <!-- Use Case 2 -->
          <div class="card w-full md:w-1/6 p-2">
            <figure>
              <img src="https://images.pexels.com/photos/7676482/pexels-photo-7676482.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1" class="w-full h-48 object-cover">
            </figure>
            <div class="card-body bg-base-200 text-white shadow-xl rounded-b-xl p-4">
              <h3 class="text-xl font-bold mb-2">Copy Writing <br> Agent</h3>
              <p class="text-base">As a creator, community manager or artist, you have an cheap and extentable solution to showcase your work and do business within the creator economy.</p>
            </div>
          </div>

          <!-- Use Case 2 -->
          <div class="card w-full md:w-1/6 p-2">
            <figure>
              <img src="https://images.pexels.com/photos/7676482/pexels-photo-7676482.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1" class="w-full h-48 object-cover">
            </figure>
            <div class="card-body bg-base-200 text-white shadow-xl rounded-b-xl p-4">
              <h3 class="text-xl font-bold mb-2">Data Analyst <br> Agent</h3>
              <p class="text-base">As a creator, community manager or artist, you have an cheap and extentable solution to showcase your work and do business within the creator economy.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Tech Section -->
    <section class="bg-[url(/uploads/landing/nujin/banner.jpg)] bg-cover bg-fixed text-neutral">
      <div class="bg-base-100/50 backdrop-blur-xl h-full py-12">
        <div class="container mx-auto text-center">
          <p class="text-base text-xl">Built with</p>
          <h2 class="text-3xl font-bold mb-4 text-5xl">nujin</h2>
          <NuxtLink to="/nujin" class="btn btn-white btn-outline">Learn More</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Funnel Section -->
    <section class="bg-accent text-neutral py-8">
      <div class="container mx-auto flex justify-center items-center text-center">
        <div class="h-16 flex flex-col justify-start">
          <h2 class="text-3xl font-bold -mb-4">Start Your Project Today!</h2>
          <p class="text-base mt-4">Let us help you transform your ideas into reality.</p>
        </div>
        <NuxtLink to="/#contact" class="btn btn-white ml-4">Get in Touch</NuxtLink>
      </div>
    </section>
    <!-- Meet the Founder Section -->
    <section class="py-12">
      <div class="container mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-center">
        <!-- Founder Image -->
        <div class="mb-6 md:mb-0 py-4 px-8">
          <img src="https://media.licdn.com/dms/image/D5603AQFjDCUDnFeLUw/profile-displayphoto-shrink_800_800/0/1690816380812?e=1706140800&v=beta&t=5UuS8lTw8OkErD8z6EjHOu6Cfizp0neGh7nPqQSOqWQ" alt="Chris" class="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover">
        </div>

        <!-- Founder Information -->
        <div class="text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">Meet the Founder</h2>
          <p class="text-base mb-4">Hi, my name is Chris, and I am an expert in web applications, crypto and AI.</p>

          <!-- Button to Profile Page -->
          <a href="https://chris.ecosis.network" target="_blank" class="btn btn-primary">Read more</a>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 text-black py-8">
      <div class="container mx-auto flex flex-col justify-center items-center text-center">
        <div class="h-16 flex flex-col justify-start w-full my-8">
          <h2 class="text-3xl font-bold -mb-4">Estimate your project costs</h2>
          <p class="text-base mt-4">by selecting packages!</p>
        </div>

        <!-- Price Cards Container -->
        <div class="flex flex-wrap justify-center gap-8 w-full">
          <!-- Core Package -->
          <div class="card w-80 bg-gray-300 shadow-xl">
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-bold mb-2">The Core</h3>
              <ul class="text-left mb-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  CMS functionality
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Setup in VM/Server/Droplet
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Generic Design
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Customized Theme for Branding
                </li>
              </ul>
              <p class="text-base mb-4">Price: 1200€</p>
              <button class="btn btn-accent">Select</button>
            </div>
          </div>

          <!-- Extensions Package -->
          <div class="card w-80 bg-gray-300 shadow-xl">
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-bold mb-2">APIs</h3>
              <ul class="text-left mb-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Components processing Data
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  API Development
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Database Model
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Implementation
                </li>
              </ul>
              <p class="text-base mb-4">Price: 500€</p>
              <button class="btn btn-accent">Select</button>
            </div>
          </div>

          <!-- Additional Package 1 -->
          <div class="card w-80 bg-gray-300 shadow-xl">
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-bold mb-2">Custom Design</h3>
              <ul class="text-left mb-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  CMS functionality
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Generic Design
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Customized Theme for Branding
                </li>
              </ul>
              <!-- Add your features here -->
              <p class="text-base mb-4">Price: 800€</p>
              <button class="btn btn-accent">Select</button>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-8 w-full pt-8">
          <!-- Additional Package 2 -->
          <div class="card w-80 bg-gray-300 shadow-xl">
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-bold mb-2">Simple AI</h3>
              <ul class="text-left mb-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  API Implementation (OpenAI, Runpod, Replica)
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Fine-tuning with your Data (Langchain)
                </li>
              </ul>
              <!-- Add your features here -->
              <p class="text-base mb-4">Price: 500€</p>
              <button class="btn btn-accent">Select</button>
            </div>
          </div>

          <!-- Additional Package 2 -->
          <div class="card w-80 bg-gray-300 shadow-xl">
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-bold mb-2">Extended AI</h3>
              <ul class="text-left mb-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Multi Agent
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Autonomous Agents
                </li>
              </ul>
              <!-- Add your features here -->
              <p class="text-base mb-4">Price: 500€</p>
              <button class="btn btn-accent">Select</button>
            </div>
          </div>

          <!-- Additional Package 2 -->
          <div class="card w-80 bg-gray-300 shadow-xl">
            <div class="card-body p-6">
              <h3 class="card-title text-xl font-bold mb-2">Dedicated AI</h3>
              <ul class="text-left mb-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Selfhosted Setup
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline text-white bg-secondary rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Any LLM/AI
                </li>
              </ul>
              <!-- Add your features here -->
              <p class="text-base mb-4">Price: 850€</p>
              <button class="btn btn-accent">Select</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12">
      <Contact/>
    </section>

    <!-- Footer Section -->
    <footer class="bg-base-dark text-neutral py-8 text-center">
      <p>&copy; 2023 Christopher Müller. All rights reserved.</p>
    </footer>
  </div>
</template>


<style scoped>
/* Add your custom styles here */
</style>
