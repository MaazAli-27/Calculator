const display = document.getElementById("display");

function appendToDisplay(value) {

    // Backspace
    if (value === "⌫") {
        display.value = display.value.slice(0, -1);
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
