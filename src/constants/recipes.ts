import { IRecipes } from '@/models/recipes';

import { dictionary } from '@/constants/images';
import Characters from '@/constants/characters';

export const recipes: IRecipes[] = [
  {
    recipesId: 0,
    name: 'Amberosia',
    url: 'amberosia',

    imageDictionaryId: dictionary.amberosia.dictionaryId,

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
      [dictionary.collected_dust.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 1,
    name: 'Asparagazpacho',
    url: 'asparagazpacho',

    imageDictionaryId: dictionary.asparagazpacho.dictionaryId,

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
      [dictionary.asparaguses.dictionaryId, dictionary.asparaguses.dictionaryId, dictionary.ice.dictionaryId, dictionary.ice.dictionaryId],
      [dictionary.asparaguses.dictionaryId, dictionary.asparaguses.dictionaryId, dictionary.iceBream.dictionaryId, dictionary.iceBream.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 2,
    name: 'Asparagus Soup',
    url: 'asparagus-soup',

    imageDictionaryId: dictionary.asparagusSoup.dictionaryId,

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
      [dictionary.asparaguses.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.twig.dictionaryId, dictionary.meats.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 3,
    name: 'Bacon and Eggs',
    url: 'Bacon and Eggs',

    imageDictionaryId: dictionary.baconAndEggs.dictionaryId,

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
      [dictionary.meats.dictionaryId, dictionary.eggs.dictionaryId, dictionary.eggs.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.vegetables.dictionaryId],
    charactersLove: Characters.Wilson.name,
  },

  {
    recipesId: 4,
    name: 'Banana Pop',
    url: 'Banana_Pop',

    imageDictionaryId: dictionary.bananaPop.dictionaryId,

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
      [dictionary.banana.dictionaryId, dictionary.ice.dictionaryId, dictionary.twig.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId],
    charactersLove: null,
  },

  {
    recipesId: 5,
    name: 'Banana Shake',
    url: 'Banana_Shake',

    imageDictionaryId: dictionary.bananaShake.dictionaryId,

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
      [dictionary.bananaCave.dictionaryId, dictionary.bananaCave.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 6,
    name: 'Barnacle Linguine',
    url: 'Barnacle_Linguine',

    imageDictionaryId: dictionary.barnacleLinguine.dictionaryId,

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
      [dictionary.barnacle.dictionaryId, dictionary.barnacle.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.vegetables.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 7,
    name: 'Barnacle Nigiri',
    url: 'Barnacle_Nigiri',

    imageDictionaryId: dictionary.barnacleNigiri.dictionaryId,

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
      [dictionary.barnacle.dictionaryId, dictionary.kelpFrond.dictionaryId, dictionary.eggs.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 8,
    name: 'Barnacle Pita',
    url: 'Barnacle_Pita',

    imageDictionaryId: dictionary.barnaclePita.dictionaryId,

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
      [dictionary.barnacle.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 9,
    name: 'Beefy Greens',
    url: 'Beefy_Greens',

    imageDictionaryId: dictionary.beefyGreens.dictionaryId,

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
      [dictionary.leafyMeats.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.vegetables.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 10,
    name: 'Bunny Stew',
    url: 'Bunny_Stew',

    imageDictionaryId: dictionary.bunnyStew.dictionaryId,

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
      [dictionary.meats.dictionaryId, dictionary.ice.dictionaryId, dictionary.ice.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.inedible.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 11,
    name: 'Butter Muffin',
    url: 'Butter_Muffin',

    imageDictionaryId: dictionary.butterMuffin.dictionaryId,

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
      [dictionary.butterflyWings.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.fishes.dictionaryId, dictionary.mandrake.dictionaryId],
    charactersLove: Characters.WX78.name,
  },
  {
    recipesId: 12,
    name: 'California Roll',
    url: 'California_Roll',

    imageDictionaryId: dictionary.californiaRoll.dictionaryId,

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
      [dictionary.fishes.dictionaryId, dictionary.kelpFrond.dictionaryId, dictionary.kelpFrond.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 13,
    name: 'Ceviche',
    url: 'Ceviche',

    imageDictionaryId: dictionary.ceviche.dictionaryId,

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
      [dictionary.fishes.dictionaryId, dictionary.fishes.dictionaryId, dictionary.ice.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 14,
    name: 'Creamy Potato Purée',
    url: 'Creamy_Potato_Purée',

    imageDictionaryId: dictionary.creamyPotatoPuree.dictionaryId,

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
      [dictionary.potatoes.dictionaryId, dictionary.potatoes.dictionaryId, dictionary.garlics.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId, dictionary.twig.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 15,
    name: 'Dragonpie',
    url: 'Dragonpie',

    imageDictionaryId: dictionary.dragonpie.dictionaryId,

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
      [dictionary.dragonFruit.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId, dictionary.mandrake.dictionaryId, dictionary.asparaguses.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 16,
    name: 'Fancy Spiralled Tubers',
    url: 'Fancy_Spiralled_Tubers',

    imageDictionaryId: dictionary.fancySpiralledTubers.dictionaryId,

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
      [dictionary.potatoes.dictionaryId, dictionary.twig.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 17,
    name: 'Figatoni',
    url: 'Figatoni',

    imageDictionaryId: dictionary.figatoni.dictionaryId,

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
      [dictionary.figs.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 18,
    name: 'Figgy Frogwich',
    url: 'Figgy_Frogwich',

    imageDictionaryId: dictionary.figgyFrogwich.dictionaryId,

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
      [dictionary.frogLeg.dictionaryId, dictionary.figs.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 19,
    name: 'Figkabab',
    url: 'Figkabab',

    imageDictionaryId: dictionary.figgyFrogwich.dictionaryId,

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
      [dictionary.figs.dictionaryId, dictionary.twig.dictionaryId, dictionary.meats.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 20,
    name: 'Fig-Stuffed Trunk',
    url: 'Fig-Stuffed_Trunk',

    imageDictionaryId: dictionary.figStuffedTrunk.dictionaryId,

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
      [dictionary.koalefantTrunks.dictionaryId, dictionary.figs.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 21,
    name: 'Fish Tacos',
    url: 'Fish_Tacos',

    imageDictionaryId: dictionary.fishTacos.dictionaryId,

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
      [dictionary.corns.dictionaryId, dictionary.fishes.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 22,
    name: 'Fishsticks',
    url: 'Fishsticks',

    imageDictionaryId: dictionary.fishsticks.dictionaryId,

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
      [dictionary.fishes.dictionaryId, dictionary.twig.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 23,
    name: 'Fist Full of Jam',
    url: 'Fist_Full_of_Jam',

    imageDictionaryId: dictionary.fistFullofJam.dictionaryId,

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
      [dictionary.fruit.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId, dictionary.dragonFruit.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.inedible.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 24,
    name: 'Flower Salad',
    url: 'Flower_Salad',

    imageDictionaryId: dictionary.flowerSalad.dictionaryId,

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
      [dictionary.cactusFlower.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId],
      [dictionary.cactusFlower.dictionaryId, dictionary.cactusFlower.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.fruit.dictionaryId, dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId, dictionary.eggs.dictionaryId, dictionary.twig.dictionaryId, dictionary.sweetener.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 25,
    name: 'Froggle Bunwich',
    url: 'Froggle_Bunwich',

    imageDictionaryId: dictionary.froggleBunwich.dictionaryId,

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
      [dictionary.frogLeg.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.mandrake.dictionaryId, dictionary.meats.dictionaryId, dictionary.sweetener.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 26,
    name: 'Frozen Banana Daiquiri',
    url: 'Frozen_Banana_Daiquiri',

    imageDictionaryId: dictionary.frozenBananaDaiquiri.dictionaryId,

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
      [dictionary.bananaCave.dictionaryId, dictionary.ice.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.twig.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 27,
    name: 'Fruit Medley',
    url: 'Fruit_Medley',

    imageDictionaryId: dictionary.fruitMedley.dictionaryId,

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
      [dictionary.fruit.dictionaryId, dictionary.fruit.dictionaryId, dictionary.fruit.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId, dictionary.dragonFruit.dictionaryId, dictionary.vegetables.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 28,
    name: 'Guacamole',
    url: 'Guacamole',

    imageDictionaryId: dictionary.guacamole.dictionaryId,

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
      [dictionary.moleworm.dictionaryId, dictionary.cactusFlesh.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
      [dictionary.moleworm.dictionaryId, dictionary.ripeStoneFruit.dictionaryId, dictionary.filler.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.fruit.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 29,
    name: 'Honey Ham',
    url: 'Honey_Ham',

    imageDictionaryId: dictionary.honeyHam.dictionaryId,

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
      [dictionary.meats.dictionaryId, dictionary.meats.dictionaryId, dictionary.sweetener.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.twig.dictionaryId, dictionary.moleworm.dictionaryId, dictionary.mandrake.dictionaryId, dictionary.eggs.dictionaryId],
    charactersLove: null,
  },
  {
    recipesId: 30,
    name: 'Honey Nuggets',
    url: 'Honey_Nuggets',

    imageDictionaryId: dictionary.honeyNuggets.dictionaryId,

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
      [dictionary.meats.dictionaryId, dictionary.sweetener.dictionaryId, dictionary.sweetener.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.inedible.dictionaryId],
    charactersLove: Characters.Woodie.name,
  },
  {
    recipesId: 31,
    name: 'Ice Cream',
    url: 'Ice_Cream',

    imageDictionaryId: dictionary.iceCream.dictionaryId,

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
      [dictionary.ice.dictionaryId, dictionary.dairyProduct.dictionaryId, dictionary.sweetener.dictionaryId, dictionary.filler.dictionaryId],
    ],
    exclude: [dictionary.meats.dictionaryId, dictionary.fishes.dictionaryId, dictionary.eggs.dictionaryId, dictionary.vegetables.dictionaryId, dictionary.twig.dictionaryId, dictionary.mandrake.dictionaryId],
    charactersLove: Characters.Webber.name,
  }
];

export default recipes;
