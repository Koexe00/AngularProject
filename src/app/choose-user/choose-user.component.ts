import {Component, Input, OnInit} from '@angular/core';
import {MyReceiverService} from '../servises/myReceiver.service';
import {Person} from '../models/person';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent implements OnInit {

  id: string;
  person: Person;
  public load: boolean;
  constructor(private route: ActivatedRoute, private service: MyReceiverService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getOnePersonByID(this.id).subscribe(value => {
      this.person = value;
      this.load = true;
    }, error => {
      console.log('ERROR');
    });
  }

}
