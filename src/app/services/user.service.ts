import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = {
    email: '',
    password: '',
    id: '',
  };
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  constructor(private http: HttpClient) {}
  createUser(user: User) {
    return this.http.post('http://localhost:3000/auth/signup', user);
  }
  login(authCredentials) {
    return this.http.post(
      'http://localhost:3000/auth/login',
      authCredentials,
      this.noAuthHeader
    );
  }

  getUserProfile() {
    return this.http.get('getuser');
  }
  //token field
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  isLoggedIn() {
    let userPayload = this.getUserPayload();
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }
}
