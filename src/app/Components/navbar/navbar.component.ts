import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink} from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import {User} from './../../Model/user';
import {AuthService} from './../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // Optional: redirect to login after logout
  }
}
