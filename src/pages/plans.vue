<template>
  <section id="plans" class="py-24 lg:py-32 bg-warm">
    <main class="max-w-6xl mx-auto px-5">
      <div class="text-center mb-16" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <span class="font-body text-xs uppercase tracking-[0.25em] text-stone font-medium">Combinações</span>
        <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Planos terapêuticos
        </h1>
        <p class="font-body text-stone text-sm md:text-base mt-4 max-w-xl mx-auto">
          Protocolos exclusivos para potencializar seus resultados
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="(plan, index) in plans" :key="index"
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-border/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
          <div class="mb-4">
            <span class="inline-block font-body text-xs uppercase tracking-[0.15em] text-terracotta font-semibold bg-terracotta/5 px-3 py-1 rounded-full">
              {{ plan.title }}
            </span>
          </div>
          <div class="flex items-baseline gap-1 mb-5">
            <span class="font-body text-sm text-stone font-medium">R$</span>
            <span class="font-heading text-charcoal text-3xl md:text-4xl font-bold">{{ plan.price }}</span>
          </div>
          <ul class="space-y-2.5 flex-1">
            <li v-for="(item, i) in plan.description" :key="i" class="font-body text-stone text-sm md:text-base flex items-start gap-3">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="mt-6 pt-6 border-t border-border/60">
             <a :href="`https://wa.me/5584992135716?text=${encodeURIComponent('Olá, gostaria de saber mais sobre o protocolo ' + plan.id)}`" target="_blank"
              class="block w-full text-center font-body text-sm font-medium text-terracotta hover:text-white border border-terracotta hover:bg-terracotta rounded-xl py-3 transition-all duration-300">
              Tenho interesse
            </a>
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
      plans: [
        {
          id: 1,
          title: "PROTOCOLO 1",
          price: "129,90",
          description: ["Massagem", "Dry Needling ou ventosa"],
        },
        {
          id: 2,
          title: "PROTOCOLO 2",
          price: "159,90",
          description: ["Massagem", "Liberação Miofascial", "Ventosaterapia ou Dry Needling"],
        },
        {
          id: 3,
          title: "PROTOCOLO 3",
          price: "174,90",
          description: ["Massagem Terapêutica + Liberação Miofacial", "Dry Needling + Ventosaterapia"]
        },
        {
          id: 4,
          title: "PROTOCOLO 4",
          price: "159,90",
          description: ["Drenagem Linfática", "Massagem modeladora"]
        },
        {
          id: 5,
          title: "PROTOCOLO 5",
          price: "149,90",
          description: ["Drenagem Linfática", "Dry Needling", "Liberação Miofascial"]
        },
        {
          id: 6,
          title: "PROTOCOLO 6",
          price: "149,90",
          description: ["Ventosaterapia", "Dry Needling", "Liberação Miofascial"]
        }
      ]
    }
  }
}
</script>
