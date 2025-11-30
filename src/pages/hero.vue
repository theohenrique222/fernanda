<template>
    <section id="home" class="bg-amber-50 min-h-screen text-red-950">
        <main 
            class="pt-24 text-center max-w-6xl m-auto"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
            >
            <div
                class="pt-10 mb-4 self-auto">
                <a href="/">
                    <img class="lg:h-56 h-46 mx-auto" src="/img/logo.png" alt="Logo">
                </a>
            </div>
            <div class="mb-2">
                <h1 class="text-textcolor font-extrabold lg:text-7xl md:text-5xl text-3xl">
                    Fernanda Monteiro
                </h1>
            </div>
            <div class="mb-16">
                <h3 class="lg:text-xl text-base uppercase font-extralight">
                    Terapeuta Integrativa
                </h3>
            </div>
            <div class="max-w-2xl m-auto">
                <h2 class="uppercase lg:text-3xl text-lg lg:px-0 px-5 font-extralight">
                    TRANSFORME SEU CUIDADO EM PRIORIDADE!
                </h2>
            </div>
        </main>
    </section>
</template>
<script>
export default {

}
</script>
