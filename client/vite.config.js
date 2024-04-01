import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/styles/main.scss';`,
      },
    },
  },
  build: {
    rollupOptions: {
      treeshake: false, // Desactivar la optimización de árbol de Rollup
    },
  },
});