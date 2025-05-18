// 7d. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit
//   - Formula: Fahrenheit = (Celsius * 9 / 5) + 32;
//   - convertToFahrenheit(25) => 77

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

console.log(`${convertToFahrenheit(25)}°F`);