<template>
    <section id="" class="min-h-screen bg-amber-50 w-full pt-20">
        <main class="max-w-6xl m-auto">
            <div class="text-center mb-16">
                <h1 class="text-5xl text-red-950 font-extrabold">
                    Atendimentos
                </h1>
                <h3 class="text-3xl text-red-950 pt-10">
                    Atendimento em espaço projetado para um maior conforto:
                </h3>
            </div>
            <div class="max-w-5xl m-24 ">
                <div v-for="(plan, index) in plans" :key="index" class="mb-10">
                    <ul class="text-black text-sm list-disc list-inside">
                        <li v-for="item, i in plan.description" :key="i" class="text-xl font-extralight">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-5 px-20 text-lg">
                <h3 class="text-red-950 text-xl font-bold">
                    Tudo pensado nos mínimos detalhes para oferecer uma experiência única e inesquecível!
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
                    description: ["Sala de espera climatizada.", "Som ambiente.", "Iluminação confortável.", "Estacionamento facilitado.", "Fácil localização."],
                },
            ]
        }
    }
}
</script>
