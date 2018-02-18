// Conceptual Service: Connection using TypeORM

import { Injectable } from '@angular/core';
import { createConnection, Connection } from 'typeorm';
import { Items } from '../shared/models/items.entity';

@Injectable()
export class MysqlTypeormService {

  conn: Connection;

  constructor() {
  }

  async conectar() {

    if (this.conn == null) {
      this.conn =  await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "editini",
        password: "",
        database: "edit-ini",
        entities: [Items]
      });

    } else {
      console.log("Is already connected.")
    }


    if (this.conn.isConnected) {
      console.log("Connected!");
    }
  }

  crearItem() {
    let item: Items = new Items();

    item.item_name = "Test";
    item.description ="Description test";
    item.default_value = "Default value is zero";

    let itemRepository = this.conn.getRepository(Items);

    itemRepository.save(item);
    console.log("Saved!");


  }


}
