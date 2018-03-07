import { Injectable } from '@angular/core';
import { Files } from '../../shared/models';
import { getConnection } from 'typeorm';


@Injectable()
export class SidebarService {

  // Dummy data
  private filelist: Files[] = [];

  constructor() {
  }

  async getFilelist() {

    const filesRepository = getConnection('mysql').getRepository(Files);

    this.filelist = await filesRepository.find();

    return this.filelist;
  }
}
