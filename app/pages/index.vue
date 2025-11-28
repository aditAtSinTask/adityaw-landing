<template>
  <div class="min-h-screen overflow-hidden">
    <!-- Hero Section -->
    <section id="hero" class="relative flex min-h-screen items-center justify-center px-4 sm:px-6 py-20">
      <!-- Animated Background -->
      <div class="background-container">
        <div class="blur-orb blur-orb-1"></div>
        <div class="blur-orb blur-orb-2"></div>
        <div class="blur-orb blur-orb-3"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 mx-auto max-w-6xl text-center">
        <div class="animate-fade-in-up">
          <h1 class="mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-8xl">
            Build The
            <span class="gradient-text mt-2 block">Future Today</span>
          </h1>
          <p class="mx-auto mb-12 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 px-4">
            Transforming ideas into powerful digital experiences with cutting-edge technology and
            innovative solutions.
          </p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row px-4">
            <a
              href="#contact"
              class="group w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Get Started
              <span class="ml-2 inline-block transition-transform group-hover:translate-x-1"
                >→</span
              >
            </a>
            <a
              href="#features"
              class="glass-effect w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        <!-- Floating Cards -->
        <div class="animate-fade-in-up mt-16 sm:mt-20 grid grid-cols-1 gap-4 sm:gap-6 delay-300 md:grid-cols-3 px-4">
          <div
            class="glass-effect group cursor-pointer rounded-2xl p-5 sm:p-6 transition-transform duration-300 hover:scale-105"
          >
            <div class="mb-3 sm:mb-4 text-3xl sm:text-4xl transition-transform group-hover:scale-110">⚡</div>
            <h3 class="mb-2 text-lg sm:text-xl font-bold">Lightning Fast</h3>
            <p class="text-sm sm:text-base text-gray-400">Optimized performance for instant user experiences</p>
          </div>
          <div
            class="glass-effect group cursor-pointer rounded-2xl p-5 sm:p-6 transition-transform duration-300 hover:scale-105"
          >
            <div class="mb-3 sm:mb-4 text-3xl sm:text-4xl transition-transform group-hover:scale-110">🎨</div>
            <h3 class="mb-2 text-lg sm:text-xl font-bold">Beautiful Design</h3>
            <p class="text-sm sm:text-base text-gray-400">Stunning interfaces that captivate your audience</p>
          </div>
          <div
            class="glass-effect group cursor-pointer rounded-2xl p-5 sm:p-6 transition-transform duration-300 hover:scale-105"
          >
            <div class="mb-3 sm:mb-4 text-3xl sm:text-4xl transition-transform group-hover:scale-110">🔒</div>
            <h3 class="mb-2 text-lg sm:text-xl font-bold">Secure & Reliable</h3>
            <p class="text-sm sm:text-base text-gray-400">Enterprise-grade security built into every layer</p>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="relative px-4 sm:px-6 py-20 sm:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 sm:mb-20 text-center">
          <h2 class="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
            Powerful <span class="gradient-text">Features</span>
          </h2>
          <p class="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Everything you need to build modern, scalable applications
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="glass-effect group cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/10"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div
              class="mb-4 sm:mb-6 text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            >
              {{ feature.icon }}
            </div>
            <h3 class="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold">{{ feature.title }}</h3>
            <p class="leading-relaxed text-sm sm:text-base text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="relative px-4 sm:px-6 py-20 sm:py-32">
      <div class="glass-effect mx-auto max-w-6xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-20">
        <div class="grid grid-cols-1 gap-8 sm:gap-12 text-center md:grid-cols-3">
          <div v-for="(stat, index) in stats" :key="index" class="group cursor-pointer">
            <div
              class="gradient-text mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl font-bold transition-transform group-hover:scale-110"
            >
              <AnimatedCounter :target="stat.value" :suffix="stat.suffix" />
            </div>
            <p class="text-base sm:text-lg md:text-xl text-gray-300">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="relative px-4 sm:px-6 py-20 sm:py-32">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
          Ready to <span class="gradient-text">Get Started?</span>
        </h2>
        <p class="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-gray-400 px-4">Join thousands of developers building the future</p>

        <form @submit.prevent="handleSubmit" class="mx-auto max-w-md space-y-4 px-4">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="glass-effect w-full rounded-full px-5 sm:px-6 py-3 sm:py-4 text-base transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            class="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Join Waitlist
          </button>
        </form>

        <div v-if="submitted" class="glass-effect animate-fade-in mt-6 rounded-2xl p-4 mx-4">
          <p class="text-sm sm:text-base text-green-400">✓ Thanks for joining! We'll be in touch soon.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/10 px-4 sm:px-6 py-8 sm:py-12">
      <div class="mx-auto max-w-6xl text-center text-gray-400">
        <p class="text-sm sm:text-base">&copy; 2024 Your Company. Built with Nuxt 4 & Tailwind CSS.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const email = ref('');
const submitted = ref(false);

const features = [
  {
    icon: '🚀',
    title: 'Server-Side Rendering',
    description:
      'Lightning-fast SSR for optimal performance and SEO, delivering content at the speed of light.'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Perfect experience across all devices and screen sizes, from mobile to desktop.'
  },
  {
    icon: '⚙️',
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows without any hassle.'
  },
  {
    icon: '🎯',
    title: 'Type Safety',
    description: 'Built with TypeScript for robust, maintainable code with zero runtime errors.'
  },
  {
    icon: '🌐',
    title: 'Global CDN',
    description: 'Deploy globally with edge computing for minimal latency worldwide.'
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Track user behavior and performance metrics in real-time with detailed insights.'
  }
];

const stats = [
  { value: 50, suffix: 'K+', label: 'Active Users' },
  { value: 99, suffix: '%', label: 'Uptime' },
  { value: 24, suffix: '/7', label: 'Support' }
];

const handleSubmit = () => {
  if (email.value) {
    submitted.value = true;
    setTimeout(() => {
      submitted.value = false;
      email.value = '';
    }, 3000);
  }
};

useHead({
  title: 'Build The Future Today - Your Company',
  meta: [
    {
      name: 'description',
      content: 'Transforming ideas into powerful digital experiences with cutting-edge technology.'
    }
  ]
});
</script>

<style scoped>
/* Background blur effect */
.background-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.blur-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(96px);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.blur-orb-1 {
  top: 25%;
  left: -25%;
  height: 16rem;
  width: 16rem;
  background-color: rgba(168, 85, 247, 0.3);
}

.blur-orb-2 {
  right: -25%;
  bottom: 25%;
  height: 16rem;
  width: 16rem;
  background-color: rgba(59, 130, 246, 0.3);
  animation-delay: 1s;
}

.blur-orb-3 {
  top: 50%;
  left: 50%;
  height: 16rem;
  width: 16rem;
  background-color: rgba(236, 72, 153, 0.2);
  transform: translate(-50%, -50%);
  animation-delay: 0.5s;
}

@media (min-width: 640px) {
  .blur-orb-1,
  .blur-orb-2,
  .blur-orb-3 {
    height: 24rem;
    width: 24rem;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in-up 0.5s ease-out forwards;
}

.delay-300 {
  animation-delay: 300ms;
  opacity: 0;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-fade-in,
  .blur-orb,
  .animate-bounce {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .transition-transform,
  .transition-all {
    transition: none;
  }
}

/* Optimize animations on mobile */
@media (max-width: 640px) {
  .animate-fade-in-up {
    animation-duration: 0.6s;
  }

  .group:hover {
    transform: scale(1.02) !important;
  }
}
</style>
