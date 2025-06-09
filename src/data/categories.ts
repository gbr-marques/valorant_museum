export type Category = {
    name: string;
    icon: string;
    slug: string;
  };
  
  export const categories: Category[] = [
    {
      name: 'Agents',
      icon: '/icons/agents.png',
      slug: 'agents',
    },
    {
      name: 'Maps',
      icon: '/icons/maps.png',
      slug: 'maps',
    },
    {
      name: 'Weapons',
      icon: '/icons/weapons.png',
      slug: 'weapons',
    },
    {
      name: 'Gamemodes',
      icon: '/icons/gamemodes.png',
      slug: 'gamemodes',
    },
    {
      name: 'Player cards',
      icon: '/icons/playercards.png',
      slug: 'playercards',
    },
    {
      name: 'Competitive Tiers',
      icon: '/icons/tiers.png',
      slug: 'competitivetiers',
    },
    {
      name: 'Sprays',
      icon: '/icons/sprays.png',
      slug: 'sprays',
    },
    {
      name: 'Bundles',
      icon: '/icons/bundles.png',
      slug: 'bundles',
    },
  ];