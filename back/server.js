require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // opcional, caso vá chamar de outro domínio

const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

// Conecta ao MongoDB
async function main() {
  const dbUser = process.env.DB_USER;
  const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
  const dbName = process.env.DB_NAME;
  const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.rxmduir.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
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
app.use(express.json()); // necessário para req.body

// Rotas
app.get('/', (req, res) => {
  res.send('test');
});
app.use('/', authRouter); // registra POST /register

// 404 para outras rotas
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Lança o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
