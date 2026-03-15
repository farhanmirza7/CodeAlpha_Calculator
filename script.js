const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.innerText === "0") {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") display.innerText = "0";
}

function calculate() {
    try {
        // eval handles basic arithmetic operations: +, -, *, /
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

// Bonus: Keyboard support
document.addEventListener('keydown', (e) => {
    if (isFinite(e.key)) appendToDisplay(e.key);
    if (['+', '-', '*', '/'].includes(e.key)) appendToDisplay(e.key);
    if (e.key === 'Enter') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});