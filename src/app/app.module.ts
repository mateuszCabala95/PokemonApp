import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PokedexComponent } from './Pages/pokedex/pokedex.component';
import { TypesComponent } from './Pages/types/types.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { PokemonCardComponent } from './Components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    PokedexComponent,
    TypesComponent,
    MainPageComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
