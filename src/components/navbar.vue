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

onMounted(() => {
  // Set initial active link
  setActiveLink()
  
  // Update active link on scroll
  window.addEventListener('scroll', setActiveLink)
  
  // Handle click outside for mobile menu
  document.addEventListener('click', handleClickOutside)
})

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