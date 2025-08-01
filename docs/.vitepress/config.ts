import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DJSng's Toolkit",
  description: "A bundle of resources curated by DJSng.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Source', link: 'https://github.com/DJSng-Toolkit/DJSng-Toolkit.github.io' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DJSng-Toolkit/DJSng-Toolkit.github.io' }
    ]
  }
})
