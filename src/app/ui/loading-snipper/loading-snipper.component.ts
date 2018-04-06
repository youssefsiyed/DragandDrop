import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/Tasks';

@Component({
  selector: 'app-loading-snipper',
  templateUrl: './loading-snipper.component.html',
  styleUrls: ['./loading-snipper.component.css']
})
export class LoadingSnipperComponent implements OnInit {

  showSpinner: boolean = true;
  tasks : Tasks[];
  
  constructor(private taskService:TasksService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.showSpinner = false;
    });

}
}
