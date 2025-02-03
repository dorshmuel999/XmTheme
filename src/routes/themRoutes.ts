import { Router } from 'express';
import { listThemes, getTheme } from '../controllers/themeController';

const router = Router();

router.get('/', listThemes); 
router.get('/:id', getTheme);

export default router;