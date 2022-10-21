import { Component, Input, OnInit } from '@angular/core';
import { ITitleH1 } from './title-h1.metadata';

@Component({
  selector: 'app-title-h1',//lo copiamos y lo pegamos en user-list.html
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit {
  @Input() text='';
  @Input() type:'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';

  constructor() { }

  ngOnInit(){
  }

}
