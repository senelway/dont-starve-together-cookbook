import asparaguses from '/src/assets/img/recipes/Asparaguses.png';
import asparagusSoup from '/src/assets/img/recipes/Asparagus_Soup.png';
import amberosia from '/src/assets/img/recipes/Amberosia.png';
import baconAndEggs from '/src/assets/img/recipes/Bacon_and_Eggs.png';
import bananaPop from '/src/assets/img/recipes/Banana_Pop.png';
import bananaShake from '/src/assets/img/recipes/Banana_Shake.png';
import barnacleNigiri from '/src/assets/img/recipes/Barnacle_Nigiri.png';
import barnaclePita from '/src/assets/img/recipes/Barnacle_Pita.png';
import beefyGreens from '/src/assets/img/recipes/Beefy_Greens.png';
import bunnyStew from '/src/assets/img/recipes/Bunny_Stew.png';
import butterMuffin from '/src/assets/img/recipes/Butter_Muffin.png';
import californiaRoll from '/src/assets/img/recipes/California_Roll.png';
import ceviche from '/src/assets/img/recipes/Ceviche.png';
import creamyPotatoPuree from '/src/assets/img/recipes/Creamy_Potato_Puree.png';
import dragonpie from '/src/assets/img/recipes/Dragonpie.png';
import fancySpiralledTubers from '/src/assets/img/recipes/Fancy_Spiralled_Tubers.png';
import figatoni from '/src/assets/img/recipes/Figatoni.png';
import figgyFrogwich from '/src/assets/img/recipes/Figgy_Frogwich.png';
import figkabab from '/src/assets/img/recipes/Figkabab.png';
import figStuffedTrunk from '/src/assets/img/recipes/Fig-Stuffed_Trunk.png';
import fishTacos from '/src/assets/img/recipes/Fish_Tacos.png';
import fishsticks from '/src/assets/img/recipes/Fishsticks.png';
import fistFullofJam from '/src/assets/img/recipes/Fist_Full_of_Jam.png';
import flowerSalad from '/src/assets/img/recipes/Flower_Salad.png';
import froggleBunwich from '/src/assets/img/recipes/Froggle_Bunwich.png';
import frozenBananaDaiquiri from '/src/assets/img/recipes/Frozen_Banana_Daiquiri.png';
import fruitMedley from '/src/assets/img/recipes/Fruit_Medley.png';
import guacamole from '/src/assets/img/recipes/Guacamole.png';
import honeyHam from '/src/assets/img/recipes/Honey_Ham.png';
import honeyNuggets from '/src/assets/img/recipes/Honey_Nuggets.png';
import iceCream from '/src/assets/img/recipes/Ice_Cream.png';

import dairyProduct from '/src/assets/img/recipes/Dairy_product.png';
import cactusFlesh from '/src/assets/img/recipes/Cactus_Flesh.png';
import ripeStoneFruit from '/src/assets/img/recipes/Ripe_Stone_Fruit.png';
import moleworm from '/src/assets/img/recipes/Moleworm.png';
import sweetener from '/src/assets/img/recipes/Sweetener.png';
import corns from '/src/assets/img/recipes/Corns.png';
import cactusFlower from '/src/assets/img/recipes/Cactus_Flower.png';
import fruit from '/src/assets/img/recipes/Fruit.png';
import koalefantTrunks from '/src/assets/img/recipes/Koalefant_Trunks.png';
import dragonFruit from '/src/assets/img/recipes/Dragon_Fruit.png';
import frogLeg from '/src/assets/img/recipes/Frog_Leg.png';
import vegetables from '/src/assets/img/recipes/Vegetables.png';
import figs from '/src/assets/img/recipes/Figs.png';
import meats from '/src/assets/img/recipes/Meats.png';
import filler from '/src/assets/img/recipes/Filler.png';
import twig from '/src/assets/img/recipes/Twigs.png';
import eggs from '/src/assets/img/recipes/Eggs.png';
import fishes from '/src/assets/img/recipes/Fishes.png';
import ice from '/src/assets/img/recipes/Ice.png';
import mandrake from '/src/assets/img/recipes/Mandrake.png';
import inedible from '/src/assets/img/recipes/Inedible.png';
import potatoes from '/src/assets/img/recipes/Potatoes.png';
import garlics from '/src/assets/img/recipes/Garlics.png';

