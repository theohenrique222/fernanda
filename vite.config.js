import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { config } from 'node:process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              tema: '#1e40af',
              textcolor: '#ff5733',
            }
          }
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
