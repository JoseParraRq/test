import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
path:'', // ruta raiz, es decir ruta inicial
redirectTo:'/panel/user', //esta nos redidire a esta ruta o modulo o pagina de home
pathMatch:'full' // no permite que le coloquen una ruta distinta en el buscador
  },
  {
    path:'panel',
    component:SkeletonComponent, /* dentro de eskeleton tenemos 
    un layout en el layout hay un navigation un contenedor y un footer
    ... dentro del contenedor hay unas rutas y estas rutas son las 
    que se ven a continuacion*/
    children:[
      {
        path:'user',
        loadChildren:()=>//funcion de angular para que la informacion se cargue unicamente cuando es llamada
        import('@modules/user/user.module').then( (m) => m.UserModule)//importa el modulo, lo carga y lo llama
      },
      {
        path:'**',/*cualquier cosa que venga en el url que no sea una ruta
        nos redireccione*/
        redirectTo:'/panel/user',// nos redirecciona a /panel/user 
        pathMatch:'full'
      }
    ]
  },{
    path:'**',/*cualquier cosa que venga en el url que no sea una ruta
    nos redireccione*/
    redirectTo:'/panel/user',// nos redirecciona a /panel/user 
    pathMatch:'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
