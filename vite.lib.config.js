import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    target: 'es2015',
    outDir: 'lib/dist',
    lib: {
      entry: 'core/index.js', //指定组件编译入口文件
      name: 'v-focus-next',
      fileName: 'v-focus-next',
    },
    rollupOptions: {
    },
  },
});