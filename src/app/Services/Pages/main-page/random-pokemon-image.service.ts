import { Injectable,OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MainPageService} from "./main-page.service";


@Injectable({
  providedIn: 'root'
})
export class RandomPokemonImageService implements OnInit, OnDestroy{

  randomIndex:number = this.mainPageService.randomIndex;
  constructor(private http: HttpClient, private mainPageService:MainPageService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


}


