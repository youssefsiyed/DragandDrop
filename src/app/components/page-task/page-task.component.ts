import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tasks } from '../../models/Tasks';
import { PushNotificationService } from 'ng-push-notification';
//import * as jsPDF from 'jspdf';
declare var swal: any;

@Component({
  selector: 'app-page-task',
  templateUrl: './page-task.component.html',
  styleUrls: ['./page-task.component.css'],

})
export class PageTaskComponent implements OnInit {
  p: number = 1;
  tasks : Tasks[];

  date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
  //  col = ["Details", "Values"];
  //  rows = [];
 //,private flashMessage: FlashMessage
  constructor(private taskService:TasksService,private pushNotification: PushNotificationService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  /////////////////////////////////////////////
  showPush() {
    this.pushNotification.show(
      'Show me that message!',
      {/* any settings, e.g. icon */},
      6000, // close delay.
    );
    // Or simply this:
    this.pushNotification.show('And that too!');
  }
  async showAnotherPush() {
    const notification = await this.pushNotification.show('Returns promise with Notification object.');
    setTimeout(() => notification.close(), 1000);
  }
  /////////////////////////////////////////////
  showAlert(){
    swal("Good job!", "You clicked the button!", "success");
  }
  /////////////////////////////////////////////
  // onShowSuccess() {
  //   this.flashMessage.success('Success message');
  // }
  // DownloadPdf(){
  //   const doc = new jsPDF({orientation: 'landscape'})

  //   for(var key in this.tasks){
  //     var temp = [key, this.tasks[key]];
  //     this.rows.push(temp);
  // }
  //    doc.autoTable(this.rows);
  //  // doc.text('this.tasks', 1, 1)
  //   doc.save('tasks.pdf')
  // }

}
