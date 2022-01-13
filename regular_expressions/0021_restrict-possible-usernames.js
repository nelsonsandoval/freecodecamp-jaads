let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Change this line
let result = userCheck.test(username);
//console.log(result); /^[a-z][\d|a-z][\d|a-z]*$/i