import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss'],
})
export class ContactsDetailsComponent implements OnInit {
  user: Observable<IUser>;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {}

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(params => (this.id = params?.['id']));
    // this.user = this.adminService.getPerson(this.id);
    this.user = this.activatedRoute.data.pipe(map(data => data?.['user']));
  }
}
