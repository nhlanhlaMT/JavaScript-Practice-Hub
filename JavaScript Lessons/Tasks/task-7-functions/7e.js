// 7d. Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius
//   - Formula: Celsius = (Fahrenheit - 32) * 5 / 9
//   - convertToCelsius(86) => 30

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(`${convertToCelsius(86)}°C`);