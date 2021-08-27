# _Pizza Parlor_

#### _This website will allow users to order a pizza to their unique specifications._

#### By _**Anna Clarke**_

## Technologies Used

* _HTNL_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_This website allows users to order a pizza, choosing size and toppings options, and displays the total cost of their order._

## Setup/Installation Requirements

* _Clone this repository from Github to your desktop_
* _Navigate to the top of the directory_
* _Open directory in your text editor of choice_


## Known Bugs

* _NA_

## License

MIT

_Copyright (c) 2021 Anna Clarke_

## Contact Information

_Anna Clarke: annac.klingberg@gmail.com_

## Specifications

### Describe Pizza.prototype.determineTotalCost()
Total the cost of size and toppings for a pizza


Test 1: "It will check the cost of the size of the pizza and add that to totalCost, return totalCost"  
Code: const parlor = new Parlor;
let newPizza = new Pizza;
parlor.addPizza(newPizza);
let small = new Size("small", 8, 8);
newPizza.addSize(small);
newPizza.determineTotalCost();  
Expected Output: 8

Test 2: "It will check the cost of one topping of the pizza and add that to totalCost, return totalCost"
Code: const parlor = new Parlor;
let newPizza = new Pizza;
parlor.addPizza(newPizza);
let small = new Size("small", 8, 8);
let cheese = new Topping("cheese", 1);
newPizza.addSize(small);
newPizza.addTopping(cheese);
newPizza.determineTotalCost();  
Expected Output: 9

Test 3: "It will check the cost of multiple toppings of the pizza and add them all to totalCost, return totalCost"
Code: const parlor = new Parlor;
let newPizza = new Pizza;
parlor.addPizza(newPizza);
let small = new Size("small", 8, 8);
let cheese = new Topping("cheese", 1);
let pepperoni = newTopping("pepperoni", 1);
newPizza.addSize(small);
newPizza.addTopping(cheese);
newPizza.addTopping(pepperoni);
newPizza.determineTotalCost();  
Expected Output: 10