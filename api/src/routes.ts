import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerDoc from './controllers/swagger.json';

export function registerRawRoutes(app: express.Application) {
  app.use('/docs', swagger.serve, swagger.setup(swaggerDoc));
}
