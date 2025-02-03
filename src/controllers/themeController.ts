import { Request, Response } from 'express';
import { getThemes, getThemeById } from '../models/theme';
import { v4 } from 'uuid';
import { getDb } from '../db';



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

export const saveTheme = (req: Request, res: Response) => {
    const themeId = parseInt(v4());
    const theme = req.body;
      console.log({theme});
      return;
    if (!theme) {
       res.status(400).send('Theme not found');
          return;
    }

    const db = getDb();

    db.collection('themes').insertOne({ ...theme, id: themeId });
    
    res.json('Theme saved');
  };
