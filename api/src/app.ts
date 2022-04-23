import express, { Response as ExResponse, Request as ExRequest } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { registerRawRoutes } from './routes';
import { RegisterRoutes } from './controllers/routes';

export const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

registerRawRoutes(app);

app.use(bodyParser.json());

RegisterRoutes(app);
