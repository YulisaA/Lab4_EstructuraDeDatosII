var mongoose = require("mongoose");
var Pizza = require("../models/ModeloPizzeria");
var pizzaController = {};


// Show list of pizzas
pizzaController.list = function(req, res) {
  Pizza.find({}).exec(function (err, pizzas) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Pizza", {pizzas: pizzas});
    }
  });
};

// Show pizza by id
pizzaController.show = function(req, res) {
  Pizza.findOne({_id: req.params.id}).exec(function (err, pizza) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/pizzas/show", {pizza: pizza});
    }
  });
};

// Create new pizza
pizzaController.create = function(req, res) {
  res.render("../views/pizzas/create");
};

// Save new pizza
pizzaController.save = function(req, res) {
  var pizza = new Pizza(req.body);

  pizza.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/pizzas/create");
    } else {
      console.log("Successfully created an pizza.");
      res.redirect("/pizzas/show/"+pizza._id);
    }
  });
};

// Edit an pizza
pizzaController.edit = function(req, res) {
  Pizza.findOne({_id: req.params.id}).exec(function (err, pizza) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/pizzas/edit", {pizza: pizza});
    }
  });
};

// Update an pizza
pizzaController.update = function(req, res) {
  Pizza.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, pizza) {
    if (err) {
      console.log(err);
      res.render("../views/pizzas/edit", {pizza: req.body});
    }
    res.redirect("/pizzas/show/"+pizza._id);
  });
};

// Delete an pizza
pizzaController.delete = function(req, res) {
  Pizza.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Pizza deleted!");
      res.redirect("/pizzas");
    }
  });
};

module.exports = pizzaController;