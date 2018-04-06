import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksService } from './services/tasks.service';
import { SoltsService } from './services/solts.service';
import { SoltsComponent } from './components/solts/solts.component';
import { DragulaComponent } from './components/dragula/dragula.component';
import { PageTaskComponent } from './components/page-task/page-task.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSnipperComponent } from './ui/loading-snipper/loading-snipper.component';
import { NgSpinKitModule } from 'ng-spin-kit';
import { ExportComponent } from './ui/export/export.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { PushNotificationModule } from 'ng-push-notification';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PersonComponent } from './components/person/person.component';
import { PersonService } from './services/person.service';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

const appRoutes : Routes =[
  { path:'task', component : TasksComponent },
  { path:'solt', component : SoltsComponent },
  { path:'dragula', component : DragulaComponent },
  { path:'pagination', component : PageTaskComponent },
  { path:'export', component : ExportComponent },
  { path:'formulaire', component : ReactiveFormComponent },
  { path:'formulairePerson', component : PersonComponent },
  { path:'', redirectTo : '/', pathMatch : 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    SoltsComponent,
    DragulaComponent,
    PageTaskComponent,
    LoadingSnipperComponent,
    ExportComponent,
    ReactiveFormComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    NgSpinKitModule,
    AngularDateTimePickerModule,
    PushNotificationModule.forRoot(/* Default settings here, interface PushNotificationSettings */)
   // PdfViewerModule
  ],
  providers: [TasksService, SoltsService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
