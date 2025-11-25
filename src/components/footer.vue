<template>
  <footer class="bg-amber-50 text-red-950 border-t border-red-200">
    <main class="max-w-6xl m-auto px-6 py-16">

      <!-- Topo: Nome + slogan -->
      <div class="text-center mb-12">
        <h2 class="text-2xl lg:text-4xl font-extrabold">Ferna Monteiro</h2>
        <p class="text-sm lg:text-lg font-extralight mt-2">
          Bem-estar, leveza e cuidado em cada detalhe.
        </p>
      </div>

      <!-- Redes sociais -->
      <div class="flex justify-center gap-6 mb-12">
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

      <!-- Linha divisória suave -->
      <div class="border-t border-red-200 my-10"></div>

      <!-- Créditos -->
      <div class="flex flex-col lg:flex-row justify-between items-center text-center">
        <p class="font-light text-sm lg:text-base">
          © {{ new Date().getFullYear() }} — Todos os direitos reservados a
          <span class="font-semibold">Ferna Monteiro</span>.
        </p>

        <p class="font-light text-sm lg:text-base mt-4 lg:mt-0">
          Desenvolvido por 
          <span class="font-semibold">Theo Henrique</span>
        </p>
      </div>
    </main>
  </footer>
</template>

<script>
export default {};
</script>
