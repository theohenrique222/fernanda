<script setup>
 
   import hero from './pages/hero.vue';
   import about from './pages/about.vue';
   import price from './pages/price.vue';
   import plans from './pages/plans.vue';
   import protocol from './pages/protocol.vue';
   import services from './pages/services.vue';
   import end from './pages/end.vue';
   import footerbar from './components/footerbar.vue';
   import navbar from './components/navbar.vue';
 </script>
 
 <template>
   <div class="bg-warm">
     <navbar/>
     <hero/>
     <about/>
     <price/>
     <plans/>
     <protocol/>
     <services/>
     <end/>
     <footerbar/>
   </div>
 </template>
