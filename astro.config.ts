import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import svgLoader from 'vite-svg-loader'
import browserslist from 'browserslist'
import compress from 'astro-compress'
import vue from '@astrojs/vue'
import path from 'node:path'

let dirname = fileURLToPath(path.dirname(import.meta.url))

export default defineConfig({
  markdown: {
    shikiConfig: {
      transformers: [
        {
          pre: node => {
            delete node.properties.tabindex
            delete node.properties.style
          },
        },
      ],
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    css: {
      lightningcss: {
        targets: browserslistToTargets(
          browserslist(null, {
            config: path.join(dirname, './.browserslistrc'),
          }),
        ),
      },
      transformer: 'lightningcss',
    },
    plugins: [svgLoader()],
  },
  integrations: [
    compress({
      JavaScript: true,
      Image: true,
      HTML: true,
      SVG: true,
    }),
    vue(),
  ],
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
  build: {
    inlineStylesheets: 'always',
    format: 'file',
  },
  site: 'https://eslint-plugin-perfectionist.azat.io',
  experimental: {
    clientPrerender: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  publicDir: './docs/public',
  compressHTML: true,
  srcDir: './docs',
})
