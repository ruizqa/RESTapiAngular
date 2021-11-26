import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'public';
  displayTasks=false;
  viewTask=false;
  tasks = [];
  task:any;
  constructor(private _httpService: HttpService){}

  getTasks(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe((data:any) => {
      this.tasks = data;
      this.displayTasks=true;
    });
  }

  hideTasks(){
    this.displayTasks=false;
    this.viewTask = false;
  }

  displayTask(e:any){
    this.viewTask=true;
    let number = Number(e.target.name);
    this.task= this.tasks.filter(task =>{ return task['id'] == number})[0]
    console.log(this.task)
  }

  getTask(e:any){
    let id:number = e.target.previousElementSibling.value
    let tempObservable = this._httpService.getTask(id);
    tempObservable.subscribe((data:any) => {
      this.task = data;
      this.viewTask=true;
      console.log(this.task);
    });
  }


}
