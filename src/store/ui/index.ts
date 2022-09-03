import { defineStore } from 'pinia';
import { orderBy } from 'lodash';

import { IUIState } from '@/store/ui/types';
import recipes from '@/constants/recipes';

export const uiStore = defineStore('ui', {
  state: (): IUIState => ({
    search: '',
    isVegetable: false,
    isWarlySpecific: false,
    order: ['asc', 'name'],
    characters: [],
  }),
  getters: {
    recipes(state) {
      let filtered = recipes.filter(q => new RegExp(state.search, 'i').test(q.name));
      if (state.isVegetable) {
        filtered = filtered.filter(q => q.isVegetable);
      }
      if (state.isWarlySpecific) {
        filtered = filtered.filter(q => q.isWarlySpecific);
      }
      if (state.characters.length) {
        filtered = filtered.filter(q => q.charactersLove && state.characters.includes(q.charactersLove));
      }
      return orderBy(filtered, state.order[1], state.order[0]);
    }
  },
  actions: {
    setOrder(value: string) {
      const split = value.split(',');
      this.order = [split[0] as 'asc'|'desc', split[1]];
    },
    onSelectCharacter(character: string) {
      this.characters = this.characters.includes(character) ? this.characters.filter(q => q !== character) : [...this.characters, character];
    }
  }
});
