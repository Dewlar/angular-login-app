import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../../models/user.model';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  personalList: Observable<IUser[]>;

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.personalList = this.adminService.getPersonalList();
    this.personalList = this.activatedRoute.data.pipe(map(data => data?.['users']));
  }
}
