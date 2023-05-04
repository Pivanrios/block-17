//import the array from the coffee data file
const coffeeMenu = require('./coffee-data')
//console.log(coffeeMenu)

//call back functions:
//create a new array
const newArray = (value) => {
    drinks.push(value.name);
}
//array that will store all the drinks that cost 5 dlls or less
const underFive = (value) => {
    if (value.price <= 5){ // conditional for looking if the price is lower than 5 dlls
        lessThanFive.push(value.name)
    }
}
//create an array with prices even
const evenDrink = (value) => {
    if (value.price%2 === 0){ //condition to get even number
        evenDrinks.push(value.name)
    }
}
//Create an array with all the seasonal drinks
const seasonal = (value) => {
    if (value.seasonal === true){
        seasonalDrinks.push(value.name)
    }
}
//Print all the seasonal drinks with the words "with imported beans" after the item name. 
//For example: "affogato with imported beans".
const importedBeans = (value) =>{
    if (value.seasonal === true){
        console.log(`${value.name} with imported beans.`)
    }
}

//add up all prices
const suma = (accumulator, value) => {
    return accumulator + value.price;
}

let initial = 0;
let drinks = [];
let lessThanFive = [];
let evenDrinks = [];
let seasonalDrinks = [];


//Print an array of all drinks
coffeeMenu.forEach(newArray);
console.log(drinks)
//Print an array of drinks that cost uner five dollars
coffeeMenu.forEach(underFive)
console.log(lessThanFive)
//Print an array of the drinks that are priced at an even number
coffeeMenu.forEach(evenDrink)
console.log(evenDrinks)

//Print the total value of sum all the drinks
const sum = coffeeMenu.reduce(suma, 0)
console.log("Total if I wear to drink all the beverages:",sum)

//print an array with the seasonal drinks
coffeeMenu.forEach(seasonal)
console.log(seasonalDrinks)

//Print all the seasonal drinks with the words "with imported beans" after the item name. 
coffeeMenu.forEach(importedBeans)




