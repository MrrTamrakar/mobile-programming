function calculateResult() {
  
  let english = Number(document.getElementById("english").value);
  let nepali = Number(document.getElementById("nepali").value);
  let math = Number(document.getElementById("math").value);
  let science = Number(document.getElementById("science").value);
  let social = Number(document.getElementById("social").value);
  let health = Number(document.getElementById("health").value);
  let computer = Number(document.getElementById("computer").value);
  let account = Number(document.getElementById("account").value);

  let totalMarks = english + nepali + math + science + social + health + computer + account;

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

  let resultText = document.getElementById("resultText");
  resultText.innerHTML = "Total Marks: " + totalMarks + "/800 | Result: <span style='color:" + color + ";'>" + division + "</span>";
}