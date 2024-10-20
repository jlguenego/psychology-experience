import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    head: [['link', { rel: 'icon', href: '/logo-light.svg' }]],
    lang: 'fr-FR',
    title: 'Experipsy',
    description: "Un catalogue d'experiences en psychologie",
    cleanUrls: true,

    themeConfig: {
      outline: {
        label: 'Sur cette page',
        level: 'deep',
      },
      logo: { light: '/logo-light.svg', dark: '/logo-dark.svg', alt: 'Logo' },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Concepts', link: '/concepts' },
        { text: 'Expériences', link: '/experiences' },
      ],

      sidebar: [
        {
          text: 'Accueil',
          link: '/',
          items: [
            { text: 'Concepts', link: '/concepts' },
            { text: 'Expériences', link: '/experiences' },
          ],
        },
      ],

      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/jlguenego/psychology-experience',
        },
      ],
      docFooter: {
        next: 'Page suivante &gt;',
        prev: '&lt; Page précédente',
      },
      darkModeSwitchLabel: 'Apparence',
      lightModeSwitchTitle: 'Régler le thème clair',
      darkModeSwitchTitle: 'Régler le thème foncé',
      sidebarMenuLabel: 'Menu',
      returnToTopLabel: 'Retourner en haut',
    },
    pwa: {
      pwaAssets: {
        disabled: false,
        config: true,
      },
      manifest: {
        name: 'Experipsy',
        short_name: 'Experipsy',
        description: 'Expériences en psychologie',
        theme_color: '#ffffff',
        lang: 'fr',
        screenshots: [
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            label: 'Experipsy',
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            label: 'Experipsy',
            form_factor: 'wide',
          },
        ],
      },
    },
  })
)
