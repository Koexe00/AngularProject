import {Component, Inject, Input, OnInit} from '@angular/core';
import {Person} from '../models/person';
import {image} from '../image';
import {MyReceiverService} from '../servises/myReceiver.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  currentimage: string;
  public person: Person;
  public img = image;
  constructor(private service: MyReceiverService) {}

  ngOnInit(): void {
    this.person = new Person('', '', '', 0, '', '');
  }

  submitForm(){
    this.person.image = this.currentimage;
    this.service.createPerson(this.person).subscribe(data => {
  console.log(data);

    }, error => {
      console.log ('error with user');
      console.log(error);
    });
  }

}
