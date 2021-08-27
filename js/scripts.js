// Business Logic
function Parlor() {
  this.pizzas = {};
  this.currentId = 0;
}

Parlor.prototype.addPizza = function(pizza) {
  this.currentId++;
  this.pizzas[this.currentId] = pizza;
};



function Pizza() {
  this.size;
  this.toppings = {};
  this.currentId = 0;
}

Pizza.prototype.changeSize = function(size) {
  this.size = size;
};

Pizza.prototype.addTopping = function(topping) {
  this.currentId++;
  this.toppings[this.currentId] = topping;
};

Pizza.prototype.findTopping = function(id) {
  if (this.toppings[id] != undefined) {
    return this.toppings[id];
  }
  return false;
};

Pizza.prototype.determineTotalCost = function() {
  let totalCost = 0;
  totalCost += this.size.cost;
  const currentPizza = this
  Object.keys(currentPizza.toppings).forEach(function(key) {
    const topping = currentPizza.findTopping(key);
    totalCost += topping.cost;
  })
  return totalCost;
};

function Size(name, diameter, cost) {
  this.name = name;
  this.diameter = diameter;
  this.cost = cost;
}

function Topping(name, cost) {
  this.name = name;
  this.cost = cost;
}

// UI Logic
let parlor = new Parlor;

function displaySizeOptions(selectedPizza) {
  const sizeOptions = $("#size-options");
  let htmlForSizeOptions = "";

}


$(document).ready(function(){
  $("#add-pizza-form").submit(function(event) {
    event.preventDefault();

  });
});

// const parlor = new Parlor;
// let newPizza = new Pizza;
// parlor.addPizza(newPizza);
// let cheese = new Topping("cheese", 1);
// let small = new Size("small", 8, 8);
// newPizza.addTopping(cheese);
// newPizza.changeSize(small);
// let pepperoni = new Topping("pepperoni", 1);
// newPizza.addTopping(pepperoni);
