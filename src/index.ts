require('dotenv').config();
import express, { Request, Response } from 'express';
import { composeMigrations } from "./scripts/generate-migrations";
import { db } from './config/database'; 
import authRoutes from './auth/auth.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Conexión con la base de datos establecida.");
    if (process.env.ENVIRONMENT === "development")await db.sequelize.sync({ alter: true });
    console.log("Modelos sincronizados.");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

startServer();
