import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
import express from 'express';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

if (!process.env.DATABASE_URL || !isString(process.env.DATABASE_URL)) {
  throw new Error('Database address incorrect or missing');
}

const sequelize = new Sequelize(process.env.DATABASE_URL);
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.close();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Unable to connect to the database', error);
  }

};

void main();
