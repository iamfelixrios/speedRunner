import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Speedrun } from '../models/speedrun';
import { apiEndpointDetails } from '../app.globals'

@Injectable()
export class SpeedrunDetailDataService {

  constructor(private http: Http) { }

  getRuns(gameId): Promise<Array<Speedrun>> {
    return this.http
      .get(apiEndpointDetails + gameId + '&orderby=submitted&direction=desc')
      .toPromise()
      .then((response) => {
        return response.json().data as Speedrun[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error llamando a la API de detalle', error);
    return Promise.reject(error.message || error);
  }
}
