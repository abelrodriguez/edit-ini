import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  file_pk: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.file_pk = params['file_pk'];
    });
  }

  ngOnInit() {
  }

}
