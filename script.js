const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            display.textContent = '0';
        } else if (value === '=') {
            secondOperand = currentInput;
            display.textContent = calculate(firstOperand, secondOperand, operator);
            firstOperand = display.textContent;
            currentInput = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstOperand && currentInput && operator) {
                secondOperand = currentInput;
                firstOperand = calculate(firstOperand, secondOperand, operator);
                display.textContent = firstOperand;
            } else {
                firstOperand = currentInput;
            }
            operator = value;
            currentInput = '';
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(first, second, operator) {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        default:
            return 0;
    }
}
