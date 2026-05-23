<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-linear-to-b from-warm via-cream to-warm overflow-hidden">
    <!-- Floating background blobs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage/15 blur-3xl animate-[float-slow_8s_ease-in-out_infinite]"></div>
      <div class="absolute -bottom-32 -left-32 w-120 h-120 rounded-full bg-nude/20 blur-3xl animate-[float-slower_12s_ease-in-out_infinite_reverse]"></div>
      <div class="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-sage/8 blur-3xl animate-[float-slower_10s_ease-in-out_infinite]"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl animate-[float-slow_14s_ease-in-out_infinite_reverse]"></div>
    </div>

    <!-- Decorative rings behind logo -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full max-w-2xl aspect-square">
      <div class="absolute inset-0 rounded-full border border-sage/10 animate-[float-slower_7s_ease-in-out_infinite]"></div>
      <div class="absolute inset-[10%] rounded-full border border-nude/10 animate-[float-slow_9s_ease-in-out_infinite_reverse]"></div>
      <div class="absolute inset-[20%] rounded-full border border-terracotta/5 animate-[float-slower_6s_ease-in-out_infinite]"></div>
    </div>

    <main class="relative z-10 text-center max-w-4xl mx-auto px-5 pb-16">
      <!-- Logo -->
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_0.8s_ease_forwards]' }" class="mb-10">
        <div class="relative inline-block">
          <div class="absolute inset-0 rounded-full bg-terracotta/10 blur-3xl scale-[1.8] animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
          <div class="absolute inset-0 rounded-full border border-terracotta/15 animate-[ring-scale_3s_ease-in-out_infinite]"></div>
          <img class="h-44 lg:h-56 mx-auto drop-shadow-xl relative" src="/img/logo.png" alt="Fernanda Monteiro Logo">
        </div>
      </div>

      <!-- Name -->
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <h1 class="font-heading text-charcoal text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight tracking-tight">
          Fernanda Monteiro
        </h1>
      </div>

      <!-- Subtitle -->
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2s_ease_forwards]' }">
        <p class="text-stone text-base md:text-lg lg:text-xl font-body uppercase tracking-[0.35em] font-light">
          Terapeuta Integrativa
        </p>
      </div>

      <!-- Decorative divider -->
      <div class="flex items-center justify-center gap-3 my-8">
        <span class="block w-12 h-px bg-terracotta/40"></span>
        <span class="block w-2.5 h-2.5 rounded-full bg-terracotta/60 ring-4 ring-terracotta/10"></span>
        <span class="block w-12 h-px bg-terracotta/40"></span>
      </div>

      <!-- Tagline -->
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2.5s_ease_forwards]' }">
        <h2 class="font-heading text-charcoal text-xl md:text-2xl lg:text-3xl font-light italic mb-12 leading-relaxed">
          Transforme seu cuidado em prioridade!
        </h2>
      </div>

      <!-- CTA -->
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2.5s_ease_forwards]' }" class="inline-block relative">
        <div class="absolute inset-0 rounded-full bg-terracotta/15 blur-xl animate-[pulse-glow_2.5s_ease-in-out_infinite]"></div>
        <a href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" target="_blank"
           class="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
          <i class="pi pi-whatsapp text-xl"></i>
          <span>Agende sua sessão</span>
        </a>
      </div>
    </main>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone/40">
      <span class="text-[10px] font-body uppercase tracking-[0.25em]">Explore</span>
      <div class="w-5 h-8 rounded-full border-2 border-stone/30 flex justify-center pt-1.5">
        <div class="w-1 h-2 rounded-full bg-stone/40 animate-[bounce-subtle_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
