import * as dotenv from 'dotenv';
dotenv.config({ path: 'apps/express-server/.env' });

import express from 'express';
import errorHandler from './middleware/errorHandler';
import { corsHandler } from './middleware/corsHandler';
import postRoutes from "./routes/postRoutes";

const app = express();

corsHandler(app);

app.use('/posts', postRoutes);
app.use(errorHandler);

export default app;
