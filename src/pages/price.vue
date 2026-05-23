<template>
  <section id="price" class="relative py-24 lg:py-32 bg-cream overflow-hidden">
    <!-- Decorative background blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-sage/20 to-transparent blur-3xl"></div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-terracotta/15 to-transparent blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-nude/20 to-transparent blur-3xl"></div>
    </div>

    <main class="relative max-w-6xl mx-auto px-5">
      <!-- Header -->
      <div class="text-center mb-16" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <span class="flex items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-stone font-medium">
          <i class="pi pi-sparkles text-terracotta/70"></i>
          Serviços
        </span>
        <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Equilíbrio e bem-estar<br class="hidden md:block"> para o corpo e a mente!
        </h1>
        <p class="font-body text-stone text-sm md:text-base mt-4 max-w-xl mx-auto">
          Cuidados personalizados para cada necessidade
        </p>
        <!-- Decorative divider -->
        <div class="flex items-center justify-center gap-3 mt-8">
          <span class="block w-8 h-px bg-sage/60"></span>
          <span class="block w-1.5 h-1.5 rounded-full bg-terracotta/60"></span>
          <span class="block w-8 h-px bg-sage/60"></span>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(service, index) in services" :key="index"
          class="group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden
                 shadow-sm hover:shadow-2xl border border-border/30 hover:border-sage/40
                 transition-all duration-500 hover:-translate-y-2"
          v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }"
          :style="{ animationDelay: `${index * 0.12}s` }">

          <!-- Gradient accent bar -->
          <div class="absolute top-0 left-0 right-0 h-1.5
                       bg-gradient-to-r from-sage via-terracotta/40 to-sage-light
                       group-hover:h-2 transition-all duration-500 ease-out"></div>

          <!-- Decorative glow -->
          <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full
                       bg-gradient-to-br from-sage/20 to-terracotta/5 blur-3xl
                       group-hover:scale-150 transition-transform duration-700"></div>

          <!-- Shine overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0
                       group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div class="relative p-6 md:p-8">
            <!-- Icon + Title -->
            <div class="flex items-start gap-4 mb-5">
              <div class="shrink-0 w-12 h-12 rounded-2xl
                           bg-gradient-to-br from-sage/30 to-sage/5
                           flex items-center justify-center text-sage-dark
                           shadow-sm group-hover:shadow-md
                           group-hover:scale-110 group-hover:rotate-[3deg]
                           transition-all duration-500 ease-out">
                <i :class="['pi', service.icon, 'text-lg']"></i>
              </div>
              <div class="min-w-0">
                <h3 class="font-heading text-charcoal text-lg md:text-xl font-semibold leading-tight">
                  {{ service.title }}
                </h3>
              </div>
            </div>

            <!-- Description -->
            <p class="font-body text-stone/70 text-sm md:text-base leading-relaxed mb-8
                      transition-colors duration-300">
              {{ service.description }}
            </p>

            <!-- Price footer -->
            <div class="flex items-end justify-between pt-5 border-t border-border/20">
              <span class="font-body text-[10px] uppercase tracking-[0.2em] text-muted">A partir de</span>
              <span class="font-heading text-2xl md:text-3xl font-bold
                           bg-gradient-to-r from-terracotta to-amber-700 bg-clip-text text-transparent
                           group-hover:from-terracotta group-hover:to-amber-600 transition-all duration-500">
                R$ {{ service.price.replace('R$ ', '') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Massagem relaxante",
          price: "99,90",
          icon: "pi-heart",
          description: "Um momento de cuidado e pausa. Através de toques suaves e ritmados, ela ajuda a aliviar as tensões do corpo, acalmar a mente e trazer uma sensação profunda de bem-estar."
        },
        {
          id: 2,
          title: "Ventosaterapia",
          price: "49,90",
          icon: "pi-sun",
          description: "Técnica que utiliza ventosas para criar uma leve sucção na pele, estimulando a circulação sanguínea e ajudando na eliminação de toxinas. Além de aliviar dores musculares e tensões, ela promove relaxamento e sensação de leveza."
        },
        {
          id: 3,
          title: "Drenagem linfática + Massagem modeladora",
          price: "119,90",
          icon: "pi-sparkles",
          description: "Técnica que combina drenagem linfática e massagem modeladora, unindo movimentos suaves e intensos para estimular a circulação, eliminar líquidos e toxinas, reduzir inchaço e auxiliar na definição do contorno corporal."
        },
        {
          id: 4,
          title: "Dry Needling",
          price: "49,90",
          icon: "pi-bolt",
          description: "Técnica terapêutica que utiliza agulhas finas para liberar pontos de tensão muscular, conhecidos como 'gatilhos de dor'. O procedimento ajuda a aliviar desconfortos, melhorar a mobilidade e restaurar o equilíbrio muscular."
        },
        {
          id: 5,
          title: "Liberação Miofascial",
          price: "49,90",
          icon: "pi-shield",
          description: "Técnica que trabalha sobre a fáscia, o tecido que envolve músculos e órgãos, para liberar tensões acumuladas e melhorar a mobilidade. Com toques suaves e alongamentos direcionados, ajuda a aliviar dores e restaurar o equilíbrio."
        }
      ]
    }
  }
}
</script>
