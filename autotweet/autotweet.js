const twitter = require("twitter");
const fs = require("fs");

const keys = JSON.parse(fs.readFileSync("keys.json","utf-8"));
const text = fs.readFileSync("text.txt","utf-8");

const bot = new twitter(keys);

const tweet = () => {
  const random = Math.random();
  bot.post("statuses/update", {status: `${text} ${random}`}, (error, tweet, response) => {
    if(!error) {
      console.log("successfully tweeted!");
    }
    else {
      temporarilySwitchOff(1000 * 60 * 5);
      console.log("error", error);
    }
  });
}

let id = null;
const switchOn = (interval = 1000) => {
  console.log("switch on");
  id = setInterval(tweet, interval);
}

const switchOff = () => {
  console.log("switch off");
  clearInterval(id);
  id = null;
}

const temporarilySwitchOff = (lag = 1000 * 60 * 10) => {
  switchOff();
  setTimeout(switchOn, lag);
}

switchOn();


