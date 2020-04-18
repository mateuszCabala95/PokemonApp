import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokedexComponent} from "./Pages/pokedex/pokedex.component";
import {TypesComponent} from "./Pages/types/types.component";
import {MainPageComponent} from "./Pages/main-page/main-page.component";


const routes: Routes = [
  {path: '',component:MainPageComponent, children:[
      {path:'pokedex', component:PokedexComponent},
      {path:'types', component:TypesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
