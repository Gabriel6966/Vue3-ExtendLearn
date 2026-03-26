import { fileURLToPath } from 'node:url'
import { defaultClientMainFields, mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(async (env) => {
  const basevconfig = typeof viteConfig === 'function' ? await viteConfig(env) : viteConfig

  return mergeConfig(basevconfig, {
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
})
