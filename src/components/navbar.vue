<template>
  <nav class="bg-white/80 backdrop-blur-sm border-b border-border/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="text-xl font-bold text-terracotta-dark">
            Fernanda
          </a>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-8">
          <a href="#hero" class="nav-link text-muted hover:text-terracotta transition-colors">Início</a>
          <a href="#about" class="nav-link text-muted hover:text-terracotta transition-colors">Sobre</a>
          <a href="#price" class="nav-link text-muted hover:text-terracotta transition-colors">Preços</a>
          <a href="#plans" class="nav-link text-muted hover:text-terracotta transition-colors">Planos</a>
          <a href="#protocol" class="nav-link text-muted hover:text-terracotta transition-colors">Protocolo</a>
          <a href="#services" class="nav-link text-muted hover:text-terracotta transition-colors">Serviços</a>
          <a href="#end" class="nav-link text-muted hover:text-terracotta transition-colors">Fim</a>
        </div>
        <div class="flex gap-5 text-red-950 md:hidden">
            <a href="#" @click="onMenuClick"><i class="pi pi-whatsapp"></i></a>
            <a href="#" @click="onMenuClick"><i class="pi pi-instagram"></i></a>
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

          <!-- ÍCONES MOBILE (aparecem dentro do dropdown) -->
          <div class="flex gap-5 text-red-950 px-4 pb-4 md:hidden">
            <a href="#" @click="onMenuClick"><i class="pi pi-whatsapp"></i></a>
            <a href="#" @click="onMenuClick"><i class="pi pi-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const activeSection = ref(null);
const isOpen = ref(false);

const menus = [
  { id: 1, title: "Início", href: "#hero" },
  { id: 2, title: "Sobre", href: "#about" },
  { id: 3, title: "Preços", href: "#price" },
  { id: 4, title: "Planos", href: "#plans" },
  { id: 5, title: "Protocolos", href: "#protocol" },
  { id: 6, title: "Serviços", href: "#services" },
  { id: 7, title: "Fim", href: "#end" },
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

const handleScroll = () => {
  if (!navbarRef.value) return;
  if (window.scrollY > 50) {
    navbarRef.value.classList.add("py-0");
    navbarRef.value.classList.remove("py-2");
  } else {
    navbarRef.value.classList.remove("py-0");
    navbarRef.value.classList.add("py-2");
  }
};

const handleClickOutside = (e) => {
  if (!isOpen.value) return;
  const menuEl = menuRef.value;
  const burgerEl = burgerRef.value;
  if (!menuEl) return;

  if (!menuEl.contains(e.target) && !burgerEl.contains(e.target)) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);

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
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);

  // Disconnect observer if it exists
  if (window.__intersectionObserver) {
    window.__intersectionObserver.disconnect();
  }
});

// Store observer reference for cleanup
onMounted(() => {
  window.__intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 }
  );
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => window.__intersectionObserver.observe(section));
});

onUnmounted(() => {
  if (window.__intersectionObserver) {
    window.__intersectionObserver.disconnect();
    window.__intersectionObserver = null;
  }
});
</script>

<style scoped>
[ref="menuRef"] {
  transition: max-height 280ms ease, opacity 220ms ease;
}
</style>
        </div>
        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-muted hover:text-terracotta">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#hero" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Início</a>
        <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Sobre</a>
        <a href="#price" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Preços</a>
        <a href="#plans" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Planos</a>
        <a href="#protocol" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Protocolo</a>
        <a href="#services" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Serviços</a>
        <a href="#end" class="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-sage-light hover:text-terracotta transition-colors">Fim</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

<<<<<<< HEAD
const isMobileMenuOpen = ref(false)
// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  const mobileMenuButton = document.getElementById('mobile-menu-button')
  const mobileMenu = document.getElementById('mobile-menu')
  
  if (mobileMenuButton && mobileMenu && 
      !mobileMenuButton.contains(event.target) && 
      !mobileMenu.contains(event.target)) {
    isMobileMenuOpen.value = false
  }
}
// Active link handling
const setActiveLink = () => {
  const sections = ['#hero', '#about', '#price', '#plans', '#protocol', '#services', '#end']
  const navLinks = document.querySelectorAll('.nav-link')
  
  let currentSection = ''
  
  sections.forEach(section => {
    const element = document.querySelector(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section
      }
    }
  })
  
  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === currentSection) {
      link.classList.add('active')
    }
  })
}
=======
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
>>>>>>> 73992697140741b7a990ea7596b340bd3807a8f0

onMounted(() => {
  // Set initial active link
  setActiveLink()
  
  // Update active link on scroll
  window.addEventListener('scroll', setActiveLink)
  
  // Handle click outside for mobile menu
  document.addEventListener('click', handleClickOutside)
})

<<<<<<< HEAD
// Cleanup
onUnmounted(() => {
  window.removeEventListener('scroll', setActiveLink)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.nav-link.active {
  color: var(--color-terracotta-dark) !important;
  font-weight: 600;
  position: relative;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-terracotta-dark);
}
</style>
=======
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
>>>>>>> 73992697140741b7a990ea7596b340bd3807a8f0
