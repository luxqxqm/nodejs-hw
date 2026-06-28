import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import notesRoutes from './routes/notesRoutes.js';
import { errors } from 'celebrate';
import authRouter from './routes/authRoutes.js';
const app = express();

app.use(logger); //  1. Логер першим — бачить усі запити
app.use(express.json()); // 2. Парсинг JSON-тіла
app.use(cors()); // 3. Дозвіл для запитів з інших доменів

app.use(notesRoutes);
app.use(authRouter);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);
await connectMongoDB();
const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log(`Server work on PORT: ${port}`));
