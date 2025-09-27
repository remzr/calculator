//1. Basic math operators

function addNumbers(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
};

function subtractNumbers(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
};

function multiplyNumbers(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
};

function divideNumbers(firstNumber, secondNumber) {
    return (firstNumber / secondNumber);
};

//2. Variabels for User-Inputs

let userNumberOne;
let userNumberTwo;
let userOperator;

//3. Main operation

function operate(firstNumber, operator, secondNumber) {
    console.log("Function called");

    if (operator == "+") {
        return addNumbers(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtractNumbers(firstNumber, secondNumber);
    } else if (operator == "*") {
        return multiplyNumbers(firstNumber,secondNumber);
    } else if (operator == "/") {
        return divideNumbers(firstNumber, secondNumber);
    } else {
        throw "Syntax Error";
    }
}

//5. Function to populate display (need eventlistener)

function populateDisplay(buttonValue) {

}

console.log(operate(3,"+",5));
console.log(operate(3,"-",5));
console.log(operate(3,"*",5));
console.log(operate(3,"/",5));