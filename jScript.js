const digits = document.querySelectorAll('#digit');
const operators = document.querySelectorAll('#operator');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');
const backBtn = document.getElementById('back');
const powerBtn = document.getElementById('power');
const display = document.getElementById('displaytext');

let powerOn = true;
let number1 = 0;
let number2 = 0;
let temp = '';
let operation1 = '';
let operation2 = '';
let firstOperation = true;

//All digits
digits.forEach(button => button.addEventListener('click', operate));
//All operators(+,-,*,/)
operators.forEach(button => button.addEventListener('click', addOperator));
powerBtn.addEventListener('click', powerOnOff);
equalBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', deleteLast);
decimalBtn.addEventListener('click', addDecimal);

powerOnOff();

function powerOnOff()
{
    powerOn = !powerOn;
    
    if(powerOn)
    {
        display.parentElement.setAttribute('id', 'powerOn');
    }
    else
    {    
        clear();
        display.parentElement.removeAttribute('id', 'powerOn');
    }
    
}

function addDecimal()
{
    if(!temp.includes('.'))
    {
        temp += this.value;
        display.textContent += this.value;
    }
}

function addOperator() {

    if(firstOperation)
    {
        operation1 = this.value;
        number1 = Number(temp);
        temp = '';
        firstOperation = false;
    }
    else
    {
        operation2 = this.value;
        
        if(temp) calculate();
        
        operation1 = operation2;
        operation2 = '';
    }

    display.textContent += this.value;
}

function deleteLast()
{
    temp = temp.slice(0, -1);
    display.textContent = temp;
}

function operate() {

if(display.textContent == '0') display.textContent = '';

if(number1 == Infinity)
{
    firstOperation = true;
    number1 = 0;
    display.textContent = '';
}
    display.textContent += this.value;
    temp += this.value;

}

function clear() {
    temp = '';
    number1 = 0;
    number2 = 0;
    operation1 = '';
    operation2 = '';
    firstOperation = true;
    display.textContent = '';
}

function calculate() {

    number2 = Number(temp);
    temp = '';

    switch (operation1) {
        case '+':
            number1 = add(number1, number2);
            display.textContent = number1;
            break;
        case '-':
            number1 = substract(number1, number2);
            display.textContent = number1;
            break;
        case '*':
            number1 = multiply(number1, number2);
            display.textContent = number1;
            break;
        case '/':
            number1 = divide(number1, number2);
            display.textContent = number1;
            break;
    }

    operation1 = '';
    number2 = 0;

}

function multiply(num1, num2) {
    return Math.round((num1 * num2) * 10) / 10;
}

function substract(num1, num2) {
    return Math.round((num1 - num2) * 10) / 10;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 10) / 10;
}

function add(num1, num2) {
    return Math.round((num1 + num2) * 10) / 10;

}