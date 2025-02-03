import {Request, Response} from 'express';
import {getThemes, getThemeById} from '../models/theme';
import {getDb} from '../db';


export const listThemes = (req: Request, res: Response) => {
    const themes = getThemes();
    res.render('themes', {themes});
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

export const saveTheme = async (req: Request, res: Response) => {
    const theme = req.body;
    console.log({theme});
    if (!theme) {
        res.status(400).send('Theme not found');
        return;
    }

    const db = getDb();

    await db.collection('themes').insertOne({...theme});

    res.json('Theme saved');
};
