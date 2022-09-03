import { IRecipes } from '@/models/recipes';
import Characters from '@/constants/characters';

import { dictionary } from '@/constants/images';

export const recipes: IRecipes[] = [
  {
    recipesId: 0,
    name: 'Amberosia',
    url: 'amberosia',

    img: dictionary.amberosia,

    hp: null,
    sanity: null,
    hunger: null,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: null,
    priority: 100,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Amberosia',

    ingredients: [
      [dictionary.collected_dust, dictionary.filler, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 1,
    name: 'Asparagazpacho',
    url: 'asparagazpacho',

    img: dictionary.asparagazpacho,

    hp: 3,
    sanity: 10,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 10,
    perishTime: 15,
    priority: 30,

    perk: 'Lowers temperature by 20 degrees for 5 minutes',

    fandomLink: 'https://dontstarve.fandom.com/wiki/Asparagazpacho',

    ingredients: [
      [dictionary.asparaguses, dictionary.asparaguses, dictionary.ice, dictionary.ice],
      [dictionary.asparaguses, dictionary.asparaguses, dictionary.iceBream, dictionary.iceBream],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 2,
    name: 'Asparagus Soup',
    url: 'asparagus-soup',

    img: dictionary.asparagusSoup,

    hp: 20,
    sanity: 5,
    hunger: 18.75,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Asparagus_Soup',

    ingredients: [
      [dictionary.asparaguses, dictionary.vegetables, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.twig, dictionary.meats],
    charactersLove: Characters.Willow,
  }
];

export default recipes;
