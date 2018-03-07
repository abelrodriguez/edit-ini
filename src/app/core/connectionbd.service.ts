import { Injectable } from '@angular/core';
import { createConnection, Connection } from 'typeorm';
import { Items, Files, Filetype } from '../shared/models';

@Injectable()
export class ConnectionbdService {

  conn_mysql: Connection;


  constructor() {
    this.connect();
  }

  async connect() {

    if (this.conn_mysql == null) {
      this.conn_mysql =  await createConnection({
        name: 'mysql',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'editini',
        password: '',
        database: 'edit-ini',
        synchronize: true,
        entities: [ Items, Files, Filetype ]
      });

    //   createConnection({
    //     name: 'mysql',
    //     type: 'mysql',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'editini',
    //     password: '',
    //     database: 'edit-ini',
    //     entities: [ Items, Files, Filetype ],
    //     synchronize: true
    //   }).then(conn => {
    //     console.log('Connected!');
    //     this.conn_mysql = conn;
    //   }).catch(error => {
    //     console.log('Connection error: ' + error);
    //   });

    } else {
      console.log('Mysql is already connected.')
    }

    if (this.conn_mysql != null) {
      if (this.conn_mysql.isConnected) {
        console.log('Mysql Connected!');
      }
    }
  }

}
