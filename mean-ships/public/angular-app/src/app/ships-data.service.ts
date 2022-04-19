import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoForm } from './search/search.component';

import { Ship } from './ships/ships.component';
 
@Injectable({
  providedIn: 'root'
})
export class ShipsDataService {
  private apiBaseUrl: string= "http://localhost:3000/api"


  constructor(private http:HttpClient, private router:ActivatedRoute) { }

  public getShips(): Promise<Ship[]> {
    let url: string= this.apiBaseUrl + `/ships`;
    return this.http.get(url).toPromise()
                // .then(response => {console.log(response); response as Ship[]})
                .catch(this.handleError);
  }
  public getShipspagin(count:number,offset:number): Promise<Ship[]> {
    
         const url = this.apiBaseUrl + `/ships?count=${count}&offset=${offset}`;
    return this.http.get(url).toPromise()
                // .then(response => {console.log(response); response as Ship[]})
                .catch(this.handleError);
  }
  public getShipsGeo(form:GeoForm): Promise<Ship[]> {
    
    const url = this.apiBaseUrl + `/ships?lat=${form.lat}&lon=${form.lon}`;
    return this.http.get(url).toPromise()
                // .then(response => {console.log(response); response as Ship[]})
                .catch(this.handleError);
  }

  public getShip(shipId: string): Promise<Ship> {
    const url: string= this.apiBaseUrl + "/ships/" + shipId;
    
    return this.http.get(url).toPromise()
                // .then(response => {console.log(response); response as Ship})
                .catch(this.handleError);
  }

  private handleError(error: any):Promise<any> {
    return Promise.reject(error.message || error);
  }
}
