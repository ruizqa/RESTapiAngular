import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  task:any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasks();
    this.getTask(4);
  }

  getTasks(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe((data:any) => {
      this.tasks = data;
      console.log('All tasks:',this.tasks)
    });
  }

  getTask(id:number){
    let tempObservable =  this._httpService.getTask(id);
    tempObservable.subscribe((data:any) => {
      this.task = data;
      console.log(`Got your task ${id}`, this.task)});
    
  }

}
