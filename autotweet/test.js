const fs = require("fs");

const text = fs.readFileSync("keys.json", "utf-8");
console.log(text);
const json = JSON.parse(text);
console.log(json);

const text2 = fs.readFileSync("text","utf-8");
console.log(text2);
