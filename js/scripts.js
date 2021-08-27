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
    const cheese = new Topping("cheese", 1);
    const pepperoni = new Topping("pepperoni", 2);
    const sausage = new Topping("sausage", 2)
    const olives = new Topping("olives", 1);
    const peppers = new Topping("peppers", 1);
    let toppingsArray = [cheese, pepperoni, sausage, olives, peppers];
    // create an array of checked toppings
    let inputToppingsArray = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      inputToppingsArray.push($(this).val());
    });
    // loop through toppings options to match those checked and add those to pizza
    
    // for (let i = 0; i < inputToppingsArray.length; i++) {
    //   let toppingName = inputToppingsArray[i];
    //   for (let n = 0; n < toppingsArray.length; n++) {
    //     if (toppingName === toppingsArray[n].name) {
    //       newPizza.addTopping(toppingsArray[n]);
    //     };
    //   };
      // ????? Created multiples of new pizza on accident ?????
      // const totalCost = newPizza.determineTotalCost();
      // console.log(totalCost)
      console.log(newPizza);
    };


  });
});
