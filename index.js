import express from 'express';
import cors from 'cors';
import { cardRouter } from './routes/card.route.js';
import { letterRouter } from './routes/letter.route.js';
import { connectDB } from './database/db.js';

const app = express();
const PORT = 3002;

connectDB();

// CORS middleware for all routes
app.use(cors({
  origin: "https://bhumikabf.netlify.app",
  credentials: true
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("hello..")
});

// All other routes
app.use('/card', cardRouter);
app.use('/letter', letterRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
