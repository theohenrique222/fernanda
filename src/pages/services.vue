<template>
  <section id="atendimentos" class="py-24 lg:py-32 bg-warm">
    <main class="max-w-6xl mx-auto px-5">
      <div class="text-center mb-16" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <span class="font-body text-xs uppercase tracking-[0.25em] text-stone font-medium">Estrutura</span>
        <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Atendimentos
        </h1>
        <p class="font-body text-stone text-sm md:text-base mt-4 max-w-xl mx-auto">
          Atendimento em espaço projetado para um maior conforto:
        </p>
      </div>

      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-5" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <div v-for="(item, i) in amenities" :key="i"
          class="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-border/60 transition-all duration-300 hover:-translate-y-0.5">
          <div class="w-11 h-11 rounded-lg bg-sage/20 flex items-center justify-center flex-shrink-0">
            <i :class="item.icon" class="text-terracotta text-lg"></i>
          </div>
          <span class="font-body text-charcoal text-sm md:text-base font-medium">{{ item.label }}</span>
        </div>
      </div>

      <div class="max-w-3xl mx-auto text-center mt-12" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <p class="font-heading text-charcoal text-lg md:text-xl font-medium italic leading-relaxed">
          Tudo pensado nos mínimos detalhes para oferecer uma experiência única e inesquecível!
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      amenities: [
        { label: "Sala de espera climatizada", icon: "pi pi-sun" },
        { label: "Som ambiente", icon: "pi pi-volume-up" },
        { label: "Iluminação confortável", icon: "pi pi-star" },
        { label: "Estacionamento facilitado", icon: "pi pi-car" },
        { label: "Fácil localização", icon: "pi pi-map-marker" },
      ]
    }
  }
}
</script>
