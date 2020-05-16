import { Component, OnInit } from '@angular/core';
import {MyReceiverService} from '../servises/myReceiver.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  constructor(private service: MyReceiverService) {}
  people: Person[];

  ngOnInit(): void {
    this.service.getAllListOfPeople().subscribe(data => {
      this.people = data;

    }, error => {
      console.log ('error with user');
      console.log(error);
    });
    console.log('lista');
  }
}
