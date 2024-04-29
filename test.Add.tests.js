// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const Calculator = require('./calculator'); // Assuming your calculator class is in calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add method should return the sum of two numbers', () => {
        calculator.num1 = 5;
        calculator.num2 = 3;
        expect(calculator.add()).toBe(8);
    });

    test('add method should return the sum of two negative numbers', () => {
        calculator.num1 = -5;
        calculator.num2 = -3;
        expect(calculator.add()).toBe(-8);
    });

    test('add method should return 0 when adding a number and its negation', () => {
        calculator.num1 = 5;
        calculator.num2 = -5;
        expect(calculator.add()).toBe(0);
    });
});