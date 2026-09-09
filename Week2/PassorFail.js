const form = document.getElementById("marksForm");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(".mark-input");
  let totalMarks = 0;

  for (let i = 0; i < inputs.length; i++) {
    totalMarks = totalMarks + Number(inputs[i].value);
  }

  let division = "";
  let color = "";

  if (totalMarks >= 600) {
    division = "Distinction";
    color = "green";
  } else if (totalMarks >= 500) {
    division = "1st Division";
    color = "green";
  } else if (totalMarks >= 400) {
    division = "2nd Division";
    color = "green";
  } else if (totalMarks >= 300) {
    division = "3rd Division";
    color = "green";
  } else {
    division = "Fail";
    color = "red";
  }

  resultText.style.color = "black";
  resultText.innerHTML = "Total Marks: " + totalMarks + "/800 | Result: <span style='color:" + color + ";'>" + division + "</span>";
});