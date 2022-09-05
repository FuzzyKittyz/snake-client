const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function () {
  const conn = net.createConnection({
    host: IP, //uses this var instead of actual ip
    port: PORT, //uses instead of actual port
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")// logs after a successful connection has been made to the server
  });

  conn.on("connect", () => {
    conn.write('Name: SNK'); //gives a name to the snake 
  });

  //conn.on("connect", () => {
    //conn.write("Move: up");
  //});

  conn.on("data", (data) => {
    console.log(data);
  });

  
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;