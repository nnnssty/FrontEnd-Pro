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
    try {
        document.getElementById('result').innerText = `Result: ${calc[operation](num1, num2)}`;
    } catch (error) {
        document.getElementById('result').innerText = error.message;
    }
}