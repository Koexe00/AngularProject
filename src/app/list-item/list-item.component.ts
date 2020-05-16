import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../models/person';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

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
