// 1. receivesAFunction should call the passed-in callback
function receivesAFunction(callback) {
  callback();
}

// // 2. returnsANamedFunction should return a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function.");
  }
  return namedFunction;
}

// // 3. returnsAnAnonymousFunction should return an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function.");
  };
}
