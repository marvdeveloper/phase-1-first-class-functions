// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback(); // Calls the passed function
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  