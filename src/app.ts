import express, {Request, Response} from 'express';
import themeRoutes from './routes/themRoutes';
import {MongoClient} from 'mongodb';
import {connectToDB} from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
    // MongoDB connection URI and options


    await connectToDB();


    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/themes', themeRoutes);

    app.get('/', (req: Request, res: Response) => {
        res.send('Welcome to the theme application!');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})();