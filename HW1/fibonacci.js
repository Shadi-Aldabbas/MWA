fibonacci = number => Math.abs(number) <= 2 ? 1 : fibonacci(Math.abs(number) - 1) + fibonacci(Math.abs(number) - 2);
console.log("Fibonacci of 30  is " + fibonacci(30));
console.log("Fibonacci of -15 is " + fibonacci(-15));
