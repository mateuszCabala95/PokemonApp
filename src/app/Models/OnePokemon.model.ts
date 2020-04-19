export interface OnePokemonModel {
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
  order:1,
  species:{
    name:string,
    url:string,
  },
  sprites:any,
  types:Array<Types>,
  weight:number,
}

interface Types {
  slot:number,
  type:{
    name:string,
    url:string,
  }
}

interface GameIndices{
  game_index:number,
  version:{
    name:string,
    url:string,
  }
}

interface Forms{
  name:string,
  url:string,
}

interface Abilities {
  ability:{
    name:string,
    url:string,
  },
  is_hidden:boolean,
  slot:number,
}
