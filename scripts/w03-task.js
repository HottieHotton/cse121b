/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2){
    return number1+number2;
}
/* Function Definition - Add Numbers */
function addNumbers(){
    const addNumber1 = Number(document.querySelector(`#add1`).value);
    const addNumber2 = Number(document.querySelector(`#add2`).value);
    document.querySelector(`#sum`).value = add(addNumber1, addNumber2);
}
/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1-number2;
}

const subtractNumbers = function(){
    const subtract1 = Number(document.querySelector(`#subtract1`).value);
    const subtract2 = Number(document.querySelector(`#subtract2`).value);
    document.querySelector(`#difference`).value = subtract(subtract1, subtract2);
}

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) =>{ return number1*number2;}

const multiplyNumbers = ()=> {
    const factor1 = Number(document.querySelector(`#factor1`).value);
    const factor2 = Number(document.querySelector(`#factor2`).value);
    document.querySelector(`#product`).value = multiply(factor1, factor2);
}

/* Open Function Use - Divide Numbers */
const divide = (divide1, divide2) => {return divide1/divide2;}
const divideNumbers = function(){
    const dividend = Number(document.querySelector(`#dividend`).value);
    const divisor = Number(document.querySelector(`#divisor`).value);
    document.querySelector(`#quotient`).value = divide(dividend, divisor);
}

/* Decision Structure */
const date = new Date();
let year;
year = date.getFullYear();
document.querySelector(`#year`).append(year);

/* ARRAY METHODS - Functional Programming */
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector(`#array`).append(array);
/* Output Odds Only Array */
document.querySelector(`#odds`).append(array.filter(number => number % 2 != 0));
/* Output Evens Only Array */
document.querySelector(`#evens`).append(array.filter(number => number % 2 === 0));
/* Output Sum of Org. Array */
document.querySelector(`#sumOfArray`).append(array.reduce((sum, number)=> sum+number));
/* Output Multiplied by 2 Array */
document.querySelector(`#multiplied`).append(array.map((number)=> number*2));
/* Output Sum of Multiplied by 2 Array */
document.querySelector(`#sumOfMultiplied`).append(array.map((number)=> number*2).reduce((sum, number)=> sum+number));

document.querySelector(`#addNumbers`).addEventListener(`click`, addNumbers);
document.querySelector(`#subtractNumbers`).addEventListener(`click`, subtractNumbers);
document.querySelector(`#multiplyNumbers`).addEventListener(`click`, multiplyNumbers);
document.querySelector(`#divideNumbers`).addEventListener(`click`, divideNumbers);