// Import the BasicCard constructor
var BasicCard = require("./BasicCard");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);