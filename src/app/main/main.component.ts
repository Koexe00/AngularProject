import { Component, OnInit } from '@angular/core';
import {Person} from '../models/person';
import {MyReceiverService} from '../servises/myReceiver.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: MyReceiverService) {}
  people: Person[];

  ngOnInit(): void {
      this.service.getAllListOfPeople().subscribe(data => {
      this.people = data;

    }, error => {
      console.log ('error with user');
      console.log(error);
      });

  }

}
