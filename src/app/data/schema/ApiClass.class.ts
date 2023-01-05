import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { environment } from 'environments/environment';
import { of } from 'rxjs';


export class ApiClass {
public url = environment.url;
public isProduction = environment.production;
constructor(
    protected http:HttpClient,
){
}
error(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
        errorMessage= error.error.message;
    }else{                                  //para sanittizar los endpoints en caso de que algun endpouint no este boen
        errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;   
    }
    return of({error:true, msg:errorMessage, data:null});
}
}
