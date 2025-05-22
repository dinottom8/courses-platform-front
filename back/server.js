// back/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth');

const app = express();

// Conecta ao MongoDB (variáveis definidas no Vercel UI)
async function main() {
  const dbUser     = process.env.DB_USER;
  const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
  const dbName     = process.env.DB_NAME;
  const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.rxmduir.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser:    true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected with database!');
  } catch (err) {
    console.error('Error while connecting with database:', err);
    process.exit(1);
  }
}
main();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/register', authRouter);

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Exporta o app como função serverless para o Vercel
module.exports = app;
