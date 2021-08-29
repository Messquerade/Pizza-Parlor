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

function displayPizza(pizza) {
  let pizzalist = $("ol#current-pizza");
  let htmlPizzaString = "<li> A " + pizza.size.name + " pizza";
  if (pizza.toppings != {}) {
    htmlPizzaString += " with";
    Object.keys(pizza.toppings).forEach(function(key) {
      const topping = pizza.findTopping(key);
      htmlPizzaString += " " + topping.name + " ";
    })
  }
  htmlPizzaString += "</li>";
  pizzalist.html(htmlPizzaString);
}

$(document).ready(function(){
  $("#add-pizza-form").submit(function(event) {
    event.preventDefault();
    let newPizza = new Pizza;
    parlor.addPizza(newPizza);
    const small = new Size("small", 10, 8);
    const medium = new Size("medium", 12, 10);
    const large = new Size("large", 14, 13);
    const sizeInput = $("#size-options").val();
    if (sizeInput === "small") {
      newPizza.changeSize(small);
    } else if (sizeInput === "medium") {
      newPizza.changeSize(medium)
    } else if (sizeInput === "large") {
      newPizza.changeSize(large)
    }

    let inputToppingsArray1 = [];
    $("input:checkbox[name=topping-1]:checked").each(function(){
      inputToppingsArray1.push($(this).val());
      });
    inputToppingsArray1.forEach(function(name) {
      const newTopping = new Topping(name, 1);
      newPizza.addTopping(newTopping);
    });

    let inputToppingsArray2 = [];
    $("input:checkbox[name=topping-2]:checked").each(function(){
      inputToppingsArray2.push($(this).val());
      });
    inputToppingsArray2.forEach(function(name) {
      const newTopping = new Topping(name, 2);
      newPizza.addTopping(newTopping);
    });
    
    const totalCost = newPizza.determineTotalCost();
    $("#total-cost").text(totalCost);
    displayPizza(newPizza);
    });
});
