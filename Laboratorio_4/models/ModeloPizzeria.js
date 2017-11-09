var mongoose = require('mongoose');

var PizzaSchema = new mongoose.Schema({
  nombre: String,
  masa: String,
  descripcion: String,
  ingredientes: String,
  queso: String,
  tamaño: Number,
  porciones: Number,
  
});

module.exports = mongoose.model('Pizza', PizzaSchema);
