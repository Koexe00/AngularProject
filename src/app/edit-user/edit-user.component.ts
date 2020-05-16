import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../models/person';
import {MyReceiverService} from '../servises/myReceiver.service';
import {image} from '../image';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: string;
  currentimage: string;
  public img = image;
  @Input() person: Person;
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

  submitForm(){
    this.person.image = this.currentimage;
    this.service.editPerson(this.person).subscribe(data => {
      console.log(data);

    }, error => {
      console.log ('error with user');
      console.log(error);
    });
  }

}
