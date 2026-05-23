<template>
  <section id="protocols" class="py-24 lg:py-32 bg-cream">
    <main class="max-w-6xl mx-auto px-5">
      <div class="text-center mb-16" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <span class="font-body text-xs uppercase tracking-[0.25em] text-stone font-medium">Experiências</span>
        <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Refúgio do Corpo e Mente
        </h1>
        <p class="font-body text-stone text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Pacotes especiais para uma experiência completa de bem-estar
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        <div v-for="(plan, index) in plans" :key="index"
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-border/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
          <div class="flex items-baseline justify-between gap-4 mb-5">
            <h3 class="font-heading text-charcoal text-xl md:text-2xl font-semibold">
              {{ plan.title }}
            </h3>
            <span class="font-heading text-terracotta text-2xl md:text-3xl font-bold whitespace-nowrap">
              R$ {{ plan.price }}
            </span>
          </div>
          <ul class="space-y-2.5 flex-1 mb-6">
            <li v-for="(item, i) in plan.description" :key="i" class="font-body text-stone text-sm md:text-base flex items-start gap-3">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta/50 flex-shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="'https://wa.me/5584992135716?text=Olá,+gostaria+de+saber+mais+sobre+o+pacote+'+ encodeURIComponent(plan.title)" target="_blank"
            class="block w-full text-center font-body text-sm font-medium bg-terracotta hover:bg-terracotta-dark text-white rounded-xl py-3 transition-all duration-300 shadow-sm hover:shadow-md">
            Reserve seu horário
          </a>
        </div>
      </div>

      <div class="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/60" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <h3 class="font-heading text-charcoal text-lg md:text-xl font-semibold leading-relaxed">
          O <span class="text-terracotta font-bold">Refúgio do Corpo e Mente</span> é um convite para se desligar do dia a dia e se reconectar consigo mesmo.
        </h3>
        <p class="font-body text-stone text-sm md:text-base mt-5 leading-relaxed">
          A cada sessão, diferentes técnicas terapêuticas se combinam para oferecer relaxamento profundo, equilíbrio entre corpo e mente e uma sensação única de bem-estar. Tudo é cuidadosamente pensado para que você saia renovado, em cerca de 1h30min de atenção e cuidado.
        </p>
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
          title: "Relaxamento Profundo",
          price: "129,90",
          description: ["Massagem", "Escalda Pés"],
        },
        {
          id: 2,
          title: "Leveza Total",
          price: "139,90",
          description: ["Liberação Miofascial", "Escalda Pés"],
        },
        {
          id: 3,
          title: "Harmonia e Equilíbrio",
          price: "149,90",
          description: ["Massagem + Escalda Pés", "Liberação Miofascial", "Dry Needling"]
        },
        {
          id: 4,
          title: "Modelador e Detox",
          price: "159,90",
          description: ["Drenagem Linfática", "Massagem Modeladora", "Escalda Pés"]
        },
      ]
    }
  }
}
</script>
