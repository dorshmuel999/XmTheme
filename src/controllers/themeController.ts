import { Request, Response } from 'express';
import { getThemes, getThemeById } from '../models/theme';

export const listThemes = (req: Request, res: Response) => {
  const themes = getThemes();
  res.render('themes', { themes });
};

export const getTheme = (req: Request, res: Response) => {
  const themeId = parseInt(req.params.id);
  const theme = getThemeById(themeId);
  
  if (!theme) {
     res.status(404).send('Theme not found');
        return;
  }
  
  res.json(theme);
};
