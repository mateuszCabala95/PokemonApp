export interface PokemonModel {
  count:number,
  next?:string,
  previous?:string,
  results:Array<Result>
}

interface Result {
    name: string,
    url: string
}
