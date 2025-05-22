const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    _id: ObjectId,
    titulo: String,
    descricao: String,
    imagemCapa: String, // URL
    materias: [ObjectId], // lista de IDs da coleção `subjects`
    ativo: Boolean,

    // Integração com Shopify
    shopifyProductId: String,

    dataCriacao: Date,
    criadoPor: ObjectId // ID do admin/instrutor
})

module.exports = mongoose.model('Course', courseSchema);