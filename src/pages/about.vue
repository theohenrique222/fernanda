<template>
    <section id="about" class="bg-amber-50 pb-20">
        <main class="max-w-6xl px-5 m-auto flex flex-col lg:flex-row items-start gap-10">

            <div class="flex-1">
                <h1 class="text-red-950 lg:text-4xl text-2xl font-extrabold lg:mb-16 mb-3 mt-30"
                    v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1s_ease_forwards]' }">
                    Bem-estar que transforma!
                </h1>
                <div class="text-black lg:text-xl text-xs font-extralight space-y-2"
                    v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_1.5s_ease_forwards]' }">
                    <p>
                        Terapeuta integrativa com ampla experiência em tratamentos
                        corporais voltados ao bem-estar físico e emocional.
                    </p>
                    <p>
                        Especialista
                        em técnicas de relaxamento, incluindo massagem relaxante,
                        ventosaterapia, liberação miofascial e dry needling, com foco em
                        abordagens humanizadas para alívio da dor. 
                    </p>
                    <p>
                        Também atua em
                        tratamentos estéticos funcionais, como drenagem linfática,
                        massagem modeladora e massagem esculpe detox,
                        proporcionando resultados eficazes e cuidados personalizados.
                    </p>
                </div>
            </div>

            <div class="flex m-auto"
                v-animateonscroll="{ enterClass: 'opacity-0 animate-[fadeIn_2s_ease_forwards]' }">
                <img class="lg:h-screen h-96" src="/img/avatar.png" alt="">
            </div>
        </main>
    </section>
</template>
<script>
export default {

}
</script>
<style></style>

