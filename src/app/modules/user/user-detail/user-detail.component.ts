import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@data/services/api/user.service';
//import { USERS_DATA } from '@data/constants/users.const';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 public users : ICardUser[];
  public id: number;
public currentUser?:ICardUser;
  constructor(
    public route: ActivatedRoute,
    private userservice:UserService
  ) {
  /*
    let idObject = this.route.snapshot.params;
    console.log(idObject);
    let obj: any[] = [];
    obj.push(idObject);
    console.log(obj);
    const map1 = obj.map((x) => {
    return {
      id:x.id
    }
    });
    for(var i = 0; i< map1.length;i++){
    var element = map1[i];
    console.log("here the idddd",element.id);
     this.id = element.id; //primer forma de traer el id que se me ocurrio viendo las propiedades
  }
*/


let idObject = this.route.snapshot.url;

for(var i=0; i<idObject.length;i++){
  var element = idObject[i];
  console.log("here the idddd",element.path);
  let enteroId = new Number(element.path);    
  console.log(enteroId.valueOf());
  this.id = enteroId.valueOf(); //segunda forma de traer el id que se me ocurrio viendo las propiedades
}
console.log({
id:this.id,
users: this.users  
});
}

  ngOnInit() {
  this.userservice.getUserById(this.id).subscribe( r=>{
    if(!r.error){
      console.log("here the data id",r.data);
      
      this.currentUser = r.data;
    }
  });
  }
}
