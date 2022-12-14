import { EnumPerkType, IRecipe } from '@/models/recipes';

import { foods } from '@/constants/images';
import Characters from '@/constants/characters';
import characters from '@/constants/characters';

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

    perk: [],

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

    perk: [{ text:'Lowers temperature by 20 degrees for 5 minutes', type: EnumPerkType.Cooling }],

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

    perk: [],

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

    perk: [],

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

    perk: [{ text:'Lowers temperature by 10 degrees over 10 seconds.', type: EnumPerkType.Cooling }],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [{ text:'Raises temperature by 5 degrees over 5 seconds', type: EnumPerkType.Heating }],

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

    perk: [],

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

    perk: [],

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

    perk: [{ text:'Lowers temperature by 10 degrees over 10 seconds', type: EnumPerkType.Cooling }],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [{ text:'Lowers temperature by 15 degrees over 15 seconds', type: EnumPerkType.Cooling }],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [{ text:'Lowers temperature by 15 degrees over 15 seconds', type: EnumPerkType.Cooling }],

    ingredients: [
      [foods.ice.foodId, foods.dairyProduct.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.fishes.foodId, foods.eggs.foodId, foods.vegetables.foodId, foods.twig.foodId, foods.mandrake.foodId],
    charactersLove: Characters.Webber.name,
  },
  {
    recipeId: 32,

    imageDictionaryId: foods.jellybeans.foodId,

    hp: 2,
    sanity: 5,
    hunger: 0,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 50,
    perishTime: null,
    priority: 12,

    perk: [{ type: EnumPerkType.Healing, text: '120 HP over 2 minutes' }],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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
  //   perk: [],
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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],

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

    perk: [],
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

    perk: [],

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

    perk: [],

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

    perk: [],

    ingredients: [
      [foods.tomaRoots.foodId, foods.onions.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.inedible.foodId, foods.eggs.foodId],
    charactersLove: null,
  },
  {
    recipeId: 47,

    imageDictionaryId: foods.seafoodGumbo.foodId,

    hp: 40,
    sanity: 20,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 10,
    priority: 10,

    perk: [],

    ingredients: [
      [foods.eels.foodId, foods.fishes.foodId, foods.fishes.foodId, foods.filler.foodId],
      [foods.eels.foodId, foods.eels.foodId, foods.fishes.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 48,
    imageDictionaryId: foods.soothingTea.foodId,

    hp: 3,
    sanity: 15,
    hunger: 0,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 3,
    priority: 1,

    perk: [
      { text: 'Increases temperature by 5 degrees over 5 seconds', type: EnumPerkType.Heating },
      { text: '30 sanity over 1 min', type: EnumPerkType.Sanity },
    ],

    ingredients: [
      [foods.forgetMeLots.foodId, foods.sweetener.foodId, foods.ice.foodId, foods.filler.foodId],
    ],
    exclude: [foods.vegetables.foodId, foods.inedible.foodId, foods.meats.foodId, foods.fishes.foodId, foods.monsterfoods.foodId, foods.eggs.foodId, foods.dairyProduct.foodId],
    charactersLove: null,
  },
  {
    recipeId: 49,
    imageDictionaryId: foods.stuffedEggplant.foodId,

    hp: 3,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 1,

    perk: [],

    ingredients: [
      [foods.eggplants.foodId, foods.vegetables.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 50,

    imageDictionaryId: foods.stuffedFishHeads.foodId,

    hp: 20,
    sanity: 0,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 3,
    priority: 25,

    perk: [],

    ingredients: [
      [foods.barnacle.foodId, foods.fishes.foodId, foods.fishes.foodId, foods.filler.foodId],
      [foods.barnacle.foodId, foods.barnacle.foodId, foods.fishes.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 51,

    imageDictionaryId: foods.stuffedPepperPoppers.foodId,

    hp: 30,
    sanity: -5,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 20,

    perk: [{ text: 'Increases temperature by 15 degrees over 15 seconds', type: EnumPerkType.Heating }],

    ingredients: [
      [foods.peppers.foodId, foods.meats.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 52,
    imageDictionaryId: foods.surfturf.foodId,

    hp: 60,
    sanity: 33,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 10,
    priority: 30,

    perk: [],

    ingredients: [
      [foods.meats.foodId, foods.meats.foodId, foods.fishes.foodId, foods.fishes.foodId],
      [foods.meats.foodId, foods.fishes.foodId, foods.fishes.foodId, foods.fishes.foodId],
    ],
    exclude: [foods.ice.foodId],
    charactersLove: characters.Wickerbottom.name,
  },
  {
    recipeId: 53,

    imageDictionaryId: foods.taffy.foodId,

    hp: -3,
    sanity: 15,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 15,
    priority: 10,

    perk: [],

    ingredients: [
      [foods.sweetener.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId],
    charactersLove: characters.Wanda.name,
  },
  {
    recipeId: 54,

    imageDictionaryId: foods.trailMix.foodId,

    hp: 30,
    sanity: 5,
    hunger: 12.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 10,

    perk: [],

    ingredients: [
      [foods.roastedBirchnut.foodId, foods.berries.foodId, foods.fruit.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.vegetables.foodId, foods.eggs.foodId, foods.dairyProduct.foodId],
    charactersLove: characters.Walter.name,
  },
  {
    recipeId: 55,

    imageDictionaryId: foods.turkeyDinner.foodId,

    hp: 20,
    sanity: 5,
    hunger: 75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 60,
    perishTime: 6,
    priority: 10,

    perk: [],

    ingredients: [
      [foods.drumstick.foodId, foods.drumstick.foodId, foods.meats.foodId, foods.vegetables.foodId],
      [foods.drumstick.foodId, foods.drumstick.foodId, foods.meats.foodId, foods.fruit.foodId],
    ],
    exclude: [],
    charactersLove: characters.Wigfrid.name,
  },
  {
    recipeId: 56,

    imageDictionaryId: foods.unagi.foodId,

    hp: 20,
    sanity: 5,
    hunger: 18.75,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 20,

    perk: [],

    ingredients: [
      [foods.eels.foodId, foods.kelpFrond.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 57,

    imageDictionaryId: foods.veggieBurger.foodId,

    hp: 30,
    sanity: 33,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 40,
    perishTime: 6,
    priority: 25,

    perk: [],

    ingredients: [
      [foods.leafyMeats.foodId, foods.onions.foodId, foods.vegetables.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 58,

    imageDictionaryId: foods.spicyVegetableStinger.foodId,

    hp: 3,
    sanity: 33,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 15,
    priority: 15,

    perk: [],

    ingredients: [
      [foods.asparaguses.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.ice.foodId],
      [foods.tomaRoots.foodId, foods.vegetables.foodId, foods.vegetables.foodId, foods.ice.foodId],
    ],
    exclude: [foods.meats.foodId, foods.eggs.foodId, foods.inedible.foodId],
    charactersLove: characters.Winona.name,
  },
  {
    recipeId: 59,

    imageDictionaryId: foods.waffles.foodId,

    hp: 60,
    sanity: 5,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 6,
    priority: 10,

    perk: [],

    ingredients: [
      [foods.butter.foodId, foods.eggs.foodId, foods.berries.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 60,

    imageDictionaryId: foods.wobsterBisque.foodId,

    hp: 60,
    sanity: 10,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 10,
    perishTime: 10,
    priority: 30,

    perk: [],

    ingredients: [
      [foods.wobster.foodId, foods.ice.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 61,

    imageDictionaryId: foods.wobsterDinner.foodId,

    hp: 60,
    sanity: 50,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: false,

    cookTime: 20,
    perishTime: 15,
    priority: 25,

    perk: [],

    ingredients: [
      [foods.wobster.foodId, foods.butter.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.ice.foodId],
    charactersLove: characters.Maxwell.name,
  },
  {
    recipeId: 62,

    imageDictionaryId: foods.boneBouillon.foodId,

    hp: 32,
    sanity: 5,
    hunger: 150,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 10,
    priority: 30,

    perk: [],

    ingredients: [
      [foods.boneShards.foodId, foods.boneShards.foodId, foods.onions.foodId, foods.filler.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 63,

    imageDictionaryId: foods.fishCordonBleu.foodId,

    hp: 20,
    sanity: -10,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 8,
    priority: 30,

    perk: [{ text: 'Makes the player immune to Wetness for the duration of 5 min.', type: EnumPerkType.Wetness }],

    ingredients: [
      [foods.fishes.foodId, foods.fishes.foodId, foods.frogLeg.foodId, foods.frogLeg.foodId],
      [foods.ice.foodId, foods.fishes.foodId, foods.frogLeg.foodId, foods.frogLeg.foodId],
    ],
    exclude: [foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 64,

    imageDictionaryId: foods.freshFruitCrepes.foodId,

    hp: 60,
    sanity: 15,
    hunger: 150,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 10,
    priority: 30,

    perk: [],

    ingredients: [
      [foods.fruit.foodId, foods.fruit.foodId, foods.butter.foodId, foods.honey.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 65,

    imageDictionaryId: foods.glowBerryMousse.foodId,

    hp: 3,
    sanity: 10,
    hunger: 37.5,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 20,
    perishTime: 8,
    priority: 30,

    perk: [{ text: 'Emits light upon consumption.', type: EnumPerkType.Light, }],

    ingredients: [
      [foods.lesserGlowBerry.foodId, foods.lesserGlowBerry.foodId, foods.fruit.foodId, foods.filler.foodId],
      [foods.glowBerry.foodId, foods.fruit.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 66,

    imageDictionaryId: foods.grimGalette.foodId,

    hp: 1,
    sanity: 5,
    hunger: 25,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 10,
    priority: 30,

    perk: [{ text: 'Swaps the player\'s current Health and Sanity.', type: EnumPerkType.Magic }],

    ingredients: [
      [foods.nightmareFuel.foodId, foods.nightmareFuel.foodId, foods.onions.foodId, foods.potatoes.foodId],
    ],
    exclude: [],
    charactersLove: null,
  },
  {
    recipeId: 67,

    imageDictionaryId: foods.hotDragonChiliSalad.foodId,

    hp: -3,
    sanity: 10,
    hunger: 25,

    isVegetable: true,
    isWarlySpecific: true,

    cookTime: 15,
    perishTime: 15,
    priority: 30,

    perk: [{ text: 'Increases temperature by 40 degrees for 5 minutes.', type: EnumPerkType.Heating }],

    ingredients: [
      [foods.dragonFruits.foodId, foods.peppers.foodId, foods.filler.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.twig.foodId, foods.eggs.foodId],
    charactersLove: null,
  },
  {
    recipeId: 68,

    imageDictionaryId: foods.moqueca.foodId,

    hp: 60,
    sanity: 33,
    hunger: 112.5,

    isVegetable: false,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 8,
    priority: 30,

    perk: [],

    ingredients: [
      [foods.fishes.foodId, foods.onions.foodId, foods.tomaRoots.foodId, foods.filler.foodId],
    ],
    exclude: [foods.twig.foodId, foods.inedible.foodId],
    charactersLove: null,
  },
  {
    recipeId: 69,

    imageDictionaryId: foods.moqueca.foodId,

    hp: 20,
    sanity: 15,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 10,
    priority: 30,

    perk: [],

    ingredients: [
      [foods.potatoes.foodId, foods.potatoes.foodId, foods.eggs.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId, foods.twig.foodId],
    charactersLove: null,
  },
  {
    recipeId: 70,

    imageDictionaryId: foods.voltGoatChaudFroid.foodId,

    hp: 3,
    sanity: 10,
    hunger: 37.5,

    isVegetable: true,
    isWarlySpecific: true,

    cookTime: 40,
    perishTime: 10,
    priority: 30,

    perk: [{ text: 'Turns damage caused by player into electrical damage for 5 minutes.', type: EnumPerkType.Fight }],

    ingredients: [
      [foods.voltGoatHorn.foodId, foods.sweetener.foodId, foods.sweetener.foodId, foods.filler.foodId],
    ],
    exclude: [foods.meats.foodId],
    charactersLove: null,
  }
];

export default recipes;
