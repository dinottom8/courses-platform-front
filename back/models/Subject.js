const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    _id: ObjectId,
    titulo: String,
    descricao: String,
    cursoId: ObjectId, // referência ao curso-pai
    ordem: Number, // para exibir na ordem correta

    aulas: [ObjectId], // lista de IDs da coleção `lessons`
    ativo: Boolean,

    // Metadados opcionais
    corIdentidade: String,
    icone: String, // ex: "math", "portuguese" (usado para exibição)

    criadoPor: ObjectId,
    dataCriacao: Date
})

module.exports = mongoose.model('Course', subjectSchema);