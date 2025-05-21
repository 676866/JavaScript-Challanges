// Challenge 1: Sum of two numbers
const addition = (num1, num2) => {
  return (sum = num1 + num2);
};
console.log(addition(4, 2));

// Challenge 2:Convert Minutes into Seconds
const Convert = (minutes) => minutes * 60;
console.log(Convert(5));

// Challenge 3: Perimeter of a Rectangle
const perimeter = (length, width) => {
  return 2 * (length + width);
};
console.log(perimeter(10, 5));
console.log(perimeter(20, 20));

// Challenge 4:Check Negative
const isNegative = (Number) => {
  if (Number < 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};
isNegative(-23);
isNegative(50);

// Challenge 5:Can I Drive
function CanDrive(name, age) {
  if (age >= 18) console.log(`${name}  is old enough to drive.`);
  else {
    console.log(`${name} is not old enough to drive yet.`);
  }
}
CanDrive("Tasha", 12);
CanDrive("Anto", 23);

// Challenge 6. Largest Number
const findLargest = (a, b, c) => {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};

findLargest(10, 6, 5);
findLargest(5, 6, 2);
findLargest(2, 6, 5);

// Challenge 7. BMI Calculator
function calculateBMI(weight, height) {
  let BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log(`Your BMI is ${BMI} - underweight`);
  } else if (BMI <= 24.9) {
    console.log(`Your BMI is ${BMI} -Normal weight`);
  } else if (BMI <= 29.9) {
    console.log(`Your BMI is ${BMI} -Overweight`);
  } else {
    console.log(`Your BMI is ${BMI} -Obese`);
  }
}
calculateBMI(22, 1.6);
calculateBMI(45, 1.6);
calculateBMI(72, 1.6);
calculateBMI(90, 1.6);

// Challenge 8.Greeting Based On Time
const greetUser = (name, hour) => {
  if (hour >= 5 && hour <= 11) {
    console.log(`Good morning, ${name}`);
  } else if (hour >= 12 && hour <= 17) {
    console.log(`Good afternoon, ${name}`);
  } else if (hour >= 18 && hour <= 21) {
    console.log(`Good evening, ${name}`);
  } else {
    console.log(`Good night, ${name}`);
  }
};
greetUser("Alice", 1);
greetUser("Alice", 6);
greetUser("Alice", 14);
greetUser("Alice", 19);

// Challenge 9. FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log;
    `${number}`;
  }
}
fizzBuzzCheck(10);
fizzBuzzCheck(3);
fizzBuzzCheck(15);
fizzBuzzCheck(27);

// Challenge 10. Perimeter 2
const Perimeter = (l, num) => {
  if (l == "s") {
    let perimeter = 4 * num;
    console.log(perimeter);
  } else if (l == "c") {
    console.log(6.28 * num);
  } else {
    console.log("Invalid selection");
  }
};
Perimeter("s", 5);
Perimeter("c", 3);
Perimeter("x", 7);

// Challenge 11. Sum of Even Numbers
const sumEvenNumbers = (n) => {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  console.log(sum);
};
sumEvenNumbers(6);
sumEvenNumbers(10);
sumEvenNumbers(5);

// Challenge 12. Multiply by Itself
const powerUp = (num, times = 0) => {
  let result = 1;
  for (let i = 1; i <= times; i++) {
    result *= num;
  }
  console.log(result);
};
powerUp(2, 3);
powerUp(5, 0);

// Challenge 13. Factorial Calculator
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log(result);
};
factorial(0);
factorial(5);
factorial(6);

// Challenge 14. Multiple Sum
const sumMultiples = (n, divisor) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor == 0) {
      sum += i;
    }
  }
  console.log(sum);
};
sumMultiples(10, 2);
sumMultiples(12, 4);

// Challenge 15. Sum of Digits
const sumDigits = (num) => {
  sum = 0;
  for (let i = 0; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }
  console.log(sum);
};
sumDigits(4567);
sumDigits(1111);
