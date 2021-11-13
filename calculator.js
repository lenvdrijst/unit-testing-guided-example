function sum(a, b) {
  if (!a && !b) return 0;
  if (!b) return a + 0;
  if (!a) return 0 + b;
  return a + b;
  
}

function subtract(a, b) {
  if (!a && !b) return 0;
  if (!b) return a - 0;
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

function multiply(a, b) {
  if (a < 0 || b < 0) return -a * -b; 
  if (b === 0) return 0;
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
