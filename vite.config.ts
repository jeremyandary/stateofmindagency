import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // Each HTML file here becomes its own page in the built site
      input: {
        main: 'index.html',
        aramark: 'work/aramark-ford-farmers-market/index.html',
      },
    },
  },
});
