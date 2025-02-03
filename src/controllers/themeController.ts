import {Request, Response} from 'express';
import {getThemes} from '../models/theme';
import {getDb} from '../db';
import {ObjectId} from 'mongodb';


export const listThemes = async (req: Request, res: Response) => {
    const db = getDb();
    const themes = await db.collection('themes').find().toArray();

    res.json(themes);
};

export const getTheme = async (req: Request, res: Response) => {
    const themeId = req.params.id;
    const collection = getDb().collection('themes');

    try {
        const theme = await collection.findOne({_id: new ObjectId(themeId)});

        if (!theme) {
            res.status(404).send('Theme not found');
            return;
        }

        res.json(theme);
    } catch (error) {
        console.error('Error fetching theme:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const saveTheme = async (req: Request, res: Response) => {
    const theme = req.body;
    console.log({theme});
    if (!theme) {
        res.status(400).send('Theme not found');
        return;
    }

    const collection = getDb().collection('themes');

    await collection.insertOne({...theme});

    res.json('Theme saved');
};
