/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Обзор проекта',
      items: [
        'overview/vision',
        'overview/stakeholders',
        'overview/use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Архитектура',
      items: [
        'architecture/context',
        'architecture/components',
        'architecture/async-flows',
      ],
    },
    {
      type: 'category',
      label: 'Доменная модель',
      items: [
        'domain/erd',
        'domain/entities',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/health-api',
        'api/trainer-api',
      ],
    },
    {
      type: 'category',
      label: 'Wireframes',
      items: [
        'wireframes/screens',
        'wireframes/routes',
        'wireframes/endpoints-mapping',
      ],
    },
    {
      type: 'category',
      label: 'Алгоритмы',
      items: [
        'algorithms/readiness-index',
        'algorithms/dmn-rules',
      ],
    },
    {
      type: 'category',
      label: 'Интеграции',
      items: [
        'integrations/onesignal',
        'integrations/kafka-topics',
        'integrations/n8n',
      ],
    },
    {
      type: 'category',
      label: 'Платформизация',
      items: [
        'platformization/strategy',
        'platformization/monetization',
      ],
    },
    {
      type: 'category',
      label: 'Эксплуатация',
      items: [
        'operations/non-functional',
        'operations/monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Водородный двигатель',
      items: [
        'hydrogen-engine/roadmap',
      ],
    },
  ],
};

module.exports = sidebars;