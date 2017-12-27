import { ManagerService } from './../services/manager.service';
import { Router } from '@angular/router';
import { Manager } from './../interfaces/manager';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  constructor(public router: Router,
    public managerService: ManagerService) { }

  public manager: Manager;

  ngOnInit() {

    this.manager = {
      name: '',
      lastname: '',
      address: '',
      age: 0
    };
  }

  save(): void {
    this.managerService.addManager(this.manager).toPromise()
      .then(result => this.goBack() );
  }

  goBack(): void {
    this.router.navigate(['list']);
  }



}
