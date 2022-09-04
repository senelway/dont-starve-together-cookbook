import { IRecipes } from '@/models/recipes';

import { dictionary } from '@/constants/images';
import Characters from '@/constants/characters';

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
    charactersLove: null,
  },
  {
    recipesId: 3,
    name: 'Bacon and Eggs',
    url: 'Bacon and Eggs',

    img: dictionary.baconAndEggs,

    hp: 20,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 20,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Bacon_and_Eggs',

    ingredients: [
      [dictionary.meats, dictionary.eggs, dictionary.eggs, dictionary.filler],
    ],
    exclude: [dictionary.vegetables],
    charactersLove: Characters.Wilson.name,
  },

  {
    recipesId: 4,
    name: 'Banana Pop',
    url: 'Banana_Pop',

    img: dictionary.bananaPop,

    hp: 20,
    sanity: 33,
    hunger: 12.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 3,
    priority: 20,

    perk: 'Lowers temperature by 10 degrees over 10 seconds.',

    fandomLink: 'https://dontstarve.fandom.com/wiki/Banana_Pop',

    ingredients: [
      [dictionary.banana, dictionary.ice, dictionary.twig, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes],
    charactersLove: null,
  },

  {
    recipesId: 5,
    name: 'Banana Shake',
    url: 'Banana_Shake',

    img: dictionary.bananaShake,

    hp: 8,
    sanity: 33,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Banana_Pop',

    ingredients: [
      [dictionary.bananaCave, dictionary.bananaCave, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 6,
    name: 'Barnacle Linguine',
    url: 'Barnacle_Linguine',

    img: dictionary.barnacleLinguine,

    hp: 10,
    sanity: 20,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 30,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Barnacle_Linguine',

    ingredients: [
      [dictionary.barnacle, dictionary.barnacle, dictionary.vegetables, dictionary.vegetables],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 7,
    name: 'Barnacle Nigiri',
    url: 'Barnacle_Nigiri',

    img: dictionary.barnacleNigiri,

    hp: 40,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 30,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Barnacle_Nigiri',

    ingredients: [
      [dictionary.barnacle, dictionary.kelpFrond, dictionary.eggs, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 8,
    name: 'Barnacle Pita',
    url: 'Barnacle_Pita',

    img: dictionary.barnaclePita,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 25,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Barnacle_Pita',

    ingredients: [
      [dictionary.barnacle, dictionary.vegetables, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 9,
    name: 'Beefy Greens',
    url: 'Beefy_Greens',

    img: dictionary.beefyGreens,

    hp: 40,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 25,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Beefy_Greens',

    ingredients: [
      [dictionary.leafyMeats, dictionary.vegetables, dictionary.vegetables, dictionary.vegetables],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 10,
    name: 'Bunny Stew',
    url: 'Bunny_Stew',

    img: dictionary.bunnyStew,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 1,

    perk: 'Raises temperature by 5 degrees over 5 seconds',

    fandomLink: 'https://dontstarve.fandom.com/wiki/Bunny_Stew',

    ingredients: [
      [dictionary.meats, dictionary.ice, dictionary.ice, dictionary.filler],
    ],
    exclude: [dictionary.inedible],
    charactersLove: null,
  },
  {
    recipesId: 11,
    name: 'Butter Muffin',
    url: 'Butter_Muffin',

    img: dictionary.butterMuffin,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Butter_Muffin',

    ingredients: [
      [dictionary.butterflyWings, dictionary.vegetables, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.fishes, dictionary.mandrake],
    charactersLove: Characters.WX78.name,
  },
  {
    recipesId: 12,
    name: 'California Roll',
    url: 'California_Roll',

    img: dictionary.californiaRoll,

    hp: 20,
    sanity: 10,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 20,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/California_Roll',

    ingredients: [
      [dictionary.fishes, dictionary.kelpFrond, dictionary.kelpFrond, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 13,
    name: 'Ceviche',
    url: 'Ceviche',

    img: dictionary.ceviche,

    hp: 20,
    sanity: 5,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 20,

    perk: 'Lowers temperature by 10 degrees over 10 seconds.',

    fandomLink: 'https://dontstarve.fandom.com/wiki/Ceviche',

    ingredients: [
      [dictionary.fishes, dictionary.fishes, dictionary.ice, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 14,
    name: 'Creamy Potato Purée',
    url: 'Creamy_Potato_Purée',

    img: dictionary.creamyPotatoPuree,

    hp: 20,
    sanity: 33,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 20,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Creamy_Potato_Purée',

    ingredients: [
      [dictionary.potatoes, dictionary.potatoes, dictionary.garlics, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes, dictionary.twig],
    charactersLove: null,
  },
  {
    recipesId: 15,
    name: 'Dragonpie',
    url: 'Dragonpie',

    img: dictionary.dragonpie,

    hp: 40,
    sanity: 5,
    hunger: 75,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Dragonpie',

    ingredients: [
      [dictionary.dragonFruit, dictionary.filler, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes, dictionary.mandrake, dictionary.asparaguses],
    charactersLove: null,
  },
  {
    recipesId: 16,
    name: 'Fancy Spiralled Tubers',
    url: 'Fancy_Spiralled_Tubers',

    img: dictionary.fancySpiralledTubers,

    hp: 3,
    sanity: 15,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 15,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Fancy_Spiralled_Tubers',

    ingredients: [
      [dictionary.potatoes, dictionary.twig, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes],
    charactersLove: null,
  },
  {
    recipesId: 17,
    name: 'Figatoni',
    url: 'Figatoni',

    img: dictionary.figatoni,

    hp: 30,
    sanity: 15,
    hunger: 56.25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 30,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Figatoni',

    ingredients: [
      [dictionary.figs, dictionary.vegetables, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes],
    charactersLove: null,
  },
  {
    recipesId: 18,
    name: 'Figgy Frogwich',
    url: 'Figgy_Frogwich',

    img: dictionary.figgyFrogwich,

    hp: 8,
    sanity: 10,
    hunger: 18.75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Figgy_Frogwich',

    ingredients: [
      [dictionary.frogLeg, dictionary.figs, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 19,
    name: 'Figkabab',
    url: 'Figkabab',

    img: dictionary.figgyFrogwich,

    hp: 20,
    sanity: 15,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 30,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Figkabab',

    ingredients: [
      [dictionary.figs, dictionary.twig, dictionary.meats, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 20,
    name: 'Fig-Stuffed Trunk',
    url: 'Fig-Stuffed_Trunk',

    img: dictionary.figStuffedTrunk,

    hp: 60,
    sanity: 0,
    hunger: 56.25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 10,
    priority: 40,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Fig-Stuffed_Trunk',

    ingredients: [
      [dictionary.koalefantTrunks, dictionary.figs, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 21,
    name: 'Fish Tacos',
    url: 'Fish_Tacos',

    img: dictionary.fishTacos,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Fish_Tacos',

    ingredients: [
      [dictionary.corns, dictionary.fishes, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 22,
    name: 'Fishsticks',
    url: 'Fishsticks',

    img: dictionary.fishsticks,

    hp: 40,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Fishsticks',

    ingredients: [
      [dictionary.fishes, dictionary.twig, dictionary.filler, dictionary.filler],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 23,
    name: 'Fist Full of Jam',
    url: 'Fist_Full_of_Jam',

    img: dictionary.fistFullofJam,

    hp: 3,
    sanity: 5,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 0,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Fist_Full_of_Jam',

    ingredients: [
      [dictionary.fruit, dictionary.filler, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes, dictionary.dragonFruit, dictionary.vegetables, dictionary.inedible],
    charactersLove: null,
  },
  {
    recipesId: 24,
    name: 'Flower Salad',
    url: 'Flower_Salad',

    img: dictionary.flowerSalad,

    hp: 40,
    sanity: 5,
    hunger: 12.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Flower_Salad',

    ingredients: [
      [dictionary.cactusFlower, dictionary.vegetables, dictionary.vegetables, dictionary.filler],
      [dictionary.cactusFlower, dictionary.cactusFlower, dictionary.vegetables, dictionary.filler],
    ],
    exclude: [dictionary.fruit, dictionary.meats, dictionary.fishes, dictionary.eggs, dictionary.twig, dictionary.sweetener],
    charactersLove: null,
  },
  {
    recipesId: 25,
    name: 'Froggle Bunwich',
    url: 'Froggle_Bunwich',

    img: dictionary.froggleBunwich,

    hp: 20,
    sanity: 5,
    hunger: 27.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Froggle_Bunwich',

    ingredients: [
      [dictionary.frogLeg, dictionary.vegetables, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.mandrake, dictionary.meats, dictionary.sweetener],
    charactersLove: null,
  },
  {
    recipesId: 26,
    name: 'Frozen Banana Daiquiri',
    url: 'Frozen_Banana_Daiquiri',

    img: dictionary.frozenBananaDaiquiri,

    hp: 30,
    sanity: 15,
    hunger: 18.75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 1,

    perk: 'Lowers temperature by 15 degrees over 15 seconds',

    fandomLink: 'https://dontstarve.fandom.com/wiki/Frozen_Banana_Daiquiri',

    ingredients: [
      [dictionary.bananaCave, dictionary.ice, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.twig],
    charactersLove: null,
  },
  {
    recipesId: 27,
    name: 'Fruit Medley',
    url: 'Fruit_Medley',

    img: dictionary.fruitMedley,

    hp: 20,
    sanity: 5,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 0,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Fruit_Medley',

    ingredients: [
      [dictionary.fruit, dictionary.fruit, dictionary.fruit, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes, dictionary.dragonFruit, dictionary.vegetables],
    charactersLove: null,
  },
  {
    recipesId: 28,
    name: 'Guacamole',
    url: 'Guacamole',

    img: dictionary.guacamole,

    hp: 20,
    sanity: 0,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Guacamole',

    ingredients: [
      [dictionary.moleworm, dictionary.cactusFlesh, dictionary.filler, dictionary.filler],
      [dictionary.moleworm, dictionary.ripeStoneFruit, dictionary.filler, dictionary.filler],
    ],
    exclude: [dictionary.fruit],
    charactersLove: null,
  },
  {
    recipesId: 29,
    name: 'Honey Ham',
    url: 'Honey_Ham',

    img: dictionary.honeyHam,

    hp: 30,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 2,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Honey_Ham',

    ingredients: [
      [dictionary.meats, dictionary.meats, dictionary.sweetener, dictionary.filler],
    ],
    exclude: [dictionary.twig, dictionary.moleworm, dictionary.mandrake, dictionary.eggs],
    charactersLove: null,
  },
  {
    recipesId: 30,
    name: 'Honey Nuggets',
    url: 'Honey_Nuggets',

    img: dictionary.honeyNuggets,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 2,

    perk: null,

    fandomLink: 'https://dontstarve.fandom.com/wiki/Honey_Nuggets',

    ingredients: [
      [dictionary.meats, dictionary.sweetener, dictionary.sweetener, dictionary.filler],
    ],
    exclude: [dictionary.inedible],
    charactersLove: Characters.Woodie.name,
  },
  {
    recipesId: 31,
    name: 'Ice Cream',
    url: 'Ice_Cream',

    img: dictionary.iceCream,

    hp: 0,
    sanity: 50,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 3,
    priority: 10,

    perk: 'Lowers temperature by 15 degrees over 15 seconds.',

    fandomLink: 'https://dontstarve.fandom.com/wiki/Ice_Cream',

    ingredients: [
      [dictionary.ice, dictionary.dairyProduct, dictionary.sweetener, dictionary.filler],
    ],
    exclude: [dictionary.meats, dictionary.fishes, dictionary.eggs, dictionary.vegetables, dictionary.twig, dictionary.mandrake],
    charactersLove: Characters.Webber.name,
  }
];

export default recipes;
