export interface IUIState {
  search: string;
  isVegetable: boolean;
  isWarlySpecific: boolean;
  onlyWithPerk: boolean;
  order: ['asc'|'desc', string];
  characters: string[];
  ingredients: string[];
}
