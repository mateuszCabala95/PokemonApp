export interface PokemonAbilityModel {
  count: number,
  next?: string
  previous?: string,
  results: [ResultsModel]
}

interface ResultsModel {
  id: number,
  name: string,
  is_main_series: boolean,
  generation: [GenerationModel]
  names: Array<NamesModel>,
  effect_entries: Array<EffectsEntriesModel>,
  effect_changes: Array<EffectChanges>,
  flavor_text_entries: Array<FlavorTextEntries>,
  pokemon: Array<PokemonInPokemonModel>
}

interface PokemonInPokemonModel{
  0:{
    is_hidden:boolean,
    slot:number,
    pokemon:{
      name:string,
      url:string
    }
  }
}

interface FlavorTextEntries{
  0:{
    flavor_text:string,
    language:{
      name:string,
      url:string,
    },
    version_group:{
      name:string,
      url:string,
    }
  }
}

interface EffectChanges {
  0:{
    version_group:{
      name:string,
      url:string,
    },
    effect_entries:{
      0:{
        effect:string,
        language:{
          name:string,
          url:string,
        }
      }
    }
  }
}

interface EffectsEntriesModel {
  0: {
    effect: string,
    short_effect: string,
    language: {
      name: string,
      url: string,
    }
  },
}

interface NamesModel {
  0: {
    name: string,
    language: {
      name: string,
      url: string,
    }
  },
}

interface GenerationModel {
  name: string,
  url: string,
}

