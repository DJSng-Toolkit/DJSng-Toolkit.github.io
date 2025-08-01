import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DJSng's Toolkit",
  description: "A bundle of resources curated by DJSng.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	logo: '/hero.png',
	head: [
	['link', { rel: 'icon', href: 'https://files.catbox.moe/vo1hfl.ico' }],
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
          { text: 'Minecraft', link: '/sect/minecraft/index.md' },
		  { text: 'WEBFISHING', link: '/sect/webfish/index.md' },
          { text: 'ROBLOX', link: '/sect/rblx/index.md' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Jericho Library', link: '/sect/library.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DJSng-Toolkit/DJSng-Toolkit.github.io' }
    ]
  }
})
