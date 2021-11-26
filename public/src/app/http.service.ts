import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('http://localhost:8800/tasks');
    return tempObservable;
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

 getTask(id:number){
  // our http response is an Observable, store it in a variable
  let tempObservable = this._http.get('http://localhost:8800/tasks/' + String(id));
  return tempObservable;
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  //tempObservable.subscribe(data => console.log(`Got your task ${id}`, data));
}

}
