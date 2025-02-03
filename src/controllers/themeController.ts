import {Request, Response} from 'express';
import {getDb} from '../db';
import {ObjectId} from 'mongodb';
import {CustomThemeDto, customThemeSchemaDto} from "../dtos/createCustomThemeDto";
import {UpdateCustomThemeDto, updateCustomThemeDtoSchema} from "../dtos/updateCustomThemeDtoSchema";


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

    const validationResult = customThemeSchemaDto.safeParse(theme);
    if (!validationResult.success) {
        res.status(400).json({error: validationResult.error.errors});
        return;
    }

    const collection = getDb().collection('themes');
    const themeToInsert: CustomThemeDto = validationResult.data;
    await collection.insertOne(themeToInsert);

    res.json('Theme saved');
};

export const updateTheme = async (req: Request, res: Response) => {
    const themeId = req.params.id;
    const updatedTheme: UpdateCustomThemeDto = req.body;

    const validationResult = updateCustomThemeDtoSchema.safeParse(updatedTheme);
    if (!validationResult.success) {
        res.status(400).json({error: validationResult.error.errors});
        return;
    }

    const collection = getDb().collection('themes');
    const themToUpdate: UpdateCustomThemeDto = validationResult.data;
    try {
        const result = await collection.updateOne(
            {_id: new ObjectId(themeId)},
            {$set: themToUpdate}
        );

        if (result.matchedCount === 0) {
            res.status(404).send('Theme not found');
            return;
        }

        res.json('Theme updated');
    } catch (error) {
        console.error('Error updating theme:', error);
        res.status(500).send('Internal Server Error');
    }
};
