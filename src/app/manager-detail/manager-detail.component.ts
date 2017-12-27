import { ManagerService } from './../services/manager.service';
import { Component, OnInit } from '@angular/core';
import { Manager } from '../interfaces/manager';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.css']
})
export class ManagerDetailComponent implements OnInit {

  constructor(private managerService: ManagerService,
            private route: ActivatedRoute,
            private location: Location) { }

  public manager: Manager;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.managerService.getManager(id).subscribe(
      manager => this.manager = manager
    );
  }

  save(): void {
    this.managerService.updateManager(this.manager).toPromise()
      .then(result => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
