<template>
    <section id="protocols" class="bg-amber-50 w-full">
        <main class="max-w-6xl m-auto">
            <div class="text-center mb-10">
                <h1 class="lg:text-5xl text-2xl text-red-950 font-extrabold">
                    Refúgio do Corpo e Mente
                </h1>
            </div>
            <div class="lg:grid grid-cols-2 max-w-5xl m-auto">
                <div v-for="(plan, index) in plans" :key="index" class="pb-10 px-3">
                    <h3 class="text-red-950 mb-3 font-bold lg:text-xl text-sm">
                        {{ plan.title }} {{ plan.id }} - R$ {{ plan.price }}
                    </h3>
                    <ul class="text-black list-disc list-inside">
                        <li v-for="item, i in plan.description" :key="i" class="lg:text-base text-xs font-extralight">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-5 lg:px-20 px-3 text-center">
                <h3 class="text-red-950 :text-base lg:text-lg text-xs">
                    O <span class="font-extrabold">Refúgio do Corpo e Mente</span> é um convite para se desligar do dia
                    a dia e se reconectar consigo
                    mesmo. A cada sessão, diferentes técnicas terapêuticas se combinam para oferecer relaxamento
                    profundo, equilíbrio entre corpo e mente e uma sensação única de bem-estar. Tudo é
                    cuidadosamente pensado para que você saia renovado, em cerca de 1h30min de atenção e cuidado.
                </h3>
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
                {
                    id: 5,
                    title: "PROTOCOLO",
                    price: "149,90",
                    description: ["Drenagem Linfática", "Dry Needling", "Liberação Miofascial"]
                },
                {
                    id: 6,
                    title: "PROTOCOLO",
                    price: "149,90",
                    description: ["Ventosaterapia", "Dry Needling", "Liberação Miofascial"]
                }
            ]
        }
    }
}
</script>
