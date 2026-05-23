<template>
  <nav ref="navbarRef" class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="#" class="flex-shrink-0 flex items-center gap-2">
          <img src="/img/logo.png" alt="Fernanda" class="h-8 w-auto" />
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <a
            v-for="menu in menus"
            :key="menu.id"
            :href="menu.href"
            class="text-sm font-medium transition-colors relative pb-1"
            :class="activeSection === menu.href.substring(1) ? 'text-terracotta-dark font-semibold' : 'text-muted hover:text-terracotta'"
          >
            {{ menu.title }}
            <span v-if="activeSection === menu.href.substring(1)" class="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta-dark rounded-full"></span>
          </a>
        </div>

        <!-- Mobile social + hamburger -->
        <div class="flex items-center gap-3 md:hidden">
          <a href="#" class="text-red-950 text-lg"><i class="pi pi-whatsapp"></i></a>
          <a href="#" class="text-red-950 text-lg"><i class="pi pi-instagram"></i></a>
          <button
            @click="toggleMenu"
            class="text-red-950 text-2xl focus:outline-none"
            aria-label="Abrir menu"
            ref="burgerRef"
          >
            <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile dropdown -->
    <div
      ref="menuRef"
      class="md:hidden overflow-hidden transition-all duration-300 bg-amber-50/95 backdrop-blur-md shadow-2xl"
      :class="isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <ul class="flex flex-col px-4 py-4 space-y-3">
        <li v-for="menu in menus" :key="menu.id">
          <a
            :href="menu.href"
            class="block px-3 py-2 rounded-md text-sm font-medium transition-colors"
            :class="activeSection === menu.href.substring(1) ? 'text-terracotta-dark font-semibold bg-sage-light' : 'text-muted hover:text-terracotta hover:bg-sage-light'"
            @click="closeMenu"
          >
            {{ menu.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const activeSection = ref('hero')
const isOpen = ref(false)
const navbarRef = ref(null)
const menuRef = ref(null)
const burgerRef = ref(null)

const menus = [
  { id: 1, title: "Início", href: "#home" },
  { id: 2, title: "Sobre", href: "#about" },
  { id: 3, title: "Preços", href: "#price" },
  { id: 4, title: "Planos", href: "#plans" },
  { id: 5, title: "Protocolo", href: "#protocols" },
  { id: 6, title: "Serviços", href: "#atendimentos" },
  { id: 7, title: "Fim", href: "#contato" },
]

const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }

let observer = null

onMounted(() => {
  const sections = document.querySelectorAll("section[id]")
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.5 }
  )
  sections.forEach((s) => observer.observe(s))

  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  document.removeEventListener("click", handleClickOutside)
})

const handleClickOutside = (e) => {
  if (!isOpen.value) return
  if (!menuRef.value || !burgerRef.value) return
  if (!menuRef.value.contains(e.target) && !burgerRef.value.contains(e.target)) {
    closeMenu()
  }
}
</script>
