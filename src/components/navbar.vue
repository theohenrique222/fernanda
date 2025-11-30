<template>
  <section>
    <nav
      ref="navbarRef"
      id="navbar"
      class="w-full transition-all duration-1000 backdrop-blur-md fixed py-5 z-50"
      aria-label="Main navigation">
      <main class="flex max-w-6xl m-auto justify-between items-center py-2 px-5">
        <div>
          <a href="/">
            <img src="/img/logo.png" alt="Logo" class="lg:h-10 h-8" />
          </a>
        </div>

        <div class="flex gap-5 text-red-950 md:hidden">
            <a 
              class="hover:-translate-y-1 transition-all hover:text-red-700" 
              target="_blank" 
              href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" 
              @click="onMenuClick">
              <i 
                class="pi pi-whatsapp">
              </i>
            </a>
            <a 
              class="hover:-translate-y-1 transition-all hover:text-red-700" 
              target="_blank" 
              href="https://www.instagram.com/fernandamonteirofisio/" 
              @click="onMenuClick">
                <i 
                  class="pi pi-instagram">
                </i>
              </a>
          </div>

        <button
          @click="toggleMenu"
          class="md:hidden text-red-950 text-2xl focus:outline-none cursor-pointer transition duration-1000"
          aria-expanded="isOpen"
          aria-label="Abrir menu"
          ref="burgerRef">
            <i 
              :class="isOpen ? 'pi pi-times' : 'pi pi-bars'">
            </i>
        </button>

        <div
          ref="menuRef"
          :class="[
            'w-full md:w-auto md:static absolute left-0 md:left-auto top-full md:top-0 bg-amber-50/95 backdrop-blur-md text-center shadow-2xl',
            'md:flex md:items-center transition-all duration-300',
            isOpen ? 'max-h-[400px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
          ]"
          class="md:opacity-100 md:static md:pointer-events-auto"
          style="backdrop-filter: blur(6px);">
          <ul
            class="flex flex-col md:flex-row gap-5 text-red-950 p-4 md:p-0 w-full md:w-auto">
            <li
              v-for="menu in menus"
              :key="menu.id"
              class="relative">
              <a
                :href="menu.href"
                class="pb-2 transition-all font-extralight lg:text-sm text-xs hover:border-b-2 block"
                @click="onMenuClick"
                :class="{
                  'border-b-2 border-red-950': activeSection === menu.href.substring(1)
                }">
                {{ menu.title }}
              </a>
            </li>
          </ul>
        </div>

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

  const onMenuClick = () => {
    closeMenu();
  };

  onMounted(() => {
    const navbar = navbarRef.value;

    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("py-0", "shadow-md");
        navbar.classList.remove("py-5", "border-b", "border");
      } else {
        navbar.classList.remove("py-0", "shadow-md");
        navbar.classList.add("py-5");
      }
    };

    window.addEventListener("scroll", handleScroll);

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
    
    const handleClickOutside = (e) => {
      if (!isOpen.value) return;
      const menuEl = menuRef.value;
      const burgerEl = burgerRef.value;
      if (!menuEl) return;
      
      if (!menuEl.contains(e.target) && !burgerEl.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      observer.disconnect();
    });
  });
  </script>

  <style scoped>
    [ref="menuRef"] {
      transition: max-height 280ms ease, opacity 220ms ease;
    }
</style>
