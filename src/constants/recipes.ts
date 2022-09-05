import { EnumPerkType, IRecipe } from '@/models/recipes';

import { foods } from '@/constants/images';
import Characters from '@/constants/characters';

export const recipes: IRecipe[] = [
  {
    recipeId: 0,
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

    fandomLink: foods.amberosia.fandomLink,

    ingredients: [
      [foods.collected_dust.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 1,
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

    perk: { text:'Lowers temperature by 20 degrees for 5 minutes', type: EnumPerkType.Cooling },

    fandomLink: foods.asparagazpacho.fandomLink,

    ingredients: [
      [foods.asparaguses.foodId, foods.asparaguses.foodId, foods.ice.foodId, foods.ice.foodId],
      [foods.asparaguses.foodId, foods.asparaguses.foodId, foods.iceBream.foodId, foods.iceBream.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 2,
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

    fandomLink: foods.asparagusSoup.fandomLink,

    ingredients: [
      [foods.asparaguses.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.meats.foodId],
    charactersLove: null,
  },
  {
    recipeId: 3,
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

    fandomLink: foods.baconAndEggs.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.eggs.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [foods.vegetables.foodId],
    charactersLove: Characters.Wilson.name,
  },

  {
    recipeId: 4,
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

    perk: { text:'Lowers temperature by 10 degrees over 10 seconds.', type: EnumPerkType.Cooling },

    fandomLink: foods.bananaPop.fandomLink,

    ingredients: [
      [foods.banana.foodId, foods.ice.foodId, foods.twig.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },

  {
    recipeId: 5,
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

    fandomLink: foods.bananaShake.fandomLink,

    ingredients: [
      [foods.bananaCave.foodId, foods.bananaCave.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 6,
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

    fandomLink: foods.barnacleLinguine.fandomLink,

    ingredients: [
      [foods.barnacle.foodId, foods.barnacle.foodId, foods.vegetables.foodId, foods.vegetables.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 7,
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

    fandomLink: foods.barnacleNigiri.fandomLink,

    ingredients: [
      [foods.barnacle.foodId, foods.kelpFrond.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 8,
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

    fandomLink: foods.barnaclePita.fandomLink,

    ingredients: [
      [foods.barnacle.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 9,
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

    fandomLink: foods.beefyGreens.fandomLink,

    ingredients: [
      [foods.leafyMeats.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.vegetables.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 10,
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

    perk: { text:'Raises temperature by 5 degrees over 5 seconds', type: EnumPerkType.Heating },

    fandomLink: foods.bunnyStew.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.ice.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 11,
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

    fandomLink: foods.butterMuffin.fandomLink,

    ingredients: [
      [foods.butterflyWings.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fishes.foodId, foods.mandrake.foodId],
    charactersLove: Characters.WX78.name,
  },
  {
    recipeId: 12,
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

    fandomLink: foods.californiaRoll.fandomLink,

    ingredients: [
      [foods.fishes.foodId, foods.kelpFrond.foodId, foods.kelpFrond.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 13,
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

    perk: { text:'Lowers temperature by 10 degrees over 10 seconds', type: EnumPerkType.Cooling },

    fandomLink: foods.ceviche.fandomLink,

    ingredients: [
      [foods.fishes.foodId, foods.fishes.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 14,
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

    fandomLink: foods.creamyPotatoPuree.fandomLink,

    ingredients: [
      [foods.potatoes.foodId, foods.potatoes.foodId, foods.garlics.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 15,
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

    fandomLink: foods.dragonpie.fandomLink,

    ingredients: [
      [foods.dragonFruit.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.mandrake.foodId, foods.asparaguses.foodId],
    charactersLove: null,
  },
  {
    recipeId: 16,
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

    fandomLink: foods.fancySpiralledTubers.fandomLink,

    ingredients: [
      [foods.potatoes.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },
  {
    recipeId: 17,
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

    fandomLink: foods.figatoni.fandomLink,

    ingredients: [
      [foods.figs.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },
  {
    recipeId: 18,
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

    fandomLink: foods.figgyFrogwich.fandomLink,

    ingredients: [
      [foods.frogLeg.foodId, foods.figs.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 19,
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

    fandomLink: foods.figgyFrogwich.fandomLink,

    ingredients: [
      [foods.figs.foodId, foods.twig.foodId, foods.meats.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 20,
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

    fandomLink: foods.figStuffedTrunk.fandomLink,

    ingredients: [
      [foods.koalefantTrunks.foodId, foods.figs.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 21,
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

    fandomLink: foods.fishTacos.fandomLink,

    ingredients: [
      [foods.corns.foodId, foods.fishes.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 22,
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

    fandomLink: foods.fishsticks.fandomLink,

    ingredients: [
      [foods.fishes.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 23,
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

    fandomLink: foods.fistFullofJam.fandomLink,

    ingredients: [
      [foods.fruit.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.dragonFruit.foodId, foods.vegetables.foodId, foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 24,
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

    fandomLink: foods.flowerSalad.fandomLink,

    ingredients: [
      [foods.cactusFlower.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.filler.foodId],
      [foods.cactusFlower.foodId, foods.cactusFlower.foodId, foods.vegetables.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fruit.foodId, foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.twig.foodId, foods.sweetener.foodId],
    charactersLove: null,
  },
  {
    recipeId: 25,
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

    fandomLink: foods.froggleBunwich.fandomLink,

    ingredients: [
      [foods.frogLeg.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.mandrake.foodId, foods.meats.foodId, foods.sweetener.foodId],
    charactersLove: null,
  },
  {
    recipeId: 26,
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

    perk: { text:'Lowers temperature by 15 degrees over 15 seconds', type: EnumPerkType.Cooling },

    fandomLink: foods.frozenBananaDaiquiri.fandomLink,

    ingredients: [
      [foods.bananaCave.foodId, foods.ice.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 27,
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

    fandomLink: foods.fruitMedley.fandomLink,

    ingredients: [
      [foods.fruit.foodId, foods.fruit.foodId, foods.fruit.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.dragonFruit.foodId, foods.vegetables.foodId],
    charactersLove: null,
  },
  {
    recipeId: 28,
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

    fandomLink: foods.guacamole.fandomLink,

    ingredients: [
      [foods.moleworm.foodId, foods.cactusFlesh.foodId, foods.filler.foodId, foods.filler.foodId],
      [foods.moleworm.foodId, foods.ripeStoneFruit.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fruit.foodId],
    charactersLove: null,
  },
  {
    recipeId: 29,
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

    fandomLink: foods.honeyHam.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.meats.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.moleworm.foodId, foods.mandrake.foodId, foods.eggs.foodId],
    charactersLove: null,
  },
  {
    recipeId: 30,
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

    fandomLink: foods.honeyNuggets.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: Characters.Woodie.name,
  },
  {
    recipeId: 31,
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

    perk: { text:'Lowers temperature by 15 degrees over 15 seconds', type: EnumPerkType.Cooling },

    fandomLink: foods.iceCream.fandomLink,

    ingredients: [
      [foods.ice.foodId, foods.dairyProduct.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.vegetables.foodId, foods.twig.foodId, foods.mandrake.foodId],
    charactersLove: Characters.Webber.name,
  },
  {
    recipeId: 32,
    name: 'Jellybeans',
    url: 'Jellybeans',

    imageDictionaryId: foods.jellybeans.foodId,

    hp: 2, // todo 'initial + 120 over 2 minutes',
    sanity: 5,
    hunger: 0,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 50,
    perishTime: null,
    priority: 12,

    perk: { type: EnumPerkType.Healing, text: '120 over 2 minutes' },

    fandomLink: foods.jellybeans.fandomLink,

    ingredients: [
      [foods.royalJelly.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.monsterfoods.foodId, foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 33,
    name: 'Jelly_Salad',
    url: 'Jelly_Salad',

    imageDictionaryId: foods.jellySalad.foodId,

    hp: 0,
    sanity: 50,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 50,

    perk: null,

    fandomLink: foods.jellySalad.fandomLink,

    ingredients: [
      [foods.leafyMeats.foodId, foods.leafyMeats.foodId, foods.sweetener.foodId, foods.sweetener.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 34,
    name: 'Kabobs',
    url: 'Kabobs',

    imageDictionaryId: foods.kabobs.foodId,

    hp: 3,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 5,

    perk: null,

    fandomLink: foods.kabobs.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fishes.foodId, foods.mandrake.foodId, foods.moleworm.foodId],
    charactersLove: null,
  },
  {
    recipeId: 35,
    name: 'Mandrake_Soup',
    url: 'Mandrake_Soup',

    imageDictionaryId: foods.mandrakeSoup.foodId,

    hp: 100,
    sanity: 5,
    hunger: 150,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 60,
    perishTime: 6,
    priority: 10,

    perk: null,

    fandomLink: foods.mandrakeSoup.fandomLink,

    ingredients: [
      [foods.mandrake.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },

  {
    recipeId: 36,
    name: 'Meatballs',
    url: 'Meatballs',

    imageDictionaryId: foods.meatballs.foodId,

    hp: 3,
    sanity: 5,
    hunger: 62.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 15,
    perishTime: 10,
    priority: -1,

    perk: null,

    fandomLink: foods.meatballs.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.weevoleCarapace.foodId],
    charactersLove: null,
  },
  {
    recipeId: 37,
    name: 'Meaty Stew',
    url: 'Meaty_Stew',

    imageDictionaryId: foods.meatyStew.foodId,

    hp: 12,
    sanity: 5,
    hunger: 150,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 15,
    perishTime: 10,
    priority: 0,

    perk: null,

    fandomLink: foods.meatyStew.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.meats.foodId, foods.meats.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.sweetener.foodId, foods.eggs.foodId, foods.mandrake.foodId],
    charactersLove: null,
  },
  // {
  //   recipeId: 38,
  //   name: 'Milkmade_Hat',
  //   url: 'Milkmade_Hat',
  //
  //   imageDictionaryId: foods.Milkmade_Hat.foodId,
  //
  //   hp: 12,
  //   sanity: 5,
  //   hunger: 150,
  //
  //   isVegetable: false,
  //   isWarlySpecific: false,
  //
  //   cookTime: 15,
  //   perishTime: 10,
  //   priority: 0,
  //
  //   perk: null,
  //
  //   fandomLink: foods.Milkmade_Hat.fandomLink,
  //
  //   ingredients: [
  //     [foods.meats.foodId, foods.meats.foodId, foods.meats.foodId, foods.filler.foodId],
  //   ],
  //   exclude: [foods.twigs.foodId, foods.sweetener.foodId, foods.eggs.foodId, foods.mandrake.foodId],
  //   charactersLove: null,
  // },
  {
    recipeId: 39,
    name: 'Monster Lasagna',
    url: 'Monster_Lasagna',

    imageDictionaryId: foods.monsterLasagna.foodId,

    hp: -20,
    sanity: -20,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: foods.monsterLasagna.fandomLink,

    ingredients: [
      [foods.monsterfoods.foodId, foods.monsterfoods.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 40,
    name: 'Mushy Cake',
    url: 'Mushy_Cake',

    imageDictionaryId: foods.mushyCake.foodId,

    hp: 0,
    sanity: 10,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 55,

    perk: null,

    fandomLink: foods.mushyCake.fandomLink,

    ingredients: [
      [foods.moonShroom.foodId, foods.redCap.foodId, foods.blueCap.foodId, foods.greenCap.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 41,
    name: 'Leafy Meatloaf',
    url: 'Leafy_Meatloaf',

    imageDictionaryId: foods.leafyMeatloaf.foodId,

    hp: 8,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 20,
    priority: 25,

    perk: null,

    fandomLink: foods.leafyMeatloaf.fandomLink,

    ingredients: [
      [foods.leafyMeats.foodId, foods.leafyMeats.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 42,
    name: 'Pierogi',
    url: 'Pierogi',

    imageDictionaryId: foods.pierogi.foodId,

    hp: 40,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 20,
    priority: 5,

    perk: null,

    fandomLink: foods.pierogi.fandomLink,

    ingredients: [
      [foods.meats.foodId, foods.eggs.foodId, foods.vegetables.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.mandrake.foodId],
    charactersLove: null,
  },
  {
    recipeId: 43,
    name: 'Powdercake',
    url: 'Powdercake',
    imageDictionaryId: foods.powdercake.foodId,

    hp: -3,
    sanity: 0,
    hunger: 0,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 18750,
    priority: 10,

    perk: null,
    fandomLink: foods.powdercake.fandomLink,

    ingredients: [
      [foods.corns.foodId, foods.sweetener.foodId, foods.twig.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 44,
    name: 'Pumpkin Cookies',
    url: 'Pumpkin_Cookies',
    imageDictionaryId: foods.pumpkinCookie.foodId,

    hp: 0,
    sanity: 15,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 10,
    priority: 10,

    perk: null,

    fandomLink: foods.pumpkinCookie.fandomLink,

    ingredients: [
      [foods.pumpkins.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 45,
    name: 'Ratatouille',
    url: 'Ratatouille',

    imageDictionaryId: foods.ratatouille.foodId,

    hp: 3,
    sanity: 5,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 0,

    perk: null,

    fandomLink: foods.ratatouille.fandomLink,

    ingredients: [
      [foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.twig.foodId, foods.mandrake.foodId, foods.butterflyWings.foodId],
    charactersLove: null,
  },
  {
    recipeId: 46,
    name: 'Salsa Fresca',
    url: 'Salsa_Fresca',

    imageDictionaryId: foods.salsafresca.foodId,

    hp: 3,
    sanity: 33,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 20,

    perk: null,

    fandomLink: foods.salsafresca.fandomLink,

    ingredients: [
      [foods.tomaroots.foodId, foods.onions.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.inedible.foodId, foods.eggs.foodId],
    charactersLove: null,
  }
];

export default recipes;
