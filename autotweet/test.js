const fs = require("fs");

const text = fs.readFileSync("keys.json", "utf-8");
console.log(text);
const json = JSON.parse(text);
console.log(json);

const text2 = fs.readFileSync("text.txt","utf-8");
console.log(text2);

console.log(process.argv);
const a = process.argv[2] || "aiueo";
console.log(a);
