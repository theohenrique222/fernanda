<template>
  <section class="relative py-32 lg:py-40 bg-gradient-to-t from-cream to-warm overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-sage/10 blur-3xl"></div>
    </div>

    <main class="relative z-10 text-center max-w-4xl mx-auto px-5">
      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }" class="mb-10">
        <span class="block w-16 h-0.5 bg-terracotta/40 mx-auto mb-8"></span>
        <h1 class="font-heading text-charcoal text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          Valorize-se: corpo e mente em equilíbrio são<br class="hidden md:block"> seu melhor investimento.
        </h1>
      </div>

      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }" class="mb-12">
        <h2 class="font-heading text-terracotta text-lg md:text-2xl lg:text-3xl font-semibold tracking-wider uppercase">
          Seja sua prioridade!
        </h2>
      </div>

      <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <a href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" target="_blank"
          class="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
          <i class="pi pi-whatsapp text-xl"></i>
          <span>Agende sua sessão</span>
        </a>
      </div>
    </main>
  </section>
</template>

<script setup>
</script>
