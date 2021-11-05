import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), WindiCSS(), Pages(), Components({ dts: true })],

  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
  },
})
