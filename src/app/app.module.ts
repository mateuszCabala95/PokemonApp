import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PokedexComponent } from './Pages/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationComponent,
    FooterComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
