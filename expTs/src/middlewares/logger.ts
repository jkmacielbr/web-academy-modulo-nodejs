import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import fs from 'fs';

function logger(tipo: Tipo) {
  const logPath = `${process.cwd()}/log/log.txt`;

  return (req: Request, res: Response, next: NextFunction) => {
    let dados;
    if (tipo === 'completo') {
      dados = `${new Date().toISOString()} ${req.method} ${req.url} ${
        req.httpVersion
      } ${req.get('User-Agent')}`;
    } else {
      dados = `${new Date().toISOString()} ${req.method} ${req.url}`;
    }

    fs.writeFile(logPath, dados, (err) => {
      if (err) throw err;
      else {
        console.log('Log Salvo');
      }
    });
    next();
  };
}

export default logger;
