import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MainPageService} from "./main-page.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RandomPokemonImageService {

  randomIndex: number = this.mainPageService.randomIndex;
  randomPokemonImageURL = `https://pokeres.bastionbot.org/images/pokemon/${this.randomIndex.toLocaleString()}.png`



  constructor(private http: HttpClient, private mainPageService: MainPageService) {

  };



  //https://stackoverflow.com/questions/45530752/getting-image-from-api-in-angular-4-5
  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

}
