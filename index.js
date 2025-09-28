import express from 'express';
import cors from 'cors';
import { cardRouter } from './routes/card.route.js';
import { letterRouter } from './routes/letter.route.js';
import { connectDB } from './database/db.js';

const app = express();
const PORT = 3002;

connectDB()
app.use(cors({
  origin : "https://bhumikabf.netlify.app",
  credentials : true
}));
app.use(express.json());
app.get("/", (req, res, next)=>{
  res.send("hello..")
})
app.use('/card', cardRouter);
app.use('/letter', letterRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
