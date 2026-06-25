import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/github-pages-setup'],
    },
    {
      type: 'category',
      label: 'Cosmetic Types',
      items: [
        'cosmetic-types/capes',
        'cosmetic-types/hats',
        'cosmetic-types/wings',
        'cosmetic-types/particles',
        'cosmetic-types/armor-skins',
        'cosmetic-types/emotes',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'infrastructure/manifest-format',
        'infrastructure/cloudflare-proxy',
        'infrastructure/player-state-api',
      ],
    },
  ],
};

export default sidebars;
