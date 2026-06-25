import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mandatory Cosmetics',
  tagline: 'Asset server documentation for Mandatory Mod cosmetics',
  favicon: 'img/favicon.ico',
  url: 'https://snenjih.github.io',
  baseUrl: '/Mandatory-cosmetics/',
  organizationName: 'Snenjih',
  projectName: 'Mandatory-cosmetics',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Mandatory Cosmetics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Snenjih/Mandatory-cosmetics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'Manifest Format', to: '/infrastructure/manifest-format'},
          ],
        },
        {
          title: 'Links',
          items: [
            {label: 'GitHub', href: 'https://github.com/Snenjih/Mandatory-cosmetics'},
            {label: 'Mandatory Mod', href: 'https://github.com/Snenjih/Mandatory'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Snenjih. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
