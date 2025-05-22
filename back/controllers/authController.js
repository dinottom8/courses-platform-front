const User = require('../models/User');

exports.register = async (req, res) => {
  const {
    nome,
    email,
    telefone,
    senha, // senha recebida do front-end
    tipo,
    ipCadastro
  } = req.body;

  try {
    const novoUsuario = new User({
      nome,
      email,
      telefone,
      senhaHash: senha, // armazenando diretamente (⚠️ não recomendado em produção)
      dataCadastro: new Date(),
      tipo: tipo || 'aluno', // default para "aluno" se não vier
      ativo: true,
      avatarUrl: '',
      notificacoesAtivas: true,
      ultimoAcesso: null,
      ipCadastro,
      shopifyCustomerId: '',
      pedidosShopify: [],
      cursos: []
    });

    await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
};
