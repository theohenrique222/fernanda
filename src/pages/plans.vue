<template>
    <section id="plans" class="bg-amber-50 min-h-screen w-full">
        <main class="max-w-6xl m-auto">
            <div class="text-center pb-10">
                <h1 class="lg:text-5xl text-2xl text-red-950 font-extrabold">Planos terapêuticos</h1>
            </div>
            <div class="lg:grid grid-cols-2 max-w-5xl m-auto lg:p-0 px-3">
                <div v-for="(plan, index) in plans" :key="index" class="pb-10">
                    <h3 class="text-red-950 pb-3 font-bold lg:text-xl text-sm">
                        {{ plan.title }} {{ plan.id }} - R$ {{ plan.price }}
                    </h3>
                    <ul class="text-black text-sm list-disc list-inside">
                        <li v-for="item, i in plan.description" :key="i" class="lg:text-base text-xs font-extralight">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </section>
</template>
<script>
export default {
    data () {
        return {
            plans: [
                {
                    id: 1,
                    title: "PROTOCOLO",
                    price: "129,90",
                    description: ["Massagem", "Dry Needling ou ventosa"],
                },
                {
                    id: 2,
                    title: "PROTOCOLO",
                    price: "159,90",
                    description: ["Massagem", "Liberação Miofascial", "Ventosaterapia ou Dry Needling"],
                },
                {
                    id: 3,
                    title: "PROTOCOLO",
                    price: "174,90",
                    description: ["Massagem Terapêutica + Liberação Miofacial", "Dry Needling + Ventosaterapia"]
                },
                {
                    id: 4,
                    title: "PROTOCOLO",
                    price: "159,90",
                    description: ["Drenagem Linfática", "Esculpe Detox"]
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
