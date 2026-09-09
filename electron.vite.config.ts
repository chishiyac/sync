import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
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
    plugins: [
      tanstackRouter({
        autoCodeSplitting: true,
        generatedRouteTree: 'source/router/router-tree.gen.ts',
        routeFileIgnorePrefix: '.ts',
        routeToken: 'layout',
        routesDirectory: 'source/pages',
        target: 'react'
      }),
      react(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@': resolve('./source'),
        '@sync/api-client': resolve('./packages/api-client/index.ts'),
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
