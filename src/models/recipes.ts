export type IRecipes = {
  recipesId: number;
  name: string;
  url: string;
  imageDictionaryId: string;

  hp: number | null;
  sanity: number | null;
  hunger: number | null;

  cookTime: number | null;
  perishTime: number | null;
  priority: number | null; // ???

  isVegetable: boolean;
  isWarlySpecific: boolean;
  charactersLove: string | null;

  perk: string | null;
  fandomLink: string;
  ingredients: string[][];
  exclude: string[];
}

export enum EnumFoodType {
  Dish,
  Ingredient,
  Filler
}

export type IFood = {
  foodId: string;
  name: string;
  fandomLink: string;
  img: string;
  type: EnumFoodType
}
