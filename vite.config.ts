import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/router': path.resolve(__dirname, './src/router'),
      '@/config': path.resolve(__dirname, './src/config'),
      '@/views': path.resolve(__dirname, './src/views'),
      '@/api': path.resolve(__dirname, './src/api'),
    }
  },
  plugins: [vue()]
})
