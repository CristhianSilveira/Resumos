try {
    adddlert("Welcome guest!"); //O JavaScript detecta addledrt como um erro e executa o código catch para tratá-lo.
}
  catch(err) {
   console.log(err.message);
}

// RangeError:
console.log("RangeError:");
let num = 1;
try {
  num.toPrecision(500);
}
catch(err) {
  console.log(err.name);
}

// ReferenceError:
console.log("ReferenceError:");
let x = 5;
try {
  x = y + 1;
}
catch(err) {
  console.log(err.name);
}

// SyntaxError:
console.log("SyntaxError:");
try {
    eval("alert('Hello)");
}
catch(err) {
    console.log(err.name);
}

// TypeError:
console.log("TypeError:");
let num1 = 1;
try {
  num.toUpperCase();
}
catch(err) {
  console.log(err.name);
}

// URIError:
console.log("URIError:");
try {
    decodeURI("%%%");
}
catch(err) {
    console.log(err.name);
}