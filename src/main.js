import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import AutoComplete from 'primevue/autocomplete';

import 'primeicons/primeicons.css';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.directive('animateonscroll', AnimateOnScroll);

app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('AutoComplete', AutoComplete);

app.mount('#app');
