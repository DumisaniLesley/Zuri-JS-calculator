let num1;
let num2;

num1 = parseInt(prompt("Enter first number"));
num2 = parseInt(prompt("Enter second number"));
const choice = prompt(
  "Enter choice of arithmetic to perform. sum for addition, sub for Subtraction, times for Multiplication and divide for division"
);

if (choice === "sum") {
  let sum = num1 + num2;
  alert("the answer is: " + sum);
} else if (choice == "sub") {
  let sub = num1 - num2;
  alert("the answer is: " + sub);
} else if (choice == "times") {
  let times = num1 * num2;
  alert("the answer is: " + times);
} else if (choice == "divide") {
  let div = num1 / num2;
  alert("the answer is: " + div);
} else {
  alert("Invalid choice");
}
