import { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

const index = (req: Request, res: Response) => {
  res.end('Welcome to be Web academy!');
};

const bemvindo = (req: Request, res: Response) => {
  res.send(req.params.nome);
};

const filespage = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const hb1 = (req: Request, res: Response) => {
  res.render('hb1', {
    uf: 'universidade federal do amazonas',
  });
};

const hb2 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Teste', sala: 12221 },
    { nome: 'Teste1', sala: 12221 },
    { nome: 'Teste1', sala: 12221 },
  ];
  res.render('hb2', {
    profs,
    layout: false,
  });
};

const hb3 = (req: Request, res: Response) => {
  res.render('hb3', {
    nome: 'Express',
    tipo: 'Framework',
    poweredByNode: true,
    layout: false,
  });
};

const hb4 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Teste', sala: 12221 },
    { nome: 'Teste1', sala: 12221 },
    { nome: 'Teste1', sala: 12221 },
  ];
  res.render('hb4', {
    profs,
    layout: false,
  });
};

const hb5 = (req: Request, res: Response) => {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];
  res.render('hb5', {
    technologies,
  });
};

export default { index, bemvindo, filespage, hb1, hb2, hb3, hb4, hb5 };
