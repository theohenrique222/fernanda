<template>
  <footer class="bg-amber-50 text-red-950 border-t border-red-200">
    <main class="max-w-6xl m-auto px-6 py-10">
      <div class="flex flex-col lg:flex-row justify-between items-center text-center">
        <p class="font-light text-sm lg:text-base">
          © {{ new Date().getFullYear() }} — Todos os direitos reservados a
          <span class="font-semibold">Fernanda Monteiro</span>.
        </p>
        <div class="flex justify-center gap-6">
          <a href="#" class="hover:text-red-700 transition-all">
            <i class="pi pi-instagram text-2xl"></i>
          </a>
          <a href="#" class="hover:text-red-700 transition-all">
            <i class="pi pi-whatsapp text-2xl"></i>
          </a>
          <a href="#" class="hover:text-red-700 transition-all">
            <i class="pi pi-facebook text-2xl"></i>
          </a>
        </div>
        <p class="font-light text-sm lg:text-base mt-4 lg:mt-0">
          Desenvolvido por:
          <span class="font-semibold">Theo Henrique</span>
        </p>
      </div>
    </main>
  </footer>
</template>

<script>
export default {

};
</script>
