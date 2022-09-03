export interface IUIState {
  search: string;
  isVegetable: boolean;
  isWarlySpecific: boolean;
  order: ['asc'|'desc', string];
  characters: string[];
}
