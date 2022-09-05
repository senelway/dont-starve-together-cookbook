export type IRecipe = {
  recipeId: number;
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

  perk: { text: string; type: EnumPerkType } | null;
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

export enum EnumPerkType {
  Cooling,
  Heating,
  Cleanse,
  Healing,
}
