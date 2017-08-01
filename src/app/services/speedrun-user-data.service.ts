import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';
import { apiEndpointUser } from '../app.globals'

@Injectable()
export class SpeedrunUserDataService {

  constructor(private http: Http) { }

  getUser(userId): Promise<User> {
    return this.http
      .get(apiEndpointUser + userId)
      .toPromise()
      .then((response) => {
        return response.json().data as User;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error llamando a la API de usuario', error);
    return Promise.reject(error.message || error);
  }

}
