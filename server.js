import express, { urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './src/database/database.js';
import usernameRoute from './src/routes/username.js';
import allRoute from './src/routes/all.js';
import barchartRoute from './src/routes/chart.js';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.FRONT || 'http://localhost:8081',
  })
);

// mongodb connection
connectDB();

//Routes
app.use(usernameRoute);

app.use(allRoute);

app.use(barchartRoute);

//Server connection
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log('Server is connectede');
});
