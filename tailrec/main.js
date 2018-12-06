/*
 * safari以外では末尾再帰最適化が対応していない
 *
 */
const factorialTailrec = require("./factorialTailrec");
const factorialNormal = require("./factorialNormal");
const { performance } = require("perf_hooks");

let normalTimeSum = 0;
let tailrecTimeSum = 0;
const num = 1;
for(let i=0; i<num; i++) {
  let startTime = performance.now();
  const result1 = factorialNormal(1000);
  let endTime = performance.now();
  normalTimeSum += endTime - startTime;

  startTime = performance.now();
  const result2 = factorialTailrec(1000);
  endTime = performance.now();
  tailrecTimeSum += endTime - startTime;
}

console.log(`通常再帰の平均処理時間: ${normalTimeSum / num}`);
console.log(`末尾再帰の平均処理時間: ${tailrecTimeSum / num}`);

