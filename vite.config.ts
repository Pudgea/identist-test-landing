import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/identist-test-landing/',
  build: {
    // Оптимизация для изображений
    assetsInlineLimit: 4096, // Встраивать файлы меньше 4kb как base64
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Организация ассетов по типам
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext ?? '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
})
