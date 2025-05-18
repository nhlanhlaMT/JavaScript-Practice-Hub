// 7c. Try calling greet() without a name (it will display 'Hello undefine!')
// Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.

function greet(name) {
  if (!name) {
    console.log('Hi there!');
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet();
greet('Jones');