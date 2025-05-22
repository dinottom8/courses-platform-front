const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    _id: ObjectId,
    titulo: String,
    descricao: String,
    materiaId: ObjectId, // referência à matéria
    ordem: Number,

    videoUrl: String, // ou vídeoId dependendo do provedor
    pdfUrl: String, // link para o material de apoio
    questoesUrl: String, // link para pdf de questoes
    gabaritoUrl: String, // link para pdf do gabarito das questoes

    duracaoSegundos: Number, // para tracking

    ativo: Boolean,
    criadoPor: ObjectId,
    dataCriacao: Date,
    comentarios: [
        {
        _id: ObjectId,
        usuarioId: ObjectId,
        nomeUsuario: String, // snapshot do nome no momento
        mensagem: String,
        data: Date
        }
    ]
})

module.exports = mongoose.model('Course', lessonSchema);