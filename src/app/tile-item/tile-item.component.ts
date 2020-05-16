import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../models/person';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.css']
})
export class TileItemComponent implements OnInit {

  @Input() person: Person;
 // @Output() showEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
/*
  events(){
    this.showEvent.emit(this.person.name + ' ' + this.person.surname);
  }*/
}
