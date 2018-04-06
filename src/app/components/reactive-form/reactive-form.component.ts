import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rForm: FormGroup;
  post:any;                    // A property for our submitted form
  description:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';
  
  public show:boolean = false;
  public isExist:boolean = false;
  public buttonName:any = 'Show';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });
  }

/////////////////////HIDE & SHOW ////////////////////////
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
////////////////////////////////////////////////////////
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
    swal("Good Job!", "The User is Registered !", "success");
    this.isExist=true;
  }
 

}
