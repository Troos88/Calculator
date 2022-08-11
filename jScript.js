const buttons = document.querySelectorAll('button');
const display = document.getElementById('displaytext');

let calculation = '';

buttons.forEach(button => button.addEventListener('click', EnterText));

function EnterText()
{
    calculation += this.value;

    display.textContent = calculation;

    if(this.value == '=') Calculate(calculation);
}

function multiply(num1, num2)
{

}

function substract(num1, num2)
{

}

function divide(num1, num2)
{

}

function add(num1, num2)
{

}