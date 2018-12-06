function fiboTailCall(n, a=1, b=0) {
  if (n === 0) return 0;
  else if (n === 1) return a;
  else return fiboTailCall(n-1, a+b, a);
}

for(let i=0; i<10; i++) {
  console.log(fiboTailCall(i));
}
