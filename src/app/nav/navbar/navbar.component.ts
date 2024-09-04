import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  title = "Kid of the day"
  showSideNavBar: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  logout() {
    this.showSideNavBar = false;
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }

  showSideNav() {
    let token = localStorage.getItem('token')
    token ? this.isLoggedIn = true : this.isLoggedIn = false

    if(this.isLoggedIn){

      this.showSideNavBar = !this.showSideNavBar
    }
  }

  isSideNavActive() {
    switch (this.showSideNavBar) {
      case true:
        return 'side-nav-active'
      case false:
        return 'side-nav'
    }
  }

  isSideNavActiveItems() {
    switch (this.showSideNavBar) {
      case true:
        return 'nav-item-active'
      case false:
        return 'nav-item'
    }
  }
}

