function fibo(n) {
  if ( n===1 || n===2 ) return 1;
  else if( n===0 ) return 0;
  else return fibo(n-1)+fibo(n-2);
}

console.log(fibo(8));
console.log(fibo(3));
console.log(fibo(2));
console.log(fibo(1));
console.log(fibo(0));
