// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Me RPG',
  tagline: 'Упрощённая и динамичная настольная ролевая система',

  url: 'https://me-rpg.example.com',
  baseUrl: '/',

  organizationName: 'me-rpg',
  projectName: 'me-rpg',

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Me RPG',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Документация',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Базовые правила',
                to: '/core-rules',
              },
              {
                label: 'Создание персонажа',
                to: '/character-creation',
              },
              {
                label: 'Система боя',
                to: '/combat-system',
              },
            ],
          },
          {
            title: 'Справочники',
            items: [
              {
                label: 'Магия',
                to: '/magic-system',
              },
              {
                label: 'Навыки и таланты',
                to: '/skills-talents',
              },
              {
                label: 'Бестиарий',
                to: '/bestiary',
              },
            ],
          },
        ],
        copyright: `Me RPG © ${new Date().getFullYear()}. Версия 1.0`,
      },
    }),
};

module.exports = config;
