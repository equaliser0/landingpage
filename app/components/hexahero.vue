<template>
  <div class="container overflow-scroll" ref="el">
    <svg
      ref="eye"
      :style="`transform: rotate(${rotationDegrees}deg) translateZ(0)`"
      viewBox="0 0 33 33"
      fill="none"
    >
      <!-- Your eye SVG content here -->
    </svg>
    <div
      class="mouse-cursor-gradient-tracking h-64"
      @mousemove="handleMouseMove"
    >
      <div>Hover me</div>
    </div>
    {{ eyeLocation }}
  </div>
</template>

<script setup lang="ts">
import {
  useMouse,
  useWindowSize,
  debouncedWatch,
  throttledWatch,
} from '@vueuse/core';

const { x: mouseX, y: mouseY } = useMouse();
const { width, height } = useWindowSize();

const eye = ref(null);
const eyeLocation = ref(undefined);
const rotationDegrees = ref(0);

const el = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(el)

onMounted(() => {
  eyeLocation.value = eye?.value?.getBoundingClientRect();
});

debouncedWatch([width, height], () => {
  eyeLocation.value = eye?.value?.getBoundingClientRect();
}, { debounce: 200 });

throttledWatch([mouseX, mouseY], ([x, y]) => {
  if (eyeLocation.value) {
    const radianDegrees = Math.atan2(x - eyeLocation.value.right, y - eyeLocation.value.top);
    rotationDegrees.value = radianDegrees * (320 / Math.PI) * -1 + 320;
  }
}, { throttle: 1000 / 60 });

const handleMouseMove = (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.target.style.setProperty('--x', `${x}px`);
  e.target.style.setProperty('--y', `${y}px`);
};

const resetGradient = (e) => {
  e.target.style.removeProperty('--x');
  e.target.style.removeProperty('--y');
};
</script>

<style>
.container {
  position: relative;
}

.eye {
  height: 30rem;
}

.mouse-cursor-gradient-tracking {
  position: relative;
  background: #f9982d;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  overflow: hidden;
}

.mouse-cursor-gradient-tracking div {
  position: relative;
}

.mouse-cursor-gradient-tracking::before {
  --size: 0;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, #780375, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.mouse-cursor-gradient-tracking:hover::before {
  --size: 200px;
}
</style>
