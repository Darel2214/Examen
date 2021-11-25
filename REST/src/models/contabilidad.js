const mongoose = require("mongoose");
const {Schema} = mongoose;

const ContableSchema = new Schema({
    //tipo de datos utilizados en la base de datos
    Secuencia: String,
    Detalle: String,
    Usuario: String,
    Debe: Number,
    Haber: Number,
    Tipo: String,

    //si el dato es nulo saltara un error 
    tipoError: {
        type: String,
        default: null
    }
});

 module.exports = mongoose.model('Contable',ContableSchema);