import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Model/user'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { username: 'bsri', password: 'pass1' },
    { username: 'satyak', password: 'pass2' },
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      this.currentUserSubject.next(user);
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
