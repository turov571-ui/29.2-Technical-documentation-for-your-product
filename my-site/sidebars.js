/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '01 · Обзор проекта',
      items: [
        'overview/vision',
        'overview/stakeholders',
        'overview/use-cases',
      ],
    },
    {
      type: 'category',
      label: '02 · Архитектура',
      items: [
        'architecture/context',
        'architecture/components',
        'architecture/async-flows',
      ],
    },
    {
      type: 'category',
      label: '03 · Доменная модель',
      items: [
        'domain/erd',
        'domain/entities',
      ],
    },
    {
      type: 'category',
      label: '04 · API',
      items: [
        'api/overview',
        'api/health-api',
        'api/trainer-api',
      ],
    },
    {
      type: 'category',
      label: '05 · Wireframes',
      items: [
        'wireframes/screens',
        'wireframes/routes',
        'wireframes/endpoints-mapping',
      ],
    },
    {
      type: 'category',
      label: '06 · Алгоритмы',
      items: [
        'algorithms/readiness-index',
        'algorithms/dmn-rules',
      ],
    },
    {
      type: 'category',
      label: '07 · Интеграции',
      items: [
        'integrations/onesignal',
        'integrations/kafka-topics',
        'integrations/n8n',
      ],
    },
    {
      type: 'category',
      label: '08 · Платформизация',
      items: [
        'platformization/strategy',
        'platformization/monetization',
      ],
    },
    {
      type: 'category',
      label: '09 · Эксплуатация',
      items: [
        'operations/non-functional',
        'operations/monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Style Guide',
      collapsed: true,
      items: [
        'style-guide/overview',
        'style-guide/structure',
        'style-guide/diagrams',
        'style-guide/api',
      ],
    },
  ],
};

module.exports = sidebars;