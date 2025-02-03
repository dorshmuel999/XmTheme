import express, { Request, Response } from 'express';
import path from 'path';
import themeRoutes from './routes/themRoutes';

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/themes', themeRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the theme application!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});