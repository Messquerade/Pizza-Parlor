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
  this.sizes = {};
  this.toppings = {};
  this.currentId = 0;
}

Pizza.prototype.addSize = function(size) {
  this.currentId++;
  this.sizes[this.currentId] = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.currentId++;
  this.toppings[this.currentId] = topping;
}

Pizza.prototype.determineTotalCost = function() {
  
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
let newpizza = new Pizza;
parlor.addPizza(newpizza);
let cheese = new Topping("cheese", 1);
let small = new Size("small", 6, 10);
newpizza.addTopping(cheese);
newpizza.addSize(small);
