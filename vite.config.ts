import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.tsx',
      output: {
        format: 'esm',
        dir: 'dist'
      },
      external: ['react', 'react-dom'],
      plugins: []
    }
  }
})