// task 1: practice mathematical operators
const firstNumber = 25;
const secondNumber = 4;

const addition = firstNumber + secondNumber;
console.log(addition);

const subtraction = firstNumber - secondNumber;
console.log(subtraction);

const multiplication = firstNumber * secondNumber;
console.log(multiplication);

const division = firstNumber / secondNumber;
console.log(division);

const remainder = firstNumber % secondNumber;
console.log(remainder);

const power = Math.pow(secondNumber, 3);
console.log(power);

// task 2: increase and decrease numbers

let score = 10;
score++;
console.log(score);

score += 5;
console.log(score);

score--;
console.log(score);

score -= 3;
console.log(score);

// task 3: practice Math methods

const price = 18.75;
const negativeNumber = -45;

const roundedPrice = Math.round(price);
console.log(roundedPrice);  

const roundedDownPrice = Math.floor(price);
console.log(roundedDownPrice);

const roundedUpPrice = Math.ceil(price);
console.log(roundedUpPrice);

const truncatedPrice = Math.trunc(price);
console.log(truncatedPrice);

const absoluteValue = Math.abs(negativeNumber);
console.log(absoluteValue);

const greatestNumber = Math.max(12, 45, 7);
console.log(greatestNumber);

const smallestNumber = Math.min(12, 45, 7);
console.log(smallestNumber);

const powerOfFive = Math.pow(5, 2);
console.log(powerOfFive);

const squareRoot = Math.sqrt(81);
console.log(squareRoot);

const randomNumber = Math.random();
console.log(randomNumber);  

// task 4: predict, then check

console.log(5 + 2 * 3); // Predicted: 11
console.log((5 + 2) * 3); // Predicted: 21 

// The results are different because of the order it was written. In the first one, multiplication is performed before addition, resulting in 5 + (2 * 3) = 5 + 6 = 11. In the second expression, brackets change the order of operations, so addition is performed first: (5 + 2) * 3 = 7 * 3 = 21.


