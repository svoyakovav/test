// swagger-def.js
module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'web ciska API gateway',
    version: '1.0.0',
    description:
      'REST API Заявки на ремонт',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Свояков Алексей',
      url: 'SvoyakovAV@kuazot.ru',
      contactinfo: 'dgsdgsdg',
    },
  },
  servers: [
    {
      url: 'https://gateway.ciska.kuazot.ru',
      description: 'Шлюз для доступа к API сервисов ',
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },  
};

