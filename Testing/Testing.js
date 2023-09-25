function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }

  // return n === 0 ? 1 : n * factorial(n - 1);



}

function calculateFactorial() {
  const number = 9;
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.textContent = `Factorial of ${number} is ${result}`;
}

const countElement = document.getElementById("count");

function setCount() {
  let count = Number(countElement.textContent);
  count = count + 1;
  countElement.textContent = count;
}

function powerOf(number, power) {
  if (power === 0) {
    return 1;
  } else {
    return number * powerOf(number, power - 1);
  }
}
