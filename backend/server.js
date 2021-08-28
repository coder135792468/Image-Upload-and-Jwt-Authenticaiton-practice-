import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import authRoute from './routes/authRoute.js';
import postRoute from './routes/postRoute.js';
import { notFound, errorHandler } from './middlewares/error.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server is running on ${PORT}`.yellow.bold.underline)
);
