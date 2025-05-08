import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  tasksList:string[] = [];
  newTask:string = '';

  private _taskService =  inject(TaskService);

  ngOnInit(): void {
    console.log(this._taskService.getTasks());
    this.tasksList = this._taskService.getTasks();
  }

  addTask() {
    this._taskService.addTasks(this.newTask);
    this.tasksList = this._taskService.getTasks();
    this.newTask = '';
    
  }

  deleteTask(index: number) {
    this._taskService.deleteTask(index);
    this.tasksList = this._taskService.getTasks();
  }

  
}
