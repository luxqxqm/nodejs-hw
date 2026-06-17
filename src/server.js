import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import notesRoutes from './routes/notesRoutes.js';
const app = express();
app.use(logger);
app.use(express.json());
app.use(cors());

const port = process.env.PORT ?? 3000;

await connectMongoDB();
app.listen(port, () => console.log(`Server work on PORT: ${port}`));

app.use(notesRoutes);
app.use(notFoundHandler);
app.use(errorHandler);
