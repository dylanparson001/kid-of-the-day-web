import {Component, OnInit} from '@angular/core';
import {KidProfile} from "../../models/kidProfile";
import {Router} from "@angular/router";
import {KidProfilesService} from "../../_services/kid-profiles.service";

@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.component.html',
  styleUrl: './kid-list.component.css'
})
export class KidListComponent implements OnInit {
  kidProfiles: KidProfile[] = []
  userId = localStorage.getItem('userId')

  constructor(private router: Router, private kidProfilesService: KidProfilesService) {

  }

  ngOnInit(): void {
    if (this.userId) {

      this.kidProfilesService.loadKidProfilesFromUserId(this.userId).subscribe({
        next: (response) => {
          this.kidProfiles = response;
        }
      })
    }
  }

}
