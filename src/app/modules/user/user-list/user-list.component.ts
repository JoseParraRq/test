import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: ICardUser[] = [
    {
      name: 'Pachita',
      age: 2,
      description: 'desarrollador Blackend',
      avatar: 'https://media.istockphoto.com/photos/web-development-picture-id1134696790?s=612x612'
    },
    {
      name: 'Hopper',
      age: 1,
      description: 'desarrollador gordein',
      avatar: 'https://media.istockphoto.com/photos/web-development-picture-id1134696790?s=612x612'
    },
    {
      name: 'Nam Ra',
      age: 1,
      description: 'desarrollador fullCanson',
      avatar: 'https://media.istockphoto.com/photos/web-development-picture-id1134696790?s=612x612'
    }, {
      name: 'Jose Parra',
      age: 27,
      description: 'desarrollador fullstack',
      avatar: 'https://media.istockphoto.com/photos/web-development-picture-id1134696790?s=612x612',
      work:'desarrollador'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
