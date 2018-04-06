import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private person = new Person();
  private personError : Person; 
  private isCreated : boolean = false;
  private personExist : boolean = false;

  constructor(private personService : PersonService) { }

  ngOnInit() {
  }
  ////////////////////////////////////////////////////////////
  createPerson(){
    this.personService.createPerson(this.person).subscribe(
      data =>{
        console.log(data);
        this.person = new Person();
        this.isCreated = true;
        this.personExist = false;
        this.personError = new Person();
      },
      error =>{
        this.personError =error.error;
        this.isCreated = false;

        if(error.status == 409){
          this.isCreated = false;
          this.personExist = true;
        }
        //console.log(error);
      }
    );
  }

}
