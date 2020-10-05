'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id, o Schema cria automaticamente esse ID
    nomeVeiculo: {
        type: String,
    },
    marca: {
        type: String,
    },
    ano: {
        type: Number,
    },
    descricao: {
        type: String,
    },
    codFipe: {
        type: String,
    },
    vendido: {
        type: Boolean,
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    versionKey: false,
});

module.exports = mongoose.model('Veiculo', schema);