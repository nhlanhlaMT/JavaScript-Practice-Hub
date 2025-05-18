// 7h. Update convertLength to support converting between km, miles, and also feet.

/* NOTE: 1 miles= 5280 ft, 1 km = 3281 ft (approximately)
  - convertLength(5, 'miles', 'km') => '8 km'
  - convertLength(5, 'miles', 'ft') => '26400 ft'
  - convertLength(5, 'km', 'ft') => '16405 ft' */

function convertLength(length, from, to) {
  if (from === 'miles' && to == 'km') {
    return `${length * 1.6} km`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} miles`;
  } else if (from === to) { 
    return `${length} ${to}`;
  } 
  
  else if (from === 'miles' && to === 'km') {
    return `${length * 1.6} km`;
  } else if (from == 'miles' && to === 'ft') {
    return `${length * 5280} ft`;
  } else if (from === 'km' && to === 'ft') {
    return `${length * 3281} ft`;
  }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));