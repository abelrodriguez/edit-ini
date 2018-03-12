import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  file_pk: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.file_pk = params['file_pk'];
    });
  }

  ngOnInit() {
  }

}
