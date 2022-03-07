// swagger-def.js
module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'web ciska API gateway',
    version: '1.0.0',
    description:
      'REST API Заявки на ремонт',
    contact: {
      name: 'Свояков Алексей',
      url: 'https://www.kuazot.ru',
      email: 'svoyakovav@kuazot.ru'
    },
  },
  servers: [
    {
      url: 'https://gateway.ciska.kuazot.ru',
      description: 'Шлюз для доступа к API REST сервисам ПАО КуйбышевАзот'
    }
  ]  
};