import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), Components({  dts: true }),],
  resolve:{
    alias: [
      { find: '@', replacement: '/src' },
    ]
  },
})
