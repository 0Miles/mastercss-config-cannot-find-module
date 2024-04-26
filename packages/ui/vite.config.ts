import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import CSSExtractorPlugin from '@master/css-extractor.vite'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    CSSExtractorPlugin(),
    dts({
      rollupTypes: true,
      include: ["src/index.ts", "src/components/**/*"],
      exclude: ["src/**/*.test.ts"],
    }),
  ],
  resolve: {
    alias: {
      '@ui': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    minify: false,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@example/ui',
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      input: {
        ui: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
