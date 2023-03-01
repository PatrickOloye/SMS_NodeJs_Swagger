const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'S.M.S Crud APi',
      version: '1.0.0',
      description: 'this is a simple school management system API',
    },
    servers: [
      {
        url: 'http://localhost:9090',
        description: 'development server',
      },
    ],
  },
  apis: ['app.js'],
};

module.exports = options;
