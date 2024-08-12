require('dotenv').config();
import express, { Request, Response } from 'express';
import { composeMigrations } from "./scripts/generate-migrations";
// routes
import authRoutes from './auth/auth.routes';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    if(process.env.ENVIRONMENT != "production") composeMigrations();
    console.log(`Server is running on http://localhost:${port}`);
});