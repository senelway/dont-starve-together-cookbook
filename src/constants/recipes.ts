import { EnumPerkType, IRecipe } from '@/models/recipes';

import { foods } from '@/constants/images';
import Characters from '@/constants/characters';

export const recipes: IRecipe[] = [
  {
    recipeId: 0,

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

    ingredients: [
      [foods.collected_dust.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 1,

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

    ingredients: [
      [foods.asparaguses.foodId, foods.asparaguses.foodId, foods.ice.foodId, foods.ice.foodId],
      [foods.asparaguses.foodId, foods.asparaguses.foodId, foods.iceBream.foodId, foods.iceBream.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 2,

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

    ingredients: [
      [foods.asparaguses.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.meats.foodId],
    charactersLove: null,
  },
  {
    recipeId: 3,

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

    ingredients: [
      [foods.meats.foodId, foods.eggs.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [foods.vegetables.foodId],
    charactersLove: Characters.Wilson.name,
  },

  {
    recipeId: 4,

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

    ingredients: [
      [foods.banana.foodId, foods.ice.foodId, foods.twig.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },

  {
    recipeId: 5,

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

    ingredients: [
      [foods.bananaCave.foodId, foods.bananaCave.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 6,

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

    ingredients: [
      [foods.barnacle.foodId, foods.barnacle.foodId, foods.vegetables.foodId, foods.vegetables.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 7,

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

    ingredients: [
      [foods.barnacle.foodId, foods.kelpFrond.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 8,

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

    ingredients: [
      [foods.barnacle.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 9,

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

    ingredients: [
      [foods.leafyMeats.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.vegetables.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 10,

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

    ingredients: [
      [foods.meats.foodId, foods.ice.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 11,

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

    ingredients: [
      [foods.butterflyWings.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fishes.foodId, foods.mandrake.foodId],
    charactersLove: Characters.WX78.name,
  },
  {
    recipeId: 12,

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

    ingredients: [
      [foods.fishes.foodId, foods.kelpFrond.foodId, foods.kelpFrond.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 13,

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

    ingredients: [
      [foods.fishes.foodId, foods.fishes.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 14,

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

    ingredients: [
      [foods.potatoes.foodId, foods.potatoes.foodId, foods.garlics.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 15,

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

    ingredients: [
      [foods.dragonFruit.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.mandrake.foodId, foods.asparaguses.foodId],
    charactersLove: null,
  },
  {
    recipeId: 16,

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

    ingredients: [
      [foods.potatoes.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },
  {
    recipeId: 17,

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

    ingredients: [
      [foods.figs.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId],
    charactersLove: null,
  },
  {
    recipeId: 18,

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

    ingredients: [
      [foods.frogLeg.foodId, foods.figs.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 19,

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

    ingredients: [
      [foods.figs.foodId, foods.twig.foodId, foods.meats.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 20,

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

    ingredients: [
      [foods.koalefantTrunks.foodId, foods.figs.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 21,

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

    ingredients: [
      [foods.corns.foodId, foods.fishes.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 22,

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

    ingredients: [
      [foods.fishes.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 23,

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

    ingredients: [
      [foods.fruit.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.dragonFruit.foodId, foods.vegetables.foodId, foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 24,

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

    ingredients: [
      [foods.cactusFlower.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.filler.foodId],
      [foods.cactusFlower.foodId, foods.cactusFlower.foodId, foods.vegetables.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fruit.foodId, foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.twig.foodId, foods.sweetener.foodId],
    charactersLove: null,
  },
  {
    recipeId: 25,

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

    ingredients: [
      [foods.frogLeg.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.mandrake.foodId, foods.meats.foodId, foods.sweetener.foodId],
    charactersLove: null,
  },
  {
    recipeId: 26,

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

    ingredients: [
      [foods.bananaCave.foodId, foods.ice.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 27,

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

    ingredients: [
      [foods.fruit.foodId, foods.fruit.foodId, foods.fruit.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.dragonFruit.foodId, foods.vegetables.foodId],
    charactersLove: null,
  },
  {
    recipeId: 28,

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

    ingredients: [
      [foods.moleworm.foodId, foods.cactusFlesh.foodId, foods.filler.foodId, foods.filler.foodId],
      [foods.moleworm.foodId, foods.ripeStoneFruit.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fruit.foodId],
    charactersLove: null,
  },
  {
    recipeId: 29,

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

    ingredients: [
      [foods.meats.foodId, foods.meats.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.moleworm.foodId, foods.mandrake.foodId, foods.eggs.foodId],
    charactersLove: null,
  },
  {
    recipeId: 30,

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

    ingredients: [
      [foods.meats.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: Characters.Woodie.name,
  },
  {
    recipeId: 31,

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

    ingredients: [
      [foods.ice.foodId, foods.dairyProduct.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.vegetables.foodId, foods.twig.foodId, foods.mandrake.foodId],
    charactersLove: Characters.Webber.name,
  },
  {
    recipeId: 32,

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

    ingredients: [
      [foods.royalJelly.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.monsterfoods.foodId, foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 33,

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

    ingredients: [
      [foods.leafyMeats.foodId, foods.leafyMeats.foodId, foods.sweetener.foodId, foods.sweetener.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 34,

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

    ingredients: [
      [foods.meats.foodId, foods.twig.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.fishes.foodId, foods.mandrake.foodId, foods.moleworm.foodId],
    charactersLove: null,
  },
  {
    recipeId: 35,

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

    ingredients: [
      [foods.mandrake.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },

  {
    recipeId: 36,

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

    ingredients: [
      [foods.meats.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.weevoleCarapace.foodId],
    charactersLove: null,
  },
  {
    recipeId: 37,

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

    ingredients: [
      [foods.meats.foodId, foods.meats.foodId, foods.meats.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.sweetener.foodId, foods.eggs.foodId, foods.mandrake.foodId],
    charactersLove: null,
  },
  // {
  //   recipeId: 38,
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
  //   ingredients: [
  //     [foods.meats.foodId, foods.meats.foodId, foods.meats.foodId, foods.filler.foodId],
  //   ],
  //   exclude: [foods.twigs.foodId, foods.sweetener.foodId, foods.eggs.foodId, foods.mandrake.foodId],
  //   charactersLove: null,
  // },
  {
    recipeId: 39,

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

    ingredients: [
      [foods.monsterfoods.foodId, foods.monsterfoods.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 40,

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

    ingredients: [
      [foods.moonShroom.foodId, foods.redCap.foodId, foods.blueCap.foodId, foods.greenCap.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 41,

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

    ingredients: [
      [foods.leafyMeats.foodId, foods.leafyMeats.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 42,

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

    ingredients: [
      [foods.meats.foodId, foods.eggs.foodId, foods.vegetables.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.mandrake.foodId],
    charactersLove: null,
  },
  {
    recipeId: 43,
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
    ingredients: [
      [foods.corns.foodId, foods.sweetener.foodId, foods.twig.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 44,
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

    ingredients: [
      [foods.pumpkins.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 45,

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

    ingredients: [
      [foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.twig.foodId, foods.mandrake.foodId, foods.butterflyWings.foodId],
    charactersLove: null,
  },
  {
    recipeId: 46,

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

    ingredients: [
      [foods.tomaroots.foodId, foods.onions.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.inedible.foodId, foods.eggs.foodId],
    charactersLove: null,
  }
];

export default recipes;
