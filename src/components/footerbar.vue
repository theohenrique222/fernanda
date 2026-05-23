<template>
  <footer class="bg-charcoal text-white/80">
    <main class="max-w-6xl mx-auto px-6 py-10">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div class="text-center lg:text-left">
          <img src="/img/logo.png" alt="Fernanda Monteiro" class="h-8 mx-auto lg:mx-0 mb-3 opacity-80" />
          <p class="font-body text-sm text-white/60">
            &copy; {{ new Date().getFullYear() }} &mdash; Todos os direitos reservados a
            <span class="text-white/90 font-medium">Fernanda Monteiro</span>.
          </p>
        </div>
        <div class="flex items-center gap-5">
          <a target="_blank" href="https://www.instagram.com/fernandamonteirofisio/" class="text-white/60 hover:text-terracotta transition-all duration-300 hover:-translate-y-0.5">
            <i class="pi pi-instagram text-xl"></i>
          </a>
          <a target="_blank" href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" class="text-white/60 hover:text-terracotta transition-all duration-300 hover:-translate-y-0.5">
            <i class="pi pi-whatsapp text-xl"></i>
          </a>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-white/10 text-center">
        <p class="font-body text-xs text-white/40">
          Terapeuta Integrativa
        </p>
      </div>
    </main>
  </footer>
</template>

<script setup>
</script>
