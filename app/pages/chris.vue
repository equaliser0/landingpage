<script setup lang="ts">
definePageMeta({
  layout: 'none'
})
</script>

<template>
  <div class="bg-cover bg-top bg-fixed" style="background-image: url('https://chris.ecosis.network/files/NPRhCnk0QlxTnV8Set8jPnTbg.webp');">
    <!-- Hero Section -->
    <section class="text-base-content py-16 relative">
      <div class="container mx-auto text-center">
        <!-- Hero Background Image -->
        <div class="absolute inset-0 z-0 bg-cover bg-top bg-fixed"></div>

        <!-- Profile Image -->
        <div class="mx-auto w-32 h-32 bg-neutral rounded-full overflow-hidden outline outline-offset-2">
          <img src="https://media.licdn.com/dms/image/D5603AQFjDCUDnFeLUw/profile-displayphoto-shrink_800_800/0/1690816380812?e=1706140800&v=beta&t=5UuS8lTw8OkErD8z6EjHOu6Cfizp0neGh7nPqQSOqWQ" alt="Profile Image" class="w-full h-full object-cover" />
        </div>

        <h2 class="text-xl font-bold text-accent relative z-10 mt-4 -mb-6">Autonomous</h2>
        <h1 class="text-6xl font-bold text-neutral relative z-10 mt-4">Chris</h1>
        <p class="text-xl text-neutral opacity-80 mt-2 relative z-10">Software Developer | Musician | Entrepreneur</p>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">About Me</h2>

        <!-- Two-Column Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Text Description -->
          <div class="space-y-4">
            <p class="text-xl text-base-content opacity-80">
              Hi! I am Chris, a visionary entrepreneur with a strong background in software development, system administration, crypto, fintech, entrepreneurship, business operation, and macroeconomics. I am also known as 'Autonomous Chris' or 'equaliser' as a musician.
            </p>
            <p class="text-xl text-base-content opacity-80">
              My mission is to create businesses that empower communities and individuals by using automation and technology.
            </p>
          </div>

          <!-- Skills and Interests -->
          <div class="space-y-4 flex items-start">
            <div class="w-64">
              <h3 class="text-xl font-bold text-primary">Skills</h3>
              <ul class="list-disc pl-6">
                <li>Software Development <progress class="progress w-auto" value="100" max="100"></progress></li>
                <li>Web and App UI Design <progress class="progress w-auto" value="70" max="100"></progress></li>
                <li>Music Composition <progress class="progress w-auto" value="90" max="100"></progress></li>
                <li>Entrepreneurship <progress class="progress w-auto" value="40" max="100"></progress></li>
              </ul>
            </div>

            <div class="w-auto">
              <div class=" flex flex-wrap justify-end md:justify-start bg-base-300 rounded m-2 p-2 flex inline">
                <h3 class="w-full">
                  Interests
                </h3>
                <span class="badge badge-neutral m-1 w-auto">Large Language Models</span>
                <span class="badge badge-neutral m-1 w-auto">Artificial Intelligence</span>
                <span class="badge badge-neutral m-1 w-auto">Business Execution</span>
                <span class="badge badge-neutral m-1 w-auto">Process Automation</span>
                <span class="badge badge-neutral m-1 w-auto">Web Aplications</span>
                <span class="badge badge-neutral m-1 w-auto">Fullstack Development</span>
                <span class="badge badge-neutral m-1 w-auto">Microservice APIs</span>
                <span class="badge badge-neutral m-1 w-auto">Blockchain</span>
                <span class="badge badge-neutral m-1 w-auto">Crypto</span>
                <span class="badge badge-neutral m-1 w-auto">DeFi</span>
                <span class="badge badge-neutral m-1 w-auto">Web3</span>
                <span class="badge badge-neutral m-1 w-auto">FinTech</span>
                <span class="badge badge-neutral m-1 w-auto">Decentralization</span>
                <span class="badge badge-neutral m-1 w-auto">Digitization</span>
                <span class="badge badge-neutral m-1 w-auto">Globalization</span>
                <span class="badge badge-neutral m-1 w-auto">Economics</span>
                <span class="badge badge-neutral m-1 w-auto">Investments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16 bg-base-200/50 backdrop-blur-xl">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Projects</h2>

        <!-- Project Cards with Carousel -->
        <div class="carousel w-full">
          <!-- Project 1 -->
          <div id="project1" class="carousel-item w-full flex flex-wrap justify-center">
            <div class="p-12 w-[600px] h-[360px]">
              <div class="card card-compact bg-base-100 shadow-xl">
                <div class="mx-auto w-32 h-32 bg-neutral rounded-full overflow-hidden outline outline-offset-2 -mt-4">
                  <img src="https://chris.ecosis.network/files/Xwi2wY2pszBbPRIB46WokYqbE_002.webp" alt="Profile Image" class="w-full h-full object-cover" />
                </div>
                <div class="card-body text-center">
                  <h2 class="text-3xl font-bold">ecosis Network</h2>
                  <p>A real-world interoperable, decentralized smart contract platform to build community-driven digital ecosystems.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Visit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-12 w-[600px] h-[360px]">
              <div class="card card-compact bg-base-100 shadow-xl">
                <div class="mx-auto w-32 h-32 bg-neutral rounded-full overflow-hidden outline outline-offset-2 -mt-4">
                  <img src="https://chris.ecosis.network/files/Xwi2wY2pszBbPRIB46WokYqbE_002.webp" alt="Profile Image" class="w-full h-full object-cover" />
                </div>
                <div class="card-body text-center">
                  <h2 class="text-3xl font-bold">enjine Development</h2>
                  <p>Custom Software Development specialized to CMS like Data Management System and AI.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Visit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-12 w-[600px] h-[360px]">
              <div class="card card-compact bg-base-100 shadow-xl">
                <div class="mx-auto w-32 h-32 bg-neutral rounded-full overflow-hidden outline outline-offset-2 -mt-4">
                  <img src="https://chris.ecosis.network/files/Xwi2wY2pszBbPRIB46WokYqbE_002.webp" alt="Profile Image" class="w-full h-full object-cover" />
                </div>
                <div class="card-body text-center">
                  <h2 class="text-3xl font-bold">nuin</h2>
                  <p>CMS like fullstack Nodejs Data Management System customized for businesses individually.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Visit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-12 w-[600px] h-[360px]">
              <div class="card card-compact bg-base-100 shadow-xl">
                <div class="mx-auto w-32 h-32 bg-neutral rounded-full overflow-hidden outline outline-offset-2 -mt-4">
                  <img src="https://chris.ecosis.network/files/Xwi2wY2pszBbPRIB46WokYqbE_002.webp" alt="Profile Image" class="w-full h-full object-cover" />
                </div>
                <div class="card-body text-center">
                  <h2 class="text-3xl font-bold">equaliser</h2>
                  <p>Club Music DJ and Producer -<br>Ghetto Bass: Ghetto House, HipHop, Techno, Drum & Bass</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Visit</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12 bg-base-100">
      <Contact/>
    </section>

    <!-- Music Section -->
    <section class="bg-base-200 py-16">
      <div class="container mx-auto pb-8">
        <h2 class="text-3xl font-bold mb-8 text-neutral">Mediathek</h2>
        <!-- Blog Post List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/blog-post-1.jpg" alt="Blog Post 1" /></figure>
            <div class="card-body">
              <h2 class="card-title">Blog Post 1</h2>
              <p>Summary of Blog Post 1.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-ghost btn-xs">Read More</button>
              </div>
            </div>
          </div>
          <!-- Repeat for other blog posts -->
        </div>
      </div>
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Music Playlists</h2>

        <!-- Masonry Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Playlist 1 -->
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/playlist-1.jpg" alt="Playlist 1" /></figure>
            <div class="card-body">
              <h2 class="card-title">Playlist 1</h2>
              <p>Description of Playlist 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen Now</button>
              </div>
            </div>
          </div>
          <!-- Playlist 2 -->
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/playlist-2.jpg" alt="Playlist 2" /></figure>
            <div class="card-body">
              <h2 class="card-title">Playlist 2</h2>
              <p>Description of Playlist 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen Now</button>
              </div>
            </div>
          </div>
          <!-- Playlist 3 -->
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/playlist-3.jpg" alt="Playlist 3" /></figure>
            <div class="card-body">
              <h2 class="card-title">Playlist 3</h2>
              <p>Description of Playlist 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen Now</button>
              </div>
            </div>
          </div>

          <!-- Playlist 1 -->
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/playlist-1.jpg" alt="Playlist 1" /></figure>
            <div class="card-body">
              <h2 class="card-title">Playlist 1</h2>
              <p>Description of Playlist 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen Now</button>
              </div>
            </div>
          </div>
          <!-- Playlist 2 -->
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/playlist-2.jpg" alt="Playlist 2" /></figure>
            <div class="card-body">
              <h2 class="card-title">Playlist 2</h2>
              <p>Description of Playlist 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen Now</button>
              </div>
            </div>
          </div>
          <!-- Playlist 3 -->
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="/images/playlist-3.jpg" alt="Playlist 3" /></figure>
            <div class="card-body">
              <h2 class="card-title">Playlist 3</h2>
              <p>Description of Playlist 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen Now</button>
              </div>
            </div>
          </div>
          <!-- Repeat for other playlists -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add your custom styles here */
</style>
