// index.js

// Function receivesAFunction
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Function returnsANamedFunction
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function.");
    }
    // Return the named function
    return namedFunction;
  }
  
  // Function returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  

  