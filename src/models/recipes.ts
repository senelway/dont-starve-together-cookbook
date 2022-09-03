export type IRecipes = {
  recipesId: number;
  name: string;
  url: string;
  img: string;

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
