<template>
  <nav
    ref="navbarRef"
    id="navbar"
    class="w-full transition-all duration-500 fixed z-50"
    :class="scrolled ? 'bg-warm/90 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'"
    aria-label="Main navigation">
    <main class="flex max-w-6xl mx-auto justify-between items-center px-5">
      <div>
        <a href="/">
          <img src="/img/logo.png" alt="Logo" class="lg:h-10 h-8 transition-all duration-300" :class="scrolled ? 'opacity-100' : 'opacity-90'" />
        </a>
      </div>

      <div class="flex gap-4 text-stone md:hidden">
        <a class="hover:text-terracotta transition-all duration-300" target="_blank" href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!">
          <i class="pi pi-whatsapp text-lg"></i>
        </a>
        <a class="hover:text-terracotta transition-all duration-300" target="_blank" href="https://www.instagram.com/fernandamonteirofisio/">
          <i class="pi pi-instagram text-lg"></i>
        </a>
      </div>

      <button @click="toggleMenu" class="md:hidden text-charcoal text-2xl focus:outline-none cursor-pointer transition-all duration-300" aria-expanded="isOpen" aria-label="Abrir menu" ref="burgerRef">
        <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>

      <div ref="menuRef" class="w-full md:w-auto md:static absolute left-0 md:left-auto top-full md:top-0 text-center md:flex md:items-center transition-all duration-300 overflow-hidden md:overflow-visible"
        :class="[
          isOpen ? 'max-h-[400px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none',
          'md:max-h-full md:opacity-100 md:pointer-events-auto',
          scrolled ? 'bg-warm/95 backdrop-blur-lg shadow-md' : 'bg-warm/95 backdrop-blur-lg md:bg-transparent md:shadow-none'
        ]"
        style="backdrop-filter: blur(6px);">
        <ul class="flex flex-col md:flex-row gap-1 md:gap-8 text-charcoal p-6 md:p-0 w-full md:w-auto">
          <li v-for="menu in menus" :key="menu.id" class="relative">
            <a :href="menu.href" class="block py-2 md:py-0 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-terracotta"
              :class="activeSection === menu.href.substring(1) ? 'text-terracotta' : 'text-charcoal'"
              @click="closeMenu">
              {{ menu.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="hidden md:flex gap-5 text-stone">
        <a target="_blank" href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" class="hover:text-terracotta transition-all duration-300 hover:-translate-y-0.5">
          <i class="pi pi-whatsapp text-lg"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/fernandamonteirofisio/" class="hover:text-terracotta transition-all duration-300 hover:-translate-y-0.5">
          <i class="pi pi-instagram text-lg"></i>
        </a>
      </div>
    </main>
  </nav>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const activeSection = ref(null);
  const isOpen = ref(false);
  const scrolled = ref(false);

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

  const toggleMenu = () => { isOpen.value = !isOpen.value; };
  const closeMenu = () => { isOpen.value = false; };

  let handleScroll, handleClickOutside, observer;

  onMounted(() => {
    handleScroll = () => {
      scrolled.value = window.scrollY > 60;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));

    handleClickOutside = (e) => {
      if (!isOpen.value) return;
      if (!menuRef.value?.contains(e.target) && !burgerRef.value?.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClickOutside);
    observer?.disconnect();
  });
</script>
