<template>
    <section class="min-h-screen bg-amber-50">
        <main class="max-w-6xl m-auto">
            <div class="text-center mb-10">
                <h1 class="text-4xl text-red-950 font-extrabold">Equilíbrio e bem-estar para o corpo e a mente!</h1>
            </div>
            <div class="grid grid-cols-2 gap-10">
                <div v-for="(service, index) in services" :key="index" class="">
                    <h3 class="text-red-950 mb-3 font-bold">
                        {{ service.title }}: {{ service.price }}
                    </h3>
                    <p class="text-black">
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
                    description: 'um momento de cuidado e pausa. Através de toques suaves e ritmados, ela ajuda a aliviar as tensões do corpo, acalmar a mente e trazer uma sensação profunda de bem-estar. É uma experiência que promove equilíbrio, descanso e reconexão com você mesmo.'
                },
                {
                    id: 1,
                    title: 'Ventosaterapia',
                    price: 'R$ 49,90',
                    description: 'Técnica que utiliza ventosas para criar uma leve sucção na pele, estimulando a circulação sanguínea e ajudando na eliminação de toxinas. Além de aliviar dores musculares e tensões, ela promove relaxamento e sensação de leveza. É um cuidado que une bem-estar físico e equilíbrio energético.'
                },
                {
                    id: 3,
                    title: "Drenagem linfática",
                    price: "R$ 119,90",
                    description: "técnica de massagem suave que estimula o sistema linfático, ajudando o corpo a eliminar líquidos e toxinas acumuladas.Além de reduzir o inchaço, ela traz sensação de leveza, melhora a circulação e contribui para o bem-estar e equilíbrio do organismo."
                },
                {
                    id: 4,
                    title: "Dry Needling",
                    price: "R$ 49,90",
                    description: "técnica terapêutica que utiliza agulhas finas para liberar pontos de tensão muscular, conhecidos como “gatilhos de dor”. O procedimento ajuda a aliviar desconfortos, melhorar a mobilidade e restaurar o equilíbrio muscular. É um cuidado preciso e eficaz que promove alívio profundo e bem-estar ao corpo."
                },
                {
                    id: 5,
                    title: "Esculpe Detox com Modeladora",
                    price: "R$ 139,90",
                    description: "tratamento que combina manobras firmes da massagem modeladora com técnicas detox, ajudando a eliminar toxinas, ativar a circulação e redefinir as formas do corpo. Além de estimular o metabolismo e reduzir medidas, proporciona uma sensação de leveza e renovação, cuidando do corpo de dentro para fora."
                },
                {
                    id: 6,
                    title: "Liberação Miofascial",
                    price: "R$ 49,90",
                    description: "técnica que trabalha sobre a fáscia, o tecido que envolve músculos e órgãos, para liberar tensões acumuladas e melhorar a mobilidade. Com toques suaves e alongamentos direcionados, ajuda a aliviar dores, relaxar o corpo e restaurar o equilíbrio, promovendo bem-estar físico e sensação de leveza."
                }
            ]
        }
    }
}
</script>
