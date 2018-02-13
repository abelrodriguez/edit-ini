import { createConnection, Connection } from 'typeorm';


let conn: Connection;

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "editini",
  password: "",
  database: "edit-ini",
  synchronize: true,
  entitySchemas: [
      "./app/model/entities/**/*.ts"
  ]
}).then(function (connection) {
  console.log("Connection succefully!")

  conn = connection;
});

function isConnected() {
  if (conn.isConnected) {
    console.log("Connected!");
  } else {
    console.log("Not connected");
  }
}
