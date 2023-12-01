const themes = require('prism-react-renderer').themes
const {
  convertNpmToPackageManagers,
} = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm')

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'react-native-error-boundary',
  tagline: 'A simple and reusable React-Native error boundary component 🐛',
  url: 'https://react-native-error-boundary.js.org',
  favicon: '/images/logo.ico',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/carloscuesta/react-native-error-boundary/tree/master/docs/',
          remarkPlugins: [convertNpmToPackageManagers],
        },
        blog: false,
        theme: { customCss: require.resolve('./src/theme/theme.css') },
        gtag: {
          trackingID: 'G-TYCHT7C3PQ',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'L5CKIX558D',
        apiKey: 'da22f908fd4a414a5552862d24948b06',
        indexName: 'react-native-error-boundary',
        contextualSearch: true,
      },
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'React Native Error Boundary',
        logo: {
          alt: 'React Native Error Boundary',
          src: 'images/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/carloscuesta/react-native-error-boundary',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/install',
              },
              {
                label: 'Usage',
                to: '/usage/recovering-errors',
              },
              {
                label: 'API',
                to: '/api/errorboundary',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/crloscuesta',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/carloscuesta/react-native-error-boundary',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
