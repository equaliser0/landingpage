<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-4">Contact Me</h2>

    <!-- Contact Form -->
    <form class="max-w-md mx-auto">
      <!-- Name Input -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-base-content">Your Name</label>
        <input type="text" id="name" name="name" class="input input-bordered  w-full mt-1 p-2" placeholder="John Doe" required>
      </div>

      <!-- Email Input -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-base-content">Your Email</label>
        <input type="email" id="email" name="email" class="input input-bordered  w-full mt-1 p-2" placeholder="john@example.com" required>
      </div>

      <!-- Message Input -->
      <div class="mb-6">
        <label for="message" class="block text-sm font-medium text-base-content">Your Message</label>
        <textarea id="message" name="message" rows="4" class="textarea textarea-bordered w-full mt-1 p-2" placeholder="Write your message here" required></textarea>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>
