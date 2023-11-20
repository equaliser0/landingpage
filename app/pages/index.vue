<script setup lang="ts">

</script>

<template>
  <div>
    <!-- Header Section -->
    <header class="bg-primary text-neutral py-8 text-center">
      <h1 class="text-4xl font-bold">Your WebApp Development Agency</h1>
      <p class="mt-4 text-base">Building custom solutions for businesses</p>
    </header>

    <!-- Services Section -->
    <section class="bg-base-100 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <!-- Add your service details here -->
        <div class="flex justify-center gap-8">
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <!-- Service 1 details -->
          </div>
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <!-- Service 2 details -->
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="text-base">Your agency specializes in fully building web applications with Node.js and Typescript to deliver slim but powerful systems.</p>
      </div>
    </section>

    <!-- Funnel Section -->
    <section class="bg-accent text-neutral py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Start Your Project Today!</h2>
        <p class="text-base mb-8">Let us help you transform your ideas into reality.</p>
        <a href="#contact" class="btn btn-primary">Get in Touch</a>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Contact Us</h2>

        <!-- Contact Form -->
        <form class="max-w-md mx-auto">
          <!-- Name Input -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-base-content">Your Name</label>
            <input type="text" id="name" name="name" class="form-input w-full mt-1 p-2" placeholder="John Doe" required>
          </div>

          <!-- Email Input -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-base-content">Your Email</label>
            <input type="email" id="email" name="email" class="form-input w-full mt-1 p-2" placeholder="john@example.com" required>
          </div>

          <!-- Message Input -->
          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-base-content">Your Message</label>
            <textarea id="message" name="message" rows="4" class="form-textarea w-full mt-1 p-2" placeholder="Write your message here" required></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-base-dark text-neutral py-8 text-center">
      <p>&copy; 2023 Your WebApp Development Agency. All rights reserved.</p>
    </footer>
  </div>
</template>


<style scoped>
/* Add your custom styles here */
</style>
