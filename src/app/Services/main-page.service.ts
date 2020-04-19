import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {AllPokemonsModel} from "../Models/AllPokemons.model";


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  randomIndex: Number = Math.round(Math.random() * 868); // 964 - number of all pokemon
  PokemonURL: String = `https://pokeapi.co/api/v2/pokemon/${this.randomIndex.toString()}/`;

  pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${this.randomIndex}.png` //868 - number of image for pokemons

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

  getRandomPokemon = ():Observable<AllPokemonsModel> => {
    return this.http.get<AllPokemonsModel>(this.PokemonURL.toString())
      .pipe(
      catchError(err => MainPageService.handleError(err))
    )
  }

  getRandomPokemonImage = ()=>{
    return this.http.get(this.pokeImage.toString())
      .pipe(
      catchError(err => MainPageService.handleError(err))
    )
  }
}


