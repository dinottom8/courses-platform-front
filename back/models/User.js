const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  telefone: String,
  senhaHash: String,
  dataCadastro: Date,
  shopifyCustomerId: String,
  pedidosShopify: [String],
  cursos: [
    {
      cursoId: mongoose.Types.ObjectId,
      materiasLiberadas: [mongoose.Types.ObjectId],
      progresso: mongoose.Schema.Types.Mixed,
      dataCompra: Date
    }
  ],
  tipo: String,
  ativo: Boolean,
  avatarUrl: String,
  notificacoesAtivas: Boolean,
  ultimoAcesso: Date,
  ipCadastro: String
});

module.exports = mongoose.model('User', userSchema);
