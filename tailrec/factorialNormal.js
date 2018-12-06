function factorialNormal(n){
  if(n===1) return 1;
  else return n*factorialNormal(n-1);
}

console.log("10: ", factorialNormal(10))
console.log("100: ", factorialNormal(100))
console.log("1000: ", factorialNormal(1000))
console.log("10000: ", factorialNormal(10000))
console.log("100000: ", factorialNormal(100000))
console.log("1000000: ", factorialNormal(1000000))
module.exports = factorialNormal;
