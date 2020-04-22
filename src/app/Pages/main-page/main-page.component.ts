import {Component, OnInit, OnDestroy} from '@angular/core';
import {MainPageService} from "../../Services/Pages/main-page/main-page.service";
import {RandomPokemonImageService} from "../../Services/Pages/main-page/random-pokemon-image.service";
import {SinglePokemonModel} from "../../Models/SinglePokemonModel";
import {Observable} from "rxjs";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  randomPokemon$: SinglePokemonModel = {
    abilities: undefined,
    base_experience: 0,
    forms: undefined,
    game_indices: undefined,
    height: 0,
    held_items: undefined,
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: undefined,
    name: "",
    order: 0,
    species: {name: "", url: ""},
    sprites: undefined,
    types: undefined,
    weight: 0
  };

  private randomPokemonObservable;
  private isImageLoading: boolean;
  private imageService: any;
private getImage;

  constructor(private mainPageService: MainPageService, private randomImageService: RandomPokemonImageService) {
  }

  randomPokemonImageURL = this.randomImageService.randomPokemonImageURL

  ngOnInit(): void {
    this.randomPokemonObservable = this.getRandomPokemon();
      this.imageService = this.getImageFromService();
  }


  getRandomPokemon = (): any => {

    this.mainPageService.getRandomPokemon().subscribe(
      (data: SinglePokemonModel) =>
        this.randomPokemon$ = {
          abilities: [...data.abilities],
          base_experience: data.base_experience,
          forms: [...data.forms],
          game_indices: [...data.game_indices],
          height: data.height,
          held_items: [...data.held_items],
          id: data.id,
          is_default: data.is_default,
          location_area_encounters: data.location_area_encounters,
          moves: [...data.moves],
          name: data.name,
          order: data.order,
          species: {...data.species},
          sprites: {...data.sprites},
          types: [...data.types],
          weight: data.weight,
        }
    )

  }


  ngOnDestroy(): void {
    this.randomPokemonObservable.unsubscribe();
  }

  imageToShow: any;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.randomImageService.getImage(this.randomPokemonImageURL).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }



}
