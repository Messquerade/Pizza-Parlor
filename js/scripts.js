// Business Logic
function Parlor() {
  this.pizzas = {};
  this.currentId = 0;
}

Parlor.prototype.addPizza = function(pizza) {
  this.currentId++;
  this.pizzas[this.currentId] = pizza;
}



function Pizza() {
  this.size;
  this.toppings = {};
  this.currentId = 0;
}

Pizza.prototype.changeSize = function(size) {
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.currentId++;
  this.toppings[this.currentId] = topping;
}

Pizza.prototype.findSize = function(id) {

}
Pizza.prototype.determineTotalCost = function() {
  totalCost = 0;
  totalCost += this.size.cost;
  return totalCost;
}

function Size(name, diameter, cost) {
  this.name = name;
  this.diameter = diameter;
  this.cost = cost;
}

function Topping(name, cost) {
  this.name = name;
  this.cost = cost;
}

const parlor = new Parlor;
let newPizza = new Pizza;
parlor.addPizza(newPizza);
let cheese = new Topping("cheese", 1);
let small = new Size("small", 8, 8);
newPizza.addTopping(cheese);
newPizza.changeSize(small);
