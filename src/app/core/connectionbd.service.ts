import { Injectable } from '@angular/core';
import { createConnection, Connection } from 'typeorm';
import { Items } from '../shared/models';

@Injectable()
export class ConnectionbdService {

  conn_mysql: Connection;

  constructor() {
    console.log("connectionbd.service/constructor/IN");

    this.connect();

    console.log("connectionbd.service/constructor/OUT");
  }

  async connect() {
    console.log("connectionbd.service/connect/IN");

    if (this.conn_mysql == null) {
      this.conn_mysql =  await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "editini",
        password: "",
        database: "edit-ini",
        entities: [Items]
      });

    } else {
      console.log("Mysql is already connected.")
    }


    if (this.conn_mysql.isConnected) {
      console.log("Mysql Connected!");
    }

    console.log("connectionbd.service/connect/OUT");
  }



}
