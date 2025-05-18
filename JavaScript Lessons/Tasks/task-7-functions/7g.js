// 7g. Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles'). 

// NOTE: 1 mile = 1.6 km (approximately).
//   - convertLength(50, 'miles', 'km') => '80 km'
//   - convertLength(32, 'km', 'miles') => '20 miles'
//   - convertLength(50, 'km', 'km') => '50 km'

function convertLength(length, from, to) {
  if (from === 'miles' && to == 'km') {
    return `${length * 1.6} km`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} miles`;
  } else if (from === to) { 
    return `${length} ${to}`;
  }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));