import express, { Response as ExResponse, Request as ExRequest } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './controllers/routes';

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => res.send(
  swaggerUi.generateHTML(await import('./controllers/swagger.json')),
));

app.use(bodyParser.json());

RegisterRoutes(app);
