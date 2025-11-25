<template>
    <section>
        <nav id="navbar" class="w-full transition-all duration-700 border-b backdrop-blur-md fixed py-2 z-50">
            <main class="flex max-w-6xl m-auto justify-between items-center py-2">
                <div>
                    <img src="/img/logo.png" alt="Logo" class="h-10" />
                </div>

                <div class="flex">
                    <ul class="flex gap-5 text-red-950 relative">
                        <li v-for="(menu, index) in menus" :key="menu.id" class="relative">
                            <a :href="menu.href" class="pb-2 transition-all font-extralight text-sm hover:border-b-2"
                                :class="{
                                    'border-b-2 border-red-950': activeSection === menu.href.substring(1)
                                }">
                                {{ menu.title }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex gap-5 text-red-950">
                    <a href=""><i class="pi pi-whatsapp hover:-translate-y-1 transition-all"
                            style="font-size: 1rem"></i></a>
                    <a href=""><i class="pi pi-instagram hover:-translate-y-1 transition-all"
                            style="font-size: 1rem"></i></a>
                </div>
            </main>
        </nav>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeSection = ref(null);

const menus = [
    { id: 1, title: "Início", href: "#home" },
    { id: 2, title: "Sobre", href: "#about" },
    { id: 3, title: "Valores", href: "#price" },
    { id: 4, title: "Planos", href: "#plans" },
    { id: 5, title: "Protocolos", href: "#protocols" },
];

onMounted(() => {
    const navbar = document.getElementById("navbar");

    // 🟨 NAVBAR DIMINUI AO ROLAR
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("py-0");
            navbar.classList.remove("py-2");
        } else {
            navbar.classList.remove("py-0");
            navbar.classList.add("py-2", "border-b", "border-red-950/30", "shadow-md");
        }
    };

    window.addEventListener("scroll", handleScroll);

    // 🟩 SCROLL SPY (MENU ATIVO AUTOMÁTICO)
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
});
</script>
