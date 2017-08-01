import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Game } from '../models/game';
import { apiEndpoint } from '../app.globals'

@Injectable()
export class SpeedrunDataService {

  constructor(private http: Http) { }

  getGames(): Promise<Array<Game>> {
    return this.http
      .get(apiEndpoint)
      .toPromise()
      .then((response) => {
        return response.json().data as Game[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error llamando a la API de Juegos', error);
    return Promise.reject(error.message || error);
  }
}
