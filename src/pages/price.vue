<template>
  <section id="price" class="py-24 lg:py-32 bg-cream">
    <main class="max-w-6xl mx-auto px-5">
      <div class="text-center mb-16" v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
        <span class="font-body text-xs uppercase tracking-[0.25em] text-stone font-medium">Serviços</span>
        <h1 class="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Equilíbrio e bem-estar<br class="hidden md:block"> para o corpo e a mente!
        </h1>
        <p class="font-body text-stone text-sm md:text-base mt-4 max-w-xl mx-auto">
          Cuidados personalizados para cada necessidade
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="(service, index) in services" :key="index"
          class="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-border/60 transition-all duration-300 hover:-translate-y-1"
          v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
          <div class="flex items-start justify-between mb-4">
            <h3 class="font-heading text-charcoal text-lg md:text-xl font-semibold leading-tight">
              {{ service.title }}
            </h3>
            <span class="font-heading text-terracotta text-xl md:text-2xl font-bold whitespace-nowrap ml-4">
              R$ {{ service.price.replace('R$ ', '') }}
            </span>
          </div>
          <p class="font-body text-stone text-sm md:text-base leading-relaxed">
            {{ service.description }}
          </p>
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
          description: "Um momento de cuidado e pausa. Através de toques suaves e ritmados, ela ajuda a aliviar as tensões do corpo, acalmar a mente e trazer uma sensação profunda de bem-estar. É uma experiência que promove equilíbrio, descanso e reconexão com você mesmo."
        },
        {
          id: 2,
          title: "Ventosaterapia",
          price: "49,90",
          description: "Técnica que utiliza ventosas para criar uma leve sucção na pele, estimulando a circulação sanguínea e ajudando na eliminação de toxinas. Além de aliviar dores musculares e tensões, ela promove relaxamento e sensação de leveza. É um cuidado que une bem-estar físico e equilíbrio energético."
        },
        {
          id: 3,
          title: "Drenagem linfática + Massagem modeladora",
          price: "119,90",
          description: "Técnica que combina drenagem linfática e massagem modeladora, unindo movimentos suaves e intensos para estimular a circulação, eliminar líquidos e toxinas, reduzir inchaço e auxiliar na definição do contorno corporal. Além dos benefícios estéticos, proporciona sensação de leveza, relaxamento e bem-estar."
        },
        {
          id: 4,
          title: "Dry Needling",
          price: "49,90",
          description: "Técnica terapêutica que utiliza agulhas finas para liberar pontos de tensão muscular, conhecidos como \"gatilhos de dor\". O procedimento ajuda a aliviar desconfortos, melhorar a mobilidade e restaurar o equilíbrio muscular. É um cuidado preciso e eficaz que promove alívio profundo e bem-estar ao corpo."
        },
        {
          id: 5,
          title: "Liberação Miofascial",
          price: "49,90",
          description: "Técnica que trabalha sobre a fáscia, o tecido que envolve músculos e órgãos, para liberar tensões acumuladas e melhorar a mobilidade. Com toques suaves e alongamentos direcionados, ajuda a aliviar dores, relaxar o corpo e restaurar o equilíbrio, promovendo bem-estar físico e sensação de leveza."
        }
      ]
    }
  }
}
</script>
