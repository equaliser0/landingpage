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
          <img src="https://chris.ecosis.network/files/Xwi2wY2pszBbPRIB46WokYqbE_002.webp" alt="Profile Image" class="w-full h-full object-cover" />
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

            <div class="w-64">
              <h3 class="text-xl font-bold text-primary">Interests</h3>
              <ul class="list-disc pl-6">
                <li>Innovative Technologies</li>
                <li>Musical Exploration</li>
                <li>Business Strategy</li>
                <li>Creative Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16 bg-base-200/50 backdrop-blur-xl">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Businesses</h2>

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
                  <h2 class="text-3xl font-bold">nujin Solutions</h2>
                  <p>CMS like fullstack Nodejs Data Management System customized for businesses individually.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Visit</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="p-2">
              <div class="card card-compact bg-base-100 shadow-xl">
                <figure><img src="/images/project-1.jpg" alt="Project 1" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Project 1</h2>
                  <p>Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Details</button>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <!-- Project Indicators -->
        <!-- <div class="flex justify-center w-full py-2 gap-2 mt-4">
          <a href="#project1" class="btn btn-xs">1</a>
          <a href="#project2" class="btn btn-xs">2</a>
          <a href="#project3" class="btn btn-xs">3</a>
        </div> -->
      </div>
    </section>

    <!-- Music Section -->
    <section class="bg-base-200 py-16">
      <div class="container mx-auto pb-8">
        <h2 class="text-3xl font-bold mb-8 text-neutral">Music</h2>
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
