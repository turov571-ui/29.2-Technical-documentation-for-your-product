// @ts-check
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FitAdapt Docs',
  tagline: 'Техническая документация платформы адаптивных тренировок',
  favicon: 'img/favicon.ico',

  url: 'https://turov571-ui.github.io',
  baseUrl: '/29.2-Technical-documentation-for-your-product/',

  organizationName: 'turov571-ui',
  projectName: '29.2-Technical-documentation-for-your-product',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/turov571-ui/29.2-Technical-documentation-for-your-product/tree/main/my-site/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'FitAdapt',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://github.com/turov571-ui/29.2-Technical-documentation-for-your-product',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {label: 'Введение', to: '/docs/intro'},
            {label: 'Архитектура', to: '/docs/architecture/context'},
          ],
        },
        {
          title: 'Артефакты',
          items: [
            {label: 'ERD', to: '/docs/domain/erd'},
            {label: 'Wireframes', to: '/docs/wireframes/screens'},
            {label: 'Алгоритмы', to: '/docs/algorithms/readiness-index'},
          ],
        },
        {
          title: 'Style Guide',
          items: [
            {label: 'Обзор', to: '/docs/style-guide/overview'},
            {label: 'Структура', to: '/docs/style-guide/structure'},
            {label: 'Диаграммы', to: '/docs/style-guide/diagrams'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FitAdapt. Документация курсового проекта.`,
    },

    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['yaml', 'json', 'bash', 'java'],
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  },
};

module.exports = config;