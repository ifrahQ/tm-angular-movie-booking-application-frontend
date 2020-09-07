import { User } from './../../shared/models/index';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:7070/movie_app/v1/access-tokens';
  private token = null;
  private user$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { 
    const user: User = this.getUserFromLocalStorage();
    console.log(user);
    this.user$.next(user);
  }

  login(userCredentials) {
    return this.http.post(this.url, userCredentials);
  }

  getUser$(): Observable<User> {
    return this.user$.asObservable();
  }

  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user$.next(user);
  }

  getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  logout() {
    localStorage.removeItem('user');
    this.user$.next(null);
  }
}
