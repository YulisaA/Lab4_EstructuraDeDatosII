var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pizza = require("../models/ModeloPizzeria");

router.get('/', function(req, res, next) {
  res.render('../views/Pizza');
});

//GET - Return all Pizzas in the DB
exports.EncontrarTodaslasPizzas = function(req, res) {
	Pizza.find(function(err, ModeloPizzeria) {
    if(err) res.send(500, err.message);

    console.log('GET /Pizzas')
		res.status(200).jsonp(ModeloPizzeria);
	});
};

//GET - Retorna una pizza con un ID especifico
exports.findById = function(req, res) {
	Pizza.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /Pizza/' + req.params.id);
		res.status(200).jsonp(ModeloPizzeria);
	});
};

//POST - Insert a new TVShow in the DB
exports.agregarPizza = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var PizzaACrear = new Pizza({
		nombre: req.body.nombre,
    masa: req.body.masa,
    descripcion: req.body.descripcion,
    ingredientes: req.body.ingredientes,
    queso: req.body.queso,
    tamaño: req.body.tamaño,
    porciones: req.body.porciones,
	});

	Pizza.save(function(err, ModeloPizzeria) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(ModeloPizzeria);
	});
};

//PUT - Update a register already exists
exports.ActualizarPizza = function(req, res) {
	Pizza.findById(req.params.id, function(err, ModeloPizzeria) {
    Pizzas.nombre = req.body.nombre;
    Pizzas.masa = req.body.masa;
    Pizzas.descripcion = req.body.descripcion;
    Pizzas.ingredientes= req.body.ingredientes;
    Pizzas.queso= req.body.queso;
    tamaño= req.body.tamaño;
    porciones= req.body.porciones;

		ModeloPizzeria.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(ModeloPizzeria);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.BorarPizza = function(req, res) {
	TVShow.findById(req.params.id, function(err, ModeloPizzeria) {
		tvshow.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};

module.exports = router;