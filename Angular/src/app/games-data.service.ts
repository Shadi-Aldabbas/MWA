import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './games/games.component';

@Injectable({
  providedIn: 'root',
})
export class GamesDataService {
  private readonly baseUrl: string = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/games');
  }
  public getGame(id: string): Observable<Game> {
    const url: string = this.baseUrl + 'games/' + id;
    return this.http.get<Game>(url);
  }
}
