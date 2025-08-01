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
   message: "Released under the MIT License.",
   copyright: "Copyright © 2025-present DJSng",
 },
    // https://vitepress.dev/reference/default-theme-config
	logo: 'https://files.catbox.moe/kwrhix.png',
	head: [
	['link', { rel: 'icon', href: 'https://files.catbox.moe/kwrhix.png' }],
	],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://djsng.bearblog.dev/' },
	    { text: 'Website', link: 'https://djsng.neocities.org/' }
    ],

    sidebar: [
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

interface Outline {
  /**
   * The levels of headings to be displayed in the outline.
   * Single number means only headings of that level will be displayed.
   * If a tuple is passed, the first number is the minimum level and the second number is the maximum level.
   * `'deep'` is same as `[2, 6]`, which means all headings from `<h2>` to `<h6>` will be displayed.
   *
   * @default 1
   */
  level?: 'deep'
  label?: 'Table of Contents'
}