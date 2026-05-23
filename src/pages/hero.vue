<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-warm via-cream to-warm overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage/15 blur-3xl"></div>
      <div class="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-nude/20 blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-sage/5 blur-3xl"></div>
    </div>

    <main class="relative z-10 text-center max-w-4xl mx-auto px-5">
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_0.8s_ease_forwards]' }" class="mb-10">
        <img class="h-44 lg:h-56 mx-auto drop-shadow-xl" src="/img/logo.png" alt="Fernanda Monteiro Logo">
      </div>

      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <h1 class="font-heading text-charcoal text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
          Fernanda Monteiro
        </h1>
      </div>

      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2s_ease_forwards]' }">
        <p class="text-stone text-base md:text-lg lg:text-xl font-body uppercase tracking-[0.35em] font-light">
          Terapeuta Integrativa
        </p>
      </div>

      <div class="flex items-center justify-center gap-3 my-8">
        <span class="block w-12 h-px bg-terracotta/40"></span>
        <span class="block w-2 h-2 rounded-full bg-terracotta/60"></span>
        <span class="block w-12 h-px bg-terracotta/40"></span>
      </div>

      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2.5s_ease_forwards]' }">
        <h2 class="font-heading text-charcoal text-xl md:text-2xl lg:text-3xl font-light italic mb-12 leading-relaxed">
          Transforme seu cuidado em prioridade!
        </h2>
      </div>

      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2.5s_ease_forwards]' }">
        <a href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" target="_blank" class="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
          <i class="pi pi-whatsapp text-xl"></i>
          <span>Agende sua sessão</span>
        </a>
      </div>
    </main>
  </section>
</template>

<script setup>
</script>
