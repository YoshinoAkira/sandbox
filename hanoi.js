var num = 0;
function hanoi(n,from,to,work) {
  if(n>0) {
    hanoi(n-1,from,work,to);
    num++;
//    console.log(`${num}手目:${n}番目の円盤を${from}から${to}へ移動`);
    hanoi(n-1,work,to,from);
  }
}

hanoi(20,"A","B","C");
console.log(num)
