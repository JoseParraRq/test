import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:'',
    component:UserListComponent
  },
  {
    path:':id',//para este tipo de rutas colocar el dos puntos(:) antes del id de esta manera :id
    component:UserDetailComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
