import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul'

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      cypress: true,
    }),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['testing/vitest.setup.ts'],
    coverage: {
      reportsDirectory: 'coverage/vitest',
      reporter: ['text', 'html'],
    },
  },
})
