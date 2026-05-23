<template>
  <nav ref="navbarRef" class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="shrink-0 flex items-center gap-2">
          <img src="/img/logo.png" alt="Fernanda" class="h-8 w-auto" />
        </a>

        <!-- CTA -->
        <a
          href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!"
          target="_blank"
          class="inline-flex items-center gap-1.5 sm:gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-body font-medium px-3.5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          <i class="pi pi-whatsapp text-sm sm:text-lg"></i>
          <span class="text-xs sm:text-sm">Agende sua sessão</span>
        </a>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navbarRef = ref(null)
</script>
