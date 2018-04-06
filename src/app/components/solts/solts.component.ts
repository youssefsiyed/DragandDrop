import { Component, OnInit } from '@angular/core';
import { Solts } from '../../models/Solts';
import { SoltsService } from '../../services/solts.service';

@Component({
  selector: 'app-solts',
  templateUrl: './solts.component.html',
  styleUrls: ['./solts.component.css']
})
export class SoltsComponent implements OnInit {

  solts : Solts[];
  showSpinner: boolean =true;
  constructor(private soltsService : SoltsService) { }

  ngOnInit() {
    this.soltsService.getSolts().subscribe(solts =>{
      this.solts = solts;
      this.showSpinner= false;
    });
  }

}
