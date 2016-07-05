function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(4) ); 
alert( fib(5) ); 
alert( fib(6) ); 
alert( fib(7) );
alert( fib(8) );
alert( fib(9) );