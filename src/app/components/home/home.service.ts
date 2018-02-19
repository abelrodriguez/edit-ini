import { Injectable } from '@angular/core';
import { getConnection } from 'typeorm';
import { Items } from '../../shared/models';


@Injectable()
export class HomeService {

  constructor() { }

  async getItems() {
    let conn = getConnection();

    let item = await conn.getRepository(Items).findOneById(11);

    console.log(item);


  }

}
