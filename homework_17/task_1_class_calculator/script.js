class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const calc = new Calculator();

function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    try {
        switch (operation) {
            case 'add':
                result = calc.add(num1, num2);
                break;
            case 'subtract':
                result = calc.subtract(num1, num2);
                break;
            case 'multiply':
                result = calc.multiply(num1, num2);
                break;
            case 'divide':
                result = calc.divide(num1, num2);
                break;
        }
        document.getElementById('result').innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = error.message;
    }
}
