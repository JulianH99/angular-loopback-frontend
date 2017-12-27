import { ManagerDetailComponent } from './manager-detail/manager-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerService } from './services/manager.service';
import { AddManagerComponent } from './add-manager/add-manager.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ManagerListComponent
  },
  {
    path: 'detail/:id',
    component: ManagerDetailComponent
  },
  {
    path: 'add',
    component: AddManagerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ManagerListComponent,
    ManagerDetailComponent,
    AddManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
