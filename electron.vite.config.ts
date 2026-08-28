import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'electron-vite'

export default defineConfig({
  main: {
    build: {
      lib: {
        entry: resolve('electron/main/index.ts')
      }
    }
  },
  preload: {
    build: {
      lib: {
        entry: resolve('electron/preload/index.ts')
      }
    }
  },
  renderer: {
    build: {
      rollupOptions: {
        input: resolve('index.html')
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve('./source'),
        '@sync/hooks': resolve('./packages/hooks/index.ts'),
        '@sync/react': resolve('./packages/react/index.ts'),
        '@sync/types': resolve('./packages/types/index.ts'),
        '@sync/utils': resolve('./packages/utils/index.ts')
      }
    },
    root: '.',
    server: { port: 3000 }
  }
})
