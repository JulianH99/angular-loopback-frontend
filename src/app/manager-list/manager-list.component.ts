import { Manager } from './../interfaces/manager';
import { ManagerService } from './../services/manager.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  constructor(public managerService: ManagerService) { }

  private managers: Manager[];

  ngOnInit() {
    this.fetchManagers();
  }

  delete(id) {
    this.managerService.deleteManager(id).toPromise()
      .then(result => this.fetchManagers());
  }

  fetchManagers(): void {
    this.managerService.getManagers()
      .subscribe(managers => this.managers = managers);
  }


}
