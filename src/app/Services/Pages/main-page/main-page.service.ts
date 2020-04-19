import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {OnePokemonModel, OnePokemonModelAny} from "../../../Models/OnePokemon.model";


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  randomIndex: number = Math.round(Math.random() * 868); // 964 - number of all pokemon, in RandomPokemonImageService fetch images from another server and there is only 868 photo
  PokemonURL: string = `https://pokeapi.co/api/v2/pokemon/${this.randomIndex.toString()}/`;

  private static handleError(error: HttpErrorResponse) {
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


  getRandomPokemon = ():Observable<OnePokemonModel>=>{
    return this.http.get<OnePokemonModel>(this.PokemonURL).pipe(
      catchError(err=> MainPageService.handleError(err))
    )
  }
}


