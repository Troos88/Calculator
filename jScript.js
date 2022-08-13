const digits = document.querySelectorAll('#digit');
const operators = document.querySelectorAll('#operator');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');
const backBtn = document.getElementById('back');
const powerBtn = document.getElementById('powerBtn');
const display = document.getElementById('displaytext');

let powerOn = true;
let number1 = NaN;
let number2 = NaN;
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
        document.querySelectorAll('button').forEach(button => {
            if(button !== powerBtn)
            {
                button.disabled = false;
            }
        });
    }
    else
    {    
        clear();
        display.parentElement.removeAttribute('id', 'powerOn');
        document.querySelectorAll('button').forEach(button => {
            if(button !== powerBtn)
            {
                button.disabled = true;
            }
        });
    }
    
}

function deleteLast()
{
    if(display.textContent == number1)
    {
        number1 = display.textContent.slice(0, -1);
        display.textContent = number1;
    }
    else
    {
        temp = temp.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
    
}

function addDecimal()
{
    if(!temp.includes('.') && !temp.length == 0)
    {
        temp += this.value;
        display.textContent += this.value;
    }
}

function addOperator() 
{
    if(display.textContent.includes(operation1) && operation1 != '')
    {
        return;
    }
    if(number1 != 0 || display.textContent.includes(operators.forEach(button => button.value)))
    {
        if(temp == '')
        {
            operation1 = this.value;
            display.textContent += this.value;
        }
        else
        {
            calculate();
            operation1 = this.value;
            display.textContent += this.value;
        }
        
    }
    if(temp != '' && number1 == 0)
    {
        operation1 = this.value;
        number1 = Number(temp);
        temp = '';
        display.textContent += this.value;
    }
    
}


function operate() 
{

if(display.textContent == '0') display.textContent = '';
if(operation1 == '' && number1 != 0)
{
    clear();
}

if(number1 == Infinity)
{
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
    display.textContent = '';
}

function calculate() 
{

if(temp == '') return;

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

    number2 = 0;
    operation1 = '';

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