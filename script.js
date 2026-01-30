function openModal() {
  document.getElementById("bmiModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bmiModal").style.display = "none";
  document.getElementById("result").innerText = "";
}  
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let heightCm = parseFloat(document.getElementById("height").value);

 
  let height = heightCm / 100;

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerText =
    `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
