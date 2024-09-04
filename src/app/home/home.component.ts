import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {KidProfilesService} from "../_services/kid-profiles.service";
import {KidProfile} from "../models/kidProfile";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  kidProfiles: KidProfile[] = []
  userId = localStorage.getItem('userId')

  constructor(private router: Router,
              private kidProfilesService: KidProfilesService
  ) {

  }

  ngOnInit(): void {

  }


}
