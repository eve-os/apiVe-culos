'use strict';

const mongoose = require('mongoose');
const Veiculo = mongoose.model('Veiculo');

exports.get = async () => {
    const res = await Veiculo.find({});
    return res;
}

exports.getById = async (id) => {
    const res = await Veiculo
        .findById(id);
    return res;
}

exports.create = async (data) => {
    var veiculo = new Veiculo(data);
    await veiculo.save();
}

exports.update = async (id, data) => {
    await Veiculo
        .findByIdAndUpdate(id, {
            $set: {
                veiculo: data.veiculo,
                marca: data.marca,
                vendido: data.vendido,
                cod_fipe: data.cod_fipe,
            }
        });
}

exports.delete = async (id) => {
    await Veiculo
        .deleteOne(id);
}