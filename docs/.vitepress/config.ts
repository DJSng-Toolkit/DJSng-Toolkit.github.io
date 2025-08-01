import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  title: "DJSng's Toolkit",
  description: "A bundle of resources curated by DJSng.",
  themeConfig: {
    footer: {
   message: "Licensed under Unlicense.",
   copyright: "Copyright © 2025-present DJSng",
 },
    // https://vitepress.dev/reference/default-theme-config
	logo: '/hero.png',
  outline: 'deep',
  outlineTitle: 'Table of Contents',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Credits', link: '/contributors.md' },
      { text: 'Blog', link: 'https://djsng.bearblog.dev/' },
	    { text: 'Website', link: 'https://djsng.neocities.org/' }
    ],

    sidebar: [
      {
        text: 'Meta',
        items: [
          { text: 'Home Page', link: '/home.md' },
          { text: 'Credits', link: '/contributors.md' }
        ]
      },
	    {
        text: 'Gaming guides',
        items: [
          { text: 'Minecraft', link: '/games/mc/index' },
		      { text: 'WEBFISHING', link: '/games/webfish' },
          { text: 'ROBLOX', link: '/games/rblx' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Jericho Library', link: '/library.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DJSng-Toolkit/DJSng-Toolkit.github.io' }
    ]
  }
})