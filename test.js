const readline = require('readline');

class Calculator {
    constructor(num1, num2) {
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        if (this.num2 != 0) {
            return this.num1 / this.num2;
        } else {
            console.log('Error! Division by zero is not allowed.');
            process.exit(1);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            const calculator = new Calculator(num1, num2);
            let result;
            switch (operator) {
                case '+':
                    result = calculator.add();
                    break;
                case '-':
                    result = calculator.subtract();
                    break;
                case '*':
                    result = calculator.multiply();
                    break;
                case '/':
                    result = calculator.divide();
                    break;
                default:
                    console.log('Invalid operator! Please enter one of +, -, *, /.');
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});