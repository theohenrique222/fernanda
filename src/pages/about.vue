<template>
  <section id="about" class="py-24 lg:py-32 bg-warm">
    <main class="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

      <div class="flex-1 order-2 lg:order-1">
        <div v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
          <span class="font-body text-xs uppercase tracking-[0.25em] text-stone font-medium">Quem sou</span>
          <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-8 leading-tight">
            Bem-estar que transforma!
          </h1>
        </div>
        <div class="space-y-5 text-stone font-body text-sm md:text-base leading-relaxed" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1.5s_ease_forwards]' }">
          <p>
            Terapeuta integrativa com ampla experiência em tratamentos corporais voltados ao bem-estar e qualidade de vida.
          </p>
          <p>
            Especialista em técnicas de relaxamento, incluindo massagem relaxante, ventosaterapia, liberação miofascial e dry needling, com foco em abordagens humanizadas para alívio da dor e tensões musculares.
          </p>
          <p>
            Também atua em tratamentos estéticos funcionais, como drenagem linfática e massagem modeladora, proporcionando resultados eficazes e cuidados personalizados.
          </p>
        </div>
        <div class="mt-8 flex items-center gap-4" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2s_ease_forwards]' }">
          <a href="https://www.instagram.com/fernandamonteirofisio/" target="_blank" class="inline-flex items-center gap-2 text-stone hover:text-terracotta transition-all duration-300 text-sm font-medium">
            <i class="pi pi-instagram text-lg"></i>
            <span>@fernandamonteirofisio</span>
          </a>
        </div>
      </div>

      <div class="flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-none" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2s_ease_forwards]' }">
        <div class="relative">
          <div class="absolute -top-4 -right-4 w-full h-full border-2 border-nude rounded-2xl"></div>
          <img class="relative w-full h-auto lg:h-[32rem] object-cover rounded-2xl shadow-xl" src="/img/avatar.png" alt="Fernanda Monteiro">
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
</script>
