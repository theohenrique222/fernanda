import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar';
import AutoComplete from 'primevue/autocomplete';
import AnimateOnScroll from 'primevue/animateonscroll';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkMode: false,
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            },
            
            includeDarkVariants: false,
            presetName: 'aura',
            presetValue: 'light'
        }
    }
});

app.directive('animateonscroll', AnimateOnScroll);
app.component('AutoComplete', AutoComplete);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.mount('#app');