import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    Icons(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'pinia',
        '@vueuse/core',
        {
          uuid: [['v4', 'createUuid']],
        },
      ],
      dts: './.types/auto-imports.d.ts',
    }),
    Components({
      directoryAsNamespace: true,
      dts: './.types/auto-components.d.ts',
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,

  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
