import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';

  getTasks():string[]{
    console.log(localStorage.getItem(this.localStorageKey));
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []; 
  }

  addTasks(task: string){
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }


  deleteTask(index: number){
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

}
