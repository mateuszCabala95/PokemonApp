import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  randomIndex: Number = Math.round(Math.random() * 964); // 964 - number of all pokemon
  PokemonURL: String = `https://pokeapi.co/api/v2/pokemon/${this.randomIndex.toString()}/`;


  constructor(private http: HttpClient) {
  }

  getRandomPokemon = () => {
    return this.http.get(this.PokemonURL.toString())
  }
}


