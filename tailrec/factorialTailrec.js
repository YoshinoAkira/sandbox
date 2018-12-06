function factorialTailrec(n, acc=1) {
  if(n===1) return acc;
  else return factorialTailrec(n-1, n*acc)
}

for(let i = 10; i <= 1000000; i*=10) {
  console.log(`${i}: `, factorialTailrec(i));
}

module.exports = factorialTailrec;
