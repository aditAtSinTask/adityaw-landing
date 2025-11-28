<template>
  <span>{{ displayValue }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: number;
  suffix?: string;
  duration?: number;
}>();

const displayValue = ref(0);
const { suffix = '', duration = 2000 } = props;

const animateCounter = () => {
  const startTime = Date.now();
  const endTime = startTime + duration;

  const updateCounter = () => {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);

    displayValue.value = Math.floor(easeOutQuart * props.target);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      displayValue.value = props.target;
    }
  };

  updateCounter();
};

onMounted(() => {
  // Use IntersectionObserver to trigger animation when component is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const element = document.querySelector('#stats');
  if (element) {
    observer.observe(element);
  }
});
</script>
