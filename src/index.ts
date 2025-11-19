import express from 'express';
import dotenv from 'dotenv';
import customersRouter from './routes/customers';
import docsRouter from './routes/docs';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

app.use('/api/customers', customersRouter);
app.use('/docs', docsRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
  console.log(`customers-service listening on port ${port}`);
});