import bananaCave from '/src/assets/img/recipes/Cave_Bananas.png';
import butterflyWings from '/src/assets/img/recipes/Butterfly_Wings.png';
import leafyMeats from '/src/assets/img/recipes/Leafy_Meats.png';
import barnacle from '/src/assets/img/recipes/Barnacle.png';
import barnacleLinguine from '/src/assets/img/recipes/Barnacle_Linguine.png';
import collected_dust from '/src/assets/img/recipes/Collected_Dust.png';
import asparagazpacho from '/src/assets/img/recipes/Asparagazpacho.png';
import banana from '/src/assets/img/recipes/Banana.png';
import iceBream from '/src/assets/img/recipes/Ice_Bream.png';
import kelpFrond from '/src/assets/img/recipes/Kelp_Frond.png';

import { fandom } from '@/constants/utility';

import { EnumFoodType, IFood } from '@/models/recipes';

export const foods: { [s: string]: IFood } = {
  asparagazpacho: { foodId: 'asparagazpacho', name: 'Asparagazpacho', fandomLink: `${fandom}/Asparagazpacho`, img: asparagazpacho, type: EnumFoodType.Dish },
  asparaguses: { foodId: 'asparaguses', name: 'Asparaguses', fandomLink: `${fandom}/Asparaguses`, img: asparaguses, type: EnumFoodType.Dish },
  asparagusSoup: { foodId: 'asparagusSoup', name: 'Asparagus soup', fandomLink: `${fandom}/Asparagus_soup`, img: asparagusSoup, type: EnumFoodType.Dish },
  amberosia: { foodId: 'amberosia', name: 'Amberosia', fandomLink: `${fandom}/Amberosia`, img: amberosia, type: EnumFoodType.Dish },
  baconAndEggs: { foodId: 'baconAndEggs', name: 'Bacon and eggs', fandomLink: `${fandom}/Bacon_and_eggs`, img: baconAndEggs, type: EnumFoodType.Dish },
  bananaPop: { foodId: 'bananaPop', name: 'Banana pop', fandomLink: `${fandom}/Banana_pop`, img: bananaPop, type: EnumFoodType.Dish },
  bananaShake: { foodId: 'bananaShake', name: 'Banana shake', fandomLink: `${fandom}/Banana_shake`, img: bananaShake, type: EnumFoodType.Dish },
  barnacleNigiri: { foodId: 'barnacleNigiri', name: 'Barnacle Nigiri', fandomLink: `${fandom}/Barnacle_nigiri`, img: barnacleNigiri, type: EnumFoodType.Dish },
  barnaclePita: { foodId: 'barnaclePita', name: 'Barnacle Pita', fandomLink: `${fandom}/Barnacle_Pita`, img: barnaclePita, type: EnumFoodType.Dish },
  beefyGreens: { foodId: 'beefyGreens', name: 'Beefy Greens', fandomLink: `${fandom}/Beefy_Greens`, img: beefyGreens, type: EnumFoodType.Dish },
  bunnyStew: { foodId: 'bunnyStew', name: 'Bunny Stew', fandomLink: `${fandom}/Bunny_Stew`, img: bunnyStew, type: EnumFoodType.Dish },
  butterMuffin: { foodId: 'butterMuffin', name: 'Butter Muffin', fandomLink: `${fandom}/Butter_Muffin`, img: butterMuffin, type: EnumFoodType.Dish },
  californiaRoll: { foodId: 'californiaRoll', name: 'California Roll', fandomLink: `${fandom}/California_Roll`, img: californiaRoll, type: EnumFoodType.Dish },
  ceviche: { foodId: 'ceviche', name: 'Ceviche', fandomLink: `${fandom}/Ceviche`, img: ceviche, type: EnumFoodType.Dish },
  creamyPotatoPuree: { foodId: 'creamyPotatoPuree', name: 'Creamy Potato Puree', fandomLink: `${fandom}/Creamy_Potato_Puree`, img: creamyPotatoPuree, type: EnumFoodType.Dish },
  dragonpie: { foodId: 'dragonpie', name: 'Dragonpie', fandomLink: `${fandom}/Dragonpie`, img: dragonpie, type: EnumFoodType.Dish },
  fancySpiralledTubers: { foodId: 'fancySpiralledTubers', name: 'Fancy Spiralled Tubers', fandomLink: `${fandom}/Fancy_Spiralled_Tubers`, img: fancySpiralledTubers, type: EnumFoodType.Dish },
  figatoni: { foodId: 'figatoni', name: 'Figatoni', fandomLink: `${fandom}/Figatoni`, img: figatoni, type: EnumFoodType.Dish },
  figgyFrogwich: { foodId: 'figgyFrogwich', name: 'Figgy Frogwich', fandomLink: `${fandom}/Figgy_Frogwich`, img: figgyFrogwich, type: EnumFoodType.Dish },
  figkabab: { foodId: 'figkabab', name: 'Figkabab', fandomLink: `${fandom}/Figkabab`, img: figkabab, type: EnumFoodType.Dish },
  figStuffedTrunk: { foodId: 'figStuffedTrunk', name: 'Fig Stuffed Trunk', fandomLink: `${fandom}/Fig_Stuffed_Trunk`, img: figStuffedTrunk, type: EnumFoodType.Dish },
  fishTacos: { foodId: 'fishTacos', name: 'FishTacos', fandomLink: `${fandom}FishTacos`, img: fishTacos, type: EnumFoodType.Dish },
  fishsticks: { foodId: 'fishsticks', name: 'Fishsticks', fandomLink: `${fandom}/Fishsticks`, img: fishsticks, type: EnumFoodType.Dish },
  fistFullofJam: { foodId: 'fistFullofJam', name: 'Fist Fullof Jam', fandomLink: `${fandom}/Fist_Fullof_Jam`, img: fistFullofJam, type: EnumFoodType.Dish },
  flowerSalad: { foodId: 'flowerSalad', name: 'Flower Salad', fandomLink: `${fandom}/Flower_Salad`, img: flowerSalad, type: EnumFoodType.Dish },
  froggleBunwich: { foodId: 'froggleBunwich', name: 'Froggle Bunwich', fandomLink: `${fandom}/Froggle_Bunwich`, img: froggleBunwich, type: EnumFoodType.Dish },
  frozenBananaDaiquiri: { foodId: 'frozenBananaDaiquiri', name: 'Frozen Banana Daiquiri', fandomLink: `${fandom}/Frozen_Banana_Daiquiri`, img: frozenBananaDaiquiri, type: EnumFoodType.Dish },
  fruitMedley: { foodId: 'fruitMedley', name: 'Fruit Medley', fandomLink: `${fandom}/Fruit_Medley`, img: fruitMedley, type: EnumFoodType.Dish },
  guacamole: { foodId: 'guacamole', name: 'Guacamole', fandomLink: `${fandom}/Guacamole`, img: guacamole, type: EnumFoodType.Dish },
  honeyHam: { foodId: 'honeyHam', name: 'Honey Ham', fandomLink: `${fandom}/Honey_Ham`, img: honeyHam, type: EnumFoodType.Dish },
  honeyNuggets: { foodId: 'honeyNuggets', name: 'Honey Nuggets', fandomLink: `${fandom}/Honey_Nuggets`, img: honeyNuggets, type: EnumFoodType.Dish },
  iceCream: { foodId: 'iceCream', name: 'Ice Cream', fandomLink: `${fandom}/Ice_Cream`, img: iceCream, type: EnumFoodType.Dish },

  dairyProduct: { foodId: 'dairyProduct', name: 'Dairy Product', fandomLink: `${fandom}/Dairy_Product`, img: dairyProduct, type: EnumFoodType.Ingredient },
  cactusFlesh: { foodId: 'cactusFlesh', name: 'Cactus Flesh', fandomLink: `${fandom}/Cactus_Flesh`, img: cactusFlesh, type: EnumFoodType.Ingredient },
  ripeStoneFruit: { foodId: 'ripeStoneFruit', name: 'Ripe Stone Fruit', fandomLink: `${fandom}/Ripe_Stone_Fruit`, img: ripeStoneFruit, type: EnumFoodType.Ingredient },
  moleworm: { foodId: 'moleworm', name: 'Moleworm', fandomLink: `${fandom}/Moleworm`, img: moleworm, type: EnumFoodType.Ingredient },
  sweetener: { foodId: 'sweetener', name: 'Sweetener', fandomLink: `${fandom}/Sweetener`, img: sweetener, type: EnumFoodType.Ingredient },
  corns: { foodId: 'corns', name: 'Corns', fandomLink: `${fandom}/Corns`, img: corns, type: EnumFoodType.Ingredient },
  cactusFlower: { foodId: 'cactusFlower', name: 'Cactus Flower', fandomLink: `${fandom}/Cactus_Flower`, img: cactusFlower, type: EnumFoodType.Ingredient },
  fruit: { foodId: 'fruit', name: 'Fruit', fandomLink: `${fandom}/Fruit`, img: fruit, type: EnumFoodType.Ingredient },
  koalefantTrunks: { foodId: 'koalefantTrunks', name: 'Koalefant Trunks', fandomLink: `${fandom}/Koalefant_Trunks`, img: koalefantTrunks, type: EnumFoodType.Ingredient },
  dragonFruit: { foodId: 'dragonFruit', name: 'Dragon Fruit', fandomLink: `${fandom}/Dragon_Fruit`, img: dragonFruit, type: EnumFoodType.Ingredient },
  frogLeg: { foodId: 'frogLeg', name: 'Frog Leg', fandomLink: `${fandom}/Frog_Leg`, img: frogLeg, type: EnumFoodType.Ingredient },
  vegetables: { foodId: 'vegetables', name: 'Vegetables', fandomLink: `${fandom}/Vegetables`, img: vegetables, type: EnumFoodType.Ingredient },
  figs: { foodId: 'figs', name: 'Figs', fandomLink: `${fandom}/Figs`, img: figs, type: EnumFoodType.Ingredient },
  meats: { foodId: 'meats', name: 'Meats', fandomLink: `${fandom}/Meats`, img: meats, type: EnumFoodType.Ingredient },
  filler: { foodId: 'filler', name: 'Filler', fandomLink: `${fandom}/Filler`, img: filler, type: EnumFoodType.Filler },
  twig: { foodId: 'twig', name: 'Twig', fandomLink: `${fandom}/Twig`, img: twig, type: EnumFoodType.Ingredient },
  eggs: { foodId: 'eggs', name: 'Eggs', fandomLink: `${fandom}/Eggs`, img: eggs, type: EnumFoodType.Ingredient },
  fishes: { foodId: 'fishes', name: 'Fishes', fandomLink: `${fandom}/Fishes`, img: fishes, type: EnumFoodType.Ingredient },
  ice: { foodId: 'ice', name: 'Ice', fandomLink: `${fandom}/Ice`, img: ice, type: EnumFoodType.Ingredient },
  mandrake: { foodId: 'mandrake', name: 'Mandrake', fandomLink: `${fandom}/Mandrake`, img: mandrake, type: EnumFoodType.Ingredient },
  inedible: { foodId: 'inedible', name: 'Inedible', fandomLink: `${fandom}/Inedible`, img: inedible, type: EnumFoodType.Ingredient },
  potatoes: { foodId: 'potatoes', name: 'Potatoes', fandomLink: `${fandom}/Potatoes`, img: potatoes, type: EnumFoodType.Ingredient },
  garlics: { foodId: 'garlics', name: 'Garlics', fandomLink: `${fandom}/Garlics`, img: garlics, type: EnumFoodType.Ingredient },

  bananaCave: { foodId: 'bananaCave', name: 'Banana Cave', fandomLink: `${fandom}/Banana_Cav`, img: bananaCave, type: EnumFoodType.Ingredient },
  butterflyWings: { foodId: 'butterflyWings', name: 'Butterfly Wings', fandomLink: `${fandom}/Butterfly_Wings`, img: butterflyWings, type: EnumFoodType.Ingredient },
  leafyMeats: { foodId: 'leafyMeats', name: 'Leafy Meats', fandomLink: `${fandom}/Leafy_Meats`, img: leafyMeats, type: EnumFoodType.Ingredient },
  barnacle: { foodId: 'barnacle', name: 'Barnacle', fandomLink: `${fandom}/Barnacle`, img: barnacle, type: EnumFoodType.Ingredient },
  barnacleLinguine: { foodId: 'barnacleLinguine', name: 'Barnacle Linguine', fandomLink: `${fandom}/Barnacle_Linguine`, img: barnacleLinguine, type: EnumFoodType.Ingredient },
  collected_dust: { foodId: 'collected_dust', name: 'Collected dust', fandomLink: `${fandom}/Collected_Dust`, img: collected_dust, type: EnumFoodType.Ingredient },
  banana: { foodId: 'banana', name: 'Banana', fandomLink: `${fandom}/Banana`, img: banana, type: EnumFoodType.Ingredient },
  iceBream: { foodId: 'iceBream', name: 'Ice Bream', fandomLink: `${fandom}/Ice_Bream`, img: iceBream, type: EnumFoodType.Ingredient },
  kelpFrond: { foodId: 'kelpFrond', name: 'kelp Frond', fandomLink: `${fandom}/Kelp_Frond`, img: kelpFrond, type: EnumFoodType.Ingredient },
};
