// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Основы',
      items: [
        'core-rules',
        'character-creation',
        'races',
      ],
    },
    {
      type: 'category',
      label: 'Бой и механики',
      items: [
        'combat-system',
      ],
    },
    {
      type: 'category',
      label: 'Магия',
      items: [
        'magic-system',
      ],
    },
    {
      type: 'category',
      label: 'Развитие персонажа',
      items: [
        'skills-talents',
      ],
    },
    {
      type: 'category',
      label: 'Снаряжение',
      items: [
        'equipment',
      ],
    },
    {
      type: 'category',
      label: 'Справочники',
      items: [
        'bestiary',
      ],
    },
  ],
};

module.exports = sidebars;
