function calculateSum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let sum = Number(num1) + Number(num2);
    document.getElementById("result").innerText = "Result: " + sum;
}

function calculateMul() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let mul = Number(num1) * Number(num2);
    document.getElementById("result").innerText = "Result: " + mul;
}

function calculateSub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let sub = Number(num1) - Number(num2);
    document.getElementById("result").innerText = "Result: " + sub;
}