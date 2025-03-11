import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Lake Monitoring System',
  tagline: 'A website for monitoring the water quality of lakes',
  favicon: 'img/icon.ico',

  // Production URL for GitHub Pages
  url: 'https://nammalakes.github.io/',

  // Base URL for GitHub Pages deployment (matches repository name)
  baseUrl: '/NammaLakes/',

  // GitHub Pages deployment configuration
  organizationName: 'NammaLakes', // GitHub org/user name
  projectName: 'NammaLakes', // Repository name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Ensures URLs are clean (avoids .html extensions)
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social preview image
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'NammaLakes',
      logo: {
        alt: 'NammaLakes',
        src: 'img/nammalakes.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/NammaLakes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} NammaLakes.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
