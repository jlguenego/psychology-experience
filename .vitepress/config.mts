import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: 'Experiences en psychologie',
  description: "Un catalogue d'experiences en psychologie",
  themeConfig: {
    logo: { light: '/logo-light.svg', dark: '/logo-dark.svg', alt: 'Logo' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Concepts', link: '/concepts' },
      { text: 'Expériences', link: '/experiences' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jlguenego/psychology-experience',
      },
    ],
  },
})
