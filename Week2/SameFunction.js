function calculate(operation) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let Result;

    if (operation === 'add') {
        Result = num1 + num2;
    } else if (operation === 'sub') {
        Result = num1 - num2;
    } else if (operation === 'mul') {
        Result = num1 * num2;
    }

    document.getElementById("result").innerText = "Result: " + Result;
}