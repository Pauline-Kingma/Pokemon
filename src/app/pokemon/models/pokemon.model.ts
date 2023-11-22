export interface Pokemon {
  id: number;
  name: string;
  type: string | string[];
  size: {
    height: string;
    weight: string;
  };
  abilities: string[];
  base_stats: {
    HP: number;
    Attack: number;
    Defense: number;
    SpecialAttack: number;
    SpecialDefense: number;
    Speed: number;
  };
  evolutions?: {
    name: string;
    method: string;
  }[];
  description: string;
}

export interface PokemonList {
  pokemon: Pokemon[];
  totalCount: number;
}
