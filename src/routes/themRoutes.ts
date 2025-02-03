import {Router} from 'express';
import {listThemes, getTheme, saveTheme, updateTheme} from '../controllers/themeController';

const router = Router();

router.get('/', listThemes);
router.get('/:id', getTheme);
router.post('/', saveTheme);
router.put('/:id', updateTheme);

export default router;