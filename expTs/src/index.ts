import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './middlewares/logger';
import fs from 'fs';

dotenv.config();
const PORT = process.env.PORT ?? 3333;
const app = express();

//app.use(logger('completo'));
app.use(logger('simples'));

app.use((req, res, next) => {
  console.log('Ola');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.end('Web Academy');
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}`);
});
