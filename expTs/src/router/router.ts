import { Router } from 'express';
import main from '../controllers/main';
import mainController from '../controllers/main';

const router = Router();

router.get('/', mainController.index);
router.get('/bemvindo/:nome', mainController.bemvindo);

router.get('/statics-files-page', mainController.filespage);

router.get('/hb1', mainController.hb1);

router.get('/hb2', mainController.hb2);

router.get('/hb3', mainController.hb3);

router.get('/hb4', mainController.hb4);

router.get('/hb5', mainController.hb5);

export default router;
