const digits = document.querySelectorAll('#digit');
const operators = document.querySelectorAll('#operator');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');
const backBtn = document.getElementById('back');
const powerBtn = document.getElementById('powerBtn');
const display = document.getElementById('displaytext');
const lastOp = document.getElementById('last-calculation');

let powerOn = true;
let number1 = NaN;
let number2 = NaN;
let temp = '';
let operation = '';
let firstOperation = true;

//All digits
digits.forEach(digit => digit.addEventListener('click', digit => operate(digit.target.value)));
//All operators(+,-,*,/)
operators.forEach(button => button.addEventListener('click', button => addOperator(button.target.value)));

powerBtn.addEventListener('click', powerOnOff);
equalBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', deleteLast);
decimalBtn.addEventListener('click', addDecimal);

//Start at power off
powerOnOff();

//Keyboard support
document.addEventListener('keydown', (event) => {

    const keyName = event.key;

    if(keyName == 'Escape') powerOnOff();

    if(powerOn)
    {
            switch(keyName)
            {
                case '0':
                    operate(keyName);
                    break;
                case '1':
                    operate(keyName);
                    break;
                case '2':
                    operate(keyName);
                    break;
                case '3':
                    operate(keyName);
                    break;
                case '4':
                    operate(keyName);
                    break;
                case '5':
                    operate(keyName);
                    break;
                case '6':
                    operate(keyName);
                    break;
                case '7':
                    operate(keyName);
                    break;
                case '8':
                    operate(keyName);
                    break;
                case '9':
                    operate(keyName);
                    break;
                case 'Enter':
                    equalBtn.focus();
                    calculate();
                    break;
                case '.':
                    addDecimal();
                    break;
                case 'Backspace':
                    deleteLast();
                    break;
                case 'Delete':
                    clear();
                    break;
                case '+':
                    addOperator(keyName);
                    break;
                case '-':
                    addOperator(keyName);
                    break;
                case '*':
                    addOperator(keyName);
                    break;
                case '/':
                    addOperator(keyName);
                    break;
                    
            }
    }


});

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

//Delete last typed digit
function deleteLast()
{
    if(display.textContent == number1 && display.textContent != '')
    {
        number1 = Number(display.textContent.slice(0, -1));
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
        temp += '.';
        display.textContent += '.';
    }
}

//Set the operator to use in calculation
function addOperator(operator) 
{   
    if(number1 != 0 || display.textContent.includes(operators.forEach(button => button.value)))
    {
        if(temp == '')
        {
            operation = operator;
            display.textContent += operator;
        }
        else
        {
            calculate();
            operation = operator;
            display.textContent += operator;
        }
        
    }
    if(temp != '' && number1 == 0)
    {
        operation = operator;
        number1 = Number(temp);
        temp = '';
        display.textContent += operator;
    }
    
}

//Only digits
function operate(input) 
{
if(display.textContent == '0') display.textContent = '';
if(operation == '' && number1 != 0)
{
    clear();
}

if(number1 == Infinity)
{
    number1 = 0;
    display.textContent = '';
}



    display.textContent += input;
    temp += input;
    
}

//Clear everything
function clear() {
    temp = '';
    number1 = 0;
    number2 = 0;
    operation = '';
    display.textContent = '';
    lastOp.textContent = '';
}

//Makes calculation
function calculate() 
{

if(temp == '') return;

number2 = Number(temp);
temp = '';

    switch (operation) {
        case '+':
            lastOp.textContent = number1 + ' + ' + number2 + ' =';
            number1 = add(number1, number2);
            display.textContent = number1;
            break;
        case '-':
            lastOp.textContent = number1 + ' - ' + number2 + ' =';
            number1 = substract(number1, number2);
            display.textContent = number1;
            break;
        case '*':
            lastOp.textContent = number1 + ' * ' + number2 + ' =';
            number1 = multiply(number1, number2);
            display.textContent = number1;
            break;
        case '/':
            lastOp.textContent = number1 + ' / ' + number2 + ' =';
            number1 = divide(number1, number2);
            display.textContent = number1;
            break;
    }

    number2 = 0;
    operation = '';

}

function multiply(num1, num2) 
{
    return Math.round((num1 * num2) * 10) / 10;
}

function substract(num1, num2) 
{
    return Math.round((num1 - num2) * 10) / 10;
}

function divide(num1, num2) 
{
    return Math.round((num1 / num2) * 10) / 10;
}

function add(num1, num2) 
{
    return Math.round((num1 + num2) * 10) / 10;
}