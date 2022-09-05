const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541 
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  });

  conn.on("connect", () => {
    conn.write('Name: SNK');
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