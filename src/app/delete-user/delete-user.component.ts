import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyReceiverService} from '../servises/myReceiver.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  public id;
  public delete = false;
  constructor(private route: ActivatedRoute, private service: MyReceiverService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.deletePerson(this.id).subscribe(value => {
    this.delete = true;
    }, error => {
      console.log('ERROR');
    });
  }

}
