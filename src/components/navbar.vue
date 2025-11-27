<template>
  <section>
    <nav
      ref="navbarRef"
      id="navbar"
      class="w-full transition-all duration-700 border-b backdrop-blur-md fixed py-2 shadow-md z-50"
      aria-label="Main navigation"
    >
      <main class="flex max-w-6xl m-auto justify-between items-center py-2 px-5">
        <!-- LOGO -->
        <div>
          <a href="/">
            <img src="/img/logo.png" alt="Logo" class="lg:h-10 h-8" />
          </a>
        </div>

        <div class="flex gap-5 text-red-950 md:hidden">
            <a class="hover:-translate-y-1 transition-all" target="_blank" href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" @click="onMenuClick"><i class="pi pi-whatsapp"></i></a>
            <a class="hover:-translate-y-1 transition-all" target="_blank" href="https://www.instagram.com/fernandamonteirofisio/" @click="onMenuClick"><i class="pi pi-instagram"></i></a>
          </div>

        <!-- HAMBURGER (mobile) -->
        <button
          @click="toggleMenu"
          class="md:hidden text-red-950 text-2xl focus:outline-none"
          aria-expanded="isOpen"
          aria-label="Abrir menu"
          ref="burgerRef"
        >
          <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>

        <!-- MENU (desktop inline, mobile dropdown) -->
        <div
          ref="menuRef"
          :class="[
            // mobile: absolute dropdown; desktop: static inline
            'w-full md:w-auto md:static absolute left-0 md:left-auto top-full md:top-0 bg-amber-50/95 backdrop-blur-md text-center shadow-2xl',
            'md:flex md:items-center transition-all duration-300',
            isOpen ? 'max-h-[400px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
          ]"
          class="md:opacity-100 md:static md:pointer-events-auto"
          style="backdrop-filter: blur(6px);"
        >
          <ul
            class="flex flex-col md:flex-row gap-5 text-red-950 p-4 md:p-0 w-full md:w-auto"
          >
            <li
              v-for="menu in menus"
              :key="menu.id"
              class="relative"
            >
              <a
                :href="menu.href"
                class="pb-2 transition-all font-extralight lg:text-sm text-xs hover:border-b-2 block"
                @click="onMenuClick"
                :class="{
                  'border-b-2 border-red-950': activeSection === menu.href.substring(1)
                }"
              >
                {{ menu.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- ÍCONES DESKTOP -->
        <div class="hidden md:flex gap-5 text-red-950">
          <a target="_blank" href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!">
            <i class="pi pi-whatsapp hover:-translate-y-1 transition-all" style="font-size: 1rem"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/fernandamonteirofisio/">
            <i class="pi pi-instagram hover:-translate-y-1 transition-all" style="font-size: 1rem"></i>
          </a>
        </div>
      </main>
    </nav>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeSection = ref(null);
const isOpen = ref(false);

const menus = [
  { id: 1, title: "Início", href: "#home" },
  { id: 2, title: "Sobre", href: "#about" },
  { id: 3, title: "Valores", href: "#price" },
  { id: 4, title: "Planos", href: "#plans" },
  { id: 5, title: "Protocolos", href: "#protocols" },
];

const navbarRef = ref(null);
const menuRef = ref(null);
const burgerRef = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

// chamado quando clica num item do menu (fecha no mobile)
const onMenuClick = () => {
  // permitir que o anchor funcione normalmente (rolagem suave via CSS)
  closeMenu();
};

onMounted(() => {
  const navbar = navbarRef.value;

  // NAVBAR DIMINUI AO ROLAR
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add("py-0");
      navbar.classList.remove("py-2");
    } else {
      navbar.classList.remove("py-0");
      navbar.classList.add("py-2");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // SCROLL SPY (IntersectionObserver)
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

  // CLICK OUTSIDE: fecha o menu se clicar fora (mobile)
  const handleClickOutside = (e) => {
    if (!isOpen.value) return;
    const menuEl = menuRef.value;
    const burgerEl = burgerRef.value;
    if (!menuEl) return;
    // se o clique NÃO ocorreu dentro do menu e NÃO no botão hamburguer -> fechar
    if (!menuEl.contains(e.target) && !burgerEl.contains(e.target)) {
      closeMenu();
    }
  };
  document.addEventListener("click", handleClickOutside);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClickOutside);
    // desconectar observer
    observer.disconnect();
  });
});
</script>

<style scoped>
/* Pequena transição para os estados do menu (mobile) */
[ref="menuRef"] {
  transition: max-height 280ms ease, opacity 220ms ease;
}

/* fallback: caso o atributo ref não funcione no selector, o elemento já tem transition classes inline */
</style>
