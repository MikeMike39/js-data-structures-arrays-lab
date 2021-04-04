// A "Array[]" is created and assigned an initial value of ["Milo", "Otis", "Garfield"]
const drivers = ["Milo", "Otis", "Garfield"];

// Appends "push()" a driver to the end of the drivers array "Destructive" "Ralph"
function destructivelyAppendDriver(Ralph) {
  drivers.push(Ralph);
}

// Prepends "unshift()" a driver to the beginning of the drivers array  "Destructive" "Bob"
function destructivelyPrependDriver(Bob) {
  drivers.unshift(Bob);
}

// Removes "pop()" the last driver from the drivers array "Destructive" "Garfield"
function destructivelyRemoveLastDriver() {
  drivers.pop();
}

// Removes "shift()" the First driver from the drivers array "Destructive" "Milo"
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

// Appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name) {
  return [...drivers, name];
}

// Prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name) {
  return [name, ...drivers];
}

// Removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver() {
  return drivers.slice(1);
}

// Removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged'
function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}
