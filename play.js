const net = require("net");
const connect  = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");// logs as youre connecting 

setupInput(connect())// passes the connect fuinction as an argument in setupInput 