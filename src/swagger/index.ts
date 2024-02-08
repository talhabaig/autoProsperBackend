export default {
  definition: {
    openapi: '3.0.2',
    info: {
      version: 'v0',
      title: 'AutoProsper APIs',
      description: 'AutoProsper API documentation to create a CRUD style API in NodeJs using TypeScript',
    },
    servers: [
      {
        url: 'http://18.234.141.254:9000',
        description: 'PROD server',
      },
      {
        url: 'http://localhost:9000',
        description: 'LOCAL 9000',
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
            first_name: {
              type: 'string',
            },
            last_name: {
              type: 'string',
            },
            id_role: {
              type: 'number',
            },
            is_active: {
              type: 'boolean',
            },
          },
        },
      },
      securitySchemes: {
        BasicAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/**/*.ts'],
}
