const net = require("net");

let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
 
  const handleUserInput = function (key) { //handles all inputs made by the user 
  if (key === '\u0003') {// for quiting the app
    process.exit();
  }
  if (key === 'w') {//next couple all deal with WASD movement
    connection.write('Move: up')
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === '1') {
    connection.write('Say: hello') // added messages to apear above the snake
  }
  if (key === '2') {
    connection.write('Say: why so bad?')
  }
};

stdin.on("data", handleUserInput);
return stdin
};

  module.exports = setupInput;