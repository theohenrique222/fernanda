<template>
  <section id="atendimentos" class="relative py-24 lg:py-32 bg-warm overflow-hidden">
    <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sage/10 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl pointer-events-none"></div>

    <main class="relative max-w-6xl mx-auto px-5">
      <div class="text-center mb-16" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <span class="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-terracotta font-medium">
          <span class="w-6 h-px bg-terracotta/40"></span>
          Estrutura
          <span class="w-6 h-px bg-terracotta/40"></span>
        </span>
        <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
          Atendimentos
        </h1>
        <p class="font-body text-stone text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
          Atendimento domiciliar pensado para oferecer conforto, praticidade e bem-estar no seu próprio ambiente
        </p>
      </div>

      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
        <div v-for="(item, i) in amenities" :key="i"
          v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeInUp_0.6s_ease_forwards]' }"
          :style="{ animationDelay: i * 0.1 + 's' }"
          class="group relative flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg border border-border/50 transition-all duration-400 hover:-translate-y-1 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
          <div class="relative w-12 h-12 rounded-xl bg-gradient-to-br from-sage/25 to-sage/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-terracotta/15 group-hover:to-terracotta/5 transition-all duration-400">
            <i :class="item.icon" class="text-terracotta text-lg transition-transform duration-400 group-hover:scale-110"></i>
          </div>
          <span class="relative font-body text-charcoal text-sm md:text-base font-medium">{{ item.label }}</span>
        </div>
      </div>

      <div class="relative max-w-3xl mx-auto text-center mt-14" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeScale_0.8s_ease_forwards]' }">
        <div class="absolute inset-0 -m-6 bg-gradient-to-r from-transparent via-sage/10 to-transparent rounded-3xl blur-xl pointer-events-none"></div>
        <div class="relative inline-flex items-start gap-4">
          <span class="hidden sm:block w-8 h-px bg-terracotta/30 mt-4 shrink-0"></span>
          <p class="font-heading text-charcoal text-lg md:text-xl font-medium italic leading-relaxed">
            "Tudo planejado nos mínimos detalhes para proporcionar cuidado, relaxamento e uma experiência única sem que você precise sair de casa."
          </p>
          <span class="hidden sm:block w-8 h-px bg-terracotta/30 mt-4 shrink-0"></span>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      amenities: [
        { label: "Atendimento personalizado no conforto da sua casa", icon: "pi pi-home" },
        { label: "Materiais e equipamentos levados até você", icon: "pi pi-shopping-bag" },
        { label: "Mais comodidade e privacidade durante as sessões", icon: "pi pi-shield" },
        { label: "Horários flexíveis para melhor adaptação à sua rotina", icon: "pi pi-clock" },
        { label: "Experiência acolhedora e humanizada", icon: "pi pi-heart" },
      ]
    }
  }
}
</script>
