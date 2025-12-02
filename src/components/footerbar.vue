<template>
  <footer class="bg-amber-50 text-red-950 border-t border-red-900">
    <main class="max-w-6xl m-auto px-6 py-5">
      <div class="flex flex-col lg:flex-row justify-between items-center text-center">
        <p class="font-light text-sm lg:text-base">
          © {{ new Date().getFullYear() }} — Todos os direitos reservados a
          <span class="font-bold">Fernanda Monteiro</span>.
        </p>
        <div class="flex justify-center gap-6 lg:pt-0 pt-4">
          <a 
            target="_blank" 
            href="https://www.instagram.com/fernandamonteirofisio/" 
            class="hover:text-red-700 hover:-translate-y-1 transition-all">
            <i 
              class="pi pi-instagram text-2xl"></i>
          </a>
          <a 
            target="_blank" 
            href="https://wa.me/5584992135716?text=Olá,+gostaria+de+falar+sobre+os+procedimentos+oferecidos!" 
            class="hover:text-red-700 transition-all hover:-translate-y-1">
            <i class="pi pi-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>
    </main>
  </footer>
</template>

<script>
export default {

};
</script>
