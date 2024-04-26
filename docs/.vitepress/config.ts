import { defineConfig } from 'vitepress'
import CSSExtractorPlugin from '@master/css-extractor.vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Example docs',
  description: 'docs',
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Comopnents', link: '/components/button' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ],
        },
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/masterco/css' }],
  },
  vite: {
    plugins: [CSSExtractorPlugin()],
    build: {
      cssCodeSplit: true,
    },
    server: {
      port: 8080,
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})
