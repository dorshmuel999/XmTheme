import { Router } from 'express';
import { listThemes, getTheme, saveTheme } from '../controllers/themeController';

const router = Router();

router.get('/', listThemes); 
router.get('/:id', getTheme);
router.post('/', saveTheme);

export default router;