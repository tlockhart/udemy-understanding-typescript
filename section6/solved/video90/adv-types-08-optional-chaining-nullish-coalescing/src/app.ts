const userInput = null;

// Example 1: use a fall back, but will execute fallback for empty string
// const storedData = userInput || 'DEFAULT';

// Example2: If the value is null or undefined only, use the fallback
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);