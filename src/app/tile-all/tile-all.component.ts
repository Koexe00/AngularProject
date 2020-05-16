import { Component, OnInit } from '@angular/core';
import {MyReceiverService} from '../servises/myReceiver.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-tile-all',
  templateUrl: './tile-all.component.html',
  styleUrls: ['./tile-all.component.css']
})
export class TileAllComponent implements OnInit {

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
