import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {PokemonModel} from "../../Models/Pokemon.model";


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  randomIndex: Number = Math.round(Math.random() * 964); // 964 - number of all pokemon
  PokemonURL: String = `https://pokeapi.co/api/v2/pokemon/${this.randomIndex.toString()}/`;

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  constructor(private http: HttpClient) {
  }

  getRandomPokemon = ():Observable<PokemonModel> => {
    return this.http.get<PokemonModel>(this.PokemonURL.toString()).pipe(
      retry(3),
      catchError(err =>this.handleError(err))
    )
  }
}


