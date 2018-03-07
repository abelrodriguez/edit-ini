import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Files } from '../../shared/models';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  filelist: Files[] = [];

  constructor(private service: SidebarService,
              private router: Router) {
  }

  ngOnInit() {

  }

  getFileList() {
    this.service.getFilelist().then(files => {
      this.filelist = files;
    });
  }

  openFile(file_pk: number) {
    this.router.navigate( ['/editor', file_pk ]);
  }

}
