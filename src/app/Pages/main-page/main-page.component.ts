import {Component, OnInit, OnDestroy} from '@angular/core';
import {MainPageService} from "../../Services/main-page.service";
import {AllPokemonsModel} from "../../Models/AllPokemons.model";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  randomPokemon$: AllPokemonsModel = {count:0, next:null, previous:null, results:[]};
  randomPokemonImage$:string;
  private randomPokemonObservable: any;
  // private randomPokemonImageObservable: any;


  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    const randomPokemonObservable = this.getRandomPokemon();
    // const randomPokemonImageObservable = this.getRandomPokemonImage();
  }

  getRandomPokemon = () => {
    this.mainPageService.getRandomPokemon()
      .subscribe(
        (data: AllPokemonsModel) => this.randomPokemon$ = {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: [...data.results]
      })
  }



  ngOnDestroy(): void {
    this.randomPokemonObservable.unsubscribe();
    // this.randomPokemonImageObservable.unsubscribe()
  }

}
