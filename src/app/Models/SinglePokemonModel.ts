export interface SinglePokemonModel {
  abilities:Array<Abilities>,
  base_experience:number,
  forms:Array<Forms>,
  game_indices: Array<GameIndices>,
  height:number,
  held_items: Array<any>,
  id:number,
  is_default:boolean,
  location_area_encounters:string,
  moves:Array<any>,
  name:string,
  order:number,
  species:{
    name:string,
    url:string,
  },
  sprites:any,
  types:Array<Types>,
  weight:number,
}

export interface Types {
  slot:number,
  type:{
    name:string,
    url:string,
  }
}

export interface GameIndices{
  game_index:number,
  version:{
    name:string,
    url:string,
  }
}

export interface Forms{
  name:string,
  url:string,
}

export interface Abilities {
  ability:{
    name:string,
    url:string,
  },
  is_hidden:boolean,
  slot:number,
}
