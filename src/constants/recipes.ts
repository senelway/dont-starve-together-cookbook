import { IRecipes } from '@/models/recipes';

import { foods } from '@/constants/images';
import Characters from '@/constants/characters';
import { fandom } from '@/constants/utility';

export const recipes: IRecipes[] = [
  {
    recipesId: 0,
    name: 'Amberosia',
    url: 'amberosia',

    imageDictionaryId: foods.amberosia.foodId,

    hp: null,
    sanity: null,
    hunger: null,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: null,
    priority: 100,

    perk: null,

    fandomLink: `${fandom}/Amberosia`,

    ingredients: [
      [foods.collected_dust.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 1,
    name: 'Asparagazpacho',
    url: 'asparagazpacho',

    imageDictionaryId: foods.asparagazpacho.foodId,

    hp: 3,
    sanity: 10,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 10,
    perishTime: 15,
    priority: 30,

    perk: 'Lowers temperature by 20 degrees for 5 minutes',

    fandomLink: `${fandom}/Asparagazpacho`,

    ingredients: [
      [foods.asparaguses.foodId, foods.asparaguses.foodId, foods.ice.foodId, foods.ice.foodId],
      [foods.asparaguses.foodId, foods.asparaguses.foodId, foods.iceBream.foodId, foods.iceBream.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 2,
    name: 'Asparagus Soup',
    url: 'asparagus-soup',

    imageDictionaryId: foods.asparagusSoup.foodId,

    hp: 20,
    sanity: 5,
    hunger: 18.75,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Asparagus_Soup`,

    ingredients: [
      [foods.asparaguses.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.meats.foodId],
    charactersLove: null,
  },
  {
    recipesId: 3,
    name: 'Bacon and Eggs',
    url: 'Bacon and Eggs',

    imageDictionaryId: foods.baconAndEggs.foodId,

    hp: 20,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 20,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Bacon_and_Eggs`,

    ingredients: [
      [foods.meats.foodId, foods.eggs.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [foods.vegetables.foodId],
    charactersLove: Characters.Wilson.name,
  },

  {
    recipesId: 4,
    name: 'Banana Pop',
    url: 'Banana_Pop',

    imageDictionaryId: foods.bananaPop.foodId,

    hp: 20,
    sanity: 33,
    hunger: 12.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 3,
    priority: 20,

    perk: 'Lowers temperature by 10 degrees over 10 seconds.',

    fandomLink: `${fandom}/Banana_Pop`,

    ingredients: [
      [foods.banana.foodId, foods.ice.foodId, foods.twig.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },

  {
    recipesId: 5,
    name: 'Banana Shake',
    url: 'Banana_Shake',

    imageDictionaryId: foods.bananaShake.foodId,

    hp: 8,
    sanity: 33,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: `${fandom}/Banana_Pop`,

    ingredients: [
      [foods.bananaCave.foodId, foods.bananaCave.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 6,
    name: 'Barnacle Linguine',
    url: 'Barnacle_Linguine',

    imageDictionaryId: foods.barnacleLinguine.foodId,

    hp: 10,
    sanity: 20,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 30,

    perk: null,

    fandomLink: `${fandom}/Barnacle_Linguine`,

    ingredients: [
      [foods.barnacle.foodId, foods.barnacle.foodId, foods.vegetables.foodId, foods.vegetables.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 7,
    name: 'Barnacle Nigiri',
    url: 'Barnacle_Nigiri',

    imageDictionaryId: foods.barnacleNigiri.foodId,

    hp: 40,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 30,

    perk: null,

    fandomLink: `${fandom}/Barnacle_Nigiri`,

    ingredients: [
      [foods.barnacle.foodId, foods.kelpFrond.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 8,
    name: 'Barnacle Pita',
    url: 'Barnacle_Pita',

    imageDictionaryId: foods.barnaclePita.foodId,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 25,

    perk: null,

    fandomLink: `${fandom}/Barnacle_Pita`,

    ingredients: [
      [foods.barnacle.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 9,
    name: 'Beefy Greens',
    url: 'Beefy_Greens',

    imageDictionaryId: foods.beefyGreens.foodId,

    hp: 40,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 25,

    perk: null,

    fandomLink: `${fandom}/Beefy_Greens`,

    ingredients: [
      [foods.leafyMeats.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.vegetables.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 10,
    name: 'Bunny Stew',
    url: 'Bunny_Stew',

    imageDictionaryId: foods.bunnyStew.foodId,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 1,

    perk: 'Raises temperature by 5 degrees over 5 seconds',

    fandomLink: `${fandom}/Bunny_Stew`,

    ingredients: [
      [foods.meats.foodId, foods.ice.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipesId: 11,
    name: 'Butter Muffin',
    url: 'Butter_Muffin',

    imageDictionaryId: foods.butterMuffin.foodId,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: `${fandom}/Butter_Muffin`,

    ingredients: [
      [foods.butterflyWings.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fishes.foodId, foods.mandrake.foodId],
    charactersLove: Characters.WX78.name,
  },
  {
    recipesId: 12,
    name: 'California Roll',
    url: 'California_Roll',

    imageDictionaryId: foods.californiaRoll.foodId,

    hp: 20,
    sanity: 10,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 20,

    perk: null,

    fandomLink: `${fandom}/California_Roll`,

    ingredients: [
      [foods.fishes.foodId, foods.kelpFrond.foodId, foods.kelpFrond.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 13,
    name: 'Ceviche',
    url: 'Ceviche',

    imageDictionaryId: foods.ceviche.foodId,

    hp: 20,
    sanity: 5,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 20,

    perk: 'Lowers temperature by 10 degrees over 10 seconds.',

    fandomLink: `${fandom}/Ceviche`,

    ingredients: [
      [foods.fishes.foodId, foods.fishes.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 14,
    name: 'Creamy Potato Purée',
    url: 'Creamy_Potato_Purée',

    imageDictionaryId: foods.creamyPotatoPuree.foodId,

    hp: 20,
    sanity: 33,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 20,

    perk: null,

    fandomLink: `${fandom}/Creamy_Potato_Purée`,

    ingredients: [
      [foods.potatoes.foodId, foods.potatoes.foodId, foods.garlics.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipesId: 15,
    name: 'Dragonpie',
    url: 'Dragonpie',

    imageDictionaryId: foods.dragonpie.foodId,

    hp: 40,
    sanity: 5,
    hunger: 75,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: `${fandom}/Dragonpie`,

    ingredients: [
      [foods.dragonFruit.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.mandrake.foodId, foods.asparaguses.foodId],
    charactersLove: null,
  },
  {
    recipesId: 16,
    name: 'Fancy Spiralled Tubers',
    url: 'Fancy_Spiralled_Tubers',

    imageDictionaryId: foods.fancySpiralledTubers.foodId,

    hp: 3,
    sanity: 15,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 15,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Fancy_Spiralled_Tubers`,

    ingredients: [
      [foods.potatoes.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },
  {
    recipesId: 17,
    name: 'Figatoni',
    url: 'Figatoni',

    imageDictionaryId: foods.figatoni.foodId,

    hp: 30,
    sanity: 15,
    hunger: 56.25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 30,

    perk: null,

    fandomLink: `${fandom}/Figatoni`,

    ingredients: [
      [foods.figs.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },
  {
    recipesId: 18,
    name: 'Figgy Frogwich',
    url: 'Figgy_Frogwich',

    imageDictionaryId: foods.figgyFrogwich.foodId,

    hp: 8,
    sanity: 10,
    hunger: 18.75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: `${fandom}/Figgy_Frogwich`,

    ingredients: [
      [foods.frogLeg.foodId, foods.figs.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 19,
    name: 'Figkabab',
    url: 'Figkabab',

    imageDictionaryId: foods.figgyFrogwich.foodId,

    hp: 20,
    sanity: 15,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 30,

    perk: null,

    fandomLink: `${fandom}/Figkabab`,

    ingredients: [
      [foods.figs.foodId, foods.twig.foodId, foods.meats.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 20,
    name: 'Fig-Stuffed Trunk',
    url: 'Fig-Stuffed_Trunk',

    imageDictionaryId: foods.figStuffedTrunk.foodId,

    hp: 60,
    sanity: 0,
    hunger: 56.25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 10,
    priority: 40,

    perk: null,

    fandomLink: `${fandom}/Fig-Stuffed_Trunk`,

    ingredients: [
      [foods.koalefantTrunks.foodId, foods.figs.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 21,
    name: 'Fish Tacos',
    url: 'Fish_Tacos',

    imageDictionaryId: foods.fishTacos.foodId,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Fish_Tacos`,

    ingredients: [
      [foods.corns.foodId, foods.fishes.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 22,
    name: 'Fishsticks',
    url: 'Fishsticks',

    imageDictionaryId: foods.fishsticks.foodId,

    hp: 40,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Fishsticks`,

    ingredients: [
      [foods.fishes.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipesId: 23,
    name: 'Fist Full of Jam',
    url: 'Fist_Full_of_Jam',

    imageDictionaryId: foods.fistFullofJam.foodId,

    hp: 3,
    sanity: 5,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 0,

    perk: null,

    fandomLink: `${fandom}/Fist_Full_of_Jam`,

    ingredients: [
      [foods.fruit.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.dragonFruit.foodId, foods.vegetables.foodId, foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipesId: 24,
    name: 'Flower Salad',
    url: 'Flower_Salad',

    imageDictionaryId: foods.flowerSalad.foodId,

    hp: 40,
    sanity: 5,
    hunger: 12.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Flower_Salad`,

    ingredients: [
      [foods.cactusFlower.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.filler.foodId],
      [foods.cactusFlower.foodId, foods.cactusFlower.foodId, foods.vegetables.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fruit.foodId, foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.twig.foodId, foods.sweetener.foodId],
    charactersLove: null,
  },
  {
    recipesId: 25,
    name: 'Froggle Bunwich',
    url: 'Froggle_Bunwich',

    imageDictionaryId: foods.froggleBunwich.foodId,

    hp: 20,
    sanity: 5,
    hunger: 27.5,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: null,

    fandomLink: `${fandom}/Froggle_Bunwich`,

    ingredients: [
      [foods.frogLeg.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.mandrake.foodId, foods.meats.foodId, foods.sweetener.foodId],
    charactersLove: null,
  },
  {
    recipesId: 26,
    name: 'Frozen Banana Daiquiri',
    url: 'Frozen_Banana_Daiquiri',

    imageDictionaryId: foods.frozenBananaDaiquiri.foodId,

    hp: 30,
    sanity: 15,
    hunger: 18.75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 1,

    perk: 'Lowers temperature by 15 degrees over 15 seconds',

    fandomLink: `${fandom}/Frozen_Banana_Daiquiri`,

    ingredients: [
      [foods.bananaCave.foodId, foods.ice.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipesId: 27,
    name: 'Fruit Medley',
    url: 'Fruit_Medley',

    imageDictionaryId: foods.fruitMedley.foodId,

    hp: 20,
    sanity: 5,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 0,

    perk: null,

    fandomLink: `${fandom}/Fruit_Medley`,

    ingredients: [
      [foods.fruit.foodId, foods.fruit.foodId, foods.fruit.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.dragonFruit.foodId, foods.vegetables.foodId],
    charactersLove: null,
  },
  {
    recipesId: 28,
    name: 'Guacamole',
    url: 'Guacamole',

    imageDictionaryId: foods.guacamole.foodId,

    hp: 20,
    sanity: 0,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: `${fandom}/Guacamole`,

    ingredients: [
      [foods.moleworm.foodId, foods.cactusFlesh.foodId, foods.filler.foodId, foods.filler.foodId],
      [foods.moleworm.foodId, foods.ripeStoneFruit.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fruit.foodId],
    charactersLove: null,
  },
  {
    recipesId: 29,
    name: 'Honey Ham',
    url: 'Honey_Ham',

    imageDictionaryId: foods.honeyHam.foodId,

    hp: 30,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 2,

    perk: null,

    fandomLink: `${fandom}/Honey_Ham`,

    ingredients: [
      [foods.meats.foodId, foods.meats.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.moleworm.foodId, foods.mandrake.foodId, foods.eggs.foodId],
    charactersLove: null,
  },
  {
    recipesId: 30,
    name: 'Honey Nuggets',
    url: 'Honey_Nuggets',

    imageDictionaryId: foods.honeyNuggets.foodId,

    hp: 20,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 2,

    perk: null,

    fandomLink: `${fandom}/Honey_Nuggets`,

    ingredients: [
      [foods.meats.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: Characters.Woodie.name,
  },
  {
    recipesId: 31,
    name: 'Ice Cream',
    url: 'Ice_Cream',

    imageDictionaryId: foods.iceCream.foodId,

    hp: 0,
    sanity: 50,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 3,
    priority: 10,

    perk: 'Lowers temperature by 15 degrees over 15 seconds.',

    fandomLink: `${fandom}/Ice_Cream`,

    ingredients: [
      [foods.ice.foodId, foods.dairyProduct.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.vegetables.foodId, foods.twig.foodId, foods.mandrake.foodId],
    charactersLove: Characters.Webber.name,
  }
];

export default recipes;
